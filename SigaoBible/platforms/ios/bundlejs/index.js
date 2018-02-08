// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/AstonWorkMac/Desktop/PA/Git-MA-Projects/WeexBible/SigaoBible/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-31c89411"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
  "login": {
    "marginTop": "180"
  },
  "input-wrapper": {
    "width": "550",
    "marginLeft": "100",
    "marginRight": "100",
    "marginBottom": "30"
  },
  "input": {
    "fontSize": "30",
    "height": "80",
    "width": "550",
    "paddingLeft": "90",
    "paddingTop": "15",
    "borderWidth": "1",
    "borderColor": "#48c9bf",
    "borderRadius": "10",
    "outline": "none"
  },
  "input-img": {
    "position": "absolute",
    "top": "10",
    "left": "15",
    "width": 550,
    "backgroundColor": "#48c9bf",
    "borderRadius": "10",
    "marginTop": "40"
  },
  "input-login-text": {
    "height": "80",
    "widows": "550",
    "textAlign": "center",
    "lineHeight": "80",
    "color": "#FFFFFF",
    "fontSize": "35"
  },
  "input-login": {
    "height": "80",
    "width": "550",
    "backgroundColor": "#48c9bf",
    "borderRadius": "10",
    "marginTop": "40"
  },
  "input-forget": {
    "position": "absolute",
    "left": "30",
    "fontSize": "30"
  },
  "input-register": {
    "position": "absolute",
    "right": "30",
    "fontSize": "30"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {

  data: {
    mobile: "",
    pwd: ""
  },

  methods: {

    onChangeUserMobile: function onChangeUserMobile(event) {
      this.mobile = event.value;
    },

    onChangeUserPassword: function onChangeUserPassword(event) {
      this.pwd = event.value;
    },

    findPassword: function findPassword() {
      console.log("Go Find pwd");
    },

    register: function register() {
      console.log("Go register");
    },

    login: function login() {
      console.log("mobile = " + this.mobile + "password = " + this.pwd);
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["login"]
  }, [_vm._m(0), _vm._m(1), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('div', {
    staticClass: ["input-login"],
    on: {
      "click": _vm.login
    }
  }, [_c('text', {
    staticClass: ["input-login-text"]
  }, [_vm._v("Login")])])]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('text', {
    staticClass: ["input-forget"],
    on: {
      "click": _vm.findPassword
    }
  }, [_vm._v("Find password")]), _c('text', {
    staticClass: ["input-register"],
    on: {
      "click": _vm.register
    }
  }, [_vm._v("Register")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "Input Mobile",
      "autofocus": "true",
      "value": "",
      "onchange": "onChangeUserMobile"
    }
  }), _c('div', {
    staticClass: ["input-img"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "Input Password",
      "autofocus": "true",
      "value": "",
      "onchange": "onChangeUserPassword"
    }
  }), _c('div', {
    staticClass: ["input-img"]
  })])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);