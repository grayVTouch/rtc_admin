<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 15:18
 */

namespace Admin;

use function extra\config;
use function foo\func;
use Illuminate\Contracts\Validation\Validator;
use function response as base_response;

function admin_config($key , array $args = [])
{
    return config(__DIR__ . '/../Config' , $key , $args);
}

// 成功响应
function success($data = '' , $code = 0)
{
    return json($data , $code);
}

// 失败响应
function error($data = '' , $code = 400)
{
    return json($data , $code);
}

function json($data , $code)
{
    return base_response()
        ->json([
            'code' => $code ,
            'data' => $data ,
        ]);
}

/**
 * 返回当前登录用户
 * @return \App\Http\Customize\Admin\Model\AdminModel|null
 */
function user()
{
    return app()->make('user');
}

/**
 * 解析排序
 */
function parse_order(string $order = '' , string $delimiter = '|')
{
    if (empty($order)) {
        return [];
    }
    $res = explode($delimiter , $order);
    if (count($res) != 2) {
        return [];
    }
    return [
        'field' => $res[0] ,
        'value' => $res[1] ,
    ];
}

/**
 * 获取配置值
 */
function get_value($key , $value = '')
{
    $range = admin_config($key);
    foreach ($range as $k => $v)
    {
        if ($k == $value) {
            return $v;
        }
    }
    return '';
}

/**
 * 格式化 Validator 的错误信息
 */
function validator_message_format(Validator $validator)
{
    $messages = $validator->errors()->messages();
    $res = [];
    foreach ($messages as $k => $v)
    {
        $res[$k] = $v[0] ?? '';
    }
    return $res;
}

/**
 * 图片地址处理
 */
function res_url($path = '')
{
    if (empty($path)) {
        return '';
    }
    return $path;
}