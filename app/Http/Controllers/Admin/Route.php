<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;

use App\Http\Customize\Admin\Action\RouteAction;

use function Admin\success;
use function Admin\error;


class Route extends Auth
{
    public function all()
    {
        $param = $this->request->post();
        $res = RouteAction::all($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function add()
    {
        $param = $this->request->post();
        $param['cn']  = $param['cn'] ?? '';
        $param['en']    = $param['en'] ?? '';
        $param['route']  = $param['route'] ?? '';
        $param['type']  = $param['type'] ?? '';
        $param['method'] = $param['method'] ?? '';
        $param['hidden'] = $param['hidden'] ?? '';
        $param['enable'] = $param['enable'] ?? '';
        $param['menu'] = $param['menu'] ?? '';
        $param['p_id'] = $param['p_id'] ?? '';
        $param['weight'] = $param['weight'] ?? '';
        $res = RouteAction::add($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function edit()
    {
        $param = $this->request->post();
        $param['id']    = $param['id'] ?? '';
        $param['cn']  = $param['cn'] ?? '';
        $param['en']    = $param['en'] ?? '';
        $param['route']  = $param['route'] ?? '';
        $param['type']  = $param['type'] ?? '';
        $param['method'] = $param['method'] ?? '';
        $param['hidden'] = $param['hidden'] ?? '';
        $param['enable'] = $param['enable'] ?? '';
        $param['menu']  = $param['menu'] ?? '';
        $param['p_id']  = $param['p_id'] ?? '';
        $param['weight'] = $param['weight'] ?? '';
        $res = RouteAction::edit($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function del()
    {
        $param = $this->request->post();
        $param['id_list'] = $param['id_list'] ?? '';
        $res = RouteAction::del($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function detail()
    {
        $param = $this->request->post();
        $res = RouteAction::detail($this , $param);
        if ($res['code'] != 0) {
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
        $res = RouteAction::singleEdit($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}