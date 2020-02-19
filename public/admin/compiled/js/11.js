(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/user_activity_log/js/list.js?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./source/vue/component/user_activity_log/js/list.js?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-list",
  data: function data() {
    return {
      form: {
        id: '',
        order: '',
        user_id: 0,
        page: 1,
        limit: topContext.page.limit
      },
      ins: {
        loading: null
      },
      pending: {
        del: null
      },
      dom: {},
      listData: [],
      // 待删除的记录 id 列表
      idList: [],
      page: {
        total: 0
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {
    // 获取数据
    this.initDom();
    this.initInstance();
    this.initialize();
    this.getData();
  },
  components: {},
  methods: {
    // 初始化 dom
    initDom: function initDom() {},
    // 初始化必须的实例
    initInstance: function initInstance() {
      this.ins.loading = this.$refs.loading.ins.loading;
    },
    initialize: function initialize() {
      this.form.user_id = this.param.user_id;
      console.log('user_id', this.form.user_id);
    },
    // 获取数据
    getData: function getData() {
      var _this = this;

      if (this.pending.get) {
        this.alert('请求中...请耐心等待');
        return;
      }

      this.pending.get = true;
      this.ins.loading.listen('close', function () {
        _this.pending.get = false;
      });
      this.ins.loading.show();
      Api.userActivityLog.list(this.form, function (res) {
        _this.listData = res.data;
        _this.form.page = res.current_page;
        _this.page.total = res.total;
      }, null, function () {
        _this.ins.loading.hide();

        _this.ins.loading.listen('close', null);

        _this.pending.get = false;
      });
    },
    pageEvent: function pageEvent(page) {
      this.form.page = page;
      this.getData();
    },
    order: function order(e) {
      var tar = G(e.currentTarget);
      this.form.order = tar.data('order');
      this.reloadData(true);
    },
    selectEvent: function selectEvent(id) {
      var index = this.idList.indexOf(id);

      if (index >= 0) {
        this.idList.splice(index, 1);
        return;
      }

      this.idList.push(id);
    },
    selectAllEvent: function selectAllEvent(selected) {
      if (selected) {
        this.selectedAll();
      } else {
        this.unselectedAll();
      }
    },
    selectedAll: function selectedAll() {
      var i;
      var v;
      this.idList = [];

      for (i = 0; i < this.listData.length; ++i) {
        v = this.listData[i];
        this.idList.push(v.id);
      }
    },
    unselectedAll: function unselectedAll() {
      this.idList = [];
    },
    submit: function submit() {
      this.form.page = 1;
      this.getData();
    },
    // 重新加载页面
    reloadData: function reloadData() {
      var pageResize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (pageResize) {
        this.form.page = 1;
      }

      this.getData();
    },
    // 删除时间
    del: function del(idList) {
      var self = this;
      this.alert('确定删除吗？', {
        btn: [{
          name: '删除',
          callback: function callback() {
            this.hide();
            self.ins.loading.show();
            self.ins.loading.listen('close', function () {
              self.pending.del = false;
            });
            Api.user.del(idList, function (res) {
              self.alert('操作成功'); // 重新加载页面

              self.reloadData();
            }, function (data, code) {
              self.alert(data);
            }, function () {
              self.pending.del = false;
              self.ins.loading.hide();
              self.ins.loading.listen('close', null);
            });
          }
        }, {
          name: '取消',
          callback: function callback() {
            this.hide();
          }
        }]
      });
    },
    singleEditUserJoinFriendOption: function singleEditUserJoinFriendOption(enable, extra) {
      var _this2 = this;

      var self = this;
      this.ins.loading.show();
      Api.user.singleEditUserJoinFriendOption({
        id: extra.id,
        join_friend_method_id: extra.join_friend_method_id,
        enable: enable
      }, null, function (data, code) {
        _this2.alert(data);
      }, function () {
        self.reloadData();
      });
    },
    singleEditUserOption: function singleEditUserOption(value, extra) {
      var _this3 = this;

      var self = this;
      this.ins.loading.show();
      Api.user.singleEditUserOption({
        id: extra.id,
        field: extra.field,
        value: value
      }, null, function (data, code) {
        _this3.alert(data);
      }, function () {
        _this3.ins.loading.hide();

        self.reloadData();
      });
    },
    editClearTimer: function editClearTimer(userId, type) {
      var _this4 = this;

      var field = '';

      switch (type) {
        case 'private':
          field = 'clear_timer_for_private';
          break;

        case 'group':
          field = 'clear_timer_for_group';
          break;
      }

      var btn = [];
      var self = this;

      var _loop = function _loop(k) {
        var v = _this4.business.clear_timer_range[k];
        var obj = {
          name: v,
          callback: function callback() {
            this.hide();
            self.singleEditUserOption(userId, field, k);
          }
        };
        btn.push(obj);
      };

      for (var k in this.business.clear_timer_range) {
        _loop(k);
      }

      this.alert('请选择', {
        btn: btn
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=2&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=2&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/user_activity_log/css/list.css?vue&type=style&index=3&id=2ed66f54&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/user_activity_log/css/list.css?vue&type=style&index=3&id=2ed66f54&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/user_activity_log/list.vue?vue&type=template&id=2ed66f54&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/component/user_activity_log/list.vue?vue&type=template&id=2ed66f54&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "c-component" },
    [
      _c("navigation", {
        attrs: { topRoute: _vm.topRoute, position: _vm.position }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "in" }, [
          _c("div", { staticClass: "top" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "filter-options" }, [
                  _c("div", { staticClass: "option" }, [
                    _c("div", { staticClass: "field" }, [_vm._v("ID：")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "value" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.id,
                            expression: "form.id"
                          }
                        ],
                        staticClass: "form-text",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "id", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "btm list" }, [
            _c("div", { staticClass: "data" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("table", { staticClass: "line-tb" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "w-80" }, [
                      _vm._v(
                        "\n                                ID\n                                "
                      ),
                      _c("span", { staticClass: "arrow" }, [
                        _c("i", {
                          staticClass: "run-iconfont run-arrow top",
                          class: _vm.form.order == "id|asc" ? "focus" : "",
                          attrs: { "data-order": "id|asc" },
                          on: { click: _vm.order }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "run-iconfont run-arrow btm",
                          class: _vm.form.order == "id|desc" ? "focus" : "",
                          attrs: { "data-order": "id|desc" },
                          on: { click: _vm.order }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("日期")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("用户id")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("在线次数")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("离线次数")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("登录次数")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("登出次数")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [
                      _vm._v(
                        "\n                                创建时间\n                            "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  { ref: "tbody" },
                  [
                    _vm._l(_vm.listData, function(v, k) {
                      return _c(
                        "tr",
                        {
                          key: v.id,
                          on: {
                            click: function($event) {
                              return _vm.selectEvent(v.id)
                            }
                          }
                        },
                        [
                          _c("td", [_vm._v(_vm._s(v.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.date))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.user_id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.online_count))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.offline_count))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.login_count))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.logout_count))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.create_time))])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm.listData.length == 0
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "7" } }, [
                            _vm._v("没有相关数据")
                          ])
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "page" },
              [
                _c("i-page", {
                  attrs: {
                    total: _vm.page.total,
                    current: _vm.form.page,
                    "page-size": _vm.form.limit,
                    size: "small",
                    "show-total": "",
                    "show-elevator": ""
                  },
                  on: { "on-change": _vm.pageEvent }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("v-loading", { ref: "loading" })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "run-title" }, [
      _c("div", { staticClass: "left" }, [_vm._v("筛选")]),
      _vm._v(" "),
      _c("div", { staticClass: "right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "option" }, [
      _c("div", { staticClass: "field" }),
      _vm._v(" "),
      _c("div", { staticClass: "value" }, [
        _c(
          "button",
          {
            staticClass: "run-button run-button-blue",
            attrs: { type: "submit" }
          },
          [_vm._v("提交")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "run-button run-button-yellow",
            attrs: { type: "reset" }
          },
          [
            _c("i", { staticClass: "run-iconfont run-reset" }),
            _vm._v(
              "\n                                    重置\n                                "
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "run-title" }, [
      _c("div", { staticClass: "left" }, [_vm._v("数据列表")]),
      _vm._v(" "),
      _c("div", { staticClass: "right" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./global.css?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/public/css/list.css?vue&type=style&index=2&lang=css&":
/*!***********************************************************************************!*\
  !*** ./source/vue/component/public/css/list.css?vue&type=style&index=2&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./list.css?vue&type=style&index=2&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************!*\
  !*** ./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=1&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/user_activity_log/css/list.css?vue&type=style&index=3&id=2ed66f54&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./source/vue/component/user_activity_log/css/list.css?vue&type=style&index=3&id=2ed66f54&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_2ed66f54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./list.css?vue&type=style&index=3&id=2ed66f54&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/user_activity_log/css/list.css?vue&type=style&index=3&id=2ed66f54&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_2ed66f54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_2ed66f54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_2ed66f54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_2ed66f54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_2ed66f54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/user_activity_log/js/list.js?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./source/vue/component/user_activity_log/js/list.js?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!./list.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/user_activity_log/js/list.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/component/user_activity_log/list.vue":
/*!*********************************************************!*\
  !*** ./source/vue/component/user_activity_log/list.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_2ed66f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=2ed66f54&scoped=true& */ "./source/vue/component/user_activity_log/list.vue?vue&type=template&id=2ed66f54&scoped=true&");
/* harmony import */ var _js_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/list.js?vue&type=script&lang=js& */ "./source/vue/component/user_activity_log/js/list.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/global.css?vue&type=style&index=0&lang=css& */ "./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&lang=css& */ "./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _public_css_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/list.css?vue&type=style&index=2&lang=css& */ "./source/vue/component/public/css/list.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _css_list_css_vue_type_style_index_3_id_2ed66f54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/list.css?vue&type=style&index=3&id=2ed66f54&scoped=true&lang=css& */ "./source/vue/component/user_activity_log/css/list.css?vue&type=style&index=3&id=2ed66f54&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");









/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _js_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_2ed66f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_2ed66f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ed66f54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/component/user_activity_log/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/component/user_activity_log/list.vue?vue&type=template&id=2ed66f54&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./source/vue/component/user_activity_log/list.vue?vue&type=template&id=2ed66f54&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_2ed66f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=2ed66f54&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/user_activity_log/list.vue?vue&type=template&id=2ed66f54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_2ed66f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_2ed66f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC91c2VyX2FjdGl2aXR5X2xvZy9qcy9saXN0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2xpc3QuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvcHVibGljLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC91c2VyX2FjdGl2aXR5X2xvZy9jc3MvbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvdXNlcl9hY3Rpdml0eV9sb2cvbGlzdC52dWU/M2EzOCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/ZDdmMSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2xpc3QuY3NzPzZiODIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9wdWJsaWMuY3NzP2EwMzIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvdXNlcl9hY3Rpdml0eV9sb2cvY3NzL2xpc3QuY3NzP2I0YjQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvdXNlcl9hY3Rpdml0eV9sb2cvanMvbGlzdC5qcz9mMTM1Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3VzZXJfYWN0aXZpdHlfbG9nL2xpc3QudnVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3VzZXJfYWN0aXZpdHlfbG9nL2xpc3QudnVlPzkyNjkiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJmb3JtIiwiaWQiLCJvcmRlciIsInVzZXJfaWQiLCJwYWdlIiwibGltaXQiLCJ0b3BDb250ZXh0IiwiaW5zIiwibG9hZGluZyIsInBlbmRpbmciLCJkZWwiLCJkb20iLCJsaXN0RGF0YSIsImlkTGlzdCIsInRvdGFsIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsImdldERhdGEiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsIiRyZWZzIiwicGFyYW0iLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiYWxlcnQiLCJsaXN0ZW4iLCJzaG93IiwiQXBpIiwidXNlckFjdGl2aXR5TG9nIiwibGlzdCIsInJlcyIsImN1cnJlbnRfcGFnZSIsImhpZGUiLCJwYWdlRXZlbnQiLCJlIiwidGFyIiwiRyIsImN1cnJlbnRUYXJnZXQiLCJyZWxvYWREYXRhIiwic2VsZWN0RXZlbnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwic2VsZWN0QWxsRXZlbnQiLCJzZWxlY3RlZCIsInNlbGVjdGVkQWxsIiwidW5zZWxlY3RlZEFsbCIsImkiLCJ2IiwibGVuZ3RoIiwic3VibWl0IiwicGFnZVJlc2l6ZSIsInNlbGYiLCJidG4iLCJjYWxsYmFjayIsInVzZXIiLCJjb2RlIiwic2luZ2xlRWRpdFVzZXJKb2luRnJpZW5kT3B0aW9uIiwiZW5hYmxlIiwiZXh0cmEiLCJqb2luX2ZyaWVuZF9tZXRob2RfaWQiLCJzaW5nbGVFZGl0VXNlck9wdGlvbiIsInZhbHVlIiwiZmllbGQiLCJlZGl0Q2xlYXJUaW1lciIsInVzZXJJZCIsInR5cGUiLCJrIiwiYnVzaW5lc3MiLCJjbGVhcl90aW1lcl9yYW5nZSIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWU7QUFDWEEsTUFBSSxFQUFFLFFBREs7QUFFWEMsTUFGVyxrQkFFSDtBQUNKLFdBQU87QUFDSEMsVUFBSSxFQUFFO0FBQ0ZDLFVBQUUsRUFBRSxFQURGO0FBRUZDLGFBQUssRUFBRSxFQUZMO0FBR0ZDLGVBQU8sRUFBRSxDQUhQ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QUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pELGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pQQTtBQUFBO0FBQUE7QUFBQTtBQUF3USxDQUFnQix5U0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1UjtBQUFBO0FBQUE7QUFBQTtBQUFzUSxDQUFnQix1U0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExUjtBQUFBO0FBQUE7QUFBQTtBQUF3USxDQUFnQix5U0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1UjtBQUFBO0FBQUE7QUFBQTtBQUE4UixDQUFnQiwrVEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVDtBQUFBO0FBQUEsd0NBQXVILENBQWdCLHVMQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDckM7QUFDTDtBQUN5QjtBQUNBO0FBQ0Y7QUFDZ0I7OztBQUc1RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ2LWxpc3RcIiAsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogJycgLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6ICcnICxcclxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IDAgLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSAsXHJcbiAgICAgICAgICAgICAgICBsaW1pdDogdG9wQ29udGV4dC5wYWdlLmxpbWl0ICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGluczoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBkZWw6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgIGxpc3REYXRhOiBbXSAsXHJcbiAgICAgICAgICAgIC8vIOW+heWIoOmZpOeahOiusOW9lSBpZCDliJfooahcclxuICAgICAgICAgICAgaWRMaXN0OiBbXSAsXHJcbiAgICAgICAgICAgIHBhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHRvdGFsOiAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuICAgIH0gLFxyXG5cclxuICAgIGNyZWF0ZWQgKCkge1xyXG5cclxuICAgIH0gLFxyXG5cclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluaVsOaNrlxyXG4gICAgICAgIHRoaXMuaW5pdERvbSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9ICxcclxuXHJcbiAgICBjb21wb25lbnRzOiB7fSAsXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIC8vIOWIneWni+WMliBkb21cclxuICAgICAgICBpbml0RG9tICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluW/hemhu+eahOWunuS+i1xyXG4gICAgICAgIGluaXRJbnN0YW5jZSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcgPSB0aGlzLiRyZWZzLmxvYWRpbmcuaW5zLmxvYWRpbmc7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRpYWxpemUgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0udXNlcl9pZCA9IHRoaXMucGFyYW0udXNlcl9pZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXJfaWQnICwgdGhpcy5mb3JtLnVzZXJfaWQpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5bmlbDmja5cclxuICAgICAgICBnZXREYXRhICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5nZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmcuZ2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5saXN0ZW4oJ2Nsb3NlJyAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5nZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBBcGkudXNlckFjdGl2aXR5TG9nLmxpc3QodGhpcy5mb3JtICwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhZ2UgPSByZXMuY3VycmVudF9wYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICAgICAgICB9ICwgbnVsbCAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5saXN0ZW4oJ2Nsb3NlJyAsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLmdldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgcGFnZUV2ZW50IChwYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5wYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIG9yZGVyIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhciA9IEcoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLm9yZGVyID0gdGFyLmRhdGEoJ29yZGVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVsb2FkRGF0YSh0cnVlKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgc2VsZWN0RXZlbnQgKGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pZExpc3QuaW5kZXhPZihpZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTGlzdC5zcGxpY2UoaW5kZXggLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pZExpc3QucHVzaChpZCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHNlbGVjdEFsbEV2ZW50IChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBbGwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zZWxlY3RlZEFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHNlbGVjdGVkQWxsICgpIHtcclxuICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgIGxldCB2O1xyXG4gICAgICAgICAgICB0aGlzLmlkTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5saXN0RGF0YS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiA9IHRoaXMubGlzdERhdGFbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTGlzdC5wdXNoKHYuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHVuc2VsZWN0ZWRBbGwgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkTGlzdCA9IFtdO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0ucGFnZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDph43mlrDliqDovb3pobXpnaJcclxuICAgICAgICByZWxvYWREYXRhIChwYWdlUmVzaXplID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHBhZ2VSZXNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYWdlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5Yig6Zmk5pe26Ze0XHJcbiAgICAgICAgZGVsIChpZExpc3QpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ+ehruWumuWIoOmZpOWQl++8nycgLCB7XHJcbiAgICAgICAgICAgICAgICBidG46IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfliKDpmaQnICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zLmxvYWRpbmcubGlzdGVuKCdjbG9zZScgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nLmRlbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcGkudXNlci5kZWwoaWRMaXN0ICwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWxlcnQoJ+aTjeS9nOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmHjeaWsOWKoOi9vemhtemdolxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVsb2FkRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIChkYXRhICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWxlcnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZy5kZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucy5sb2FkaW5nLmxpc3RlbignY2xvc2UnICwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y+W5raIJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdICxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHNpbmdsZUVkaXRVc2VySm9pbkZyaWVuZE9wdGlvbiAoZW5hYmxlICwgZXh0cmEpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBBcGkudXNlci5zaW5nbGVFZGl0VXNlckpvaW5GcmllbmRPcHRpb24oe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGV4dHJhLmlkICxcclxuICAgICAgICAgICAgICAgIGpvaW5fZnJpZW5kX21ldGhvZF9pZDogZXh0cmEuam9pbl9mcmllbmRfbWV0aG9kX2lkICxcclxuICAgICAgICAgICAgICAgIGVuYWJsZSAsXHJcbiAgICAgICAgICAgIH0gLCBudWxsICwgKGRhdGEgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWxvYWREYXRhKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHNpbmdsZUVkaXRVc2VyT3B0aW9uICh2YWx1ZSAsIGV4dHJhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgQXBpLnVzZXIuc2luZ2xlRWRpdFVzZXJPcHRpb24oe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGV4dHJhLmlkICxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBleHRyYS5maWVsZCAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSAsXHJcbiAgICAgICAgICAgIH0gLCBudWxsICwgKGRhdGEgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgZWRpdENsZWFyVGltZXIgKHVzZXJJZCAsIHR5cGUpIHtcclxuICAgICAgICAgICAgbGV0IGZpZWxkID0gJyc7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncHJpdmF0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQgPSAnY2xlYXJfdGltZXJfZm9yX3ByaXZhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JvdXAnOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkID0gJ2NsZWFyX3RpbWVyX2Zvcl9ncm91cCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJ0biA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLmJ1c2luZXNzLmNsZWFyX3RpbWVyX3JhbmdlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHRoaXMuYnVzaW5lc3MuY2xlYXJfdGltZXJfcmFuZ2Vba107XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHYgLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2luZ2xlRWRpdFVzZXJPcHRpb24odXNlcklkICwgZmllbGQgLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBidG4ucHVzaChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ+ivt+mAieaLqScgLCB7XHJcbiAgICAgICAgICAgICAgICBidG4gLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH0gLFxyXG5cclxufVxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1jb21wb25lbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibmF2aWdhdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvc2l0aW9uOiBfdm0ucG9zaXRpb24gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbHRlci1vcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbX3ZtLl92KFwiSUTvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImlkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG0gbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZS10YlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy04MFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhcnJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4tYXJyb3cgdG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZm9ybS5vcmRlciA9PSBcImlkfGFzY1wiID8gXCJmb2N1c1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLW9yZGVyXCI6IFwiaWR8YXNjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLWFycm93IGJ0bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmZvcm0ub3JkZXIgPT0gXCJpZHxkZXNjXCIgPyBcImZvY3VzXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtb3JkZXJcIjogXCJpZHxkZXNjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMzBcIiB9LCBbX3ZtLl92KFwi5pel5pyfXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEzMFwiIH0sIFtfdm0uX3YoXCLnlKjmiLdpZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMzBcIiB9LCBbX3ZtLl92KFwi5Zyo57q/5qyh5pWwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEzMFwiIH0sIFtfdm0uX3YoXCLnprvnur/mrKHmlbBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTMwXCIgfSwgW192bS5fdihcIueZu+W9leasoeaVsFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMzBcIiB9LCBbX3ZtLl92KFwi55m75Ye65qyh5pWwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yib5bu65pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgeyByZWY6IFwidGJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3REYXRhLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHYuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RFdmVudCh2LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh2LmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh2LmRhdGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYudXNlcl9pZCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Modi5vbmxpbmVfY291bnQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYub2ZmbGluZV9jb3VudCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Modi5sb2dpbl9jb3VudCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Modi5sb2dvdXRfY291bnQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYuY3JlYXRlX3RpbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxpc3REYXRhLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiN1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuayoeacieebuOWFs+aVsOaNrlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpLXBhZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IF92bS5wYWdlLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBfdm0uZm9ybS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uZm9ybS5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNob3ctdG90YWxcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBcIm9uLWNoYW5nZVwiOiBfdm0ucGFnZUV2ZW50IH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcImxvYWRpbmdcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtfdm0uX3YoXCLnrZvpgIlcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvblwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1ibHVlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWJ1dHRvbiBydW4tYnV0dG9uLXllbGxvd1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyZXNldFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4tcmVzZXRcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDph43nva5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicnVuLXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW192bS5fdihcIuaVsOaNruWIl+ihqFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MyZpZD0yZWQ2NmY1NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTMmaWQ9MmVkNjZmNTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuL2xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4vbGlzdC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmVkNjZmNTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvbGlzdC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vanMvbGlzdC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi4vcHVibGljL2Nzcy9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4uL3B1YmxpYy9jc3MvcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUyIGZyb20gXCIuLi9wdWJsaWMvY3NzL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTMgZnJvbSBcIi4vY3NzL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTMmaWQ9MmVkNjZmNTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJlZDY2ZjU0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcd2ViXFxcXGZyb250XFxcXHJ0Y19hZG1pblxcXFxwdWJsaWNcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmVkNjZmNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmVkNjZmNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmVkNjZmNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlZDY2ZjU0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlZDY2ZjU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL2NvbXBvbmVudC91c2VyX2FjdGl2aXR5X2xvZy9saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZWQ2NmY1NCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=