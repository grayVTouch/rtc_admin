<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 18:38
 */

namespace App\Http\Customize\Admin\Action;


use function Admin\admin_config;
use function Admin\parse_order;
use function Admin\user;
use App\Http\Controllers\Admin\Auth;
use App\Http\Customize\Admin\Model\PushModel;
use App\Http\Customize\Admin\Model\PushReadStatusModel;
use App\Http\Customize\Admin\Model\UserModel;
use App\Http\Customize\Util\RTCUtil;
use function core\array_unit;
use Core\Lib\Category;
use function core\obj_to_array;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PushAction extends Action
{
    public static function list(Auth $auth , array $param)
    {
        $order = parse_order($param['order']);
        $limit = empty($param['limit']) ? admin_config('app.limit') : $param['limit'];
        $res = PushModel::list($param , $order , $limit);
        return self::success($res);
    }

    public static function del(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请提供待删除的项目');
        }
        try {
            DB::beginTransaction();
            PushModel::delByIds($id_list);
            PushReadStatusModel::delByPushIds($id_list);
            DB::commit();
            return self::success();
        } catch(Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public static function edit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'push_type'  => 'required' ,
            'title'  => 'required' ,
            'type'  => 'required' ,
            'content'  => 'required' ,
            'role'  => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 必须');
        }
        $res = PushModel::findById($param['id']);
        if (empty($res)) {
            return self::error('未找到id对应记录' , 404);
        }
        $push_type_for_user = admin_config('business.push_type_for_user');
        if (!in_array($param['push_type'] , $push_type_for_user)) {
            return self::error([
                'push_type' => '不支持的 push_type，当前受支持的 push_type 有：' . implode($push_type_for_user , ',') ,
            ] , -400);
        }
        if ($param['push_type'] == 'multiple') {
            $role_for_push = admin_config('business.role_for_push');
            if (!in_array($param['role'] , $role_for_push)) {
                return self::error([
                    'role' => '不支持的 role ，当前受支持的 role 有：' . implode($role_for_push , ',') ,
                ] , -400);
            }
            if ($param['role'] == 'designation') {
                if (empty($param['user_id'])) {
                    return self::error([
                        'user_id' => '请提供推送用户' ,
                    ] , -400);
                }
                // 检查推送的用户是否都是平台真实存在的用户
                $user_ids = explode(',' , $param['user_id']);
                foreach ($user_ids as $v)
                {
                    $user = UserModel::findById($v);
                    if (empty($user)) {
                        return self::error([
                            'user_id' => '体哦概念股的用户id中包含平台不存在的用户，请重新选择用户' ,
                        ] , -400);
                    }
                }
            }
        } else {
            if ($param['user_id'] == '') {
                return self::error([
                    'user_id' => 'user_id is required' ,
                ] , -400);
            }
            $user = UserModel::findById($param['user_id']);
            if (empty($user)) {
                return self::error([
                    'user_id' => '提供的用户id中包含平台不存在的用户，请重新选择用户' ,
                ] , -400);
            }
        }
        $push_type_for_push = admin_config('business.push_type_for_push');
        if (!in_array($param['type'] , $push_type_for_push)) {
            return self::error([
                'type' => '不支持的 push_type ，当前受支持的 type 有：' . implode($push_type_for_push , ',') ,
            ] , -400);
        }
        PushModel::updateById($param['id'] , array_unit($param , [
            'push_type' ,
            'user_id' ,
            'role' ,
            'type' ,
            'title' ,
            'content' ,
            'desc' ,
        ]));
        return self::success();
    }

    public static function add(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'push_type'  => 'required' ,
            'title'  => 'required' ,
            'type'  => 'required' ,
            'content'  => 'required' ,
            'role'  => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $push_type_for_user = admin_config('business.push_type_for_user');
        if (!in_array($param['push_type'] , $push_type_for_user)) {
            return self::error([
                'push_type' => '不支持的 push_type，当前受支持的 push_type 有：' . implode($push_type_for_user , ',') ,
            ] , -400);
        }
        if ($param['push_type'] == 'multiple') {
            $role_for_push = admin_config('business.role_for_push');
            if (!in_array($param['role'] , $role_for_push)) {
                return self::error([
                    'role' => '不支持的 role ，当前受支持的 role 有：' . implode($role_for_push , ',') ,
                ] , -400);
            }
            if ($param['role'] == 'designation') {
                if (empty($param['user_id'])) {
                    return self::error([
                        'user_id' => '请提供推送用户' ,
                    ] , -400);
                }
                // 检查推送的用户是否都是平台真实存在的用户
                $user_ids = explode(',' , $param['user_id']);
                foreach ($user_ids as $v)
                {
                    $user = UserModel::findById($v);
                    if (empty($user)) {
                        return self::error([
                            'user_id' => '提供的用户id中包含平台不存在的用户，请重新选择用户' ,
                        ] , -400);
                    }
                }
            }
        } else {
            if ($param['user_id'] == '') {
                return self::error([
                    'user_id' => 'user_id is required' ,
                ] , -400);
            }
            $user = UserModel::findById($param['user_id']);
            if (empty($user)) {
                return self::error([
                    'user_id' => '提供的用户id中包含平台不存在的用户，请重新选择用户' ,
                ] , -400);
            }
        }
        $push_type_for_push = admin_config('business.push_type_for_push');
        if (!in_array($param['type'] , $push_type_for_push)) {
            return self::error([
                'type' => '不支持的 push_type ，当前受支持的 type 有：' . implode($push_type_for_push , ',') ,
            ] , -400);
        }
        $param['identifier'] = admin_config('app.identifier');
        $id = PushModel::insertGetId(array_unit($param , [
            'push_type' ,
            'user_id' ,
            'role' ,
            'type' ,
            'title' ,
            'content' ,
            'desc' ,
            'identifier' ,
        ]));
        return self::success($id);
    }

    public static function detail(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id'    => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $res = PushModel::findById($param['id']);
        if (empty($res)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        return self::success($res);
    }

    public static function push(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id'    => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $m = PushModel::findById($param['id']);
        if (empty($m)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        $res = RTCUtil::push([
            'identifier' => $m->identifier ,
            'push_type' => $m->push_type ,
            'user_id'   => $m->user_id ,
            'role'      => $m->role ,
            'type'      => $m->type ,
            'title'     => $m->title ,
            'desc'      => $m->desc ,
            'content'   => $m->content ,
            // 比较特殊，第三方认证的标识符
            'unique_code' => user()->id_for_rtc
        ]);
        if ($res['code'] != 0) {
            return self::error($res['data'] , 500);
        }
        return self::success();
    }
}