(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/article/js/list.js?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./source/vue/component/article/js/list.js?vue&type=script&lang=js& ***!
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
    this.initInstance();
    this.getData();
  },
  methods: {
    // 初始化 dom
    initDom: function initDom() {},
    // 初始化必须的实例
    initInstance: function initInstance() {
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
      Api.article.list(this.form, function (res) {
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
      this.submit();
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
      this.getData();
    },
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
            Api.article.del(idList, function (res) {
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
    },
    // 单字段修改
    singleEdit: function singleEdit(value, extra) {
      var _this2 = this;

      var self = this;
      this.ins.loading.show();
      Api.article.singleEdit({
        id: extra.id,
        field: extra.field,
        value: value
      }, null, function (data, code) {
        _this2.alert(data);
      }, function () {
        self.reloadData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/article/css/list.css?vue&type=style&index=2&id=06adc068&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/article/css/list.css?vue&type=style&index=2&id=06adc068&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/article/list.vue?vue&type=template&id=06adc068&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/component/article/list.vue?vue&type=template&id=06adc068&scoped=true& ***!
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
                  _c("div", { staticClass: "option" }, [
                    _c("div", { staticClass: "field" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "value" },
                      [
                        _c(
                          "v-button",
                          { attrs: { type: "submit", color: "blue" } },
                          [_vm._v("提交")]
                        )
                      ],
                      1
                    )
                  ])
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
                _c(
                  "div",
                  { staticClass: "right" },
                  [
                    _c(
                      "v-button",
                      {
                        attrs: { color: "orange", has: true, ico: "delete" },
                        on: {
                          click: function($event) {
                            return _vm.del(_vm.idList)
                          }
                        }
                      },
                      [_vm._v("删除选中项")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-button",
                      {
                        attrs: { color: "blue", has: true, ico: "add" },
                        on: {
                          click: function($event) {
                            return _vm.location(
                              "/article/add",
                              { mode: "add" },
                              "_blank"
                            )
                          }
                        }
                      },
                      [_vm._v("添加")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "line-tb" }, [
                _c("thead", [
                  _c("tr", [
                    _c(
                      "th",
                      { staticClass: "th-checkbox" },
                      [
                        _c("i-radio", {
                          on: { "on-change": _vm.selectAllEvent }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", { staticClass: "th-id" }, [_vm._v("ID")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("标题")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("封面")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("分类【ID】")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("作者")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("权重")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-60" }, [_vm._v("启用？")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-180" }, [_vm._v("时间")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-130" }, [_vm._v("操作")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  { ref: "tbody" },
                  [
                    _vm._l(_vm.listData, function(v) {
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
                          _c("td", [_vm._v(_vm._s(v.title))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("img", {
                              staticClass: "image",
                              attrs: { src: v.thumb_explain }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                v.article_type
                                  ? v.article_type.name +
                                      "【" +
                                      v.article_type.id +
                                      "】"
                                  : ""
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.author))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.weight))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("v-switch", {
                                attrs: {
                                  size: "small",
                                  extra: { id: v.id, field: "enable" }
                                },
                                on: { "on-change": _vm.singleEdit },
                                model: {
                                  value: v.enable,
                                  callback: function($$v) {
                                    _vm.$set(v, "enable", $$v)
                                  },
                                  expression: "v.enable"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "multiple-rows" }, [
                            _c("div", { staticClass: "row" }, [
                              _vm._v("【更新时间】" + _vm._s(v.update_time))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _vm._v("【创建时间】" + _vm._s(v.create_time))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "v-button",
                                {
                                  attrs: {
                                    color: "blue",
                                    has: true,
                                    ico: "edit"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.location("/article/edit", {
                                        id: v.id,
                                        mode: "edit"
                                      })
                                    }
                                  }
                                },
                                [_vm._v("编辑")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-button",
                                {
                                  attrs: {
                                    color: "orange",
                                    has: true,
                                    ico: "delete"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.del([v.id])
                                    }
                                  }
                                },
                                [_vm._v("删除")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm.listData.length == 0
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "9" } }, [
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
                _c("Page", {
                  attrs: {
                    total: _vm.page.total,
                    current: _vm.form.page,
                    "page-size": _vm.page.per_page,
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/vue/component/article/css/list.css?vue&type=style&index=2&id=06adc068&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./source/vue/component/article/css/list.css?vue&type=style&index=2&id=06adc068&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_id_06adc068_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./list.css?vue&type=style&index=2&id=06adc068&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/article/css/list.css?vue&type=style&index=2&id=06adc068&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_id_06adc068_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_id_06adc068_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_id_06adc068_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_id_06adc068_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_2_id_06adc068_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/article/js/list.js?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./source/vue/component/article/js/list.js?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!./list.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/article/js/list.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/component/article/list.vue":
/*!***********************************************!*\
  !*** ./source/vue/component/article/list.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_06adc068_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=06adc068&scoped=true& */ "./source/vue/component/article/list.vue?vue&type=template&id=06adc068&scoped=true&");
/* harmony import */ var _js_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/list.js?vue&type=script&lang=js& */ "./source/vue/component/article/js/list.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_public_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=0&lang=css& */ "./source/vue/component/public/css/public.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_list_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/list.css?vue&type=style&index=1&lang=css& */ "./source/vue/component/public/css/list.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _css_list_css_vue_type_style_index_2_id_06adc068_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/list.css?vue&type=style&index=2&id=06adc068&scoped=true&lang=css& */ "./source/vue/component/article/css/list.css?vue&type=style&index=2&id=06adc068&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_06adc068_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_06adc068_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06adc068",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/component/article/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/component/article/list.vue?vue&type=template&id=06adc068&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./source/vue/component/article/list.vue?vue&type=template&id=06adc068&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_06adc068_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=06adc068&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/article/list.vue?vue&type=template&id=06adc068&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_06adc068_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_06adc068_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./source/vue/component/public/css/list.css?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************!*\
  !*** ./source/vue/component/public/css/list.css?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./list.css?vue&type=style&index=1&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/public/css/public.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./source/vue/component/public/css/public.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hcnRpY2xlL2pzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvYXJ0aWNsZS9jc3MvbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9saXN0LmNzcz80MDFjIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvcHVibGljLmNzcz84ZTlkIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L2FydGljbGUvbGlzdC52dWU/NTk1ZCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hcnRpY2xlL2Nzcy9saXN0LmNzcz80YTRlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L2FydGljbGUvanMvbGlzdC5qcz84MzE4Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L2FydGljbGUvbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvYXJ0aWNsZS9saXN0LnZ1ZT9kOWVjIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvbGlzdC5jc3M/ZDFkNCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/NjBjMCJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImZvcm0iLCJpZCIsIm9yZGVyIiwicGFnZSIsImxpbWl0IiwidG9wQ29udGV4dCIsImlucyIsImxvYWRpbmciLCJwZW5kaW5nIiwiZGVsIiwiZG9tIiwibGlzdERhdGEiLCJpZExpc3QiLCJ0b3RhbCIsImNyZWF0ZWQiLCJtb3VudGVkIiwiaW5pdERvbSIsImluaXRJbnN0YW5jZSIsImdldERhdGEiLCJtZXRob2RzIiwiJHJlZnMiLCJnZXQiLCJhbGVydCIsImxpc3RlbiIsInNob3ciLCJBcGkiLCJhcnRpY2xlIiwibGlzdCIsInJlcyIsImN1cnJlbnRfcGFnZSIsImhpZGUiLCJwYWdlRXZlbnQiLCJzdWJtaXQiLCJzZWxlY3RFdmVudCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJzZWxlY3RBbGxFdmVudCIsInNlbGVjdGVkIiwic2VsZWN0ZWRBbGwiLCJ1bnNlbGVjdGVkQWxsIiwiaSIsInYiLCJsZW5ndGgiLCJyZWxvYWREYXRhIiwicGFnZVJlc2l6ZSIsInNlbGYiLCJidG4iLCJjYWxsYmFjayIsInNpbmdsZUVkaXQiLCJ2YWx1ZSIsImV4dHJhIiwiZmllbGQiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZTtBQUNYQSxNQUFJLEVBQUUsUUFESztBQUVYQyxNQUZXLGtCQUVIO0FBQ0osV0FBTztBQUNIQyxVQUFJLEVBQUU7QUFDRkMsVUFBRSxFQUFFLEVBREY7QUFFRkMsYUFBSyxFQUFFLEVBRkw7QUFHRkMsWUFBSSxFQUFFLENBSEo7QUFJRkMsYUFBSyxFQUFFQyxVQUFVLENBQUNGLElBQVgsQ0FBZ0JDO0FBSnJCLE9BREg7QUFPSEUsU0FBRyxFQUFFO0FBQ0RDLGVBQU8sRUFBRTtBQURSLE9BUEY7QUFVSEMsYUFBTyxFQUFFO0FBQ0xDLFdBQUcsRUFBRTtBQURBLE9BVk47QUFhSEMsU0FBRyxFQUFFLEVBYkY7QUFjSEMsY0FBUSxFQUFFLEVBZFA7QUFlSDtBQUNBQyxZQUFNLEVBQUUsRUFoQkw7QUFpQkhULFVBQUksRUFBRTtBQUNGVSxhQUFLLEVBQUU7QUFETDtBQWpCSCxLQUFQO0FBc0JILEdBekJVO0FBMkJYQyxTQTNCVyxxQkEyQkEsQ0FFVixDQTdCVTtBQStCWEMsU0EvQlcscUJBK0JBO0FBQ1A7QUFDQSxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLE9BQUw7QUFDSCxHQXBDVTtBQXNDWEMsU0FBTyxFQUFFO0FBQ0w7QUFDQUgsV0FGSyxxQkFFTSxDQUVWLENBSkk7QUFNTDtB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Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBc1EsQ0FBZ0IsdVNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMVI7QUFBQTtBQUFBO0FBQUE7QUFBd1EsQ0FBZ0IseVNBQUcsRUFBQyxDIiwiZmlsZSI6ImpzLzEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ2LWxpc3RcIiAsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogJycgLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6ICcnICxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEgLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IHRvcENvbnRleHQucGFnZS5saW1pdCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgcGVuZGluZzoge1xyXG4gICAgICAgICAgICAgICAgZGVsOiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGRvbToge30gLFxyXG4gICAgICAgICAgICBsaXN0RGF0YTogW10gLFxyXG4gICAgICAgICAgICAvLyDlvoXliKDpmaTnmoTorrDlvZUgaWQg5YiX6KGoXHJcbiAgICAgICAgICAgIGlkTGlzdDogW10gLFxyXG4gICAgICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbDogMFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuXHJcbiAgICBjcmVhdGVkICgpIHtcclxuXHJcbiAgICB9ICxcclxuXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAvLyDojrflj5bmlbDmja5cclxuICAgICAgICB0aGlzLmluaXREb20oKTtcclxuICAgICAgICB0aGlzLmluaXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgfSAsXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIC8vIOWIneWni+WMliBkb21cclxuICAgICAgICBpbml0RG9tICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluW/hemhu+eahOWunuS+i1xyXG4gICAgICAgIGluaXRJbnN0YW5jZSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcgPSB0aGlzLiRyZWZzLmxvYWRpbmcuaW5zLmxvYWRpbmc7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaVsOaNrlxyXG4gICAgICAgIGdldERhdGEgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nLmdldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydCgn6K+35rGC5LitLi4u6K+36ICQ5b+D562J5b6FJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZy5nZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmxpc3RlbignY2xvc2UnICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLmdldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIEFwaS5hcnRpY2xlLmxpc3QodGhpcy5mb3JtICwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhZ2UgPSByZXMuY3VycmVudF9wYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICAgICAgICB9ICwgbnVsbCAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5saXN0ZW4oJ2Nsb3NlJyAsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLmdldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgcGFnZUV2ZW50IChwYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5wYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgb3JkZXIgKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgc2VsZWN0RXZlbnQgKGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pZExpc3QuaW5kZXhPZihpZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTGlzdC5zcGxpY2UoaW5kZXggLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pZExpc3QucHVzaChpZCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHNlbGVjdEFsbEV2ZW50IChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBbGwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zZWxlY3RlZEFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHNlbGVjdGVkQWxsICgpIHtcclxuICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgIGxldCB2O1xyXG4gICAgICAgICAgICB0aGlzLmlkTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5saXN0RGF0YS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiA9IHRoaXMubGlzdERhdGFbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTGlzdC5wdXNoKHYuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHVuc2VsZWN0ZWRBbGwgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkTGlzdCA9IFtdO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgcmVsb2FkRGF0YSAocGFnZVJlc2l6ZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlUmVzaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGFnZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWIoOmZpOaXtumXtFxyXG4gICAgICAgIGRlbCAoaWRMaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCfnoa7lrprliKDpmaTlkJfvvJ8nICwge1xyXG4gICAgICAgICAgICAgICAgYnRuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Yig6ZmkJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucy5sb2FkaW5nLmxpc3RlbignY2xvc2UnICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZy5kZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBpLmFydGljbGUuZGVsKGlkTGlzdCAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFsZXJ0KCfmk43kvZzmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDph43mlrDliqDovb3pobXpnaJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWxlcnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZy5kZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucy5sb2FkaW5nLmxpc3RlbignY2xvc2UnICwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y+W5raIJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdICxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWNleWtl+auteS/ruaUuVxyXG4gICAgICAgIHNpbmdsZUVkaXQgKHZhbHVlICwgZXh0cmEpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBBcGkuYXJ0aWNsZS5zaW5nbGVFZGl0KHtcclxuICAgICAgICAgICAgICAgIGlkOiBleHRyYS5pZCAsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogZXh0cmEuZmllbGQgLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgLFxyXG4gICAgICAgICAgICB9ICwgbnVsbCAsIChkYXRhICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydChkYXRhKTtcclxuICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVsb2FkRGF0YSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgIH0gLFxyXG5cclxufVxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1jb21wb25lbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibmF2aWdhdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvc2l0aW9uOiBfdm0ucG9zaXRpb24gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbHRlci1vcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbX3ZtLl92KFwiSUTvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImlkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIGNvbG9yOiBcImJsdWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG0gbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW192bS5fdihcIuaVsOaNruWIl+ihqFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJvcmFuZ2VcIiwgaGFzOiB0cnVlLCBpY286IFwiZGVsZXRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbChfdm0uaWRMaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Yig6Zmk6YCJ5Lit6aG5XCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZVwiLCBoYXM6IHRydWUsIGljbzogXCJhZGRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hcnRpY2xlL2FkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlOiBcImFkZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5re75YqgXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lLXRiXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRoLWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImktcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBcIm9uLWNoYW5nZVwiOiBfdm0uc2VsZWN0QWxsRXZlbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRoLWlkXCIgfSwgW192bS5fdihcIklEXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMFwiIH0sIFtfdm0uX3YoXCLmoIfpophcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTAwXCIgfSwgW192bS5fdihcIuWwgemdolwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiB9LCBbX3ZtLl92KFwi5YiG57G744CQSUTjgJFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTAwXCIgfSwgW192bS5fdihcIuS9nOiAhVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiB9LCBbX3ZtLl92KFwi5p2D6YeNXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTYwXCIgfSwgW192bS5fdihcIuWQr+eUqO+8n1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xODBcIiB9LCBbX3ZtLl92KFwi5pe26Ze0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEzMFwiIH0sIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgeyByZWY6IFwidGJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3REYXRhLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHYuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RFdmVudCh2LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlkTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlkTGlzdCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaWRMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImktY2hlY2tib3hcIiwgeyBhdHRyczogeyBsYWJlbDogdi5pZCB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYuaWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYudGl0bGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiB2LnRodW1iX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYuYXJ0aWNsZV90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB2LmFydGljbGVfdHlwZS5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLjgJBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYuYXJ0aWNsZV90eXBlLmlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLjgJFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Modi5hdXRob3IpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYud2VpZ2h0KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogeyBpZDogdi5pZCwgZmllbGQ6IFwiZW5hYmxlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBcIm9uLWNoYW5nZVwiOiBfdm0uc2luZ2xlRWRpdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2LmVuYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldCh2LCBcImVuYWJsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInYuZW5hYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm11bHRpcGxlLXJvd3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLjgJDmm7TmlrDml7bpl7TjgJFcIiArIF92bS5fcyh2LnVwZGF0ZV90aW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi44CQ5Yib5bu65pe26Ze044CRXCIgKyBfdm0uX3Modi5jcmVhdGVfdGltZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljbzogXCJlZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jYXRpb24oXCIvYXJ0aWNsZS9lZGl0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIue8lui+kVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljbzogXCJkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWwoW3YuaWRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWIoOmZpFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5saXN0RGF0YS5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmsqHmnInnm7jlhbPmlbDmja5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiUGFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbDogX3ZtLnBhZ2UudG90YWwsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IF92bS5mb3JtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIFwicGFnZS1zaXplXCI6IF92bS5wYWdlLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2hvdy10b3RhbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcInNob3ctZWxldmF0b3JcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IFwib24tY2hhbmdlXCI6IF92bS5wYWdlRXZlbnQgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwibG9hZGluZ1wiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicnVuLXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW192bS5fdihcIuetm+mAiVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9MDZhZGMwNjgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTA2YWRjMDY4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuL2xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2YWRjMDY4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL2xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL2xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4uL3B1YmxpYy9jc3MvcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuLi9wdWJsaWMvY3NzL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4vY3NzL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9MDZhZGMwNjgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA2YWRjMDY4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcd2ViXFxcXGZyb250XFxcXHJ0Y19hZG1pblxcXFxwdWJsaWNcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDZhZGMwNjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDZhZGMwNjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDZhZGMwNjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2YWRjMDY4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2YWRjMDY4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL2NvbXBvbmVudC9hcnRpY2xlL2xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2YWRjMDY4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2xpc3QuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=