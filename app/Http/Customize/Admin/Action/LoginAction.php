<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 14:08
 */

namespace App\Http\Customize\Admin\Action;


use function Admin\admin_config;
use function Admin\validator_message_format;
use App\Http\Customize\Admin\Model\AdminLandLogModel;
use App\Http\Customize\Admin\Model\AdminTokenModel;
use App\Http\Customize\Admin\Model\AdminModel;
use App\Http\Customize\Util\VerifyCodeUtil;
use function core\random;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginAction extends Action
{
    public static function verifyCode(Request $request , array $param)
    {
        $res = VerifyCodeUtil::make('default' , true);
        return self::success($res);
    }

    public static function login(Request $request , array $param)
    {
        $validator = Validator::make($param , [
            'username' => 'required' ,
            'password' => 'required' ,
            'verify_code' => 'required' ,
        ] , [
            'username.required' => '用户名必须' ,
            'password.required' => '密码必须' ,
            'verify_code.required' => '验证码必须' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        if (empty($param['verify_code_key'])) {
            return self::error('verify_code_key 必须');
        }
        // 检查验证码是否正确
        if (!VerifyCodeUtil::check($param['verify_code'] , $param['verify_code_key'])) {
            return self::error([
                'verify_code' => '图形验证码错误'
            ] , -400);
        }
        $user = AdminModel::findByUsername($param['username']);
        if (empty($user)) {
            return self::error([
                'username' => '用户名错误'
            ] , -400);
        }
        // 检查密码是否正确
        if (!Hash::check($param['password'] , $user->password)) {
            return self::error([
                'password' => '密码错误'
            ] , -400);
        }
        // 登录成功
        $time = time();
        $timestamp = date('Y-m-d H:i:s' , $time);
        $token = random('255' , 'mixed' , true);
        $expire = date('Y-m-d H:i:s' , $time + admin_config('app.duration_for_long'));
        $ip = $request->ip();
        try {
            DB::beginTransaction();
            AdminTokenModel::u_insertGetId($user->id , $token , $expire);
            AdminLandLogModel::u_insertGetId($user->id , $ip);
            AdminModel::updateById($user->id , [
                'last_ip' => $ip ,
                'last_time' => $timestamp
            ]);
            DB::commit();
            return self::success($token);
        } catch(Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}