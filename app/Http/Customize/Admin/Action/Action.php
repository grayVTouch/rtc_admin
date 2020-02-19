<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 14:08
 */

namespace App\Http\Customize\Admin\Action;


use function Admin\validator_message_format;
use Illuminate\Contracts\Validation\Validator;

class Action
{
    // 成功时的操作
    public static function success($data = '' , $code = 0)
    {
        return self::response($data , $code);
    }

    // 失败时的操作
    public static function error($data = '' , $code = 400)
    {
        return self::response($data , $code);
    }

    public static function formError(Validator $validator)
    {
        return self::response(validator_message_format($validator) , -400);
    }

    public static function response($data , $code)
    {
        return [
            'code' => $code ,
            'data' => $data ,
        ];
    }
}