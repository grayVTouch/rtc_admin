<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 15:10
 */

namespace App\Http\Customize\Admin\Model;


class AdminTokenModel extends Model
{
    protected $table = 'rtc_admin_token';

    public static function u_insertGetId(int $user_id , string $token , string $expire)
    {
        return self::insertGetId([
            'user_id' => $user_id ,
            'token' => $token ,
            'expire' => $expire ,
        ]);
    }

    public static function findByToken(string $token)
    {
        $res = self::where('token' , $token)
            ->first();
        self::single($res);
        return $res;
    }

}