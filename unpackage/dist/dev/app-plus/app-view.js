/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);
// @ts-nocheck

function initView() {
  function injectStyles(context) {
    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 36);
    if (style0.__inject__) style0.__inject__(context);
  }
  typeof injectStyles === 'function' && injectStyles();
  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!**************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages.json?{"type":"view"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
window.__uniConfig = {
  "window": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "AIDEPIN",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "darkmode": false
};
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);
});
__definePage('pages/phone/phone', function () {
  return Vue.extend(__webpack_require__(/*! pages/phone/phone.vue?mpType=page */ 22).default);
});
__definePage('pages/webview/webview', function () {
  return Vue.extend(__webpack_require__(/*! pages/webview/webview.vue?mpType=page */ 31).default);
});

/***/ }),
/* 2 */
/*!*********************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/index/index.vue?mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_2be84a3c_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2be84a3c&lang=scss&scoped=true&mpType=page */ 13);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2be84a3c",
  null,
  false,
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!***************************************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = { kTyper: __webpack_require__(/*! @/components/k-typer/k-typer.vue */ 5).default }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c("v-uni-image", {
                staticClass: _vm._$g(3, "sc"),
                attrs: { src: _vm._$g(3, "a-src"), mode: "heightFix", _i: 3 },
              }),
              _c(
                "uni-view",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(5, "sc"),
                      class: _vm._$g(5, "c"),
                      attrs: { _i: 5 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("Home")]
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(6, "sc"),
                      class: _vm._$g(6, "c"),
                      attrs: { _i: 6 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("Solution")]
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(7, "sc"),
                      class: _vm._$g(7, "c"),
                      attrs: { _i: 7 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("Product")]
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(8, "sc"),
                      class: _vm._$g(8, "c"),
                      attrs: { _i: 8 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("Introduction")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                    [_vm._v("Whitepaper")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                    [_vm._v("News Release")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                    [_vm._v("X")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
            [
              _vm._$g(14, "i")
                ? [
                    _c(
                      "uni-view",
                      { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                      [
                        _c(
                          "uni-view",
                          { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                          [
                            _c("k-typer", {
                              ref: "titleType",
                              attrs: { _i: 17 },
                              on: {
                                finish: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        _c(
                          "uni-view",
                          {
                            staticClass: _vm._$g(18, "sc"),
                            staticStyle: { display: "flex" },
                            attrs: { _i: 18 },
                          },
                          [
                            _c("k-typer", {
                              ref: "titleType1",
                              attrs: { _i: 19 },
                              on: {
                                finish: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            }),
                            _c("k-typer", {
                              ref: "titleType2",
                              staticStyle: { "margin-left": "10px" },
                              attrs: { _i: 20 },
                              on: {
                                finish: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        _c(
                          "uni-view",
                          { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                          [
                            _c("k-typer", {
                              ref: "titleType3",
                              attrs: { _i: 22 },
                              on: {
                                finish: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                : _vm._e(),
              _c(
                "uni-view",
                { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                [
                  _vm._v(
                    "AIDePIN integrates AI with decentralized infrastructure, enhancing data efficiency and\n\t\t\t\tsecurity cost-effectively. With tokenized incentives, it promotes infrastructure involvement and,\n\t\t\t\tlike Airbnb and Uber, seeks to revolutionize infrastructure using blockchain."
                  ),
                ]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                [_vm._v("Get Started")]
              ),
            ],
            2
          ),
          _c("v-uni-image", {
            staticClass: _vm._$g(25, "sc"),
            class: _vm._$g(25, "c"),
            attrs: { src: _vm._$g(25, "a-src"), mode: "widthFix", _i: 25 },
          }),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
            [_vm._v("We’ve Got You Covered")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
            [
              _vm._v(
                "Build the network that works for you. AIDePIN can be deployed anywhere coverage doesn't exist—from home\n\t\t\toffices to remote and rural locations."
              ),
            ]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(30, "sc"),
                  class: _vm._$g(30, "c"),
                  attrs: { _i: 30 },
                },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(31, "sc"),
                    attrs: {
                      src: _vm._$g(31, "a-src"),
                      mode: "widthFix",
                      _i: 31,
                    },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                    [_vm._v("For Individuals")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                    [
                      _vm._v(
                        "Build the network that works for you. AIDePIN can be deployed anywhere coverage doesn't\n\t\t\t\t\texist—from home offices to remote and rural locations."
                      ),
                    ]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
                    [
                      _vm._v("Learn More"),
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(35, "a-src"), _i: 35 },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(36, "sc"),
                  class: _vm._$g(36, "c"),
                  attrs: { _i: 36 },
                },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(37, "sc"),
                    attrs: {
                      src: _vm._$g(37, "a-src"),
                      mode: "widthFix",
                      _i: 37,
                    },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                    [_vm._v("For Business")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                    [
                      _vm._v(
                        "Sell from anywhere and deliver a great customer experience,and power your POS and other systems\n\t\t\t\t\tto improve operations and grow your bottom line."
                      ),
                    ]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                    [
                      _vm._v("Learn More"),
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(41, "a-src"), _i: 41 },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(42, "sc"),
                  class: _vm._$g(42, "c"),
                  attrs: { _i: 42 },
                },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(43, "sc"),
                    attrs: {
                      src: _vm._$g(43, "a-src"),
                      mode: "widthFix",
                      _i: 43,
                    },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                    [_vm._v("For Industry")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                    [
                      _vm._v(
                        "AIDePIN offers robust, secure wireless infrastructure for autonomous vehicles, networked\n\t\t\t\t\tsystems, and vital operations in remote global locations."
                      ),
                    ]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
                    [
                      _vm._v("Learn More"),
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(47, "a-src"), _i: 47 },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(49, "sc"), attrs: { _i: 49 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(51, "sc"), attrs: { _i: 51 } },
                    [_vm._v("Build the Future of Wireless")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(52, "sc"), attrs: { _i: 52 } },
                    [
                      _vm._v(
                        "By deploying a AIDePIN Hotspot in your home, office, or elsewhere in the wild, you can provide\n\t\t\t\t\tyour town with wireless network coverage for low power “internet of things” or cellular devices\n\t\t\t\t\tand earn AIDePIN tokens."
                      ),
                    ]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(53, "sc"), attrs: { _i: 53 } },
                    [_vm._v("Start mining")]
                  ),
                ],
                1
              ),
              _c("v-uni-image", {
                staticClass: _vm._$g(54, "sc"),
                class: _vm._$g(54, "c"),
                attrs: { src: _vm._$g(54, "a-src"), mode: "widthFix", _i: 54 },
              }),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(56, "sc"),
                  class: _vm._$g(56, "c"),
                  attrs: { _i: 56 },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(57, "sc"), attrs: { _i: 57 } },
                    [_vm._v("Cost & Scalability")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(58, "sc"), attrs: { _i: 58 } },
                    [
                      _vm._v(
                        "DePIN cuts costs via crowdsourcing and enjoys scale economies but has risks like token\n\t\t\t\t\tfluctuations and system failures. Best for regular, low-demand tasks."
                      ),
                    ]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(59, "sc"),
                  class: _vm._$g(59, "c"),
                  attrs: { _i: 59 },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(60, "sc"), attrs: { _i: 60 } },
                    [_vm._v("Resource Use")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(61, "sc"), attrs: { _i: 61 } },
                    [
                      _vm._v(
                        "DePIN utilizes idle resources, offering value and income but may pose credit and privacy risks."
                      ),
                    ]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(62, "sc"),
                  class: _vm._$g(62, "c"),
                  attrs: { _i: 62 },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(63, "sc"), attrs: { _i: 63 } },
                    [_vm._v("Performance")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(64, "sc"), attrs: { _i: 64 } },
                    [
                      _vm._v(
                        "DePIN could surpass centralized systems short-term, especially in blockchain, with its dense\n\t\t\t\t\tnetwork. Its potential remains largely theoretical but promising."
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(65, "sc"), attrs: { _i: 65 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(66, "sc"), attrs: { _i: 66 } },
            [_vm._v("Use.")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(67, "sc"), attrs: { _i: 67 } },
            [_vm._v("MASSIVE, DECENTRALIZED, CONNECTIVITY")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(68, "sc"), attrs: { _i: 68 } },
            [
              _vm._v(
                "AIDePIN focuses on creating an AI-powered Decentralized Physical Infrastructure Network\n\t\t\t(DePIN) to boost efficiency and reduce costs."
              ),
            ]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(69, "sc"), attrs: { _i: 69 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(70, "sc"),
                  class: _vm._$g(70, "c"),
                  attrs: { _i: 70 },
                },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(71, "sc"),
                    attrs: { src: _vm._$g(71, "a-src"), _i: 71 },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(72, "sc"), attrs: { _i: 72 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(73, "sc"), attrs: { _i: 73 } },
                        [_vm._v("Authenticity in Decentralization")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(74, "sc"), attrs: { _i: 74 } },
                        [
                          _vm._v(
                            "AIDePIN uses AI to verify network members' behaviors and identities, protecting against\n\t\t\t\t\t\tthreats like spam and identity theft."
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(75, "sc"),
                  class: _vm._$g(75, "c"),
                  attrs: { _i: 75 },
                },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(76, "sc"),
                    attrs: { src: _vm._$g(76, "a-src"), _i: 76 },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(77, "sc"), attrs: { _i: 77 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(78, "sc"), attrs: { _i: 78 } },
                        [_vm._v("AI Transparency")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(79, "sc"), attrs: { _i: 79 } },
                        [
                          _vm._v(
                            "AIDePIN ensures AI processes are transparent and inclusive. Every AI decision is clear and\n\t\t\t\t\t\topen for review, promoting trust."
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(80, "sc"),
                  class: _vm._$g(80, "c"),
                  attrs: { _i: 80 },
                },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(81, "sc"),
                    attrs: { src: _vm._$g(81, "a-src"), _i: 81 },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(82, "sc"), attrs: { _i: 82 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(83, "sc"), attrs: { _i: 83 } },
                        [_vm._v("Cost Efficiency")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(84, "sc"), attrs: { _i: 84 } },
                        [
                          _vm._v(
                            "AIDePIN uses AI for efficient network and task management, improving resource allocation and\n\t\t\t\t\t\tcutting infrastructure expenses. Its predictive maintenance prevents costly hardware\n\t\t\t\t\t\trepairs."
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(85, "sc"),
                  class: _vm._$g(85, "c"),
                  attrs: { _i: 85 },
                },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(86, "sc"),
                    attrs: { src: _vm._$g(86, "a-src"), _i: 86 },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(87, "sc"), attrs: { _i: 87 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(88, "sc"), attrs: { _i: 88 } },
                        [_vm._v("Data Sharing Incentives")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(89, "sc"), attrs: { _i: 89 } },
                        [
                          _vm._v(
                            "A token-based system in AIDePIN rewards data contributors, enhancing AI training and system\n\t\t\t\t\t\tefficiency. This motivates active user participation and data sharing, nurturing system\n\t\t\t\t\t\tgrowth."
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(90, "sc"), attrs: { _i: 90 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(91, "sc"), attrs: { _i: 91 } },
            [_vm._v("Helium is used by")]
          ),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(92, "sc"),
              class: _vm._$g(92, "c"),
              attrs: { _i: 92 },
            },
            _vm._l(9, function (item, index, $20, $30) {
              return _c("v-uni-image", {
                key: index,
                attrs: { src: _vm._$g("93-" + $30, "a-src"), _i: "93-" + $30 },
              })
            }),
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(94, "sc"), attrs: { _i: 94 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(95, "sc"), attrs: { _i: 95 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(96, "sc"), attrs: { _i: 96 } },
                [_vm._v("Get Updates to your Inbox")]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(97, "sc"), attrs: { _i: 97 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(98, "sc"), attrs: { _i: 98 } },
                    [_vm._v("e.g: hello@AIDePIN.com")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(99, "sc"), attrs: { _i: 99 } },
                    [_vm._v("Join Mailling List")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(100, "sc"), attrs: { _i: 100 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(101, "sc"), attrs: { _i: 101 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(102, "sc"), attrs: { _i: 102 } },
                    [_vm._v("LEARN")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 103 } }, [_vm._v("Home")]),
                  _c("v-uni-text", { attrs: { _i: 104 } }, [
                    _vm._v("Ecosystem"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 105 } }, [
                    _vm._v("Solutions"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 106 } }, [_vm._v("Brand")]),
                  _c("v-uni-text", { attrs: { _i: 107 } }, [
                    _vm._v("Guidelines"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 108 } }, [_vm._v("Blog")]),
                  _c("v-uni-text", { attrs: { _i: 109 } }, [
                    _vm._v("Whitepaper"),
                  ]),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(110, "sc"), attrs: { _i: 110 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(111, "sc"), attrs: { _i: 111 } },
                    [_vm._v("GET INVOLVED")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 112 } }, [_vm._v("Mine")]),
                  _c("v-uni-text", { attrs: { _i: 113 } }, [_vm._v("Use")]),
                  _c("v-uni-text", { attrs: { _i: 114 } }, [_vm._v("Roam")]),
                  _c("v-uni-text", { attrs: { _i: 115 } }, [
                    _vm._v("Developers"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 116 } }, [_vm._v("AIDePIN")]),
                  _c("v-uni-text", { attrs: { _i: 117 } }, [_vm._v("House")]),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(118, "sc"), attrs: { _i: 118 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(119, "sc"), attrs: { _i: 119 } },
                    [_vm._v("SOCIAL")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 120 } }, [_vm._v("Discord")]),
                  _c("v-uni-text", { attrs: { _i: 121 } }, [_vm._v("Twitter")]),
                  _c("v-uni-text", { attrs: { _i: 122 } }, [
                    _vm._v("Facebook"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 123 } }, [
                    _vm._v("LinkedIn"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 124 } }, [_vm._v("Github")]),
                  _c("v-uni-text", { attrs: { _i: 125 } }, [_vm._v("YouTube")]),
                  _c("v-uni-text", { attrs: { _i: 126 } }, [_vm._v("Reddit")]),
                  _c("v-uni-text", { attrs: { _i: 127 } }, [
                    _vm._v("Instagram"),
                  ]),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(128, "sc"), attrs: { _i: 128 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(129, "sc"), attrs: { _i: 129 } },
                    [_vm._v("GET IN TOUCH")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 130 } }, [
                    _vm._v("Hello@AIDePIN.com"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 131 } }, [
                    _vm._v("Press@AIDePIN.com"),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(132, "sc"), attrs: { _i: 132 } },
            [_vm._v("Copyright © 2023 AIDePIN Inc | All Rights Reserved")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!******************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/components/k-typer/k-typer.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./k-typer.vue?vue&type=template&id=a403959c&scoped=true& */ 6);
/* harmony import */ var _k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./k-typer.vue?vue&type=script&lang=js& */ 8);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a403959c",
  null,
  false,
  _k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/k-typer/k-typer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!*************************************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/components/k-typer/k-typer.vue?vue&type=template&id=a403959c&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./k-typer.vue?vue&type=template&id=a403959c&scoped=true& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_template_id_a403959c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/components/k-typer/k-typer.vue?vue&type=template&id=a403959c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { attrs: { _i: 0 } },
    [
      _vm._l(_vm._$g(1, "f"), function (item, index, $20, $30) {
        return _vm._$g("1-" + $30, "i")
          ? [
              _c(
                "v-uni-text",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$g("2-" + $30, "v-show"),
                      expression: "_$g((\"2-\"+$30),'v-show')",
                    },
                  ],
                  key: item["k0"],
                  style: _vm._$g("2-" + $30, "s"),
                  attrs: { _i: "2-" + $30 },
                },
                [_vm._v(_vm._$g("2-" + $30, "t0-0"))]
              ),
            ]
          : _vm._e()
      }),
      _vm._$g(3, "i")
        ? [
            _c("v-uni-text", { style: _vm._$g(4, "s"), attrs: { _i: 4 } }, [
              _vm._v(_vm._$g(4, "t0-0")),
            ]),
          ]
        : _vm._e(),
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*******************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/components/k-typer/k-typer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./k-typer.vue?vue&type=script&lang=js& */ 9);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_k_typer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/components/k-typer/k-typer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: "k-typer",
  props: ["content", "isDye", "dyeText", "dyeTextStyle", "color", "activeColor", "speed", "startIndex"],
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!*********************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 13 */
/*!******************************************************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/index/index.vue?vue&type=style&index=0&id=2be84a3c&lang=scss&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&id=2be84a3c&lang=scss&scoped=true&mpType=page */ 14);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/index/index.vue?vue&type=style&index=0&id=2be84a3c&lang=scss&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&id=2be84a3c&lang=scss&scoped=true&mpType=page */ 15);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 20).default
var update = add("4dfd71b6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 15 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/index/index.vue?vue&type=style&index=0&id=2be84a3c&lang=scss&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 16);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js */ 17);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/static/page/bannerBag.png */ 18);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/static/partner/bag.png */ 19);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\nbody *[data-v-2be84a3c],\r\nbody uni-view[data-v-2be84a3c] {\r\n\tbox-sizing: border-box;\r\n\tflex-shrink: 0;\n}\nbody[data-v-2be84a3c] {\r\n\tfont-family: DoHyeon-Regular, Gilroy-Regular, Gilroy-Bold, RobotInvaders;\r\n\tmargin: 0;\n}\nuni-button[data-v-2be84a3c] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 1px solid transparent;\r\n\toutline: none;\r\n\tbackground-color: transparent;\n}\nuni-button[data-v-2be84a3c]:active {\r\n\topacity: 0.6;\n}\n.pointer[data-v-2be84a3c] {\r\n\tcursor: pointer;\n}\n.flex-col[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\n}\n.flex-row[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\n}\n.justify-start[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\n}\n.justify-center[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\n}\n.justify-end[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\n}\n.justify-evenly[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\n}\n.justify-around[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\n}\n.justify-between[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\n}\n.align-start[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\n}\n.align-center[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\talign-items: center;\n}\n.align-end[data-v-2be84a3c] {\r\n\tdisplay: flex;\r\n\talign-items: flex-end;\n}\n.content .header[data-v-2be84a3c] {\r\n  width: 100%;\r\n  height: 80px;\r\n  background-color: #FFFFFF;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 99;\n}\n.content .header .nav[data-v-2be84a3c] {\r\n  width: 1200px;\n}\n.content .header .nav .logo[data-v-2be84a3c] {\r\n  height: 40px;\n}\n.content .header .nav .tab[data-v-2be84a3c] {\r\n  display: flex;\n}\n.content .header .nav .tab .item[data-v-2be84a3c] {\r\n  font-size: 14px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #777777;\r\n  line-height: 60px;\r\n  margin-left: 30px;\r\n  cursor: pointer;\n}\n.content .header .nav .tab .active[data-v-2be84a3c] {\r\n  color: #000000;\n}\n.content .banner[data-v-2be84a3c] {\r\n  width: 100%;\r\n  height: 780px;\r\n  background-color: #F7F7FA;\r\n  position: relative;\r\n  background: #F7F7FA url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n  background-size: auto 100%;\r\n  background-position: center;\n}\n.content .banner .bannerBag[data-v-2be84a3c] {\r\n  width: 100%;\r\n  position: absolute;\n}\n.content .banner .left[data-v-2be84a3c] {\r\n  width: 600px;\n}\n.content .banner .left .titbox[data-v-2be84a3c] {\r\n  min-height: 200px;\n}\n.content .banner .left .tit[data-v-2be84a3c] {\r\n  font-size: 44px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 58px;\r\n  word-break: normal;\n}\n.content .banner .left .tit .text[data-v-2be84a3c] {\r\n  color: #7031ED;\n}\n.content .banner .left .txt[data-v-2be84a3c] {\r\n  font-size: 14px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 22px;\r\n  margin: 16px 0 40px 0;\n}\n.content .banner .left .btn[data-v-2be84a3c] {\r\n  width: 170px;\r\n  height: 60px;\r\n  background-color: #000000;\r\n  border-radius: 15px;\r\n  font-size: 18px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 24px;\r\n  text-align: center;\r\n  line-height: 60px;\n}\n.content .banner .bannerImg[data-v-2be84a3c] {\r\n  width: 540px;\r\n  margin-left: 60px;\n}\n.content .Covered[data-v-2be84a3c] {\r\n  padding: 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.content .Covered .tit[data-v-2be84a3c] {\r\n  font-size: 36px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  margin-bottom: 12px;\n}\n.content .Covered .txt[data-v-2be84a3c] {\r\n  margin: auto;\r\n  width: 800px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 22px;\n}\n.content .Covered .grid[data-v-2be84a3c] {\r\n  padding-top: 80px;\r\n  width: 1200px;\r\n  margin: auto;\n}\n.content .Covered .grid .item[data-v-2be84a3c] {\r\n  width: 380px;\r\n  background: #F7F7FA;\r\n  border-radius: 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 40px 0;\n}\n.content .Covered .grid .item .icon[data-v-2be84a3c] {\r\n  width: 260px;\r\n  height: 152px;\r\n  margin-bottom: 16px;\n}\n.content .Covered .grid .item .name[data-v-2be84a3c] {\r\n  font-size: 22px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 31px;\n}\n.content .Covered .grid .item .desc[data-v-2be84a3c] {\r\n  text-align: center;\r\n  width: 320px;\r\n  min-height: 80px;\r\n  font-size: 14px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 20px;\r\n  margin-bottom: 40px;\n}\n.content .Covered .grid .item .more[data-v-2be84a3c] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #7031ED;\r\n  line-height: 22px;\n}\n.content .Covered .grid .item .more uni-image[data-v-2be84a3c] {\r\n  width: 18px;\r\n  height: 18px;\r\n  margin-left: 8px;\n}\n.content .build[data-v-2be84a3c] {\r\n  padding: 100px 0;\r\n  background-color: #000000;\n}\n.content .build .top[data-v-2be84a3c] {\r\n  width: 1200px;\r\n  margin: auto;\n}\n.content .build .top .left[data-v-2be84a3c] {\r\n  width: 460px;\n}\n.content .build .top .left .tit[data-v-2be84a3c] {\r\n  font-size: 36px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 50px;\n}\n.content .build .top .left .txt[data-v-2be84a3c] {\r\n  font-size: 14px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #FFFFFF;\r\n  line-height: 22px;\r\n  margin: 12px 0 48px 0;\n}\n.content .build .top .left .btn[data-v-2be84a3c] {\r\n  width: 190px;\r\n  height: 60px;\r\n  background: #7031ED;\r\n  border-radius: 30px;\r\n  font-size: 20px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  cursor: pointer;\n}\n.content .build .top .topImg[data-v-2be84a3c] {\r\n  width: 555px;\r\n  height: 320px;\n}\n.content .build .grid[data-v-2be84a3c] {\r\n  width: 1200px;\r\n  margin: auto;\r\n  padding-top: 88px;\n}\n.content .build .grid .item[data-v-2be84a3c] {\r\n  width: 380px;\r\n  height: 170px;\r\n  background: #FFFFFF;\r\n  border-radius: 20px;\r\n  padding: 24px;\n}\n.content .build .grid .item .tit[data-v-2be84a3c] {\r\n  font-size: 22px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 31px;\r\n  margin-bottom: 8px;\n}\n.content .build .grid .item .txt[data-v-2be84a3c] {\r\n  font-size: 14px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 20px;\n}\n.content .use[data-v-2be84a3c] {\r\n  padding: 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #F7F7FA;\n}\n.content .use .tit[data-v-2be84a3c] {\r\n  font-size: 44px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 50px;\r\n  text-align: center;\n}\n.content .use .tit2[data-v-2be84a3c] {\r\n  text-align: center;\r\n  font-size: 24px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #7031ED;\r\n  line-height: 32px;\r\n  margin: 20px 0 16px 0;\n}\n.content .use .txt[data-v-2be84a3c] {\r\n  text-align: center;\r\n  width: 800px;\r\n  margin: auto;\r\n  font-size: 14px;\r\n  font-family: Gilroy-Medium, Gilroy;\r\n  font-weight: 500;\r\n  color: #777777;\r\n  line-height: 22px;\n}\n.content .use .grid[data-v-2be84a3c] {\r\n  padding-top: 100px;\r\n  width: 1200px;\r\n  margin: auto;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\n}\n.content .use .grid .item[data-v-2be84a3c] {\r\n  width: 550px;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 80px;\n}\n.content .use .grid .item .icon[data-v-2be84a3c] {\r\n  width: 120px;\r\n  height: 120px;\r\n  margin-right: 24px;\n}\n.content .use .grid .item .name[data-v-2be84a3c] {\r\n  margin-bottom: 12px;\r\n  font-size: 22px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 31px;\n}\n.content .use .grid .item .desc[data-v-2be84a3c] {\r\n  width: 400px;\r\n  font-size: 14px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 20px;\n}\n.content .Helium[data-v-2be84a3c] {\r\n  padding: 80px 0 50px 0;\r\n  background: #7031ED url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n  background-size: 100% auto;\n}\n.content .Helium .tit[data-v-2be84a3c] {\r\n  font-size: 36px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  margin-bottom: 60px;\n}\n.content .Helium .grid[data-v-2be84a3c] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  width: 1100px;\r\n  margin: auto;\n}\n.content .Helium .grid uni-image[data-v-2be84a3c] {\r\n  width: 197px;\r\n  height: 60px;\r\n  margin: 0 5px 40px 5px;\n}\n.content .footer[data-v-2be84a3c] {\r\n  background-color: #000000;\r\n  padding: 20px 0;\n}\n.content .footer .top[data-v-2be84a3c] {\r\n  padding: 50px 0;\r\n  width: 1200px;\r\n  margin: auto;\r\n  justify-content: space-between;\n}\n.content .footer .top .tit[data-v-2be84a3c] {\r\n  font-size: 36px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 50px;\n}\n.content .footer .top .right[data-v-2be84a3c] {\r\n  display: flex;\n}\n.content .footer .top .right .input[data-v-2be84a3c] {\r\n  width: 310px;\r\n  height: 60px;\r\n  background: #1A1A1A;\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #979797;\r\n  line-height: 24px;\r\n  padding: 18px;\r\n  margin-right: 16px;\n}\n.content .footer .top .right .btn[data-v-2be84a3c] {\r\n  width: 180px;\r\n  height: 60px;\r\n  background: #7031ED;\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  cursor: pointer;\n}\n.content .footer .list[data-v-2be84a3c] {\r\n  width: 1200px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  border-top: 1px solid #191919;\r\n  border-bottom: 1px solid #191919;\r\n  padding: 50px 0;\n}\n.content .footer .list .item[data-v-2be84a3c] {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.content .footer .list .item uni-text[data-v-2be84a3c] {\r\n  font-size: 16px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #909090;\r\n  line-height: 24px;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\n}\n.content .footer .list .item uni-text[data-v-2be84a3c]:hover {\r\n  color: #FFFFFF;\n}\n.content .footer .list .item .tit[data-v-2be84a3c] {\r\n  font-size: 16px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 24px;\r\n  margin-bottom: 20px;\n}\n.content .footer .bottom[data-v-2be84a3c] {\r\n  width: 1200px;\r\n  margin: 30px auto;\r\n  font-size: 16px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #FFFFFF;\r\n  line-height: 22px;\n}\n.content .walletbox[data-v-2be84a3c] {\r\n  background-color: #FFFFFF;\r\n  padding: 30px;\r\n  width: 410px;\r\n  border-radius: 24px;\n}\n.content .walletbox .title[data-v-2be84a3c] {\r\n  margin-bottom: 20px;\n}\n.content .walletbox .title uni-view[data-v-2be84a3c] {\r\n  font-size: 24px;\r\n  color: #000000;\r\n  font-weight: bold;\r\n  font-family: Gilroy-Bold;\n}\n.content .walletbox .title uni-image[data-v-2be84a3c] {\r\n  width: 30px;\r\n  height: 30px;\n}\n.content .walletbox .item[data-v-2be84a3c] {\r\n  border-radius: 10px;\r\n  height: 60px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #DEDEDE;\r\n  font-size: 16px;\r\n  color: #1E2329;\r\n  font-weight: bold;\r\n  font-family: Gilroy-Bold;\n}\n.content .walletbox .item uni-image[data-v-2be84a3c] {\r\n  width: 32px;\r\n  height: 32px;\r\n  margin: 0 18px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 16 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 17 */
/*!**************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {}
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = url && url.__esModule ? url.default : url

  if (typeof url !== 'string') {
    if (url.protocol && url.protocol === 'file:' && url.pathname) {
      url = url.pathname
    } else {
      return url
    }
  } // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1)
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls

  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
  }
  if (url.indexOf('/') === 0) {
    return url.substr(1)
  }
  return url
}


/***/ }),
/* 18 */
/*!*************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/static/page/bannerBag.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/page/bannerBag.png";

/***/ }),
/* 19 */
/*!**********************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/static/partner/bag.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/partner/bag.png";

/***/ }),
/* 20 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 21);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}|@media.+?\{/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 21 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 22 */
/*!*********************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/phone/phone.vue?mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.vue?vue&type=template&id=67b61e74&scoped=true&mpType=page */ 23);
/* harmony import */ var _phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.vue?vue&type=script&lang=js&mpType=page */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _phone_vue_vue_type_style_index_0_id_67b61e74_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone.vue?vue&type=style&index=0&id=67b61e74&lang=scss&scoped=true&mpType=page */ 27);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67b61e74",
  null,
  false,
  _phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/phone/phone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/*!***************************************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/phone/phone.vue?vue&type=template&id=67b61e74&scoped=true&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./phone.vue?vue&type=template&id=67b61e74&scoped=true&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_template_id_67b61e74_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/phone/phone.vue?vue&type=template&id=67b61e74&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = { kTyper: __webpack_require__(/*! @/components/k-typer/k-typer.vue */ 5).default }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("v-uni-image", {
            staticClass: _vm._$g(2, "sc"),
            attrs: { src: _vm._$g(2, "a-src"), mode: "heightFix", _i: 2 },
          }),
          _c("v-uni-image", {
            staticClass: _vm._$g(3, "sc"),
            attrs: { src: _vm._$g(3, "a-src"), _i: 3 },
            on: {
              click: function ($event) {
                return _vm.$handleViewEvent($event)
              },
            },
          }),
          _c(
            "uni-view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm._$g(4, "v-show"),
                  expression: "_$g(4,'v-show')",
                },
              ],
              staticClass: _vm._$g(4, "sc"),
              attrs: { _i: 4 },
            },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(5, "sc"),
                  attrs: { _i: 5 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { class: _vm._$g(6, "c"), attrs: { _i: 6 } },
                    [_vm._v("Home")]
                  ),
                  _vm._$g(7, "i")
                    ? _c("v-uni-image", {
                        attrs: { src: _vm._$g(7, "a-src"), _i: 7 },
                      })
                    : _vm._e(),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(8, "sc"),
                  attrs: { _i: 8 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { class: _vm._$g(9, "c"), attrs: { _i: 9 } },
                    [_vm._v("Solution")]
                  ),
                  _vm._$g(10, "i")
                    ? _c("v-uni-image", {
                        attrs: { src: _vm._$g(10, "a-src"), _i: 10 },
                      })
                    : _vm._e(),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(11, "sc"),
                  attrs: { _i: 11 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { class: _vm._$g(12, "c"), attrs: { _i: 12 } },
                    [_vm._v("Product")]
                  ),
                  _vm._$g(13, "i")
                    ? _c("v-uni-image", {
                        attrs: { src: _vm._$g(13, "a-src"), _i: 13 },
                      })
                    : _vm._e(),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(14, "sc"),
                  attrs: { _i: 14 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { class: _vm._$g(15, "c"), attrs: { _i: 15 } },
                    [_vm._v("Introduction")]
                  ),
                  _vm._$g(16, "i")
                    ? _c("v-uni-image", {
                        attrs: { src: _vm._$g(16, "a-src"), _i: 16 },
                      })
                    : _vm._e(),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(17, "sc"),
                  attrs: { _i: 17 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c("v-uni-text", { attrs: { _i: 18 } }, [
                    _vm._v("Whitepaper"),
                  ]),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(19, "sc"),
                  attrs: { _i: 19 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { class: _vm._$g(20, "c"), attrs: { _i: 20 } },
                    [_vm._v("News Release")]
                  ),
                  _vm._$g(21, "i")
                    ? _c("v-uni-image", {
                        attrs: { src: _vm._$g(21, "a-src"), _i: 21 },
                      })
                    : _vm._e(),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(22, "sc"),
                  attrs: { _i: 22 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { class: _vm._$g(23, "c"), attrs: { _i: 23 } },
                    [_vm._v("X")]
                  ),
                  _vm._$g(24, "i")
                    ? _c("v-uni-image", {
                        attrs: { src: _vm._$g(24, "a-src"), _i: 24 },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
            [
              _vm._$g(27, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                    [
                      _c("k-typer", {
                        ref: "titleType",
                        attrs: { _i: 28 },
                        on: {
                          finish: function ($event) {
                            return _vm.$handleViewEvent($event)
                          },
                        },
                      }),
                      _c(
                        "uni-view",
                        { staticStyle: { display: "flex" }, attrs: { _i: 29 } },
                        [
                          _c("k-typer", {
                            ref: "titleType1",
                            attrs: { _i: 30 },
                            on: {
                              finish: function ($event) {
                                return _vm.$handleViewEvent($event)
                              },
                            },
                          }),
                          _c("k-typer", {
                            ref: "titleType2",
                            staticStyle: { margin: "0 10rpx" },
                            attrs: { _i: 31 },
                            on: {
                              finish: function ($event) {
                                return _vm.$handleViewEvent($event)
                              },
                            },
                          }),
                          _c("k-typer", {
                            ref: "titleType3",
                            attrs: { _i: 32 },
                            on: {
                              finish: function ($event) {
                                return _vm.$handleViewEvent($event)
                              },
                            },
                          }),
                        ],
                        1
                      ),
                      _c("k-typer", {
                        ref: "titleType4",
                        attrs: { _i: 33 },
                        on: {
                          finish: function ($event) {
                            return _vm.$handleViewEvent($event)
                          },
                        },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
            [
              _vm._v(
                "AIDePIN integrates AI with decentralized infrastructure, enhancing data efficiency and security\n\t\t\tcost-effectively. With tokenized incentives, it promotes infrastructure involvement and, like Airbnb\n\t\t\tand Uber, seeks to revolutionize infrastructure using blockchain."
              ),
            ]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
            [_vm._v("Get Started")]
          ),
          _c("v-uni-image", {
            staticClass: _vm._$g(36, "sc"),
            attrs: { src: _vm._$g(36, "a-src"), mode: "widthFix", _i: 36 },
          }),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
            [_vm._v("We’ve Got You Covered")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
            [
              _vm._v(
                "Build the network that works for you. AIDePIN can be deployed anywhere coverage doesn't\n\t\t\texist—from home offices to remote and rural locations."
              ),
            ]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
            [
              _c(
                "v-uni-swiper",
                {
                  staticClass: _vm._$g(41, "sc"),
                  attrs: { "next-margin": "180rpx", circular: true, _i: 41 },
                },
                [
                  _c(
                    "v-uni-swiper-item",
                    { attrs: { _i: 42 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                        [
                          _c("v-uni-image", {
                            staticClass: _vm._$g(44, "sc"),
                            attrs: {
                              src: _vm._$g(44, "a-src"),
                              mode: "widthFix",
                              _i: 44,
                            },
                          }),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(45, "sc"),
                              attrs: { _i: 45 },
                            },
                            [_vm._v("For Individuals")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(46, "sc"),
                              attrs: { _i: 46 },
                            },
                            [
                              _vm._v(
                                "Build the network that works for you. AIDePIN can be deployed anywhere coverage doesn't\n\t\t\t\t\t\t\texist—from home offices to remote and rural locations."
                              ),
                            ]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(47, "sc"),
                              attrs: { _i: 47 },
                            },
                            [
                              _vm._v("Learn More"),
                              _c("v-uni-image", {
                                attrs: { src: _vm._$g(48, "a-src"), _i: 48 },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-swiper-item",
                    { attrs: { _i: 49 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                        [
                          _c("v-uni-image", {
                            staticClass: _vm._$g(51, "sc"),
                            attrs: {
                              src: _vm._$g(51, "a-src"),
                              mode: "widthFix",
                              _i: 51,
                            },
                          }),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(52, "sc"),
                              attrs: { _i: 52 },
                            },
                            [_vm._v("For Business")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(53, "sc"),
                              attrs: { _i: 53 },
                            },
                            [
                              _vm._v(
                                "Sell from anywhere and deliver a great customer experience,and power your POS and other\n\t\t\t\t\t\t\tsystems\n\t\t\t\t\t\t\tto improve operations and grow your bottom line."
                              ),
                            ]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(54, "sc"),
                              attrs: { _i: 54 },
                            },
                            [
                              _vm._v("Learn More"),
                              _c("v-uni-image", {
                                attrs: { src: _vm._$g(55, "a-src"), _i: 55 },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-swiper-item",
                    { attrs: { _i: 56 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(57, "sc"), attrs: { _i: 57 } },
                        [
                          _c("v-uni-image", {
                            staticClass: _vm._$g(58, "sc"),
                            attrs: {
                              src: _vm._$g(58, "a-src"),
                              mode: "widthFix",
                              _i: 58,
                            },
                          }),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(59, "sc"),
                              attrs: { _i: 59 },
                            },
                            [_vm._v("For Industry")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(60, "sc"),
                              attrs: { _i: 60 },
                            },
                            [
                              _vm._v(
                                "AIDePIN offers robust, secure wireless infrastructure for autonomous vehicles, networked\n\t\t\t\t\t\t\tsystems, and vital operations in remote global locations."
                              ),
                            ]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(61, "sc"),
                              attrs: { _i: 61 },
                            },
                            [
                              _vm._v("Learn More"),
                              _c("v-uni-image", {
                                attrs: { src: _vm._$g(62, "a-src"), _i: 62 },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(63, "sc"), attrs: { _i: 63 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(64, "sc"), attrs: { _i: 64 } },
            [_vm._v("Build the Future of Wireless")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(65, "sc"), attrs: { _i: 65 } },
            [
              _vm._v(
                "By deploying a AIDePIN Hotspot in your home, office, or elsewhere in the wild, you can provide your town\n\t\t\twith wireless network coverage for low power “internet of things” or cellular devices and earn AIDePIN\n\t\t\ttokens."
              ),
            ]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(66, "sc"), attrs: { _i: 66 } },
            [_vm._v("Start mining")]
          ),
          _c("v-uni-image", {
            staticClass: _vm._$g(67, "sc"),
            attrs: { src: _vm._$g(67, "a-src"), mode: "widthFix", _i: 67 },
          }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(68, "sc"), attrs: { _i: 68 } },
            [
              _c(
                "v-uni-swiper",
                {
                  staticClass: _vm._$g(69, "sc"),
                  attrs: { "next-margin": "200rpx", circular: true, _i: 69 },
                },
                [
                  _c(
                    "v-uni-swiper-item",
                    { attrs: { _i: 70 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(71, "sc"), attrs: { _i: 71 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(72, "sc"),
                              attrs: { _i: 72 },
                            },
                            [_vm._v("Cost & Scalability")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(73, "sc"),
                              attrs: { _i: 73 },
                            },
                            [
                              _vm._v(
                                "DePIN cuts costs via crowdsourcing and enjoys scale economies but has risks like token\n\t\t\t\t\t\t\tfluctuations and system failures. Best for regular, low-demand tasks."
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-swiper-item",
                    { attrs: { _i: 74 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(75, "sc"), attrs: { _i: 75 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(76, "sc"),
                              attrs: { _i: 76 },
                            },
                            [_vm._v("Resource Use")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(77, "sc"),
                              attrs: { _i: 77 },
                            },
                            [
                              _vm._v(
                                "DePIN utilizes idle resources, offering value and income but may pose credit and privacy\n\t\t\t\t\t\t\trisks."
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-swiper-item",
                    { attrs: { _i: 78 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(79, "sc"), attrs: { _i: 79 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(80, "sc"),
                              attrs: { _i: 80 },
                            },
                            [_vm._v("Performance")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(81, "sc"),
                              attrs: { _i: 81 },
                            },
                            [
                              _vm._v(
                                "DePIN could surpass centralized systems short-term, especially in blockchain, with its\n\t\t\t\t\t\t\tdense\n\t\t\t\t\t\t\tnetwork. Its potential remains largely theoretical but promising."
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(82, "sc"), attrs: { _i: 82 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(83, "sc"), attrs: { _i: 83 } },
            [_vm._v("Use.")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(84, "sc"), attrs: { _i: 84 } },
            [_vm._v("MASSIVE, DECENTRALIZED, CONNECTIVITY")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(85, "sc"), attrs: { _i: 85 } },
            [
              _vm._v(
                "AIDePIN focuses on creating an AI-powered Decentralized Physical Infrastructure Network (DePIN) to boost\n\t\t\tefficiency and reduce costs."
              ),
            ]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(86, "sc"), attrs: { _i: 86 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(87, "sc"), attrs: { _i: 87 } },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(88, "sc"),
                    attrs: { src: _vm._$g(88, "a-src"), _i: 88 },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(89, "sc"), attrs: { _i: 89 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(90, "sc"), attrs: { _i: 90 } },
                        [_vm._v("Authenticity in Decentralization")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(91, "sc"), attrs: { _i: 91 } },
                        [
                          _vm._v(
                            "AIDePIN uses AI to verify network members' behaviors and identities, protecting against\n\t\t\t\t\t\tthreats like spam and identity theft."
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(92, "sc"), attrs: { _i: 92 } },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(93, "sc"),
                    attrs: { src: _vm._$g(93, "a-src"), _i: 93 },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(94, "sc"), attrs: { _i: 94 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(95, "sc"), attrs: { _i: 95 } },
                        [_vm._v("AI Transparency")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(96, "sc"), attrs: { _i: 96 } },
                        [
                          _vm._v(
                            "AIDePIN ensures AI processes are transparent and inclusive. Every AI decision is clear and\n\t\t\t\t\t\topen for review, promoting trust."
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(97, "sc"), attrs: { _i: 97 } },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(98, "sc"),
                    attrs: { src: _vm._$g(98, "a-src"), _i: 98 },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(99, "sc"), attrs: { _i: 99 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(100, "sc"), attrs: { _i: 100 } },
                        [_vm._v("Cost Efficiency")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(101, "sc"), attrs: { _i: 101 } },
                        [
                          _vm._v(
                            "AIDePIN uses AI for efficient network and task management, improving resource allocation and\n\t\t\t\t\t\tcutting infrastructure expenses. Its predictive maintenance prevents costly hardware\n\t\t\t\t\t\trepairs."
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(102, "sc"), attrs: { _i: 102 } },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(103, "sc"),
                    attrs: { src: _vm._$g(103, "a-src"), _i: 103 },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(104, "sc"), attrs: { _i: 104 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(105, "sc"), attrs: { _i: 105 } },
                        [_vm._v("Data Sharing Incentives")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(106, "sc"), attrs: { _i: 106 } },
                        [
                          _vm._v(
                            "A token-based system in AIDePIN rewards data contributors, enhancing AI training and system\n\t\t\t\t\t\tefficiency. This motivates active user participation and data sharing, nurturing system\n\t\t\t\t\t\tgrowth."
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(107, "sc"), attrs: { _i: 107 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(108, "sc"), attrs: { _i: 108 } },
            [_vm._v("Helium is used by")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(109, "sc"), attrs: { _i: 109 } },
            _vm._l(9, function (item, index, $20, $30) {
              return _c("v-uni-image", {
                key: index,
                attrs: {
                  src: _vm._$g("110-" + $30, "a-src"),
                  _i: "110-" + $30,
                },
              })
            }),
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(111, "sc"), attrs: { _i: 111 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(112, "sc"), attrs: { _i: 112 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(113, "sc"), attrs: { _i: 113 } },
                [_vm._v("Get Updates to your Inbox")]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(114, "sc"), attrs: { _i: 114 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(115, "sc"), attrs: { _i: 115 } },
                    [_vm._v("e.g: hello@AIDePIN.com")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(116, "sc"), attrs: { _i: 116 } },
                    [_vm._v("Join Mailling List")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(117, "sc"), attrs: { _i: 117 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(118, "sc"), attrs: { _i: 118 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(119, "sc"), attrs: { _i: 119 } },
                    [_vm._v("LEARN")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 120 } }, [_vm._v("Home")]),
                  _c("v-uni-text", { attrs: { _i: 121 } }, [
                    _vm._v("Ecosystem"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 122 } }, [
                    _vm._v("Solutions"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 123 } }, [_vm._v("Brand")]),
                  _c("v-uni-text", { attrs: { _i: 124 } }, [
                    _vm._v("Guidelines"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 125 } }, [_vm._v("Blog")]),
                  _c("v-uni-text", { attrs: { _i: 126 } }, [
                    _vm._v("Whitepaper"),
                  ]),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(127, "sc"), attrs: { _i: 127 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(128, "sc"), attrs: { _i: 128 } },
                    [_vm._v("GET INVOLVED")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 129 } }, [_vm._v("Mine")]),
                  _c("v-uni-text", { attrs: { _i: 130 } }, [_vm._v("Use")]),
                  _c("v-uni-text", { attrs: { _i: 131 } }, [_vm._v("Roam")]),
                  _c("v-uni-text", { attrs: { _i: 132 } }, [
                    _vm._v("Developers"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 133 } }, [_vm._v("AIDePIN")]),
                  _c("v-uni-text", { attrs: { _i: 134 } }, [_vm._v("House")]),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(135, "sc"), attrs: { _i: 135 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(136, "sc"), attrs: { _i: 136 } },
                    [_vm._v("SOCIAL")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 137 } }, [_vm._v("Discord")]),
                  _c("v-uni-text", { attrs: { _i: 138 } }, [_vm._v("Twitter")]),
                  _c("v-uni-text", { attrs: { _i: 139 } }, [
                    _vm._v("Facebook"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 140 } }, [
                    _vm._v("LinkedIn"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 141 } }, [_vm._v("Github")]),
                  _c("v-uni-text", { attrs: { _i: 142 } }, [_vm._v("YouTube")]),
                  _c("v-uni-text", { attrs: { _i: 143 } }, [_vm._v("Reddit")]),
                  _c("v-uni-text", { attrs: { _i: 144 } }, [
                    _vm._v("Instagram"),
                  ]),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(145, "sc"), attrs: { _i: 145 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(146, "sc"), attrs: { _i: 146 } },
                    [_vm._v("GET IN TOUCH")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 147 } }, [
                    _vm._v("Hello@AIDePIN.com"),
                  ]),
                  _c("v-uni-text", { attrs: { _i: 148 } }, [
                    _vm._v("Press@AIDePIN.com"),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(149, "sc"), attrs: { _i: 149 } },
            [_vm._v("Copyright © 2023 AIDePIN Inc | All Rights Reserved")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!*********************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/phone/phone.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./phone.vue?vue&type=script&lang=js&mpType=page */ 26);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/phone/phone.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 27 */
/*!******************************************************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/phone/phone.vue?vue&type=style&index=0&id=67b61e74&lang=scss&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_style_index_0_id_67b61e74_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./phone.vue?vue&type=style&index=0&id=67b61e74&lang=scss&scoped=true&mpType=page */ 28);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_style_index_0_id_67b61e74_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_style_index_0_id_67b61e74_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_style_index_0_id_67b61e74_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_style_index_0_id_67b61e74_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_phone_vue_vue_type_style_index_0_id_67b61e74_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/phone/phone.vue?vue&type=style&index=0&id=67b61e74&lang=scss&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./phone.vue?vue&type=style&index=0&id=67b61e74&lang=scss&scoped=true&mpType=page */ 29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 20).default
var update = add("5549ceb8", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 29 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/phone/phone.vue?vue&type=style&index=0&id=67b61e74&lang=scss&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 16);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js */ 17);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/static/page/bannerBag-phone.png */ 30);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/static/partner/bag.png */ 19);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\nbody *[data-v-67b61e74],\r\nbody uni-view[data-v-67b61e74] {\r\n\tbox-sizing: border-box;\r\n\tflex-shrink: 0;\n}\nbody[data-v-67b61e74] {\r\n\tfont-family: DoHyeon-Regular, Gilroy-Regular, Gilroy-Bold, RobotInvaders;\r\n\tmargin: 0;\n}\nuni-button[data-v-67b61e74] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 1px solid transparent;\r\n\toutline: none;\r\n\tbackground-color: transparent;\n}\nuni-button[data-v-67b61e74]:active {\r\n\topacity: 0.6;\n}\n.pointer[data-v-67b61e74] {\r\n\tcursor: pointer;\n}\n.flex-col[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\n}\n.flex-row[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\n}\n.justify-start[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\n}\n.justify-center[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\n}\n.justify-end[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\n}\n.justify-evenly[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\n}\n.justify-around[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\n}\n.justify-between[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\n}\n.align-start[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\n}\n.align-center[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\talign-items: center;\n}\n.align-end[data-v-67b61e74] {\r\n\tdisplay: flex;\r\n\talign-items: flex-end;\n}\n.content .header[data-v-67b61e74] {\r\n  background-color: #FFFFFF;\r\n  height: 100rpx;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 99;\r\n  padding: 0 48rpx;\r\n  box-sizing: border-box;\n}\n.content .header .logo[data-v-67b61e74] {\r\n  height: 48rpx;\n}\n.content .header .sort[data-v-67b61e74] {\r\n  width: 44rpx;\r\n  height: 44rpx;\n}\n.content .header .nav[data-v-67b61e74] {\r\n  position: absolute;\r\n  top: 100rpx;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: #FFFFFF;\r\n  padding: 0 48rpx;\r\n  box-sizing: border-box;\n}\n.content .header .nav .item[data-v-67b61e74] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 120rpx;\r\n  border-bottom: 1px solid #F1F1F1;\n}\n.content .header .nav .item uni-text[data-v-67b61e74] {\r\n  font-size: 30rpx;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #777777;\r\n  line-height: 40px;\n}\n.content .header .nav .item .active[data-v-67b61e74] {\r\n  color: #000000;\n}\n.content .header .nav .item uni-image[data-v-67b61e74] {\r\n  width: 44rpx;\r\n  height: 44rpx;\n}\n.content .header .nav .item[data-v-67b61e74]:last-child {\r\n  border: none;\n}\n.content .banner[data-v-67b61e74] {\r\n  background: #F7F7FA url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n  background-size: 100% auto;\r\n  padding: 80rpx 48rpx;\n}\n.content .banner .titbox[data-v-67b61e74] {\r\n  min-height: 220rpx;\n}\n.content .banner .titbox .tit[data-v-67b61e74] {\r\n  font-size: 22px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 60rpx;\n}\n.content .banner .txt[data-v-67b61e74] {\r\n  font-size: 11px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 30rpx;\r\n  margin-bottom: 48rpx;\n}\n.content .banner .btn[data-v-67b61e74] {\r\n  width: 240rpx;\r\n  height: 80rpx;\r\n  background: #000000;\r\n  border-radius: 16rpx;\r\n  font-size: 13px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 80rpx;\r\n  text-align: center;\n}\n.content .banner .bannerImg[data-v-67b61e74] {\r\n  display: flex;\r\n  margin: 120rpx auto;\r\n  width: 600rpx;\n}\n.content .Covered[data-v-67b61e74] {\r\n  background-color: #FFFFFF;\r\n  padding: 88rpx 0;\n}\n.content .Covered .tit[data-v-67b61e74] {\r\n  font-size: 20px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 48rpx;\r\n  margin: 0 48rpx;\r\n  margin-bottom: 16rpx;\n}\n.content .Covered .txt[data-v-67b61e74] {\r\n  font-size: 11px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 30rpx;\r\n  margin: 0 48rpx;\n}\n.content .Covered .grid[data-v-67b61e74] {\r\n  margin-top: 60rpx;\n}\n.content .Covered .grid .grid-swiper[data-v-67b61e74] {\r\n  height: 550rpx;\n}\n.content .Covered .grid .grid-swiper .item[data-v-67b61e74] {\r\n  width: 520rpx;\r\n  height: 550rpx;\r\n  background: #F7F7FA;\r\n  border-radius: 30rpx;\r\n  padding: 30rpx;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin-left: 48rpx;\n}\n.content .Covered .grid .grid-swiper .item .icon[data-v-67b61e74] {\r\n  width: 340rpx;\r\n  height: 184rpx;\n}\n.content .Covered .grid .grid-swiper .item .name[data-v-67b61e74] {\r\n  font-size: 16px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 40rpx;\n}\n.content .Covered .grid .grid-swiper .item .desc[data-v-67b61e74] {\r\n  text-align: center;\r\n  font-size: 11px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 30rpx;\r\n  margin: 12rpx 0 62rpx 0;\n}\n.content .Covered .grid .grid-swiper .item .more[data-v-67b61e74] {\r\n  font-size: 14px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #7031ED;\r\n  line-height: 33rpx;\r\n  display: flex;\r\n  align-items: center;\n}\n.content .Covered .grid .grid-swiper .item .more uni-image[data-v-67b61e74] {\r\n  width: 30rpx;\r\n  height: 30rpx;\r\n  margin-left: 10rpx;\n}\n.content .build[data-v-67b61e74] {\r\n  background-color: #000000;\r\n  padding: 80rpx 0;\n}\n.content .build .tit[data-v-67b61e74] {\r\n  font-size: 20px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 48rpx;\r\n  margin: 0 48rpx;\n}\n.content .build .txt[data-v-67b61e74] {\r\n  font-size: 11px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 30rpx;\r\n  margin: 16rpx 48rpx 48rpx 48rpx;\n}\n.content .build .btn[data-v-67b61e74] {\r\n  width: 240rpx;\r\n  height: 80rpx;\r\n  background: #7031ED;\r\n  border-radius: 40rpx;\r\n  font-size: 13px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 80rpx;\r\n  margin-left: 48rpx;\r\n  text-align: center;\n}\n.content .build .bag[data-v-67b61e74] {\r\n  display: flex;\r\n  margin: 80rpx auto;\r\n  width: 630rpx;\n}\n.content .build .grid .grid-swiper[data-v-67b61e74] {\r\n  height: 260rpx;\n}\n.content .build .grid .grid-swiper .item[data-v-67b61e74] {\r\n  width: 470rpx;\r\n  height: 240rpx;\r\n  background: #FFFFFF;\r\n  border-radius: 20rpx;\r\n  padding: 30rpx;\r\n  margin-left: 60rpx;\n}\n.content .build .grid .grid-swiper .item .tit[data-v-67b61e74] {\r\n  font-size: 14px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 36rpx;\r\n  margin: 0 0 12rpx 0;\n}\n.content .build .grid .grid-swiper .item .txt[data-v-67b61e74] {\r\n  font-size: 11px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 30rpx;\r\n  margin: 0;\n}\n.content .use[data-v-67b61e74] {\r\n  background-color: #F7F7FA;\r\n  padding: 80rpx 48rpx;\n}\n.content .use .tit[data-v-67b61e74] {\r\n  font-size: 27px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 62rpx;\n}\n.content .use .tit2[data-v-67b61e74] {\r\n  font-size: 15px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #7031ED;\r\n  line-height: 32rpx;\r\n  margin: 18rpx 0 30rpx 0;\n}\n.content .use .txt[data-v-67b61e74] {\r\n  font-size: 11px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 30rpx;\n}\n.content .use .grid[data-v-67b61e74] {\r\n  padding: 20rpx 0;\n}\n.content .use .grid .item[data-v-67b61e74] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 60rpx;\n}\n.content .use .grid .item .icon[data-v-67b61e74] {\r\n  width: 140rpx;\r\n  height: 140rpx;\n}\n.content .use .grid .item .info[data-v-67b61e74] {\r\n  margin-left: 24rpx;\n}\n.content .use .grid .item .info .name[data-v-67b61e74] {\r\n  font-size: 15px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 40rpx;\n}\n.content .use .grid .item .info .desc[data-v-67b61e74] {\r\n  width: 490rpx;\r\n  font-size: 11px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #777777;\r\n  line-height: 30rpx;\r\n  margin-top: 12rpx;\n}\n.content .Helium[data-v-67b61e74] {\r\n  padding: 80rpx 48rpx 50rpx 48rpx;\r\n  background: #7031ED url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n  background-size: 100% auto;\n}\n.content .Helium .tit[data-v-67b61e74] {\r\n  font-size: 20px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 48rpx;\r\n  margin-bottom: 60rpx;\n}\n.content .Helium .grid[data-v-67b61e74] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\n}\n.content .Helium .grid uni-image[data-v-67b61e74] {\r\n  width: 197rpx;\r\n  height: 60rpx;\r\n  margin-bottom: 40rpx;\n}\n.content .footer[data-v-67b61e74] {\r\n  background-color: #000000;\r\n  padding: 80rpx 48rpx;\n}\n.content .footer .top .tit[data-v-67b61e74] {\r\n  font-size: 20px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 48rpx;\n}\n.content .footer .top .right[data-v-67b61e74] {\r\n  padding: 48rpx 0;\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.content .footer .top .right .input[data-v-67b61e74] {\r\n  width: 396rpx;\r\n  height: 80rpx;\r\n  background: #1A1A1A;\r\n  border-radius: 10rpx;\r\n  font-size: 12px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 80rpx;\r\n  padding: 0 24rpx;\n}\n.content .footer .top .right .btn[data-v-67b61e74] {\r\n  width: 240rpx;\r\n  height: 80rpx;\r\n  background: #7031ED;\r\n  border-radius: 10rpx;\r\n  font-size: 12px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 80rpx;\r\n  text-align: center;\n}\n.content .footer .list[data-v-67b61e74] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  padding: 48rpx 0;\r\n  border-top: 1px solid #191919;\r\n  border-bottom: 1px solid #191919;\n}\n.content .footer .list .item[data-v-67b61e74] {\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 40rpx;\n}\n.content .footer .list .item uni-text[data-v-67b61e74] {\r\n  font-size: 11px;\r\n  font-family: Gilroy-Medium, Gilroy;\r\n  font-weight: 500;\r\n  color: #909090;\r\n  line-height: 22rpx;\r\n  margin-bottom: 20rpx;\n}\n.content .footer .list .item .tit[data-v-67b61e74] {\r\n  font-size: 13px;\r\n  font-family: Gilroy-Bold, Gilroy;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  line-height: 34rpx;\n}\n.content .footer .bottom[data-v-67b61e74] {\r\n  font-size: 11px;\r\n  font-family: Gilroy-Regular, Gilroy;\r\n  font-weight: 400;\r\n  color: #FFFFFF;\r\n  line-height: 22rpx;\r\n  padding-top: 48rpx;\n}\n.content .walletbox[data-v-67b61e74] {\r\n  background-color: #FFFFFF;\r\n  padding: 40rpx;\r\n  width: 630rpx;\r\n  border-radius: 24rpx;\n}\n.content .walletbox .title[data-v-67b61e74] {\r\n  margin-bottom: 20px;\n}\n.content .walletbox .title uni-view[data-v-67b61e74] {\r\n  font-size: 20px;\r\n  color: #000000;\r\n  font-weight: bold;\r\n  font-family: Gilroy-Bold;\n}\n.content .walletbox .title uni-image[data-v-67b61e74] {\r\n  width: 40rpx;\r\n  height: 40rpx;\n}\n.content .walletbox .item[data-v-67b61e74] {\r\n  border: 1px solid #DEDEDE;\r\n  border-radius: 16rpx;\r\n  height: 88rpx;\r\n  margin-bottom: 10px;\r\n  font-size: 16px;\r\n  color: #1E2329;\r\n  font-weight: bold;\r\n  font-family: Gilroy-Bold;\n}\n.content .walletbox .item uni-image[data-v-67b61e74] {\r\n  width: 48rpx;\r\n  height: 48rpx;\r\n  margin: 0 20rpx;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/*!*******************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/static/page/bannerBag-phone.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/page/bannerBag-phone.png";

/***/ }),
/* 31 */
/*!*************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/webview/webview.vue?mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webview.vue?vue&type=template&id=16edd14a&mpType=page */ 32);
/* harmony import */ var _webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webview.vue?vue&type=script&lang=js&mpType=page */ 34);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/webview/webview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 32 */
/*!*******************************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/webview/webview.vue?vue&type=template&id=16edd14a&mpType=page ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./webview.vue?vue&type=template&id=16edd14a&mpType=page */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_template_id_16edd14a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 33 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/webview/webview.vue?vue&type=template&id=16edd14a&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { attrs: { _i: 0 } },
    [
      _c("v-uni-web-view", {
        attrs: { src: "../../static/Whitepaper.pdf", _i: 1 },
      }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 34 */
/*!*************************************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/webview/webview.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./webview.vue?vue&type=script&lang=js&mpType=page */ 35);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_webview_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/pages/webview/webview.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 36 */
/*!****************************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 37);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 20).default
var update = add("c9971744", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 38 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!F:/系统文件/文档/HBuilderProjects/aidepin_web/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 16);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js */ 17);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/static/font/DoHyeon-Regular.ttf */ 39);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/static/font/Gilroy-Regular.otf */ 40);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! @/static/font/Gilroy-Bold.otf */ 41);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! @/static/font/Robot-Invaders-2.ttf */ 42);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "\n@font-face {\n\tfont-family: 'DoHyeon-Regular';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\tfont-display: swap;\n}\n@font-face {\n\tfont-family: 'Gilroy-Regular';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tfont-display: swap;\n}\n@font-face {\n\tfont-family: 'Gilroy-Bold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\tfont-display: swap;\n}\n@font-face {\n\tfont-family: 'RobotInvaders';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n\tfont-display: swap;\n}\n/*每个页面公共css */\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 39 */
/*!*******************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/static/font/DoHyeon-Regular.ttf ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/font/DoHyeon-Regular.ttf";

/***/ }),
/* 40 */
/*!******************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/static/font/Gilroy-Regular.otf ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/font/Gilroy-Regular.otf";

/***/ }),
/* 41 */
/*!***************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/static/font/Gilroy-Bold.otf ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/font/Gilroy-Bold.otf";

/***/ }),
/* 42 */
/*!********************************************************************************!*\
  !*** F:/系统文件/文档/HBuilderProjects/aidepin_web/static/font/Robot-Invaders-2.ttf ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/font/Robot-Invaders-2.ttf";

/***/ })
/******/ ]);