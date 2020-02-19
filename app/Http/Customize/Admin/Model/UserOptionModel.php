<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/20
 * Time: 17:14
 */

namespace App\Http\Customize\Admin\Model;


use function Admin\get_value;

class UserOptionModel extends Model
{
    protected $table = 'rtc_user_option';

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->private_notification_explain = get_value('business.bool_for_int_1' , $m->private_notification);
        $m->group_notification_explain = get_value('business.bool_for_int_1' , $m->group_notification);
        $m->write_status_explain = get_value('business.bool_for_int_1' , $m->write_status);
        $m->friend_auth_explain = get_value('business.bool_for_int_1' , $m->friend_auth);
        $m->clear_timer_for_private_explain = get_value('business.time_range' , $m->clear_timer_for_private);
        $m->clear_timer_for_group_explain = get_value('business.time_range' , $m->clear_timer_for_group);
        $m->banned_explain = get_value('business.bool_for_int_1' , $m->banned);
    }

    public static function updateByUserId(int $user_id , array $data = [])
    {
        return self::where('user_id' , $user_id)
            ->update($data);
    }

    public static function findByUserId(int $user_id)
    {
        $res = self::where('user_id' , $user_id)
            ->first();
        if (empty($res)) {
            return ;
        }
        self::single($res);
        return $res;
    }
}