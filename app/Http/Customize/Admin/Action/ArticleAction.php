<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/4/29
 * Time: 21:13
 */

namespace App\Http\Customize\Admin\Action;


use App\Http\Controllers\Admin\Auth;
use App\Http\Customize\Admin\Model\ArticleModel;
use Exception;
use function Admin\admin_config;
use function core\array_unit;
use function Admin\parse_order;
use Illuminate\Support\Facades\Validator;

class ArticleAction extends Action
{
    public static function list(Auth $auth , array $param)
    {
        $limit = empty($param['limit']) ? admin_config('app.limit') : $param['limit'];
        $order = parse_order($param['order']);
        $res = ArticleModel::list($param , $order , $limit);
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
        $res = ArticleModel::findById($param['id']);
        if (empty($res)) {
            return self::error('未找到文章' , 404);
        }
        return self::success($res);
    }

    public static function edit(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'title' => 'required' ,
            'enable' => 'required' ,
            'article_type_id' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $m = ArticleModel::find($param['id']);
        if (empty($m)) {
            return self::error('未找到id对应数据');
        }
        $param['weight'] = !empty($param['weight']) ? $param['weight'] : $m->weight;
        ArticleModel::updateById($param['id'] , array_unit($param , [
            'title' ,
            'author' ,
            'weight' ,
            'enable' ,
            'article_type_id' ,
            'content' ,
            'thumb' ,
        ]));
        return self::success();
    }

    public static function add(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'title' => 'required' ,
            'enable' => 'required' ,
            'article_type_id' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $param['weight'] = (int) $param['weight'];
        $id = ArticleModel::insertGetId(array_unit($param , [
            'title' ,
            'author' ,
            'weight' ,
            'enable' ,
            'article_type_id' ,
            'content' ,
            'thumb' ,
        ]));
        return self::success($id);
    }

    public static function del(Auth $auth , array $param)
    {
        $validator = Validator::make($param , [
            'id_list' => 'required' ,
        ]);
        if ($validator->fails()) {
            return self::error($validator);
        }
        $id_list = json_decode($param['id_list'] , true);
        if (empty($id_list)) {
            return self::error('请选择待删除项');
        }
        $res = ArticleModel::delByIds($id_list);
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
        $res = ArticleModel::findById($param['id']);
        if (empty($res)) {
            return self::error("路由不存在");
        }
        $param[$param['field']] = $param['value'];
        ArticleModel::updateById($param['id'] , array_unit($param , [
            'enable' ,
        ]));
        return self::success();
    }
}