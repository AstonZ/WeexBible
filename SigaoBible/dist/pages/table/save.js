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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(51)
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
__vue_options__.__file = "/Users/AstonWorkMac/Desktop/PA/Git-MA-Projects/WeexBible/SigaoBible/src/pages/table/save.vue"
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"components\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

exports.default = {
  data: function data() {
    return {
      form: {
        name: null,
        sex: 1,
        age: 20,
        birthday: this.$dateFormat(new Date(), "yyyy-MM-dd"),
        address: null,
        zip: 412300
      },
      route_id: this.$route.params.id,
      load_data: false,
      on_submit_loading: false,
      rules: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }]
      }
    };
  },
  created: function created() {
    this.route_id && this.get_form_data();
  },

  methods: {
    //获取数据
    get_form_data: function get_form_data() {
      var _this = this;

      this.load_data = true;
      this.$fetch.api_table.get({
        id: this.route_id
      }).then(function (_ref) {
        var data = _ref.data;

        _this.form = data;
        _this.load_data = false;
      }).catch(function () {
        _this.load_data = false;
      });
    },

    //时间选择改变时
    on_change_birthday: function on_change_birthday(val) {
      this.$set(this.form, 'birthday', val);
    },

    //提交
    on_submit_form: function on_submit_form() {
      var _this2 = this;

      this.$refs.form.validate(function (valid) {
        if (!valid) return false;
        _this2.on_submit_loading = true;
        _this2.$fetch.api_table.save(_this2.form).then(function (_ref2) {
          var msg = _ref2.msg;

          _this2.$message.success(msg);
          setTimeout(_this2.$router.back(), 500);
        }).catch(function () {
          _this2.on_submit_loading = false;
        });
      });
    }
  },
  components: {
    panelTitle: _components.panelTitle
  }
}; //
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

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["panel"]
  }, [_c('panel-title', {
    attrs: {
      "title": _vm.$route.meta.title
    }
  }), _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.load_data),
      expression: "load_data"
    }],
    staticClass: ["panel-body"],
    attrs: {
      "elementLoadingText": "拼命加载中"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "rules": _vm.rules,
      "labelWidth": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "姓名:",
      "prop": "name"
    }
  }, [_c('el-input', {
    staticStyle: {
      width: "250px"
    },
    attrs: {
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _c('el-form-item', {
    attrs: {
      "label": "性别:"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.sex),
      callback: function($$v) {
        _vm.$set(_vm.form, "sex", $$v)
      },
      expression: "form.sex"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("男")]), _c('el-radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("女")])], 1)], 1), _c('el-form-item', {
    attrs: {
      "label": "年龄:"
    }
  }, [_c('el-input-number', {
    staticStyle: {
      width: "250px"
    },
    attrs: {
      "placeholder": "请输入内容",
      "max": 100,
      "min": 1,
      "value": 20,
      "controls": false
    },
    model: {
      value: (_vm.form.age),
      callback: function($$v) {
        _vm.$set(_vm.form, "age", $$v)
      },
      expression: "form.age"
    }
  })], 1), _c('el-form-item', {
    attrs: {
      "label": "生日:"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      width: "250px"
    },
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "editable": false,
      "placeholder": "选择生日"
    },
    on: {
      "change": _vm.on_change_birthday
    },
    model: {
      value: (_vm.form.birthday),
      callback: function($$v) {
        _vm.$set(_vm.form, "birthday", $$v)
      },
      expression: "form.birthday"
    }
  })], 1), _c('el-form-item', {
    attrs: {
      "label": "邮编:"
    }
  }, [_c('el-input', {
    staticStyle: {
      width: "250px"
    },
    attrs: {
      "placeholder": "请输入内容",
      "value": 412300,
      "controls": false,
      "maxlength": 6,
      "minlength": 6
    },
    model: {
      value: (_vm.form.zip),
      callback: function($$v) {
        _vm.$set(_vm.form, "zip", $$v)
      },
      expression: "form.zip"
    }
  })], 1), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.on_submit_loading
    },
    on: {
      "click": _vm.on_submit_form
    }
  }, [_vm._v("立即提交")]), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.$router.back()
      }
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });