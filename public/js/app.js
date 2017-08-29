/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Validator_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Validator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Validator_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules_id__ = __webpack_require__(1);
Vue.config.debug = true;
Vue.config.silent = false;
Vue.config.devtools = true;




/* harmony default export */ __webpack_exports__["default"] = (new Vue({
  el: '#root',
  components: {
    'validator': __WEBPACK_IMPORTED_MODULE_0__Validator_vue___default.a
  },
  data: {
    message: '',
    errors: [],
    validationRules: __WEBPACK_IMPORTED_MODULE_1__rules_id__["a" /* default */]
  },
  methods: {
    handleErrors: function handleErrors(data) {
      this.errors = data.errors;
    }
  }
}));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__items_minLength__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items_maxLength__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_nthIsANumber__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_nthIsALetter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_nthIs__ = __webpack_require__(4);





// import nthIsA from './items/nthIsA';

/* harmony default export */ __webpack_exports__["a"] = ({
  'minLength': {
    rule: __WEBPACK_IMPORTED_MODULE_0__items_minLength__["a" /* default */],
    select: {
      label: 'Minimum amount of characters',
      removeWhenSelect: true
    },
    fields: [{
      name: 'minLength',
      label: 'Minimum amount of characters',
      required: true
    }]
  },
  'maxLength': {
    rule: __WEBPACK_IMPORTED_MODULE_1__items_maxLength__["a" /* default */],
    select: {
      label: 'Maximum amount of characters',
      removeWhenSelect: true
    },
    fields: [{
      name: 'maxLength',
      label: 'Maximum amount of characters',
      required: true
    }]
  },

  'nthIsANumber': {
    rule: __WEBPACK_IMPORTED_MODULE_2__items_nthIsANumber__["a" /* default */],
    select: {
      label: 'The n-th character is always a number'
    },
    fields: [{
      name: 'position',
      label: 'Symbol position',
      required: true
    }]
  },
  'nthIsALetter': {
    rule: __WEBPACK_IMPORTED_MODULE_3__items_nthIsALetter__["a" /* default */],
    select: {
      label: 'The n-th character is always a letter'
    },
    fields: [{
      name: 'position',
      label: 'Symbol position',
      required: true
    }]
  },
  'nthIs': {
    select: {
      label: 'N-th symbol is ...'
    },
    rule: __WEBPACK_IMPORTED_MODULE_4__items_nthIs__["a" /* default */],
    fields: [{
      name: 'position',
      label: 'Symbol position',
      required: true
    }, {
      name: 'symbol',
      label: 'Symbol',
      required: true
    }]
  }

  /* 'nthIsA': {
     rule: nthIsA,
     select: {
       label: 'The n-th character is always the A',
     },
     fields: [
       {
         name: 'position',
         label: 'Symbol position',
         required: true
       }
     ]
   },*/
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(data) {
    _classCallCheck(this, _class);

    var maxLength = parseInt(data.maxLength);

    this.maxLength = maxLength;
    if (isNaN(maxLength) || maxLength < 0) {
      this.maxLength = 0;
    }
  }

  _createClass(_class, [{
    key: "validate",
    value: function validate(text) {
      text = text.trim();

      if (text.length > this.maxLength) {
        return this.getError();
      }
    }
  }, {
    key: "getError",
    value: function getError() {
      return "Maximum amount of characters should be " + this.maxLength;
    }
  }, {
    key: "getRuleText",
    value: function getRuleText() {
      return "Maximum amount of characters is " + this.maxLength;
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(data) {
    _classCallCheck(this, _class);

    var minLength = parseInt(data.minLength);

    this.minLength = minLength;
    if (isNaN(minLength) || minLength < 0) {
      this.minLength = 0;
    }
  }

  _createClass(_class, [{
    key: "validate",
    value: function validate(text) {
      text = text.trim();

      if (text.length < this.minLength) {
        return this.getError();
      }
    }
  }, {
    key: "getError",
    value: function getError() {
      return "Minimum amount of characters should be " + this.minLength;
    }
  }, {
    key: "getRuleText",
    value: function getRuleText() {
      return "Minimum amount of characters is " + this.minLength;
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(data) {
    _classCallCheck(this, _class);

    var position = parseInt(data.position),
        symbol = data.symbol;

    this.position = position;
    if (isNaN(position) || position < 1) {
      this.minLength = 1;
    }

    this.symbol = symbol;
    if (symbol.length > 1) {
      this.symbol = symbol[0];
    }
  }

  _createClass(_class, [{
    key: "validate",
    value: function validate(text) {
      text = text.trim();

      if (text[this.position - 1] != this.symbol) {
        return this.getError();
      }
    }
  }, {
    key: "getError",
    value: function getError() {
      return "The " + this.position + " character should be the letter '" + this.symbol + "'";
    }
  }, {
    key: "getRuleText",
    value: function getRuleText() {
      return "The " + this.position + " character is always the letter '" + this.symbol + "'";
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(data) {
    _classCallCheck(this, _class);

    var position = parseInt(data.position);

    this.position = position;
    if (isNaN(position) || position < 1) {
      this.minLength = 1;
    }
  }

  _createClass(_class, [{
    key: "validate",
    value: function validate(text) {
      text = text.trim();

      if (text.length < this.position) {
        return this.getError();
      }

      if (!text[this.position - 1].match(/[a-z]/i)) {
        return this.getError();
      }
    }
  }, {
    key: "getError",
    value: function getError() {
      return "The " + this.position + " character should be the letter";
    }
  }, {
    key: "getRuleText",
    value: function getRuleText() {
      return "The " + this.position + " character is always the letter";
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(data) {
    _classCallCheck(this, _class);

    var position = parseInt(data.position);

    this.position = position;
    if (isNaN(position) || position < 1) {
      this.minLength = 1;
    }
  }

  _createClass(_class, [{
    key: "validate",
    value: function validate(text) {
      text = text.trim();

      if (+text[this.position - 1] != text[this.position - 1]) {
        return this.getError();
      }
    }
  }, {
    key: "getError",
    value: function getError() {
      return "The " + this.position + " character should be the number";
    }
  }, {
    key: "getRuleText",
    value: function getRuleText() {
      return "The " + this.position + " character is always the number";
    }
  }]);

  return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['text', 'rules'],
  data: function data() {
    return {
      ruleType: '',
      activeRules: [],
      data: {}
    };
  },

  watch: {
    text: function text() {
      this.validate();
    }
  },
  methods: {
    clearData: function clearData() {
      this.data = {};
    },
    addRule: function addRule() {
      this.activeRules.push({
        type: this.ruleType,
        rule: new this.rules[this.ruleType].rule(this.data)
      });
      this.ruleType = '';
      this.data = {};
      this.validate();
    },
    removeRule: function removeRule(index) {
      this.activeRules.splice(index, 1);
      this.validate();
    },
    validate: function validate() {
      this.errors = [];

      for (var i = 0; i < this.activeRules.length; i++) {
        var rule = this.activeRules[i].rule;

        var error = rule.validate(this.text);
        if (error) {
          this.errors.push(error);
        }
      }

      this.$emit('throw-errors', { errors: this.errors });
    },
    inRulesArray: function inRulesArray(ruleName) {
      return this.activeRules.findIndex(function (rule) {
        return rule.type === ruleName;
      }) != -1;
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
exports.push([module.i, "\n.validator-wrapper {\n  border: 1px solid #b3b2b2;\n  padding: 20px 20px;\n}\n", ""]);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\www\\vue-validator\\assets\\js\\Validator.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Validator.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-742bc1d4", Component.options)
  } else {
    hotAPI.reload("data-v-742bc1d4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-6 validator-wrapper"
  }, [_c('form', {
    attrs: {
      "action": ""
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.addRule($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.ruleType),
      expression: "ruleType"
    }],
    staticClass: "form-control",
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.ruleType = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, _vm.clearData]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("--Select rule--")]), _vm._v(" "), _vm._l((_vm.rules), function(rule, key, index) {
    return [(rule.select.removeWhenSelect) ? [(!_vm.inRulesArray(key)) ? _c('option', {
      domProps: {
        "value": key
      }
    }, [_vm._v(_vm._s(rule.select.label))]) : _vm._e()] : _c('option', {
      domProps: {
        "value": key
      }
    }, [_vm._v(_vm._s(rule.select.label))])]
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": _vm.ruleType == ''
    }
  }, [_vm._v("Add rule")])]), _vm._v(" "), _vm._l((_vm.rules), function(rule, key, index) {
    return [_vm._l((rule.fields), function(field) {
      return (key == _vm.ruleType) ? [_c('div', {
        staticClass: "form-group"
      }, [_c('label', [_vm._v(_vm._s(field.label))]), _vm._v(" "), _c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (_vm.data[field.name]),
          expression: "data[field.name]"
        }],
        staticClass: "form-control",
        attrs: {
          "type": "text",
          "required": field.required
        },
        domProps: {
          "value": (_vm.data[field.name])
        },
        on: {
          "input": function($event) {
            if ($event.target.composing) { return; }
            _vm.$set(_vm.data, field.name, $event.target.value)
          }
        }
      })])] : _vm._e()
    })]
  })], 2), _vm._v(" "), (_vm.activeRules.length > 0) ? _c('div', {
    staticClass: "col-md-8"
  }, [_c('p', [_vm._v("Rules:")]), _vm._v(" "), _vm._l((_vm.activeRules), function(ruleItem, index) {
    return _c('ul', [_c('li', [
      [_c('span', [_vm._v(_vm._s(ruleItem.rule.getRuleText()))])], _vm._v(" "), _c('button', {
        staticClass: "btn btn-warning",
        attrs: {
          "title": "Remove rule"
        },
        on: {
          "click": function($event) {
            _vm.removeRule(index)
          }
        }
      }, [_vm._v("X")])
    ], 2)])
  })], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-742bc1d4", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("ec77c71a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-742bc1d4\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Validator.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-742bc1d4\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Validator.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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

var listToStyles = __webpack_require__(15)

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

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
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
      styles = listToStyles(parentId, newList)
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
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

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
  var css = remove ? '' : obj.css

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
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
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


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);