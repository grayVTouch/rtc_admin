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
use App\Http\Customize\Admin\Model\GroupModel;
use function core\array_unit;
use Core\Lib\Category;
use function core\obj_to_array;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class GroupAction extends Action
{
    public static function list(Auth $auth , array $param)
    {
        $order = parse_order($param['order']);
        $limit = empty($param['limit']) ? admin_config('app.limit') : $param['limit'];
        $res = GroupModel::list($param , $order , $limit);
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
            return self::error('请提供待删除的项目');
        }
        GroupModel::delByIds($id_list);
        return self::success();
    }

    public static function edit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'name'  => 'required' ,
            'identifier'  => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        if (empty($param['id'])) {
            return self::error('id 必须');
        }
        $res = GroupModel::findById($param['id']);
        if (empty($res)) {
            return self::error('未找到id对应记录' , 404);
        }
        if (GroupModel::isRepeat($param['identifier'])) {
            return self::error([
                'identifier' => '项目标识符重复' ,
            ] , -400);
        }
        GroupModel::updateById($param['id'] , array_unit($param , [
            'name' ,
            'identifier'
        ]));
        return self::success();
    }

    public static function add(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'name'  => 'required' ,
            'identifier'  => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::formError($validator);
        }
        $res = GroupModel::findByIdentifier($param['identifier']);
        if (!empty($res)) {
            return self::error([
                'identifier' => '项目标识符重复' ,
            ] , -400);
        }
        $param['weight'] = intval($param['weight']);
        $id = GroupModel::insertGetId(array_unit($param , [
            'name' ,
            'identifier'
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
        $res = GroupModel::findById($param['id']);
        if (empty($res)) {
            return self::error('未找到 id 对应记录' , 404);
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
        $res = GroupModel::findById($param['id']);
        if (empty($res)) {
            return self::error("未找到对应记录" , 404);
        }
        $param[$param['field']] = $param['value'];
        GroupModel::updateById($param['id'] , array_unit($param , [
            'is_temp' ,
            'is_service' ,
            'anonymouse' ,
            'banned' ,
        ]));
        return self::success();
    }
}