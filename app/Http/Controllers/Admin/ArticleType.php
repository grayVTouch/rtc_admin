<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;

use App\Http\Customize\Admin\Action\ArticleTypeAction;

use function Admin\success;
use function Admin\error;


class ArticleType extends Auth
{
    public function all()
    {
        $param = $this->request->post();
        $res = ArticleTypeAction::all($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function add()
    {
        $param = $this->request->post();
        $param['name']  = $param['name'] ?? '';
        $param['p_id']  = $param['p_id'] ?? '';
        $param['weight']    = $param['weight'] ?? '';
        $param['enable']    = $param['enable'] ?? '';
        $res = ArticleTypeAction::add($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function edit()
    {
        $param = $this->request->post();
        $param['id']    = $param['id'] ?? '';
        $param['name']  = $param['name'] ?? '';
        $param['p_id']  = $param['p_id'] ?? '';
        $param['weight']    = $param['weight'] ?? '';
        $param['enable']    = $param['enable'] ?? '';
        $res = ArticleTypeAction::edit($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function del()
    {
        $param = $this->request->post();
        $param['id_list'] = $param['id_list'] ?? '';
        $res = ArticleTypeAction::del($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function detail()
    {
        $param = $this->request->post();
        $res = ArticleTypeAction::detail($this , $param);
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
        $res = ArticleTypeAction::singleEdit($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }
}