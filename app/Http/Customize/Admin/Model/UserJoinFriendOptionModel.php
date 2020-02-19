<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/24
 * Time: 16:11
 */

namespace App\Http\Customize\Admin\Model;


class UserJoinFriendOptionModel extends Model
{
    protected $table = 'rtc_user_join_friend_option';

    public static function updateByUserIdAndJoinFriendMethodId(int $user_id , int $join_friend_method_id , $data)
    {
        return self::where([
            ['user_id' , '=' , $user_id] ,
            ['join_friend_method_id' , '=' , $join_friend_method_id] ,
        ])->update($data);
    }

    public static function findByUserIdAndJoinFriendMethodId(int $user_id , int $join_friend_method_id)
    {
        $res = self::where([
                ['user_id' , '=' , $user_id] ,
                ['join_friend_method_id' , '=' , $join_friend_method_id] ,
            ])
            ->first();
        if (empty($res)) {
            return ;
        }
        self::single($res);
        return $res;
    }
}