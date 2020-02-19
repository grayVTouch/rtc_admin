(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/route/js/route.js?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./source/vue/component/route/js/route.js?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-route",
  data: function data() {
    return {
      form: {
        method: 'NONE',
        type: 'view',
        p_id: 0,
        weight: 0,
        enable: 1,
        hidden: 0,
        menu: 0
      },
      error: {},
      dom: {},
      ins: {
        loading: null
      },
      pending: {},
      callback: {},
      routes: [],
      value: {
        mapping: {
          id: 'id',
          floor: 'floor',
          name: 'cn'
        }
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.initDom();
    this.initIns();
    this.initialize();
  },
  methods: {
    initDom: function initDom() {
      this.dom.sIco = G(this.$refs['s-ico']);
      this.dom.bIco = G(this.$refs['b-ico']);
    },
    initIns: function initIns() {
      var self = this;
      this.ins.loading = this.$refs.loading.ins.loading; // 小图标

      this.ins.small = new UploadImage(this.dom.sIco.get(0), {
        mode: 'override',
        url: topContext.upload,
        field: 'file',
        success: function success(res, code) {
          if (G.isFunction(self.callback.small)) {
            self.callback.small(res, code);
          }
        },
        image: {
          delete_unfocus: topContext.pluginRes.UploadImage.image.deleteUnfocus
        }
      }); // 大图标

      this.ins.big = new UploadImage(this.dom.bIco.get(0), {
        mode: 'override',
        url: topContext.upload,
        field: 'file',
        success: function success(res, code) {
          if (G.isFunction(self.callback.big)) {
            self.callback.big(res, code);
          }
        },
        image: {
          delete_unfocus: topContext.pluginRes.UploadImage.image.deleteUnfocus
        }
      });
    },
    initialize: function initialize() {
      var _this = this;

      this.ins.loading.show();

      if (this.param.mode == 'edit') {
        new Promise(function (resolve, reject) {
          _this.getRoute(function (data, code) {
            _this.routes = data;
            resolve(true);
          }, function (data, code) {
            _this.alert(data);

            resolve(false);
          });
        }).then(function (next) {
          if (!next) {
            return false;
          }

          _this.getData(function (data, code) {
            _this.form = data;
          }, function (data) {
            _this.alert(data);
          });
        })["finally"](function () {
          _this.ins.loading.hide();
        });
      } else {
        this.getRoute(function (data, code) {
          _this.routes = data;
        }, function (data, code) {
          _this.alert(data);
        }, function () {
          _this.ins.loading.hide();
        });
      }
    },
    getRoute: function getRoute(success, error, callback) {
      Api.route.all(success, error, callback);
    },
    getData: function getData(success, error, callback) {
      Api.route.detail(this.param.id, success, error, callback);
    },
    // 获取数据
    check: function check(data) {},
    submit: function submit() {
      var _this2 = this;

      if (this.pending.submit) {
        this.alert('请求中...请耐心等待');
        return;
      }

      this.pending.submit = true;
      this.ins.loading.show();
      this.ins.loading.listen('close', function () {
        _this2.pending.submit = false;
      });
      var self = this;
      new Promise(function (resolve, reject) {
        // 上传小图
        if (_this2.ins.small.empty()) {
          resolve(true);
          return;
        }

        _this2.callback.small = function (res) {
          if (res.code != 0) {
            _this2.alert(res.data);

            resolve(false);
            return;
          }

          _this2.form.s_ico = res.data;
          resolve(true);
        };

        _this2.ins.small.upload();
      }).then(function (next) {
        // 上传大图
        if (!next) {
          return;
        }

        return new Promise(function (resolve, reject) {
          if (_this2.ins.big.empty()) {
            resolve(true);
            return;
          }

          _this2.callback.big = function (res) {
            if (res.code != 0) {
              _this2.alert(res.data);

              resolve(false);
              return;
            }

            _this2.form.b_ico = res.data;
            resolve(true);
          };

          _this2.ins.big.upload();
        });
      }).then(function (next) {
        // 上传表单
        if (!next) {
          return;
        }

        return new Promise(function (resolve, reject) {
          Api.route[_this2.param.mode](_this2.form, function () {
            _this2.error = {};

            _this2.alert('操作成功', {
              btn: [{
                name: '继续' + (_this2.param.mode == 'edit' ? '编辑' : '添加'),
                callback: function callback() {
                  this.hide();
                }
              }, {
                name: '路由列表',
                callback: function callback() {
                  this.hide();
                  self.location('/route/list');
                }
              }]
            });
          }, function (data, code) {
            _this2.error = {};

            if (code != -400) {
              return;
            }

            _this2.error = data;

            _this2.vScroll(G.v.firstKey(_this2.error));
          }, function () {
            resolve();
          });
        });
      })["finally"](function () {
        // 事后处理
        _this2.ins.loading.hide();

        _this2.ins.loading.listen('close', null);

        _this2.pending.submit = false;
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=1&id=84e3ac7c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=1&id=84e3ac7c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/route/css/route.css?vue&type=style&index=2&id=84e3ac7c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/route/css/route.css?vue&type=style&index=2&id=84e3ac7c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/route/route.vue?vue&type=template&id=84e3ac7c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/component/route/route.vue?vue&type=template&id=84e3ac7c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
              _c("table", { staticClass: "input-tb" }, [
                _c("tbody", [
                  _c(
                    "tr",
                    { class: _vm.getClass(_vm.error.cn), attrs: { id: "cn" } },
                    [
                      _c("td", [_vm._v("中文名称")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.cn,
                              expression: "form.cn"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.cn },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "cn", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.cn))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    { class: _vm.getClass(_vm.error.en), attrs: { id: "en" } },
                    [
                      _c("td", [_vm._v("英文名称")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.en,
                              expression: "form.en"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.en },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "en", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.en))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.route),
                      attrs: { id: "route" }
                    },
                    [
                      _c("td", [_vm._v("路由")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.route,
                              expression: "form.route"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.route },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "route", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.route))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.method),
                      attrs: { id: "method" }
                    },
                    [
                      _c("td", [_vm._v("方法")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "RadioGroup",
                            {
                              model: {
                                value: _vm.form.method,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "method", $$v)
                                },
                                expression: "form.method"
                              }
                            },
                            _vm._l(_vm.business.route.method, function(v) {
                              return _c(
                                "Radio",
                                { key: v, attrs: { label: v } },
                                [_vm._v(_vm._s(v))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }, [
                            _vm._v("*")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.method))
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.type),
                      attrs: { id: "type" }
                    },
                    [
                      _c("td", [_vm._v("类型")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "RadioGroup",
                            {
                              model: {
                                value: _vm.form.type,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "type", $$v)
                                },
                                expression: "form.type"
                              }
                            },
                            _vm._l(_vm.business.route.type, function(v) {
                              return _c(
                                "Radio",
                                { key: v, attrs: { label: v } },
                                [_vm._v(_vm._s(v))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }, [
                            _vm._v("*")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.type))
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.s_ico),
                      attrs: { id: "s_ico" }
                    },
                    [
                      _c("td", [_vm._v("小图标")]),
                      _vm._v(" "),
                      _c("td", { ref: "s-ico" }, [
                        _c("div", { staticClass: "upload-image" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "init-show-image-list" }, [
                            _vm.param.mode == "edit" && _vm.form.s_ico_explain
                              ? _c("img", {
                                  staticClass: "init-show-image",
                                  attrs: { src: _vm.form.s_ico_explain }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "preview-images hide" }),
                          _vm._v(" "),
                          _vm._m(1)
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.s_ico))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.b_ico),
                      attrs: { id: "b_ico" }
                    },
                    [
                      _c("td", [_vm._v("大图标")]),
                      _vm._v(" "),
                      _c("td", { ref: "b-ico" }, [
                        _c("div", { staticClass: "upload-image" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("div", { staticClass: "init-show-image-list" }, [
                            _vm.param.mode == "edit" && _vm.form.b_ico_explain
                              ? _c("img", {
                                  staticClass: "init-show-image",
                                  attrs: { src: _vm.form.b_ico_explain }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "preview-images hide" }),
                          _vm._v(" "),
                          _vm._m(3)
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.b_ico))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.p_id),
                      attrs: { id: "p_id" }
                    },
                    [
                      _c("td", [_vm._v("上级路由")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            attrs: {
                              data: _vm.routes,
                              width: 300,
                              attr: _vm.value.mapping
                            },
                            model: {
                              value: _vm.form.p_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "p_id", $$v)
                              },
                              expression: "form.p_id"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }, [
                            _vm._v("默认：顶级路由")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.p_id))
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.enable),
                      attrs: { id: "enable" }
                    },
                    [
                      _c("td", [_vm._v("是否启用")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "RadioGroup",
                            {
                              model: {
                                value: _vm.form.enable,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "enable", $$v)
                                },
                                expression: "form.enable"
                              }
                            },
                            _vm._l(_vm.business.bool_int_one, function(v, k) {
                              return _c(
                                "Radio",
                                { key: k, attrs: { label: k } },
                                [_vm._v(_vm._s(v))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }, [
                            _vm._v("默认：是")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.enable))
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.hidden),
                      attrs: { id: "hidden" }
                    },
                    [
                      _c("td", [_vm._v("是否隐藏")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "RadioGroup",
                            {
                              model: {
                                value: _vm.form.hidden,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "hidden", $$v)
                                },
                                expression: "form.hidden"
                              }
                            },
                            _vm._l(_vm.business.bool_int_one, function(v, k) {
                              return _c(
                                "Radio",
                                { key: k, attrs: { label: k } },
                                [_vm._v(_vm._s(v))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }, [
                            _vm._v("默认：否")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.hidden))
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.menu),
                      attrs: { id: "menu" }
                    },
                    [
                      _c("td", [_vm._v("是否菜单")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "RadioGroup",
                            {
                              model: {
                                value: _vm.form.menu,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "menu", $$v)
                                },
                                expression: "form.menu"
                              }
                            },
                            _vm._l(_vm.business.bool_int_one, function(v, k) {
                              return _c(
                                "Radio",
                                { key: k, attrs: { label: k } },
                                [_vm._v(_vm._s(v))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }, [
                            _vm._v("默认：否")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.menu))
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.weight),
                      attrs: { id: "weight" }
                    },
                    [
                      _c("td", [_vm._v("权重")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.weight,
                              expression: "form.weight"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "number", step: "0" },
                          domProps: { value: _vm.form.weight },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "weight", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("默认：0，仅允许输入整数")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.weight))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(4)
                ])
              ])
            ]
          )
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
    return _c("div", { staticClass: "select-images" }, [
      _c("div", { staticClass: "upload-show" }, [
        _c("div", { staticClass: "image-line" }, [
          _c("img", {
            staticClass: "image upload-image-btn",
            attrs: {
              src: __webpack_require__(/*! ../../../plugin/UploadImage/image/upload_images.png */ "./source/plugin/UploadImage/image/upload_images.png")
            }
          }),
          _c("span", { staticClass: "selected-count hide" }, [_vm._v("10")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-line" }, [_vm._v("请选择要上传的图片")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "clear-selected",
            attrs: { title: "清空已选择的图片" }
          },
          [
            _c("img", {
              staticClass: "image",
              attrs: {
                src: __webpack_require__(/*! ../../../plugin/UploadImage/image/clear_selected.png */ "./source/plugin/UploadImage/image/clear_selected.png")
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "upload-images-input",
          attrs: { type: "file", name: "upload_images" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip" }, [_vm._v("这边是提示内容")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "upload-image-list hide" }, [
      _c("div", { staticClass: "upload-title" }, [_vm._v("待上传列表")]),
      _vm._v(" "),
      _c("div", { staticClass: "image-list" }, [
        _c("div", { staticClass: "list-content list-title" }, [
          _c("div", { staticClass: "item div-preview" }, [_vm._v("图片预览")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-type" }, [_vm._v("类型")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-size" }, [_vm._v("大小")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-speed" }, [_vm._v("速度")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-status" }, [_vm._v("状态")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-opr" }, [_vm._v("操作")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "list-content list-body" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "select-images" }, [
      _c("div", { staticClass: "upload-show" }, [
        _c("div", { staticClass: "image-line" }, [
          _c("img", {
            staticClass: "image upload-image-btn",
            attrs: {
              src: __webpack_require__(/*! ../../../plugin/UploadImage/image/upload_images.png */ "./source/plugin/UploadImage/image/upload_images.png")
            }
          }),
          _c("span", { staticClass: "selected-count hide" }, [_vm._v("10")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-line" }, [_vm._v("请选择要上传的图片")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "clear-selected",
            attrs: { title: "清空已选择的图片" }
          },
          [
            _c("img", {
              staticClass: "image",
              attrs: {
                src: __webpack_require__(/*! ../../../plugin/UploadImage/image/clear_selected.png */ "./source/plugin/UploadImage/image/clear_selected.png")
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "upload-images-input",
          attrs: { type: "file", name: "upload_images" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip" }, [_vm._v("这边是提示内容")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "upload-image-list hide" }, [
      _c("div", { staticClass: "upload-title" }, [_vm._v("待上传列表")]),
      _vm._v(" "),
      _c("div", { staticClass: "image-list" }, [
        _c("div", { staticClass: "list-content list-title" }, [
          _c("div", { staticClass: "item div-preview" }, [_vm._v("图片预览")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-type" }, [_vm._v("类型")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-size" }, [_vm._v("大小")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-speed" }, [_vm._v("速度")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-status" }, [_vm._v("状态")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-opr" }, [_vm._v("操作")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "list-content list-body" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "2" } }, [
        _c(
          "button",
          {
            staticClass: "run-button run-button-submit",
            attrs: { type: "submit" }
          },
          [_vm._v("提交")]
        )
      ])
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

/***/ "./source/vue/component/public/css/public.css?vue&type=style&index=1&id=84e3ac7c&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./source/vue/component/public/css/public.css?vue&type=style&index=1&id=84e3ac7c&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=1&id=84e3ac7c&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=1&id=84e3ac7c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/route/css/route.css?vue&type=style&index=2&id=84e3ac7c&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./source/vue/component/route/css/route.css?vue&type=style&index=2&id=84e3ac7c&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_route_css_vue_type_style_index_2_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./route.css?vue&type=style&index=2&id=84e3ac7c&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/route/css/route.css?vue&type=style&index=2&id=84e3ac7c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_route_css_vue_type_style_index_2_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_route_css_vue_type_style_index_2_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_route_css_vue_type_style_index_2_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_route_css_vue_type_style_index_2_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_route_css_vue_type_style_index_2_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/route/js/route.js?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./source/vue/component/route/js/route.js?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_route_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!./route.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/route/js/route.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_route_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/component/route/route.vue":
/*!**********************************************!*\
  !*** ./source/vue/component/route/route.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route_vue_vue_type_template_id_84e3ac7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route.vue?vue&type=template&id=84e3ac7c&scoped=true& */ "./source/vue/component/route/route.vue?vue&type=template&id=84e3ac7c&scoped=true&");
/* harmony import */ var _js_route_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/route.js?vue&type=script&lang=js& */ "./source/vue/component/route/js/route.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/global.css?vue&type=style&index=0&lang=css& */ "./source/vue/component/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&id=84e3ac7c&scoped=true&lang=css& */ "./source/vue/component/public/css/public.css?vue&type=style&index=1&id=84e3ac7c&scoped=true&lang=css&");
/* harmony import */ var _css_route_css_vue_type_style_index_2_id_84e3ac7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/route.css?vue&type=style&index=2&id=84e3ac7c&scoped=true&lang=css& */ "./source/vue/component/route/css/route.css?vue&type=style&index=2&id=84e3ac7c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_route_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _route_vue_vue_type_template_id_84e3ac7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _route_vue_vue_type_template_id_84e3ac7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "84e3ac7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/component/route/route.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/component/route/route.vue?vue&type=template&id=84e3ac7c&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./source/vue/component/route/route.vue?vue&type=template&id=84e3ac7c&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_template_id_84e3ac7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./route.vue?vue&type=template&id=84e3ac7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/route/route.vue?vue&type=template&id=84e3ac7c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_template_id_84e3ac7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_template_id_84e3ac7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9yb3V0ZS9qcy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9wdWJsaWMuY3NzPzE5YmEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcm91dGUvY3NzL3JvdXRlLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9yb3V0ZS9yb3V0ZS52dWU/YzYwNSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/ZDdmMSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/ZTg1NiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9yb3V0ZS9jc3Mvcm91dGUuY3NzPzMxNTAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcm91dGUvanMvcm91dGUuanM/ZTM4MSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9yb3V0ZS9yb3V0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcm91dGUvcm91dGUudnVlP2I2Y2QiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJmb3JtIiwibWV0aG9kIiwidHlwZSIsInBfaWQiLCJ3ZWlnaHQiLCJlbmFibGUiLCJoaWRkZW4iLCJtZW51IiwiZXJyb3IiLCJkb20iLCJpbnMiLCJsb2FkaW5nIiwicGVuZGluZyIsImNhbGxiYWNrIiwicm91dGVzIiwidmFsdWUiLCJtYXBwaW5nIiwiaWQiLCJmbG9vciIsImNyZWF0ZWQiLCJtb3VudGVkIiwiaW5pdERvbSIsImluaXRJbnMiLCJpbml0aWFsaXplIiwibWV0aG9kcyIsInNJY28iLCJHIiwiJHJlZnMiLCJiSWNvIiwic2VsZiIsInNtYWxsIiwiVXBsb2FkSW1hZ2UiLCJnZXQiLCJtb2RlIiwidXJsIiwidG9wQ29udGV4dCIsInVwbG9hZCIsImZpZWxkIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJpc0Z1bmN0aW9uIiwiaW1hZ2UiLCJkZWxldGVfdW5mb2N1cyIsInBsdWdpblJlcyIsImRlbGV0ZVVuZm9jdXMiLCJiaWciLCJzaG93IiwicGFyYW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldFJvdXRlIiwiYWxlcnQiLCJ0aGVuIiwibmV4dCIsImdldERhdGEiLCJoaWRlIiwiQXBpIiwicm91dGUiLCJhbGwiLCJkZXRhaWwiLCJjaGVjayIsInN1Ym1pdCIsImxpc3RlbiIsImVtcHR5Iiwic19pY28iLCJiX2ljbyIsImJ0biIsImxvY2F0aW9uIiwidlNjcm9sbCIsInYiLCJmaXJzdEtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWU7QUFDWEEsTUFBSSxFQUFFLFNBREs7QUFFWEMsTUFGVyxrQkFFSDtBQUNKLFdBQU87QUFDSEMsVUFBSSxFQUFFO0FBQ0ZDLGNBQU0sRUFBRSxNQUROO0FBRUZDLFlBQUksRUFBRSxNQUZKO0FBR0ZDLFlBQUksRUFBRSxDQUhKO0FBSUZDLGNBQU0sRUFBRSxDQUpOO0FBS0ZDLGNBQU0sRUFBRSxDQUxOO0FBTUZDLGNBQU0sRUFBRSxDQU5OO0FBT0ZDLFlBQUksRUFBRTtBQVBKLE9BREg7QUFVSEMsV0FBSyxFQUFFLEVBVko7QUFXSEMsU0FBRyxFQUFFLEVBWEY7QUFZSEMsU0FBRyxFQUFFO0FBQ0RDLGVBQU8sRUFBRTtBQURSLE9BWkY7QUFlSEMsYUFBTyxFQUFFLEVBZk47QUFnQkhDLGNBQVEsRUFBRSxFQWhCUDtBQWlCSEMsWUFBTSxFQUFFLEVBakJMO0FBa0JIQyxXQUFLLEVBQUU7QUFDSEMsZUFBTyxFQUFFO0FBQ0xDLFlBQUUsRUFBRSxJQURDO0FBRUxDLGVBQUssRUFBRSxPQUZGO0FB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QUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN6Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ2LXJvdXRlXCIgLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnTk9ORScgLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3ZpZXcnICxcclxuICAgICAgICAgICAgICAgIHBfaWQ6IDAgLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAwICxcclxuICAgICAgICAgICAgICAgIGVuYWJsZTogMSAsXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IDAgLFxyXG4gICAgICAgICAgICAgICAgbWVudTogMCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBlcnJvcjoge30gLFxyXG4gICAgICAgICAgICBkb206IHt9ICxcclxuICAgICAgICAgICAgaW5zOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBudWxsICxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGVuZGluZzoge30gLFxyXG4gICAgICAgICAgICBjYWxsYmFjazoge30gLFxyXG4gICAgICAgICAgICByb3V0ZXM6IFtdICxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIG1hcHBpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2lkJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxvb3I6ICdmbG9vcicgLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbicgLFxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuICAgIGNyZWF0ZWQgKCkge1xyXG5cclxuICAgIH0gLFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW5zKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9ICxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdERvbSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnNJY28gPSBHKHRoaXMuJHJlZnNbJ3MtaWNvJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5iSWNvID0gRyh0aGlzLiRyZWZzWydiLWljbyddKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaW5pdElucyAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcgPSB0aGlzLiRyZWZzLmxvYWRpbmcuaW5zLmxvYWRpbmc7XHJcblxyXG4gICAgICAgICAgICAvLyDlsI/lm77moIdcclxuICAgICAgICAgICAgdGhpcy5pbnMuc21hbGwgPSBuZXcgVXBsb2FkSW1hZ2UodGhpcy5kb20uc0ljby5nZXQoMCkgLCB7XHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnb3ZlcnJpZGUnICxcclxuICAgICAgICAgICAgICAgIHVybDogIHRvcENvbnRleHQudXBsb2FkICxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZmlsZScgLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzICwgY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHLmlzRnVuY3Rpb24oc2VsZi5jYWxsYmFjay5zbWFsbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsYmFjay5zbWFsbChyZXMgLCBjb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3VuZm9jdXM6IHRvcENvbnRleHQucGx1Z2luUmVzLlVwbG9hZEltYWdlLmltYWdlLmRlbGV0ZVVuZm9jdXNcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWkp+Wbvuagh1xyXG4gICAgICAgICAgICB0aGlzLmlucy5iaWcgPSBuZXcgVXBsb2FkSW1hZ2UodGhpcy5kb20uYkljby5nZXQoMCkgLCB7XHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnb3ZlcnJpZGUnICxcclxuICAgICAgICAgICAgICAgIHVybDogIHRvcENvbnRleHQudXBsb2FkICxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZmlsZScgLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzICwgY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHLmlzRnVuY3Rpb24oc2VsZi5jYWxsYmFjay5iaWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbGJhY2suYmlnKHJlcyAsIGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfdW5mb2N1czogdG9wQ29udGV4dC5wbHVnaW5SZXMuVXBsb2FkSW1hZ2UuaW1hZ2UuZGVsZXRlVW5mb2N1c1xyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0aWFsaXplICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtLm1vZGUgPT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSAsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Um91dGUoKGRhdGEgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICwgKGRhdGEgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkudGhlbigobmV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgoZGF0YSAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9ICwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJvdXRlKChkYXRhICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0gLCAoZGF0YSAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGdldFJvdXRlIChzdWNjZXNzICwgZXJyb3IgLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBBcGkucm91dGUuYWxsKHN1Y2Nlc3MgLCBlcnJvciAsIGNhbGxiYWNrKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgZ2V0RGF0YSAoc3VjY2VzcyAsIGVycm9yICwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgQXBpLnJvdXRlLmRldGFpbCh0aGlzLnBhcmFtLmlkICwgc3VjY2VzcyAsIGVycm9yICwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5bmlbDmja5cclxuICAgICAgICBjaGVjayAoZGF0YSkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgc3VibWl0ICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmcuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcubGlzdGVuKCdjbG9zZScgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlICwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDkuIrkvKDlsI/lm75cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucy5zbWFsbC5lbXB0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5zbWFsbCA9IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zX2ljbyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMuc21hbGwudXBsb2FkKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOS4iuS8oOWkp+WbvlxyXG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSAsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucy5iaWcuZW1wdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmJpZyA9IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5iX2ljbyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnMuYmlnLnVwbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOS4iuS8oOihqOWNlVxyXG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSAsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwaS5yb3V0ZVt0aGlzLnBhcmFtLm1vZGVdKHRoaXMuZm9ybSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KCfmk43kvZzmiJDlip8nICwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn57un57utJyArICh0aGlzLnBhcmFtLm1vZGUgPT0gJ2VkaXQnID8gJ+e8lui+kScgOiAn5re75YqgJykgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6Lev55Sx5YiX6KGoJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbignL3JvdXRlL2xpc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAoZGF0YSAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAtNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZTY3JvbGwoRy52LmZpcnN0S2V5KHRoaXMuZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDkuovlkI7lpITnkIZcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5saXN0ZW4oJ2Nsb3NlJyAsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImMtY29tcG9uZW50XCIgfSxcbiAgICBbXG4gICAgICBfYyhcIm5hdmlnYXRpb25cIiwge1xuICAgICAgICBhdHRyczogeyB0b3BSb3V0ZTogX3ZtLnRvcFJvdXRlLCBwb3NpdGlvbjogX3ZtLnBvc2l0aW9uIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXRiXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5jbiksIGF0dHJzOiB7IGlkOiBcImNuXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5Lit5paH5ZCN56ewXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5jbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNuXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IuY24pKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IuZW4pLCBhdHRyczogeyBpZDogXCJlblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuiLseaWh+WQjeensFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5lbikpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnJvdXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJyb3V0ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIui3r+eUsVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucm91dGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyb3V0ZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5yb3V0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLm1ldGhvZCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWV0aG9kXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5pa55rOVXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpb0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm1ldGhvZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5tZXRob2RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5idXNpbmVzcy5yb3V0ZS5tZXRob2QsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogdiwgYXR0cnM6IHsgbGFiZWw6IHYgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5tZXRob2QpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnR5cGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInR5cGVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnsbvlnotcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlvR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInR5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmJ1c2luZXNzLnJvdXRlLnR5cGUsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogdiwgYXR0cnM6IHsgbGFiZWw6IHYgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci50eXBlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5zX2ljbyksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwic19pY29cIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlsI/lm77moIdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyByZWY6IFwicy1pY29cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluaXQtc2hvdy1pbWFnZS1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXJhbS5tb2RlID09IFwiZWRpdFwiICYmIF92bS5mb3JtLnNfaWNvX2V4cGxhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluaXQtc2hvdy1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmZvcm0uc19pY29fZXhwbGFpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXctaW1hZ2VzIGhpZGVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnNfaWNvKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IuYl9pY28pLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImJfaWNvXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5aSn5Zu+5qCHXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgcmVmOiBcImItaWNvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2UtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFyYW0ubW9kZSA9PSBcImVkaXRcIiAmJiBfdm0uZm9ybS5iX2ljb19leHBsYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5mb3JtLmJfaWNvX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3LWltYWdlcyBoaWRlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgzKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5iX2ljbykpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnBfaWQpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInBfaWRcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLkuIrnuqfot6/nlLFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLnJvdXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBfdm0udmFsdWUubWFwcGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpu5jorqTvvJrpobbnuqfot6/nlLFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5wX2lkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5lbmFibGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImVuYWJsZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuaYr+WQpuWQr+eUqFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaW9Hcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbmFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbmFibGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW5hYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYnVzaW5lc3MuYm9vbF9pbnRfb25lLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGssIGF0dHJzOiB7IGxhYmVsOiBrIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpu5jorqTvvJrmmK9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5lbmFibGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLmhpZGRlbiksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiaGlkZGVuXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5piv5ZCm6ZqQ6JePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpb0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhpZGRlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImhpZGRlblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5idXNpbmVzcy5ib29sX2ludF9vbmUsIGZ1bmN0aW9uKHYsIGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaywgYXR0cnM6IHsgbGFiZWw6IGsgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIum7mOiupO+8muWQplwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLmhpZGRlbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IubWVudSksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWVudVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuaYr+WQpuiPnOWNlVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaW9Hcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5tZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibWVudVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYnVzaW5lc3MuYm9vbF9pbnRfb25lLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGssIGF0dHJzOiB7IGxhYmVsOiBrIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpu5jorqTvvJrlkKZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5tZW51KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci53ZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIndlaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuadg+mHjVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLndlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS53ZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIsIHN0ZXA6IFwiMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS53ZWlnaHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ3ZWlnaHRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6buY6K6k77yaMO+8jOS7heWFgeiuuOi+k+WFpeaVtOaVsFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci53ZWlnaHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSg0KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwibG9hZGluZ1wiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0LWltYWdlc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXNob3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtbGluZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZSB1cGxvYWQtaW1hZ2UtYnRuXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9wbHVnaW4vVXBsb2FkSW1hZ2UvaW1hZ2UvdXBsb2FkX2ltYWdlcy5wbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC1jb3VudCBoaWRlXCIgfSwgW192bS5fdihcIjEwXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1saW5lXCIgfSwgW192bS5fdihcIuivt+mAieaLqeimgeS4iuS8oOeahOWbvueJh1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyLXNlbGVjdGVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLmuIXnqbrlt7LpgInmi6nnmoTlm77niYdcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vcGx1Z2luL1VwbG9hZEltYWdlL2ltYWdlL2NsZWFyX3NlbGVjdGVkLnBuZ1wiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlcy1pbnB1dFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcInVwbG9hZF9pbWFnZXNcIiB9XG4gICAgICAgIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtfdm0uX3YoXCLov5novrnmmK/mj5DnpLrlhoXlrrlcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlLWxpc3QgaGlkZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXRpdGxlXCIgfSwgW192bS5fdihcIuW+heS4iuS8oOWIl+ihqFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtbGlzdFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWNvbnRlbnQgbGlzdC10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXByZXZpZXdcIiB9LCBbX3ZtLl92KFwi5Zu+54mH6aKE6KeIXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXR5cGVcIiB9LCBbX3ZtLl92KFwi57G75Z6LXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXNpemVcIiB9LCBbX3ZtLl92KFwi5aSn5bCPXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXNwZWVkXCIgfSwgW192bS5fdihcIumAn+W6plwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zdGF0dXNcIiB9LCBbX3ZtLl92KFwi54q25oCBXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LW9wclwiIH0sIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWNvbnRlbnQgbGlzdC1ib2R5XCIgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3QtaW1hZ2VzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtc2hvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1saW5lXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlIHVwbG9hZC1pbWFnZS1idG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL3BsdWdpbi9VcGxvYWRJbWFnZS9pbWFnZS91cGxvYWRfaW1hZ2VzLnBuZ1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdGVkLWNvdW50IGhpZGVcIiB9LCBbX3ZtLl92KFwiMTBcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxpbmVcIiB9LCBbX3ZtLl92KFwi6K+36YCJ5oup6KaB5LiK5Lyg55qE5Zu+54mHXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xlYXItc2VsZWN0ZWRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIua4heepuuW3sumAieaLqeeahOWbvueJh1wiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9wbHVnaW4vVXBsb2FkSW1hZ2UvaW1hZ2UvY2xlYXJfc2VsZWN0ZWQucG5nXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2VzLWlucHV0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwidXBsb2FkX2ltYWdlc1wiIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW192bS5fdihcIui/mei+ueaYr+aPkOekuuWGheWuuVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2UtbGlzdCBoaWRlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtdGl0bGVcIiB9LCBbX3ZtLl92KFwi5b6F5LiK5Lyg5YiX6KGoXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1saXN0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudCBsaXN0LXRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtcHJldmlld1wiIH0sIFtfdm0uX3YoXCLlm77niYfpooTop4hcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtdHlwZVwiIH0sIFtfdm0uX3YoXCLnsbvlnotcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc2l6ZVwiIH0sIFtfdm0uX3YoXCLlpKflsI9cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc3BlZWRcIiB9LCBbX3ZtLl92KFwi6YCf5bqmXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXN0YXR1c1wiIH0sIFtfdm0uX3YoXCLnirbmgIFcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtb3ByXCIgfSwgW192bS5fdihcIuaTjeS9nFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudCBsaXN0LWJvZHlcIiB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tc3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD04NGUzYWM3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD04NGUzYWM3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3V0ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD04NGUzYWM3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3JvdXRlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTg0ZTNhYzdjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi9yb3V0ZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi9yb3V0ZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcm91dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg0ZTNhYzdjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL3JvdXRlLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy9yb3V0ZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi4vcHVibGljL2Nzcy9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4uL3B1YmxpYy9jc3MvcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTg0ZTNhYzdjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUyIGZyb20gXCIuL2Nzcy9yb3V0ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD04NGUzYWM3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODRlM2FjN2NcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3ZWJcXFxcZnJvbnRcXFxccnRjX2FkbWluXFxcXHB1YmxpY1xcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4NGUzYWM3YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4NGUzYWM3YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4NGUzYWM3YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcm91dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg0ZTNhYzdjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzg0ZTNhYzdjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL2NvbXBvbmVudC9yb3V0ZS9yb3V0ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm91dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg0ZTNhYzdjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==