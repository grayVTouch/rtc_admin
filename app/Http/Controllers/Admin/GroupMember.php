<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/28
 * Time: 16:12
 */

namespace App\Http\Controllers\Admin;


use function Admin\error;
use function Admin\success;
use App\Http\Customize\Admin\Action\GroupMemberAction;

class GroupMember extends Auth
{
    public function list()
    {
        $param = $this->request->post();
        $param['group_id'] = $param['group_id'] ?? '';
        $param['order'] = $param['order'] ?? '';
        $param['limit'] = $param['limit'] ?? '';
        $res = GroupMemberAction::list($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function singleEdit()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['field'] = $param['field'] ?? '';
        $param['value'] = $param['value'] ?? '';
        $res = GroupMemberAction::singleEdit($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}