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
use App\Http\Customize\Admin\Model\AdminModel;
use App\Http\Customize\Admin\Model\RouteModel;
use App\Http\Customize\Util\RTCUtil;
use function core\array_unit;
use Core\Lib\Hash;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AdminAction extends Action
{
    public static function info(Auth $auth , array $param)
    {
        $res = [
            'route' => RouteModel::getAll() ,
            'user'  => user() ,
            'os'    => admin_config('app.os')
        ];
        return self::success($res);
    }

    public static function list(Auth $auth , array $param)
    {
        $order = parse_order($param['order']);
        $limit = empty($param['limit']) ? admin_config('app.limit') : $param['limit'];
        $res = AdminModel::list($param , $order , $limit);
        return self::success($res);
    }

    // 删除用户
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
            return self::error('请提供待删除的用户');
        }
        try {
            DB::beginTransaction();
            foreach ($id_list as $v)
            {
                $user = AdminModel::findById($v);
                if (empty($user)) {
                    continue ;
                }
                if ($user->is_root == 1) {
                    DB::rollBack();
                    return self::error('您没有权限删除 root 用户' , 403);
                }
                AdminModel::delById($v);
                if (admin_config('app.enable_rtc')) {
                    // 如果开启了 rtc
                    // 那么后台用户删除的同时
                    // 也要删除远程用户
                    $res = RTCUtil::delUser($user->unique_code);
                    if ($res['code'] != 0) {
                        if ($res['code'] != 404) {
                            DB::rollBack();
                            return self::error($res['data'] , 500);
                        }
                    }
                }
            }
            DB::commit();
            return self::success();
        } catch(Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public static function detail(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $admin = AdminModel::findById($param['id']);
        if (empty($admin)) {
            return self::error('用户未找到' , 404);
        }
        return self::success($admin);
    }

    public static function edit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'username' => 'required' ,
            'role_id' => 'required' ,
            'phone' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $admin = AdminModel::findById($param['id']);
        if (empty($admin)) {
            return self::error('用户未找到' , 404);
        }
        $param['password'] = empty($param['password']) ? $admin->password : Hash::make($param['password']);
        AdminModel::updateById($param['id'] , array_unit($param , [
            'username' ,
            'password' ,
            'avatar' ,
            'role_id' ,
            'phone' ,
        ]));
        return self::success();
    }

    public static function add(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'username' => 'required' ,
            'password' => 'required' ,
            'role_id' => 'required' ,
            'phone' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $admin = AdminModel::findById($param['id']);
        if (empty($admin)) {
            return self::error('用户未找到' , 404);
        }
        $param['password'] = empty($param['password']) ? $admin->password : Hash::make($param['password']);
        try {
            DB::beginTransaction();
            $id = AdminModel::insertGetId(array_unit($param, [
                'username',
                'password',
                'avatar',
                'role_id',
                'phone',
            ]));
            if (admin_config('app.enable_rtc')) {
                // 如果启用了 rtc
                $res = RTCUtil::register('super_admin');
                if ($res['code'] != 0) {
                    DB::rollBack();
                    return self::error('注册 RTC 用户失败');
                }
                AdminModel::updateById($id , [
                    'id_for_rtc' => $res['data']
                ]);
            }
            DB::commit();
            return self::success($id);
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}