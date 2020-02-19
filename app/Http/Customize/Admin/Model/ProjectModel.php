<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:15
 */

namespace App\Http\Customize\Admin\Model;


use function core\convert_obj;

class ProjectModel extends Model
{
    protected $table = 'rtc_project';

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


}