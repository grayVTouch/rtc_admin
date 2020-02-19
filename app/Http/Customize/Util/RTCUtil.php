<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/12/2
 * Time: 14:29
 */

namespace App\Http\Customize\Util;


use Core\Lib\Http;

class RTCUtil extends Util
{
    public static $roleRange = ['admin' , 'super_admin'];

//    public static $api = 'http://192.168.145.129:10001';

    public static $api = 'http://47.88.223.82:10001';

    // 远程注册一个账号
    public static function register($role = 'admin')
    {
        if (!in_array($role , self::$roleRange)) {
            return self::error('' , 400);
        }
        $data = [
            'data' => [
                'role' => $role
            ]
        ];
        $url = sprintf('%s%s' , self::$api , '/Admin/Login/register');
        $res = Http::post($url , $data);
        if (empty($res)) {
            return self::error('没有收到任何响应，请检查本地网络是否正常 或 检查服务器是否有数据输出' , 500);
        }
        $res = json_decode($res , true);
        if ($res['code'] != 0) {
            return self::error("RTC 远程接口错误：{$res['data']}" , $res['code']);
        }
        return self::success($res['data']);
    }

    // 发送推送
    public static function push(array $data = [])
    {
        $url = sprintf('%s%s' , self::$api , '/Admin/Push/push');
        $res = Http::post($url , [
            'data' => $data
        ]);
        if (empty($res)) {
            return self::error('没有收到任何响应，请检查本地网络是否正常 或 检查服务器是否有数据输出' , 500);
        }
        $res = json_decode($res , true);
        if ($res['code'] != 0) {
            return self::error("RTC 远程接口错误：{$res['data']}" , $res['code']);
        }
        return self::success($res['data']);
    }

    // 删除用户
    public static function delUser(array $data = [])
    {
        $url = sprintf('%s%s' , self::$api , '/Admin/User/del');
        $res = Http::post($url , [
            'data' => $data
        ]);
        if (empty($res)) {
            return self::error('没有收到任何响应，请检查本地网络是否正常 或 检查服务器是否有数据输出' , 500);
        }
        $res = json_decode($res , true);
        if ($res['code'] != 0) {
            return self::error("RTC 远程接口错误：{$res['data']}" , $res['code']);
        }
        return self::success($res['data']);
    }
}