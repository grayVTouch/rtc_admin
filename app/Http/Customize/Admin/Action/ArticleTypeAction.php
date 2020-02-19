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
use App\Http\Customize\Admin\Model\ArticleTypeModel;
use Core\Lib\Category;
use function core\array_unit;
use function core\obj_to_array;
use Illuminate\Support\Facades\Validator;

class ArticleTypeAction extends Action
{
    public static function all(Auth $auth , array $param)
    {
        $res = ArticleTypeModel::getAll();
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
            'name' => 'required' ,
            'p_id' => 'required' ,
            'enable' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $param['weight'] = (int) $param['weight'];
        $res = ArticleTypeModel::insertGetId(array_unit($param , [
            'name' ,
            'p_id' ,
            'enable' ,
            'weight' ,
        ]));
        return self::success($res);
    }

    public static function edit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'name' => 'required' ,
            'p_id' => 'required' ,
            'enable' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 尚未提供');
        }
        $m = ArticleTypeModel::findById($param['id']);
        if (empty($m)) {
            return self::error('路由不存在' , 404);
        }
        $param['weight'] = empty($param['weight']) ? $m->weight : $param['weight'];
        ArticleTypeModel::updateById($param['id'] , array_unit($param , [
            'name' ,
            'p_id' ,
            'enable' ,
            'weight' ,
        ]));
        return self::success($param['id']);
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
            return self::error('请选择待删除项');
        }
        $del = [];
        $list = ArticleTypeModel::getAll();
        $list = obj_to_array($list);
        foreach ($id_list as $v)
        {
            $children = Category::childrens($v , $list , [
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
        $res = ArticleTypeModel::delByIds($del);
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
        $res = ArticleTypeModel::findById($param['id']);
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
        $res = ArticleTypeModel::findById($param['id']);
        if (empty($res)) {
            return self::error("路由不存在");
        }
        $param[$param['field']] = $param['value'];
        ArticleTypeModel::updateById($param['id'] , array_unit($param , [
            'enable' ,
            'method' ,
            'type' ,
            'menu' ,
            'hidden' ,
        ]));
        return self::success();
    }
}