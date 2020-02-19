/*
 * 导入静态资源
 */
import logo from '../image/logo.jpg';


/**
 * 引入第三方扩展 css 类库
 */
import 'view-design/dist/styles/iview.css';

/**
 * 引入第三方扩展 js 类库
 */


/**
 * 载入个人 css 依赖
 */
import '../../plugin/Run/base.css';
import '../../plugin/Run/color.css';
import '../../plugin/Run/font.css';
import '../../plugin/Run/button.css';
import '../../plugin/Run/title.css';
import '../../plugin/Run/font/iconfont.css';
import '../../plugin/Run/form/ui.css';
import '../../plugin/Run/form/input.css';
import '../../plugin/Run/form/filter.css';
import '../../plugin/Run/table/line.css';
import '../../plugin/Loading/css/Loading.css';
import '../../plugin/Prompt/css/Prompt.css';
import '../../plugin/MultipleTab/css/MultipleTab.css';
import '../../plugin/InfiniteClassification/css/InfiniteClassification.css';
import '../../plugin/Slidebar/css/Slidebar.css';
import '../../plugin/UploadImage/css/UploadImage.css';

/**
 * 载入个人 js 依赖
 */
import '../../plugin/SmallJs/SmallJs.js';
import '../../plugin/Loading/js/Loading.js';
import '../../plugin/Prompt/js/Prompt.js';
import '../../plugin/MultipleTab/js/MultipleTab.js';
import '../../plugin/InfiniteClassification/js/InfiniteClassification.js';
import '../../plugin/Slidebar/js/Slidebar.js';
import '../../plugin/UploadImage/js/UploadImage.js';

/**
 * 引入初始化 css
 */
import '../../asset/css/public.css';
import '../../asset/css/viewDesign.css';

// import router from '../../vue/router';
// import store from '../../vue/vuex';


/**
 * 全局组件
 */
import {
    Switch ,
    Page ,
    Checkbox ,
    Radio ,
    CheckboxGroup ,
    Tree ,
    DatePicker ,
    RadioGroup ,
    Tooltip ,
    Select,
    Option ,
} from 'view-design/dist/iview.min.js';

import loading from '../../vue/component/public/loading.vue';
import vSwitch from '../../vue/component/public/switch.vue';
import select from '../../vue/component/public/select.vue';
import button from '../../vue/component/public/button.vue';
import order from '../../vue/component/public/order.vue';

// Vue.use(VueRouter);
// Vue.use(Vuex);

// iview 的组件
Vue.component('i-switch' , Switch);
Vue.component('i-page' , Page);
Vue.component('i-checkbox' , Checkbox);
Vue.component('i-radio' , Radio);
Vue.component('i-checkbox-group' , CheckboxGroup);
Vue.component('i-tree' , Tree);
Vue.component('i-date-picker' , DatePicker);
Vue.component('i-radio-group' , RadioGroup);
Vue.component('i-tooltip' , Tooltip);
Vue.component('i-select' , Select);
Vue.component('i-option' , Option);

// 自定义的组件
Vue.component('v-loading' , loading);
Vue.component('v-switch' , vSwitch);
Vue.component('v-select' , select);
Vue.component('v-button' , button);
Vue.component('v-order' , order);

// 请求拦截
G.ajax.responded = function(res){
    if ([1000 , -1000].indexOf(res.code) < 0) {
        return true;
    }
    // 清除登录状态
    G.s.del('token');
    if (res.code == -1000) {
        window.history.go(0);
    } else {
        Prompt.alert(res.data , {
            // 不显示关闭按钮
            closeBtn: false ,
            // 当用户点击确定按钮的时候
            // 刷新页面并退出登录
            btn: [
                {
                    name: '确定' ,
                    callback () {
                        window.history.go(0);
                    } ,
                } ,
            ]
        });
    }
    return false;
};



/**
 * 全局混入
 */
Vue.mixin({

    // // route
    // router ,
    // // vuex
    // store ,

    data () {
        return {
            business ,
        };
    } ,

    methods: {
        getClass (v) {
            return v ? 'error' : '';
        } ,

        vScroll ,

        // 局部提示
        alert (html , option = {}) {
            option.container = this.$el;
            Prompt.alert(html , option);
        } ,

        gAlert (html , option = {}) {
            Prompt.alert(html , option);
        } ,
    } ,
});

/**
 * 元数据初始化
 */

(function(){
    let link = document.createElement('link');
    link = G(link);
    link.attr('rel' , 'icon');
    link.attr('href' , logo);
    document.head.appendChild(link.get(0));
})();