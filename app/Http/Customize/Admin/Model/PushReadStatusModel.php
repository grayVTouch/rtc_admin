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

class PushReadStatusModel extends Model
{
    protected $table = 'rtc_push_read_status';

    public static function delByPushId(int $push_id)
    {
        return self::where('push_id' , $push_id)->delete();
    }

    public static function delByPushIds(array $push_ids = [])
    {
        return self::whereIn('push_id' , $push_ids)
            ->delete();
    }

}