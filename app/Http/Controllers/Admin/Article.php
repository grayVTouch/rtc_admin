<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/3/22
 * Time: 13:49
 */

namespace App\Http\Controllers\Admin;


use App\Http\Customize\Admin\Action\ArticleAction;
use function Admin\success;
use function Admin\error;

class Article extends Auth
{
    public function list()
    {
        $param = $this->request->post();
        $param['id']    = $param['id'] ?? '';
        $param['title']  = $param['title'] ?? '';
        $param['limit']  = $param['limit'] ?? '';
        $param['order'] = $param['order'] ?? '';
        $res = ArticleAction::list($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function add()
    {
        $param = $this->request->post();
        $param['title']  = $param['title'] ?? '';
        $param['author']  = $param['author'] ?? '';
        $param['article_type_id']  = $param['article_type_id'] ?? '';
        $param['enable']  = $param['enable'] ?? '';
        $param['weight']  = $param['weight'] ?? '';
        $param['thumb']  = $param['thumb'] ?? '';
        $param['content']  = $param['content'] ?? '';
        $res = ArticleAction::add($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function edit()
    {
        $param = $this->request->post();
        $param['id']    = $param['id'] ?? '';
        $param['title']  = $param['title'] ?? '';
        $param['author']  = $param['author'] ?? '';
        $param['article_type_id']  = $param['article_type_id'] ?? '';
        $param['enable']  = $param['enable'] ?? '';
        $param['weight']  = $param['weight'] ?? '';
        $param['thumb']  = $param['thumb'] ?? '';
        $param['content']  = $param['content'] ?? '';
        $res = ArticleAction::edit($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function del()
    {
        $param = $this->request->post();
        $param['id_list'] = $param['id_list'] ?? '';
        $res = ArticleAction::del($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

    public function detail()
    {
        $param = $this->request->post();
        $param['id'] = $param['id'] ?? '';
        $res = ArticleAction::detail($this , $param);
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
        $res = ArticleAction::singleEdit($this , $param);
        if ($res['code'] != 0) {
            return error($res['data'] , $res['code']);
        }
        return success($res['data']);
    }

}