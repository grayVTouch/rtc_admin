(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{359:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"c-component"},[n("navigation",{attrs:{topRoute:t.topRoute,position:t.position}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"in"},[n("form",{on:{submit:function(i){return i.preventDefault(),t.submit(i)}}},[n("table",{staticClass:"input-tb"},[n("tbody",[n("tr",{class:t.getClass(t.error.name),attrs:{id:"name"}},[n("td",[t._v("名称")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(i){i.target.composing||t.$set(t.form,"name",i.target.value)}}}),t._v(" "),n("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),n("span",{staticClass:"tip"}),t._v(" "),n("span",{staticClass:"msg"},[t._v(t._s(t.error.name))])])]),t._v(" "),n("tr",{class:t.getClass(t.error.weight),attrs:{id:"weight"}},[n("td",[t._v("权重")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.weight,expression:"form.weight"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.weight},on:{input:function(i){i.target.composing||t.$set(t.form,"weight",i.target.value)}}}),t._v(" "),n("span",{staticClass:"necessary"}),t._v(" "),n("span",{staticClass:"tip"},[t._v("默认：0，仅允许输入整数")]),t._v(" "),n("span",{staticClass:"msg"},[t._v(t._s(t.error.weight))])])]),t._v(" "),t._m(0)])])])])]),t._v(" "),n("v-loading",{ref:"loading"})],1)};s._withStripped=!0;var e={name:"role",data:function(){return{form:{id:"",name:"",weight:0},error:{},ins:{loading:null},pending:{submit:null}}},created:function(){},mounted:function(){this.initDom(),this.initIns(),this.getData()},methods:{getData:function(){var t=this;"edit"==this.param.mode&&(this.ins.loading.show(),Api.role.detail(this.param.id,(function(i){t.form=i}),null,(function(){t.ins.loading.hide()})))},initDom:function(){},initIns:function(){this.ins.loading=this.$refs.loading.ins.loading},check:function(){return!0},submit:function(){var t=this;if(this.pending.submit)this.alert("请求中...请耐心等待");else if(this.check()){this.ins.loading.listen("close",(function(){t.pending.submit=!1})),this.pending.submit=!0,this.ins.loading.show();var i=this;Api.role[this.param.mode](this.form,(function(n){t.alert("操作成功",{btn:[{name:"角色列表",callback:function(){i.location("/role/list")}},{name:"继续"+("edit"==t.param.mode?"编辑":"添加"),callback:function(){this.hide()}}]})}),(function(i,n){t.error={},-400==n&&(t.error=i,t.vScroll(G.v.firstKey(t.error)))}),(function(){t.pending.submit=!1,t.ins.loading.hide(),t.ins.loading.listen("close",null)}))}}}},a=(n(380),n(445),n(446),n(14)),o=Object(a.a)(e,s,[function(){var t=this.$createElement,i=this._self._c||t;return i("tr",[i("td",{attrs:{colspan:"2"}},[i("button",{staticClass:"run-button run-button-submit",attrs:{type:"submit"}},[this._v("提交")])])])}],!1,null,"10b46cee",null);o.options.__file="source/vue/component/role/role.vue";i.default=o.exports},377:function(t,i,n){},380:function(t,i,n){"use strict";var s=n(377);n.n(s).a},397:function(t,i,n){},398:function(t,i,n){},445:function(t,i,n){"use strict";var s=n(397);n.n(s).a},446:function(t,i,n){"use strict";var s=n(398);n.n(s).a}}]);