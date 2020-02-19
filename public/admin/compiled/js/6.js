(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/project/js/list.js?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./source/vue/component/project/js/list.js?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
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
    this.initIns();
    this.getData();
  },
  methods: {
    // 初始化 dom
    initDom: function initDom() {},
    // 初始化必须的实例
    initIns: function initIns() {
      this.ins.loading = this.$refs.loading.ins.loading;
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
      Api.project.list(this.form, function (res) {
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
      this.reloadData();
    },
    order: function order() {},
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
      var pageReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (pageReset) {
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
            Api.project.del(idList, function (res) {
              self.alert('操作成功'); // 重新加载页面

              self.reloadData();
            }, function (data) {
              self.alert(data);
            }, function () {
              self.pending.del = false;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/project/css/list.css?vue&type=style&index=3&id=31e30cb6&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/project/css/list.css?vue&type=style&index=3&id=31e30cb6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/project/list.vue?vue&type=template&id=31e30cb6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/component/project/list.vue?vue&type=template&id=31e30cb6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "run-title" }, [
                _c("div", { staticClass: "left" }, [_vm._v("数据列表")]),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "run-button run-button-orange",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.del(_vm.idList)
                        }
                      }
                    },
                    [
                      _vm._v("删除选中项 "),
                      _c("i", {
                        staticClass: "run-iconfont run-iconfont-delete"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "run-button run-button-blue",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.location(
                            "/project/add",
                            { mode: "add" },
                            "_blank"
                          )
                        }
                      }
                    },
                    [
                      _vm._v("新增 "),
                      _c("i", { staticClass: "run-iconfont run-iconfont-add" })
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "line-tb" }, [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      { staticClass: "th-checkbox" },
                      [
                        _c("i-checkbox", {
                          on: { "on-change": _vm.selectAllEvent }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", { staticClass: "th-id" }, [
                      _vm._v(
                        "\n                                ID\n                                "
                      ),
                      _c("span", { staticClass: "arrow" }, [
                        _c("i", {
                          staticClass: "run-iconfont run-arrow top",
                          attrs: { "data-order": "id|asc" },
                          on: { click: _vm.order }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "run-iconfont run-arrow btm",
                          attrs: { "data-order": "id|desc" },
                          on: { click: _vm.order }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("名称")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("标识符")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [
                      _vm._v(
                        "\n                                创建时间\n                                "
                      ),
                      _c("span", { staticClass: "arrow" }, [
                        _c("i", {
                          staticClass: "run-iconfont run-arrow top",
                          attrs: { "data-order": "create_time|asc" },
                          on: { click: _vm.order }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "run-iconfont run-arrow btm",
                          attrs: { "data-order": "create_time|desc" },
                          on: { click: _vm.order }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("操作")])
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
                          _c(
                            "td",
                            [
                              _c(
                                "i-checkbox-group",
                                {
                                  model: {
                                    value: _vm.idList,
                                    callback: function($$v) {
                                      _vm.idList = $$v
                                    },
                                    expression: "idList"
                                  }
                                },
                                [_c("i-checkbox", { attrs: { label: v.id } })],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.identifier))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.create_time))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "run-button run-button-blue",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.location("/project/edit", {
                                      id: v.id,
                                      mode: "edit"
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v("编辑 "),
                                _c("i", {
                                  staticClass: "run-iconfont run-iconfont-edit"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "run-button run-button-orange",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.del([v.id])
                                  }
                                }
                              },
                              [
                                _vm._v("删除 "),
                                _c("i", {
                                  staticClass:
                                    "run-iconfont run-iconfont-delete"
                                })
                              ]
                            )
                          ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm.listData.length == 0
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "6" } }, [
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/vue/component/project/css/list.css?vue&type=style&index=3&id=31e30cb6&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./source/vue/component/project/css/list.css?vue&type=style&index=3&id=31e30cb6&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_31e30cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./list.css?vue&type=style&index=3&id=31e30cb6&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/project/css/list.css?vue&type=style&index=3&id=31e30cb6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_31e30cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_31e30cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_31e30cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_31e30cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_31e30cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/project/js/list.js?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./source/vue/component/project/js/list.js?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!./list.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/project/js/list.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/component/project/list.vue":
/*!***********************************************!*\
  !*** ./source/vue/component/project/list.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_31e30cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=31e30cb6&scoped=true& */ "./source/vue/component/project/list.vue?vue&type=template&id=31e30cb6&scoped=true&");
/* harmony import */ var _js_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/list.js?vue&type=script&lang=js& */ "./source/vue/component/project/js/list.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/global.css?vue&type=style&index=0&lang=css& */ "./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&lang=css& */ "./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _public_css_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/list.css?vue&type=style&index=2&lang=css& */ "./source/vue/component/public/css/list.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _css_list_css_vue_type_style_index_3_id_31e30cb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/list.css?vue&type=style&index=3&id=31e30cb6&scoped=true&lang=css& */ "./source/vue/component/project/css/list.css?vue&type=style&index=3&id=31e30cb6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");









/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _js_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_31e30cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_31e30cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31e30cb6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/component/project/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/component/project/list.vue?vue&type=template&id=31e30cb6&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./source/vue/component/project/list.vue?vue&type=template&id=31e30cb6&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_31e30cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=31e30cb6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/project/list.vue?vue&type=template&id=31e30cb6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_31e30cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_31e30cb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wcm9qZWN0L2pzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHJvamVjdC9jc3MvbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9nbG9iYWwuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9wdWJsaWMuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3Byb2plY3QvbGlzdC52dWU/YjdmZCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wcm9qZWN0L2Nzcy9saXN0LmNzcz9hZTQyIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3Byb2plY3QvanMvbGlzdC5qcz8wNWMwIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3Byb2plY3QvbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHJvamVjdC9saXN0LnZ1ZT9lODllIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvZ2xvYmFsLmNzcz9kN2YxIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvbGlzdC5jc3M/NmI4MiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/YTAzMiJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImZvcm0iLCJpZCIsIm9yZGVyIiwicGFnZSIsImxpbWl0IiwidG9wQ29udGV4dCIsImlucyIsImxvYWRpbmciLCJwZW5kaW5nIiwiZGVsIiwiZG9tIiwibGlzdERhdGEiLCJpZExpc3QiLCJ0b3RhbCIsImNyZWF0ZWQiLCJtb3VudGVkIiwiaW5pdERvbSIsImluaXRJbnMiLCJnZXREYXRhIiwibWV0aG9kcyIsIiRyZWZzIiwiZ2V0IiwiYWxlcnQiLCJsaXN0ZW4iLCJzaG93IiwiQXBpIiwicHJvamVjdCIsImxpc3QiLCJyZXMiLCJjdXJyZW50X3BhZ2UiLCJoaWRlIiwicGFnZUV2ZW50IiwicmVsb2FkRGF0YSIsInNlbGVjdEV2ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsInNlbGVjdEFsbEV2ZW50Iiwic2VsZWN0ZWQiLCJzZWxlY3RlZEFsbCIsInVuc2VsZWN0ZWRBbGwiLCJpIiwidiIsImxlbmd0aCIsInN1Ym1pdCIsInBhZ2VSZXNldCIsInNlbGYiLCJidG4iLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWU7QUFDWEEsTUFBSSxFQUFFLFFBREs7QUFFWEMsTUFGVyxrQkFFSDtBQUNKLFdBQU87QUFDSEMsVUFBSSxFQUFFO0FBQ0ZDLFVBQUUsRUFBRSxFQURGO0FBRUZDLGFBQUssRUFBRSxFQUZMO0FBR0ZDLFlBQUksRUFBRSxDQUhKO0FBSUZDLGFBQUssRUFBRUMsVUFBVSxDQUFDRixJQUFYLENBQWdCQztBQUpyQixPQURIO0FBT0hFLFNBQUcsRUFBRTtBQUNEQyxlQUFPLEVBQUU7QUFEUixPQVBGO0FBVUhDLGFBQU8sRUFBRTtBQUNMQyxXQUFHLEVBQUU7QUFEQSxPQVZOO0FBYUhDLFNBQUcsRUFBRSxFQWJGO0FBY0hDLGNBQVEsRUFBRSxFQWRQO0FBZUg7QUFDQUMsWUFBTSxFQUFFLEVBaEJMO0FBaUJIVCxVQUFJLEVBQUU7QUFDRlUsYUFBSyxFQUFFO0FBREw7QUFqQkgsS0FBUDtBQXNCSCxHQXpCVTtBQTJCWEMsU0EzQlcscUJBMkJBLENBRVYsQ0E3QlU7QUErQlhDLFNBL0JXLHFCQStCQTtBQUNQO0FBQ0EsU0FBS0MsT0FBTDtBQUNBLFNBQUtDLE9BQUw7QUFDQSxTQUFLQyxPQUFMO0FBQ0gs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cnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInYtbGlzdFwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnJyAsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogJycgLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSAsXHJcbiAgICAgICAgICAgICAgICBsaW1pdDogdG9wQ29udGV4dC5wYWdlLmxpbWl0ICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGluczoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBkZWw6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgIGxpc3REYXRhOiBbXSAsXHJcbiAgICAgICAgICAgIC8vIOW+heWIoOmZpOeahOiusOW9lSBpZCDliJfooahcclxuICAgICAgICAgICAgaWRMaXN0OiBbXSAsXHJcbiAgICAgICAgICAgIHBhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHRvdGFsOiAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuICAgIH0gLFxyXG5cclxuICAgIGNyZWF0ZWQgKCkge1xyXG5cclxuICAgIH0gLFxyXG5cclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluaVsOaNrlxyXG4gICAgICAgIHRoaXMuaW5pdERvbSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdElucygpO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgfSAsXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIC8vIOWIneWni+WMliBkb21cclxuICAgICAgICBpbml0RG9tICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluW/hemhu+eahOWunuS+i1xyXG4gICAgICAgIGluaXRJbnMgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nID0gdGhpcy4kcmVmcy5sb2FkaW5nLmlucy5sb2FkaW5nO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5bmlbDmja5cclxuICAgICAgICBnZXREYXRhICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5nZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmcuZ2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5saXN0ZW4oJ2Nsb3NlJyAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5nZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBBcGkucHJvamVjdC5saXN0KHRoaXMuZm9ybSAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYWdlID0gcmVzLmN1cnJlbnRfcGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS50b3RhbCA9IHJlcy50b3RhbDtcclxuICAgICAgICAgICAgfSAsIG51bGwgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcubGlzdGVuKCdjbG9zZScgLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5nZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHBhZ2VFdmVudCAocGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0ucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMucmVsb2FkRGF0YSgpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBvcmRlciAoKSB7XHJcblxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzZWxlY3RFdmVudCAoaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmlkTGlzdC5pbmRleE9mKGlkKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRMaXN0LnNwbGljZShpbmRleCAsIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlkTGlzdC5wdXNoKGlkKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgc2VsZWN0QWxsRXZlbnQgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFsbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNlbGVjdGVkQWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRBbGwgKCkge1xyXG4gICAgICAgICAgICBsZXQgaTtcclxuICAgICAgICAgICAgbGV0IHY7XHJcbiAgICAgICAgICAgIHRoaXMuaWRMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxpc3REYXRhLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ID0gdGhpcy5saXN0RGF0YVtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRMaXN0LnB1c2godi5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgdW5zZWxlY3RlZEFsbCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRMaXN0ID0gW107XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5wYWdlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOmHjeaWsOWKoOi9vemhtemdolxyXG4gICAgICAgIHJlbG9hZERhdGEgKHBhZ2VSZXNldCA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlUmVzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYWdlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5Yig6Zmk5pe26Ze0XHJcbiAgICAgICAgZGVsIChpZExpc3QpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoJ+ehruWumuWIoOmZpOWQl++8nycgLCB7XHJcbiAgICAgICAgICAgICAgICBidG46IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfliKDpmaQnICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zLmxvYWRpbmcubGlzdGVuKCdjbG9zZScgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nLmRlbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcGkucHJvamVjdC5kZWwoaWRMaXN0ICwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWxlcnQoJ+aTjeS9nOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmHjeaWsOWKoOi9vemhtemdolxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVsb2FkRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGVydChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nLmRlbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zLmxvYWRpbmcubGlzdGVuKCdjbG9zZScgLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICflj5bmtognICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0gLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH0gLFxyXG5cclxufVxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1jb21wb25lbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibmF2aWdhdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvc2l0aW9uOiBfdm0ucG9zaXRpb24gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbHRlci1vcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbX3ZtLl92KFwiSUTvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImlkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG0gbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW192bS5fdihcIuaVsOaNruWIl+ihqFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWJ1dHRvbiBydW4tYnV0dG9uLW9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWwoX3ZtLmlkTGlzdClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLliKDpmaTpgInkuK3pobkgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLWljb25mb250LWRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1ibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvcHJvamVjdC9hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1vZGU6IFwiYWRkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmlrDlop4gXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4taWNvbmZvbnQtYWRkXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZS10YlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJvbi1jaGFuZ2VcIjogX3ZtLnNlbGVjdEFsbEV2ZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0aC1pZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhcnJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4tYXJyb3cgdG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1vcmRlclwiOiBcImlkfGFzY1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3JkZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWljb25mb250IHJ1bi1hcnJvdyBidG1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLW9yZGVyXCI6IFwiaWR8ZGVzY1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3JkZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTMwXCIgfSwgW192bS5fdihcIuWQjeensFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMzBcIiB9LCBbX3ZtLl92KFwi5qCH6K+G56ymXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yib5bu65pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLWFycm93IHRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtb3JkZXJcIjogXCJjcmVhdGVfdGltZXxhc2NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9yZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4tYXJyb3cgYnRtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1vcmRlclwiOiBcImNyZWF0ZV90aW1lfGRlc2NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9yZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEzMFwiIH0sIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgeyByZWY6IFwidGJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3REYXRhLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHYuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RFdmVudCh2LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlkTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlkTGlzdCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaWRMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImktY2hlY2tib3hcIiwgeyBhdHRyczogeyBsYWJlbDogdi5pZCB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYuaWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Modi5pZGVudGlmaWVyKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh2LmNyZWF0ZV90aW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvY2F0aW9uKFwiL3Byb2plY3QvZWRpdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB2LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIue8lui+kSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWljb25mb250IHJ1bi1pY29uZm9udC1lZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tb3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsKFt2LmlkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWIoOmZpCBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1bi1pY29uZm9udCBydW4taWNvbmZvbnQtZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxpc3REYXRhLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiNlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuayoeacieebuOWFs+aVsOaNrlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpLXBhZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IF92bS5wYWdlLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBfdm0uZm9ybS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBcInBhZ2Utc2l6ZVwiOiBfdm0uZm9ybS5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNob3ctdG90YWxcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93LWVsZXZhdG9yXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBcIm9uLWNoYW5nZVwiOiBfdm0ucGFnZUV2ZW50IH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcImxvYWRpbmdcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtfdm0uX3YoXCLnrZvpgIlcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvblwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1ibHVlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWJ1dHRvbiBydW4tYnV0dG9uLXllbGxvd1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyZXNldFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4tcmVzZXRcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDph43nva5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTMmaWQ9MzFlMzBjYjYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0zJmlkPTMxZTMwY2I2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuL2xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxZTMwY2I2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL2xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL2xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4uL3B1YmxpYy9jc3MvZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuLi9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMiBmcm9tIFwiLi4vcHVibGljL2Nzcy9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUzIGZyb20gXCIuL2Nzcy9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0zJmlkPTMxZTMwY2I2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzMWUzMGNiNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdlYlxcXFxmcm9udFxcXFxydGNfYWRtaW5cXFxccHVibGljXFxcXGFkbWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMxZTMwY2I2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxZTMwY2I2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxZTMwY2I2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMWUzMGNiNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMWUzMGNiNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic291cmNlL3Z1ZS9jb21wb25lbnQvcHJvamVjdC9saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMWUzMGNiNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==