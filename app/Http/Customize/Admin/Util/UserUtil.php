<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/24
 * Time: 16:13
 */

namespace App\Http\Customize\Admin\Util;


use App\Http\Customize\Admin\Model\JoinFriendMethodModel;
use App\Http\Customize\Admin\Model\UserModel;
use stdClass;

class UserUtil
{
    public static function findById(int $id) :?StdClass
    {
        $user = UserModel::findById($id);
        if (empty($user)) {
            return ;
        }
        $user->user_join_friend_option = $user->join_friend_option ?? [];
        $user->user_option = $user->user_option ?? new class() {};
        foreach ($user->user_join_friend_option as $v)
        {
            $v->join_friend_method = JoinFriendMethodModel::findById($v->join_friend_method_id);
        }
        return $user;
    }
}