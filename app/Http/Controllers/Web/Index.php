<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/22
 * Time: 14:19
 */

namespace App\Http\Controllers\Web;


use App\Http\Controllers\Controller;
use App\Http\Customize\Admin\Model\MessageModel;
use App\Http\Customize\Admin\Model\MessageReadStatusModel;

class Index extends Controller
{
    public function index()
    {
        // 跳转到给定的文件
        echo "<script>window.location.href='/admin/compiled/app.html';</script>";
    }

    public function info()
    {
        phpinfo();
    }

    public function test()
    {
        $count = MessageModel::whereNotExists(function($query){
                $query->select('id')
                    ->from('rtc_message_read_status')
                    ->where('user_id' , 600029)
                    ->whereRaw('rtc_message.id = rtc_message_read_status.message_id');
            })
            ->where([
                ['chat_id' , '=' , '600027_600029'] ,
            ])
            ->count();
        var_dump("count: " . $count);
    }
}