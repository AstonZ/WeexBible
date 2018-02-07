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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!../../../node_modules/weex-vue-loader/lib/style-loader!sass-loader?{\"sourceMap\":false}!../../../node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-1a6f02a8!../../../node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(4)
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
__vue_options__.__file = "/Users/AstonWorkMac/Desktop/PA/Git-MA-Projects/WeexBible/SigaoBible/src/components/charts/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-309468f0"
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

// enumerating ECharts events for now
var ACTION_EVENTS = ['legendselectchanged', 'legendselected', 'legendunselected', 'datazoom', 'datarangeselected', 'timelinechanged', 'timelineplaychanged', 'restore', 'dataviewchanged', 'magictypechanged', 'geoselectchanged', 'geoselected', 'geounselected', 'pieselectchanged', 'pieselected', 'pieunselected', 'mapselectchanged', 'mapselected', 'mapunselected', 'axisareaselected', 'brush', 'brushselected'];
var MOUSE_EVENTS = ['click', 'dblclick', 'mouseover', 'mouseout', 'mousedown', 'mouseup', 'globalout'];
exports.default = {
  props: {
    options: Object,
    theme: String,
    initOptions: Object,
    group: String,
    autoResize: Boolean,
    modules: Array
  },
  data: function data() {
    return {
      chart: null,
      dataLoading: true
    };
  },

  computed: {
    // Only recalculated when accessed from JavaScript.
    // Won't update DOM on value change because getters
    // don't depend on reactive values
    width: {
      cache: false,
      get: function get() {
        return this.chart.getWidth();
      }
    },
    height: {
      cache: false,
      get: function get() {
        return this.chart.getHeight();
      }
    },
    isDisposed: {
      cache: false,
      get: function get() {
        return this.chart.isDisposed();
      }
    }
  },
  watch: {
    // use assign statements to tigger "options" and "group" setters
    options: {
      handler: function handler(options) {
        if (!this.chart && options) {
          this._init();
        } else {
          this.chart.setOption(this.options, true);
        }
      },

      deep: true
    },
    group: {
      handler: function handler(group) {
        this.chart.group = group;
      }
    }
  },
  methods: {
    // provide a explicit merge option method
    mergeOptions: function mergeOptions(options) {
      this._delegateMethod('setOption', options);
    },

    // just delegates ECharts methods to Vue component
    // use explicit params to reduce transpiled size for now
    resize: function resize(options) {
      this._delegateMethod('resize', options);
    },
    dispatchAction: function dispatchAction(payload) {
      this._delegateMethod('dispatchAction', payload);
    },
    convertToPixel: function convertToPixel(finder, value) {
      return this._delegateMethod('convertToPixel', finder, value);
    },
    convertFromPixel: function convertFromPixel(finder, value) {
      return this._delegateMethod('convertFromPixel', finder, value);
    },
    containPixel: function containPixel(finder, value) {
      return this._delegateMethod('containPixel', finder, value);
    },
    showLoading: function showLoading(type, options) {
      this._delegateMethod('showLoading', type, options);
    },
    hideLoading: function hideLoading() {
      this._delegateMethod('hideLoading');
    },
    getDataURL: function getDataURL(options) {
      return this._delegateMethod('getDataURL', options);
    },
    getConnectedDataURL: function getConnectedDataURL(options) {
      return this._delegateMethod('getConnectedDataURL', options);
    },
    clear: function clear() {
      this._delegateMethod('clear');
    },
    dispose: function dispose() {
      this._delegateMethod('dispose');
    },
    _delegateMethod: function _delegateMethod(name) {
      var _chart;

      if (!this.chart) {
        return;
      }

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_chart = this.chart)[name].apply(_chart, args);
    },
    _init: function _init() {
      var _this = this;

      if (this.chart) return false;

      this.dataLoading = true;
      /**
       * 按需引入 ECharts 图表组件
       * doc: http://echarts.baidu.com
       */
      Promise.reject(function webpackMissingModule() { var e = new Error("Cannot find module \"echarts\""); e.code = 'MODULE_NOT_FOUND';; return e; }()).then(function (_ref) {
        var init = _ref.init;
        var $el = _this.$el,
            theme = _this.theme,
            initOptions = _this.initOptions,
            group = _this.group,
            options = _this.options,
            autoResize = _this.autoResize,
            _resizeHanlder = _this._resizeHanlder;

        var chart = init($el, theme, initOptions);
        if (group) {
          chart.group = group;
        }
        chart.setOption(options, true);
        // expose ECharts events as custom events
        ACTION_EVENTS.forEach(function (event) {
          chart.on(event, function (params) {
            _this.$emit(event, params);
          });
        });
        MOUSE_EVENTS.forEach(function (event) {
          chart.on(event, function (params) {
            _this.$emit(event, params);
          });
        });
        if (autoResize) {
          window.addEventListener('resize', _resizeHanlder, false);
        }
        _this.chart = chart;
        _this.dataLoading = false;
      }).catch(function (_) {
        _this.dataLoading = false;
      });
    },
    _resizeHanlder: function _resizeHanlder() {
      var _this2 = this;

      window.setTimeout(function () {
        _this2.chart.resize();
      }, 100);
    }
  },
  mounted: function mounted() {
    // auto init if `options` is already provided
    if (this.options) {
      this._init();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this._resizeHanlder, false);
    }
    this.dispose();
  },
  connect: function connect(group) {
    var chart = this.chart;

    if (typeof group !== 'string') {
      group = group.map(function (chart) {
        return chart.chart;
      });
    }
    this.chart.connect(group);
  },
  disconnect: function disconnect(group) {
    this.chart.disConnect(group);
  },
  registerMap: function registerMap() {
    var _chart2;

    (_chart2 = this.chart).registerMap.apply(_chart2, arguments);
  },
  registerTheme: function registerTheme() {
    var _chart3;

    (_chart3 = this.chart).registerTheme.apply(_chart3, arguments);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.dataLoading),
      expression: "dataLoading"
    }],
    staticClass: ["charts__panel__warp"],
    attrs: {
      "elementLoadingText": "玩命加载中..."
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);