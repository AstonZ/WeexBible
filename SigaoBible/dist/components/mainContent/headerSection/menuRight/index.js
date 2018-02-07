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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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
__vue_options__.__file = "/Users/AstonWorkMac/Desktop/PA/Git-MA-Projects/WeexBible/SigaoBible/src/components/mainContent/headerSection/menuRight/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _vuex = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vuex\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _type = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"store/getters/type\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _type2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"store/actions/type\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var USER_OUT = 0;
var USER_INFO = 1;
var USER_SETTING = 2;

exports.default = {
  computed: _extends({}, (0, _vuex.mapGetters)({
    get_user_info: _type.GET_USER_INFO
  })),
  methods: _extends({}, (0, _vuex.mapActions)({
    set_user_info: _type2.SET_USER_INFO
  }), {
    //退出
    user_out: function user_out() {
      var _this = this;

      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.$fetch.api_user.logout().then(function (_ref) {
          var msg = _ref.msg;

          _this.$message.success(msg);
          _this.set_user_info(null);
          setTimeout(_this.$router.replace({ name: "login" }), 500);
        });
      }).catch(function () {});
    },
    user_info: function user_info() {
      //个人信息
    },
    user_setting: function user_setting() {
      //设置
    },
    user_click: function user_click(type) {
      switch (type) {
        case USER_OUT:
          //退出
          this.user_out();
          break;
        case USER_INFO:
          //个人信息
          break;
        case USER_SETTING:
          //设置
          break;
      }
    }
  })
};

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.get_user_info.login) ? _c('div', {
    staticClass: ["menu-right"]
  }, [_c('div', {
    staticClass: ["notification-menu"]
  }, [_c('el-dropdown', {
    staticClass: ["notification-list"],
    attrs: {
      "trigger": "click"
    }
  }, [_c('div', {
    staticClass: ["notification-btn"]
  }, [_c('img', {
    attrs: {
      "src": _vm.get_user_info.user.avatar,
      "alt": _vm.get_user_info.user.name
    }
  }), _c('span', {
    directives: [{
      name: "text",
      rawName: "v-text",
      value: (_vm.get_user_info.user.name),
      expression: "get_user_info.user.name"
    }]
  }), _c('span', {
    staticClass: ["icon"]
  })]), _c('el-dropdown-menu', {
    staticClass: ["dropdown-menu"],
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    staticClass: ["dropdown-list"]
  }, [_c('a', {
    staticClass: ["dropdown-btn"],
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": function($event) {
        _vm.user_click(0)
      }
    }
  }, [_c('i', {
    staticClass: ["icon", "fa", "fa-user"]
  }), _c('span', [_vm._v("个人信息")])], 1)]), _c('el-dropdown-item', {
    staticClass: ["dropdown-list"]
  }, [_c('a', {
    staticClass: ["dropdown-btn"],
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": function($event) {
        _vm.user_click(0)
      }
    }
  }, [_c('i', {
    staticClass: ["icon", "fa", "fa-cog"]
  }), _c('span', [_vm._v("设置")])], 1)]), _c('el-dropdown-item', {
    staticClass: ["dropdown-list"]
  }, [_c('a', {
    staticClass: ["dropdown-btn"],
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": function($event) {
        _vm.user_click(0)
      }
    }
  }, [_c('i', {
    staticClass: ["icon", "fa", "fa-sign-out"]
  }), _c('span', [_vm._v("安全退出")])], 1)])], 1)], 1)], 1)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });