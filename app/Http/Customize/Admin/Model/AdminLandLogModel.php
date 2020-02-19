<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 15:47
 */

namespace App\Http\Customize\Admin\Model;


class AdminLandLogModel extends Model
{
    protected $table = 'rtc_admin_land_log';

    public static function u_insertGetId(int $user_id , string $last_ip)
    {
        return self::insertGetId([
            'user_id' => $user_id ,
            'last_ip' => $last_ip
        ]);
    }
}