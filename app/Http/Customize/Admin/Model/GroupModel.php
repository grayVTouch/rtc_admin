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

class GroupModel extends Model
{
    protected $table = 'rtc_group';

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['name'] = $filter['name'] ?? '';
        $filter['identifier'] = $filter['identifier'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'asc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['g.id' , '=' , $filter['id']];
        }
        if ($filter['name'] != '') {
            $where[] = ['g.name' , 'like' , "%{$filter['name']}%"];
        }
        if ($filter['identifier'] != '') {
            $where[] = ['u.identifier' , '=' , $filter['identifier']];
        }
        $res = self::from('rtc_group as g')
            ->leftJoin('rtc_user as u' , 'g.user_id' , '=' , 'u.id')
            ->where($where)
            ->select('g.*')
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as $v)
        {
            self::single($v);
        }
        return $res;
    }

    public static function findByIdentifier($identifier = '')
    {
        $res = self::where('identifier' , $identifier)->first();
        if (empty($res)) {
            return ;
        }
        self::single($res);
        return $res;
    }

    public static function isRepeat($identifier = '')
    {
        return (self::where('identifier' , $identifier)->count()) > 1;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->type_explain = get_value('business.group_type' , $m->type);
        $m->is_temp_explain = get_value('business.bool_for_int' , $m->is_temp);
        $m->is_service_explain = get_value('business.bool_for_int' , $m->is_service);
        $m->anonymous_explain = get_value('business.bool_for_int' , $m->anonymous);
        $m->banned_explain = get_value('business.bool_for_int' , $m->banned);
        $m->auth_explain = get_value('business.bool_for_int' , $m->auth);
    }

    public static function countByDate($date)
    {
        return self::whereRaw('date_format(create_time , "%Y-%m-%d") = :date', [
            'date' => $date
        ])->count();
    }
}