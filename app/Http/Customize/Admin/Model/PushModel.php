<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:15
 */

namespace App\Http\Customize\Admin\Model;


use function Admin\get_value;
use function core\convert_obj;

class PUshModel extends Model
{
    protected $table = 'rtc_push';

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['push_type'] = $filter['push_type'] ?? '';
        $filter['type'] = $filter['type'] ?? '';
        $filter['role'] = $filter['role'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'asc';

        $where = [
            ['is_show' , '=' , 1] ,
        ];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['role'] != '') {
            $where[] = ['role' , '=' , $filter['role']];
        }
        if ($filter['push_type'] != '') {
            $where[] = ['push_type' , '=' , $filter['push_type']];
        }
        if ($filter['type'] != '') {
            $where[] = ['type' , '=' , $filter['type']];
        }
        $res = self::where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as $v)
        {
            self::single($v);
        }
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->push_type_explain = get_value('business.push_type_range_for_user' , $m->push_type);
        $m->type_explain = get_value('business.push_type_range_for_push' , $m->type);
        $m->role_explain = get_value('business.role_range_for_push' , $m->role);
    }


}