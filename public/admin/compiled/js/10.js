(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{355:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"c-component"},[s("navigation",{attrs:{topRoute:t.topRoute,position:t.position}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"in"},[s("div",{staticClass:"top"},[s("form",{on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[t._m(0),t._v(" "),s("div",{staticClass:"filter-options"},[s("div",{staticClass:"option"},[s("div",{staticClass:"field"},[t._v("ID：")]),t._v(" "),s("div",{staticClass:"value"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.id},on:{input:function(i){i.target.composing||t.$set(t.form,"id",i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"option"},[s("div",{staticClass:"field"},[t._v("标识符：")]),t._v(" "),s("div",{staticClass:"value"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.identifier,expression:"form.identifier"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.identifier},on:{input:function(i){i.target.composing||t.$set(t.form,"identifier",i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"option"},[s("div",{staticClass:"field"},[t._v("用户名：")]),t._v(" "),s("div",{staticClass:"value"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.username},on:{input:function(i){i.target.composing||t.$set(t.form,"username",i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"option"},[s("div",{staticClass:"field"},[t._v("昵称：")]),t._v(" "),s("div",{staticClass:"value"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nickname,expression:"form.nickname"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.nickname},on:{input:function(i){i.target.composing||t.$set(t.form,"nickname",i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"option"},[s("div",{staticClass:"field"},[t._v("手机号码：")]),t._v(" "),s("div",{staticClass:"value"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.phone},on:{input:function(i){i.target.composing||t.$set(t.form,"phone",i.target.value)}}})])]),t._v(" "),s("div",{staticClass:"option"},[s("div",{staticClass:"field"},[t._v("角色：")]),t._v(" "),s("div",{staticClass:"value"},[s("i-select",{staticStyle:{width:"200px"},model:{value:t.form.role,callback:function(i){t.$set(t.form,"role",i)},expression:"form.role"}},[s("i-option",{attrs:{value:""}},[t._v("请选择...")]),t._v(" "),t._l(t.business.role,(function(i,e){return s("i-option",{key:e,attrs:{value:e}},[t._v(t._s(i))])}))],2)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),s("div",{staticClass:"btm list"},[s("div",{staticClass:"data"},[t._m(2),t._v(" "),s("table",{staticClass:"line-tb"},[s("thead",[s("tr",[s("th",{staticClass:"th-checkbox"},[s("i-checkbox",{on:{"on-change":t.selectAllEvent}})],1),t._v(" "),s("th",{staticClass:"w-80"},[t._v("\n                                ID\n                                "),s("span",{staticClass:"arrow"},[s("i",{staticClass:"run-iconfont run-arrow top",class:"id|asc"==t.form.order?"focus":"",attrs:{"data-order":"id|asc"},on:{click:t.order}}),t._v(" "),s("i",{staticClass:"run-iconfont run-arrow btm",class:"id|desc"==t.form.order?"focus":"",attrs:{"data-order":"id|desc"},on:{click:t.order}})])]),t._v(" "),s("th",{staticClass:"w-130"},[t._v("用户")]),t._v(" "),s("th",{staticClass:"w-130"},[t._v("状态")]),t._v(" "),s("th",{staticClass:"w-130"},[t._v("用户添加好友选项")]),t._v(" "),s("th",{staticClass:"w-130"},[t._v("用户选项")]),t._v(" "),s("th",{staticClass:"w-100"},[t._v("\n                                创建时间\n                                "),s("span",{staticClass:"arrow"},[s("i",{staticClass:"run-iconfont run-arrow top",class:"create_time|asc"==t.form.order?"focus":"",attrs:{"data-order":"create_time|asc"},on:{click:t.order}}),t._v(" "),s("i",{staticClass:"run-iconfont run-arrow btm",class:"create_time|desc"==t.form.order?"focus":"",attrs:{"data-order":"create_time|desc"},on:{click:t.order}})])]),t._v(" "),s("th",{staticClass:"w-100"},[t._v("操作")])])]),t._v(" "),s("tbody",{ref:"tbody"},[t._l(t.listData,(function(i,e){return s("tr",{key:i.id,on:{click:function(s){return t.selectEvent(i.id)}}},[s("td",[s("i-checkbox-group",{model:{value:t.idList,callback:function(i){t.idList=i},expression:"idList"}},[s("i-checkbox",{attrs:{label:i.id}})],1)],1),t._v(" "),s("td",{staticClass:"multiple-rows"},[s("div",{staticClass:"row"},[t._v("【ID】"),s("span",{staticClass:"weight"},[t._v(t._s(i.id))])]),t._v(" "),s("div",{staticClass:"row"},[s("img",{staticClass:"image",attrs:{src:i.avatar_explain}})])]),t._v(" "),s("td",{staticClass:"multiple-rows"},[s("div",{staticClass:"row"},[t._v("【标识符】"),s("span",{staticClass:"weight",attrs:{title:i.identifier}},[t._v(t._s(i.identifier))])]),t._v(" "),s("div",{staticClass:"row"},[t._v("【用户名】"),s("span",{staticClass:"weight",attrs:{title:i.name}},[t._v(t._s(i.username))])]),t._v(" "),s("div",{staticClass:"row"},[t._v("【昵称】"),s("span",{staticClass:"weight",attrs:{title:i.nickname}},[t._v(t._s(i.nickname))])]),t._v(" "),s("div",{staticClass:"row"},[t._v("【角色】"),s("span",{staticClass:"weight",attrs:{title:i.role_explain}},[t._v(t._s(i.role_explain))])]),t._v(" "),s("div",{staticClass:"row"},[t._v("【区号】"),s("span",{staticClass:"weight",attrs:{title:i.area_code}},[t._v(t._s(i.area_code))])]),t._v(" "),s("div",{staticClass:"row"},[t._v("【手机号码】"),s("span",{staticClass:"weight",attrs:{title:i.phone}},[t._v(t._s(i.phone))])])]),t._v(" "),s("td",{staticClass:"multiple-rows"},[s("div",{staticClass:"row"},[t._v("【系统用户？】"),s("span",{staticClass:"weight",class:i.is_system?"red":""},[t._v(t._s(i.is_system_explain))])]),t._v(" "),s("div",{staticClass:"row"},[t._v("【临时用户？】"),s("span",{staticClass:"weight",class:i.is_temp?"red":""},[t._v(t._s(i.is_temp_explain))])])]),t._v(" "),s("td",{staticClass:"multiple-rows"},t._l(i.user_join_friend_option,(function(e){return s("div",{staticClass:"row",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"field fix-field"},[t._v("【"+t._s(e.join_friend_method.name)+"】")]),t._v(" "),s("div",{staticClass:"value"},[s("v-switch",{attrs:{size:"small",extra:{id:i.id,join_friend_method_id:e.join_friend_method_id}},on:{"on-change":t.singleEditUserJoinFriendOption},model:{value:e.enable,callback:function(i){t.$set(e,"enable",i)},expression:"v1.enable"}})],1)])})),0),t._v(" "),s("td",{staticClass:"multiple-rows"},[s("div",{staticClass:"row",on:{click:function(t){t.stopPropagation()}}},[t._v("【私聊通知】"),s("v-switch",{attrs:{size:"small",extra:{id:i.id,field:"private_notification"}},on:{"on-change":t.singleEditUserOption},model:{value:i.user_option.private_notification,callback:function(s){t.$set(i.user_option,"private_notification",s)},expression:"v.user_option.private_notification"}})],1),t._v(" "),s("div",{staticClass:"row",on:{click:function(t){t.stopPropagation()}}},[t._v("【群聊通知】"),s("v-switch",{attrs:{size:"small",extra:{id:i.id,field:"group_notification"}},on:{"on-change":t.singleEditUserOption},model:{value:i.user_option.group_notification,callback:function(s){t.$set(i.user_option,"group_notification",s)},expression:"v.user_option.group_notification"}})],1),t._v(" "),s("div",{staticClass:"row",on:{click:function(t){t.stopPropagation()}}},[t._v("【输入状态】"),s("v-switch",{attrs:{size:"small",extra:{id:i.id,field:"write_status"}},on:{"on-change":t.singleEditUserOption},model:{value:i.user_option.write_status,callback:function(s){t.$set(i.user_option,"write_status",s)},expression:"v.user_option.write_status"}})],1),t._v(" "),s("div",{staticClass:"row",on:{click:function(t){t.stopPropagation()}}},[t._v("【好友验证】"),s("v-switch",{attrs:{size:"small",extra:{id:i.id,field:"friend_auth"}},on:{"on-change":t.singleEditUserOption},model:{value:i.user_option.friend_auth,callback:function(s){t.$set(i.user_option,"friend_auth",s)},expression:"v.user_option.friend_auth"}})],1),t._v(" "),s("div",{staticClass:"row",on:{click:function(t){t.stopPropagation()}}},[t._v("【全局禁言】"),s("v-switch",{attrs:{size:"small",extra:{id:i.id,field:"banned"}},on:{"on-change":t.singleEditUserOption},model:{value:i.user_option.banned,callback:function(s){t.$set(i.user_option,"banned",s)},expression:"v.user_option.banned"}})],1),t._v(" "),s("div",{staticClass:"row",on:{click:function(t){t.stopPropagation()}}},[t._v("\n                                    【自动清理私聊消息】\n                                    "),s("i-tooltip",{attrs:{content:"点击修改值",placement:"top"}},[s("span",{staticClass:"weight",class:i.user_option&&"none"==i.user_option.clear_timer_for_private?"green":"",on:{click:function(s){return s.stopPropagation(),t.editClearTimer(i.id,"private")}}},[t._v(t._s(i.user_option?i.user_option.clear_timer_for_private_explain:"待查"))])])],1),t._v(" "),s("div",{staticClass:"row",on:{click:function(t){t.stopPropagation()}}},[t._v("\n                                    【自动清理群聊消息】\n                                    "),s("i-tooltip",{attrs:{placement:"bottom",content:"点击可修改值"}},[s("span",{staticClass:"weight",class:i.user_option&&"none"==i.user_option.clear_timer_for_group?"green":"",on:{click:function(s){return s.stopPropagation(),t.editClearTimer(i.id,"group")}}},[t._v(t._s(i.user_option?i.user_option.clear_timer_for_group_explain:"待查"))])])],1)]),t._v(" "),s("td",[t._v(t._s(i.create_time))]),t._v(" "),s("td",{staticClass:"multiple-rows"},[s("div",{staticClass:"row"},[s("button",{staticClass:"run-button run-button-yellow",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.location("/user/edit",{id:i.id,mode:"edit"},"_blank")}}},[t._v("编辑 "),s("i",{staticClass:"run-iconfont run-iconfont-edit"})])]),t._v(" "),s("div",{staticClass:"row"},[s("button",{staticClass:"run-button run-button-yellow",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.location("/userActivityLog/list",{user_id:i.id},"_blank")}}},[t._v("活跃状态 "),s("i",{staticClass:"run-iconfont run-iconfont-edit"})])])])])})),t._v(" "),0==t.listData.length?s("tr",[s("td",{attrs:{colspan:"8"}},[t._v("没有相关数据")])]):t._e()],2)])]),t._v(" "),s("div",{staticClass:"page"},[s("i-page",{attrs:{total:t.page.total,current:t.form.page,"page-size":t.form.limit,size:"small","show-total":"","show-elevator":""},on:{"on-change":t.pageEvent}})],1)])])]),t._v(" "),s("v-loading",{ref:"loading"})],1)};e._withStripped=!0;var a={name:"v-list",data:function(){return{form:{id:"",identifier:"",username:"",nickname:"",role:"",phone:"",order:"",page:1,limit:topContext.page.limit},ins:{loading:null},pending:{del:null},dom:{},listData:[],idList:[],page:{total:0}}},created:function(){},mounted:function(){this.initDom(),this.initInstance(),this.getData()},components:{},methods:{initDom:function(){},initInstance:function(){this.ins.loading=this.$refs.loading.ins.loading},getData:function(){var t=this;this.pending.get?this.alert("请求中...请耐心等待"):(this.pending.get=!0,this.ins.loading.listen("close",(function(){t.pending.get=!1})),this.ins.loading.show(),Api.user.list(this.form,(function(i){t.listData=i.data,t.form.page=i.current_page,t.page.total=i.total}),null,(function(){t.ins.loading.hide(),t.ins.loading.listen("close",null),t.pending.get=!1})))},pageEvent:function(t){this.form.page=t,this.getData()},order:function(t){var i=G(t.currentTarget);this.form.order=i.data("order"),this.reloadData(!0)},selectEvent:function(t){var i=this.idList.indexOf(t);i>=0?this.idList.splice(i,1):this.idList.push(t)},selectAllEvent:function(t){t?this.selectedAll():this.unselectedAll()},selectedAll:function(){var t,i;for(this.idList=[],t=0;t<this.listData.length;++t)i=this.listData[t],this.idList.push(i.id)},unselectedAll:function(){this.idList=[]},submit:function(){this.form.page=1,this.getData()},reloadData:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(this.form.page=1),this.getData()},del:function(t){var i=this;this.alert("确定删除吗？",{btn:[{name:"删除",callback:function(){this.hide(),i.ins.loading.show(),i.ins.loading.listen("close",(function(){i.pending.del=!1})),Api.user.del(t,(function(t){i.alert("操作成功"),i.reloadData()}),(function(t,s){i.alert(t)}),(function(){i.pending.del=!1,i.ins.loading.hide(),i.ins.loading.listen("close",null)}))}},{name:"取消",callback:function(){this.hide()}}]})},singleEditUserJoinFriendOption:function(t,i){var s=this,e=this;this.ins.loading.show(),Api.user.singleEditUserJoinFriendOption({id:i.id,join_friend_method_id:i.join_friend_method_id,enable:t},null,(function(t,i){s.alert(t)}),(function(){e.reloadData()}))},singleEditUserOption:function(t,i){var s=this,e=this;this.ins.loading.show(),Api.user.singleEditUserOption({id:i.id,field:i.field,value:t},null,(function(t,i){s.alert(t)}),(function(){s.ins.loading.hide(),e.reloadData()}))},editClearTimer:function(t,i){var s=this,e="";switch(i){case"private":e="clear_timer_for_private";break;case"group":e="clear_timer_for_group"}var a=[],n=this,o=function(i){var o={name:s.business.clear_timer_range[i],callback:function(){this.hide(),n.singleEditUserOption(t,e,i)}};a.push(o)};for(var r in this.business.clear_timer_range)o(r);this.alert("请选择",{btn:a})}}},n=(s(380),s(381),s(382),s(440),s(14)),o=Object(n.a)(a,e,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"run-title"},[i("div",{staticClass:"left"},[this._v("筛选")]),this._v(" "),i("div",{staticClass:"right"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"option"},[i("div",{staticClass:"field"}),this._v(" "),i("div",{staticClass:"value"},[i("button",{staticClass:"run-button run-button-blue",attrs:{type:"submit"}},[this._v("提交")]),this._v(" "),i("button",{staticClass:"run-button run-button-yellow",attrs:{type:"reset"}},[i("i",{staticClass:"run-iconfont run-reset"}),this._v("\n                                    重置\n                                ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"run-title"},[i("div",{staticClass:"left"},[this._v("数据列表")]),this._v(" "),i("div",{staticClass:"right"})])}],!1,null,"9ed2653e",null);o.options.__file="source/vue/component/user/list.vue";i.default=o.exports},377:function(t,i,s){},378:function(t,i,s){},379:function(t,i,s){},380:function(t,i,s){"use strict";var e=s(377);s.n(e).a},381:function(t,i,s){"use strict";var e=s(378);s.n(e).a},382:function(t,i,s){"use strict";var e=s(379);s.n(e).a},392:function(t,i,s){},440:function(t,i,s){"use strict";var e=s(392);s.n(e).a}}]);