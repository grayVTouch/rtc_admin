<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Http\Customize\Admin\Model;

use function Admin\get_value;
use function Admin\res_url;
use function core\convert_obj;
use Exception;

class ArticleModel extends Model
{
    protected $table = 'rtc_article';

    // 文章分类
    public function article_type()
    {
        return $this->belongsTo(ArticleTypeModel::class , 'article_type_id' , 'id');
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }
        if (!is_object($m)) {
            throw new Exception('参数 1 类型错误');
        }
        // 封面
        $m->thumb_explain = res_url($m->thumb);
        $m->enable_explain = res_url($m->enable);
    }

    public static function list(array $filter = [] , array $order = [] , int $limit = 20)
    {
        $filter['id'] = $filter['id'] ?? '';
        $filter['p_id'] = $filter['p_id'] ?? '';
        $filter['title'] = $filter['title'] ?? '';
        $order['field'] = $filter['field'] ?? 'id';
        $order['value'] = $filter['value'] ?? 'asc';
        $where = [];
        if ($filter['id'] != '') {
            $where[] = ['id', '=', $filter['id']];
        }
        if ($filter['p_id'] != '') {
            $where[] = ['p_id', '=', $filter['p_id']];
        }
        if ($filter['title'] != '') {
            $where[] = ['title', 'like', "%{$filter['title']}%"];
        }
        $res = self::with(['article_type'])
            ->where($where)
            ->orderBy($order['field'], $order['value'])
            ->paginate($limit);
        $res = convert_obj($res);
        foreach ($res->data as $v)
        {
            self::single($v);
        }
        return $res;
    }
}