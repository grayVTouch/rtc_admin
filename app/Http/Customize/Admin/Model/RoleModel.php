<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:15
 */

namespace App\Http\Customize\Admin\Model;


use function core\convert_obj;

class RoleModel extends Model
{
    protected $table = 'rtc_role';

    public function route()
    {
        return $this->belongsToMany(RouteModel::class , 'rtc_role_route' , 'role_id' , 'route_id');
    }

    public static function findByRoleIdAndType(int $role_id , string $type = '')
    {
        $res = self::with(['route' => function($query) use($type){
                if (empty($type)) {
                    return ;
                }
                $query->where('type' , $type);
            }])
            ->find($role_id);
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
        self::single($res);
        RouteModel::multiple($res->route);
        return $res;
    }

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'asc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
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