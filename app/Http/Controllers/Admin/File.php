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
use App\Http\Customize\Admin\Action\FileAction;
use App\Http\Customize\Admin\Util\HttpUtil;

class File extends Base
{
    public function upload()
    {
        $file = $_FILES['file'] ?? null;
        $res = FileAction::upload($this , $file);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // wangEditor 多文件上传
    public function uploadForWangEditor()
    {
        $file = $_FILES['file'] ?? null;
        $result = [];
        for ($i = 0; $i < count($file['tmp_name']); ++$i)
        {
            $tmp_name = $file['tmp_name'][$i];
            $type = $file['type'][$i];
            $name = $file['name'][$i];
            $res = HttpUtil::upload($tmp_name , $type , $name);
            if ($res['code'] != 0) {
                return response()->json([
                    'errno' => 500 ,
                    'data' => '部分文件上传到阿里云OSS失败' ,
                ]);
            }
            $result[] = $res['data'];
        }

        return response()->json([
            'errno' => 0 ,
            'data' => $result
        ]);
    }
}