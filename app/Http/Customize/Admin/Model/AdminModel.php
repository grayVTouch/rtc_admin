<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 14:47
 */

namespace App\Http\Customize\Admin\Model;


use function Admin\res_url;
use function Admin\get_value;
use function core\convert_obj;

class AdminModel extends Model
{
    protected $table = 'rtc_admin';

    public static function findByUsername($username)
    {
        $res = self::where('username' , $username)
            ->first();
        if (empty($res)) {
            return ;
        }
        self::single($res);
        return $res;
    }

    public function role()
    {
        return $this->belongsTo(RoleModel::class , 'role_id' , 'id');
    }

    public static function findById($id)
    {
        $res = self::with(['role'])
            ->find($id);
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
        self::single($res);
        RoleModel::single($res->role);
        return $res;
    }

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['username'] = $filter['username'] ?? '';
        $filter['phone'] = $filter['phone'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'desc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['username'] != '') {
            $where[] = ['username' , 'like' , "%{$filter['username']}%"];
        }
        if ($filter['phone'] != '') {
            $where[] = ['phone' , 'like' , "%{$filter['phone']}%"];
        }
        $res = self::with(['role'])
            ->where($where)
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
        $m->is_root_explain = get_value('business.bool_for_int' , $m->is_root);
        $m->avatar_explain = res_url($m->avatar);
    }
}