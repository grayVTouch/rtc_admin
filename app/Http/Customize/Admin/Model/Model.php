<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 14:47
 */

namespace App\Http\Customize\Admin\Model;

use Exception;
use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    public $timestamps = false;

    public static function multiple($list)
    {
        foreach ($list as $v)
        {
            static::single($v);
        }
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
    }

    // 更新
    public static function updateById($id , array $param = [])
    {
        return static::where('id' , $id)
            ->update($param);
    }

    public static function updateByIds(array $id_list = [] , array $param = [])
    {
        return static::whereIn('id' , $id_list)
            ->update($param);
    }

    public static function getAll()
    {

        $res = static::orderBy('id' , 'asc')
            ->get();
        static::multiple($res);
        return $res;
    }

    public static function findById($id)
    {
        $res = static::find($id);
        if (empty($res)) {
            return ;
        }
        static::single($res);
        return $res;
    }

    public static function getByIds(array $id_list = [])
    {
        $res = static::whereIn('id' , $id_list)->get();
        static::multiple($res);
        return $res;
    }

    public static function delById(int $user_id)
    {
        return self::destroy($user_id);
    }

    public static function delByIds(array $user_ids = [])
    {
        return self::whereIn('id' , $user_ids)
            ->delete();
    }
}