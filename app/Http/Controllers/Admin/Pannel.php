<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:07
 */

namespace App\Http\Controllers\Admin;


use function Admin\error;
use function Admin\success;
use App\Http\Customize\Admin\Action\AdminAction;
use App\Http\Customize\Admin\Action\PannelAction;

class Pannel extends Auth
{
    // 统计信息
    public function info()
    {
        $param = $this->request->post();
        $res = PannelAction::info($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 统计信息
    public function statisticsUserActivityLog()
    {

        $param = $this->request->post();
        $param['date'] = $param['date'] ?? '';
        $res = PannelAction::statisticsUserActivityLog($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}