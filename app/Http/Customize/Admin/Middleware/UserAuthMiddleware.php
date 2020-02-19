<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:18
 */

namespace App\Http\Customize\Admin\Middleware;

use function Admin\error;
use App\Http\Customize\Admin\Model\AdminModel;
use App\Http\Customize\Admin\Model\AdminTokenModel;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class UserAuthMiddleware
{
    /**
     * @var \Illuminate\Http\Request
     */
    protected $request;

    protected $debug = 'running';

    protected $userId = 1;

    public function handle(Request $request , Closure $next)
    {
        $this->request = $request;
        $res = $this->userAuth();
        if ($res instanceof JsonResponse) {
            return $res;
        }
        return $next($request);
    }

    // 用户认证
    public function userAuth()
    {
        $param = $this->request->post();
        $param['token'] = $param['token'] ?? '';
        $param['debug'] = $param['debug'] ?? '';
        $param['user_id'] = $param['user_id'] ?? '';
        if ($param['debug'] == $this->debug) {
            if (empty($param['user_id'])) {
                return error('user id is empty' , -1000);
            }
            $user = AdminModel::findById($param['user_id']);
            if (empty($user)) {
                return error('user_id mapping user not found' , -1001);
            }
        } else {
            if (empty($param['token'])) {
                return error('token is empty');
            }
            $token = AdminTokenModel::findByToken($param['token']);
            if (empty($token)) {
                return error('token mapping token not found' , -1000);
            }
            // 检查是否过期
            if (date('Y-m-d H:i:s' , time()) > $token->expire) {
                return error('您的登录状态已过期！请重新登录' , 1000);
            }
            $user = AdminModel::findById($token->user_id);
            if (empty($user)) {
                return error('user id in token mapping user not fund' , -1000);
            }
        }
        // 绑定到容器
        app()->instance('user' , $user);
    }
}