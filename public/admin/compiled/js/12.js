(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/article/js/article.js?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./source/vue/component/article/js/article.js?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-article",
  data: function data() {
    return {
      form: {
        enable: 1,
        weight: 0,
        article_type_id: 0
      },
      error: {},
      ins: {
        loading: null
      },
      dom: {},
      pending: {},
      callback: {},
      article_type: [],
      value: {
        attr: {
          id: 'id',
          floor: 'floor',
          name: 'name'
        }
      }
    };
  },
  mounted: function mounted() {
    this.initDom();
    this.initIns();
    this.initialize();
  },
  methods: {
    initDom: function initDom() {
      this.dom.thumb = G(this.$refs.thumb);
    },
    initIns: function initIns() {
      var self = this;
      this.ins.loading = this.$refs.loading.ins.loading;
      this.ins.thumb = new UploadImage(this.dom.thumb.get(0), {
        // 图片上传链接
        url: topContext.upload,
        // 待上传图片的表单字段名称：默认是 images
        field: 'file',
        // 默认模式是追加 append | override
        mode: 'override',
        // 单选 | 多选，默认多选
        multiple: false,
        // 单张上传成功，每次上传成功后回调
        success: function success(res) {
          if (G.isFunction(self.callback.thumb)) {
            self.callback.thumb(res.data, res.code);
          }
        },
        image: {
          delete_unfocus: topContext.pluginRes.UploadImage.image.deleteUnfocus
        }
      });
      this.ins.editor = new wangEditor(this.$refs.editor);
      this.ins.editor.customConfig.uploadImgServer = topContext.uploadForWangEditor;
      this.ins.editor.customConfig.uploadFileName = 'file[]';
      this.ins.editor.create();
    },
    initialize: function initialize() {
      var _this = this;

      this.ins.loading.show();

      if (this.param.mode == 'edit') {
        new Promise(function (resolve) {
          _this.getArticleType(function (data) {
            _this.article_type = data;
            resolve(true);
          }, function (data) {
            _this.alert(data);

            resolve(false);
          });
        }).then(function (next) {
          if (!next) {
            return;
          }

          _this.getArticle(function (data) {
            _this.form = data; // 初始化文章内容

            _this.ins.editor.txt.html(_this.form.content);
          }, function (data) {
            _this.alert(data);
          }, function () {
            _this.ins.loading.hide();
          });
        });
      } else {
        this.getArticleType(function (data) {
          _this.article_type = data;
        }, function (data) {
          _this.alert(data);
        }, function () {
          _this.ins.loading.hide();
        });
      }
    },
    getArticle: function getArticle(success, error, callback) {
      Api.article.detail(this.param.id, success, error, callback);
    },
    getArticleType: function getArticleType(success, error, callback) {
      Api.article_type.all(success, error, callback);
    },
    submit: function submit() {
      var _this2 = this;

      if (this.pending.submit) {
        this.alert('请求中...请耐心等待');
        return;
      }

      this.ins.loading.show();
      this.ins.loading.listen('close', function () {
        _this2.pending.submit = false;
      });
      this.pending.submit = true;
      var self = this; // 填充文章内容字段

      this.form.content = this.ins.editor.txt.html();
      new Promise(function (resolve, reject) {
        if (_this2.ins.thumb.empty()) {
          resolve(true);
          return;
        }

        _this2.callback.thumb = function (res, code) {
          if (code != 0) {
            _this2.alert(res);

            resolve(false);
            return;
          }

          _this2.form.thumb = res;
          resolve(true);
        }; // 上传图片


        _this2.ins.thumb.upload();
      }).then(function (next) {
        if (!next) {
          return;
        }

        return new Promise(function (resolve, reject) {
          Api.article[_this2.param.mode](_this2.form, function () {
            _this2.error = {};

            _this2.alert('操作成功', {
              btn: [{
                name: '继续' + (_this2.param.mode == 'edit' ? '编辑' : '添加'),
                callback: function callback() {
                  this.hide();
                }
              }, {
                name: '文章列表',
                callback: function callback() {
                  this.hide();
                  self.location('/article/list');
                }
              }]
            });
          }, function (res, code) {
            _this2.error = {};

            if (code != -400) {
              return;
            }

            _this2.error = res;

            _this2.vScroll(G.v.firstKey(_this2.error));
          }, resolve);
        });
      })["finally"](function () {
        _this2.pending.submit = false;

        _this2.ins.loading.hide();

        _this2.ins.loading.listen('close', null);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/article/css/article.css?vue&type=style&index=2&id=65a3731c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/article/css/article.css?vue&type=style&index=2&id=65a3731c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/article/article.vue?vue&type=template&id=65a3731c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/component/article/article.vue?vue&type=template&id=65a3731c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                    {
                      class: _vm.getClass(_vm.error.title),
                      attrs: { id: "title" }
                    },
                    [
                      _c("td", [_vm._v("标题")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.title,
                              expression: "form.title"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "title", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.title))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.article_type_id),
                      attrs: { id: "article_type_id" }
                    },
                    [
                      _c("td", [_vm._v("文章分类")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticStyle: { width: "300px" },
                            attrs: {
                              data: _vm.article_type,
                              has: false,
                              attr: _vm.value.attr
                            },
                            model: {
                              value: _vm.form.article_type_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "article_type_id", $$v)
                              },
                              expression: "form.article_type_id"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }, [
                            _vm._v("*")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.article_type_id))
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
                      class: _vm.getClass(_vm.error.thumb),
                      attrs: { id: "thumb" }
                    },
                    [
                      _c("td", [_vm._v("封面")]),
                      _vm._v(" "),
                      _c("td", { ref: "image-container" }, [
                        _c("div", { staticClass: "upload-image" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "init-show-image-list" }, [
                            _vm.param.mode == "edit" && _vm.form.thumb_explain
                              ? _c("img", {
                                  staticClass: "init-show-image",
                                  attrs: { src: _vm.form.thumb_explain }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "preview-images hide" }),
                          _vm._v(" "),
                          _vm._m(1)
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.content),
                      attrs: { id: "content" }
                    },
                    [
                      _c("td", [_vm._v("内容")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", {
                          ref: "editor",
                          staticClass: "wang-editor"
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.content))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.author),
                      attrs: { id: "source" }
                    },
                    [
                      _c("td", [_vm._v("作者")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.author,
                              expression: "form.author"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.author },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "author", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.author))
                        ])
                      ])
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
                        _c("span", { staticClass: "tip" }, [_vm._v("默认：0")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.weight))
                        ])
                      ])
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
                      _c("td", [_vm._v("启用？")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "i-radio-group",
                            {
                              model: {
                                value: _vm.form.enable,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "enable", $$v)
                                },
                                expression: "form.enable"
                              }
                            },
                            _vm._l(_vm.business.bool_int, function(v, k) {
                              return _c(
                                "i-radio",
                                { key: k, attrs: { label: k } },
                                [_c("span", [_vm._v(_vm._s(v))])]
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
                            _vm._v(_vm._s(_vm.error.enable))
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      { attrs: { colspan: "2" } },
                      [
                        _c(
                          "v-button",
                          { attrs: { type: "submit", color: "submit" } },
                          [_vm._v("提交")]
                        )
                      ],
                      1
                    )
                  ])
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./wangEditor.css?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/article/article.vue":
/*!**************************************************!*\
  !*** ./source/vue/component/article/article.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_vue_vue_type_template_id_65a3731c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article.vue?vue&type=template&id=65a3731c&scoped=true& */ "./source/vue/component/article/article.vue?vue&type=template&id=65a3731c&scoped=true&");
/* harmony import */ var _js_article_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/article.js?vue&type=script&lang=js& */ "./source/vue/component/article/js/article.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _asset_css_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../asset/css/wangEditor.css?vue&type=style&index=0&lang=css& */ "./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&lang=css& */ "./source/vue/component/public/css/public.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _css_article_css_vue_type_style_index_2_id_65a3731c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/article.css?vue&type=style&index=2&id=65a3731c&scoped=true&lang=css& */ "./source/vue/component/article/css/article.css?vue&type=style&index=2&id=65a3731c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_article_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _article_vue_vue_type_template_id_65a3731c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _article_vue_vue_type_template_id_65a3731c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "65a3731c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/component/article/article.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/component/article/article.vue?vue&type=template&id=65a3731c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./source/vue/component/article/article.vue?vue&type=template&id=65a3731c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_vue_vue_type_template_id_65a3731c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./article.vue?vue&type=template&id=65a3731c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/article/article.vue?vue&type=template&id=65a3731c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_vue_vue_type_template_id_65a3731c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_vue_vue_type_template_id_65a3731c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./source/vue/component/article/css/article.css?vue&type=style&index=2&id=65a3731c&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./source/vue/component/article/css/article.css?vue&type=style&index=2&id=65a3731c&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_article_css_vue_type_style_index_2_id_65a3731c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./article.css?vue&type=style&index=2&id=65a3731c&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/article/css/article.css?vue&type=style&index=2&id=65a3731c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_article_css_vue_type_style_index_2_id_65a3731c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_article_css_vue_type_style_index_2_id_65a3731c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_article_css_vue_type_style_index_2_id_65a3731c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_article_css_vue_type_style_index_2_id_65a3731c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_article_css_vue_type_style_index_2_id_65a3731c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/article/js/article.js?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./source/vue/component/article/js/article.js?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_article_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!./article.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/article/js/article.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_article_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hcnRpY2xlL2pzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0L2Nzcy93YW5nRWRpdG9yLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hcnRpY2xlL2Nzcy9hcnRpY2xlLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL3B1YmxpYy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvYXJ0aWNsZS9hcnRpY2xlLnZ1ZT9mMThjIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldC9jc3Mvd2FuZ0VkaXRvci5jc3M/Zjk3NCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hcnRpY2xlL2FydGljbGUudnVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L2FydGljbGUvYXJ0aWNsZS52dWU/ZjgxYyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9hcnRpY2xlL2Nzcy9hcnRpY2xlLmNzcz81NWY2Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L2FydGljbGUvanMvYXJ0aWNsZS5qcz83ZDQxIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvcHVibGljLmNzcz9hMDMyIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiZm9ybSIsImVuYWJsZSIsIndlaWdodCIsImFydGljbGVfdHlwZV9pZCIsImVycm9yIiwiaW5zIiwibG9hZGluZyIsImRvbSIsInBlbmRpbmciLCJjYWxsYmFjayIsImFydGljbGVfdHlwZSIsInZhbHVlIiwiYXR0ciIsImlkIiwiZmxvb3IiLCJtb3VudGVkIiwiaW5pdERvbSIsImluaXRJbnMiLCJpbml0aWFsaXplIiwibWV0aG9kcyIsInRodW1iIiwiRyIsIiRyZWZzIiwic2VsZiIsIlVwbG9hZEltYWdlIiwiZ2V0IiwidXJsIiwidG9wQ29udGV4dCIsInVwbG9hZCIsImZpZWxkIiwibW9kZSIsIm11bHRpcGxlIiwic3VjY2VzcyIsInJlcyIsImlzRnVuY3Rpb24iLCJjb2RlIiwiaW1hZ2UiLCJkZWxldGVfdW5mb2N1cyIsInBsdWdpblJlcyIsImRlbGV0ZVVuZm9jdXMiLCJlZGl0b3IiLCJ3YW5nRWRpdG9yIiwiY3VzdG9tQ29uZmlnIiwidXBsb2FkSW1nU2VydmVyIiwidXBsb2FkRm9yV2FuZ0VkaXRvciIsInVwbG9hZEZpbGVOYW1lIiwiY3JlYXRlIiwic2hvdyIsInBhcmFtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXRBcnRpY2xlVHlwZSIsImFsZXJ0IiwidGhlbiIsIm5leHQiLCJnZXRBcnRpY2xlIiwidHh0IiwiaHRtbCIsImNvbnRlbnQiLCJoaWRlIiwiQXBpIiwiYXJ0aWNsZSIsImRldGFpbCIsImFsbCIsInN1Ym1pdCIsImxpc3RlbiIsInJlamVjdCIsImVtcHR5IiwiYnRuIiwibG9jYXRpb24iLCJ2U2Nyb2xsIiwidiIsImZpcnN0S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBZTtBQUNYQSxNQUFJLEVBQUUsV0FESztBQUVYQyxNQUZXLGtCQUVIO0FBQ0osV0FBTztBQUNIQyxVQUFJLEVBQUU7QUFDRkMsY0FBTSxFQUFFLENBRE47QUFFRkMsY0FBTSxFQUFFLENBRk47QUFHRkMsdUJBQWUsRUFBRTtBQUhmLE9BREg7QUFNSEMsV0FBSyxFQUFFLEVBTko7QUFPSEMsU0FBRyxFQUFFO0FBQ0RDLGVBQU8sRUFBRTtBQURSLE9BUEY7QUFVSEMsU0FBRyxFQUFFLEVBVkY7QUFXSEMsYUFBTyxFQUFFLEVBWE47QUFZSEMsY0FBUSxFQUFFLEVBWlA7QUFhSEMsa0JBQVksRUFBRSxFQWJYO0FBY0hDLFdBQUssRUFBRTtBQUNIQyxZQUFJLEVBQUU7QUFDRkMsWUFBRSxFQUFFLElBREY7QUFFRkMsZUFBSyxFQUFFLE9BRkw7QUFHRmhCLGNBQUks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OztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN6Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBaVMsQ0FBZ0Isa1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBclQ7QUFBQTtBQUFBLHdDQUEwSCxDQUFnQiwwTEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5STtBQUFBO0FBQUE7QUFBQTtBQUF3USxDQUFnQix5U0FBRyxFQUFDLEMiLCJmaWxlIjoianMvMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1hcnRpY2xlXCIgLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiAxICxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogMCAsXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlX3R5cGVfaWQ6IDAgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjoge30gLFxyXG4gICAgICAgICAgICBpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHt9ICxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHt9ICxcclxuICAgICAgICAgICAgYXJ0aWNsZV90eXBlOiBbXSAsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdpZCcgLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsb29yOiAnZmxvb3InICxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmFtZScgLFxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICB0aGlzLmluaXREb20oKTtcclxuICAgICAgICB0aGlzLmluaXRJbnMoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH0gLFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0RG9tICgpIHtcclxuICAgICAgICAgICAgdGhpcy5kb20udGh1bWIgPSBHKHRoaXMuJHJlZnMudGh1bWIpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0SW5zICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nID0gdGhpcy4kcmVmcy5sb2FkaW5nLmlucy5sb2FkaW5nO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbnMudGh1bWIgPSBuZXcgVXBsb2FkSW1hZ2UodGhpcy5kb20udGh1bWIuZ2V0KDApICwge1xyXG4gICAgICAgICAgICAgICAgLy8g5Zu+54mH5LiK5Lyg6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICB1cmw6IHRvcENvbnRleHQudXBsb2FkICxcclxuICAgICAgICAgICAgICAgIC8vIOW+heS4iuS8oOWbvueJh+eahOihqOWNleWtl+auteWQjeensO+8mum7mOiupOaYryBpbWFnZXNcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnZmlsZScgLFxyXG4gICAgICAgICAgICAgICAgLy8g6buY6K6k5qih5byP5piv6L+95YqgIGFwcGVuZCB8IG92ZXJyaWRlXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnb3ZlcnJpZGUnICxcclxuICAgICAgICAgICAgICAgIC8vIOWNlemAiSB8IOWkmumAie+8jOm7mOiupOWkmumAiVxyXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlICxcclxuICAgICAgICAgICAgICAgIC8vIOWNleW8oOS4iuS8oOaIkOWKn++8jOavj+asoeS4iuS8oOaIkOWKn+WQjuWbnuiwg1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEcuaXNGdW5jdGlvbihzZWxmLmNhbGxiYWNrLnRodW1iKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxiYWNrLnRodW1iKHJlcy5kYXRhICwgcmVzLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfdW5mb2N1czogdG9wQ29udGV4dC5wbHVnaW5SZXMuVXBsb2FkSW1hZ2UuaW1hZ2UuZGVsZXRlVW5mb2N1c1xyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbnMuZWRpdG9yID0gbmV3IHdhbmdFZGl0b3IodGhpcy4kcmVmcy5lZGl0b3IpO1xyXG4gICAgICAgICAgICB0aGlzLmlucy5lZGl0b3IuY3VzdG9tQ29uZmlnLnVwbG9hZEltZ1NlcnZlciA9IHRvcENvbnRleHQudXBsb2FkRm9yV2FuZ0VkaXRvcjtcclxuICAgICAgICAgICAgdGhpcy5pbnMuZWRpdG9yLmN1c3RvbUNvbmZpZy51cGxvYWRGaWxlTmFtZSA9ICdmaWxlW10nO1xyXG4gICAgICAgICAgICB0aGlzLmlucy5lZGl0b3IuY3JlYXRlKCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRpYWxpemUgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW0ubW9kZSA9PSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBcnRpY2xlVHlwZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGVfdHlwZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkudGhlbigobmV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFydGljbGUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5paH56ug5YaF5a65XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zLmVkaXRvci50eHQuaHRtbCh0aGlzLmZvcm0uY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXJ0aWNsZVR5cGUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGVfdHlwZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9ICwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgZ2V0QXJ0aWNsZSAoc3VjY2VzcyAsIGVycm9yICwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgQXBpLmFydGljbGUuZGV0YWlsKHRoaXMucGFyYW0uaWQgLCBzdWNjZXNzICwgZXJyb3IgLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGdldEFydGljbGVUeXBlIChzdWNjZXNzICwgZXJyb3IgLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBBcGkuYXJ0aWNsZV90eXBlLmFsbChzdWNjZXNzICwgZXJyb3IgLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmcuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KCfor7fmsYLkuK0uLi7or7fogJDlv4PnrYnlvoUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcubGlzdGVuKCdjbG9zZScgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmcuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIC8vIOWhq+WFheaWh+eroOWGheWuueWtl+autVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uY29udGVudCA9IHRoaXMuaW5zLmVkaXRvci50eHQuaHRtbCgpO1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSAsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zLnRodW1iLmVtcHR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrLnRodW1iID0gKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS50aHVtYiA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMudGh1bWIudXBsb2FkKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUgLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBcGkuYXJ0aWNsZVt0aGlzLnBhcmFtLm1vZGVdKHRoaXMuZm9ybSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KCfmk43kvZzmiJDlip8nICwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn57un57utJyArICh0aGlzLnBhcmFtLm1vZGUgPT0gJ2VkaXQnID8gJ+e8lui+kScgOiAn5re75YqgJykgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5paH56ug5YiX6KGoJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbignL2FydGljbGUvbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gLTQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZTY3JvbGwoRy52LmZpcnN0S2V5KHRoaXMuZXJyb3IpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5saXN0ZW4oJ2Nsb3NlJyAsIG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH0gLFxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1jb21wb25lbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibmF2aWdhdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvc2l0aW9uOiBfdm0ucG9zaXRpb24gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtdGJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IudGl0bGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRpdGxlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5qCH6aKYXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS50aXRsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5hcnRpY2xlX3R5cGVfaWQpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImFydGljbGVfdHlwZV9pZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuaWh+eroOWIhuexu1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjMwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmFydGljbGVfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBfdm0udmFsdWUuYXR0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5hcnRpY2xlX3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImFydGljbGVfdHlwZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmFydGljbGVfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIipcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IuYXJ0aWNsZV90eXBlX2lkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci50aHVtYiksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidGh1bWJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlsIHpnaJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyByZWY6IFwiaW1hZ2UtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2UtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFyYW0ubW9kZSA9PSBcImVkaXRcIiAmJiBfdm0uZm9ybS50aHVtYl9leHBsYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5mb3JtLnRodW1iX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3LWltYWdlcyBoaWRlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5jb250ZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb250ZW50XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5YaF5a65XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImVkaXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3YW5nLWVkaXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IuY29udGVudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLmF1dGhvciksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwic291cmNlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5L2c6ICFXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYXV0aG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmF1dGhvciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImF1dGhvclwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5hdXRob3IpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci53ZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIndlaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuadg+mHjVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLndlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS53ZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIsIHN0ZXA6IFwiMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS53ZWlnaHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ3ZWlnaHRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtfdm0uX3YoXCLpu5jorqTvvJowXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci53ZWlnaHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5lbmFibGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImVuYWJsZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuWQr+eUqO+8n1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaS1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbmFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbmFibGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW5hYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYnVzaW5lc3MuYm9vbF9pbnQsIGZ1bmN0aW9uKHYsIGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBrLCBhdHRyczogeyBsYWJlbDogayB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIum7mOiupO+8muWQplwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLmVuYWJsZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgY29sb3I6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5o+Q5LqkXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwibG9hZGluZ1wiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0LWltYWdlc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXNob3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtbGluZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZSB1cGxvYWQtaW1hZ2UtYnRuXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9wbHVnaW4vVXBsb2FkSW1hZ2UvaW1hZ2UvdXBsb2FkX2ltYWdlcy5wbmdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC1jb3VudCBoaWRlXCIgfSwgW192bS5fdihcIjEwXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1saW5lXCIgfSwgW192bS5fdihcIuivt+mAieaLqeimgeS4iuS8oOeahOWbvueJh1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyLXNlbGVjdGVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLmuIXnqbrlt7LpgInmi6nnmoTlm77niYdcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vcGx1Z2luL1VwbG9hZEltYWdlL2ltYWdlL2NsZWFyX3NlbGVjdGVkLnBuZ1wiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlcy1pbnB1dFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcInVwbG9hZF9pbWFnZXNcIiB9XG4gICAgICAgIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtfdm0uX3YoXCLov5novrnmmK/mj5DnpLrlhoXlrrlcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlLWxpc3QgaGlkZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXRpdGxlXCIgfSwgW192bS5fdihcIuW+heS4iuS8oOWIl+ihqFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtbGlzdFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWNvbnRlbnQgbGlzdC10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXByZXZpZXdcIiB9LCBbX3ZtLl92KFwi5Zu+54mH6aKE6KeIXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXR5cGVcIiB9LCBbX3ZtLl92KFwi57G75Z6LXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXNpemVcIiB9LCBbX3ZtLl92KFwi5aSn5bCPXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXNwZWVkXCIgfSwgW192bS5fdihcIumAn+W6plwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zdGF0dXNcIiB9LCBbX3ZtLl92KFwi54q25oCBXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LW9wclwiIH0sIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWNvbnRlbnQgbGlzdC1ib2R5XCIgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vd2FuZ0VkaXRvci5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3dhbmdFZGl0b3IuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FydGljbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1YTM3MzFjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL2FydGljbGUuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL2FydGljbGUuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0L2Nzcy93YW5nRWRpdG9yLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuLi9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMiBmcm9tIFwiLi9jc3MvYXJ0aWNsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD02NWEzNzMxYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjVhMzczMWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3ZWJcXFxcZnJvbnRcXFxccnRjX2FkbWluXFxcXHB1YmxpY1xcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NWEzNzMxYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NWEzNzMxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NWEzNzMxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXJ0aWNsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjVhMzczMWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjVhMzczMWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvY29tcG9uZW50L2FydGljbGUvYXJ0aWNsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXJ0aWNsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjVhMzczMWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYXJ0aWNsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD02NWEzNzMxYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2FydGljbGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9NjVhMzczMWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuL2FydGljbGUuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4vYXJ0aWNsZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9