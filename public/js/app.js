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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Validator_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Validator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Validator_vue__);
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
    errors: []
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
  props: ['text'],
  data: function data() {
    return {
      ruleType: '',
      rules: [],
      data: {}
    };
  },

  watch: {
    text: function text() {
      this.validate();
    }
  },
  methods: {
    addRule: function addRule() {
      this.rules.push({
        type: this.ruleType,
        data: this.data,
        errors: []
      });

      this.data = {};
      this.ruleType = '';
      this.validate();
    },
    removeRule: function removeRule(index) {
      this.rules.splice(index, 1);
      this.validate();
    },
    validate: function validate() {
      this.errors = [];

      for (var i = 0; i < this.rules.length; i++) {
        var rule = this.rules[i];

        var error = this[rule.type](rule.data);
        if (error) {
          this.errors.push(error);
        }
      }

      this.$emit('throw-errors', { errors: this.errors });
    },
    inRules: function inRules(ruleName) {
      return this.rules.findIndex(function (rule) {
        return rule.type === ruleName;
      }) != -1;
    },
    minLength: function minLength(data) {
      var text = this.text.trim();

      if (text.length < data.minLength) {
        return 'Minimum amount of characters is ' + data.minLength;
      }
    },
    maxLength: function maxLength(data) {
      var text = this.text.trim();

      if (text.length > data.maxLength) {
        return 'Maximum amount of characters is ' + data.maxLength;
      }
    },
    nthIsANumber: function nthIsANumber(data) {
      var text = this.text.trim();

      if (+text[data.position - 1] != text[data.position - 1]) {
        return 'The ' + data.position + ' character is always a number';
      }
    },
    nthIsALetter: function nthIsALetter(data) {
      var text = this.text.trim();

      if (!text[data.position - 1].match(/[a-z]/i)) {
        return 'The ' + data.position + ' character is always a letter';
      }
    },
    nthIs: function nthIs(data) {
      var text = this.text.trim();

      if (text[data.position - 1] != data.symbol) {
        return 'The ' + data.position + ' character is always the letter ' + data.symbol;
      }
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(4),
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-6 validator-wrapper"
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
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.ruleType = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("--Select rule--")]), _vm._v(" "), (!_vm.inRules('minLength')) ? _c('option', {
    attrs: {
      "value": "minLength"
    }
  }, [_vm._v("Minimum amount of characters")]) : _vm._e(), _vm._v(" "), (!_vm.inRules('maxLength')) ? _c('option', {
    attrs: {
      "value": "maxLength"
    }
  }, [_vm._v("Maximum amount of characters")]) : _vm._e(), _vm._v(" "), _c('option', {
    attrs: {
      "value": "nthIsANumber"
    }
  }, [_vm._v("The n-th character is always a number")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "nthIsALetter"
    }
  }, [_vm._v("The n-th character is always a letter")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "nthIs"
    }
  }, [_vm._v("N-th symbol is ...")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": _vm.ruleType == ''
    },
    on: {
      "click": _vm.addRule
    }
  }, [_vm._v("Add rule")])]), _vm._v(" "), (_vm.ruleType == 'minLength') ? [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Minimum amount of characters")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.minLength),
      expression: "data.minLength"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.data.minLength)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.minLength = $event.target.value
      }
    }
  })])] : _vm._e(), _vm._v(" "), (_vm.ruleType == 'maxLength') ? [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Maximum amount of characters")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.maxLength),
      expression: "data.maxLength"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.data.maxLength)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.maxLength = $event.target.value
      }
    }
  })])] : _vm._e(), _vm._v(" "), (_vm.ruleType == 'nthIsANumber') ? [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Symbol position")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.position),
      expression: "data.position"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.data.position)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.position = $event.target.value
      }
    }
  })])] : _vm._e(), _vm._v(" "), (_vm.ruleType == 'nthIsALetter') ? [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Symbol position")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.position),
      expression: "data.position"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.data.position)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.position = $event.target.value
      }
    }
  })])] : (_vm.ruleType == 'nthIs') ? [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Symbol position")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.position),
      expression: "data.position"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.data.position)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.position = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Symbol")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.symbol),
      expression: "data.symbol"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.data.symbol)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.symbol = $event.target.value
      }
    }
  })])] : _vm._e(), _vm._v(" "), (_vm.rules.length > 0) ? _c('div', {
    staticClass: "col-md-8"
  }, [_c('p', [_vm._v("Rules:")]), _vm._v(" "), _vm._l((_vm.rules), function(rule, index) {
    return _c('ul', [_c('li', [(rule.type == 'minLength') ? [_vm._v("\n          Minimum amount of characters is " + _vm._s(rule.data.minLength) + "\n        ")] : (rule.type == 'maxLength') ? [_vm._v("\n          Maximum amount of characters is " + _vm._s(rule.data.maxLength) + "\n        ")] : (rule.type == 'nthIsANumber') ? [_vm._v("\n          The " + _vm._s(rule.data.position) + " character is always a number\n        ")] : (rule.type == 'nthIsALetter') ? [_vm._v("\n          The " + _vm._s(rule.data.position) + " character is always a letter\n        ")] : (rule.type == 'nthIs') ? [_vm._v("\n          The " + _vm._s(rule.data.position) + " character is always the letter '" + _vm._s(rule.data.symbol) + "'\n        ")] : _vm._e(), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.removeRule(index)
        }
      }
    }, [_vm._v("X")])], 2)])
  })], 2) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-742bc1d4", module.exports)
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
exports.push([module.i, "\n.validator-wrapper {\n  border: 1px solid #b3b2b2;\n  padding: 20px 20px;\n}\n", ""]);

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("ec77c71a", content, false);
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
/* 9 */
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

var listToStyles = __webpack_require__(10)

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
/* 10 */
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


/***/ })
/******/ ]);