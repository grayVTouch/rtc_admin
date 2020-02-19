<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('admin')->namespace('Admin')->group(function(){
    Route::any('login/test' , 'Login@test');

    /**
     * 注册
     */
    Route::post('login/verifyCode' , 'Login@verifyCode');
    Route::post('login/login' , 'Login@login');

    /**
     * 后台用户
     */
    Route::post('admin/info' , 'Admin@info');
    Route::post('admin/list' , 'Admin@list');
    Route::post('admin/del' , 'Admin@del');
    Route::post('admin/add' , 'Admin@add');
    Route::post('admin/edit' , 'Admin@edit');
    Route::post('admin/detail' , 'Admin@detail');

    /**
     * 角色
     */
    Route::post('role/list' , 'Role@list');
    Route::post('role/del' , 'Role@del');
    Route::post('role/edit' , 'Role@edit');
    Route::post('role/detail' , 'Role@detail');
    Route::post('role/add' , 'Role@add');
    Route::post('role/priv' , 'Role@priv');
    Route::post('role/allocate' , 'Role@allocate');
    Route::post('role/all' , 'Role@all');

    /**
     * 用户
     */
    Route::post('user/list' , 'User@list');
    Route::post('user/info' , 'User@info');
    Route::post('user/edit' , 'User@edit');
    Route::post('user/singleEditUserOption' , 'User@singleEditUserOption');
    Route::post('user/singleEditUserJoinFriendOption' , 'User@singleEditUserJoinFriendOption');

    /**
     * 项目
     */
    Route::post('project/list' , 'Project@list');
    Route::post('project/del' , 'Project@del');
    Route::post('project/edit' , 'Project@edit');
    Route::post('project/detail' , 'Project@detail');
    Route::post('project/add' , 'Project@add');

    /**
     * 文件
     */
    Route::post('file/upload' , 'File@upload');
    Route::post('file/uploadForWangEditor' , 'File@uploadForWangEditor');

    /**
     * ******************************
     * 路由
     * ******************************
     */
    Route::post('route/detail' , 'Route@detail');
    Route::post('route/all' , 'Route@all');
    Route::post('route/add' , 'Route@add');
    Route::post('route/edit' , 'Route@edit');
    Route::post('route/del' , 'Route@del');
    Route::post('route/singleEdit' , 'Route@singleEdit');

    /**
     * ******************************
     * 文章分类
     * ******************************
     */
    Route::post('article_type/detail' , 'ArticleType@detail');
    Route::post('article_type/all' , 'ArticleType@all');
    Route::post('article_type/add' , 'ArticleType@add');
    Route::post('article_type/edit' , 'ArticleType@edit');
    Route::post('article_type/del' , 'ArticleType@del');
    Route::post('article_type/singleEdit' , 'ArticleType@singleEdit');

    /**
     * ******************************
     * 文章
     * ******************************
     */
    Route::post('article/detail' , 'Article@detail');
    Route::post('article/list' , 'Article@list');
    Route::post('article/add' , 'Article@add');
    Route::post('article/edit' , 'Article@edit');
    Route::post('article/del' , 'Article@del');
    Route::post('article/singleEdit' , 'Article@singleEdit');

    /**
     * 群
     */
    Route::post('group/list' , 'Group@list');
    Route::post('group/del' , 'Group@del');
    Route::post('group/edit' , 'Group@edit');
    Route::post('group/detail' , 'Group@detail');
    Route::post('group/add' , 'Group@add');
    Route::post('group/singleEdit' , 'Group@singleEdit');

    /**
     * 群成员
     */
    Route::post('group_member/list' , 'GroupMember@list');
    Route::post('group_member/singleEdit' , 'GroupMember@singleEdit');

    /**
     * 推送
     */
    Route::post('push/list' , 'Push@list');
    Route::post('push/del' , 'Push@del');
    Route::post('push/edit' , 'Push@edit');
    Route::post('push/detail' , 'Push@detail');
    Route::post('push/add' , 'Push@add');
    Route::post('push/singleEdit' , 'Push@singleEdit');
    Route::post('push/push' , 'Push@push');

    /**
     * 控制面板
     */
    Route::post('pannel/info' , 'Pannel@info');
    Route::post('pannel/statisticsUserActivityLog' , 'Pannel@statisticsUserActivityLog');

    /**
     * 控制面板
     */
    Route::post('userActivityLog/list' , 'UserActivityLog@list');
});