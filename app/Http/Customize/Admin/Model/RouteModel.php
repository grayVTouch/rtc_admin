<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:16
 */

namespace App\Http\Customize\Admin\Model;


use function Admin\res_url;
use function core\convert_obj;

class RouteModel extends Model
{
    protected $table = 'rtc_route';

    public static function getByRoleIdAndType(int $role_id , string $type = '')
    {
        $where = [
            ['rr.role_id' , '=' , $role_id] ,
        ];
        if (!empty($type)) {
            $where[] = ['r.type' , '=' , $type];
        }
        $res = self::from('rtc_route as r')
            ->leftJoin('rtc_role_route as rr' , 'r.id' , '=' , 'rr.route_id')
            ->where($where)
            ->select('r.*')
            ->get();
        $res = convert_obj($res);
        foreach ($res as $v)
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
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        $m->s_ico_explain = res_url($m->s_ico);
        $m->b_ico_explain = res_url($m->b_ico);
    }

    // 获取所有相关路由，排除 隐藏/未启用
    public static function route($id = 0 , $self = true , $struct = false)
    {
        $data = self::where([
            ['enable' , '=' , 'y'] ,
            ['hidden' , '=' , 'n'] ,
        ])
            ->orderBy('weight' , 'desc')
            ->orderBy('id' , 'asc')
            ->get()
            ->each(function($v){
                self::single($v);
            })
            ->toArray();
        $res = Category::childrens($id , $data , [
            'id'    => 'id' ,
            'p_id'  => 'p_id' ,
        ] , $self , $struct);
        return $res;
    }

    public static function getAll()
    {
        $res = self::orderBy('weight' , 'desc')
            ->orderBy('id' , 'desc')
            ->get();
        static::multiple($res);
        return $res;
    }


}