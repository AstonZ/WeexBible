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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!../../../node_modules/weex-vue-loader/lib/style-loader!sass-loader?{\"sourceMap\":false}!../../../node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-ad2189ae!../../../node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./login.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
)

/* script */
__vue_exports__ = __webpack_require__(56)

/* template */
var __vue_template__ = __webpack_require__(57)
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
__vue_options__.__file = "/Users/AstonWorkMac/Desktop/PA/Git-MA-Projects/WeexBible/SigaoBible/src/pages/user/login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-85fe543e"
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

/***/ 56:
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

var _vuex = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vuex\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _port_uri = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"common/port_uri\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _type = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"store/actions/type\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

exports.default = {
  data: function data() {
    return {
      form: {
        username: null,
        password: null
      },
      rules: {
        username: [{ required: true, message: '请输入账户名！', trigger: 'blur' }],
        password: [{ required: true, message: '请输入账户密码！', trigger: 'blur' }]
      },
      //请求时的loading效果
      load_data: false
    };
  },

  methods: _extends({}, (0, _vuex.mapActions)({
    set_user_info: _type.SET_USER_INFO
  }), {
    //提交
    submit_form: function submit_form() {
      var _this = this;

      this.$refs.form.validate(function (valid) {
        if (!valid) return false;
        _this.load_data = true;
        //登录提交
        _this.$fetch.api_user.login(_this.form).then(function (_ref) {
          var data = _ref.data,
              msg = _ref.msg;

          _this.set_user_info({
            user: data,
            login: true
          });
          _this.$message.success(msg);
          setTimeout(_this.$router.push({ path: '/' }), 500);
        }).catch(function (_ref2) {
          var code = _ref2.code;

          _this.load_data = false;
          if (code === _port_uri.port_code.error) {
            _this.$notify.info({
              title: '温馨提示',
              message: '账号和密码都为：admin'
            });
          }
        });
      });
    }
  })
};

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["login-body"]
  }, [_c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.load_data),
      expression: "load_data"
    }],
    staticClass: ["loginWarp"],
    attrs: {
      "elementLoadingText": "正在登陆中..."
    },
    on: {
      "keyup": _vm.submit_form
    }
  }, [_vm._m(0), _c('div', {
    staticClass: ["login-form"]
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "rules": _vm.rules,
      "labelWidth": "0"
    }
  }, [_c('el-form-item', {
    staticClass: ["login-item"],
    attrs: {
      "prop": "username"
    }
  }, [_c('el-input', {
    staticClass: ["form-input"],
    attrs: {
      "placeholder": "请输入账户名：",
      "autofocus": true
    },
    model: {
      value: (_vm.form.username),
      callback: function($$v) {
        _vm.$set(_vm.form, "username", $$v)
      },
      expression: "form.username"
    }
  })], 1), _c('el-form-item', {
    staticClass: ["login-item"],
    attrs: {
      "prop": "password"
    }
  }, [_c('el-input', {
    staticClass: ["form-input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入账户密码："
    },
    model: {
      value: (_vm.form.password),
      callback: function($$v) {
        _vm.$set(_vm.form, "password", $$v)
      },
      expression: "form.password"
    }
  })], 1), _c('el-form-item', {
    staticClass: ["login-item"]
  }, [_c('el-button', {
    staticClass: ["form-submit"],
    attrs: {
      "size": "large",
      "icon": "check"
    },
    on: {
      "click": _vm.submit_form
    }
  })], 1)], 1)], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["login-title"]
  }, [_c('img', {
    attrs: {
      "src": "./images/login_logo.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });