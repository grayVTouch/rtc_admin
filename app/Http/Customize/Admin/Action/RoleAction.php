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
use App\Http\Customize\Admin\Model\RoleModel;
use App\Http\Customize\Admin\Model\RoleRouteModel;
use App\Http\Customize\Admin\Model\RouteModel;
use function core\array_unit;
use Core\Lib\Category;
use function core\obj_to_array;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Reflection;
use ReflectionClass;

class RoleAction extends Action
{
    public static function list(Auth $auth , array $param)
    {
        $order = parse_order($param['order']);
        $limit = empty($param['limit']) ? admin_config('app.limit') : $param['limit'];
        $res = RoleModel::list($param , $order , $limit);
        return self::success($res);
    }

    public static function del(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请提供待删除的用户');
        }
        try {
            DB::beginTransaction();
            RoleModel::delByIds($id_list);
            RoleRouteModel::delByRoleIds($id_list);
            DB::commit();
            return self::success();
        } catch(Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public static function edit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'name'  => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 必须');
        }
        $res = RoleModel::findById($param['id']);
        if (empty($res)) {
            return self::error('未找到id对应记录' , 404);
        }
        RoleModel::updateById($param['id'] , array_unit($param , [
            'name' ,
            'weight'
        ]));
        return self::success();
    }

    public static function add(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'name'  => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $param['weight'] = intval($param['weight']);
        $id = RoleModel::insertGetId(array_unit($param , [
            'name' ,
            'weight'
        ]));
        return self::success($id);
    }

    public static function detail(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id'    => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $res = RoleModel::findById($param['id']);
        if (empty($res)) {
            return self::error('未找到 id 对应记录' , 404);
        }
        return self::success($res);
    }

    // 权限管理
    public static function priv(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        // 获取角色权限
        $priv = RouteModel::getByRoleIdAndType($param['id'] , '');
        // 获取所有权限
        $route = RouteModel::getAll();
        $route = obj_to_array($route);
        $route = Category::childrens(0 , $route , [
            'id'    => 'id' ,
            'p_id'  => 'p_id' ,
        ] , false , true);
        $res = [
            'priv' => $priv ,
            'route' => $route
        ];
        return self::success($res);
    }

    public static function allocate(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'route_id_list' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $route_id_list = json_decode($param['route_id_list'] , true);
        if (empty($route_id_list)) {
            return self::error('请提供分配的权限');
        }
        // 删除旧权限
        RoleRouteModel::delByRoleId($param['id']);
        try {
            DB::beginTransaction();
            foreach ($route_id_list as $v)
            {
                RoleRouteModel::insertGetId([
                    'role_id' => $param['id'] ,
                    'route_id' => $v
                ]);
            }
            DB::commit();
            return self::success();
        } catch(Exception $e){
            DB::rollBack();
            throw $e;
        }
    }

    public static function all(Auth $auth , array $param)
    {
        $res = RoleModel::getAll();
        return self::success($res);
    }
}