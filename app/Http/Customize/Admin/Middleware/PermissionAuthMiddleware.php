<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:18
 */

namespace App\Http\Customize\Admin\Middleware;

use function Admin\error;
use function Admin\user;
use App\Http\Customize\Admin\Model\RouteModel;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PermissionAuthMiddleware
{
    /**
     * @var \Illuminate\Http\Request
     */
    protected $request;

    protected $debug = 'running';

    public function handle(Request $request , Closure $next)
    {
        $this->request = $request;
        $res = $this->authenticate();
        if ($res instanceof JsonResponse) {
            return $res;
        }
        return $next($request);
    }

    // 权限验证
    public function authenticate()
    {
        // 验证当前路由
        $user = user();
        if (empty($user->role)) {
            $user->role = new class() {
                /**
                 * @var array
                 */
                public $route;
            };
        }
        if ($user->is_root) {
            // 附加路由
            $user->role->route = RouteModel::getAll();
            return ;
        }

        $user->role->route = RouteModel::getByRoleIdAndType($user->role_id , 'api');
        $path   = $this->request->path();
        $path   = '/' . rtrim($path , '/');
        $method = $this->request->method();
        $method = strtoupper($method);
        // 检查是否具备权限
        foreach ($user->role->route as $v)
        {
            $route = rtrim($v->route , '/');
            $route = '/' . $route;
            if (strtoupper($v->method) == $method && $route == $path) {
                // 具备该权限
                return ;
            }
        }
        return error('permission denied' , 403);
    }
}