<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 14:47
 */

namespace App\Http\Customize\Admin\Model;


use function Admin\get_value;
use function core\convert_obj;

class UserActivityLogModel extends Model
{
    protected $table = 'rtc_user_activity_log';


    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['identifier'] = $filter['identifier'] ?? '';
        $filter['user_id'] = $filter['user_id'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'asc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['user_id'] != '') {
            $where[] = ['user_id' , '=' , $filter['user_id']];
        }
        if ($filter['identifier'] != '') {
            $where[] = ['identifier' , '=' , $filter['identifier']];
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
}