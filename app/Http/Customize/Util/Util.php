<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/12/2
 * Time: 15:36
 */

namespace App\Http\Customize\Util;


class Util
{
    public static function success($data = '' , $code = 0)
    {
        return self::response($data , $code);
    }

    public static function error($data = '' , $code = 400)
    {
        return self::response($data , $code);
    }

    public static function response($data , $code)
    {
        return [
            'code' => $code ,
            'data' => $data
        ];
    }
}