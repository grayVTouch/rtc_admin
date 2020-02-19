<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/25
 * Time: 10:27
 */

namespace App\Http\Customize\Admin\Util;


use Core\Lib\Http;
use CURLFile;

class HttpUtil
{
    // 上传文件的地址
    public static $uploadUrl = 'http://upload.moeddcoin.vip:81/upfull?token=puxin';

    // 上传文件
    public static function upload($path , $mime , $filename)
    {
        $curl_file = new CURLFile($path , $mime , $filename);
        $res = Http::post(self::$uploadUrl , [
            'data' => [
                'file' => $curl_file
            ] ,
        ]);
        if (empty($res)) {
            return self::error('请求发送失败，请检查网络连接');
        }
        $res = json_decode($res , true);
        if ($res['code'] != 0) {
            return self::error("远程图片上传接口发生错误：{$res['data']}" , 500);
        }
        return self::success($res['data']);
    }

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
            'data' => $data ,
        ];
    }
}