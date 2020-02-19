<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:15
 */

namespace App\Http\Customize\Admin\Model;


use function Admin\get_value;
use function Admin\res_url;
use function core\convert_obj;

class GroupMemberModel extends Model
{
    protected $table = 'rtc_group_member';

    public function user()
    {
        return $this->belongsTo(UserModel::class , 'user_id' , 'id');
    }

    public function group()
    {
        return $this->belongsTo(GroupModel::class , 'group_id' , 'id');
    }

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['group_id'] = $filter['group_id'] ?? '';
        $order['field'] = $order['field'] ?? 'id';
        $order['value'] = $order['value'] ?? 'asc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id' , '=' , $filter['id']];
        }
        if ($filter['group_id'] != '') {
            $where[] = ['group_id' , '=' , $filter['group_id']];
        }
        $res = self::with(['user' , 'group'])
            ->where($where)
            ->orderBy($order['field'] , $order['value'])
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as $v)
        {
            self::single($v);
            UserModel::single($v->user);
            GroupModel::single($v->group);
        }
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        $m->can_notice_explain = get_value('business.bool_for_int' , $m->can_notice);
        $m->banned_explain = get_value('business.bool_for_int' , $m->banned);
        $m->top_explain = get_value('business.bool_for_int' , $m->top);
        $m->background_explain = res_url($m->background);
    }


}