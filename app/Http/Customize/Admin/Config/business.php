<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/20
 * Time: 16:57
 */

return [
    'role' => [
        'admin' => '工作人员' ,
        'user'  => '平台用户' ,
    ] ,
    'bool_for_int' => [
        0 => '否' ,
        1 => '是' ,
    ] ,
    'bool_for_int_1' => [
        0 => '关闭' ,
        1 => '开启' ,
    ] ,
    'time_range' => [
        // none-关闭 day-天 week-周 month-月
        'none' => '关闭' ,
        'day' => '每天' ,
        'week' => '每周' ,
        'month' => '每月' ,
    ] ,

    // Http 请求的动作类型
    'route_method' => [
        'GET' ,
        'POST' ,
        'PUT' ,
        'PATCH' ,
        'DELETE' ,
        'NONE' ,
    ] ,

    // 接口种类
    'route_type' => [
        // 视图
        'view' ,
        // 接口
        'api' ,
    ] ,

    // 群类型
    'group_type' => [
        1 => '永久群' ,
        2 => '时效群' ,
    ] ,

    // 推送人数类型
    'push_type_for_user' => [
        // 多人
        'multiple' ,
        // 单人
        'single'
    ] ,

    // 推送角色
    'role_for_push' => [
        // 平台用户
        'user' ,
        // 工作人员
        'admin' ,
        // 所有用户
        'all' ,
        // 指定用户
        'designation' ,
    ] ,

    // 推送类型
    'push_type_for_push' => [
        // 系统公告
        'system' ,
        // 还有其他的带新增
    ] ,

    // 推送事件类型
    'push_type_range_for_user' => [
        'multiple' => '多人' ,
        'single' => '单人' ,
    ] ,

    // 推送类型
    'push_type_range_for_push' => [
        'system' => '系统公告' ,
    ] ,

    // 推送角色
    'role_range_for_push' => [
        'user' => '平台用户' ,
        'admin' => '工作人员' ,
        'all' => '所有人' ,
        'designation' => '指定用户' ,
    ] ,


];