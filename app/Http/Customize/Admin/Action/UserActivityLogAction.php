<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 18:38
 */

namespace App\Http\Customize\Admin\Action;


use function Admin\admin_config;
use function Admin\parse_order;
use App\Http\Controllers\Admin\Auth;
use App\Http\Customize\Admin\Model\JoinFriendMethodModel;
use App\Http\Customize\Admin\Model\UserActivityLogModel;
use App\Http\Customize\Admin\Model\UserJoinFriendOptionModel;
use App\Http\Customize\Admin\Model\UserModel;
use App\Http\Customize\Admin\Model\UserOptionModel;
use function core\array_unit;
use Core\Lib\Hash;
use Exception;
use Illuminate\Support\Facades\Validator;

class UserActivityLogAction extends Action
{
    public static function list(Auth $auth , array $param)
    {
        $param['identifier'] = admin_config('app.identifier');
        $order = parse_order($param['order']);
        $limit = empty($param['limit']) ? admin_config('app.limit') : $param['limit'];
        $res = UserActivityLogModel::list($param , $order , $limit);
        return self::success($res);
    }
}