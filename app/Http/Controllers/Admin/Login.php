<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 14:01
 */

namespace App\Http\Controllers\Admin;


use function Admin\error;
use function Admin\success;
use App\Http\Customize\Admin\Action\LoginAction;
use Illuminate\Support\Facades\Hash;

class Login extends Base
{
    // 验证码
    public function verifyCode()
    {
        $param = $this->request->post();
        $res = LoginAction::verifyCode($this->request , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 验证码
    public function login()
    {
        $param = $this->request->post();
        $param['username'] = $param['username'] ?? '';
        $param['password'] = $param['password'] ?? '';
        $param['verify_code'] = $param['verify_code'] ?? '';
        $param['verify_code_key'] = $param['verify_code_key'] ?? '';
        $res = LoginAction::login($this->request , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function test()
    {
        // 测试，新增一个用户
        $password = Hash::make('364793');
        var_dump($password);
    }
}