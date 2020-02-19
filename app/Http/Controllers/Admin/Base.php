<?php
/**
 * Created by PhpStorm.
 * User: grayVTouch
 * Date: 2019/11/15
 * Time: 13:57
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Customize\Admin\Middleware\CustomizeMiddleware;
use ReflectionClass;
use Illuminate\Http\Request;

class Base extends Controller
{
    protected $request = null;

    public function __construct(Request $request)
    {
        $reflection = new ReflectionClass(parent::class);
        if (!is_null($reflection->getConstructor())) {
            parent::__construct();
        }
        $this->request = $request;
        /**
         * 中间件
         */
        $this->middleware(CustomizeMiddleware::class);
    }
}