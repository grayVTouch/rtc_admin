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
use App\Http\Customize\Admin\Action\PushAction;

class Push extends Auth
{

    public function list()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['push_type'] = $param['push_type'] ?? '';
        $param['role'] = $param['role'] ?? '';
        $param['type'] = $param['type'] ?? '';
        $param['order'] = $param['order'] ?? '';
        $param['limit'] = $param['limit'] ?? '';
        $res = PushAction::list($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function del()
    {
        $param = $this->request->post();
        $param['id_list'] = $param['id_list'] ?? '';
        $res = PushAction::del($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function edit()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $param['push_type'] = $param['push_type'] ?? '';
        $param['user_id'] = $param['user_id'] ?? '';
        $param['role'] = $param['role'] ?? '';
        $param['type'] = $param['type'] ?? '';
        $param['title'] = $param['title'] ?? '';
        $param['content'] = $param['content'] ?? '';
        $param['desc'] = $param['desc'] ?? '';
        $res = PushAction::edit($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function add()
    {
        $param = $this->request->post();
        $param['push_type'] = $param['push_type'] ?? '';
        $param['user_id'] = $param['user_id'] ?? '';
        $param['role'] = $param['role'] ?? '';
        $param['type'] = $param['type'] ?? '';
        $param['title'] = $param['title'] ?? '';
        $param['content'] = $param['content'] ?? '';
        $param['desc'] = $param['desc'] ?? '';
        $res = PushAction::add($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function detail()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $res = PushAction::detail($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    // 推送接口
    public function push()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $res = PushAction::push($this , $param);
        if ($res['code'] != 200) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

}