<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::namespace('Web')->group(function(){
    Route::get('/', 'Index@index');
    Route::get('/info', 'Index@info');
    Route::get('/test', 'Index@test');
});