// 请求
function request(url , method ,  data , success , error , callback , before)
{
    // 如果登录就提供
    data = G.isObj(data) && !G.isNull(data) ? data : {};
    data.token = G.s.get('token');
    return G.ajax({
        url ,
        method ,
        data ,
        responseType: 'json' ,
        // 不携带特殊的请求头
        isAllowAjaxHeader: false ,
        before () {
            // 这边可以展示加载层
            if (G.isFunction(before)) {
                before();
            }
        } ,
        success (res) {
            if (res.code != 0) {
                if (G.isFunction(error)) {
                    error(res.data , res.code);
                }
            } else {
                if (G.isFunction(success)) {
                    success(res.data , res.code);
                }
            }
            if (G.isFunction(callback)) {
                callback(res.data , res.code);
            }
        } ,
        error: G.ajaxError
    });
}

//
function post(url , data , success , error , callback , before)
{
    return request(url , 'post' , data , success , error , callback , before);
}

// 检查用户登录状态
function isLogin () {
    return G.s.exists('token');
}


// 指定 id 滚动到指定位置
// 注意这是特意为当前项目而写的！
// 如果换过一个容器元素就会出现错误！
// 请仅在当前项目使用
function vScroll (id , callback) {
    let dom = G('#' + id);
    let container = G(window);
    let val = dom.getDocOffsetVal('top');
    let extra = 80 + 5 + 60;
    val -= extra;
    G.scrollTo(topContext.animateDuration, 'y', 0, val, callback);
}

Object.assign(window , {
    request ,
    post ,
    isLogin ,
    vScroll ,
});