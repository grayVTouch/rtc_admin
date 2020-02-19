<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2020/2/19
 * Time: 15:48
 */

namespace App\Http\Customize\Admin\Action;


use App\Http\Controllers\Admin\Auth;
use App\Http\Customize\Admin\Model\GroupModel;
use App\Http\Customize\Admin\Model\StatisticsUserActivityLogModel;
use App\Http\Customize\Admin\Model\UserModel;

class PannelAction extends Action
{

    private static function util_ratio(int $today , int $yesterday)
    {
        if ($yesterday == 0) {
            $ratio = bcmul($today , 100 , 2);
        } else {
            $amount = bcsub($today  , $yesterday);
            $ratio = bcdiv($amount , $yesterday , 4);
            $ratio = bcmul($ratio , 100 , 2);
        }
        $ratio = abs($ratio);
        return sprintf('%s%%' , $ratio);
    }

    private static function util_flag($today , $yesterday)
    {
        return $today - $yesterday >= 0 ? 'up' : 'down';
    }

    public static function info(Auth $auth , array $param)
    {
        $today = date('Y-m-d');
        $yesterday  = date_create('yesterday')->format('Y-m-d');

        // 今日
        $user_count_for_today                       = UserModel::countByDate($today);
        $group_count_for_today                       = GroupModel::countByDate($today);

        // 昨日
        $user_count_for_yesterday = UserModel::countByDate($yesterday);
        $group_count_for_yesterday = GroupModel::countByDate($yesterday);

        // 比例
        $ratio_for_user = self::util_ratio($user_count_for_today , $user_count_for_yesterday);
        $ratio_for_group = self::util_ratio($group_count_for_today , $group_count_for_yesterday);

        // 标志
        $flag_for_user = self::util_flag($user_count_for_today  , $user_count_for_yesterday);
        $flag_for_group = self::util_flag($group_count_for_today  , $group_count_for_yesterday);

        // 总计
        $user_count = UserModel::count();
        $group_count = GroupModel::count();

        return self::success([
            'user' => [
                'today'     => $user_count_for_today ,
                'yesterday' => $user_count_for_yesterday ,
                'flag'      => $flag_for_user ,
                'ratio'     => $ratio_for_user ,
                'total'     => $user_count ,
            ] ,
            'group' => [
                'today'     => $group_count_for_today ,
                'yesterday' => $group_count_for_yesterday ,
                'flag'      => $flag_for_group ,
                'ratio'     => $ratio_for_group ,
                'total'     => $group_count ,
            ] ,
        ]);

    }

    public static function statisticsUserActivityLog(Auth $auth , array $param)
    {
        $date = empty($param['date']) ? date('Y-m-d') : $param['date'];
        $res = StatisticsUserActivityLogModel::getByDate($date);
        foreach ($res as $v)
        {
            $v->time_point = date('H:i' , strtotime($v->create_time));
        }
        return self::success($res);
    }
}