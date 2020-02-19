<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 15:03
 */

namespace App\Http\Customize\Admin\Middleware;

use Closure;

class CustomizeMiddleware
{
    public function handle($request , Closure $next)
    {
        $this->initialize();
        return $next($request);
    }

    // 初始化
    public function initialize()
    {
        // 个人插件
        require_once __DIR__ . '/../Plugin/extra/app.php';
        // 工具函数
        require_once __DIR__ . '/../Common/common.php';
    }
}