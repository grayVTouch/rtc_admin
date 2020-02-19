<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/31
 * Time: 13:11
 */

namespace App\Http\Customize\Admin\Action;

use function Admin\admin_config;
use App\Http\Controllers\Admin\Auth;
use App\Http\Customize\Admin\Model\RouteModel;
use Core\Lib\Category;
use function core\array_unit;
use function core\obj_to_array;
use Illuminate\Support\Facades\Validator;

class RouteAction extends Action
{
    public static function all(Auth $auth , array $param)
    {
        $res = RouteModel::getAll();
        $res = obj_to_array($res);
        $res = Category::childrens(0 , $res , [
            'id'    => 'id' ,
            'p_id'  => 'p_id' ,
        ] , false , false);
        return self::success($res);
    }

    public static function add(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'cn' => 'required' ,
            'p_id' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $route_method = admin_config('business.route_method');
        $route_type   = admin_config('business.route_type');
        if (!in_array($param['method'] , $route_method)) {
            return self::error([
                'method' => '不支持的 method' ,
            ]);
        }
        if (!in_array($param['type'] , $route_type)) {
            return self::error([
                'type' => '不支持的 type' ,
            ]);
        }
        $param['weight'] = (int) $param['weight'];
        $res = RouteModel::insertGetId(array_unit($param , [
            'cn' ,
            'en' ,
            'route' ,
            'method' ,
            'type' ,
            'hidden' ,
            'enable' ,
            'menu' ,
            'p_id' ,
            'weight' ,
            's_ico' ,
            'b_ico' ,
        ]));
        return self::success($res);
    }

    public static function edit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'cn' => 'required' ,
            'p_id' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 尚未提供');
        }
        $m = RouteModel::findById($param['id']);
        if (empty($m)) {
            return self::error('路由不存在' , 404);
        }
        $param['weight'] = empty($param['weight']) ? $m->weight : $param['weight'];
        $param['s_ico'] = empty($param['s_ico']) ? $m->s_ico : $param['s_ico'];
        $param['b_ico'] = empty($param['b_ico']) ? $m->b_ico : $param['b_ico'];
        RouteModel::updateById($param['id'] , array_unit($param , [
            'cn' ,
            'en' ,
            'route' ,
            'method' ,
            'type' ,
            'hidden' ,
            'enable' ,
            'menu' ,
            'p_id' ,
            'weight' ,
            's_ico' ,
            'b_ico' ,
        ]));
        return self::success($param['id']);
    }

    public static function del(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ] , [
            'id_list.required' => 'id_list 尚未提供' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请选择待删除项');
        }
        $del = [];
        $route = RouteModel::getAll();
        $route = obj_to_array($route);
        foreach ($id_list as $v)
        {
            $children = Category::childrens($v , $route , [
                'id'    => 'id' ,
                'p_id'  => 'p_id' ,
            ] , true , false);
            $c_ids = [];
            foreach ($children as $v1)
            {
                $c_ids[] = $v1['id'];
            }
            $diff   = array_diff($c_ids , $del);
            $del    = array_merge($del , $diff);
        }
        $res = RouteModel::delByIds($del);
        return self::success($res);
    }

    public static function detail(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $res = RouteModel::findById($param['id']);
        if (empty($res)) {
            return self::error("路由不存在");
        }
        return self::success($res);
    }

    public static function singleEdit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id' => 'required' ,
            'field' => 'required' ,
            'value' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator->errors()->first());
        }
        $res = RouteModel::findById($param['id']);
        if (empty($res)) {
            return self::error("路由不存在");
        }
        $param[$param['field']] = $param['value'];
        RouteModel::updateById($param['id'] , array_unit($param , [
            'enable' ,
            'method' ,
            'type' ,
            'menu' ,
            'hidden' ,
        ]));
        return self::success();
    }
}