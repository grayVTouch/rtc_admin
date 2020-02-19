<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/25
 * Time: 10:25
 */

namespace App\Http\Customize\Admin\Action;


use App\Http\Controllers\Admin\Base;
use App\Http\Customize\Admin\Util\HttpUtil;

class FileAction extends Action
{
    public static function upload(Base $base , $file)
    {
        $res = HttpUtil::upload($file['tmp_name'] , $file['type'] , $file['name']);
        if ($res['code'] != 0) {
            return self::error($res['data'] , 500);
        }
        return self::success($res['data']);
    }
}