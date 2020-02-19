(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/role/js/priv.js?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./source/vue/component/role/js/priv.js?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "priv",
  data: function data() {
    return {
      // 展开|收缩
      expand: true,
      data: [],
      // 当前角色权限
      priv: [],
      // 路由列表
      routes: [],
      idList: [],
      ins: {
        tree: null
      },
      pending: {
        submit: null
      }
    };
  },
  mounted: function mounted() {
    this.initDom();
    this.initIns();
    this.getData();
  },
  methods: {
    initDom: function initDom() {},
    initIns: function initIns() {
      this.ins.loading = this.$refs.loading.ins.loading;
      this.ins.tree = this.$refs.tree;
    },
    getData: function getData() {
      var _this = this;

      this.ins.loading.show();
      Api.role.priv(this.param.id, function (res) {
        _this.priv = res.priv;

        _this.handle(res.route);

        _this.routes = res.route;
      }, null, function () {
        _this.ins.loading.hide();
      });
    },
    handle: function handle(data) {
      for (var i = 0; i < data.length; ++i) {
        var cur = data[i];
        cur.title = cur.cn;
        cur.checked = this.isSelected(cur.id);
        cur.expand = this.expand;

        if (cur.children.length > 0) {
          this.handle(cur.children);
        }
      }
    },
    // 是否选中
    isSelected: function isSelected(id) {
      for (var i = 0; i < this.priv.length; ++i) {
        var cur = this.priv[i];

        if (id == cur.id) {
          return true;
        }
      }

      return false;
    },
    // 获取选中项
    idListForSelected: function idListForSelected() {
      var nodes = this.ins.tree.getCheckedNodes();
      var idList = [];

      for (var i = 0; i < nodes.length; ++i) {
        var cur = nodes[i];
        idList.push(cur.id);
      }

      return idList;
    },
    submit: function submit() {
      var _this2 = this;

      if (this.pending.submit) {
        Prompt.alert('请求中...请耐心等待');
        return;
      }

      var self = this;
      this.pending.submit = true;
      this.ins.loading.show();
      this.ins.loading.listen('close', function () {
        _this2.pending.submit = false;
      });
      var idList = this.idListForSelected();
      idList = G.jsonEncode(idList);
      Api.role.allocate({
        id: this.param.id,
        route_id_list: idList
      }, function (res) {
        Prompt.alert('操作成功', {
          btn: [{
            name: '角色列表',
            callback: function callback() {
              this.hide();
              self.location('/role/list');
            }
          }, {
            name: '继续分配',
            callback: function callback() {
              this.hide();
            }
          }]
        });
      }, null, function () {
        _this2.pending.submit = false;

        _this2.ins.loading.hide();

        _this2.ins.loading.listen('close', null);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=1&id=49146ab2&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=1&id=49146ab2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=0&id=49146ab2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=0&id=49146ab2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/role/css/priv.css?vue&type=style&index=2&id=49146ab2&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/role/css/priv.css?vue&type=style&index=2&id=49146ab2&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/role/priv.vue?vue&type=template&id=49146ab2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/component/role/priv.vue?vue&type=template&id=49146ab2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "c-content" }, [
                _c("table", { staticClass: "input-tb" }, [
                  _c("tbody", [
                    _c("tr", [
                      _c(
                        "td",
                        [
                          _c("i-tree", {
                            ref: "tree",
                            attrs: {
                              data: _vm.routes,
                              "show-checkbox": "",
                              multiple: "",
                              "check-strictly": "",
                              "check-directly": ""
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
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
    return _c("div", { staticClass: "run-title" }, [
      _c("div", { staticClass: "left" }, [_vm._v("权限列表")]),
      _vm._v(" "),
      _c("div", { staticClass: "right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [
        _c("button", { staticClass: "run-button run-button-submit" }, [
          _vm._v("提交")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/vue/component/public/css/list.css?vue&type=style&index=1&id=49146ab2&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./source/vue/component/public/css/list.css?vue&type=style&index=1&id=49146ab2&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./list.css?vue&type=style&index=1&id=49146ab2&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/list.css?vue&type=style&index=1&id=49146ab2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/public/css/public.css?vue&type=style&index=0&id=49146ab2&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./source/vue/component/public/css/public.css?vue&type=style&index=0&id=49146ab2&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=0&id=49146ab2&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/public/css/public.css?vue&type=style&index=0&id=49146ab2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/role/css/priv.css?vue&type=style&index=2&id=49146ab2&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./source/vue/component/role/css/priv.css?vue&type=style&index=2&id=49146ab2&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./priv.css?vue&type=style&index=2&id=49146ab2&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/component/role/css/priv.css?vue&type=style&index=2&id=49146ab2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/component/role/js/priv.js?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./source/vue/component/role/js/priv.js?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_priv_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!./priv.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/component/role/js/priv.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_priv_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/component/role/priv.vue":
/*!********************************************!*\
  !*** ./source/vue/component/role/priv.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _priv_vue_vue_type_template_id_49146ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priv.vue?vue&type=template&id=49146ab2&scoped=true& */ "./source/vue/component/role/priv.vue?vue&type=template&id=49146ab2&scoped=true&");
/* harmony import */ var _js_priv_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/priv.js?vue&type=script&lang=js& */ "./source/vue/component/role/js/priv.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_public_css_vue_type_style_index_0_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=0&id=49146ab2&scoped=true&lang=css& */ "./source/vue/component/public/css/public.css?vue&type=style&index=0&id=49146ab2&scoped=true&lang=css&");
/* harmony import */ var _public_css_list_css_vue_type_style_index_1_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/list.css?vue&type=style&index=1&id=49146ab2&scoped=true&lang=css& */ "./source/vue/component/public/css/list.css?vue&type=style&index=1&id=49146ab2&scoped=true&lang=css&");
/* harmony import */ var _css_priv_css_vue_type_style_index_2_id_49146ab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/priv.css?vue&type=style&index=2&id=49146ab2&scoped=true&lang=css& */ "./source/vue/component/role/css/priv.css?vue&type=style&index=2&id=49146ab2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_priv_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _priv_vue_vue_type_template_id_49146ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _priv_vue_vue_type_template_id_49146ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49146ab2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/component/role/priv.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/component/role/priv.vue?vue&type=template&id=49146ab2&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./source/vue/component/role/priv.vue?vue&type=template&id=49146ab2&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_priv_vue_vue_type_template_id_49146ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./priv.vue?vue&type=template&id=49146ab2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/component/role/priv.vue?vue&type=template&id=49146ab2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_priv_vue_vue_type_template_id_49146ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_priv_vue_vue_type_template_id_49146ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9yb2xlL2pzL3ByaXYuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9saXN0LmNzcz81ZjBmIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3B1YmxpYy9jc3MvcHVibGljLmNzcz9hYTc0Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3JvbGUvY3NzL3ByaXYuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3JvbGUvcHJpdi52dWU/YzVmOSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9wdWJsaWMvY3NzL2xpc3QuY3NzPzBhOTMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcHVibGljL2Nzcy9wdWJsaWMuY3NzP2NlMjQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS9jb21wb25lbnQvcm9sZS9jc3MvcHJpdi5jc3M/M2Q5NSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9yb2xlL2pzL3ByaXYuanM/ODNkMSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL2NvbXBvbmVudC9yb2xlL3ByaXYudnVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvY29tcG9uZW50L3JvbGUvcHJpdi52dWU/ZjEyMyJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImV4cGFuZCIsInByaXYiLCJyb3V0ZXMiLCJpZExpc3QiLCJpbnMiLCJ0cmVlIiwicGVuZGluZyIsInN1Ym1pdCIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdElucyIsImdldERhdGEiLCJtZXRob2RzIiwibG9hZGluZyIsIiRyZWZzIiwic2hvdyIsIkFwaSIsInJvbGUiLCJwYXJhbSIsImlkIiwicmVzIiwiaGFuZGxlIiwicm91dGUiLCJoaWRlIiwiaSIsImxlbmd0aCIsImN1ciIsInRpdGxlIiwiY24iLCJjaGVja2VkIiwiaXNTZWxlY3RlZCIsImNoaWxkcmVuIiwiaWRMaXN0Rm9yU2VsZWN0ZWQiLCJub2RlcyIsImdldENoZWNrZWROb2RlcyIsInB1c2giLCJQcm9tcHQiLCJhbGVydCIsInNlbGYiLCJsaXN0ZW4iLCJHIiwianNvbkVuY29kZSIsImFsbG9jYXRlIiwicm91dGVfaWRfbGlzdCIsImJ0biIsImNhbGxiYWNrIiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlO0FBQ1hBLE1BQUksRUFBRSxNQURLO0FBRVhDLE1BRlcsa0JBRUg7QUFDSixXQUFPO0FBQ0g7QUFDQUMsWUFBTSxFQUFFLElBRkw7QUFHSEQsVUFBSSxFQUFFLEVBSEg7QUFJSDtBQUNBRSxVQUFJLEVBQUUsRUFMSDtBQU1IO0FBQ0FDLFlBQU0sRUFBRSxFQVBMO0FBUUhDLFlBQU0sRUFBRSxFQVJMO0FBU0hDLFNBQUcsRUFBRTtBQUNEQyxZQUFJLEVBQUU7QUFETCxPQVRGO0FBWUhDLGFBQU8sRUFBRTtBQUNMQyxjQUFNLEVBQUU7QUFESDtBQVpOLEtBQVA7QUFnQkgsR0FuQlU7QUFxQlhDLFNBckJXLHFCQXFCQTtBQUNQLFNBQUtDLE9BQUw7QUFDQSxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsT0FBTDtBQUNILEdBekJVO0FBMkJYQyxTQUFPLEVBQUU7QUFDTEgsV0FESyxxQkFDTSxDQUVWLENBSEk7QUFLTEMsV0FMSyxxQkFLTTtBQUNQLFdBQUtOLEdBQUwsQ0FBU1MsT0FBVCxHQUFtQixLQUFLQyxLQUFMLENBQVdELE9BQVgsQ0FBbUJULEdBQW5CLENBQXVCUyxPQUExQztBQUNBLFdBQUtULEdBQUwsQ0FBU0MsSUFBVCxHQUFnQixLQUFLUyxLQUFMLENBQVdULElBQTNCO0FBQ0gsS0FSSTtBQVVMTSxXQVZLLHFCQVVNO0FBQUE7O0FBQ1AsV0FBS1AsR0FBTCxDQUFTUyxPQUFULENBQWlCRSxJQUFqQjtBQUNBQyxTQUFHLENBQUNDLElBQUosQ0FBU2hCLElBQVQsQ0FBYyxLQUFLaUIsS0FB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anMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInByaXZcIiAsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyDlsZXlvIB85pS257ypXHJcbiAgICAgICAgICAgIGV4cGFuZDogdHJ1ZSAsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdICxcclxuICAgICAgICAgICAgLy8g5b2T5YmN6KeS6Imy5p2D6ZmQXHJcbiAgICAgICAgICAgIHByaXY6IFtdICxcclxuICAgICAgICAgICAgLy8g6Lev55Sx5YiX6KGoXHJcbiAgICAgICAgICAgIHJvdXRlczogW10gLFxyXG4gICAgICAgICAgICBpZExpc3Q6IFtdICxcclxuICAgICAgICAgICAgaW5zOiB7XHJcbiAgICAgICAgICAgICAgICB0cmVlOiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdDogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICB0aGlzLmluaXREb20oKTtcclxuICAgICAgICB0aGlzLmluaXRJbnMoKTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH0gLFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0RG9tICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRJbnMgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nID0gdGhpcy4kcmVmcy5sb2FkaW5nLmlucy5sb2FkaW5nO1xyXG4gICAgICAgICAgICB0aGlzLmlucy50cmVlID0gdGhpcy4kcmVmcy50cmVlO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBnZXREYXRhICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIEFwaS5yb2xlLnByaXYodGhpcy5wYXJhbS5pZCAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpdiA9IHJlcy5wcml2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGUocmVzLnJvdXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVzID0gcmVzLnJvdXRlO1xyXG4gICAgICAgICAgICB9ICwgbnVsbCAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGhhbmRsZSAoZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXIgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgY3VyLnRpdGxlID0gY3VyLmNuO1xyXG4gICAgICAgICAgICAgICAgY3VyLmNoZWNrZWQgPSB0aGlzLmlzU2VsZWN0ZWQoY3VyLmlkKTtcclxuICAgICAgICAgICAgICAgIGN1ci5leHBhbmQgPSB0aGlzLmV4cGFuZDtcclxuICAgICAgICAgICAgICAgIGlmIChjdXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlKGN1ci5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5piv5ZCm6YCJ5LitXHJcbiAgICAgICAgaXNTZWxlY3RlZCAoaWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByaXYubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXIgPSB0aGlzLnByaXZbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gY3VyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5bpgInkuK3poblcclxuICAgICAgICBpZExpc3RGb3JTZWxlY3RlZCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlcyA9IHRoaXMuaW5zLnRyZWUuZ2V0Q2hlY2tlZE5vZGVzKCk7XHJcbiAgICAgICAgICAgIGxldCBpZExpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1ciA9IG5vZGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWRMaXN0LnB1c2goY3VyLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaWRMaXN0O1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICBQcm9tcHQuYWxlcnQoJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmcuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcubGlzdGVuKCdjbG9zZScgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgaWRMaXN0ID0gdGhpcy5pZExpc3RGb3JTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICAgICAgaWRMaXN0ID0gRy5qc29uRW5jb2RlKGlkTGlzdCk7XHJcbiAgICAgICAgICAgIEFwaS5yb2xlLmFsbG9jYXRlKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnBhcmFtLmlkICxcclxuICAgICAgICAgICAgICAgIHJvdXRlX2lkX2xpc3Q6IGlkTGlzdFxyXG4gICAgICAgICAgICB9ICwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgUHJvbXB0LmFsZXJ0KCfmk43kvZzmiJDlip8nICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6KeS6Imy5YiX6KGoJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbignL3JvbGUvbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn57un57ut5YiG6YWNJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdICxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ICwgbnVsbCAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5saXN0ZW4oJ2Nsb3NlJyAsIG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH0gLFxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1jb21wb25lbnRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibmF2aWdhdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvc2l0aW9uOiBfdm0ucG9zaXRpb24gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYy1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC10YlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpLXRyZWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0cmVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5yb3V0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctY2hlY2tib3hcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVjay1zdHJpY3RseVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVjay1kaXJlY3RseVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbX3ZtLl92KFwi5p2D6ZmQ5YiX6KGoXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tc3VibWl0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIuaPkOS6pFwiKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTQ5MTQ2YWIyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD00OTE0NmFiMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDkxNDZhYjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDkxNDZhYjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHJpdi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD00OTE0NmFiMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3ByaXYuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9NDkxNDZhYjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuL3ByaXYuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4vcHJpdi5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcHJpdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDkxNDZhYjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvcHJpdi5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vanMvcHJpdi5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDkxNDZhYjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4uL3B1YmxpYy9jc3MvbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD00OTE0NmFiMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMiBmcm9tIFwiLi9jc3MvcHJpdi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD00OTE0NmFiMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDkxNDZhYjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3ZWJcXFxcZnJvbnRcXFxccnRjX2FkbWluXFxcXHB1YmxpY1xcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0OTE0NmFiMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0OTE0NmFiMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0OTE0NmFiMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJpdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDkxNDZhYjImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDkxNDZhYjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvY29tcG9uZW50L3JvbGUvcHJpdi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJpdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDkxNDZhYjImc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9