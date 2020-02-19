"use strict";

// 引入初始化 js
import './asset/js/global.js';
import './asset/js/business.js';
import './asset/js/common.js';
import './asset/js/api.js';
import './asset/js/initialize.js';

import router from './vue/router';
import store from './vue/vuex';

import app from './vue/component/app.vue';

/**
 * *************************
 * vue 初始化处理
 * *************************
 */
// 开发者提示关闭！
Vue.config.productionTip = false;
// 是否允许 vue devtool 进行 debug
Vue.config.devtools = true;

// Vue.use(Vuex);
Vue.use(VueRouter);


Vue.mixin({
    router ,
    store ,
});


new Vue({
    el: '#app' ,

    // router ,
    // store ,
    /**
     * 这个地方有多种语法
     * 完整标签的方式
     * "<my-app></my-app>"
     * 简略标签写法
     * "<my-app />" ,
     */
    template: "<app />" ,
    // 注册局部路由
    components: {
        'app': app ,
    } ,
});