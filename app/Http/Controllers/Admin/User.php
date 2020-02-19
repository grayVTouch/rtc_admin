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
use App\Http\Customize\Admin\Action\UserAction;

class User extends Auth
{
    public function list()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['phone'] = $param['phone'] ?? '';
        $param['username'] = $param['username'] ?? '';
        $param['nickname'] = $param['nickname'] ?? '';
        $param['identifier'] = $param['identifier'] ?? '';
        $param['role'] = $param['role'] ?? '';
        $param['order'] = $param['order'] ?? '';
        $param['limit'] = $param['limit'] ?? '';
        $res = UserAction::list($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function del()
    {
        $param = $this->request->post();
        $param['id_list'] = $param['id'] ?? '';
        $res = UserAction::del($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function info()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $res = UserAction::info($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function edit()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['username'] = $param['username'] ?? '';
        $param['nickname'] = $param['nickname'] ?? '';
        $param['phone'] = $param['phone'] ?? '';
        $param['area_code'] = $param['area_code'] ?? '';
        $param['role'] = $param['role'] ?? '';
        $param['is_temp'] = $param['is_temp'] ?? '';
        $param['avatar'] = $param['avatar'] ?? '';
        $param['sex'] = $param['sex'] ?? '';
        $param['birthday'] = $param['birthday'] ?? '';
        $param['signature'] = $param['signature'] ?? '';
        $param['is_system'] = $param['is_system'] ?? '';
        $res = UserAction::edit($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function singleEditUserOption()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['field'] = $param['field'] ?? '';
        $param['value'] = $param['value'] ?? '';
        $res = UserAction::singleEditUserOption($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function singleEditUserJoinFriendOption()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['field'] = $param['field'] ?? '';
        $param['value'] = $param['value'] ?? '';
        $res = UserAction::singleEditUserJoinFriendOption($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}