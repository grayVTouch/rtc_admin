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

class UserModel extends Model
{
    protected $table = 'rtc_user';

    public static function findById($id)
    {
        $res = self::with(['userOption' , 'userJoinFriendOption'])
            ->find($id);
        if (empty($res)) {
            return ;
        }
        $res = convert_obj($res);
        self::single($res);
        return $res;
    }


    public static function simpleFindById(int $id)
    {
        $res = self::find($id);
        self::single($res);
        return $res;
    }

    public function userOption()
    {
        return $this->hasOne(UserOptionModel::class , 'user_id' , 'id');
    }

    public function userJoinFriendOption()
    {
        return $this->hasMany(UserJoinFriendOptionModel::class , 'user_id' , 'id');
    }

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['phone'] = $filter['phone'] ?? '';
        $filter['username'] = $filter['username'] ?? '';
        $filter['nickname'] = $filter['nickname'] ?? '';
        $filter['identifier'] = $filter['identifier'] ?? '';
        $filter['role'] = $filter['role'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'asc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['phone'] != '') {
            $where[] = ['phone' , 'like' , "%{$filter['phone']}%"];
        }
        if ($filter['nickname'] != '') {
            $where[] = ['nickname' , 'like' , "%{$filter['nickname']}%"];
        }
        if ($filter['username'] != '') {
            $where[] = ['username' , 'like' , "%{$filter['username']}%"];
        }
        if ($filter['role'] != '') {
            $where[] = ['role' , '=' , $filter['role']];
        }
        if ($filter['identifier'] != '') {
            $where[] = ['identifier' , '=' , $filter['identifier']];
        }
        $res = self::with(['userOption' , 'userJoinFriendOption' => function($query){
            $query->orderBy('join_friend_method_id' , 'asc');
        }])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as $v)
        {
            self::single($v);
            UserOptionModel::single($v->user_option);
        }
        return $res;
    }

    public static function single($obj = null)
    {
        if (empty($obj)) {
            return ;
        }
        $obj->role_explain = get_value('business.role' , $obj->role);
        $obj->is_temp_explain = get_value('business.bool_for_int' , $obj->is_temp);
        $obj->is_system_explain = get_value('business.bool_for_int' , $obj->is_system);
        $obj->avatar_explain = $obj->avatar;
    }

    public static function countByDate($date)
    {
        return self::whereRaw('date_format(create_time , "%Y-%m-%d") = :date', [
            'date' => $date
        ])->count();
    }
}