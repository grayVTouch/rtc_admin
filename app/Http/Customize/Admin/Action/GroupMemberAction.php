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
use App\Http\Customize\Admin\Model\GroupMemberModel;
use function core\array_unit;
use Exception;
use Illuminate\Support\Facades\Validator;

class GroupMemberAction extends Action
{
    public static function list(Auth $auth , array $param)
    {
        $order = parse_order($param['order']);
        $limit = empty($param['limit']) ? admin_config('app.limit') : $param['limit'];
        $res = GroupMemberModel::list($param , $order , $limit);
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
        $res = GroupMemberModel::findById($param['id']);
        if (empty($res)) {
            return self::error("未找到对应记录" , 404);
        }
        $param[$param['field']] = $param['value'];
        GroupMemberModel::updateById($param['id'] , array_unit($param , [
            'can_notice' ,
            'banned' ,
            'top' ,
        ]));
        return self::success();
    }
}