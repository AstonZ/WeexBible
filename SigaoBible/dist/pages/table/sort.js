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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(54)
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
__vue_options__.__file = "/Users/AstonWorkMac/Desktop/PA/Git-MA-Projects/WeexBible/SigaoBible/src/pages/table/sort.vue"
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

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"components\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

exports.default = {
  data: function data() {
    return {
      table_data: null,
      //当前页码
      currentPage: 1,
      //数据总条目
      total: 0,
      //每页显示多少条数据
      length: 15,
      //请求时的loading效果
      load_data: true,
      //批量选择数组
      batch_select: []
    };
  },

  components: {
    panelTitle: _components.panelTitle,
    bottomToolBar: _components.bottomToolBar
  },
  created: function created() {
    this.get_table_data();
  },

  methods: {
    //刷新
    on_refresh: function on_refresh() {
      this.get_table_data();
    },

    //获取数据
    get_table_data: function get_table_data() {
      var _this = this;

      this.load_data = true;
      this.$fetch.api_table.list({
        page: this.currentPage,
        length: this.length
      }).then(function (_ref) {
        var _ref$data = _ref.data,
            result = _ref$data.result,
            page = _ref$data.page,
            total = _ref$data.total;

        _this.table_data = result;
        _this.currentPage = page;
        _this.total = total;
        _this.load_data = false;
      }).catch(function () {
        _this.load_data = false;
      });
    },

    //单个删除
    delete_data: function delete_data(item) {
      var _this2 = this;

      this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this2.load_data = true;
        _this2.$fetch.api_table.del(item).then(function (_ref2) {
          var msg = _ref2.msg;

          _this2.get_table_data();
          _this2.$message.success(msg);
        }).catch(function () {});
      }).catch(function () {});
    },

    //页码选择
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentPage = val;
      this.get_table_data();
    },

    //批量选择
    on_batch_select: function on_batch_select(val) {
      this.batch_select = val;
    },

    //批量删除
    on_batch_del: function on_batch_del() {
      var _this3 = this;

      this.$confirm('此操作将批量删除选择数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.load_data = true;
        _this3.$fetch.api_table.batch_del(_this3.batch_select).then(function (_ref3) {
          var msg = _ref3.msg;

          _this3.get_table_data();
          _this3.$message.success(msg);
        }).catch(function () {});
      }).catch(function () {});
    }
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

/***/ 54:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["panel"]
  }, [_c('panel-title', {
    attrs: {
      "title": _vm.$route.meta.title
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.on_refresh
    }
  }, [_c('i', {
    staticClass: ["fa", "fa-refresh"]
  })], 1), _c('router-link', {
    attrs: {
      "to": {
        name: 'tableAdd'
      },
      "tag": "span"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "plus",
      "size": "small"
    }
  }, [_vm._v("添加数据")])], 1)], 1), _c('div', {
    staticClass: ["panel-body"]
  }, [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.load_data),
      expression: "load_data"
    }],
    staticStyle: {
      width: "100%"
    },
    attrs: {
      "data": _vm.table_data,
      "elementLoadingText": "拼命加载中",
      "border": ""
    },
    on: {
      "selectionChange": _vm.on_batch_select
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55"
    }
  }), _c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "id",
      "width": "80",
      "sortable": ""
    }
  }), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名",
      "width": "120",
      "sortable": ""
    }
  }), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "性别",
      "width": "100",
      "sortable": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('span', {
          directives: [{
            name: "text",
            rawName: "v-text",
            value: (props.row.sex == 1 ? '男' : '女'),
            expression: "props.row.sex == 1 ? '男' : '女'"
          }]
        })]
      }
    }])
  }), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "年龄",
      "width": "100",
      "sortable": ""
    }
  }), _c('el-table-column', {
    attrs: {
      "prop": "birthday",
      "label": "生日",
      "width": "120",
      "sortable": ""
    }
  }), _c('el-table-column', {
    attrs: {
      "prop": "zip",
      "label": "邮编",
      "width": "120",
      "sortable": ""
    }
  }), _c('el-table-column', {
    attrs: {
      "prop": "address",
      "label": "地址",
      "sortable": ""
    }
  }), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "180"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('router-link', {
          attrs: {
            "to": {
              name: 'tableUpdate',
              params: {
                id: props.row.id
              }
            },
            "tag": "span"
          }
        }, [_c('el-button', {
          attrs: {
            "type": "info",
            "size": "small",
            "icon": "edit"
          }
        }, [_vm._v("修改")])], 1), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small",
            "icon": "delete"
          },
          on: {
            "click": function($event) {
              _vm.delete_data(props.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _c('bottom-tool-bar', [_c('el-button', {
    attrs: {
      "slot": "handler",
      "type": "danger",
      "icon": "delete",
      "size": "small",
      "disabled": _vm.batch_select.length === 0
    },
    on: {
      "click": _vm.on_batch_del
    },
    slot: "handler"
  }, [_c('span', [_vm._v("批量删除")])]), _c('div', {
    attrs: {
      "slot": "page"
    },
    slot: "page"
  }, [_c('el-pagination', {
    attrs: {
      "currentPage": _vm.currentPage,
      "pageSize": 10,
      "layout": "total, prev, pager, next",
      "total": _vm.total
    },
    on: {
      "currentChange": _vm.handleCurrentChange
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });