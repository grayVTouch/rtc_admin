(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/admin/js/list.js?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./source/vue/component/admin/js/list.js?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
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
        username: '',
        phone: '',
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
  components: {
    'vv-switch': {
      props: {
        id: {
          required: true
        },
        join_friend_method_id: {
          required: true
        },
        value: {
          "default": 0
        }
      },
      data: function data() {
        return {
          valueCopy: 0
        };
      },
      created: function created() {
        this.valueCopy = this.value;
      },
      model: {
        prop: 'value',
        event: 'change'
      },
      methods: {
        changeEvent: function changeEvent(val) {
          this.$emit('on-change', this.id, this.join_friend_method_id, val);
        }
      },
      watch: {
        valueCopy: function valueCopy(newVal, oldVal) {
          this.$emit('change', newVal);
        },
        value: function value(newVal, oldVal) {
          this.valueCopy = newVal;
        }
      },
      template: "<v-switch v-model=\"valueCopy\" size=\"small\" @on-change=\"changeEvent\"></v-switch>"
    },
    'vvv-switch': {
      props: {
        id: {
          required: true
        },
        field: {
          required: true
        },
        value: {
          "default": 0
        }
      },
      data: function data() {
        return {
          valueCopy: 0
        };
      },
      created: function created() {
        this.valueCopy = this.value;
      },
      model: {
        prop: 'value',
        event: 'change'
      },
      methods: {
        changeEvent: function changeEvent(val) {
          this.$emit('on-change', this.id, this.field, val);
        }
      },
      watch: {
        valueCopy: function valueCopy(newVal, oldVal) {
          this.$emit('change', newVal);
        },
        value: function value(newVal, oldVal) {
          this.valueCopy = newVal;
        }
      },
      template: "<v-switch v-model=\"valueCopy\" size=\"small\" @on-change=\"changeEvent\"></v-switch>"
    }
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
      Api.admin.list(this.form, function (res) {
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
            Api.admin.del(idList, function (res) {
              Prompt.alert('操作成功'); // 重新加载页面

              self.reloadData();
            }, null, function () {
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/admin/css/list.css?vue&type=style&index=3&id=9199cf22&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/admin/css/list.css?vue&type=style&index=3&id=9199cf22&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/admin/list.vue?vue&type=template&id=9199cf22&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/component/admin/list.vue?vue&type=template&id=9199cf22&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                    _c("div", { staticClass: "field" }, [_vm._v("用户名：")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "value" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.username,
                            expression: "form.username"
                          }
                        ],
                        staticClass: "form-text",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.username },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "username", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "option" }, [
                    _c("div", { staticClass: "field" }, [_vm._v("手机号码：")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "value" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.phone,
                            expression: "form.phone"
                          }
                        ],
                        staticClass: "form-text",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "phone", $event.target.value)
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
                      staticClass: "run-button run-button-blue",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.location(
                            "/admin/add",
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
                    _c("th", { staticClass: "w-100" }, [_vm._v("用户名")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("角色")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("联系方式")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("root用户？")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("记录")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [
                      _vm._v(
                        "\n                                创建时间\n                                "
                      ),
                      _c("span", { staticClass: "arrow" }, [
                        _c("i", {
                          staticClass: "run-iconfont run-arrow top",
                          class:
                            _vm.form.order == "create_time|asc" ? "focus" : "",
                          attrs: { "data-order": "create_time|asc" },
                          on: { click: _vm.order }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "run-iconfont run-arrow btm",
                          class:
                            _vm.form.order == "create_time|desc" ? "focus" : "",
                          attrs: { "data-order": "create_time|desc" },
                          on: { click: _vm.order }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "w-100" }, [_vm._v("操作")])
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
                          _c("td", { staticClass: "multiple-rows" }, [
                            _c("div", { staticClass: "row" }, [
                              _vm._v("【ID】"),
                              _c("span", { staticClass: "weight" }, [
                                _vm._v(_vm._s(v.id))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("img", {
                                staticClass: "image",
                                attrs: { src: v.avatar_explain }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.username))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.role ? v.role.name : ""))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.phone))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.is_root_explain))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "multiple-rows" }, [
                            _c("div", { staticClass: "row" }, [
                              _vm._v("【最近登录IP】" + _vm._s(v.last_ip))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _vm._v("【最近登录时间】" + _vm._s(v.last_time))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(v.create_time))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "multiple-rows" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "run-button run-button-yellow",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.location("/admin/edit", {
                                        id: v.id,
                                        mode: "edit"
                                      })
                                    }
                                  }
                                },
                                [
                                  _vm._v("编辑 "),
                                  _c("i", {
                                    staticClass:
                                      "run-iconfont run-iconfont-edit"
                                  })
                                ]
                              )
                            ])
                          ])
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

/***/ "./source/vue/component/admin/css/list.css?vue&type=style&index=3&id=9199cf22&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./source/vue/component/admin/css/list.css?vue&type=style&index=3&id=9199cf22&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_9199cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./list.css?vue&type=style&index=3&id=9199cf22&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/admin/css/list.css?vue&type=style&index=3&id=9199cf22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_9199cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_9199cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_9199cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_9199cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_3_id_9199cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/admin/js/list.js?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./source/vue/component/admin/js/list.js?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!./list.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/admin/js/list.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/component/admin/list.vue":
/*!*********************************************!*\
  !*** ./source/vue/component/admin/list.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_9199cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=9199cf22&scoped=true& */ "./source/vue/component/admin/list.vue?vue&type=template&id=9199cf22&scoped=true&");
/* harmony import */ var _js_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/list.js?vue&type=script&lang=js& */ "./source/vue/component/admin/js/list.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/global.css?vue&type=style&index=0&lang=css& */ "./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&lang=css& */ "./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _public_css_list_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/list.css?vue&type=style&index=2&lang=css& */ "./source/vue/component/public/css/list.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _css_list_css_vue_type_style_index_3_id_9199cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/list.css?vue&type=style&index=3&id=9199cf22&scoped=true&lang=css& */ "./source/vue/component/admin/css/list.css?vue&type=style&index=3&id=9199cf22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");









/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _js_list_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_9199cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_9199cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9199cf22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/component/admin/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/component/admin/list.vue?vue&type=template&id=9199cf22&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./source/vue/component/admin/list.vue?vue&type=template&id=9199cf22&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_9199cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=9199cf22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/admin/list.vue?vue&type=template&id=9199cf22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_9199cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_9199cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hZG1pbi9qcy9saXN0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L2FkbWluL2Nzcy9saXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9saXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL3B1YmxpYy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvYWRtaW4vbGlzdC52dWU/MDAwYyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hZG1pbi9jc3MvbGlzdC5jc3M/MDZiMiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hZG1pbi9qcy9saXN0LmpzPzc0ZTkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvYWRtaW4vbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvYWRtaW4vbGlzdC52dWU/NTI3MiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/ZDdmMSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2xpc3QuY3NzPzZiODIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9wdWJsaWMuY3NzP2EwMzIiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJmb3JtIiwiaWQiLCJ1c2VybmFtZSIsInBob25lIiwib3JkZXIiLCJwYWdlIiwibGltaXQiLCJ0b3BDb250ZXh0IiwiaW5zIiwibG9hZGluZyIsInBlbmRpbmciLCJkZWwiLCJkb20iLCJsaXN0RGF0YSIsImlkTGlzdCIsInRvdGFsIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwiZ2V0RGF0YSIsImNvbXBvbmVudHMiLCJwcm9wcyIsInJlcXVpcmVkIiwiam9pbl9mcmllbmRfbWV0aG9kX2lkIiwidmFsdWUiLCJ2YWx1ZUNvcHkiLCJtb2RlbCIsInByb3AiLCJldmVudCIsIm1ldGhvZHMiLCJjaGFuZ2VFdmVudCIsInZhbCIsIiRlbWl0Iiwid2F0Y2giLCJuZXdWYWwiLCJvbGRWYWwiLCJ0ZW1wbGF0ZSIsImZpZWxkIiwiJHJlZnMiLCJnZXQiLCJhbGVydCIsImxpc3RlbiIsInNob3ciLCJBcGkiLCJhZG1pbiIsImxpc3QiLCJyZXMiLCJjdXJyZW50X3BhZ2UiLCJoaWRlIiwicGFnZUV2ZW50Iiwic3VibWl0IiwiZSIsInRhciIsIkciLCJjdXJyZW50VGFyZ2V0IiwicmVsb2FkRGF0YSIsInNlbGVjdEV2ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsInNlbGVjdEFsbEV2ZW50Iiwic2VsZWN0ZWQiLCJzZWxlY3RlZEFsbCIsInVuc2VsZWN0ZWRBbGwiLCJpIiwidiIsImxlbmd0aCIsInBhZ2VSZXNpemUiLCJzZWxmIiwiYnRuIiwiY2FsbGJhY2siLCJQcm9tcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlO0FBQ1hBLE1BQUksRUFBRSxRQURLO0FBRVhDLE1BRlcsa0JBRUg7QUFDSixXQUFPO0FBQ0hDLFVBQUksRUFBRTtBQUNGQyxVQUFFLEVBQUUsRUFERjtBQUVGQyxnQkFBUSxFQUFFLEVBRlI7QUFHRkMsYUFBSyxFQUFFLEVBSEw7QUFJRkMsYUFBSyxFQUFFLEVBSkw7QUFLRkMsWUFBSSxFQUFFLENBTEo7QUFNRkMsYUFBSyxFQUFFQyxVQUFVLENBQUNGLElBQVgsQ0FBZ0JDO0FBTnJCLE9BREg7QUFTSEUsU0FBRyxFQUFFO0FBQ0RDLGVBQU8sRUFBRTtBQURSLE9BVEY7QUFZSEMsYUFBTyxFQUFFO0FB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Q0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3paQTtBQUFBO0FBQUE7QUFBQTtBQUE4UixDQUFnQiwrVEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVDtBQUFBO0FBQUEsd0NBQXVILENBQWdCLHVMQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDckM7QUFDTDtBQUN5QjtBQUNBO0FBQ0Y7QUFDZ0I7OztBQUc1RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBd1EsQ0FBZ0IseVNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNVI7QUFBQTtBQUFBO0FBQUE7QUFBc1EsQ0FBZ0IsdVNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMVI7QUFBQTtBQUFBO0FBQUE7QUFBd1EsQ0FBZ0IseVNBQUcsRUFBQyxDIiwiZmlsZSI6ImpzLzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInYtbGlzdFwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnJyAsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJycgLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6ICcnICxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAnJyAsXHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxICxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiB0b3BDb250ZXh0LnBhZ2UubGltaXQgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgaW5zOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHtcclxuICAgICAgICAgICAgICAgIGRlbDogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBkb206IHt9ICxcclxuICAgICAgICAgICAgbGlzdERhdGE6IFtdICxcclxuICAgICAgICAgICAgLy8g5b6F5Yig6Zmk55qE6K6w5b2VIGlkIOWIl+ihqFxyXG4gICAgICAgICAgICBpZExpc3Q6IFtdICxcclxuICAgICAgICAgICAgcGFnZToge1xyXG4gICAgICAgICAgICAgICAgdG90YWw6IDBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfSAsXHJcblxyXG4gICAgY3JlYXRlZCAoKSB7XHJcblxyXG4gICAgfSAsXHJcblxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgLy8g6I635Y+W5pWw5o2uXHJcbiAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH0gLFxyXG5cclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAndnYtc3dpdGNoJzoge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIGpvaW5fZnJpZW5kX21ldGhvZF9pZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVDb3B5OiAwICxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVDb3B5ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIG1vZGVsOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wOiAndmFsdWUnICxcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2hhbmdlJyAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudCAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb24tY2hhbmdlJyAsIHRoaXMuaWQgLCB0aGlzLmpvaW5fZnJpZW5kX21ldGhvZF9pZCAsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUNvcHkgKG5ld1ZhbCAsIG9sZFZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScgLCBuZXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgfSAsXHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWUgKG5ld1ZhbCAsIG9sZFZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVDb3B5ID0gbmV3VmFsO1xyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDx2LXN3aXRjaCB2LW1vZGVsPVwidmFsdWVDb3B5XCIgc2l6ZT1cInNtYWxsXCIgQG9uLWNoYW5nZT1cImNoYW5nZUV2ZW50XCI+PC92LXN3aXRjaD5gXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgICd2dnYtc3dpdGNoJzoge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvcHk6IDAgLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZUNvcHkgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgICAgIG1vZGVsOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wOiAndmFsdWUnICxcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2hhbmdlJyAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudCAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb24tY2hhbmdlJyAsIHRoaXMuaWQgLCB0aGlzLmZpZWxkICwgdmFsKTtcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29weSAobmV3VmFsICwgb2xkVmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJyAsIG5ld1ZhbCk7XHJcbiAgICAgICAgICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSAobmV3VmFsICwgb2xkVmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUNvcHkgPSBuZXdWYWw7XHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPHYtc3dpdGNoIHYtbW9kZWw9XCJ2YWx1ZUNvcHlcIiBzaXplPVwic21hbGxcIiBAb24tY2hhbmdlPVwiY2hhbmdlRXZlbnRcIj48L3Ytc3dpdGNoPmBcclxuICAgICAgICB9ICxcclxuICAgIH0gLFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAvLyDliJ3lp4vljJYgZG9tXHJcbiAgICAgICAgaW5pdERvbSAoKSB7XHJcblxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJblv4XpobvnmoTlrp7kvotcclxuICAgICAgICBpbml0SW5zdGFuY2UgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nID0gdGhpcy4kcmVmcy5sb2FkaW5nLmlucy5sb2FkaW5nO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5bmlbDmja5cclxuICAgICAgICBnZXREYXRhICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5nZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmcuZ2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5saXN0ZW4oJ2Nsb3NlJyAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5nZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBBcGkuYWRtaW4ubGlzdCh0aGlzLmZvcm0gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGFnZSA9IHJlcy5jdXJyZW50X3BhZ2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UudG90YWwgPSByZXMudG90YWw7XHJcbiAgICAgICAgICAgIH0gLCBudWxsICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmxpc3RlbignY2xvc2UnICwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcuZ2V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBwYWdlRXZlbnQgKHBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBvcmRlciAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXIgPSBHKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5vcmRlciA9IHRhci5kYXRhKCdvcmRlcicpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbG9hZERhdGEodHJ1ZSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHNlbGVjdEV2ZW50IChpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaWRMaXN0LmluZGV4T2YoaWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZExpc3Quc3BsaWNlKGluZGV4ICwgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaWRMaXN0LnB1c2goaWQpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzZWxlY3RBbGxFdmVudCAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWxsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2VsZWN0ZWRBbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzZWxlY3RlZEFsbCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICBsZXQgdjtcclxuICAgICAgICAgICAgdGhpcy5pZExpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGlzdERhdGEubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSB0aGlzLmxpc3REYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZExpc3QucHVzaCh2LmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICB1bnNlbGVjdGVkQWxsICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pZExpc3QgPSBbXTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgc3VibWl0ICgpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6YeN5paw5Yqg6L296aG16Z2iXHJcbiAgICAgICAgcmVsb2FkRGF0YSAocGFnZVJlc2l6ZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlUmVzaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGFnZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWIoOmZpOaXtumXtFxyXG4gICAgICAgIGRlbCAoaWRMaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KCfnoa7lrprliKDpmaTlkJfvvJ8nICwge1xyXG4gICAgICAgICAgICAgICAgYnRuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Yig6ZmkJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucy5sb2FkaW5nLmxpc3RlbignY2xvc2UnICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZy5kZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBpLmFkbWluLmRlbChpZExpc3QgLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbXB0LmFsZXJ0KCfmk43kvZzmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDph43mlrDliqDovb3pobXpnaJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbG9hZERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCBudWxsICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZy5kZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucy5sb2FkaW5nLmxpc3RlbignY2xvc2UnICwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y+W5raIJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdICxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcbiAgICB9ICxcclxuXHJcbn1cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImMtY29tcG9uZW50XCIgfSxcbiAgICBbXG4gICAgICBfYyhcIm5hdmlnYXRpb25cIiwge1xuICAgICAgICBhdHRyczogeyB0b3BSb3V0ZTogX3ZtLnRvcFJvdXRlLCBwb3NpdGlvbjogX3ZtLnBvc2l0aW9uIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXItb3B0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3B0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkXCIgfSwgW192bS5fdihcIklE77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJpZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3B0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkXCIgfSwgW192bS5fdihcIueUqOaIt+WQje+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnVzZXJuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidXNlcm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZFwiIH0sIFtfdm0uX3YoXCLmiYvmnLrlj7fnoIHvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5waG9uZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBob25lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG0gbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW192bS5fdihcIuaVsOaNruWIl+ihqFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWJ1dHRvbiBydW4tYnV0dG9uLWJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2NhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hZG1pbi9hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1vZGU6IFwiYWRkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmlrDlop4gXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4taWNvbmZvbnQtYWRkXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZS10YlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aC1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJvbi1jaGFuZ2VcIjogX3ZtLnNlbGVjdEFsbEV2ZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0aC1pZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSURcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhcnJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4tYXJyb3cgdG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZm9ybS5vcmRlciA9PSBcImlkfGFzY1wiID8gXCJmb2N1c1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLW9yZGVyXCI6IFwiaWR8YXNjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLWFycm93IGJ0bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmZvcm0ub3JkZXIgPT0gXCJpZHxkZXNjXCIgPyBcImZvY3VzXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtb3JkZXJcIjogXCJpZHxkZXNjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiB9LCBbX3ZtLl92KFwi55So5oi35ZCNXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMFwiIH0sIFtfdm0uX3YoXCLop5LoibJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTAwXCIgfSwgW192bS5fdihcIuiBlOezu+aWueW8j1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiB9LCBbX3ZtLl92KFwicm9vdOeUqOaIt++8n1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiB9LCBbX3ZtLl92KFwi6K6w5b2VXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Yib5bu65pe26Ze0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLWFycm93IHRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5vcmRlciA9PSBcImNyZWF0ZV90aW1lfGFzY1wiID8gXCJmb2N1c1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLW9yZGVyXCI6IFwiY3JlYXRlX3RpbWV8YXNjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcmRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLWFycm93IGJ0bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5vcmRlciA9PSBcImNyZWF0ZV90aW1lfGRlc2NcIiA/IFwiZm9jdXNcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1vcmRlclwiOiBcImNyZWF0ZV90aW1lfGRlc2NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9yZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMFwiIH0sIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgeyByZWY6IFwidGJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3REYXRhLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHYuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RFdmVudCh2LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlkTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlkTGlzdCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaWRMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImktY2hlY2tib3hcIiwgeyBhdHRyczogeyBsYWJlbDogdi5pZCB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwibXVsdGlwbGUtcm93c1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuOAkElE44CRXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2VpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHYuaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHYuYXZhdGFyX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh2LnVzZXJuYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh2LnJvbGUgPyB2LnJvbGUubmFtZSA6IFwiXCIpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYucGhvbmUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHYuaXNfcm9vdF9leHBsYWluKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm11bHRpcGxlLXJvd3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLjgJDmnIDov5HnmbvlvZVJUOOAkVwiICsgX3ZtLl9zKHYubGFzdF9pcCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuOAkOacgOi/keeZu+W9leaXtumXtOOAkVwiICsgX3ZtLl9zKHYubGFzdF90aW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh2LmNyZWF0ZV90aW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm11bHRpcGxlLXJvd3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi15ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jYXRpb24oXCIvYWRtaW4vZWRpdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHYuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJlZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnvJbovpEgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJydW4taWNvbmZvbnQgcnVuLWljb25mb250LWVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5saXN0RGF0YS5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmsqHmnInnm7jlhbPmlbDmja5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaS1wYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0ucGFnZS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmZvcm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgXCJwYWdlLXNpemVcIjogX3ZtLmZvcm0ubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93LXRvdGFsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2hvdy1lbGV2YXRvclwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgXCJvbi1jaGFuZ2VcIjogX3ZtLnBhZ2VFdmVudCB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbX3ZtLl92KFwi562b6YCJXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tYmx1ZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi5o+Q5LqkXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi15ZWxsb3dcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicmVzZXRcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJydW4taWNvbmZvbnQgcnVuLXJlc2V0XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YeN572uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0zJmlkPTkxOTljZjIyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MyZpZD05MTk5Y2YyMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4vbGlzdC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MTk5Y2YyMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9qcy9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy9saXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4uL3B1YmxpYy9jc3MvbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMyBmcm9tIFwiLi9jc3MvbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MyZpZD05MTk5Y2YyMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOTE5OWNmMjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3ZWJcXFxcZnJvbnRcXFxccnRjX2FkbWluXFxcXHB1YmxpY1xcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MTk5Y2YyMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MTk5Y2YyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MTk5Y2YyMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTE5OWNmMjImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTE5OWNmMjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvY29tcG9uZW50L2FkbWluL2xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkxOTljZjIyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9