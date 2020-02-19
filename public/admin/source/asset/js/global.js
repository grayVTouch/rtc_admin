// vue 项目依赖
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import wangEditor from 'wangeditor/release/wangEditor.min.js';
import Highcharts from 'highcharts/highstock';


import deleteUnfocus from '../../plugin/UploadImage/image/delete_unfocus.png';


// const host = 'http://admins.gca.cool';
// const host = 'http://admin.bonuswallet.org';
// const host = 'http://admin.hichatvip.com';
const host = 'http://adm.hichatvip.com';
// const host = 'http://admin.rtc.com:10002';
const api = `${host}/api`;
const admin = `${api}/admin`;
const upload = `${admin}/file/upload`;
const uploadForWangEditor = `${admin}/file/uploadForWangEditor`;

window.topContext = {
    host ,
    api ,
    admin ,
    // 全局实例
    ins: {} ,
    // 动画时间
    animationDuration: 300 ,
    // 图片
    image: {} ,
    // 分页参数设置
    page: {
        // 每页显示记录数
        limit: 20 ,
    } ,
    upload ,
    uploadForWangEditor ,
    // 插件资源文件
    pluginRes: {
        UploadImage: {
            image: {
                deleteUnfocus
            } ,
        } ,
    } ,

    successCode: 0 ,
};
window.Vue = Vue;
window.VueRouter = VueRouter;
window.Vuex = Vuex;
window.wangEditor = wangEditor;
window.Highcharts = Highcharts;