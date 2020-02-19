<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 15:47
 */

namespace App\Http\Customize\Admin\Model;


class StatisticsUserActivityLogModel extends Model
{
    protected $table = 'rtc_statistics_user_activity_log';

    public static function getByDate(string $date)
    {
        $res = self::where('date' , $date)
            ->orderBy('create_time' , 'asc')
            ->orderBy('id' , 'asc')
            ->get();
        self::multiple($res);
        return $res;
    }
}