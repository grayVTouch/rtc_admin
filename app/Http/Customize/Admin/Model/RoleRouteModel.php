<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/17
 * Time: 16:16
 */

namespace App\Http\Customize\Admin\Model;


use Illuminate\Database\Eloquent\Relations\Pivot;

class RoleRouteModel extends Pivot
{
    protected $table = 'rtc_role_route';

    public static function delByRoleId(int $role_id)
    {
        return self::where('role_id' , $role_id)
            ->delete();
    }

    public static function delByRoleIds(array $role_id_list)
    {
        return self::whereIn('role_id' , $role_id_list)
            ->delete();
    }
}