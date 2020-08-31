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
use App\Http\Controllers\Admin\Auth;
use App\Http\Customize\Admin\Model\JoinFriendMethodModel;
use App\Http\Customize\Admin\Model\UserJoinFriendOptionModel;
use App\Http\Customize\Admin\Model\UserModel;
use App\Http\Customize\Admin\Model\UserOptionModel;
use function core\array_unit;
use Core\Lib\Hash;
use Exception;
use Illuminate\Support\Facades\Validator;

class UserAction extends Action
{
    public static function list(Auth $auth , array $param)
    {
        $param['identifier'] = admin_config('app.identifier');
        $order = parse_order($param['order']);
        $limit = empty($param['limit']) ? admin_config('app.limit') : $param['limit'];
        $res = UserModel::list($param , $order , $limit);
        foreach ($res->data as $v)
        {
            $v->user_join_friend_option = $v->user_join_friend_option ?? [];
            foreach ($v->user_join_friend_option as $v1)
            {
                $v1->join_friend_method = JoinFriendMethodModel::findById($v1->join_friend_method_id);
            }
        }
        return self::success($res);
    }

    public static function info(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $user = UserModel::simpleFindById($param['id']);
        if (empty($user)) {
            return self::error('用户不存在' , 404);
        }
        return self::success($user);
    }

    public static function edit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
//            'nickname' => 'required' ,
            'role' => 'required' ,
            'sex' => 'required' ,
            'is_temp' => 'required' ,
            'is_system' => 'required' ,
//            'area_code' => 'required' ,
//            'phone' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $user = UserModel::findById($param['id']);
        if (empty($user)) {
            return self::error('用户不存在' , 404);
        }
        $param['password'] = empty($param['password']) ? $user->password : Hash::make($param['password']);
        $param['full_phone'] = "{$param['area_code']}{$param['phone']}}";
        $param['birthday'] = empty($param['birthday']) || $param['birthday'] === 'null' ? null : $param['birthday'];

        UserModel::updateById($param['id'] , array_unit($param , [
            'username' ,
            'nickname' ,
            'role' ,
            'sex' ,
            'is_temp' ,
            'is_system' ,
            'avatar' ,
            'birthday' ,
            'signature' ,
            'area_code' ,
            'phone' ,
            'full_phone' ,
        ]));
        return self::success();
    }

    public static function singleEditUserOption(Auth $auth , array $param)
    {
        $validator = Validator::make($param, [
            'id' => 'required',
            'field' => 'required',
            'value' => 'required',
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $user_option = UserOptionModel::findByUserId($param['id']);
        if (empty($user_option)) {
            return self::error('用户选项不存在', 404);
        }
        $time_range = admin_config('business.time_range');
        $time_range_keys = array_keys($time_range);
        switch ($param['field'])
        {
            case 'clear_timer_for_private':

                if (!in_array($param['value'] , $time_range_keys)) {
                    return self::error('不支持的值，当前受支持的值有：' . implode($time_range , ','));
                }
                break;
            case 'clear_timer_for_group':
                if (!in_array($param['value'] , $time_range_keys)) {
                    return self::error('不支持的值，当前受支持的值有：' . implode($time_range , ','));
                }
                break;
        }
        $data[$param['field']] = $param['value'];
        UserOptionModel::updateByUserId($param['id'] , array_unit($data , [
            'private_notification' ,
            'group_notification' ,
            'write_status' ,
            'friend_auth' ,
            'banned' ,
            'clear_timer_for_private' ,
            'clear_timer_for_group' ,
        ]));
        return self::success();
    }

    public static function singleEditUserJoinFriendOption(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id'                    => 'required' ,
            'join_friend_method_id' => 'required' ,
            'enable'                => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $user_join_friend_option = UserJoinFriendOptionModel::findByUserIdAndJoinFriendMethodId($param['id'] , $param['join_friend_method_id']);
        if (empty($user_join_friend_option)) {
            return self::error('添加好友方式不存在' , 404);
        }
        UserJoinFriendOptionModel::updateByUserIdAndJoinFriendMethodId($param['id'] , $param['join_friend_method_id'] , array_unit($param , [
            'enable' ,
        ]));
        return self::success();
    }
}