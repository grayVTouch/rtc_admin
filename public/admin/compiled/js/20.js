(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{360:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"c-component"},[n("navigation",{attrs:{topRoute:t.topRoute,position:t.position}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"in"},[n("form",{on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[t._m(0),t._v(" "),n("div",{staticClass:"c-content"},[n("table",{staticClass:"input-tb"},[n("tbody",[n("tr",[n("td",[n("i-tree",{ref:"tree",attrs:{data:t.routes,"show-checkbox":"",multiple:"","check-strictly":"","check-directly":""}})],1)]),t._v(" "),t._m(1)])])])])])]),t._v(" "),n("v-loading",{ref:"loading"})],1)};e._withStripped=!0;var s={name:"priv",data:function(){return{expand:!0,data:[],priv:[],routes:[],idList:[],ins:{tree:null},pending:{submit:null}}},mounted:function(){this.initDom(),this.initIns(),this.getData()},methods:{initDom:function(){},initIns:function(){this.ins.loading=this.$refs.loading.ins.loading,this.ins.tree=this.$refs.tree},getData:function(){var t=this;this.ins.loading.show(),Api.role.priv(this.param.id,(function(i){t.priv=i.priv,t.handle(i.route),t.routes=i.route}),null,(function(){t.ins.loading.hide()}))},handle:function(t){for(var i=0;i<t.length;++i){var n=t[i];n.title=n.cn,n.checked=this.isSelected(n.id),n.expand=this.expand,n.children.length>0&&this.handle(n.children)}},isSelected:function(t){for(var i=0;i<this.priv.length;++i){if(t==this.priv[i].id)return!0}return!1},idListForSelected:function(){for(var t=this.ins.tree.getCheckedNodes(),i=[],n=0;n<t.length;++n){var e=t[n];i.push(e.id)}return i},submit:function(){var t=this;if(this.pending.submit)Prompt.alert("请求中...请耐心等待");else{var i=this;this.pending.submit=!0,this.ins.loading.show(),this.ins.loading.listen("close",(function(){t.pending.submit=!1}));var n=this.idListForSelected();n=G.jsonEncode(n),Api.role.allocate({id:this.param.id,route_id_list:n},(function(t){Prompt.alert("操作成功",{btn:[{name:"角色列表",callback:function(){this.hide(),i.location("/role/list")}},{name:"继续分配",callback:function(){this.hide()}}]})}),null,(function(){t.pending.submit=!1,t.ins.loading.hide(),t.ins.loading.listen("close",null)}))}}}},o=(n(447),n(448),n(449),n(14)),r=Object(o.a)(s,e,[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"run-title"},[i("div",{staticClass:"left"},[this._v("权限列表")]),this._v(" "),i("div",{staticClass:"right"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("tr",[i("td",[i("button",{staticClass:"run-button run-button-submit"},[this._v("提交")])])])}],!1,null,"49146ab2",null);r.options.__file="source/vue/component/role/priv.vue";i.default=r.exports},399:function(t,i,n){},400:function(t,i,n){},401:function(t,i,n){},447:function(t,i,n){"use strict";var e=n(399);n.n(e).a},448:function(t,i,n){"use strict";var e=n(400);n.n(e).a},449:function(t,i,n){"use strict";var e=n(401);n.n(e).a}}]);