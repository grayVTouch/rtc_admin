<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:08
 */

namespace App\Http\Controllers\Admin;


use App\Http\Customize\Admin\Middleware\PermissionAuthMiddleware;
use App\Http\Customize\Admin\Middleware\UserAuthMiddleware;
use Illuminate\Http\Request;

class Auth extends Base
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
        // 登录认证
        $this->middleware(UserAuthMiddleware::class);
        // 权限认证
        $this->middleware(PermissionAuthMiddleware::class);
    }
}