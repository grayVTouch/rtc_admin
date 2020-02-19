<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/2/18
 * Time: 19:46
 */

namespace App\Http\Customize\Admin\Model;

use function Admin\get_value;
use Exception;

class ArticleTypeModel extends Model
{
    protected $table = 'rtc_article_type';

    public static function getTypeByName($name = '')
    {
        $res = self::where('name' , $name)->first();
        if (empty($res)) {
            return ;
        }
        self::single($res);
        return $res;
    }

    public static function single($m = null)
    {
        if (empty($m)) {
            return ;
        }

        $m->enable_explain = get_value('business.bool_for_int' , $m->enable);
    }
}