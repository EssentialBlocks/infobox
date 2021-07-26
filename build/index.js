(window["webpackJsonp_infobox"] = window["webpackJsonp_infobox"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_infobox"] = window["webpackJsonp_infobox"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/*! exports provided: apiVersion, name, title, category, description, supports, textdomain, editorScript, editorStyle, style, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"infobox/infobox\",\"title\":\"Infobox\",\"category\":\"widgets\",\"description\":\"Deliver your content beautifully to grab attention with an animated Infobox block.\",\"supports\":{\"html\":false},\"textdomain\":\"infobox\",\"editorScript\":\"file:./build/index.js\",\"editorStyle\":\"file:./build/index.css\",\"style\":\"file:./build/style-index.css\"}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js")):undefined}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    default: "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    default: "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  // isOverlay is to check if a overlay on the block's background should exist ⬇
  isOverlay: {
    type: "boolean",
    default: false
  },
  // this attribute is for selecting the desired design preset from the layout design presets options ⬇
  layoutPreset: {
    type: "string",
    default: "preset1"
  },
  // media attribute is for checking which of these (image / icon / number) is chosen for head top media ⬇
  media: {
    type: "string",
    default: "icon"
  },
  //
  numIconColor: {
    type: "string"
  },
  // should icon number background
  useNumIconBg: {
    type: "boolean",
    default: true
  },
  //
  numIconBgType: {
    type: "string",
    default: "gradient"
  },
  //
  numIconBgColor: {
    type: "string",
    default: "#0003"
  },
  //
  numIconBgGradient: {
    type: "string",
    default: "linear-gradient(45deg,#ffc2de,#ff46a1)"
  },
  //
  imageUrl: {
    source: "attribute",
    selector: ".eb-infobox-image",
    attribute: "src" // default: "https://source.unsplash.com/user/cristofer",

  },
  //
  imageId: {
    type: "string"
  },
  //
  mediaImgWidthUnit: {
    type: "string",
    default: "px"
  },
  mediaImgWidth: {
    type: "number",
    default: 300
  },
  TABmediaImgWidth: {
    type: "number"
  },
  MOBmediaImgWidth: {
    type: "number"
  },
  //
  isMediaImgHeightAuto: {
    type: "boolean",
    default: true
  },
  mediaImgHeightUnit: {
    type: "string",
    default: "px"
  },
  mediaImgHeight: {
    type: "number"
  },
  TABmediaImgHeight: {
    type: "number"
  },
  MOBmediaImgHeight: {
    type: "number"
  },
  //
  selectedIcon: {
    type: "string",
    source: "attribute",
    selector: ".eb-infobox-icon-data-selector",
    attribute: "data-icon",
    default: "far fa-gem" // default: "far fa-sun",

  },
  //
  number: {
    type: "number"
  },
  // this attribute is for checking whether subtitle should be shown or not ⬇
  enableSubTitle: {
    type: "boolean",
    default: false
  },
  //  this attribute is for checking whether content should be shown or not ⬇
  enableDescription: {
    type: "boolean",
    default: true
  },
  // this attribute is for checking whether a button should be shown or not ⬇
  enableButton: {
    type: "boolean",
    default: true
  },
  //
  buttonText: {
    type: "string",
    default: "Learn More"
  },
  //
  buttonTextColor: {
    type: "string"
  },
  //
  buttonBgColor: {
    type: "string"
  },
  //
  infoboxLink: {
    type: "string"
  },
  //
  title: {
    type: "text",
    selector: ".title",
    default: "This is an info box"
  },
  //
  titleColor: {
    type: "string"
  },
  //
  subTitle: {
    type: "text",
    selector: ".subtitle",
    default: "This is a Sub title"
  },
  //
  subTitleColor: {
    type: "string"
  },
  //
  description: {
    type: "text",
    selector: ".description",
    default: "Write a short description, that will describe the title or something informational and useful"
  },
  //
  descriptionColor: {
    type: "string"
  },
  //
  iconSize: {
    type: "number",
    default: 50
  },
  TABiconSize: {
    type: "number"
  },
  MOBiconSize: {
    type: "number"
  },
  // .infobox-wrapper-inner flex-direction
  flexDirection: {
    type: "string"
  },
  // .icon-img-wrapper align-self property
  mediaAlignSelf: {
    type: "string"
  },
  // .contents-wrapper text-alignment
  contentAlignment: {
    type: "string"
  },
  // .icon-img-wrapper margin
  mediaWrapperMargin: {
    type: "number",
    default: 20
  },
  //
  titleTag: {
    type: "string",
    default: "h2"
  },
  subTitleTag: {
    type: "string",
    default: "h3"
  },
  //
  mediaAlignment: {
    type: "string"
  },
  //
  contentsAlignment: {
    type: "string"
  }
}, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["mediaIconSize"], {
  defaultRange: 50
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["mediaImageWidth"], {
  defaultRange: 300
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["mediaImageHeight"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateTypographyAttributes"])(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__))), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["mediaBackground"], {
  top: 20,
  bottom: 20,
  right: 20,
  left: 20
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["mediaBgRadius"], {
  top: 20,
  bottom: 20,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["mediaBgMargin"], {
  top: 15,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["buttonPadding"], {
  top: 15,
  bottom: 15,
  right: 30,
  left: 30,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["buttonRadius"], {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["titlePadding"], {
  top: 10,
  bottom: 10,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["subTitlePadding"], {
  top: 10,
  bottom: 10,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["contentPadding"], {
  top: 10,
  bottom: 50,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["wrapperMargin"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["wrapperPadding"], {
  top: 50,
  bottom: 70,
  right: 30,
  left: 30,
  isLinked: false
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateBorderShadowAttributes"])(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_4__["wrpBdShadow"], {// bdrDefaults: {
  // 	top: 0,
  // 	bottom: 0,
  // 	right: 0,
  // 	left: 0,
  // },
  // rdsDefaults: {
  // 	top: 0,
  // 	bottom: 50,
  // 	right: 500,
  // 	left: 1000,
  // },
  // noShadow: true,
  // noBorder: true,
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["generateBackgroundAttributes"])(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__["infoWrapBg"], {
  isBgDefaultGradient: true,
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlay: true,
  // noMainBgi: true,
  // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

}));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/infobox-container.js":
/*!*********************************************!*\
  !*** ./src/components/infobox-container.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoboxContainer; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var RichText = wp.blockEditor.RichText;
function InfoboxContainer(_ref) {
  var requiredProps = _ref.requiredProps;
  var blockId = requiredProps.blockId,
      selectedIcon = requiredProps.selectedIcon,
      media = requiredProps.media,
      number = requiredProps.number,
      imageUrl = requiredProps.imageUrl,
      infoboxLink = requiredProps.infoboxLink,
      enableSubTitle = requiredProps.enableSubTitle,
      enableDescription = requiredProps.enableDescription,
      enableButton = requiredProps.enableButton,
      buttonText = requiredProps.buttonText,
      title = requiredProps.title,
      subTitle = requiredProps.subTitle,
      description = requiredProps.description,
      titleTag = requiredProps.titleTag,
      subTitleTag = requiredProps.subTitleTag;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(blockId, " eb-infobox-wrapper")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-icon number-or-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "data-icon": selectedIcon,
    className: "eb-infobox-icon-data-selector  ".concat(selectedIcon)
  }))) : null, media === "number" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-image-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "eb-infobox-image",
    src: imageUrl,
    alt: "macbook"
  }))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "contents-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: titleTag,
    className: "title",
    value: title
  }), enableSubTitle ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle
  }) : null, enableDescription ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: "p",
    className: "description",
    value: description
  }) : null, enableButton ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-btn-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: infoboxLink,
    className: "infobox-btn"
  }, buttonText)) : null)));
}

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/*! exports provided: infoWrapBg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoWrapBg", function() { return infoWrapBg; });
// each and every const here has to be totally unique from one another
var infoWrapBg = "wrp_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/*! exports provided: wrpBdShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrpBdShadow", function() { return wrpBdShadow; });
var wrpBdShadow = "wrp_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/*! exports provided: mediaBackground, mediaBgRadius, mediaBgMargin, buttonPadding, buttonRadius, titlePadding, subTitlePadding, contentPadding, wrapperMargin, wrapperPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaBackground", function() { return mediaBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaBgRadius", function() { return mediaBgRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaBgMargin", function() { return mediaBgMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonPadding", function() { return buttonPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonRadius", function() { return buttonRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titlePadding", function() { return titlePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTitlePadding", function() { return subTitlePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentPadding", function() { return contentPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperMargin", function() { return wrapperMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperPadding", function() { return wrapperPadding; });
// each and every const here has to be totally unique from one another
var mediaBackground = "mediaBgSize";
var mediaBgRadius = "mediaBgRadius";
var mediaBgMargin = "mediaBgMargin";
var buttonPadding = "buttonPadding";
var buttonRadius = "buttonRadius";
var titlePadding = "titlePadding";
var subTitlePadding = "subTitlePadding";
var contentPadding = "contentPadding";
var wrapperMargin = "wrapperMargin";
var wrapperPadding = "wrapperPadding"; // export const wrp_border = "WRPborder";
// export const wrp_radius = "WRPradius";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: LAYOUT_TYPES, MEDIA_TYPES, CONTENTS_ALIGNMENTS, MEDIA_ALIGNMENTS_ON_FLEX_COLUMN, MEDIA_ALIGNMENTS_ON_FLEX_ROW, ICON_IMAGE_BG_TYPES, sizeUnitTypes, HEADER_TAGS, BACKGROUND_TYPES, BACKGROUND_SIZES, BORDER_STYLES, SHADOW_HOVER_OPTIONS, LETTER_SPACING_LINE_HEIGHT_UNITS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPES", function() { return LAYOUT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_TYPES", function() { return MEDIA_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENTS_ALIGNMENTS", function() { return CONTENTS_ALIGNMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ALIGNMENTS_ON_FLEX_COLUMN", function() { return MEDIA_ALIGNMENTS_ON_FLEX_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ALIGNMENTS_ON_FLEX_ROW", function() { return MEDIA_ALIGNMENTS_ON_FLEX_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_IMAGE_BG_TYPES", function() { return ICON_IMAGE_BG_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_TAGS", function() { return HEADER_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_TYPES", function() { return BACKGROUND_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_SIZES", function() { return BACKGROUND_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHADOW_HOVER_OPTIONS", function() { return SHADOW_HOVER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LETTER_SPACING_LINE_HEIGHT_UNITS", function() { return LETTER_SPACING_LINE_HEIGHT_UNITS; });
var __ = wp.i18n.__;
var LAYOUT_TYPES = [{
  label: __("Preset 1"),
  value: "preset1"
}, {
  label: __("Preset 2"),
  value: "preset2"
}, {
  label: __("Preset 3"),
  value: "preset3"
}, {
  label: __("Preset 4"),
  value: "preset4"
}];
var MEDIA_TYPES = ["image", "icon", "number", "none"];
var CONTENTS_ALIGNMENTS = [{
  label: __("Left"),
  value: "left"
}, {
  label: __("Center"),
  value: "center"
}, {
  label: __("Right"),
  value: "right"
}];
var MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [{
  label: __("Left"),
  value: "flex-start"
}, {
  label: __("Center"),
  value: "center"
}, {
  label: __("Right"),
  value: "flex-end"
}];
var MEDIA_ALIGNMENTS_ON_FLEX_ROW = [{
  label: __("Top"),
  value: "flex-start"
}, {
  label: __("Middle"),
  value: "center"
}, {
  label: __("Bottom"),
  value: "flex-end"
}];
var ICON_IMAGE_BG_TYPES = [{
  label: "Fill",
  value: "fill"
}, {
  label: "Gradient",
  value: "gradient"
}];
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];
var BACKGROUND_TYPES = [{
  label: __("Fill"),
  value: "fill"
}, {
  label: __("Gradient"),
  value: "gradient"
}, {
  label: __("Image"),
  value: "image"
}];
var BACKGROUND_SIZES = [{
  label: __("Auto"),
  value: "auto"
}, {
  label: __("Cover"),
  value: "cover"
}, {
  label: __("Contain"),
  value: "contain"
}];
var BORDER_STYLES = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Dashed"),
  value: "dashed"
}, {
  label: __("Solid"),
  value: "solid"
}, {
  label: __("Dotted"),
  value: "dotted"
}, {
  label: __("Double"),
  value: "double"
}, {
  label: __("Groove"),
  value: "groove"
}, {
  label: __("Inset"),
  value: "inset"
}, {
  label: __("Outset"),
  value: "outset"
}, {
  label: __("Ridge"),
  value: "ridge"
}];
var SHADOW_HOVER_OPTIONS = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
var LETTER_SPACING_LINE_HEIGHT_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/*! exports provided: mediaIconSize, mediaImageWidth, mediaImageHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaIconSize", function() { return mediaIconSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaImageWidth", function() { return mediaImageWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaImageHeight", function() { return mediaImageHeight; });
var mediaIconSize = "mIconZ";
var mediaImageWidth = "mImgW";
var mediaImageHeight = "mImgH";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/*! exports provided: typoPrefix_number, typoPrefix_title, typoPrefix_subTitle, typoPrefix_content, typoPrefix_buttonText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_number", function() { return typoPrefix_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_title", function() { return typoPrefix_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_subTitle", function() { return typoPrefix_subTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_content", function() { return typoPrefix_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_buttonText", function() { return typoPrefix_buttonText; });
// each and every const here has to be totally unique from one another
var typoPrefix_number = "number";
var typoPrefix_title = "title";
var typoPrefix_subTitle = "subTitle";
var typoPrefix_content = "content";
var typoPrefix_buttonText = "buttonText";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    useBlockProps = _wp$blockEditor.useBlockProps,
    MediaUpload = _wp$blockEditor.MediaUpload,
    RichText = _wp$blockEditor.RichText;
var Button = wp.components.Button;
var useEffect = wp.element.useEffect;
var select = wp.data.select;
/**
 * Internal dependencies
 */










var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      clientId = _ref.clientId;
  var resOption = attributes.resOption,
      blockMeta = attributes.blockMeta,
      blockId = attributes.blockId,
      isOverlay = attributes.isOverlay,
      selectedIcon = attributes.selectedIcon,
      media = attributes.media,
      _attributes$number = attributes.number,
      number = _attributes$number === void 0 ? 0 : _attributes$number,
      imageUrl = attributes.imageUrl,
      infoboxLink = attributes.infoboxLink,
      enableSubTitle = attributes.enableSubTitle,
      enableDescription = attributes.enableDescription,
      enableButton = attributes.enableButton,
      buttonText = attributes.buttonText,
      title = attributes.title,
      subTitle = attributes.subTitle,
      description = attributes.description,
      titleTag = attributes.titleTag,
      subTitleTag = attributes.subTitleTag,
      imageId = attributes.imageId,
      iconSize = attributes.iconSize,
      TABiconSize = attributes.TABiconSize,
      MOBiconSize = attributes.MOBiconSize,
      flexDirection = attributes.flexDirection,
      mediaAlignSelf = attributes.mediaAlignSelf,
      contentAlignment = attributes.contentAlignment,
      mediaWrapperMargin = attributes.mediaWrapperMargin,
      useNumIconBg = attributes.useNumIconBg,
      numIconColor = attributes.numIconColor,
      numIconBgType = attributes.numIconBgType,
      numIconBgColor = attributes.numIconBgColor,
      numIconBgGradient = attributes.numIconBgGradient,
      mediaImgWidthUnit = attributes["".concat(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__["mediaImageWidth"], "Unit")],
      TABmediaImgWidthUnit = attributes["TAB".concat(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__["mediaImageWidth"], "Unit")],
      MOBmediaImgWidthUnit = attributes["MOB".concat(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__["mediaImageWidth"], "Unit")],
      mediaImgWidth = attributes.mediaImgWidth,
      TABmediaImgWidth = attributes.TABmediaImgWidth,
      MOBmediaImgWidth = attributes.MOBmediaImgWidth,
      isMediaImgHeightAuto = attributes.isMediaImgHeightAuto,
      mediaImgHeightUnit = attributes.mediaImgHeightUnit,
      mediaImgHeight = attributes.mediaImgHeight,
      TABmediaImgHeight = attributes.TABmediaImgHeight,
      MOBmediaImgHeight = attributes.MOBmediaImgHeight,
      _attributes$buttonTex = attributes.buttonTextColor,
      buttonTextColor = _attributes$buttonTex === void 0 ? "#30267A" : _attributes$buttonTex,
      _attributes$titleColo = attributes.titleColor,
      titleColor = _attributes$titleColo === void 0 ? "#fff" : _attributes$titleColo,
      _attributes$subTitleC = attributes.subTitleColor,
      subTitleColor = _attributes$subTitleC === void 0 ? "#fff" : _attributes$subTitleC,
      _attributes$descripti = attributes.descriptionColor,
      descriptionColor = _attributes$descripti === void 0 ? "#fff" : _attributes$descripti,
      _attributes$buttonBgC = attributes.buttonBgColor,
      buttonBgColor = _attributes$buttonBgC === void 0 ? "#E1D8FF" : _attributes$buttonBgC,
      mediaAlignment = attributes.mediaAlignment,
      contentsAlignment = attributes.contentsAlignment; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  useEffect(function () {
    setAttributes({
      resOption: select("core/edit-post").__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for creating a unique blockId for each block's unique className

  useEffect(function () {
    var BLOCK_PREFIX = "eb-infobox";
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["duplicateBlockIdFix"])({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: select,
      clientId: clientId
    });
  }, []); // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button

  useEffect(function () {
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mimmikCssForPreviewBtnClick"])({
      domObj: document,
      select: select
    });
  }, []);
  var blockProps = useBlockProps({
    className: "eb-guten-block-main-parent-wrapper"
  }); //
  // styling codes starts from here
  //

  var _generateTypographySt = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__["typoPrefix_title"],
    defaultFontSize: 26
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__["typoPrefix_subTitle"],
    defaultFontSize: 22
  }),
      subTitleTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      subTitleTypoStylesTab = _generateTypographySt2.typoStylesTab,
      subTitleTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  var _generateTypographySt3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__["typoPrefix_content"],
    defaultFontSize: 20
  }),
      contentTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
      contentTypoStylesTab = _generateTypographySt3.typoStylesTab,
      contentTypoStylesMobile = _generateTypographySt3.typoStylesMobile;

  var _generateTypographySt4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__["typoPrefix_buttonText"],
    defaultFontSize: 20
  }),
      buttonTypoStylesDesktop = _generateTypographySt4.typoStylesDesktop,
      buttonTypoStylesTab = _generateTypographySt4.typoStylesTab,
      buttonTypoStylesMobile = _generateTypographySt4.typoStylesMobile;

  var _generateTypographySt5 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_4__["typoPrefix_number"],
    defaultFontSize: 28
  }),
      numTypoStylesDesktop = _generateTypographySt5.typoStylesDesktop,
      numTypoStylesTab = _generateTypographySt5.typoStylesTab,
      numTypoStylesMobile = _generateTypographySt5.typoStylesMobile;

  var _generateDimensionsCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["mediaBackground"],
    styleFor: "padding"
  }),
      mediaBgPaddingDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      mediaBgPaddingTab = _generateDimensionsCo.dimensionStylesTab,
      mediaBgPaddingMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["mediaBgRadius"],
    styleFor: "border-radius"
  }),
      mediaRadiusStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      mediaRadiusStylesTab = _generateDimensionsCo2.dimensionStylesTab,
      mediaRadiusStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var _generateDimensionsCo3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["mediaBgMargin"],
    styleFor: "margin"
  }),
      mediaBgMarginStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
      mediaBgMarginStylesTab = _generateDimensionsCo3.dimensionStylesTab,
      mediaBgMarginStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

  var _generateDimensionsCo4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["buttonPadding"],
    styleFor: "padding"
  }),
      buttonPaddingStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
      buttonPaddingStylesTab = _generateDimensionsCo4.dimensionStylesTab,
      buttonPaddingStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

  var _generateDimensionsCo5 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["buttonRadius"],
    styleFor: "border-radius"
  }),
      buttonRadiusStylesDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
      buttonRadiusStylesTab = _generateDimensionsCo5.dimensionStylesTab,
      buttonRadiusStylesMobile = _generateDimensionsCo5.dimensionStylesMobile;

  var _generateDimensionsCo6 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["titlePadding"],
    styleFor: "padding"
  }),
      titlePaddingStylesDesktop = _generateDimensionsCo6.dimensionStylesDesktop,
      titlePaddingStylesTab = _generateDimensionsCo6.dimensionStylesTab,
      titlePaddingStylesMobile = _generateDimensionsCo6.dimensionStylesMobile;

  var _generateDimensionsCo7 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["subTitlePadding"],
    styleFor: "padding"
  }),
      subTitlePaddingStylesDesktop = _generateDimensionsCo7.dimensionStylesDesktop,
      subTitlePaddingStylesTab = _generateDimensionsCo7.dimensionStylesTab,
      subTitlePaddingStylesMobile = _generateDimensionsCo7.dimensionStylesMobile;

  var _generateDimensionsCo8 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["contentPadding"],
    styleFor: "padding"
  }),
      contentPaddingStylesDesktop = _generateDimensionsCo8.dimensionStylesDesktop,
      contentPaddingStylesTab = _generateDimensionsCo8.dimensionStylesTab,
      contentPaddingStylesMobile = _generateDimensionsCo8.dimensionStylesMobile;

  var _generateDimensionsCo9 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["wrapperPadding"],
    styleFor: "padding"
  }),
      wrapperPaddingStylesDesktop = _generateDimensionsCo9.dimensionStylesDesktop,
      wrapperPaddingStylesTab = _generateDimensionsCo9.dimensionStylesTab,
      wrapperPaddingStylesMobile = _generateDimensionsCo9.dimensionStylesMobile;

  var _generateDimensionsCo10 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_5__["wrapperMargin"],
    styleFor: "margin"
  }),
      wrapperMarginStylesDesktop = _generateDimensionsCo10.dimensionStylesDesktop,
      wrapperMarginStylesTab = _generateDimensionsCo10.dimensionStylesTab,
      wrapperMarginStylesMobile = _generateDimensionsCo10.dimensionStylesMobile;

  var _generateBackgroundCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateBackgroundControlStyles"])({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_6__["infoWrapBg"] // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      backgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      hoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
      backgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      hoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
      backgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      hoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
      overlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
      hoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
      overlayStylesTab = _generateBackgroundCo.overlayStylesTab,
      hoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
      overlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
      hoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
      bgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
      ovlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle;

  var _generateBorderShadow = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateBorderShadowStyles"])({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_7__["wrpBdShadow"],
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      bdShadowStyesDesktop = _generateBorderShadow.styesDesktop,
      bdShadowStyesTab = _generateBorderShadow.styesTab,
      bdShadowStyesMobile = _generateBorderShadow.styesMobile,
      bdShadowStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
      bdShadowStylesHoverTab = _generateBorderShadow.stylesHoverTab,
      bdShadowStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
      bdShadowTransitionStyle = _generateBorderShadow.transitionStyle;

  var _generateResponsiveRa = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__["mediaIconSize"],
    customUnit: "px",
    property: "font-size",
    attributes: attributes
  }),
      iconSizeDesktop = _generateResponsiveRa.rangeStylesDesktop,
      iconSizeTab = _generateResponsiveRa.rangeStylesTab,
      iconSizeMobile = _generateResponsiveRa.rangeStylesMobile;

  var _generateResponsiveRa2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__["mediaImageHeight"],
    property: "height",
    attributes: attributes
  }),
      mediaImgHeightDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      mediaImgHeightTab = _generateResponsiveRa2.rangeStylesTab,
      mediaImgHeightMobile = _generateResponsiveRa2.rangeStylesMobile;

  var _generateResponsiveRa3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_8__["mediaImageWidth"],
    property: "width",
    attributes: attributes
  }),
      mediaImgWidthDesktop = _generateResponsiveRa3.rangeStylesDesktop,
      mediaImgWidthTab = _generateResponsiveRa3.rangeStylesTab,
      mediaImgWidthMobile = _generateResponsiveRa3.rangeStylesMobile;

  var wrapperStylesDesktop = "\n\t\t.eb-infobox-wrapper.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t\t").concat(wrapperPaddingStylesDesktop, "\n\t\t\t").concat(bdShadowStyesDesktop, "\n\t\t\t").concat(backgroundStylesDesktop, "\n\t\t\toverflow: hidden;\n\t\t\ttransition: ").concat(bgTransitionStyle, ", ").concat(bdShadowTransitionStyle, ";\n\t\t}\n\n\t\t.eb-infobox-wrapper.").concat(blockId, ":hover{\t\n\t\t\t").concat(hoverBackgroundStylesDesktop, "\n\t\t\t").concat(bdShadowStylesHoverDesktop, "\n\t\t}\n\t\t\n\t\t.eb-infobox-wrapper.").concat(blockId, ":before{\n\t\t\t").concat(overlayStylesDesktop, "\n\t\t\ttransition: ").concat(ovlTransitionStyle, ";\n\t\t}\n\n\t\t.eb-infobox-wrapper.").concat(blockId, ":hover:before{\t\n\t\t\t").concat(hoverOverlayStylesDesktop, "\n\t\t}\n\n\t");
  var wrapperStylesTab = "\n\t\t.eb-infobox-wrapper.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginStylesTab, "\n\t\t\t").concat(wrapperPaddingStylesTab, "\n\t\t\t").concat(backgroundStylesTab, "\n\t\t\t").concat(bdShadowStyesTab, "\n\t\t}\n\n\t\t.eb-infobox-wrapper.").concat(blockId, ":hover{\t\t\n\t\t\t").concat(hoverBackgroundStylesTab, "\n\t\t\t").concat(bdShadowStylesHoverTab, "\n\t\t}\n\n\t\t\n\t\t.eb-infobox-wrapper.").concat(blockId, ":before{\n\t\t\t").concat(overlayStylesTab, "\n\t\t}\n\n\t\t.eb-infobox-wrapper.").concat(blockId, ":hover:before{\t\n\t\t\t").concat(hoverOverlayStylesTab, "\n\t\t}\n\t");
  var wrapperStylesMobile = "\n\t\t.eb-infobox-wrapper.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginStylesMobile, "\n\t\t\t").concat(wrapperPaddingStylesMobile, "\t\t\t\n\t\t\t").concat(backgroundStylesMobile, "\n\t\t\t").concat(bdShadowStyesMobile, "\n\t\t}\n\n\t\t.eb-infobox-wrapper.").concat(blockId, ":hover{\n\t\t\t").concat(hoverBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStylesHoverMobile, "\n\t\t}\n\n\t\t.eb-infobox-wrapper.").concat(blockId, ":before{\n\t\t\t").concat(overlayStylesMobile, "\n\t\t}\n\n\t\t\n\t\t.eb-infobox-wrapper.").concat(blockId, ":hover:before{\t\n\t\t\t").concat(hoverOverlayStylesMobile, "\n\t\t}\n\t");
  var wrapperInnerStylesDesktop = "\t\n\t\t.eb-infobox-wrapper.".concat(blockId, " .infobox-wrapper-inner {\n\t\t\tdisplay: flex;\n\t\t\tposition: relative;\n\t\t\t").concat(flexDirection ? "flex-direction: ".concat(flexDirection, ";") : " ", " \n\t\t}\n\t");
  var mediaStylesDesktop = "\n\t".concat(media !== "none" ? "\n\t\t\t.eb-infobox-wrapper.".concat(blockId, " .icon-img-wrapper {\n\t\t\t\t").concat(mediaAlignment ? "align-self: ".concat(mediaAlignment, ";") : "align-self: ".concat(mediaAlignSelf || "center", ";"), "\n\n\t\t\t\t").concat(mediaBgMarginStylesDesktop, "\n\n\t\t\t\t").concat(flexDirection === "row" ? "margin-right: ".concat(mediaWrapperMargin, "px;") : flexDirection === "row-reverse" ? "margin-left: ".concat(mediaWrapperMargin, "px;") : flexDirection === "column" ? "margin-bottom: ".concat(mediaWrapperMargin, "px;") : flexDirection === "column-reverse" ? "margin-top: ".concat(mediaWrapperMargin, "px;") : " ", "\n\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\n\n\t\t\t").concat(media === "image" ? "\n\n\t\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .infobox-wrapper-inner .icon-img-wrapper{\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t\t").concat(mediaImgWidthUnit === "%" ? mediaImgWidthDesktop : " ", "\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.eb-infobox-wrapper.").concat(blockId, " .infobox-wrapper-inner img {\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t\tobject-fit: cover;\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t").concat(imageUrl ? mediaRadiusStylesDesktop : " ", "\n\t\t\t\t\t\t\n\t\t\t\t\t\t").concat(mediaImgWidthUnit === "%" ? "width: 100%;" : mediaImgWidthDesktop, "\n\t\t\t\t\t\t").concat(isMediaImgHeightAuto ? "height:auto;" : mediaImgHeightDesktop, "\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\n\t\t\t\t\t.eb-infobox-wrapper.").concat(blockId, " .eb-infobox-image-wrapper{\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t").concat(imageUrl ? " " : mediaRadiusStylesDesktop, "\n\t\t\t\t\t}\n\t\t\t\t\t") : " ", "\n\n\n\n\t\t\t").concat(media === "number" || media === "icon" ? "\n\t\t\t\t\n\t\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .number-or-icon {\n\t\t\t\t\t\n\t\t\t\t\t\t").concat(mediaBgPaddingDesktop, "\n\t\t\t\t\t\t").concat(mediaRadiusStylesDesktop, "\n\t\t\n\t\t\t\t\t\t").concat(useNumIconBg ? "".concat(numIconBgType === "fill" ? "background-color: ".concat(numIconBgColor, ";") : numIconBgType === "gradient" ? "background-image: ".concat(numIconBgGradient, ";") : " ") : " ", "\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t.eb-infobox-wrapper.").concat(blockId, " .number-or-icon > span{\n\t\t\t\t\t\tcolor: ").concat(numIconColor || "#fff", ";\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t") : " ", "\n\n\t\t\n\n\t\t\t").concat(media === "number" ? "\n\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " span.eb-infobox-number{\n\t\t\t\t\t").concat(numTypoStylesDesktop, "\n\t\t\t\t}\t\t\t\t\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t").concat(media === "icon" ? "\n\t\t\t\t\n\t\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .icon-img-wrapper .eb-infobox-icon-data-selector {\n\t\t\t\t\t\t").concat(iconSizeDesktop, "\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\n\t\t\t\t\t") : " ", "\n\n\n\t\t") : " ", "\n\n\t");
  var mediaStylesTab = "\n\t".concat(media !== "none" ? "\n\n\t\t\t.eb-infobox-wrapper.".concat(blockId, " .icon-img-wrapper {\n\n\t\t\t\t").concat(mediaBgMarginStylesTab, "\t\t\t\t\n\t\t\t}\n\n\t\t\t").concat(media === "number" || media === "icon" ? "\n\t\t\t\n\t\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .number-or-icon {\n\t\t\t\t\t\t").concat(mediaRadiusStylesTab, "\n\t\t\t\t\t\t").concat(mediaBgPaddingTab, "\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t") : " ", "\n\n\n\t\t\t").concat(media === "number" ? "\n\n\t\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " span.eb-infobox-number{\n\t\t\t\t\t\t").concat(numTypoStylesTab, "\n\t\t\t\t\t}\t\t\t\t\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t\n\t\t\t").concat(media === "icon" ? "\n\t\t\t\t\n\t\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .icon-img-wrapper .eb-infobox-icon-data-selector {\n\t\t\t\t\t\t").concat(iconSizeTab, "\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t\n\t\t\t").concat(media === "image" ? "\n\t\t\t\t\t\t\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .infobox-wrapper-inner .icon-img-wrapper{\n\t\t\t\t\t").concat(TABmediaImgWidthUnit === "%" ? mediaImgWidthTab : mediaImgWidthUnit === "%" ? "width: auto;" : " ", "\n\t\t\t\t}\n\n\t\t\t\t.eb-infobox-wrapper.").concat(blockId, " .infobox-wrapper-inner img {\n\t\t\t\t\t\n\t\t\t\t\t").concat(TABmediaImgWidthUnit === "%" ? mediaImgWidthUnit === "%" ? " " : "width: 100%;" : mediaImgWidthTab, "\n\t\t\t\t\t\n\t\t\t\t\t").concat(isMediaImgHeightAuto ? "height:auto;" : mediaImgHeightTab, "\n\t\t\t\t\t\n\t\t\t\t}\n\n\t\t\t\t\n\t\t\t\t.eb-infobox-wrapper.").concat(blockId, " .eb-infobox-image-wrapper{\n\t\t\t\t\t").concat(mediaRadiusStylesTab, "\n\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\n\n\n\t\t") : " ", "\n\t\n\t");
  var mediaStylesMobile = "\n\t".concat(media !== "none" ? "\n\n\t\t\t.eb-infobox-wrapper.".concat(blockId, " .icon-img-wrapper {\n\t\t\t\t\n\t\t\t\t").concat(mediaBgMarginStylesMobile, "\n\t\t\t}\n\n\t\t\t").concat(media === "number" || media === "icon" ? "\n\n\t\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .number-or-icon {\n\t\t\t\t\t\t").concat(mediaRadiusStylesMobile, "\n\t\t\t\t\t\t").concat(mediaBgPaddingMobile, "\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t") : " ", "\n\n\t\t\t").concat(media === "number" ? "\n\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " span.eb-infobox-number{\n\t\t\t\t\t").concat(numTypoStylesMobile, "\n\t\t\t\t}\t\t\t\t\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t").concat(media === "icon" ? "\n\n\t\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .icon-img-wrapper .eb-infobox-icon-data-selector {\n\t\t\t\t\t\t").concat(iconSizeMobile, "\n\t\t\t\t\t}\t\t\t\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t\n\t\t\t\n\t\t\t").concat(media === "image" ? "\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .infobox-wrapper-inner .icon-img-wrapper{\n\t\t\t\t\t").concat(MOBmediaImgWidthUnit === "%" ? mediaImgWidthMobile : TABmediaImgWidthUnit === "%" ? "width: auto;" : " ", "\n\t\t\t\t}\n\n\t\t\t\t\n\t\t\t\t.eb-infobox-wrapper.").concat(blockId, " .infobox-wrapper-inner img {\n\t\t\t\t\t\n\t\t\t\t\t").concat(MOBmediaImgWidthUnit === "%" ? TABmediaImgWidthUnit === "%" ? " " : "width: 100%;" : mediaImgWidthMobile, "\n\t\t\t\t\t\n\t\t\t\t\t").concat(isMediaImgHeightAuto ? "height:auto;" : mediaImgHeightMobile, "\n\n\t\t\t\t}\n\n\t\t\t\t\n\t\t\t\t.eb-infobox-wrapper.").concat(blockId, " .eb-infobox-image-wrapper{\n\t\t\t\t\t").concat(mediaRadiusStylesMobile, "\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\n\n\t\t") : " ", "\n\t\t\n\t\n\t");
  var contentStylesDesktop = "\n\t\t.eb-infobox-wrapper.".concat(blockId, " .contents-wrapper {\n\t\t\tflex: 1;\n\t\t\t").concat(contentAlignment ? "text-align: ".concat(contentAlignment, ";") : " ", " \n\n\t\t\t").concat(contentsAlignment ? "text-align: ".concat(contentsAlignment, ";") : "text-align: ".concat(contentAlignment, ";"), "\n\t\t}\n\n\t\t.eb-infobox-wrapper.").concat(blockId, " .title {\n\t\t\tmargin: 0;\n\t\t\tpadding: 10px 0;\n\t\t\t").concat(titleTypoStylesDesktop, "\n\t\t\t").concat(titlePaddingStylesDesktop, "\n\t\t\t").concat(titleColor ? "color: ".concat(titleColor, ";") : " ", "\n\t\t}\n\n\t\t").concat(enableSubTitle ? "\t\t\t\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .subtitle {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 10px 0;\n\t\t\t\t\t").concat(subTitleTypoStylesDesktop, "\n\t\t\t\t\t").concat(subTitlePaddingStylesDesktop, "\n\t\t\t\t\t").concat(subTitleColor ? "color: ".concat(subTitleColor, ";") : " ", "\n\t\t\t\t}\t\t\t\n\t\t\t\t") : " ", "\n\t\t\n\t\t").concat(enableDescription ? "\n\t\t\t\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .description {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 10px 0;\n\t\t\t\t\t").concat(contentTypoStylesDesktop, "\n\t\t\t\t\t").concat(contentPaddingStylesDesktop, "\n\t\t\t\t\t").concat(descriptionColor ? "color: ".concat(descriptionColor, ";") : " ", "\n\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\n\t\t").concat(enableButton ? "\n\t\t\t\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " a{\n\t\t\t\t\ttext-decoration:none;\n\t\t\t\t}\n\n\t\t\t\t.eb-infobox-wrapper.").concat(blockId, " .contents-wrapper .infobox-btn{\n\t\t\t\t\t").concat(buttonTypoStylesDesktop, "\n\t\t\t\t\t").concat(buttonPaddingStylesDesktop, "\n\t\t\t\t\t").concat(buttonRadiusStylesDesktop, "\n\t\t\t\t\t\n\t\t\t\t\t").concat(buttonBgColor ? "background-color: ".concat(buttonBgColor, ";") : " ", "\n\t\t\t\t\t").concat(buttonTextColor ? "color: ".concat(buttonTextColor, ";") : " ", "\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\n\t");
  var contentStylesTab = "\n\t\t.eb-infobox-wrapper.".concat(blockId, " .title {\n\t\t\t").concat(titleTypoStylesTab, "\n\t\t\t").concat(titlePaddingStylesTab, "\n\n\t\t}\n\t\t\n\t\t").concat(enableSubTitle ? "\t\t\t\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .subtitle {\n\t\t\t\t\t").concat(subTitleTypoStylesTab, "\n\t\t\t\t\t").concat(subTitlePaddingStylesTab, "\n\t\t\n\t\t\t\t}\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t").concat(enableDescription ? "\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .description {\n\t\t\t\t\t").concat(contentTypoStylesTab, "\n\t\t\t\t\t").concat(contentPaddingStylesTab, "\n\t\t\n\t\t\t\t}\t\t\t\t\n\t\t\t\t") : " ", "\n\t\t\n\t\t").concat(enableButton ? "\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .contents-wrapper .infobox-btn{\n\t\t\t\t\t").concat(buttonTypoStylesTab, "\n\t\t\t\t\t").concat(buttonPaddingStylesTab, "\n\t\t\t\t\t").concat(buttonRadiusStylesTab, "\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\t\n\t");
  var contentStylesMobile = "\n\t\t.eb-infobox-wrapper.".concat(blockId, " .title {\n\t\t\t").concat(titleTypoStylesMobile, "\n\t\t\t").concat(titlePaddingStylesMobile, "\n\n\t\t}\n\t\t\n\t\t").concat(enableSubTitle ? "\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .subtitle {\n\t\t\t\t\t").concat(subTitleTypoStylesMobile, "\n\t\t\t\t\t").concat(subTitlePaddingStylesMobile, "\n\t\t\n\t\t\t\t}\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t").concat(enableDescription ? "\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .description {\n\t\t\t\t\t").concat(contentTypoStylesMobile, "\n\t\t\t\t\t").concat(contentPaddingStylesMobile, "\n\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\t\t\n\t\t").concat(enableButton ? "\n\t\t\t\n\t\t\t\t.eb-infobox-wrapper.".concat(blockId, " .contents-wrapper .infobox-btn{\n\t\t\t\t\t").concat(buttonTypoStylesMobile, "\n\t\t\t\t\t").concat(buttonPaddingStylesMobile, "\n\t\t\t\t\t").concat(buttonRadiusStylesMobile, "\n\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\t\t\n\t\t\n\n\t"); // all css styles for large screen width (desktop/laptop) in strings ⬇

  var desktopAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["softMinifyCssStrings"])("\t\t\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(wrapperStylesDesktop) ? wrapperStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(wrapperInnerStylesDesktop) ? wrapperInnerStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(mediaStylesDesktop) ? mediaStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(contentStylesDesktop) ? contentStylesDesktop : " ", "\t\n\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["softMinifyCssStrings"])("\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(wrapperStylesTab) ? wrapperStylesTab : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(mediaStylesTab) ? mediaStylesTab : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(contentStylesTab) ? contentStylesTab : " ", "\n\t\t\n\t\t\n\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["softMinifyCssStrings"])("\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(wrapperStylesMobile) ? wrapperStylesMobile : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(mediaStylesMobile) ? mediaStylesMobile : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["isCssExists"])(contentStylesMobile) ? contentStylesMobile : " ", "\n\t\n\t")); // Set All Style in "blockMeta" Attribute

  useEffect(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  return [isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), // Edit view
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["softMinifyCssStrings"])(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["softMinifyCssStrings"])(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(blockId, " eb-infobox-wrapper")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-icon number-or-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "data-icon": selectedIcon,
    className: "eb-infobox-icon-data-selector  ".concat(selectedIcon)
  }))) : null, media === "number" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-image-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref2) {
      var id = _ref2.id,
          url = _ref2.url;
      return setAttributes({
        imageUrl: url,
        imageId: id
      });
    },
    type: "image",
    value: imageId,
    render: function render(_ref3) {
      var open = _ref3.open;

      if (!imageUrl) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "eb-infobox-img-btn components-button",
          label: __("Upload Image"),
          icon: "format-image",
          onClick: open
        });
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          className: "eb-infobox-image",
          src: imageUrl
        });
      }
    }
  }))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "contents-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: titleTag,
    className: "title",
    value: title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  }), enableSubTitle ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle,
    onChange: function onChange(subTitle) {
      return setAttributes({
        subTitle: subTitle
      });
    }
  }) : null, enableDescription ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "p",
    className: "description",
    value: description,
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    }
  }) : null, enableButton ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-btn-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: infoboxLink // style={{ pointerEvents: "none" }}
    ,
    className: "infobox-btn"
  }, buttonText)) : null))))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var example = {
  attributes: {
    layoutPreset: "preset2",
    flexDirection: "column",
    contentAlignment: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/icons */ "./util/icons.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../block.json */ "./block.json", 1);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example */ "./src/example.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Internal dependencies
 */








var name = _block_json__WEBPACK_IMPORTED_MODULE_4__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_4__.category;
registerBlockType(name, {
  apiVersion: 2,
  title: __("Infobox", "block"),
  description: __("Deliver your content beautifully to grab attention with an animated Infobox block.", "block"),
  category: category,
  keywords: [__("EB infobox", "essential-blocks"), __("info box", "essential-blocks"), __("infobox block", "essential-blocks")],
  icon: _util_icons__WEBPACK_IMPORTED_MODULE_0__["InfoboxIcon"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_faIcons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/faIcons.js */ "./util/faIcons.js");
/* harmony import */ var _util_typography_control_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/typography-control-v2 */ "./util/typography-control-v2/index.js");
/* harmony import */ var _util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _util_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/responsive-range-control */ "./util/responsive-range-control/index.js");
/* harmony import */ var _util_image_avatar___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/image-avatar/ */ "./util/image-avatar/index.js");
/* harmony import */ var _util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_border_shadow_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/border-shadow-control */ "./util/border-shadow-control/index.js");
/* harmony import */ var _util_background_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/background-control */ "./util/background-control/index.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var useEffect = wp.element.useEffect;
var select = wp.data.select;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    TabPanel = _wp$components.TabPanel;
/**
 * Internal dependencies
 */




















function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var resOption = attributes.resOption,
      layoutPreset = attributes.layoutPreset,
      media = attributes.media,
      enableSubTitle = attributes.enableSubTitle,
      number = attributes.number,
      imageUrl = attributes.imageUrl,
      selectedIcon = attributes.selectedIcon,
      flexDirection = attributes.flexDirection,
      mediaWrapperMargin = attributes.mediaWrapperMargin,
      enableDescription = attributes.enableDescription,
      useNumIconBg = attributes.useNumIconBg,
      numIconColor = attributes.numIconColor,
      numIconBgType = attributes.numIconBgType,
      numIconBgColor = attributes.numIconBgColor,
      numIconBgGradient = attributes.numIconBgGradient,
      imageId = attributes.imageId,
      isMediaImgHeightAuto = attributes.isMediaImgHeightAuto,
      titleTag = attributes.titleTag,
      subTitleTag = attributes.subTitleTag,
      enableButton = attributes.enableButton,
      buttonText = attributes.buttonText,
      infoboxLink = attributes.infoboxLink,
      buttonTextColor = attributes.buttonTextColor,
      titleColor = attributes.titleColor,
      subTitleColor = attributes.subTitleColor,
      descriptionColor = attributes.descriptionColor,
      buttonBgColor = attributes.buttonBgColor,
      mediaAlignment = attributes.mediaAlignment,
      contentsAlignment = attributes.contentsAlignment; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  useEffect(function () {
    setAttributes({
      resOption: select("core/edit-post").__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for mimmiking css for all the eb blocks on resOption changing

  useEffect(function () {
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_14__["mimmikCssForResBtns"])({
      domObj: document,
      resOption: resOption
    });
  }, [resOption]); // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM

  useEffect(function () {
    var cleanUp = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_14__["mimmikCssOnPreviewBtnClickWhileBlockSelected"])({
      domObj: document,
      select: select,
      setAttributes: setAttributes
    });
    return function () {
      cleanUp();
    };
  }, []);
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_13__["default"]
  };
  useEffect(function () {
    switch (layoutPreset) {
      case "preset1":
        setAttributes({
          flexDirection: "column",
          contentAlignment: "center",
          mediaAlignSelf: "center"
        });
        break;

      case "preset2":
        setAttributes({
          flexDirection: "column-reverse",
          contentAlignment: "center",
          mediaAlignSelf: "center"
        });
        break;

      case "preset3":
        setAttributes({
          flexDirection: "row",
          contentAlignment: "left",
          mediaAlignSelf: "flex-start"
        });
        break;

      case "preset4":
        setAttributes({
          flexDirection: "row-reverse",
          contentAlignment: "right",
          mediaAlignSelf: "flex-start"
        });
        break;
    }
  }, [layoutPreset]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
    key: "controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-panel-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab" // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Styles",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advance",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Infobox Settings") // initialOpen={false}

    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __("Layout Preset "),
      value: layoutPreset,
      options: _constants__WEBPACK_IMPORTED_MODULE_18__["LAYOUT_TYPES"],
      onChange: function onChange(layoutPreset) {
        return setAttributes({
          layoutPreset: layoutPreset
        });
      }
    }), media !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      label: __("Media & content spacing")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: mediaWrapperMargin,
      onChange: function onChange(mediaWrapperMargin) {
        return setAttributes({
          mediaWrapperMargin: mediaWrapperMargin
        });
      },
      min: 0,
      max: 200
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Alignments")
    }, media !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (flexDirection === "row" || flexDirection === "row-reverse") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      id: "eb-infobox-alignments",
      label: "Media alignments"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
      id: "eb-infobox-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_18__["MEDIA_ALIGNMENTS_ON_FLEX_ROW"].map(function (_ref) {
      var value = _ref.value,
          label = _ref.label;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLarge: true,
        isSecondary: mediaAlignment !== value,
        isPrimary: mediaAlignment === value,
        onClick: function onClick() {
          return setAttributes({
            mediaAlignment: value
          });
        }
      }, label);
    }))), (flexDirection === "column" || flexDirection === "column-reverse") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      id: "eb-infobox-alignments",
      label: "Media alignments"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
      id: "eb-infobox-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_18__["MEDIA_ALIGNMENTS_ON_FLEX_COLUMN"].map(function (_ref2) {
      var value = _ref2.value,
          label = _ref2.label;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLarge: true,
        isSecondary: mediaAlignment !== value,
        isPrimary: mediaAlignment === value,
        onClick: function onClick() {
          return setAttributes({
            mediaAlignment: value
          });
        }
      }, label);
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      id: "eb-infobox-alignments",
      label: "Contents alignments"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
      id: "eb-infobox-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_18__["CONTENTS_ALIGNMENTS"].map(function (_ref3) {
      var value = _ref3.value,
          label = _ref3.label;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLarge: true,
        isSecondary: contentsAlignment !== value,
        isPrimary: contentsAlignment === value,
        onClick: function onClick() {
          return setAttributes({
            contentsAlignment: value
          });
        }
      }, label);
    }))))), tab.name === "styles" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Media")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      id: "eb-infobox-image-icon"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
      id: "eb-infobox-image-icon"
    }, _constants__WEBPACK_IMPORTED_MODULE_18__["MEDIA_TYPES"].map(function (value) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLarge: true,
        isSecondary: media !== value,
        isPrimary: media === value,
        onClick: function onClick() {
          return setAttributes({
            media: value
          });
        }
      }, value);
    }))), media !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, media === "icon" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      label: __("Select Icon")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
      icons: _util_faIcons_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      onChange: function onChange(icon) {
        return setAttributes({
          selectedIcon: icon
        });
      },
      value: selectedIcon,
      appendTo: "body",
      isMulti: false
    })), media === "icon" && selectedIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
      baseLabel: __("Icon Size", "Infobox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["mediaIconSize"],
      resRequiredProps: resRequiredProps,
      min: 8,
      max: 100,
      step: 1
    }), media === "number" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      label: __("Number"),
      id: "eb-infobox-number-id"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "number",
      value: number,
      id: "eb-infobox-number-id",
      onChange: function onChange(e) {
        return setAttributes({
          number: parseInt(e.target.value, 10) || 0
        });
      },
      min: 0
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: "Number Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__["typoPrefix_number"],
      resRequiredProps: resRequiredProps
    })), (media === "number" || media === "icon") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Color"),
      color: numIconColor,
      onChange: function onChange(numIconColor) {
        return setAttributes({
          numIconColor: numIconColor
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __("Use Background"),
      checked: useNumIconBg,
      onChange: function onChange() {
        return setAttributes({
          useNumIconBg: !useNumIconBg
        });
      }
    }), useNumIconBg && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["mediaBackground"],
      baseLabel: "Background size"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      label: __("Background Type")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
      id: "eb-infobox-infobox-background"
    }, _constants__WEBPACK_IMPORTED_MODULE_18__["ICON_IMAGE_BG_TYPES"].map(function (_ref4) {
      var value = _ref4.value,
          label = _ref4.label;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLarge: true,
        isPrimary: numIconBgType === value,
        isSecondary: numIconBgType !== value,
        onClick: function onClick() {
          return setAttributes({
            numIconBgType: value
          });
        }
      }, label);
    }))), numIconBgType === "fill" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Background Color"),
      color: numIconBgColor,
      onChange: function onChange(numIconBgColor) {
        return setAttributes({
          numIconBgColor: numIconBgColor
        });
      }
    }), numIconBgType === "gradient" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Gradient") // initialOpen={false}

    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gradientColor: numIconBgGradient,
      onChange: function onChange(numIconBgGradient) {
        return setAttributes({
          numIconBgGradient: numIconBgGradient
        });
      }
    })))), media === "image" && !imageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(_ref5) {
        var id = _ref5.id,
            url = _ref5.url;
        return setAttributes({
          imageUrl: url,
          imageId: id
        });
      },
      type: "image",
      value: imageId,
      render: function render(_ref6) {
        var open = _ref6.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "eb-background-control-inspector-panel-img-btn components-button",
          label: __("Upload Image"),
          icon: "format-image",
          onClick: open
        });
      }
    }), media === "image" && imageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_image_avatar___WEBPACK_IMPORTED_MODULE_6__["default"], {
      imageUrl: imageUrl,
      onDeleteImage: function onDeleteImage() {
        return setAttributes({
          imageUrl: null
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
      baseLabel: __("Image Width", "infobox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["mediaImageWidth"],
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_18__["sizeUnitTypes"]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __("Auto Image Height"),
      checked: isMediaImgHeightAuto,
      onChange: function onChange() {
        return setAttributes({
          isMediaImgHeightAuto: !isMediaImgHeightAuto
        });
      }
    }), !isMediaImgHeightAuto && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
      baseLabel: __("Image Height", "infobox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["mediaImageHeight"],
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_18__["sizeUnitTypes"]
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      forBorderRadius: true,
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["mediaBgRadius"],
      baseLabel: "Border Radius"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["mediaBgMargin"],
      baseLabel: "Margin"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Title"),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      label: __("Title Tag")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
      className: "infobox-button-group"
    }, _constants__WEBPACK_IMPORTED_MODULE_18__["HEADER_TAGS"].map(function (header) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isSecondary: titleTag !== header,
        isPrimary: titleTag === header,
        onClick: function onClick() {
          return setAttributes({
            titleTag: header
          });
        }
      }, header.toUpperCase());
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__["typoPrefix_title"],
      resRequiredProps: resRequiredProps
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["titlePadding"],
      baseLabel: "Title Padding"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Color"),
      color: titleColor,
      onChange: function onChange(titleColor) {
        return setAttributes({
          titleColor: titleColor
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Subtitle"),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __("Enable"),
      checked: enableSubTitle,
      onChange: function onChange() {
        return setAttributes({
          enableSubTitle: !enableSubTitle
        });
      }
    }), enableSubTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      label: __("Subtitle Tag")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
      className: "infobox-button-group"
    }, _constants__WEBPACK_IMPORTED_MODULE_18__["HEADER_TAGS"].map(function (header) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isSecondary: subTitleTag !== header,
        isPrimary: subTitleTag === header,
        onClick: function onClick() {
          return setAttributes({
            subTitleTag: header
          });
        }
      }, header.toUpperCase());
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__["typoPrefix_subTitle"],
      resRequiredProps: resRequiredProps
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["subTitlePadding"],
      baseLabel: "Subtitle Padding"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Color"),
      color: subTitleColor,
      onChange: function onChange(subTitleColor) {
        return setAttributes({
          subTitleColor: subTitleColor
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Content"),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __("Show content"),
      checked: enableDescription,
      onChange: function onChange() {
        return setAttributes({
          enableDescription: !enableDescription
        });
      }
    }), enableDescription && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__["typoPrefix_content"],
      resRequiredProps: resRequiredProps
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["contentPadding"],
      baseLabel: "Content Padding"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Color"),
      color: descriptionColor,
      onChange: function onChange(descriptionColor) {
        return setAttributes({
          descriptionColor: descriptionColor
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Button"),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __("Show button"),
      checked: enableButton,
      onChange: function onChange() {
        return setAttributes({
          enableButton: !enableButton
        });
      }
    }), enableButton && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __("Button Text"),
      value: buttonText,
      onChange: function onChange(buttonText) {
        return setAttributes({
          buttonText: buttonText
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __("Link URL"),
      placeholder: "https://your-link.com",
      value: infoboxLink,
      onChange: function onChange(infoboxLink) {
        return setAttributes({
          infoboxLink: infoboxLink
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__["typoPrefix_buttonText"],
      resRequiredProps: resRequiredProps
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["buttonPadding"],
      baseLabel: "Button Padding"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["buttonRadius"],
      baseLabel: "Button Border Radius"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Text Color"),
      color: buttonTextColor,
      onChange: function onChange(buttonTextColor) {
        return setAttributes({
          buttonTextColor: buttonTextColor
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Button Color"),
      color: buttonBgColor,
      onChange: function onChange(buttonBgColor) {
        return setAttributes({
          buttonBgColor: buttonBgColor
        });
      }
    })))), tab.name === "advance" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Margin Padding")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["wrapperMargin"],
      baseLabel: "Container Margin"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_17__["wrapperPadding"],
      baseLabel: "Container Padding"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Background"),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_background_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__["infoWrapBg"],
      resRequiredProps: resRequiredProps // noOverlay
      // noMainBgi
      // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'

    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Border & Shadow"),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_border_shadow_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__["wrpBdShadow"],
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    }))));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_infobox_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/infobox-container */ "./src/components/infobox-container.js");

var useBlockProps = wp.blockEditor.useBlockProps;

function save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      selectedIcon = attributes.selectedIcon,
      _attributes$number = attributes.number,
      number = _attributes$number === void 0 ? 0 : _attributes$number,
      media = attributes.media,
      imageUrl = attributes.imageUrl,
      enableSubTitle = attributes.enableSubTitle,
      enableDescription = attributes.enableDescription,
      infoboxLink = attributes.infoboxLink,
      enableButton = attributes.enableButton,
      buttonText = attributes.buttonText,
      title = attributes.title,
      subTitle = attributes.subTitle,
      description = attributes.description,
      titleTag = attributes.titleTag,
      subTitleTag = attributes.subTitleTag;
  var requiredProps = {
    selectedIcon: selectedIcon,
    blockId: blockId,
    number: number,
    media: media,
    imageUrl: imageUrl,
    enableSubTitle: enableSubTitle,
    enableDescription: enableDescription,
    infoboxLink: infoboxLink,
    enableButton: enableButton,
    buttonText: buttonText,
    title: title,
    subTitle: subTitle,
    description: description,
    titleTag: titleTag,
    subTitleTag: subTitleTag
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", useBlockProps.save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_infobox_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    requiredProps: requiredProps
  }));
}

/***/ }),

/***/ "./util/background-control/bgControl.js":
/*!**********************************************!*\
  !*** ./util/background-control/bgControl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bgControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");


var __ = wp.i18n.__;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup;
/**
 * Internal dependencies
 */






function bgControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noMainBgi = _ref.noMainBgi,
      noTransition = _ref.noTransition;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var bg_hoverType = attributes["".concat(controlName, "bg_hoverType")],
      bg_transition = attributes["".concat(controlName, "bg_transition")],
      backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      bgImageID = attributes["".concat(controlName, "bgImageID")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")],
      hov_backgroundType = attributes["hov_".concat(controlName, "backgroundType")],
      hov_backgroundColor = attributes["hov_".concat(controlName, "backgroundColor")],
      hov_gradientColor = attributes["hov_".concat(controlName, "gradientColor")],
      hov_bgImageURL = attributes["hov_".concat(controlName, "bgImageURL")],
      hov_bgImageID = attributes["hov_".concat(controlName, "bgImageID")],
      hov_bgImgAttachment = attributes["hov_".concat(controlName, "bgImgAttachment")],
      hov_backgroundSize = attributes["hov_".concat(controlName, "backgroundSize")],
      hov_bgImgCustomSize = attributes["hov_".concat(controlName, "bgImgCustomSize")],
      hov_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "bgImgCustomSizeUnit")],
      hov_bgImgPos = attributes["hov_".concat(controlName, "bgImgPos")],
      hov_bgImgcustomPosX = attributes["hov_".concat(controlName, "bgImgcustomPosX")],
      hov_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "bgImgcustomPosXUnit")],
      hov_bgImgcustomPosY = attributes["hov_".concat(controlName, "bgImgcustomPosY")],
      hov_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "bgImgcustomPosYUnit")],
      hov_bgImgRepeat = attributes["hov_".concat(controlName, "bgImgRepeat")],
      hov_TABbackgroundSize = attributes["hov_TAB".concat(controlName, "backgroundSize")],
      hov_TABbgImgCustomSize = attributes["hov_TAB".concat(controlName, "bgImgCustomSize")],
      hov_TABbgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_TABbgImgPos = attributes["hov_TAB".concat(controlName, "bgImgPos")],
      hov_TABbgImgcustomPosX = attributes["hov_TAB".concat(controlName, "bgImgcustomPosX")],
      hov_TABbgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_TABbgImgcustomPosY = attributes["hov_TAB".concat(controlName, "bgImgcustomPosY")],
      hov_TABbgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_TABbgImgRepeat = attributes["hov_TAB".concat(controlName, "bgImgRepeat")],
      hov_MOBbackgroundSize = attributes["hov_MOB".concat(controlName, "backgroundSize")],
      hov_MOBbgImgCustomSize = attributes["hov_MOB".concat(controlName, "bgImgCustomSize")],
      hov_MOBbgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_MOBbgImgPos = attributes["hov_MOB".concat(controlName, "bgImgPos")],
      hov_MOBbgImgcustomPosX = attributes["hov_MOB".concat(controlName, "bgImgcustomPosX")],
      hov_MOBbgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_MOBbgImgcustomPosY = attributes["hov_MOB".concat(controlName, "bgImgcustomPosY")],
      hov_MOBbgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_MOBbgImgRepeat = attributes["hov_MOB".concat(controlName, "bgImgRepeat")];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, null, [{
    label: __("Normal"),
    value: "normal"
  }, {
    label: __("Hover"),
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button // isSmall
    // isLarge
    , {
      isPrimary: bg_hoverType === value,
      isSecondary: bg_hoverType !== value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bg_hoverType"), value));
      }
    }, label);
  }))), bg_hoverType === "normal" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Background Type")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, null, [{
    label: __("Classic"),
    value: "classic"
  }, {
    label: __("Gradient"),
    value: "gradient"
  }].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button // isSmall
    // isLarge
    , {
      isPrimary: backgroundType === value,
      isSecondary: backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), backgroundType === "classic" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: __("Background Color"),
    color: backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundColor"), backgroundColor));
    }
  }), noMainBgi === false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Background Image")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var _setAttributes4;

      var url = _ref4.url,
          id = _ref4.id;
      return setAttributes((_setAttributes4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "".concat(controlName, "bgImageURL"), url), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "".concat(controlName, "bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: bgImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_image_avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    imageUrl: bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgPos"), bgImgPos));
    }
  })), bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgcustomPosXUnit"), bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: bgImgcustomPosX,
    min: 0,
    max: bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgcustomPosX"), bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgcustomPosYUnit"), bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: bgImgcustomPosY,
    min: 0,
    max: bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgcustomPosY"), bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgRepeat"), bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundSize"), backgroundSize));
    }
  })), backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgCustomSizeUnit"), bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: bgImgCustomSize,
    min: 0,
    max: bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgCustomSize"), bgImgCustomSize));
    }
  })))), resOption === "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: TABbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgPos"), TABbgImgPos));
    }
  })), TABbgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgcustomPosXUnit"), TABbgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: TABbgImgcustomPosX,
    min: 0,
    max: TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABbgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgcustomPosX"), TABbgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgcustomPosYUnit"), TABbgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: TABbgImgcustomPosY,
    min: 0,
    max: TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgcustomPosY"), TABbgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: TABbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(TABbgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgRepeat"), TABbgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: TABbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbackgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "backgroundSize"), TABbackgroundSize));
    }
  })), TABbackgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgCustomSizeUnit"), TABbgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: TABbgImgCustomSize,
    min: 0,
    max: TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgCustomSize"), TABbgImgCustomSize));
    }
  })))), resOption === "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: MOBbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgPos"), MOBbgImgPos));
    }
  })), MOBbgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgcustomPosXUnit"), MOBbgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: MOBbgImgcustomPosX,
    min: 0,
    max: MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBbgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgcustomPosX"), MOBbgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgcustomPosYUnit"), MOBbgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: MOBbgImgcustomPosY,
    min: 0,
    max: MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgcustomPosY"), MOBbgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: MOBbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(MOBbgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgRepeat"), MOBbgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: MOBbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbackgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "backgroundSize"), MOBbackgroundSize));
    }
  })), MOBbackgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgCustomSizeUnit"), MOBbgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: MOBbgImgCustomSize,
    min: 0,
    max: MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgCustomSize"), MOBbgImgCustomSize));
    }
  }))))))), backgroundType === "gradient" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gradientColor: gradientColor,
    onChange: function onChange(gradientColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "gradientColor"), gradientColor));
    }
  })), bg_hoverType === "hover" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Background Type")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, null, [{
    label: __("Classic"),
    value: "classic"
  }, {
    label: __("Gradient"),
    value: "gradient"
  }].map(function (_ref6) {
    var value = _ref6.value,
        label = _ref6.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button // isSmall
    // isLarge
    , {
      isPrimary: hov_backgroundType === value,
      isSecondary: hov_backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), hov_backgroundType === "classic" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: __("Background Color"),
    color: hov_backgroundColor,
    onChange: function onChange(hov_backgroundColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "backgroundColor"), hov_backgroundColor));
    }
  }), noMainBgi === false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Background Image")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref7) {
      var _setAttributes39;

      var url = _ref7.url,
          id = _ref7.id;
      return setAttributes((_setAttributes39 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes39, "hov_".concat(controlName, "bgImageURL"), url), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes39, "hov_".concat(controlName, "bgImageID"), id), _setAttributes39));
    },
    type: "image",
    value: hov_bgImageID,
    render: function render(_ref8) {
      var open = _ref8.open;
      return !hov_bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_image_avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    imageUrl: hov_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgPos"), hov_bgImgPos));
    }
  })), hov_bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgcustomPosXUnit"), hov_bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_bgImgcustomPosX,
    min: 0,
    max: hov_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgcustomPosX"), hov_bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgcustomPosYUnit"), hov_bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_bgImgcustomPosY,
    min: 0,
    max: hov_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgcustomPosY"), hov_bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgRepeat"), hov_bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "backgroundSize"), hov_backgroundSize));
    }
  })), hov_backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgCustomSizeUnit"), hov_bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_bgImgCustomSize,
    min: 0,
    max: hov_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgCustomSize"), hov_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_TABbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABbgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "bgImgPos"), hov_TABbgImgPos));
    }
  })), hov_TABbgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "bgImgcustomPosXUnit"), hov_TABbgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_TABbgImgcustomPosX,
    min: 0,
    max: hov_TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_TABbgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "bgImgcustomPosX"), hov_TABbgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "bgImgcustomPosYUnit"), hov_TABbgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_TABbgImgcustomPosY,
    min: 0,
    max: hov_TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABbgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "bgImgcustomPosY"), hov_TABbgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_TABbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_TABbgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "bgImgRepeat"), hov_TABbgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_TABbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABbackgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "backgroundSize"), hov_TABbackgroundSize));
    }
  })), hov_TABbackgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABbgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "bgImgCustomSizeUnit"), hov_TABbgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_TABbgImgCustomSize,
    min: 0,
    max: hov_TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABbgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "bgImgCustomSize"), hov_TABbgImgCustomSize));
    }
  })))), resOption === "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_MOBbgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBbgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "bgImgPos"), hov_MOBbgImgPos));
    }
  })), hov_MOBbgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "bgImgcustomPosXUnit"), hov_MOBbgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_MOBbgImgcustomPosX,
    min: 0,
    max: hov_MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_MOBbgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "bgImgcustomPosX"), hov_MOBbgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "bgImgcustomPosYUnit"), hov_MOBbgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_MOBbgImgcustomPosY,
    min: 0,
    max: hov_MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBbgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "bgImgcustomPosY"), hov_MOBbgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_MOBbgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_MOBbgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "bgImgRepeat"), hov_MOBbgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_MOBbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBbackgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "backgroundSize"), hov_MOBbackgroundSize));
    }
  })), hov_MOBbackgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBbgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "bgImgCustomSizeUnit"), hov_MOBbgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_MOBbgImgCustomSize,
    min: 0,
    max: hov_MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBbgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "bgImgCustomSize"), hov_MOBbgImgCustomSize));
    }
  }))))))), hov_backgroundType === "gradient" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gradientColor: hov_gradientColor,
    onChange: function onChange(hov_gradientColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "gradientColor"), hov_gradientColor));
    }
  }), !noTransition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Background Transition"),
    value: bg_transition,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: function onChange(bg_transition) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bg_transition"), bg_transition));
    }
  })));
}

/***/ }),

/***/ "./util/background-control/index.js":
/*!******************************************!*\
  !*** ./util/background-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _overlayControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlayControl */ "./util/background-control/overlayControl.js");
/* harmony import */ var _bgControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bgControl */ "./util/background-control/bgControl.js");



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var ToggleControl = wp.components.ToggleControl;
/**
 * Internal dependencies
 */



function BackgroundControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      _ref$noOverlay = _ref.noOverlay,
      noOverlay = _ref$noOverlay === void 0 ? false : _ref$noOverlay,
      _ref$noMainBgi = _ref.noMainBgi,
      noMainBgi = _ref$noMainBgi === void 0 ? false : _ref$noMainBgi,
      _ref$noOverlayBgi = _ref.noOverlayBgi,
      noOverlayBgi = _ref$noOverlayBgi === void 0 ? false : _ref$noOverlayBgi,
      _ref$noTransition = _ref.noTransition,
      noTransition = _ref$noTransition === void 0 ? false : _ref$noTransition;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var isBgOverlay = attributes["".concat(controlName, "isBgOverlay")];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_bgControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: controlName,
    noMainBgi: noMainBgi,
    noTransition: noTransition
  }), noOverlay === false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __("Enable Overlay"),
    checked: isBgOverlay,
    onChange: function onChange() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "isBgOverlay"), !isBgOverlay));
    }
  }), isBgOverlay && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_overlayControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: controlName,
    noOverlayBgi: noOverlayBgi,
    noTransition: noTransition
  })));
}

/***/ }),

/***/ "./util/background-control/overlayControl.js":
/*!***************************************************!*\
  !*** ./util/background-control/overlayControl.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return overlayControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");


var __ = wp.i18n.__;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    ToggleControl = _wp$components.ToggleControl;
/**
 * Internal dependencies
 */







function overlayControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noOverlayBgi = _ref.noOverlayBgi,
      noTransition = _ref.noTransition;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var ovl_hoverType = attributes["".concat(controlName, "ovl_hoverType")],
      ovl_bg_transition = attributes["".concat(controlName, "ovl_bg_transition")],
      ovl_filtersTransition = attributes["".concat(controlName, "ovl_filtersTransition")],
      ovl_opacityTransition = attributes["".concat(controlName, "ovl_opacityTransition")],
      overlayType = attributes["".concat(controlName, "overlayType")],
      overlayColor = attributes["".concat(controlName, "overlayColor")],
      overlayGradient = attributes["".concat(controlName, "overlayGradient")],
      ovl_bgImageURL = attributes["".concat(controlName, "ovl_bgImageURL")],
      ovl_bgImageID = attributes["".concat(controlName, "ovl_bgImageID")],
      ovl_bgImgAttachment = attributes["".concat(controlName, "ovl_bgImgAttachment")],
      ovl_opacity = attributes["".concat(controlName, "ovl_opacity")],
      ovl_blendMode = attributes["".concat(controlName, "ovl_blendMode")],
      ovl_allowFilters = attributes["".concat(controlName, "ovl_allowFilters")],
      ovl_fltrBrightness = attributes["".concat(controlName, "ovl_fltrBrightness")],
      ovl_fltrContrast = attributes["".concat(controlName, "ovl_fltrContrast")],
      ovl_fltrSaturation = attributes["".concat(controlName, "ovl_fltrSaturation")],
      ovl_fltrBlur = attributes["".concat(controlName, "ovl_fltrBlur")],
      ovl_fltrHue = attributes["".concat(controlName, "ovl_fltrHue")],
      ovl_backgroundSize = attributes["".concat(controlName, "ovl_backgroundSize")],
      ovl_bgImgCustomSize = attributes["".concat(controlName, "ovl_bgImgCustomSize")],
      ovl_bgImgCustomSizeUnit = attributes["".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      ovl_bgImgPos = attributes["".concat(controlName, "ovl_bgImgPos")],
      ovl_bgImgcustomPosX = attributes["".concat(controlName, "ovl_bgImgcustomPosX")],
      ovl_bgImgcustomPosXUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      ovl_bgImgcustomPosY = attributes["".concat(controlName, "ovl_bgImgcustomPosY")],
      ovl_bgImgcustomPosYUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      ovl_bgImgRepeat = attributes["".concat(controlName, "ovl_bgImgRepeat")],
      TABovl_backgroundSize = attributes["TAB".concat(controlName, "ovl_backgroundSize")],
      TABovl_bgImgCustomSize = attributes["TAB".concat(controlName, "ovl_bgImgCustomSize")],
      TABovl_bgImgCustomSizeUnit = attributes["TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      TABovl_bgImgPos = attributes["TAB".concat(controlName, "ovl_bgImgPos")],
      TABovl_bgImgcustomPosX = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      TABovl_bgImgcustomPosXUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      TABovl_bgImgcustomPosY = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      TABovl_bgImgcustomPosYUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      TABovl_bgImgRepeat = attributes["TAB".concat(controlName, "ovl_bgImgRepeat")],
      MOBovl_backgroundSize = attributes["MOB".concat(controlName, "ovl_backgroundSize")],
      MOBovl_bgImgCustomSize = attributes["MOB".concat(controlName, "ovl_bgImgCustomSize")],
      MOBovl_bgImgCustomSizeUnit = attributes["MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      MOBovl_bgImgPos = attributes["MOB".concat(controlName, "ovl_bgImgPos")],
      MOBovl_bgImgcustomPosX = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      MOBovl_bgImgcustomPosXUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      MOBovl_bgImgcustomPosY = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      MOBovl_bgImgcustomPosYUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      MOBovl_bgImgRepeat = attributes["MOB".concat(controlName, "ovl_bgImgRepeat")],
      hov_overlayType = attributes["hov_".concat(controlName, "overlayType")],
      hov_overlayColor = attributes["hov_".concat(controlName, "overlayColor")],
      hov_overlayGradient = attributes["hov_".concat(controlName, "overlayGradient")],
      hov_ovl_bgImageURL = attributes["hov_".concat(controlName, "ovl_bgImageURL")],
      hov_ovl_bgImageID = attributes["hov_".concat(controlName, "ovl_bgImageID")],
      hov_ovl_bgImgAttachment = attributes["hov_".concat(controlName, "ovl_bgImgAttachment")],
      hov_ovl_opacity = attributes["hov_".concat(controlName, "ovl_opacity")],
      hov_ovl_blendMode = attributes["hov_".concat(controlName, "ovl_blendMode")],
      hov_ovl_allowFilters = attributes["hov_".concat(controlName, "ovl_allowFilters")],
      hov_ovl_fltrBrightness = attributes["hov_".concat(controlName, "ovl_fltrBrightness")],
      hov_ovl_fltrContrast = attributes["hov_".concat(controlName, "ovl_fltrContrast")],
      hov_ovl_fltrSaturation = attributes["hov_".concat(controlName, "ovl_fltrSaturation")],
      hov_ovl_fltrBlur = attributes["hov_".concat(controlName, "ovl_fltrBlur")],
      hov_ovl_fltrHue = attributes["hov_".concat(controlName, "ovl_fltrHue")],
      hov_ovl_backgroundSize = attributes["hov_".concat(controlName, "ovl_backgroundSize")],
      hov_ovl_bgImgCustomSize = attributes["hov_".concat(controlName, "ovl_bgImgCustomSize")],
      hov_ovl_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_ovl_bgImgPos = attributes["hov_".concat(controlName, "ovl_bgImgPos")],
      hov_ovl_bgImgcustomPosX = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_ovl_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_ovl_bgImgcustomPosY = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_ovl_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_ovl_bgImgRepeat = attributes["hov_".concat(controlName, "ovl_bgImgRepeat")],
      hov_TABovl_backgroundSize = attributes["hov_TAB".concat(controlName, "ovl_backgroundSize")],
      hov_TABovl_bgImgCustomSize = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_TABovl_bgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_TABovl_bgImgPos = attributes["hov_TAB".concat(controlName, "ovl_bgImgPos")],
      hov_TABovl_bgImgcustomPosX = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_TABovl_bgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_TABovl_bgImgcustomPosY = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_TABovl_bgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_TABovl_bgImgRepeat = attributes["hov_TAB".concat(controlName, "ovl_bgImgRepeat")],
      hov_MOBovl_backgroundSize = attributes["hov_MOB".concat(controlName, "ovl_backgroundSize")],
      hov_MOBovl_bgImgCustomSize = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_MOBovl_bgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_MOBovl_bgImgPos = attributes["hov_MOB".concat(controlName, "ovl_bgImgPos")],
      hov_MOBovl_bgImgcustomPosX = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_MOBovl_bgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_MOBovl_bgImgcustomPosY = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_MOBovl_bgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_MOBovl_bgImgRepeat = attributes["hov_MOB".concat(controlName, "ovl_bgImgRepeat")];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Background Overlay")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, null, [{
    label: __("Normal"),
    value: "normal"
  }, {
    label: __("Hover"),
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button // isSmall
    // isLarge
    , {
      isPrimary: ovl_hoverType === value,
      isSecondary: ovl_hoverType !== value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_hoverType"), value));
      }
    }, label);
  }))), ovl_hoverType === "normal" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Overlay Type")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
    id: "eb-background-control-new"
  }, [{
    label: "Classic",
    value: "classic"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isLarge: true,
      isPrimary: overlayType === value,
      isSecondary: overlayType !== value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "overlayType"), value));
      }
    }, label);
  }))), overlayType === "classic" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: __("Overlay Color"),
    color: overlayColor,
    onChange: function onChange(overlayColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "overlayColor"), overlayColor));
    }
  }), noOverlayBgi === false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Overlay Image")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var _setAttributes4;

      var url = _ref4.url,
          id = _ref4.id;
      return setAttributes((_setAttributes4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "".concat(controlName, "ovl_bgImageURL"), url), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "".concat(controlName, "ovl_bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: ovl_bgImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !ovl_bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), ovl_bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_image_avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    imageUrl: ovl_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImageURL"), null));
    }
  }), resOption === "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: ovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(ovl_bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgPos"), ovl_bgImgPos));
    }
  })), ovl_bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: ovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgcustomPosXUnit"), ovl_bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: ovl_bgImgcustomPosX,
    min: 0,
    max: ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(ovl_bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgcustomPosX"), ovl_bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: ovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgcustomPosYUnit"), ovl_bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: ovl_bgImgcustomPosY,
    min: 0,
    max: ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(ovl_bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgcustomPosY"), ovl_bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: ovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(ovl_bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgRepeat"), ovl_bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: ovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(ovl_backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_backgroundSize"), ovl_backgroundSize));
    }
  })), ovl_backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: ovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(ovl_bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgCustomSizeUnit"), ovl_bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: ovl_bgImgCustomSize,
    min: 0,
    max: ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(ovl_bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgCustomSize"), ovl_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: TABovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABovl_bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_bgImgPos"), TABovl_bgImgPos));
    }
  })), TABovl_bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: TABovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), TABovl_bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: TABovl_bgImgcustomPosX,
    min: 0,
    max: TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABovl_bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_bgImgcustomPosX"), TABovl_bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: TABovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), TABovl_bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: TABovl_bgImgcustomPosY,
    min: 0,
    max: TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABovl_bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_bgImgcustomPosY"), TABovl_bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: TABovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(TABovl_bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_bgImgRepeat"), TABovl_bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: TABovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABovl_backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_backgroundSize"), TABovl_backgroundSize));
    }
  })), TABovl_backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: TABovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABovl_bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), TABovl_bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: TABovl_bgImgCustomSize,
    min: 0,
    max: TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABovl_bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "ovl_bgImgCustomSize"), TABovl_bgImgCustomSize));
    }
  })))), resOption === "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: MOBovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBovl_bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_bgImgPos"), MOBovl_bgImgPos));
    }
  })), MOBovl_bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), MOBovl_bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: MOBovl_bgImgcustomPosX,
    min: 0,
    max: MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBovl_bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_bgImgcustomPosX"), MOBovl_bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), MOBovl_bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: MOBovl_bgImgcustomPosY,
    min: 0,
    max: MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBovl_bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_bgImgcustomPosY"), MOBovl_bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: MOBovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(MOBovl_bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_bgImgRepeat"), MOBovl_bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: MOBovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBovl_backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_backgroundSize"), MOBovl_backgroundSize));
    }
  })), MOBovl_backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: MOBovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBovl_bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), MOBovl_bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: MOBovl_bgImgCustomSize,
    min: 0,
    max: MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBovl_bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "ovl_bgImgCustomSize"), MOBovl_bgImgCustomSize));
    }
  }))))))), overlayType === "gradient" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gradientColor: overlayGradient,
    onChange: function onChange(overlayGradient) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "overlayGradient"), overlayGradient));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Opacity"),
    value: ovl_opacity,
    onChange: function onChange(ovl_opacity) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_opacity"), ovl_opacity));
    },
    step: 0.01,
    min: 0,
    max: 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __("Blend Mode"),
    value: ovl_blendMode,
    options: [{
      label: __("Normal"),
      value: ""
    }, {
      label: __("Multiply"),
      value: "multiply"
    }, {
      label: __("Screen"),
      value: "screen"
    }, {
      label: __("Overlay"),
      value: "overlay"
    }, {
      label: __("Darken"),
      value: "darken"
    }, {
      label: __("Lighten"),
      value: "lighten"
    }, {
      label: __("Color Dodge"),
      value: "color-dodge"
    }, {
      label: __("Saturation"),
      value: "saturation"
    }, {
      label: __("Color"),
      value: "color"
    }, {
      label: __("Luminosity"),
      value: "luminosity"
    }],
    onChange: function onChange(ovl_blendMode) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_blendMode"), ovl_blendMode));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __("CSS Filters"),
    checked: ovl_allowFilters,
    onChange: function onChange() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_allowFilters"), !ovl_allowFilters));
    }
  }), ovl_allowFilters && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Blur"),
    value: ovl_fltrBlur,
    onChange: function onChange(ovl_fltrBlur) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_fltrBlur"), ovl_fltrBlur));
    },
    step: 0.1,
    min: 0,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Brightness"),
    value: ovl_fltrBrightness,
    onChange: function onChange(ovl_fltrBrightness) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_fltrBrightness"), ovl_fltrBrightness));
    },
    step: 1,
    min: 0,
    max: 200
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Contrast"),
    value: ovl_fltrContrast,
    onChange: function onChange(ovl_fltrContrast) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_fltrContrast"), ovl_fltrContrast));
    },
    step: 1,
    min: 0,
    max: 200
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Saturation"),
    value: ovl_fltrSaturation,
    onChange: function onChange(ovl_fltrSaturation) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_fltrSaturation"), ovl_fltrSaturation));
    },
    step: 1,
    min: 0,
    max: 200
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Hue"),
    value: ovl_fltrHue,
    onChange: function onChange(ovl_fltrHue) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_fltrHue"), ovl_fltrHue));
    },
    step: 1,
    min: 0,
    max: 360
  }))), ovl_hoverType === "hover" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Overlay Type")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
    id: "eb-background-control-new"
  }, [{
    label: "Classic",
    value: "classic"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref6) {
    var value = _ref6.value,
        label = _ref6.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isLarge: true,
      isPrimary: hov_overlayType === value,
      isSecondary: hov_overlayType !== value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "overlayType"), value));
      }
    }, label);
  }))), hov_overlayType === "classic" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: __("Overlay Color"),
    color: hov_overlayColor,
    onChange: function onChange(hov_overlayColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "overlayColor"), hov_overlayColor));
    }
  }), noOverlayBgi === false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Overlay Image")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref7) {
      var _setAttributes47;

      var url = _ref7.url,
          id = _ref7.id;
      return setAttributes((_setAttributes47 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes47, "hov_".concat(controlName, "ovl_bgImageURL"), url), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes47, "hov_".concat(controlName, "ovl_bgImageID"), id), _setAttributes47));
    },
    type: "image",
    value: hov_ovl_bgImageID,
    render: function render(_ref8) {
      var open = _ref8.open;
      return !hov_ovl_bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_ovl_bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_image_avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    imageUrl: hov_ovl_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImageURL"), null));
    }
  }), resOption === "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_ovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_ovl_bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgPos"), hov_ovl_bgImgPos));
    }
  })), hov_ovl_bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_ovl_bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_ovl_bgImgcustomPosX,
    min: 0,
    max: hov_ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_ovl_bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgcustomPosX"), hov_ovl_bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_ovl_bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_ovl_bgImgcustomPosY,
    min: 0,
    max: hov_ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_ovl_bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgcustomPosY"), hov_ovl_bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_ovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_ovl_bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgRepeat"), hov_ovl_bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_ovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_ovl_backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_backgroundSize"), hov_ovl_backgroundSize));
    }
  })), hov_ovl_backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_ovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_ovl_bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_ovl_bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_ovl_bgImgCustomSize,
    min: 0,
    max: hov_ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_ovl_bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgCustomSize"), hov_ovl_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_TABovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABovl_bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_bgImgPos"), hov_TABovl_bgImgPos));
    }
  })), hov_TABovl_bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_TABovl_bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_TABovl_bgImgcustomPosX,
    min: 0,
    max: hov_TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_TABovl_bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosX"), hov_TABovl_bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_TABovl_bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_TABovl_bgImgcustomPosY,
    min: 0,
    max: hov_TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABovl_bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosY"), hov_TABovl_bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_TABovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_TABovl_bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_bgImgRepeat"), hov_TABovl_bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_TABovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_TABovl_backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_backgroundSize"), hov_TABovl_backgroundSize));
    }
  })), hov_TABovl_backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_TABovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_TABovl_bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_TABovl_bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_TABovl_bgImgCustomSize,
    min: 0,
    max: hov_TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABovl_bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_TAB".concat(controlName, "ovl_bgImgCustomSize"), hov_TABovl_bgImgCustomSize));
    }
  })))), resOption === "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_MOBovl_bgImgPos,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Center Center"),
      value: "center center"
    }, {
      label: __("Center Left"),
      value: "center left"
    }, {
      label: __("Center Right"),
      value: "center right"
    }, {
      label: __("Top Center"),
      value: "top center"
    }, {
      label: __("Top Left"),
      value: "top left"
    }, {
      label: __("Top Right"),
      value: "top right"
    }, {
      label: __("Bottom Center"),
      value: "bottom center"
    }, {
      label: __("Bottom Left"),
      value: "bottom left"
    }, {
      label: __("Bottom Right"),
      value: "bottom right"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBovl_bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_bgImgPos"), hov_MOBovl_bgImgPos));
    }
  })), hov_MOBovl_bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_MOBovl_bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_MOBovl_bgImgcustomPosX,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_MOBovl_bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosX"), hov_MOBovl_bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_MOBovl_bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_MOBovl_bgImgcustomPosY,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBovl_bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosY"), hov_MOBovl_bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_MOBovl_bgImgRepeat,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("No-repeat"),
      value: "no-repeat"
    }, {
      label: __("Repeat"),
      value: "repeat"
    }, {
      label: __("Repeat-x"),
      value: "repeat-x"
    }, {
      label: __("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(hov_MOBovl_bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_bgImgRepeat"), hov_MOBovl_bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    value: hov_MOBovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Auto"),
      value: "auto"
    }, {
      label: __("Cover"),
      value: "cover"
    }, {
      label: __("Contain"),
      value: "contain"
    }, {
      label: __("Custom"),
      value: "custom"
    }],
    onChange: function onChange(hov_MOBovl_backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_backgroundSize"), hov_MOBovl_backgroundSize));
    }
  })), hov_MOBovl_backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: hov_MOBovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(hov_MOBovl_bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_MOBovl_bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: hov_MOBovl_bgImgCustomSize,
    min: 0,
    max: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBovl_bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_MOB".concat(controlName, "ovl_bgImgCustomSize"), hov_MOBovl_bgImgCustomSize));
    }
  }))))))), hov_overlayType === "gradient" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gradientColor: hov_overlayGradient,
    onChange: function onChange(hov_overlayGradient) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "overlayGradient"), hov_overlayGradient));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), !noTransition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Overlay Transition"),
    value: ovl_bg_transition,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: function onChange(ovl_bg_transition) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_bg_transition"), ovl_bg_transition));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onReset: function onReset() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_opacity"), undefined));
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Opacity"),
    value: hov_ovl_opacity,
    onChange: function onChange(hov_ovl_opacity) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_opacity"), hov_ovl_opacity));
    },
    step: 0.01,
    min: 0,
    max: 1
  })), !noTransition && hov_ovl_opacity && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Opacity Transition"),
    value: ovl_opacityTransition,
    onChange: function onChange(ovl_opacityTransition) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_opacityTransition"), ovl_opacityTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __("Blend Mode"),
    value: hov_ovl_blendMode,
    options: [{
      label: __("Normal"),
      value: ""
    }, {
      label: __("multiply"),
      value: "multiply"
    }, {
      label: __("screen"),
      value: "screen"
    }, {
      label: __("overlay"),
      value: "overlay"
    }, {
      label: __("darken"),
      value: "darken"
    }, {
      label: __("lighten"),
      value: "lighten"
    }, {
      label: __("color-dodge"),
      value: "Color Dodge"
    }, {
      label: __("saturation"),
      value: "saturation"
    }, {
      label: __("color"),
      value: "color"
    }, {
      label: __("luminosity"),
      value: "luminosity"
    }],
    onChange: function onChange(hov_ovl_blendMode) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_blendMode"), hov_ovl_blendMode));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __("CSS Filters"),
    checked: hov_ovl_allowFilters,
    onChange: function onChange() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_allowFilters"), !hov_ovl_allowFilters));
    }
  }), hov_ovl_allowFilters && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Blur"),
    value: hov_ovl_fltrBlur,
    onChange: function onChange(hov_ovl_fltrBlur) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_fltrBlur"), hov_ovl_fltrBlur));
    },
    step: 0.1,
    min: 0,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Brightness"),
    value: hov_ovl_fltrBrightness,
    onChange: function onChange(hov_ovl_fltrBrightness) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_fltrBrightness"), hov_ovl_fltrBrightness));
    },
    step: 1,
    min: 0,
    max: 200
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Contrast"),
    value: hov_ovl_fltrContrast,
    onChange: function onChange(hov_ovl_fltrContrast) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_fltrContrast"), hov_ovl_fltrContrast));
    },
    step: 1,
    min: 0,
    max: 200
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Saturation"),
    value: hov_ovl_fltrSaturation,
    onChange: function onChange(hov_ovl_fltrSaturation) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_fltrSaturation"), hov_ovl_fltrSaturation));
    },
    step: 1,
    min: 0,
    max: 200
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Hue"),
    value: hov_ovl_fltrHue,
    onChange: function onChange(hov_ovl_fltrHue) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "hov_".concat(controlName, "ovl_fltrHue"), hov_ovl_fltrHue));
    },
    step: 1,
    min: 0,
    max: 360
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), !noTransition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Css Filters Transition"),
    value: ovl_filtersTransition,
    onChange: function onChange(ovl_filtersTransition) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "ovl_filtersTransition"), ovl_filtersTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }))));
}

/***/ }),

/***/ "./util/border-shadow-control/index.js":
/*!*********************************************!*\
  !*** ./util/border-shadow-control/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BorderShadowControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");
/* harmony import */ var _dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./util/icons.js");



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    SelectControl = _wp$components.SelectControl,
    Dropdown = _wp$components.Dropdown;
/**
 * Internal dependencies
 */





function BorderShadowControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      borderColor = attributes["".concat(controlName, "borderColor")],
      shadowType = attributes["".concat(controlName, "shadowType")],
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      hOffset = attributes["".concat(controlName, "hOffset")],
      vOffset = attributes["".concat(controlName, "vOffset")],
      blur = attributes["".concat(controlName, "blur")],
      spread = attributes["".concat(controlName, "spread")],
      hoverShadowColor = attributes["".concat(controlName, "hoverShadowColor")],
      hoverHOffset = attributes["".concat(controlName, "hoverHOffset")],
      hoverVOffset = attributes["".concat(controlName, "hoverVOffset")],
      hoverBlur = attributes["".concat(controlName, "hoverBlur")],
      hoverSpread = attributes["".concat(controlName, "hoverSpread")],
      inset = attributes["".concat(controlName, "inset")],
      BorderType = attributes["".concat(controlName, "BorderType")],
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      HborderColor = attributes["".concat(controlName, "HborderColor")],
      borderTransition = attributes["".concat(controlName, "borderTransition")],
      radiusTransition = attributes["".concat(controlName, "radiusTransition")],
      shadowTransition = attributes["".concat(controlName, "shadowTransition")];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, noBorder !== true && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    id: "eb-infobox-border-hover-ptions"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
    id: "eb-infobox-border-hover-ptions"
  }, [{
    label: "Normal",
    value: "normal"
  }, {
    label: "Hover",
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isLarge: true,
      isSecondary: BorderType !== value,
      isPrimary: BorderType === value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "BorderType"), value));
      }
    }, label);
  }))), BorderType === "normal" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __("Border Style"),
    value: borderStyle,
    options: [{
      label: __("None"),
      value: "none"
    }, {
      label: __("Dashed"),
      value: "dashed"
    }, {
      label: __("Solid"),
      value: "solid"
    }, {
      label: __("Dotted"),
      value: "dotted"
    }, {
      label: __("Double"),
      value: "double"
    }, {
      label: __("Groove"),
      value: "groove"
    }, {
      label: __("Inset"),
      value: "inset"
    }, {
      label: __("Outset"),
      value: "outset"
    }, {
      label: __("Ridge"),
      value: "ridge"
    }],
    onChange: function onChange(borderStyle) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "borderStyle"), borderStyle));
    }
  }), borderStyle !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "borderColor"), borderColor));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Bdr_"),
    baseLabel: "Border Width"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Rds_"),
    baseLabel: "Border Radius"
  })), BorderType === "hover" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __("Border Style"),
    value: HborderStyle,
    options: [{
      label: __("None"),
      value: "none"
    }, {
      label: __("Dashed"),
      value: "dashed"
    }, {
      label: __("Solid"),
      value: "solid"
    }, {
      label: __("Dotted"),
      value: "dotted"
    }, {
      label: __("Double"),
      value: "double"
    }, {
      label: __("Groove"),
      value: "groove"
    }, {
      label: __("Inset"),
      value: "inset"
    }, {
      label: __("Outset"),
      value: "outset"
    }, {
      label: __("Ridge"),
      value: "ridge"
    }],
    onChange: function onChange(HborderStyle) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "HborderStyle"), HborderStyle));
    }
  }), HborderStyle !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Border Color"),
    color: HborderColor,
    onChange: function onChange(HborderColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "HborderColor"), HborderColor));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HBdr_"),
    baseLabel: "Border Width"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Border Transition"),
    value: borderTransition,
    onChange: function onChange(borderTransition) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "borderTransition"), borderTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HRds_"),
    baseLabel: "Border Radius"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __("Border Radius Transition"),
    value: radiusTransition,
    onChange: function onChange(radiusTransition) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "radiusTransition"), radiusTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }))), noShadow !== true && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __("Box Shadow"),
    className: "eb-typography-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_icons__WEBPACK_IMPORTED_MODULE_5__["TypographyIcon"], null));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "eb-panel-control",
        style: {
          minWidth: "230px",
          padding: "10px"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
        id: "eb-infobox-shadow-hover-ptions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
        id: "eb-infobox-shadow-hover-ptions"
      }, [{
        label: "Normal",
        value: "normal"
      }, {
        label: "Hover",
        value: "hover"
      }].map(function (_ref4) {
        var value = _ref4.value,
            label = _ref4.label;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          isLarge: true,
          isSecondary: shadowType !== value,
          isPrimary: shadowType === value,
          onClick: function onClick() {
            return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "shadowType"), value));
          }
        }, label);
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
        label: __("Inset"),
        checked: inset,
        onChange: function onChange() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "inset"), !inset));
        }
      }), shadowType === "normal" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: __("Shadow Color"),
        color: shadowColor,
        onChange: function onChange(shadowColor) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "shadowColor"), shadowColor));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hOffset"), undefined));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Horizontal Offset"),
        value: hOffset,
        onChange: function onChange(hOffset) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hOffset"), hOffset));
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "vOffset"), undefined));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Vertical Offset"),
        value: vOffset,
        onChange: function onChange(vOffset) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "vOffset"), vOffset));
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "blur"), undefined));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Shadow Blur"),
        value: blur,
        onChange: function onChange(blur) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "blur"), blur));
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "spread"), undefined));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Shadow Spread"),
        value: spread,
        onChange: function onChange(spread) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "spread"), spread));
        },
        min: 0,
        max: 20
      }))), shadowType === "hover" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: __("Hover Shadow Color"),
        color: hoverShadowColor,
        onChange: function onChange(hoverShadowColor) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverShadowColor"), hoverShadowColor));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverHOffset"), undefined));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Horizontal Offset"),
        value: hoverHOffset,
        onChange: function onChange(hoverHOffset) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverHOffset"), hoverHOffset));
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverVOffset"), undefined));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Vertical Offset"),
        value: hoverVOffset,
        onChange: function onChange(hoverVOffset) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverVOffset"), hoverVOffset));
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverBlur"), undefined));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Shadow Blur"),
        value: hoverBlur,
        onChange: function onChange(hoverBlur) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverBlur"), hoverBlur));
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverSpread"), undefined));
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Shadow Spread"),
        value: hoverSpread,
        onChange: function onChange(hoverSpread) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "hoverSpread"), hoverSpread));
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Shadow Transition"),
        value: shadowTransition,
        onChange: function onChange(shadowTransition) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "shadowTransition"), shadowTransition));
        },
        step: 0.01,
        min: 0,
        max: 5
      }))));
    }
  }))));
}

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;
var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    onChange(bgColor);
  }, [bgColor]);
  useEffect(function () {
    setBgColor(color);
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Tooltip, {
        text: bgColor || "default"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "eb-color-ball",
        style: bgColor && colorBallStyles
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: bgColor
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || "default"
      })));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ColorPicker, {
        color: bgColor,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setBgColor("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  }), bgColor && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      setBgColor(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control-v2/dimensions.js":
/*!**************************************************!*\
  !*** ./util/dimensions-control-v2/dimensions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DimensionsControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var dispatch = wp.data.dispatch;

function DimensionsControl(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      onChange = _ref.onChange,
      neededProps = _ref.neededProps;

  var _useState = useState({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var baseLabel = neededProps.baseLabel,
      resOption = neededProps.resOption,
      forBorderRadius = neededProps.forBorderRadius,
      setAttributes = neededProps.setAttributes,
      dimensionIsLinked = neededProps.dimensionIsLinked,
      controlName = neededProps.controlName;

  var _useState3 = useState(dimensionIsLinked),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isLinked = _useState4[0],
      setIsLinked = _useState4[1];

  var onButtonClick = function onButtonClick() {
    return setIsLinked(!isLinked);
  };

  var onInputChange = function onInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    } else {
      setDimensions(function (prevDimensions) {
        return _objectSpread(_objectSpread({}, prevDimensions), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
      });
    }
  };

  useEffect(function () {
    onChange(dimensions);
  }, [dimensions]);
  useEffect(function () {
    setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "isLinked"), isLinked));
    var value = dimensions.top;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    }
  }, [isLinked]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dimention-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "withResWrapperInDimension"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dimention-label"
  }, baseLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["handleDesktopBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    class: "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["handleTabBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    class: "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["handleMobileBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    class: "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Top")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Right")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Bottom")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Left")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
    onClick: onButtonClick
  })));
}

/***/ }),

/***/ "./util/dimensions-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/dimensions-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveDimensionsControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensions */ "./util/dimensions-control-v2/dimensions.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");




function ResponsiveDimensionsControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      baseLabel = _ref.baseLabel,
      forBorderRadius = _ref.forBorderRadius;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var dimensionIsLinked = attributes["".concat(controlName, "isLinked")],
      dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var UNITS = [{
    label: "px",
    value: "px"
  }, {
    label: "em",
    value: "em"
  }, {
    label: "%",
    value: "%"
  }];
  var neededProps = {
    resOption: resOption,
    baseLabel: baseLabel,
    forBorderRadius: forBorderRadius,
    setAttributes: setAttributes,
    dimensionIsLinked: dimensionIsLinked,
    controlName: controlName
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, resOption == "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: dimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(dimensionUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Unit"), dimensionUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: dimensionTop,
    right: dimensionRight,
    bottom: dimensionBottom,
    left: dimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref2) {
      var _setAttributes2;

      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes((_setAttributes2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes2, "".concat(controlName, "Top"), top), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes2, "".concat(controlName, "Right"), right), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes2, "".concat(controlName, "Bottom"), bottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes2, "".concat(controlName, "Left"), left), _setAttributes2));
    }
  })), resOption == "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: TABdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(TABdimensionUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "Unit"), TABdimensionUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: TABdimensionTop,
    right: TABdimensionRight,
    bottom: TABdimensionBottom,
    left: TABdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref3) {
      var _setAttributes4;

      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes((_setAttributes4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "TAB".concat(controlName, "Top"), top), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "TAB".concat(controlName, "Right"), right), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "TAB".concat(controlName, "Bottom"), bottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "TAB".concat(controlName, "Left"), left), _setAttributes4));
    }
  })), resOption == "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: MOBdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(MOBdimensionUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "Unit"), MOBdimensionUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: MOBdimensionTop,
    right: MOBdimensionRight,
    bottom: MOBdimensionBottom,
    left: MOBdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref4) {
      var _setAttributes6;

      var top = _ref4.top,
          right = _ref4.right,
          bottom = _ref4.bottom,
          left = _ref4.left;
      return setAttributes((_setAttributes6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes6, "MOB".concat(controlName, "Top"), top), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes6, "MOB".concat(controlName, "Right"), right), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes6, "MOB".concat(controlName, "Bottom"), bottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes6, "MOB".concat(controlName, "Left"), left), _setAttributes6));
    }
  })));
}

/***/ }),

/***/ "./util/faIcons.js":
/*!*************************!*\
  !*** ./util/faIcons.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var faIcons = ["fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fas fa-address-book", "far fa-address-book", "fas fa-address-card", "far fa-address-card", "fas fa-adjust", "fab fa-adn", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-algolia", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fab fa-amazon", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fab fa-amilia", "fas fa-anchor", "fab fa-android", "fab fa-angellist", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fas fa-archive", "fas fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "far fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fab fa-asymmetrik", "fas fa-at", "fab fa-audible", "fas fa-audio-description", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fas fa-backward", "fas fa-balance-scale", "fas fa-ban", "fab fa-bandcamp", "fas fa-barcode", "fas fa-bars", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fab fa-behance", "fab fa-behance-square", "fas fa-bell", "far fa-bell", "fas fa-bell-slash", "far fa-bell-slash", "fas fa-bicycle", "fab fa-bimobject", "fas fa-binoculars", "fas fa-birthday-cake", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fas fa-blind", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-book", "fas fa-bookmark", "far fa-bookmark", "fas fa-braille", "fas fa-briefcase", "fab fa-btc", "fas fa-bug", "fas fa-building", "far fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fab fa-buromobelexperte", "fas fa-bus", "fab fa-buysellads", "fas fa-calculator", "fas fa-calendar", "far fa-calendar", "fas fa-calendar-alt", "far fa-calendar-alt", "fas fa-calendar-check", "far fa-calendar-check", "fas fa-calendar-minus", "far fa-calendar-minus", "fas fa-calendar-plus", "far fa-calendar-plus", "fas fa-calendar-times", "far fa-calendar-times", "fas fa-camera", "fas fa-camera-retro", "fas fa-car", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "far fa-caret-square-down", "fas fa-caret-square-left", "far fa-caret-square-left", "fas fa-caret-square-right", "far fa-caret-square-right", "fas fa-caret-square-up", "far fa-caret-square-up", "fas fa-caret-up", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fas fa-certificate", "fas fa-chart-area", "fas fa-chart-bar", "far fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "far fa-check-circle", "fas fa-check-square", "far fa-check-square", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fab fa-chrome", "fas fa-circle", "far fa-circle", "fas fa-circle-notch", "fas fa-clipboard", "far fa-clipboard", "fas fa-clock", "far fa-clock", "fas fa-clone", "far fa-clone", "fas fa-closed-captioning", "far fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-upload-alt", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fas fa-code", "fas fa-code-branch", "fab fa-codepen", "fab fa-codiepie", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-columns", "fas fa-comment", "far fa-comment", "fas fa-comment-alt", "far fa-comment-alt", "fas fa-comments", "far fa-comments", "fas fa-compass", "far fa-compass", "fas fa-compress", "fab fa-connectdevelop", "fab fa-contao", "fas fa-copy", "far fa-copy", "fas fa-copyright", "far fa-copyright", "fab fa-cpanel", "fab fa-creative-commons", "fas fa-credit-card", "far fa-credit-card", "fas fa-crop", "fas fa-crosshairs", "fab fa-css3", "fab fa-css3-alt", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-dashcube", "fas fa-database", "fas fa-deaf", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fas fa-desktop", "fab fa-deviantart", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fas fa-dollar-sign", "fas fa-dot-circle", "far fa-dot-circle", "fas fa-download", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-edge", "fas fa-edit", "far fa-edit", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fab fa-ember", "fab fa-empire", "fas fa-envelope", "far fa-envelope", "fas fa-envelope-open", "far fa-envelope-open", "fas fa-envelope-square", "fab fa-envira", "fas fa-eraser", "fab fa-erlang", "fab fa-etsy", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-arrows-alt", "fab fa-expeditedssl", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "far fa-eye-slash", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-fax", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "far fa-file", "fas fa-file-alt", "far fa-file-alt", "fas fa-file-archive", "far fa-file-archive", "fas fa-file-audio", "far fa-file-audio", "fas fa-file-code", "far fa-file-code", "fas fa-file-excel", "far fa-file-excel", "fas fa-file-image", "far fa-file-image", "fas fa-file-pdf", "far fa-file-pdf", "fas fa-file-powerpoint", "far fa-file-powerpoint", "fas fa-file-video", "far fa-file-video", "fas fa-file-word", "far fa-file-word", "fas fa-film", "fas fa-filter", "fas fa-fire", "fas fa-fire-extinguisher", "fab fa-firefox", "fab fa-first-order", "fab fa-firstdraft", "fas fa-flag", "far fa-flag", "fas fa-flag-checkered", "fas fa-flask", "fab fa-flickr", "fab fa-fly", "fas fa-folder", "far fa-folder", "fas fa-folder-open", "far fa-folder-open", "fas fa-font", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fas fa-forward", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fas fa-frown", "far fa-frown", "fas fa-futbol", "far fa-futbol", "fas fa-gamepad", "fas fa-gavel", "fas fa-gem", "far fa-gem", "fas fa-genderless", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fas fa-gift", "fab fa-git", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fas fa-glass-martini", "fab fa-glide", "fab fa-glide-g", "fas fa-globe", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fas fa-graduation-cap", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-gulp", "fas fa-h-square", "fab fa-hacker-news", "fab fa-hacker-news-square", "fas fa-hand-lizard", "far fa-hand-lizard", "fas fa-hand-paper", "far fa-hand-paper", "fas fa-hand-peace", "far fa-hand-peace", "fas fa-hand-point-down", "far fa-hand-point-down", "fas fa-hand-point-left", "far fa-hand-point-left", "fas fa-hand-point-right", "far fa-hand-point-right", "fas fa-hand-point-up", "far fa-hand-point-up", "fas fa-hand-pointer", "far fa-hand-pointer", "fas fa-hand-rock", "far fa-hand-rock", "fas fa-hand-scissors", "far fa-hand-scissors", "fas fa-hand-spock", "far fa-hand-spock", "fas fa-handshake", "far fa-handshake", "fas fa-hashtag", "fas fa-hdd", "far fa-hdd", "fas fa-heading", "fas fa-headphones", "fas fa-heart", "far fa-heart", "fas fa-heartbeat", "fab fa-hire-a-helper", "fas fa-history", "fas fa-home", "fab fa-hooli", "fas fa-hospital", "far fa-hospital", "fab fa-hotjar", "fas fa-hourglass", "far fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fas fa-i-cursor", "fas fa-id-badge", "far fa-id-badge", "fas fa-id-card", "far fa-id-card", "fas fa-image", "far fa-image", "fas fa-images", "far fa-images", "fab fa-imdb", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-info", "fas fa-info-circle", "fab fa-instagram", "fab fa-internet-explorer", "fab fa-ioxhost", "fas fa-italic", "fab fa-itunes", "fab fa-itunes-note", "fab fa-jenkins", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fas fa-key", "fas fa-keyboard", "far fa-keyboard", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fas fa-language", "fas fa-laptop", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fas fa-leaf", "fab fa-leanpub", "fas fa-lemon", "far fa-lemon", "fab fa-less", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "far fa-life-ring", "fas fa-lightbulb", "far fa-lightbulb", "fab fa-line", "fas fa-link", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "far fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fab fa-lyft", "fab fa-magento", "fas fa-magic", "fas fa-magnet", "fas fa-male", "fas fa-map", "far fa-map", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fab fa-maxcdn", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fas fa-medkit", "fab fa-medrt", "fab fa-meetup", "fas fa-meh", "far fa-meh", "fas fa-mercury", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-slash", "fab fa-microsoft", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "far fa-minus-square", "fab fa-mix", "fab fa-mixcloud", "fab fa-mizuni", "fas fa-mobile", "fas fa-mobile-alt", "fab fa-modx", "fab fa-monero", "fas fa-money-bill-alt", "far fa-money-bill-alt", "fas fa-moon", "far fa-moon", "fas fa-motorcycle", "fas fa-mouse-pointer", "fas fa-music", "fab fa-napster", "fas fa-neuter", "fas fa-newspaper", "far fa-newspaper", "fab fa-nintendo-switch", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fas fa-object-group", "far fa-object-group", "fas fa-object-ungroup", "far fa-object-ungroup", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-osi", "fas fa-outdent", "fab fa-page4", "fab fa-pagelines", "fas fa-paint-brush", "fab fa-palfed", "fas fa-paper-plane", "far fa-paper-plane", "fas fa-paperclip", "fas fa-paragraph", "fas fa-paste", "fab fa-patreon", "fas fa-pause", "fas fa-pause-circle", "far fa-pause-circle", "fas fa-paw", "fab fa-paypal", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-percent", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fas fa-phone", "fas fa-phone-square", "fas fa-phone-volume", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-pp", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fas fa-plane", "fas fa-play", "fas fa-play-circle", "far fa-play-circle", "fab fa-playstation", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "far fa-plus-square", "fas fa-podcast", "fas fa-pound-sign", "fas fa-power-off", "fas fa-print", "fab fa-product-hunt", "fab fa-pushed", "fas fa-puzzle-piece", "fab fa-python", "fab fa-qq", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "far fa-question-circle", "fab fa-quora", "fas fa-quote-left", "fas fa-quote-right", "fas fa-random", "fab fa-ravelry", "fab fa-react", "fab fa-rebel", "fas fa-recycle", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "far fa-registered", "fab fa-rendact", "fab fa-renren", "fas fa-reply", "fas fa-reply-all", "fab fa-replyd", "fab fa-resolving", "fas fa-retweet", "fas fa-road", "fas fa-rocket", "fab fa-rocketchat", "fab fa-rockrms", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-rupee-sign", "fab fa-safari", "fab fa-sass", "fas fa-save", "far fa-save", "fab fa-schlix", "fab fa-scribd", "fas fa-search", "fas fa-search-minus", "fas fa-search-plus", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fas fa-server", "fab fa-servicestack", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "far fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-ship", "fab fa-shirtsinbulk", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fab fa-simplybuilt", "fab fa-sistrix", "fas fa-sitemap", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fas fa-sliders-h", "fab fa-slideshare", "fas fa-smile", "far fa-smile", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fas fa-snowflake", "far fa-snowflake", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-up", "fas fa-sort-amount-down", "fas fa-sort-amount-up", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-up", "fas fa-sort-up", "fab fa-soundcloud", "fas fa-space-shuttle", "fab fa-speakap", "fas fa-spinner", "fab fa-spotify", "fas fa-square", "far fa-square", "fab fa-stack-exchange", "fab fa-stack-overflow", "fas fa-star", "far fa-star", "fas fa-star-half", "far fa-star-half", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fab fa-sticker-mule", "fas fa-sticky-note", "far fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "far fa-stop-circle", "fab fa-strava", "fas fa-street-view", "fas fa-strikethrough", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-sun", "far fa-sun", "fab fa-superpowers", "fas fa-superscript", "fab fa-supple", "fas fa-sync", "fas fa-sync-alt", "fas fa-table", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tasks", "fas fa-taxi", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fab fa-themeisle", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "far fa-thumbs-down", "fas fa-thumbs-up", "far fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "far fa-times-circle", "fas fa-tint", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-trademark", "fas fa-train", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "far fa-trash-alt", "fas fa-tree", "fab fa-trello", "fab fa-tripadvisor", "fas fa-trophy", "fas fa-truck", "fas fa-tty", "fab fa-tumblr", "fab fa-tumblr-square", "fas fa-tv", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-uikit", "fas fa-umbrella", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fab fa-uniregistry", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fab fa-untappd", "fas fa-upload", "fab fa-usb", "fas fa-user", "far fa-user", "fas fa-user-circle", "far fa-user-circle", "fas fa-user-md", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-times", "fas fa-users", "fab fa-ussunnah", "fas fa-utensil-spoon", "fas fa-utensils", "fab fa-vaadin", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fas fa-video", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fas fa-volume-down", "fas fa-volume-off", "fas fa-volume-up", "fab fa-vuejs", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fas fa-wheelchair", "fab fa-whmcs", "fas fa-wifi", "fab fa-wikipedia-w", "fas fa-window-close", "far fa-window-close", "fas fa-window-maximize", "far fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "far fa-window-restore", "fab fa-windows", "fas fa-won-sign", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fas fa-wrench", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yelp", "fas fa-yen-sign", "fab fa-yoast", "fab fa-youtube"];
/* harmony default export */ __webpack_exports__["default"] = (faIcons);

/***/ }),

/***/ "./util/fontPicker/constants.js":
/*!**************************************!*\
  !*** ./util/fontPicker/constants.js ***!
  \**************************************/
/*! exports provided: FONTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};

/***/ }),

/***/ "./util/fontPicker/index.js":
/*!**********************************!*\
  !*** ./util/fontPicker/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./util/fontPicker/constants.js");




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;
/**
 * Internal dependencies
 */



function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_3__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("select", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPE", function() { return GRADIENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
var GRADIENT_TYPE = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Radial",
  value: "radial"
}];
var RADIAL_TYPES = [{
  label: "Ellipse",
  value: "ellipse"
}, {
  label: "Circle",
  value: "circle"
}];

/***/ }),

/***/ "./util/gradient-color-controller/helper.js":
/*!**************************************************!*\
  !*** ./util/gradient-color-controller/helper.js ***!
  \**************************************************/
/*! exports provided: parseGradientColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGradientColor", function() { return parseGradientColor; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

// Parses the gradient color string
var parseGradientColor = function parseGradientColor() {
  var gradientColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "linear-gradient(45deg,#7967ff,#c277f2)";
  var angle = 45,
      colorOnePosition = 0,
      colorTwoPosition = 100,
      radialShape = "ellipse",
      radialX = 50,
      radialY = 50;

  var _ref = gradientColor.match(/\#[a-f\d]{3,8}|rgba?\([\d\,\.]{3,16}\)/gi) || ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
      _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
      colorOne = _ref2[0],
      colorTwo = _ref2[1];

  var _ref3 = gradientColor.match(/\w{6}(?=-)/i) || ["linear"],
      _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 1),
      gradientType = _ref4[0];

  if (gradientType == "linear") {
    angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];

    var _ref5 = gradientColor.match(/\d{1,3}(?=\%)/gi) || ["0", "100"];

    var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, 2);

    colorOnePosition = _ref6[0];
    colorTwoPosition = _ref6[1];
  } else {
    radialShape = (gradientColor.match(/\w+(?= at)/i) || ["circle"])[0];
    var pcents = gradientColor.match(/\d{1,3}(?=\%)/gi) || ["50", "50", "18", "82"];
    radialX = pcents[0];
    radialY = pcents[1];
    colorOnePosition = pcents[2];
    colorTwoPosition = pcents[3];
  }

  return {
    gradientType: gradientType,
    angle: angle,
    colorOne: colorOne,
    colorTwo: colorTwo,
    colorOnePosition: colorOnePosition,
    colorTwoPosition: colorTwoPosition,
    radialShape: radialShape,
    radialX: radialX,
    radialY: radialY
  };
};

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper */ "./util/gradient-color-controller/helper.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
/**
 * Internal dependencies
 */
// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";




var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var GradientColorControl = function GradientColorControl(_ref) {
  var _ref$gradientColor = _ref.gradientColor,
      gradientColor = _ref$gradientColor === void 0 ? "linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.4))" : _ref$gradientColor,
      onChange = _ref.onChange;

  var _useState = useState("linear"),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      gradientType = _useState2[0],
      setGradientType = _useState2[1];

  var _useState3 = useState("transparent"),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      colorOne = _useState4[0],
      setColorOne = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      colorOnePosition = _useState6[0],
      setColorOnePosition = _useState6[1];

  var _useState7 = useState("transparent"),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      colorTwo = _useState8[0],
      setColorTwo = _useState8[1];

  var _useState9 = useState(100),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      colorTwoPosition = _useState10[0],
      setColorTwoPosition = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      angle = _useState12[0],
      setAngle = _useState12[1];

  var _useState13 = useState("ellipse"),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState13, 2),
      radialShape = _useState14[0],
      setRadialShape = _useState14[1];

  var _useState15 = useState(50),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState15, 2),
      radialX = _useState16[0],
      setRadialX = _useState16[1];

  var _useState17 = useState(50),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState17, 2),
      radialY = _useState18[0],
      setRadialY = _useState18[1];

  useEffect(function () {
    var _parseGradientColor = Object(_helper__WEBPACK_IMPORTED_MODULE_5__["parseGradientColor"])(gradientColor),
        gradientType = _parseGradientColor.gradientType,
        angle = _parseGradientColor.angle,
        colorOne = _parseGradientColor.colorOne,
        colorTwo = _parseGradientColor.colorTwo,
        colorOnePosition = _parseGradientColor.colorOnePosition,
        colorTwoPosition = _parseGradientColor.colorTwoPosition,
        radialShape = _parseGradientColor.radialShape,
        radialX = _parseGradientColor.radialX,
        radialY = _parseGradientColor.radialY;

    setGradientType(gradientType);
    setAngle(angle);
    setColorOne(colorOne);
    setColorTwo(colorTwo);
    setColorOnePosition(colorOnePosition);
    setColorTwoPosition(colorTwoPosition);
    setRadialShape(radialShape);
    setRadialX(radialX);
    setRadialY(radialY);
  }, []);
  useEffect(function () {
    onChange(gradientType === "linear" ? getLinearGradient() : getRadialGradient());
  }, [gradientType, colorOne, colorOnePosition, colorTwo, colorTwoPosition, angle, radialShape, radialX, radialY]);

  var getColorString = function getColorString() {
    return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
  };

  var getRadialGradient = function getRadialGradient() {
    return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(getColorString(), ")");
  };

  var getLinearGradient = function getLinearGradient() {
    return "linear-gradient(".concat(angle, "deg, ").concat(getColorString(), ")");
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "eb-gradient-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: __("Gradient Type"),
    className: "eb-gradient-toggle-label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_toggle_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    defaultSelected: gradientType === "linear" ? _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPE"][0] : _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPE"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPE"],
    onChange: function onChange(gradientType) {
      return setGradientType(gradientType);
    }
  })), gradientType === "radial" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: __("Radial Type"),
    className: "eb-gradient-toggle-label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_toggle_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    defaultSelected: radialShape === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"],
    onChange: function onChange(radialShape) {
      return setRadialShape(radialShape);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: "First Color",
    className: "eb-color-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Tooltip, {
        text: colorOne || "default"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "eb-color-ball",
        style: colorOne && colorBallStyles
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorOne
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorOne || "default"
      })));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ColorPicker, {
        color: colorOne,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setColorOne("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: "Second Color",
    className: "eb-color-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Dropdown, {
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Tooltip, {
        text: colorTwo || "default"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "eb-color-ball",
        style: colorTwo && colorBallStyles
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorTwo
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorTwo || "default"
      })));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ColorPicker, {
        color: colorTwo,
        onChangeComplete: function onChangeComplete(_ref5) {
          var rgb = _ref5.rgb;
          setColorTwo("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RangeControl, {
    label: __("First Color Position"),
    value: colorOnePosition,
    onChange: function onChange(colorOnePosition) {
      return setColorOnePosition(colorOnePosition);
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RangeControl, {
    label: __("Second Color Position"),
    value: colorTwoPosition,
    onChange: function onChange(colorTwoPosition) {
      return setColorTwoPosition(colorTwoPosition);
    },
    min: 0,
    max: 100
  }), gradientType === "linear" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RangeControl, {
    label: __("Angle"),
    value: angle,
    onChange: function onChange(angle) {
      return setAngle(angle);
    },
    min: 0,
    max: 360
  }), gradientType === "radial" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RangeControl, {
    label: __("Center X Position"),
    value: radialX,
    onChange: function onChange(radialX) {
      return setRadialX(radialX);
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RangeControl, {
    label: __("Center Y Position"),
    value: radialY,
    onChange: function onChange(radialY) {
      return setRadialY(radialY);
    },
    min: 0,
    max: 100
  })));
}; // GradientColorControl.propTypes = {
//   gradientColor: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/helpers/backgroundHelpers.js":
/*!*******************************************!*\
  !*** ./util/helpers/backgroundHelpers.js ***!
  \*******************************************/
/*! exports provided: generateBackgroundAttributes, generateBackgroundControlStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return generateBackgroundAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return generateBackgroundControlStyles; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// function to generate Background control's attributes
var generateBackgroundAttributes = function generateBackgroundAttributes(controlName) {
  var _ref4, _objectSpread4, _mainBgiAttrs, _objectSpread6, _ovlBgiAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isBgDefaultGradient = defaults.isBgDefaultGradient,
      defaultFillColor = defaults.defaultFillColor,
      _defaults$defaultBgGr = defaults.defaultBgGradient,
      defaultBgGradient = _defaults$defaultBgGr === void 0 ? "linear-gradient(45deg,#00000000,#00000000)" : _defaults$defaultBgGr,
      _defaults$noOverlay = defaults.noOverlay,
      noOverlay = _defaults$noOverlay === void 0 ? false : _defaults$noOverlay,
      _defaults$noMainBgi = defaults.noMainBgi,
      noMainBgi = _defaults$noMainBgi === void 0 ? false : _defaults$noMainBgi,
      _defaults$noOverlayBg = defaults.noOverlayBgi,
      noOverlayBgi = _defaults$noOverlayBg === void 0 ? false : _defaults$noOverlayBg,
      _defaults$noTransitio = defaults.noTransition,
      noTransition = _defaults$noTransitio === void 0 ? false : _defaults$noTransitio;
  var bgColorAttr = defaultFillColor ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundColor"), {
    type: "string",
    default: defaultFillColor
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundColor"), {
    type: "string"
  });
  var transitionAttr = noTransition ? {} : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bg_transition"), {
    type: "number",
    default: 0.5
  });
  var ovlTransitionAttr = noTransition ? {} : (_ref4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, "".concat(controlName, "ovl_bg_transition"), {
    type: "number",
    default: 0.5
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, "".concat(controlName, "ovl_filtersTransition"), {
    type: "number",
    default: 0.5
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, "".concat(controlName, "ovl_opacityTransition"), {
    type: "number",
    default: 0.5
  }), _ref4);

  var mainWithoutBgiAttrs = _objectSpread(_objectSpread(_objectSpread(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bg_hoverType"), {
    type: "string",
    default: "normal"
  }), transitionAttr), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundType"), {
    type: "string",
    default: isBgDefaultGradient === true ? "gradient" : "classic"
  }), bgColorAttr), {}, (_objectSpread4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread4, "".concat(controlName, "gradientColor"), {
    type: "string",
    default: defaultBgGradient
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread4, "hov_".concat(controlName, "backgroundType"), {
    type: "string",
    default: "classic"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread4, "hov_".concat(controlName, "backgroundColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread4, "hov_".concat(controlName, "gradientColor"), {
    type: "string"
  }), _objectSpread4));

  var mainBgiAttrs = (_mainBgiAttrs = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImageID"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImageID"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _mainBgiAttrs);

  var ovlWithoutBgiAttrs = _objectSpread(_objectSpread(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "isBgOverlay"), {
    type: "boolean",
    default: false
  }), ovlTransitionAttr), {}, (_objectSpread6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_hoverType"), {
    type: "string",
    default: "normal"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "overlayType"), {
    type: "string",
    default: "classic"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "overlayColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "overlayGradient"), {
    type: "string",
    default: "linear-gradient(45deg,#000000cc,#00000099)"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_opacity"), {
    type: "number",
    default: 0.5
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_blendMode"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_allowFilters"), {
    type: "boolean",
    default: false
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_fltrBrightness"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_fltrContrast"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_fltrSaturation"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_fltrBlur"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "".concat(controlName, "ovl_fltrHue"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "overlayType"), {
    type: "string",
    default: "classic"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "overlayColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "overlayGradient"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_bgImageURL"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_bgImageID"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_bgImgAttachment"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_opacity"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_blendMode"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_allowFilters"), {
    type: "boolean",
    default: false
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_fltrBrightness"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_fltrContrast"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_fltrSaturation"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_fltrBlur"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread6, "hov_".concat(controlName, "ovl_fltrHue"), {
    type: "number"
  }), _objectSpread6));

  var ovlBgiAttrs = (_ovlBgiAttrs = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImageURL"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImageID"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgAttachment"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _ovlBgiAttrs);
  var result = noOverlay === true ? noMainBgi === true ? _objectSpread({}, mainWithoutBgiAttrs) : _objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs) : noOverlayBgi === true && noMainBgi === true ? _objectSpread(_objectSpread({}, mainWithoutBgiAttrs), ovlWithoutBgiAttrs) : noOverlayBgi === true && noMainBgi === false ? _objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs), ovlWithoutBgiAttrs) : noOverlayBgi === false && noMainBgi === true ? _objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), ovlWithoutBgiAttrs), ovlBgiAttrs) : _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs), ovlWithoutBgiAttrs), ovlBgiAttrs);
  return result;
}; // function to generate Background control styles based on the unique controlName(prefix)

var generateBackgroundControlStyles = function generateBackgroundControlStyles(_ref5) {
  var controlName = _ref5.controlName,
      attributes = _ref5.attributes,
      _ref5$noOverlay = _ref5.noOverlay,
      noOverlay = _ref5$noOverlay === void 0 ? false : _ref5$noOverlay,
      _ref5$noMainBgi = _ref5.noMainBgi,
      noMainBgi = _ref5$noMainBgi === void 0 ? false : _ref5$noMainBgi,
      _ref5$noOverlayBgi = _ref5.noOverlayBgi,
      noOverlayBgi = _ref5$noOverlayBgi === void 0 ? false : _ref5$noOverlayBgi,
      _ref5$noTransition = _ref5.noTransition,
      noTransition = _ref5$noTransition === void 0 ? false : _ref5$noTransition;
  var bg_transition = attributes["".concat(controlName, "bg_transition")],
      backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")],
      hov_backgroundType = attributes["hov_".concat(controlName, "backgroundType")],
      hov_backgroundColor = attributes["hov_".concat(controlName, "backgroundColor")],
      hov_gradientColor = attributes["hov_".concat(controlName, "gradientColor")],
      hov_bgImageURL = attributes["hov_".concat(controlName, "bgImageURL")],
      hov_bgImgAttachment = attributes["hov_".concat(controlName, "bgImgAttachment")],
      hov_backgroundSize = attributes["hov_".concat(controlName, "backgroundSize")],
      hov_bgImgCustomSize = attributes["hov_".concat(controlName, "bgImgCustomSize")],
      hov_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "bgImgCustomSizeUnit")],
      hov_bgImgPos = attributes["hov_".concat(controlName, "bgImgPos")],
      hov_bgImgcustomPosX = attributes["hov_".concat(controlName, "bgImgcustomPosX")],
      hov_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "bgImgcustomPosXUnit")],
      hov_bgImgcustomPosY = attributes["hov_".concat(controlName, "bgImgcustomPosY")],
      hov_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "bgImgcustomPosYUnit")],
      hov_bgImgRepeat = attributes["hov_".concat(controlName, "bgImgRepeat")],
      hov_TABbackgroundSize = attributes["hov_TAB".concat(controlName, "backgroundSize")],
      hov_TABbgImgCustomSize = attributes["hov_TAB".concat(controlName, "bgImgCustomSize")],
      hov_TABbgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_TABbgImgPos = attributes["hov_TAB".concat(controlName, "bgImgPos")],
      hov_TABbgImgcustomPosX = attributes["hov_TAB".concat(controlName, "bgImgcustomPosX")],
      hov_TABbgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_TABbgImgcustomPosY = attributes["hov_TAB".concat(controlName, "bgImgcustomPosY")],
      hov_TABbgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_TABbgImgRepeat = attributes["hov_TAB".concat(controlName, "bgImgRepeat")],
      hov_MOBbackgroundSize = attributes["hov_MOB".concat(controlName, "backgroundSize")],
      hov_MOBbgImgCustomSize = attributes["hov_MOB".concat(controlName, "bgImgCustomSize")],
      hov_MOBbgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_MOBbgImgPos = attributes["hov_MOB".concat(controlName, "bgImgPos")],
      hov_MOBbgImgcustomPosX = attributes["hov_MOB".concat(controlName, "bgImgcustomPosX")],
      hov_MOBbgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_MOBbgImgcustomPosY = attributes["hov_MOB".concat(controlName, "bgImgcustomPosY")],
      hov_MOBbgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_MOBbgImgRepeat = attributes["hov_MOB".concat(controlName, "bgImgRepeat")],
      isBgOverlay = attributes["".concat(controlName, "isBgOverlay")],
      ovl_bg_transition = attributes["".concat(controlName, "ovl_bg_transition")],
      ovl_filtersTransition = attributes["".concat(controlName, "ovl_filtersTransition")],
      ovl_opacityTransition = attributes["".concat(controlName, "ovl_opacityTransition")],
      overlayType = attributes["".concat(controlName, "overlayType")],
      overlayColor = attributes["".concat(controlName, "overlayColor")],
      overlayGradient = attributes["".concat(controlName, "overlayGradient")],
      ovl_bgImageURL = attributes["".concat(controlName, "ovl_bgImageURL")],
      ovl_bgImgAttachment = attributes["".concat(controlName, "ovl_bgImgAttachment")],
      ovl_opacity = attributes["".concat(controlName, "ovl_opacity")],
      ovl_blendMode = attributes["".concat(controlName, "ovl_blendMode")],
      ovl_allowFilters = attributes["".concat(controlName, "ovl_allowFilters")],
      ovl_fltrBrightness = attributes["".concat(controlName, "ovl_fltrBrightness")],
      ovl_fltrContrast = attributes["".concat(controlName, "ovl_fltrContrast")],
      ovl_fltrSaturation = attributes["".concat(controlName, "ovl_fltrSaturation")],
      ovl_fltrBlur = attributes["".concat(controlName, "ovl_fltrBlur")],
      ovl_fltrHue = attributes["".concat(controlName, "ovl_fltrHue")],
      ovl_backgroundSize = attributes["".concat(controlName, "ovl_backgroundSize")],
      ovl_bgImgCustomSize = attributes["".concat(controlName, "ovl_bgImgCustomSize")],
      ovl_bgImgCustomSizeUnit = attributes["".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      ovl_bgImgPos = attributes["".concat(controlName, "ovl_bgImgPos")],
      ovl_bgImgcustomPosX = attributes["".concat(controlName, "ovl_bgImgcustomPosX")],
      ovl_bgImgcustomPosXUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      ovl_bgImgcustomPosY = attributes["".concat(controlName, "ovl_bgImgcustomPosY")],
      ovl_bgImgcustomPosYUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      ovl_bgImgRepeat = attributes["".concat(controlName, "ovl_bgImgRepeat")],
      TABovl_backgroundSize = attributes["TAB".concat(controlName, "ovl_backgroundSize")],
      TABovl_bgImgCustomSize = attributes["TAB".concat(controlName, "ovl_bgImgCustomSize")],
      TABovl_bgImgCustomSizeUnit = attributes["TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      TABovl_bgImgPos = attributes["TAB".concat(controlName, "ovl_bgImgPos")],
      TABovl_bgImgcustomPosX = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      TABovl_bgImgcustomPosXUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      TABovl_bgImgcustomPosY = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      TABovl_bgImgcustomPosYUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      TABovl_bgImgRepeat = attributes["TAB".concat(controlName, "ovl_bgImgRepeat")],
      MOBovl_backgroundSize = attributes["MOB".concat(controlName, "ovl_backgroundSize")],
      MOBovl_bgImgCustomSize = attributes["MOB".concat(controlName, "ovl_bgImgCustomSize")],
      MOBovl_bgImgCustomSizeUnit = attributes["MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      MOBovl_bgImgPos = attributes["MOB".concat(controlName, "ovl_bgImgPos")],
      MOBovl_bgImgcustomPosX = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      MOBovl_bgImgcustomPosXUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      MOBovl_bgImgcustomPosY = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      MOBovl_bgImgcustomPosYUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      MOBovl_bgImgRepeat = attributes["MOB".concat(controlName, "ovl_bgImgRepeat")],
      hov_overlayType = attributes["hov_".concat(controlName, "overlayType")],
      hov_overlayColor = attributes["hov_".concat(controlName, "overlayColor")],
      hov_overlayGradient = attributes["hov_".concat(controlName, "overlayGradient")],
      hov_ovl_bgImageURL = attributes["hov_".concat(controlName, "ovl_bgImageURL")],
      hov_ovl_bgImgAttachment = attributes["hov_".concat(controlName, "ovl_bgImgAttachment")],
      hov_ovl_opacity = attributes["hov_".concat(controlName, "ovl_opacity")],
      hov_ovl_blendMode = attributes["hov_".concat(controlName, "ovl_blendMode")],
      hov_ovl_allowFilters = attributes["hov_".concat(controlName, "ovl_allowFilters")],
      hov_ovl_fltrBrightness = attributes["hov_".concat(controlName, "ovl_fltrBrightness")],
      hov_ovl_fltrContrast = attributes["hov_".concat(controlName, "ovl_fltrContrast")],
      hov_ovl_fltrSaturation = attributes["hov_".concat(controlName, "ovl_fltrSaturation")],
      hov_ovl_fltrBlur = attributes["hov_".concat(controlName, "ovl_fltrBlur")],
      hov_ovl_fltrHue = attributes["hov_".concat(controlName, "ovl_fltrHue")],
      hov_ovl_backgroundSize = attributes["hov_".concat(controlName, "ovl_backgroundSize")],
      hov_ovl_bgImgCustomSize = attributes["hov_".concat(controlName, "ovl_bgImgCustomSize")],
      hov_ovl_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_ovl_bgImgPos = attributes["hov_".concat(controlName, "ovl_bgImgPos")],
      hov_ovl_bgImgcustomPosX = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_ovl_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_ovl_bgImgcustomPosY = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_ovl_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_ovl_bgImgRepeat = attributes["hov_".concat(controlName, "ovl_bgImgRepeat")],
      hov_TABovl_backgroundSize = attributes["hov_TAB".concat(controlName, "ovl_backgroundSize")],
      hov_TABovl_bgImgCustomSize = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_TABovl_bgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_TABovl_bgImgPos = attributes["hov_TAB".concat(controlName, "ovl_bgImgPos")],
      hov_TABovl_bgImgcustomPosX = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_TABovl_bgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_TABovl_bgImgcustomPosY = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_TABovl_bgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_TABovl_bgImgRepeat = attributes["hov_TAB".concat(controlName, "ovl_bgImgRepeat")],
      hov_MOBovl_backgroundSize = attributes["hov_MOB".concat(controlName, "ovl_backgroundSize")],
      hov_MOBovl_bgImgCustomSize = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_MOBovl_bgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_MOBovl_bgImgPos = attributes["hov_MOB".concat(controlName, "ovl_bgImgPos")],
      hov_MOBovl_bgImgcustomPosX = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_MOBovl_bgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_MOBovl_bgImgcustomPosY = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_MOBovl_bgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_MOBovl_bgImgRepeat = attributes["hov_MOB".concat(controlName, "ovl_bgImgRepeat")];
  var backgroundStylesDesktop = "\n  ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL || backgroundType === "gradient" && gradientColor ? "\n    background-image: ".concat(backgroundType === "classic" ? "url(\"".concat(bgImageURL, "\")") : backgroundType === "gradient" ? gradientColor : "none", ";\n    ") : " ", "\n      \n  \n      ").concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(backgroundSize && backgroundSize !== "custom" ? "background-size: ".concat(backgroundSize, ";") : backgroundSize === "custom" ? "background-size: ".concat(bgImgCustomSize).concat(bgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(bgImgPos && bgImgPos !== "custom" ? "background-position: ".concat(bgImgPos, ";") : bgImgPos === "custom" ? "background-position: ".concat(bgImgcustomPosX).concat(bgImgcustomPosXUnit, " ").concat(bgImgcustomPosY).concat(bgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(bgImgAttachment ? "background-attachment: ".concat(bgImgAttachment, ";") : " ", "\n  \n          ").concat(bgImgRepeat ? "background-repeat: ".concat(bgImgRepeat, ";") : " ", "\n          \n         \n          ") : " ", "\n\n      ").concat(isBgOverlay ? "\n            z-index: 2;\n            position: relative;\n          " : " ", "\t\n    \n      ").concat(backgroundColor ? "background-color: ".concat(backgroundColor, ";") : " ", "\n  \n    ");
  var hoverBackgroundStylesDesktop = "\n  \n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL || hov_backgroundType === "gradient" && hov_gradientColor ? "\n        background-image: ".concat(hov_backgroundType === "classic" ? "url(\"".concat(hov_bgImageURL, "\")") : hov_backgroundType === "gradient" ? hov_gradientColor : "none", ";    \n        ") : " ", "\n  \n   \n  \n    ").concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_backgroundSize && hov_backgroundSize !== "custom" ? "background-size: ".concat(hov_backgroundSize, ";") : hov_backgroundSize === "custom" ? "background-size: ".concat(hov_bgImgCustomSize).concat(hov_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_bgImgPos && hov_bgImgPos !== "custom" ? "background-position: ".concat(hov_bgImgPos, ";") : hov_bgImgPos === "custom" ? "background-position: ".concat(hov_bgImgcustomPosX).concat(hov_bgImgcustomPosXUnit, " ").concat(hov_bgImgcustomPosY).concat(hov_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_bgImgAttachment ? "background-attachment: ".concat(hov_bgImgAttachment, ";") : " ", "\n  \n        ").concat(hov_bgImgRepeat ? "background-repeat: ".concat(hov_bgImgRepeat, ";") : " ", "\n        \n        ") : " ", "\n  \n        ").concat(hov_backgroundColor ? "background-color: ".concat(hov_backgroundColor, ";") : " ", "\n  \n  ");
  var backgroundStylesTab = "\n      ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(TABbackgroundSize && TABbackgroundSize !== "custom" ? "background-size: ".concat(TABbackgroundSize, ";") : TABbackgroundSize === "custom" ? "background-size: ".concat(TABbgImgCustomSize).concat(TABbgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(TABbgImgPos && TABbgImgPos !== "custom" ? "background-position: ".concat(TABbgImgPos, ";") : TABbgImgPos === "custom" ? "background-position: ".concat(TABbgImgcustomPosX).concat(TABbgImgcustomPosXUnit, " ").concat(TABbgImgcustomPosY).concat(TABbgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(TABbgImgRepeat ? "background-repeat: ".concat(TABbgImgRepeat, ";") : " ", "\n          background-attachment: scroll;\n          ") : " ", "\n  \n    ");
  var hoverBackgroundStylesTab = "\n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_TABbackgroundSize && hov_TABbackgroundSize !== "custom" ? "background-size: ".concat(hov_TABbackgroundSize, ";") : hov_TABbackgroundSize === "custom" ? "background-size: ".concat(hov_TABbgImgCustomSize).concat(hov_TABbgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_TABbgImgPos && hov_TABbgImgPos !== "custom" ? "background-position: ".concat(hov_TABbgImgPos, ";") : hov_TABbgImgPos === "custom" ? "background-position: ".concat(hov_TABbgImgcustomPosX).concat(hov_TABbgImgcustomPosXUnit, " ").concat(hov_TABbgImgcustomPosY).concat(hov_TABbgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_TABbgImgRepeat ? "background-repeat: ".concat(hov_TABbgImgRepeat, ";") : " ", "\n        background-attachment: scroll;\n        ") : " ", "\n  \n  ");
  var backgroundStylesMobile = "\n      ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(MOBbackgroundSize && MOBbackgroundSize !== "custom" ? "background-size: ".concat(MOBbackgroundSize, ";") : MOBbackgroundSize === "custom" ? "background-size: ".concat(MOBbgImgCustomSize).concat(MOBbgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(MOBbgImgPos && MOBbgImgPos !== "custom" ? "background-position: ".concat(MOBbgImgPos, ";") : MOBbgImgPos === "custom" ? "background-position: ".concat(MOBbgImgcustomPosX).concat(MOBbgImgcustomPosXUnit, " ").concat(MOBbgImgcustomPosY).concat(MOBbgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(MOBbgImgRepeat ? "background-repeat: ".concat(MOBbgImgRepeat, ";") : " ", "\n  \n          ") : " ", "\n  \n    ");
  var hoverBackgroundStylesMobile = "\n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_MOBbackgroundSize && hov_MOBbackgroundSize !== "custom" ? "background-size: ".concat(hov_MOBbackgroundSize, ";") : hov_MOBbackgroundSize === "custom" ? "background-size: ".concat(hov_MOBbgImgCustomSize).concat(hov_MOBbgImgCustomSizeUnit, " auto;") : " ", "\n    \n        ").concat(hov_MOBbgImgPos && hov_MOBbgImgPos !== "custom" ? "background-position: ".concat(hov_MOBbgImgPos, ";") : hov_MOBbgImgPos === "custom" ? "background-position: ".concat(hov_MOBbgImgcustomPosX).concat(hov_MOBbgImgcustomPosXUnit, " ").concat(hov_MOBbgImgcustomPosY).concat(hov_MOBbgImgcustomPosYUnit, ";") : " ", "\n    \n        ").concat(hov_MOBbgImgRepeat ? "background-repeat: ".concat(hov_MOBbgImgRepeat, ";") : " ", "\n    \n        ") : " ", "\n    \n    ");
  var overlayStylesDesktop = "\n    \n      ".concat(noOverlay === false && isBgOverlay ? "\n            content: \"\";\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            left: 0;\n            z-index: 0;\n            ".concat(noOverlayBgi === false && overlayType === "classic" && ovl_bgImageURL || overlayType === "gradient" && overlayGradient ? "\n                background-image: ".concat(overlayType === "classic" ? "url(\"".concat(ovl_bgImageURL, "\")") : overlayType === "gradient" ? overlayGradient : "none", ";              \n              ") : " ", "\n           \n            ").concat(overlayColor ? "background-color: ".concat(overlayColor, ";") : " ", "\n            ").concat(ovl_opacity || ovl_opacity === 0 ? "opacity: ".concat(ovl_opacity, ";") : " ", "\n            ").concat(ovl_blendMode ? "mix-blend-mode: ".concat(ovl_blendMode, ";") : " ", "\n            ").concat(ovl_allowFilters ? "filter: brightness( ".concat(ovl_fltrBrightness, "% ) contrast( ").concat(ovl_fltrContrast, "% ) saturate( ").concat(ovl_fltrSaturation, "% ) blur( ").concat(ovl_fltrBlur, "px ) hue-rotate( \n              ").concat(ovl_fltrHue, "deg );") : " ", "\n  \n        ").concat(noOverlayBgi === false && overlayType === "classic" && ovl_bgImageURL ? "\n            ".concat(ovl_backgroundSize && ovl_backgroundSize !== "custom" ? "background-size: ".concat(ovl_backgroundSize, ";") : ovl_backgroundSize === "custom" ? "background-size: ".concat(ovl_bgImgCustomSize).concat(ovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n            ").concat(ovl_bgImgPos && ovl_bgImgPos !== "custom" ? "background-position: ".concat(ovl_bgImgPos, ";") : ovl_bgImgPos === "custom" ? "background-position: ".concat(ovl_bgImgcustomPosX).concat(ovl_bgImgcustomPosXUnit, " ").concat(ovl_bgImgcustomPosY).concat(ovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n            ").concat(ovl_bgImgAttachment ? "background-attachment: ".concat(ovl_bgImgAttachment, ";") : " ", "\n  \n            ").concat(ovl_bgImgRepeat ? "background-repeat: ".concat(ovl_bgImgRepeat, ";") : " ", "\n            \n            ") : " ", "\n  \n        ") : " ", "\n    \n    \n    ");
  var hoverOverlayStylesDesktop = "\n    \n    ".concat(noOverlay === false && isBgOverlay ? "\n        ".concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL || hov_overlayType === "gradient" && hov_overlayGradient ? "\n          background-image: ".concat(hov_overlayType === "classic" ? "url(\"".concat(hov_ovl_bgImageURL, "\")") : hov_overlayType === "gradient" ? hov_overlayGradient : "none", ";\n          ") : " ", "\n  \n        ").concat(hov_overlayColor ? "background-color: ".concat(hov_overlayColor, ";") : " ", "\n        ").concat(hov_ovl_opacity || hov_ovl_opacity === 0 ? "opacity: ".concat(hov_ovl_opacity, ";") : " ", "\n        ").concat(hov_ovl_blendMode ? "mix-blend-mode: ".concat(hov_ovl_blendMode, ";") : " ", "\n        ").concat(hov_ovl_allowFilters ? "filter: brightness( ".concat(hov_ovl_fltrBrightness, "% ) contrast( ").concat(hov_ovl_fltrContrast, "% ) saturate( ").concat(hov_ovl_fltrSaturation, "% ) blur( ").concat(hov_ovl_fltrBlur, "px ) hue-rotate( \n          ").concat(hov_ovl_fltrHue, "deg );") : " ", "\n    \n      ").concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n          ".concat(hov_ovl_backgroundSize && hov_ovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_ovl_backgroundSize, ";") : hov_ovl_backgroundSize === "custom" ? "background-size: ".concat(hov_ovl_bgImgCustomSize).concat(hov_ovl_bgImgCustomSizeUnit, " auto;") : " ", "\n    \n          ").concat(hov_ovl_bgImgPos && hov_ovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_ovl_bgImgPos, ";") : hov_ovl_bgImgPos === "custom" ? "background-position: ".concat(hov_ovl_bgImgcustomPosX).concat(hov_ovl_bgImgcustomPosXUnit, " ").concat(hov_ovl_bgImgcustomPosY).concat(hov_ovl_bgImgcustomPosYUnit, ";") : " ", "\n    \n          ").concat(hov_ovl_bgImgAttachment ? "background-attachment: ".concat(hov_ovl_bgImgAttachment, ";") : " ", "\n    \n          ").concat(hov_ovl_bgImgRepeat ? "background-repeat: ".concat(hov_ovl_bgImgRepeat, ";") : " ", "\n          \n          ") : " ", "\n    \n      ") : " ", "\n    \n    \n    ");
  var overlayStylesTab = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && overlayType === "classic" && ovl_bgImageURL ? "\n        ".concat(TABovl_backgroundSize && TABovl_backgroundSize !== "custom" ? "background-size: ".concat(TABovl_backgroundSize, ";") : TABovl_backgroundSize === "custom" ? "background-size: ".concat(TABovl_bgImgCustomSize).concat(TABovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(TABovl_bgImgPos && TABovl_bgImgPos !== "custom" ? "background-position: ".concat(TABovl_bgImgPos, ";") : TABovl_bgImgPos === "custom" ? "background-position: ".concat(TABovl_bgImgcustomPosX).concat(TABovl_bgImgcustomPosXUnit, " ").concat(TABovl_bgImgcustomPosY).concat(TABovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(TABovl_bgImgRepeat ? "background-repeat: ".concat(TABovl_bgImgRepeat, ";") : " ", "\n          background-attachment: scroll;\n        ") : " ", "\n    \n    ");
  var hoverOverlayStylesTab = "\n  ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n      ".concat(hov_TABovl_backgroundSize && hov_TABovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_TABovl_backgroundSize, ";") : hov_TABovl_backgroundSize === "custom" ? "background-size: ".concat(hov_TABovl_bgImgCustomSize).concat(hov_TABovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_TABovl_bgImgPos && hov_TABovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_TABovl_bgImgPos, ";") : hov_TABovl_bgImgPos === "custom" ? "background-position: ".concat(hov_TABovl_bgImgcustomPosX).concat(hov_TABovl_bgImgcustomPosXUnit, " ").concat(hov_TABovl_bgImgcustomPosY).concat(hov_TABovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_TABovl_bgImgRepeat ? "background-repeat: ".concat(hov_TABovl_bgImgRepeat, ";") : " ", "\n        background-attachment: scroll;\n      ") : " ", "\n  \n  ");
  var overlayStylesMobile = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && overlayType === "classic" && ovl_bgImageURL ? "\n        ".concat(MOBovl_backgroundSize && MOBovl_backgroundSize !== "custom" ? "background-size: ".concat(MOBovl_backgroundSize, ";") : MOBovl_backgroundSize === "custom" ? "background-size: ".concat(MOBovl_bgImgCustomSize).concat(MOBovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(MOBovl_bgImgPos && MOBovl_bgImgPos !== "custom" ? "background-position: ".concat(MOBovl_bgImgPos, ";") : MOBovl_bgImgPos === "custom" ? "background-position: ".concat(MOBovl_bgImgcustomPosX).concat(MOBovl_bgImgcustomPosXUnit, " ").concat(MOBovl_bgImgcustomPosY).concat(MOBovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(MOBovl_bgImgRepeat ? "background-repeat: ".concat(MOBovl_bgImgRepeat, ";") : " ", "\n        ") : " ", "\n    \n    ");
  var hoverOverlayStylesMobile = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n        ".concat(hov_MOBovl_backgroundSize && hov_MOBovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_MOBovl_backgroundSize, ";") : hov_MOBovl_backgroundSize === "custom" ? "background-size: ".concat(hov_MOBovl_bgImgCustomSize).concat(hov_MOBovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_MOBovl_bgImgPos && hov_MOBovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_MOBovl_bgImgPos, ";") : hov_MOBovl_bgImgPos === "custom" ? "background-position: ".concat(hov_MOBovl_bgImgcustomPosX).concat(hov_MOBovl_bgImgcustomPosXUnit, " ").concat(hov_MOBovl_bgImgcustomPosY).concat(hov_MOBovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_MOBovl_bgImgRepeat ? "background-repeat: ".concat(hov_MOBovl_bgImgRepeat, ";") : " ", "\n        ") : " ", "\n    \n    ");
  var bgTransitionStyle = noTransition ? " " : "background ".concat(bg_transition || 0, "s");
  var ovlTransitionStyle = noTransition ? " " : "background ".concat(ovl_bg_transition || 0, "s, opacity ").concat(ovl_opacityTransition || 0, "s, filter ").concat(ovl_filtersTransition || 0, "s");
  return {
    backgroundStylesDesktop: backgroundStylesDesktop,
    hoverBackgroundStylesDesktop: hoverBackgroundStylesDesktop,
    backgroundStylesTab: backgroundStylesTab,
    hoverBackgroundStylesTab: hoverBackgroundStylesTab,
    backgroundStylesMobile: backgroundStylesMobile,
    hoverBackgroundStylesMobile: hoverBackgroundStylesMobile,
    overlayStylesDesktop: overlayStylesDesktop,
    hoverOverlayStylesDesktop: hoverOverlayStylesDesktop,
    overlayStylesTab: overlayStylesTab,
    hoverOverlayStylesTab: hoverOverlayStylesTab,
    overlayStylesMobile: overlayStylesMobile,
    hoverOverlayStylesMobile: hoverOverlayStylesMobile,
    bgTransitionStyle: bgTransitionStyle,
    ovlTransitionStyle: ovlTransitionStyle
  };
};

/***/ }),

/***/ "./util/helpers/borderShadowHelpers.js":
/*!*********************************************!*\
  !*** ./util/helpers/borderShadowHelpers.js ***!
  \*********************************************/
/*! exports provided: generateBorderShadowAttributes, generateBorderShadowStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return generateBorderShadowAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return generateBorderShadowStyles; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimensionHelpers */ "./util/helpers/dimensionHelpers.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Important: the following "generateBorderShadowAttributes" function must be declared below the "generateDimensionsAttributes" function declaration
// function to generate BorderShadow control's attributes

var generateBorderShadowAttributes = function generateBorderShadowAttributes(controlName) {
  var _objectSpread2, _shdAttrs, _transitionAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _defaults$bdrDefaults = defaults.bdrDefaults,
      bdrDefaults = _defaults$bdrDefaults === void 0 ? {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  } : _defaults$bdrDefaults,
      _defaults$rdsDefaults = defaults.rdsDefaults,
      rdsDefaults = _defaults$rdsDefaults === void 0 ? {} : _defaults$rdsDefaults,
      _defaults$noBorder = defaults.noBorder,
      noBorder = _defaults$noBorder === void 0 ? false : _defaults$noBorder,
      _defaults$noShadow = defaults.noShadow,
      noShadow = _defaults$noShadow === void 0 ? false : _defaults$noShadow;

  var bdrAttrs = _objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(controlName, "BorderType"), {
    type: "string",
    default: "normal"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(controlName, "borderColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(controlName, "borderStyle"), {
    type: "string",
    default: "none"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(controlName, "HborderColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(controlName, "HborderStyle"), {
    type: "string",
    default: "none"
  }), _objectSpread2), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])("".concat(controlName, "Bdr_"), bdrDefaults)), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])("".concat(controlName, "Rds_"), rdsDefaults)), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])("".concat(controlName, "HBdr_"))), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsAttributes"])("".concat(controlName, "HRds_")));

  var shdAttrs = (_shdAttrs = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "hOffset"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "vOffset"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "blur"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "spread"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "shadowColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "inset"), {
    type: "boolean",
    default: false
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "shadowType"), {
    type: "string",
    default: "normal"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "hoverHOffset"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "hoverVOffset"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "hoverBlur"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "hoverSpread"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "hoverShadowColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_shdAttrs, "".concat(controlName, "hoverInset"), {
    type: "boolean",
    default: false
  }), _shdAttrs);
  var transitionAttrs = (_transitionAttrs = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_transitionAttrs, "".concat(controlName, "borderTransition"), {
    type: "number",
    default: 0.5
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_transitionAttrs, "".concat(controlName, "radiusTransition"), {
    type: "number",
    default: 0.5
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_transitionAttrs, "".concat(controlName, "shadowTransition"), {
    type: "number",
    default: 0.5
  }), _transitionAttrs);

  if (noBorder === true) {
    return _objectSpread(_objectSpread({}, shdAttrs), transitionAttrs);
  } else if (noShadow === true) {
    return _objectSpread(_objectSpread({}, bdrAttrs), transitionAttrs);
  } else {
    return _objectSpread(_objectSpread(_objectSpread({}, bdrAttrs), shdAttrs), transitionAttrs);
  }
}; // Important: the following "generateBorderShadowStyles" function must be declared below the "generateDimensionsControlStyles" function declaration
// function to generate BorderShadow control's Styles for an element based on it's controlName(prefix)

var generateBorderShadowStyles = function generateBorderShadowStyles(_ref) {
  var controlName = _ref.controlName,
      attributes = _ref.attributes,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var borderStylesDesktop = "";
  var borderStylesTab = "";
  var borderStylesMobile = "";
  var radiusStylesDesktop = "";
  var radiusStylesTab = "";
  var radiusStylesMobile = "";
  var HborderStylesDesktop = "";
  var HborderStylesTab = "";
  var HborderStylesMobile = "";
  var HradiusStylesDesktop = "";
  var HradiusStylesTab = "";
  var HradiusStylesMobile = "";

  if (noBorder !== true) {
    var _generateDimensionsCo = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "Bdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_borderStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
        F_borderStylesTab = _generateDimensionsCo.dimensionStylesTab,
        F_borderStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

    var _generateDimensionsCo2 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "Rds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_radiusStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
        F_radiusStylesTab = _generateDimensionsCo2.dimensionStylesTab,
        F_radiusStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

    var _generateDimensionsCo3 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "HBdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_HborderStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
        F_HborderStylesTab = _generateDimensionsCo3.dimensionStylesTab,
        F_HborderStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

    var _generateDimensionsCo4 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_1__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "HRds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_HradiusStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
        F_HradiusStylesTab = _generateDimensionsCo4.dimensionStylesTab,
        F_HradiusStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

    borderStylesDesktop = F_borderStylesDesktop;
    borderStylesTab = F_borderStylesTab;
    borderStylesMobile = F_borderStylesMobile;
    radiusStylesDesktop = F_radiusStylesDesktop;
    radiusStylesTab = F_radiusStylesTab;
    radiusStylesMobile = F_radiusStylesMobile;
    HborderStylesDesktop = F_HborderStylesDesktop;
    HborderStylesTab = F_HborderStylesTab;
    HborderStylesMobile = F_HborderStylesMobile;
    HradiusStylesDesktop = F_HradiusStylesDesktop;
    HradiusStylesTab = F_HradiusStylesTab;
    HradiusStylesMobile = F_HradiusStylesMobile;
  } // const {
  //   dimensionStylesDesktop: borderStylesDesktop,
  //   dimensionStylesTab: borderStylesTab,
  //   dimensionStylesMobile: borderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Bdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: radiusStylesDesktop,
  //   dimensionStylesTab: radiusStylesTab,
  //   dimensionStylesMobile: radiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Rds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HborderStylesDesktop,
  //   dimensionStylesTab: HborderStylesTab,
  //   dimensionStylesMobile: HborderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HBdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HradiusStylesDesktop,
  //   dimensionStylesTab: HradiusStylesTab,
  //   dimensionStylesMobile: HradiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HRds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });


  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      _attributes$ = attributes["".concat(controlName, "borderColor")],
      borderColor = _attributes$ === void 0 ? "#333333" : _attributes$,
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      _attributes$2 = attributes["".concat(controlName, "HborderColor")],
      HborderColor = _attributes$2 === void 0 ? borderColor : _attributes$2,
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      _attributes$3 = attributes["".concat(controlName, "hOffset")],
      hOffset = _attributes$3 === void 0 ? 0 : _attributes$3,
      _attributes$4 = attributes["".concat(controlName, "vOffset")],
      vOffset = _attributes$4 === void 0 ? 0 : _attributes$4,
      _attributes$5 = attributes["".concat(controlName, "blur")],
      blur = _attributes$5 === void 0 ? 0 : _attributes$5,
      _attributes$6 = attributes["".concat(controlName, "spread")],
      spread = _attributes$6 === void 0 ? 0 : _attributes$6,
      inset = attributes["".concat(controlName, "inset")],
      _attributes$7 = attributes["".concat(controlName, "hoverShadowColor")],
      hoverShadowColor = _attributes$7 === void 0 ? shadowColor : _attributes$7,
      _attributes$8 = attributes["".concat(controlName, "hoverHOffset")],
      hoverHOffset = _attributes$8 === void 0 ? hOffset : _attributes$8,
      _attributes$9 = attributes["".concat(controlName, "hoverVOffset")],
      hoverVOffset = _attributes$9 === void 0 ? vOffset : _attributes$9,
      _attributes$10 = attributes["".concat(controlName, "hoverBlur")],
      hoverBlur = _attributes$10 === void 0 ? blur : _attributes$10,
      _attributes$11 = attributes["".concat(controlName, "hoverSpread")],
      hoverSpread = _attributes$11 === void 0 ? spread : _attributes$11,
      borderTransition = attributes["".concat(controlName, "borderTransition")],
      radiusTransition = attributes["".concat(controlName, "radiusTransition")],
      shadowTransition = attributes["".concat(controlName, "shadowTransition")];
  var styesDesktop = "  \n      ".concat(noBorder !== true ? "\n          ".concat(radiusStylesDesktop, "\n          ").concat(borderStyle !== "none" && borderColor ? "\n              ".concat(borderStylesDesktop, "\n              border-color: ").concat(borderColor, ";\n              border-style: ").concat(borderStyle, ";\n              ") : " ", "\n          ") : " ", "\n    \n      ").concat(noShadow !== true ? shadowColor ? "box-shadow: ".concat(shadowColor, " ").concat(hOffset, "px ").concat(vOffset, "px ").concat(blur, "px ").concat(spread, "px ").concat(inset ? "inset" : "", ";") : " " : " ", "\n  \n  \n    ");
  var styesTab = "  \n    ".concat(noBorder !== true ? "\n        ".concat(borderColor ? borderStylesTab : " ", "\n        ").concat(radiusStylesTab, "\n        ") : " ", "\n      \n    ");
  var styesMobile = "\n    ".concat(noBorder !== true ? "\n        ".concat(borderColor ? borderStylesMobile : " ", "\n        ").concat(radiusStylesMobile, "\n        ") : " ", "\n    ");
  var stylesHoverDesktop = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? "\n              ".concat(HborderColor !== borderColor ? "border-color: ".concat(HborderColor, ";") : " ", " \n              ").concat(HborderStyle !== borderStyle ? "border-style: ".concat(HborderStyle, ";") : " ", "\n              ").concat(HborderStylesDesktop, "\n            ") : " ", "\n  \n        ").concat(HradiusStylesDesktop, "    \n        ") : " ", "   \n     \n    ").concat(noShadow !== true ? hoverShadowColor ? "box-shadow: ".concat(hoverShadowColor, " ").concat(hoverHOffset, "px ").concat(hoverVOffset, "px ").concat(hoverBlur, "px ").concat(hoverSpread, "px ").concat(inset ? "inset" : " ", ";") : " " : " ", "\n  \n    ");
  var stylesHoverTab = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? HborderStylesTab : " ", "\n        ").concat(HradiusStylesTab, "  \n        ") : " ", "\n    ");
  var stylesHoverMobile = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? HborderStylesMobile : " ", "\n        ").concat(HradiusStylesMobile, "\n        ") : " ", "\n     \n    ");
  var transitionStyle = "\n  border ".concat(borderTransition || 0, "s, border-radius ").concat(radiusTransition || 0, "s, box-shadow ").concat(shadowTransition || 0, "s\n  ");
  return {
    styesDesktop: styesDesktop,
    styesTab: styesTab,
    styesMobile: styesMobile,
    stylesHoverDesktop: stylesHoverDesktop,
    stylesHoverTab: stylesHoverTab,
    stylesHoverMobile: stylesHoverMobile,
    transitionStyle: transitionStyle
  };
};

/***/ }),

/***/ "./util/helpers/dimensionHelpers.js":
/*!******************************************!*\
  !*** ./util/helpers/dimensionHelpers.js ***!
  \******************************************/
/*! exports provided: generateDimensionsAttributes, generateDimensionsControlStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return generateDimensionsAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return generateDimensionsControlStyles; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hasVal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasVal */ "./util/helpers/hasVal.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // function to generate New Dimensions-Control's attributes for multiple Dimensions control based on the array of values(prefixs)

var generateDimensionsAttributes = function generateDimensionsAttributes(controlName) {
  var _objectSpread2, _objectSpread3;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var top = defaults.top,
      right = defaults.right,
      bottom = defaults.bottom,
      left = defaults.left,
      _defaults$isLinked = defaults.isLinked,
      isLinked = _defaults$isLinked === void 0 ? true : _defaults$isLinked;
  var desktopTop = Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(top) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Top"), {
    type: "string",
    default: "".concat(top)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Top"), {
    type: "string"
  });
  var desktopRight = Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(right) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Right"), {
    type: "string",
    default: "".concat(right)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Right"), {
    type: "string"
  });
  var desktopBottom = Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(bottom) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Bottom"), {
    type: "string",
    default: "".concat(bottom)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Bottom"), {
    type: "string"
  });
  var desktopLeft = Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(left) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Left"), {
    type: "string",
    default: "".concat(left)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Left"), {
    type: "string"
  });
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(controlName, "isLinked"), {
    type: "boolean",
    default: isLinked
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _objectSpread2), desktopTop), desktopRight), desktopBottom), desktopLeft), {}, (_objectSpread3 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "TAB".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "TAB".concat(controlName, "Top"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "TAB".concat(controlName, "Right"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "TAB".concat(controlName, "Bottom"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "TAB".concat(controlName, "Left"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "MOB".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "MOB".concat(controlName, "Top"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "MOB".concat(controlName, "Right"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "MOB".concat(controlName, "Bottom"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, "MOB".concat(controlName, "Left"), {
    type: "string"
  }), _objectSpread3));
}; //
// function to generate dimensions-controls styles for an element based on it's controlName(prefix)

var generateDimensionsControlStyles = function generateDimensionsControlStyles(_ref9) {
  var controlName = _ref9.controlName,
      styleFor = _ref9.styleFor,
      attributes = _ref9.attributes;
  var isLinked = attributes["".concat(controlName, "isLinked")],
      dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var dimensionStylesDesktop = " ";
  var dimensionStylesTab = " ";
  var dimensionStylesMobile = " ";

  if (isLinked === true) {
    if (styleFor === "border") {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "border-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; ") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else if (styleFor === "border-radius") {
      dimensionStylesDesktop = "\n                ".concat(dimensionTop ? "border-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    }
  } else {
    if (styleFor === "border") {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "border-top-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; z-index:999;") : " ", "\n            ").concat(dimensionRight ? "border-right-width: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionLeft ? "border-left-width: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionBottom ? "border-bottom-width: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-top-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "border-right-width: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "border-left-width: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "border-bottom-width: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-top-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "border-right-width: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "border-left-width: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "border-bottom-width: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else if (styleFor === "border-radius") {
      dimensionStylesDesktop = "\n                ".concat(dimensionTop ? "border-top-left-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionRight ? "border-top-right-radius: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-top-left-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "border-top-right-radius: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-top-left-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "border-top-right-radius: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    }
  }

  return {
    dimensionStylesDesktop: dimensionStylesDesktop,
    dimensionStylesTab: dimensionStylesTab,
    dimensionStylesMobile: dimensionStylesMobile
  };
};

/***/ }),

/***/ "./util/helpers/flipboxHelpers.js":
/*!****************************************!*\
  !*** ./util/helpers/flipboxHelpers.js ***!
  \****************************************/
/*! exports provided: getFlipTransform, getButtonClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return getFlipTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return getButtonClasses; });
// Return flilp value based on type
var getFlipTransform = function getFlipTransform(flipType) {
  switch (flipType) {
    case "flip-left":
      return "rotateY(-180deg)";

    case "flip-right":
      return "rotateY(180deg)";

    case "flip-up":
      return "rotateX(180deg)";

    case "flip-bottom":
      return "rotateX(-180deg)";

    case "zoom-in":
      return "scale(1.1)";

    case "zoom-out":
      return "scale(0.8)";
  }
}; // Return css class names based on button style name

var getButtonClasses = function getButtonClasses(buttonStyle) {
  switch (buttonStyle) {
    case "styleOne":
      return "btn-gradient blue";

    case "styleTwo":
      return "btn-gradient purple";

    case "styleThree":
      return "btn-gradient orange";

    case "custom":
      return "";
  }
};

/***/ }),

/***/ "./util/helpers/funcsForUseEffect.js":
/*!*******************************************!*\
  !*** ./util/helpers/funcsForUseEffect.js ***!
  \*******************************************/
/*! exports provided: mimmikCssForResBtns, mimmikCssForPreviewBtnClick, mimmikCssOnPreviewBtnClickWhileBlockSelected, duplicateBlockIdFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForResBtns", function() { return mimmikCssForResBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForPreviewBtnClick", function() { return mimmikCssForPreviewBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssOnPreviewBtnClickWhileBlockSelected", function() { return mimmikCssOnPreviewBtnClickWhileBlockSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateBlockIdFix", function() { return duplicateBlockIdFix; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
// function to mimmik css when clicking the responsive buttons in the inspector panel
var mimmikCssForResBtns = function mimmikCssForResBtns(_ref) {
  var _ref$isForPreviewButt = _ref.isForPreviewButton,
      isForPreviewButton = _ref$isForPreviewButt === void 0 ? false : _ref$isForPreviewButt,
      domObj = _ref.domObj,
      resOption = _ref.resOption;
  var allEbBlocksWrapper;

  if (isForPreviewButton) {
    allEbBlocksWrapper = domObj.querySelectorAll(".eb-guten-block-main-parent-wrapper > style");
  } else {
    allEbBlocksWrapper = domObj.querySelectorAll(".eb-guten-block-main-parent-wrapper:not(.is-selected) > style");
  }

  if (allEbBlocksWrapper.length < 1) return;
  allEbBlocksWrapper.forEach(function (styleTag) {
    var cssStrings = styleTag.textContent;
    var minCss = cssStrings.replace(/\s+/g, " ");
    var regexCssMimmikSpace = /(mimmikcssStart\s\*\/)(.+)(\/\*\smimmikcssEnd)/i;
    var newCssStrings = " ";

    if (resOption === "Tablet") {
      var tabCssStrings = (minCss.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i) || [, " "])[1];
      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1 ".concat(tabCssStrings, " $3"));
    } else if (resOption === "Mobile") {
      var _tabCssStrings = (minCss.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i) || [, " "])[1];
      var mobCssStrings = (minCss.match(/mobcssStart\s\*\/(.+)(?=\/\*\smobcssEnd)/i) || [, " "])[1];
      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1 ".concat(_tabCssStrings, " ").concat(mobCssStrings, " $3"));
    } else {
      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1  $3");
    }

    styleTag.textContent = newCssStrings;
  });
}; //
// IMPORTANT: The following fuction declaration must be below the 'mimmikCssForResBtns' function declaration
// function to mimmik css for responsive preview when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button

var mimmikCssForPreviewBtnClick = function mimmikCssForPreviewBtnClick(_ref2) {
  var domObj = _ref2.domObj,
      select = _ref2.select;
  var bodyClasses = domObj.body.className;
  if (/eb\-mimmik\-added/i.test(bodyClasses)) return;
  domObj.body.classList.add("eb-mimmik-added");
  var wpResBtnsWrap = domObj.querySelector("#editor .edit-post-layout + .popover-slot");
  wpResBtnsWrap.addEventListener("click", function (e) {
    if (/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)) {
      setTimeout(function () {
        var resOption = select("core/edit-post").__experimentalGetPreviewDeviceType();

        mimmikCssForResBtns({
          isForPreviewButton: true,
          domObj: domObj,
          resOption: resOption
        });
      }, 0);
    }
  });
}; // IMPORTANT: The following fuction declaration must be below the 'mimmikCssForResBtns' function declaration
// function to mimmik css for responsive preview when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM

var mimmikCssOnPreviewBtnClickWhileBlockSelected = function mimmikCssOnPreviewBtnClickWhileBlockSelected(_ref3) {
  var domObj = _ref3.domObj,
      select = _ref3.select,
      setAttributes = _ref3.setAttributes;
  var wpResBtnsWrap = domObj.querySelector("#editor .edit-post-layout + .popover-slot");

  var handleCLick = function handleCLick(e) {
    if (/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)) {
      setTimeout(function () {
        var resOption = select("core/edit-post").__experimentalGetPreviewDeviceType();

        mimmikCssForResBtns({
          isForPreviewButton: true,
          domObj: domObj,
          resOption: resOption
        });
        setAttributes({
          resOption: resOption
        });
      }, 0);
    }
  };

  wpResBtnsWrap.addEventListener("click", handleCLick);
  return function () {
    wpResBtnsWrap.removeEventListener("click", handleCLick);
  };
}; //
// this function is for creating a unique blockId for each block's unique className

var duplicateBlockIdFix = function duplicateBlockIdFix(_ref4) {
  var BLOCK_PREFIX = _ref4.BLOCK_PREFIX,
      blockId = _ref4.blockId,
      setAttributes = _ref4.setAttributes,
      select = _ref4.select,
      clientId = _ref4.clientId;
  var unique_id = BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);
  /**
   * Define and Generate Unique Block ID
   */

  if (!blockId) {
    setAttributes({
      blockId: unique_id
    });
  }
  /**
   * Assign New Unique ID when duplicate BlockId found
   * Mostly happens when User Duplicate a Block
   */


  var all_blocks = select("core/block-editor").getBlocks();
  var duplicateFound = false;

  var fixDuplicateBlockId = function fixDuplicateBlockId(blocks) {
    if (duplicateFound) return;

    var _iterator = _createForOfIteratorHelper(blocks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var innerBlocks = item.innerBlocks;

        if (item.attributes.blockId === blockId) {
          if (item.clientId !== clientId) {
            setAttributes({
              blockId: unique_id
            });
            duplicateFound = true;
            return;
          } else if (innerBlocks.length > 0) {
            fixDuplicateBlockId(innerBlocks);
          }
        } else if (innerBlocks.length > 0) {
          fixDuplicateBlockId(innerBlocks);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  fixDuplicateBlockId(all_blocks);
};

/***/ }),

/***/ "./util/helpers/handlingPreviewBtnsHelpers.js":
/*!****************************************************!*\
  !*** ./util/helpers/handlingPreviewBtnsHelpers.js ***!
  \****************************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
//
// These following 3 functions to handle the resBtns click
// function 1: to handle desktop button click
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setPreviewDeviceType = _ref.setPreviewDeviceType,
      setAttributes = _ref.setAttributes;
  setAttributes({
    resOption: "Desktop"
  });
  setPreviewDeviceType("Desktop");
}; // function 2: to handle Tab button click

var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setPreviewDeviceType = _ref2.setPreviewDeviceType,
      setAttributes = _ref2.setAttributes;
  setAttributes({
    resOption: "Tablet"
  });
  setPreviewDeviceType("Tablet");
}; // function 3: to handle Mobile button click

var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setPreviewDeviceType = _ref3.setPreviewDeviceType,
      setAttributes = _ref3.setAttributes;
  setAttributes({
    resOption: "Mobile"
  });
  setPreviewDeviceType("Mobile");
};

/***/ }),

/***/ "./util/helpers/hasVal.js":
/*!********************************!*\
  !*** ./util/helpers/hasVal.js ***!
  \********************************/
/*! exports provided: hasVal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVal", function() { return hasVal; });
// check if range controller input numbers  has value
var hasVal = function hasVal(val) {
  return val || val === 0;
};

/***/ }),

/***/ "./util/helpers/index.js":
/*!*******************************!*\
  !*** ./util/helpers/index.js ***!
  \*******************************/
/*! exports provided: generateBackgroundControlStyles, generateBackgroundAttributes, generateTypographyAttributes, generateTypographyStyles, generateDimensionsAttributes, generateDimensionsControlStyles, generateBorderShadowAttributes, generateBorderShadowStyles, generateResponsiveRangeStyles, generateResponsiveRangeAttributes, textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists, handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick, mimmikCssForResBtns, mimmikCssForPreviewBtnClick, mimmikCssOnPreviewBtnClickWhileBlockSelected, duplicateBlockIdFix, getFlipTransform, getButtonClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundHelpers */ "./util/helpers/backgroundHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__["generateBackgroundControlStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__["generateBackgroundAttributes"]; });

/* harmony import */ var _typoHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typoHelpers */ "./util/helpers/typoHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return _typoHelpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return _typoHelpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyStyles"]; });

/* harmony import */ var _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensionHelpers */ "./util/helpers/dimensionHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"]; });

/* harmony import */ var _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borderShadowHelpers */ "./util/helpers/borderShadowHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__["generateBorderShadowAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__["generateBorderShadowStyles"]; });

/* harmony import */ var _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveRangeHelpers */ "./util/helpers/responsiveRangeHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"]; });

/* harmony import */ var _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miniHelperFuncs */ "./util/helpers/miniHelperFuncs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["textInsideForEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["generateRandomNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["hardMinifyCssStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["isCssExists"]; });

/* harmony import */ var _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlingPreviewBtnsHelpers */ "./util/helpers/handlingPreviewBtnsHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleDesktopBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleTabBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleMobileBtnClick"]; });

/* harmony import */ var _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funcsForUseEffect */ "./util/helpers/funcsForUseEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForResBtns", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForResBtns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForPreviewBtnClick", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForPreviewBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssOnPreviewBtnClickWhileBlockSelected", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssOnPreviewBtnClickWhileBlockSelected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duplicateBlockIdFix", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["duplicateBlockIdFix"]; });

/* harmony import */ var _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flipboxHelpers */ "./util/helpers/flipboxHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__["getFlipTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__["getButtonClasses"]; });









 //
// // unused function
// export const getBackgroundImage = (type, gradientValue, imageURL) => {
//   switch (type) {
//     case "fill":
//       return "none";
//     case "gradient":
//       return gradientValue;
//     case "image":
//       if (imageURL) {
//         return `url(${imageURL})`;
//       }
//       return "none";
//   }
// };

/***/ }),

/***/ "./util/helpers/miniHelperFuncs.js":
/*!*****************************************!*\
  !*** ./util/helpers/miniHelperFuncs.js ***!
  \*****************************************/
/*! exports provided: textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return textInsideForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return hardMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return softMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return isCssExists; });
// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown in the number-counter block
var textInsideForEdit = function textInsideForEdit(value, isShowSeparator, separator) {
  return isShowSeparator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value.toString();
}; // generateRandomNumber function is for generating a random number

var generateRandomNumber = function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000000);
}; // hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var hardMinifyCssStrings = function hardMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ").replace(/(?<=\:).+(?=\;)/g, function (match) {
    return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
  }) // .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
  .replace(/\s+(?![\w\d\.\-\#]+\{)/g, "").replace(/\s+/g, " ").replace(/__s_p_a_c_e__/g, " ");
}; // softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var softMinifyCssStrings = function softMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ");
}; // check if css string is empty or not.

var isCssExists = function isCssExists(cssString) {
  return /.+(?=\:(?!hover)(?!focus))/.test(cssString);
};

/***/ }),

/***/ "./util/helpers/responsiveRangeHelpers.js":
/*!************************************************!*\
  !*** ./util/helpers/responsiveRangeHelpers.js ***!
  \************************************************/
/*! exports provided: generateResponsiveRangeAttributes, generateResponsiveRangeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return generateResponsiveRangeAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return generateResponsiveRangeStyles; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// function to generate responsive range controller attributes for multiple range control based on the array of prefix
var generateResponsiveRangeAttributes = function generateResponsiveRangeAttributes(controlName) {
  var _ref3, _objectSpread2;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultRange = defaults.defaultRange,
      noUnits = defaults.noUnits;
  var desktop = defaultRange ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Range"), {
    type: "number",
    default: defaultRange
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Range"), {
    type: "number"
  });
  var units = noUnits === true ? {} : (_ref3 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, "".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, "TAB".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, "MOB".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _ref3);
  return _objectSpread(_objectSpread({}, desktop), {}, (_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "TAB".concat(controlName, "Range"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "MOB".concat(controlName, "Range"), {
    type: "number"
  }), _objectSpread2), units);
}; // function to generate responsive range control styles for an element based on it's prefix

var generateResponsiveRangeStyles = function generateResponsiveRangeStyles(_ref4) {
  var controlName = _ref4.controlName,
      property = _ref4.property,
      attributes = _ref4.attributes,
      customUnit = _ref4.customUnit;
  var desktopSizeUnit;
  var TABsizeUnit;
  var MOBsizeUnit;

  if (!customUnit) {
    desktopSizeUnit = attributes["".concat(controlName, "Unit")];
    TABsizeUnit = attributes["TAB".concat(controlName, "Unit")];
    MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")];
  } else {
    desktopSizeUnit = TABsizeUnit = MOBsizeUnit = customUnit;
  }

  var desktopRange = attributes["".concat(controlName, "Range")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];
  var rangeStylesDesktop = desktopRange || desktopRange === 0 ? property + ":" + desktopRange + (customUnit || desktopSizeUnit) + ";" : "";
  var rangeStylesTab = TABrange || TABrange === 0 ? property + ":" + TABrange + (customUnit || TABsizeUnit) + ";" : "";
  var rangeStylesMobile = MOBrange || MOBrange === 0 ? property + ":" + MOBrange + (customUnit || MOBsizeUnit) + ";" : "";
  return {
    rangeStylesDesktop: rangeStylesDesktop,
    rangeStylesTab: rangeStylesTab,
    rangeStylesMobile: rangeStylesMobile
  };
};

/***/ }),

/***/ "./util/helpers/typoHelpers.js":
/*!*************************************!*\
  !*** ./util/helpers/typoHelpers.js ***!
  \*************************************/
/*! exports provided: generateTypographyAttributes, generateTypographyStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return generateTypographyAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return generateTypographyStyles; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hasVal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasVal */ "./util/helpers/hasVal.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // function to generate typography attributes for multiple typography control based on the array of prefix

var generateTypographyAttributes = function generateTypographyAttributes(prefixArray) {
  var typoAttrs = prefixArray.reduce(function (total, current) {
    var _result;

    var result = (_result = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "FontFamily"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "SizeUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "FontSize"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "FontWeight"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "FontStyle"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "TextTransform"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "TextDecoration"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "LetterSpacingUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "LetterSpacing"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "LineHeightUnit"), {
      type: "string",
      default: "em"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "".concat(current, "LineHeight"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "TAB".concat(current, "SizeUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "TAB".concat(current, "FontSize"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "TAB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "TAB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "TAB".concat(current, "LineHeightUnit"), {
      type: "string",
      default: "em"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "TAB".concat(current, "LineHeight"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "MOB".concat(current, "SizeUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "MOB".concat(current, "FontSize"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "MOB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "MOB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "MOB".concat(current, "LineHeightUnit"), {
      type: "string",
      default: "em"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_result, "MOB".concat(current, "LineHeight"), {
      type: "number"
    }), _result);
    return _objectSpread(_objectSpread({}, total), result);
  }, {});
  return typoAttrs;
}; //
// function to generate typography styles for an element based on it's prefix

var generateTypographyStyles = function generateTypographyStyles(_ref) {
  var prefixConstant = _ref.prefixConstant,
      defaultFontSize = _ref.defaultFontSize,
      attributes = _ref.attributes;
  var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
      fontStyle = attributes["".concat(prefixConstant, "FontStyle")],
      textTransform = attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
      _attributes$ = attributes["".concat(prefixConstant, "FontSize")],
      fontSize = _attributes$ === void 0 ? defaultFontSize : _attributes$,
      sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")];
  var typoStylesDesktop = "\n              ".concat(fontFamily ? "font-family: ".concat(fontFamily, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(fontSize) ? "font-size: ".concat(fontSize).concat(sizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(lineHeight) ? "line-height: ".concat(lineHeight).concat(lineHeightUnit, ";") : " ", "\n              ").concat(fontWeight ? "font-weight: ".concat(fontWeight, ";") : " ", "\n              ").concat(fontStyle ? "font-style: ".concat(fontStyle, ";") : " ", "\n              ").concat(textDecoration ? "text-decoration: ".concat(textDecoration, ";") : " ", "\n              ").concat(textTransform ? "text-transform: ".concat(textTransform, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(letterSpacing) ? "letter-spacing: ".concat(letterSpacing).concat(letterSpacingUnit, ";") : " ", "\n          ");
  var typoStylesTab = "\n              ".concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(TABfontSize) ? "font-size: ".concat(TABfontSize).concat(TABsizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(TABlineHeight) ? "line-height: ".concat(TABlineHeight).concat(TABlineHeightUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(TABletterSpacing) ? "letter-spacing: ".concat(TABletterSpacing).concat(TABletterSpacingUnit, ";") : " ", "\n          ");
  var typoStylesMobile = "\n              ".concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(MOBfontSize) ? "font-size: ".concat(MOBfontSize).concat(MOBsizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(MOBlineHeight) ? "line-height: ".concat(MOBlineHeight).concat(MOBlineHeightUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_1__["hasVal"])(MOBletterSpacing) ? "letter-spacing: ".concat(MOBletterSpacing).concat(MOBletterSpacingUnit, ";") : " ", "\n          ");
  return {
    typoStylesDesktop: typoStylesDesktop,
    typoStylesTab: typoStylesTab,
    typoStylesMobile: typoStylesMobile
  };
};

/***/ }),

/***/ "./util/icons.js":
/*!***********************!*\
  !*** ./util/icons.js ***!
  \***********************/
/*! exports provided: AccordionIcon, ButtonIcon, CountdownIcon, CounterIcon, CallToActionIcon, FlipboxIcon, InfoboxIcon, NoticeIcon, PricingTableIcon, ProgressbarIcon, InteractivePromoIcon, SocialIcon, TeamMembersIcon, TestimonialIcon, ImageComparisonIcon, TestIcon, WrapperIcon, InstagramIcon, ImageGalleryIcon, HeadingIcon, SliderIcon, TypingTextIcon, InstagramOriginalIcon, SaveIcon, ParallaxSliderIcon, CategoryIcon, ToggleContentIcon, TypographyIcon, UserIcon, LeftAlignIcon, RightAlignIcon, CenterAlignIcon, JustifyAlignIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionIcon", function() { return AccordionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIcon", function() { return ButtonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownIcon", function() { return CountdownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterIcon", function() { return CounterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToActionIcon", function() { return CallToActionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipboxIcon", function() { return FlipboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoboxIcon", function() { return InfoboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeIcon", function() { return NoticeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingTableIcon", function() { return PricingTableIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarIcon", function() { return ProgressbarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivePromoIcon", function() { return InteractivePromoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return SocialIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMembersIcon", function() { return TeamMembersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialIcon", function() { return TestimonialIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComparisonIcon", function() { return ImageComparisonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestIcon", function() { return TestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperIcon", function() { return WrapperIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramIcon", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryIcon", function() { return ImageGalleryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingIcon", function() { return HeadingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderIcon", function() { return SliderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingTextIcon", function() { return TypingTextIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramOriginalIcon", function() { return InstagramOriginalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveIcon", function() { return SaveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxSliderIcon", function() { return ParallaxSliderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIcon", function() { return CategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleContentIcon", function() { return ToggleContentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyIcon", function() { return TypographyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return UserIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftAlignIcon", function() { return LeftAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightAlignIcon", function() { return RightAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterAlignIcon", function() { return CenterAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustifyAlignIcon", function() { return JustifyAlignIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var AccordionIcon = function AccordionIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "256",
    height: "256",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-8.333%",
    x2: "50%",
    y2: "108.44%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#6DC7FF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#E6ABFF",
    offset: "100%"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "eb-icon-accordion"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M128,0 C91.9749264,0 59.4418701,14.8956537 36.1835498,38.8488312 L203.514459,38.8488312 L203.514459,119.749264 L0.277056277,119.749264 C0.103064935,122.478823 0,125.227221 0,128 C0,130.065732 0.0664935065,132.11484 0.164017316,134.15619 L203.514459,134.15619 L203.514459,215.056623 L34.1732294,215.056623 C57.5468052,240.239931 90.9309784,256 128,256 C198.692571,256 256,198.692571 256,128 C256,57.3074286 198.692571,0 128,0 Z",
    id: "Path",
    fill: "url(#linearGradient-1)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    id: "Path",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    points: "186.891082 74.2621645 171.979913 74.2621645 171.979913 59.3509957 160.797922 59.3509957 160.797922 74.2621645 145.886753 74.2621645 145.886753 85.4441558 160.797922 85.4441558 160.797922 100.355325 171.979913 100.355325 171.979913 85.4441558 186.891082 85.4441558"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    id: "Rectangle",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    x: "145.887",
    y: "169.015",
    width: "41.004",
    height: "11.183"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M128.155152,67.662684 L15.0929177,67.662684 C10.9747532,75.3537662 7.62015584,83.5147359 5.12775758,92.0436364 L128.155152,92.0436364 L128.155152,67.662684 Z",
    id: "Path",
    fill: "#E5E5E5"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M128.155152,162.415931 L4.68668398,162.415931 C7.05939394,170.933749 10.2887619,179.09361 14.2805887,186.796883 L128.155152,186.796883 L128.155152,162.415931 Z",
    id: "Path",
    fill: "#E5E5E5"
  }))));
};
var ButtonIcon = function ButtonIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "256",
    height: "156",
    viewBox: "0 0 256 156",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "eb-button",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M15.5151515,0 C6.98484752,0 0,6.98484752 0,15.5151515 L0,124.121212 C0,132.651516 6.98484752,139.636364 15.5151515,139.636364 C15.5151515,141.772726 17.2575767,143.515152 19.3939394,143.515152 C21.5303021,143.515152 23.2727273,141.772726 23.2727273,139.636364 L31.030303,139.636364 C31.030303,141.772726 32.7727282,143.515152 34.9090909,143.515152 C37.0454536,143.515152 38.7878788,141.772726 38.7878788,139.636364 L46.5454545,139.636364 C46.5454545,141.772726 48.2878798,143.515152 50.4242424,143.515152 C52.5606051,143.515152 54.3030303,141.772726 54.3030303,139.636364 L62.0606061,139.636364 C62.0606061,141.772726 63.8030313,143.515152 65.9393939,143.515152 C68.0757566,143.515152 69.8181818,141.772726 69.8181818,139.636364 L77.5757576,139.636364 C77.5757576,141.772726 79.3181828,143.515152 81.4545455,143.515152 C83.5909081,143.515152 85.3333333,141.772726 85.3333333,139.636364 L93.0909091,139.636364 C93.0909091,141.772726 94.8333343,143.515152 96.969697,143.515152 C99.1060596,143.515152 100.848485,141.772726 100.848485,139.636364 L108.606061,139.636364 C108.606061,141.772726 110.348486,143.515152 112.484848,143.515152 C114.621211,143.515152 116.363636,141.772726 116.363636,139.636364 L124.121212,139.636364 C124.121212,141.772726 125.863637,143.515152 128,143.515152 C130.136363,143.515152 131.878788,141.772726 131.878788,139.636364 L139.636364,139.636364 C139.636364,141.772726 141.378789,143.515152 143.515152,143.515152 C145.651514,143.515152 147.393939,141.772726 147.393939,139.636364 L155.151515,139.636364 C155.151515,141.772726 156.89394,143.515152 159.030303,143.515152 C161.166666,143.515152 162.909091,141.772726 162.909091,139.636364 L170.666667,139.636364 C170.666667,141.772726 172.409092,143.515152 174.545455,143.515152 C176.681817,143.515152 178.424242,141.772726 178.424242,139.636364 L186.181818,139.636364 C186.181818,141.772726 187.924243,143.515152 190.060606,143.515152 C192.196969,143.515152 193.939394,141.772726 193.939394,139.636364 L201.69697,139.636364 C201.69697,141.772726 203.439395,143.515152 205.575758,143.515152 C207.71212,143.515152 209.454545,141.772726 209.454545,139.636364 L217.212121,139.636364 C217.212121,141.772726 218.954546,143.515152 221.090909,143.515152 C223.227272,143.515152 224.969697,141.772726 224.969697,139.636364 L232.727273,139.636364 C232.727273,141.772726 234.469698,143.515152 236.606061,143.515152 C238.742423,143.515152 240.484848,141.772726 240.484848,139.636364 C249.015152,139.636364 256,132.651516 256,124.121212 L256,15.5151515 C256,6.98484752 249.015152,0 240.484848,0 L15.5151515,0 Z M15.5151515,7.75757576 L240.484848,7.75757576 C244.818184,7.75757576 248.242424,11.1818201 248.242424,15.5151515 L248.242424,124.121212 C248.242424,128.454547 244.818184,131.878788 240.484848,131.878788 L15.5151515,131.878788 C11.1818201,131.878788 7.75757576,128.454547 7.75757576,124.121212 L7.75757576,15.5151515 C7.75757576,11.1818201 11.1818201,7.75757576 15.5151515,7.75757576 Z M42.6666667,19.3939394 C40.530304,19.3939394 38.7878788,21.1363646 38.7878788,23.2727273 C38.7878788,25.4090899 40.530304,27.1515152 42.6666667,27.1515152 C44.8030293,27.1515152 46.5454545,25.4090899 46.5454545,23.2727273 C46.5454545,21.1363646 44.8030293,19.3939394 42.6666667,19.3939394 Z M58.1818182,19.3939394 C56.0454555,19.3939394 54.3030303,21.1363646 54.3030303,23.2727273 C54.3030303,25.4090899 56.0454555,27.1515152 58.1818182,27.1515152 C60.3181808,27.1515152 62.0606061,25.4090899 62.0606061,23.2727273 C62.0606061,21.1363646 60.3181808,19.3939394 58.1818182,19.3939394 Z M73.6969697,19.3939394 C71.560607,19.3939394 69.8181818,21.1363646 69.8181818,23.2727273 C69.8181818,25.4090899 71.560607,27.1515152 73.6969697,27.1515152 C75.8333324,27.1515152 77.5757576,25.4090899 77.5757576,23.2727273 C77.5757576,21.1363646 75.8333324,19.3939394 73.6969697,19.3939394 Z M89.2121212,19.3939394 C87.0757585,19.3939394 85.3333333,21.1363646 85.3333333,23.2727273 C85.3333333,25.4090899 87.0757585,27.1515152 89.2121212,27.1515152 C91.3484839,27.1515152 93.0909091,25.4090899 93.0909091,23.2727273 C93.0909091,21.1363646 91.3484839,19.3939394 89.2121212,19.3939394 Z M104.727273,19.3939394 C102.59091,19.3939394 100.848485,21.1363646 100.848485,23.2727273 C100.848485,25.4090899 102.59091,27.1515152 104.727273,27.1515152 C106.863635,27.1515152 108.606061,25.4090899 108.606061,23.2727273 C108.606061,21.1363646 106.863635,19.3939394 104.727273,19.3939394 Z M120.242424,19.3939394 C118.106062,19.3939394 116.363636,21.1363646 116.363636,23.2727273 C116.363636,25.4090899 118.106062,27.1515152 120.242424,27.1515152 C122.378787,27.1515152 124.121212,25.4090899 124.121212,23.2727273 C124.121212,21.1363646 122.378787,19.3939394 120.242424,19.3939394 Z M135.757576,19.3939394 C133.621213,19.3939394 131.878788,21.1363646 131.878788,23.2727273 C131.878788,25.4090899 133.621213,27.1515152 135.757576,27.1515152 C137.893938,27.1515152 139.636364,25.4090899 139.636364,23.2727273 C139.636364,21.1363646 137.893938,19.3939394 135.757576,19.3939394 Z M151.272727,19.3939394 C149.136365,19.3939394 147.393939,21.1363646 147.393939,23.2727273 C147.393939,25.4090899 149.136365,27.1515152 151.272727,27.1515152 C153.40909,27.1515152 155.151515,25.4090899 155.151515,23.2727273 C155.151515,21.1363646 153.40909,19.3939394 151.272727,19.3939394 Z M166.787879,19.3939394 C164.651516,19.3939394 162.909091,21.1363646 162.909091,23.2727273 C162.909091,25.4090899 164.651516,27.1515152 166.787879,27.1515152 C168.924241,27.1515152 170.666667,25.4090899 170.666667,23.2727273 C170.666667,21.1363646 168.924241,19.3939394 166.787879,19.3939394 Z M182.30303,19.3939394 C180.166668,19.3939394 178.424242,21.1363646 178.424242,23.2727273 C178.424242,25.4090899 180.166668,27.1515152 182.30303,27.1515152 C184.439393,27.1515152 186.181818,25.4090899 186.181818,23.2727273 C186.181818,21.1363646 184.439393,19.3939394 182.30303,19.3939394 Z M197.818182,19.3939394 C195.681819,19.3939394 193.939394,21.1363646 193.939394,23.2727273 C193.939394,25.4090899 195.681819,27.1515152 197.818182,27.1515152 C199.954544,27.1515152 201.69697,25.4090899 201.69697,23.2727273 C201.69697,21.1363646 199.954544,19.3939394 197.818182,19.3939394 Z M213.333333,19.3939394 C211.196971,19.3939394 209.454545,21.1363646 209.454545,23.2727273 C209.454545,25.4090899 211.196971,27.1515152 213.333333,27.1515152 C215.469696,27.1515152 217.212121,25.4090899 217.212121,23.2727273 C217.212121,21.1363646 215.469696,19.3939394 213.333333,19.3939394 Z M170.30303,55.4090899 C162.106062,55.4090899 156.818184,60.9242415 156.818184,69.8181818 C156.818184,78.7121222 162.045456,84.2272737 170.30303,84.2272737 C178.515153,84.2272737 183.757576,78.7121222 183.757576,69.8181818 C183.757576,60.9242415 178.515153,55.4090899 170.30303,55.4090899 Z M41.2727273,56.1515171 L41.2727273,83.4848504 L54.4090919,83.4848504 C60.2575748,83.4848504 63.9393939,80.3939413 63.9393939,75.6060625 C63.9393939,72.1212121 61.1818201,69.3333333 57.6060625,69.1515152 L57.6060625,68.7878788 C60.499999,68.3939413 62.6969716,65.9090928 62.6969716,62.969697 C62.6969716,58.7272727 59.469696,56.1515171 54.0151505,56.1515171 L41.2727273,56.1515171 Z M70.8636354,56.1515171 L70.8636354,74.0606061 C70.8636354,80.1818182 75.5454565,84.2272737 82.6515161,84.2272737 C89.7424252,84.2272737 94.4090919,80.1818182 94.4090919,74.0606061 L94.4090919,56.1515171 L87.4545455,56.1515171 L87.4545455,73.3181828 C87.4545455,76.499999 85.7272747,78.3636364 82.6515161,78.3636364 C79.560607,78.3636364 77.8181818,76.4848485 77.8181818,73.3181828 L77.8181818,56.1515171 L70.8636354,56.1515171 Z M190.848485,56.1515171 L190.848485,83.4848504 L197.439395,83.4848504 L197.439395,67.9545445 L197.803031,67.9545445 L209.212121,83.4848504 L214.727273,83.4848504 L214.727273,56.1515171 L208.136363,56.1515171 L208.136363,71.5303021 L207.772726,71.5303021 L196.393941,56.1515171 L190.848485,56.1515171 Z M101.318183,56.1666676 L101.318183,61.7424252 L109.196971,61.7424252 L109.196971,83.4848504 L116.121212,83.4848504 L116.121212,61.7424252 L124.015151,61.7424252 L124.015151,56.1666676 L101.318183,56.1666676 Z M129.40909,56.1666676 L129.40909,61.7424252 L137.287878,61.7424252 L137.287878,83.4848504 L144.227274,83.4848504 L144.227274,61.7424252 L152.121212,61.7424252 L152.121212,56.1666676 L129.40909,56.1666676 Z M48.2272737,61.0454536 L52.1666676,61.0454536 C54.530304,61.0454536 55.9242434,62.2272737 55.9242434,64.1818182 C55.9242434,66.1060616 54.439393,67.2878778 51.8939384,67.2878778 L48.2272737,67.2878778 L48.2272737,61.0454536 Z M170.30303,61.1666657 C174.136363,61.1666657 176.681817,64.5454545 176.681817,69.8181818 C176.681817,75.0909091 174.151517,78.4696979 170.30303,78.4696979 C166.424242,78.4696979 163.893938,75.0909091 163.893938,69.8181818 C163.893938,64.5454545 166.454547,61.1666657 170.30303,61.1666657 Z M48.2272737,71.5151515 L52.3939413,71.5151515 C55.2727273,71.5151515 56.8787898,72.7727282 56.8787898,75.0000019 C56.8787898,77.3181828 55.3030322,78.5757595 52.4242424,78.5757595 L48.2272737,78.5757595 L48.2272737,71.5151515 Z M42.6666667,112.484848 C40.530304,112.484848 38.7878788,114.227274 38.7878788,116.363636 C38.7878788,118.499999 40.530304,120.242424 42.6666667,120.242424 C44.8030293,120.242424 46.5454545,118.499999 46.5454545,116.363636 C46.5454545,114.227274 44.8030293,112.484848 42.6666667,112.484848 Z M58.1818182,112.484848 C56.0454555,112.484848 54.3030303,114.227274 54.3030303,116.363636 C54.3030303,118.499999 56.0454555,120.242424 58.1818182,120.242424 C60.3181808,120.242424 62.0606061,118.499999 62.0606061,116.363636 C62.0606061,114.227274 60.3181808,112.484848 58.1818182,112.484848 Z M73.6969697,112.484848 C71.560607,112.484848 69.8181818,114.227274 69.8181818,116.363636 C69.8181818,118.499999 71.560607,120.242424 73.6969697,120.242424 C75.8333324,120.242424 77.5757576,118.499999 77.5757576,116.363636 C77.5757576,114.227274 75.8333324,112.484848 73.6969697,112.484848 Z M89.2121212,112.484848 C87.0757585,112.484848 85.3333333,114.227274 85.3333333,116.363636 C85.3333333,118.499999 87.0757585,120.242424 89.2121212,120.242424 C91.3484839,120.242424 93.0909091,118.499999 93.0909091,116.363636 C93.0909091,114.227274 91.3484839,112.484848 89.2121212,112.484848 Z M104.727273,112.484848 C102.59091,112.484848 100.848485,114.227274 100.848485,116.363636 C100.848485,118.499999 102.59091,120.242424 104.727273,120.242424 C106.863635,120.242424 108.606061,118.499999 108.606061,116.363636 C108.606061,114.227274 106.863635,112.484848 104.727273,112.484848 Z M120.242424,112.484848 C118.106062,112.484848 116.363636,114.227274 116.363636,116.363636 C116.363636,118.499999 118.106062,120.242424 120.242424,120.242424 C122.378787,120.242424 124.121212,118.499999 124.121212,116.363636 C124.121212,114.227274 122.378787,112.484848 120.242424,112.484848 Z M135.757576,112.484848 C133.621213,112.484848 131.878788,114.227274 131.878788,116.363636 C131.878788,118.499999 133.621213,120.242424 135.757576,120.242424 C137.893938,120.242424 139.636364,118.499999 139.636364,116.363636 C139.636364,114.227274 137.893938,112.484848 135.757576,112.484848 Z M151.272727,112.484848 C149.136365,112.484848 147.393939,114.227274 147.393939,116.363636 C147.393939,118.499999 149.136365,120.242424 151.272727,120.242424 C153.40909,120.242424 155.151515,118.499999 155.151515,116.363636 C155.151515,114.227274 153.40909,112.484848 151.272727,112.484848 Z M166.787879,112.484848 C164.651516,112.484848 162.909091,114.227274 162.909091,116.363636 C162.909091,118.499999 164.651516,120.242424 166.787879,120.242424 C168.924241,120.242424 170.666667,118.499999 170.666667,116.363636 C170.666667,114.227274 168.924241,112.484848 166.787879,112.484848 Z M182.30303,112.484848 C180.166668,112.484848 178.424242,114.227274 178.424242,116.363636 C178.424242,118.499999 180.166668,120.242424 182.30303,120.242424 C184.439393,120.242424 186.181818,118.499999 186.181818,116.363636 C186.181818,114.227274 184.439393,112.484848 182.30303,112.484848 Z M197.818182,112.484848 C195.681819,112.484848 193.939394,114.227274 193.939394,116.363636 C193.939394,118.499999 195.681819,120.242424 197.818182,120.242424 C199.954544,120.242424 201.69697,118.499999 201.69697,116.363636 C201.69697,114.227274 199.954544,112.484848 197.818182,112.484848 Z M213.333333,112.484848 C211.196971,112.484848 209.454545,114.227274 209.454545,116.363636 C209.454545,118.499999 211.196971,120.242424 213.333333,120.242424 C215.469696,120.242424 217.212121,118.499999 217.212121,116.363636 C217.212121,114.227274 215.469696,112.484848 213.333333,112.484848 Z M27.1515152,147.393939 C25.0151525,147.393939 23.2727273,149.136365 23.2727273,151.272727 C23.2727273,153.40909 25.0151525,155.151515 27.1515152,155.151515 C29.2878778,155.151515 31.030303,153.40909 31.030303,151.272727 C31.030303,149.136365 29.2878778,147.393939 27.1515152,147.393939 Z M42.6666667,147.393939 C40.530304,147.393939 38.7878788,149.136365 38.7878788,151.272727 C38.7878788,153.40909 40.530304,155.151515 42.6666667,155.151515 C44.8030293,155.151515 46.5454545,153.40909 46.5454545,151.272727 C46.5454545,149.136365 44.8030293,147.393939 42.6666667,147.393939 Z M58.1818182,147.393939 C56.0454555,147.393939 54.3030303,149.136365 54.3030303,151.272727 C54.3030303,153.40909 56.0454555,155.151515 58.1818182,155.151515 C60.3181808,155.151515 62.0606061,153.40909 62.0606061,151.272727 C62.0606061,149.136365 60.3181808,147.393939 58.1818182,147.393939 Z M73.6969697,147.393939 C71.560607,147.393939 69.8181818,149.136365 69.8181818,151.272727 C69.8181818,153.40909 71.560607,155.151515 73.6969697,155.151515 C75.8333324,155.151515 77.5757576,153.40909 77.5757576,151.272727 C77.5757576,149.136365 75.8333324,147.393939 73.6969697,147.393939 Z M89.2121212,147.393939 C87.0757585,147.393939 85.3333333,149.136365 85.3333333,151.272727 C85.3333333,153.40909 87.0757585,155.151515 89.2121212,155.151515 C91.3484839,155.151515 93.0909091,153.40909 93.0909091,151.272727 C93.0909091,149.136365 91.3484839,147.393939 89.2121212,147.393939 Z M104.727273,147.393939 C102.59091,147.393939 100.848485,149.136365 100.848485,151.272727 C100.848485,153.40909 102.59091,155.151515 104.727273,155.151515 C106.863635,155.151515 108.606061,153.40909 108.606061,151.272727 C108.606061,149.136365 106.863635,147.393939 104.727273,147.393939 Z M120.242424,147.393939 C118.106062,147.393939 116.363636,149.136365 116.363636,151.272727 C116.363636,153.40909 118.106062,155.151515 120.242424,155.151515 C122.378787,155.151515 124.121212,153.40909 124.121212,151.272727 C124.121212,149.136365 122.378787,147.393939 120.242424,147.393939 Z M135.757576,147.393939 C133.621213,147.393939 131.878788,149.136365 131.878788,151.272727 C131.878788,153.40909 133.621213,155.151515 135.757576,155.151515 C137.893938,155.151515 139.636364,153.40909 139.636364,151.272727 C139.636364,149.136365 137.893938,147.393939 135.757576,147.393939 Z M151.272727,147.393939 C149.136365,147.393939 147.393939,149.136365 147.393939,151.272727 C147.393939,153.40909 149.136365,155.151515 151.272727,155.151515 C153.40909,155.151515 155.151515,153.40909 155.151515,151.272727 C155.151515,149.136365 153.40909,147.393939 151.272727,147.393939 Z M166.787879,147.393939 C164.651516,147.393939 162.909091,149.136365 162.909091,151.272727 C162.909091,153.40909 164.651516,155.151515 166.787879,155.151515 C168.924241,155.151515 170.666667,153.40909 170.666667,151.272727 C170.666667,149.136365 168.924241,147.393939 166.787879,147.393939 Z M182.30303,147.393939 C180.166668,147.393939 178.424242,149.136365 178.424242,151.272727 C178.424242,153.40909 180.166668,155.151515 182.30303,155.151515 C184.439393,155.151515 186.181818,153.40909 186.181818,151.272727 C186.181818,149.136365 184.439393,147.393939 182.30303,147.393939 Z M197.818182,147.393939 C195.681819,147.393939 193.939394,149.136365 193.939394,151.272727 C193.939394,153.40909 195.681819,155.151515 197.818182,155.151515 C199.954544,155.151515 201.69697,153.40909 201.69697,151.272727 C201.69697,149.136365 199.954544,147.393939 197.818182,147.393939 Z M213.333333,147.393939 C211.196971,147.393939 209.454545,149.136365 209.454545,151.272727 C209.454545,153.40909 211.196971,155.151515 213.333333,155.151515 C215.469696,155.151515 217.212121,153.40909 217.212121,151.272727 C217.212121,149.136365 215.469696,147.393939 213.333333,147.393939 Z M228.848485,147.393939 C226.712122,147.393939 224.969697,149.136365 224.969697,151.272727 C224.969697,153.40909 226.712122,155.151515 228.848485,155.151515 C230.984848,155.151515 232.727273,153.40909 232.727273,151.272727 C232.727273,149.136365 230.984848,147.393939 228.848485,147.393939 Z",
    id: "Shape"
  }))));
};
var CountdownIcon = function CountdownIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-countdown",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "33",
    x2: "30",
    y2: "38.875",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "30",
    cy: "36",
    r: "4",
    fill: "url(#SVGID_1__43666)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "5.5",
    x2: "30",
    y2: "59.058",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M30,18c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S39.925,18,30,18z M45.949,37 c-0.228,3.658-1.683,6.98-3.968,9.567l-1.375-1.375l-1.414,1.414l1.375,1.375c-2.587,2.285-5.91,3.74-9.568,3.968V50h-2v1.949 c-3.658-0.228-6.981-1.683-9.568-3.968l1.375-1.375l-1.414-1.414l-1.375,1.375c-2.284-2.587-3.74-5.91-3.968-9.567H16v-2h-1.949 c0.228-3.658,1.683-6.98,3.968-9.567l1.375,1.375l1.414-1.414l-1.375-1.375c2.587-2.285,5.91-3.74,9.568-3.968V22h2v-1.949 c3.658,0.228,6.981,1.683,9.568,3.968l-1.375,1.375l1.414,1.414l1.375-1.375c2.284,2.587,3.74,5.91,3.968,9.567H44v2H45.949z",
    fill: "url(#SVGID_2__43666)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "5.5",
    x2: "32",
    y2: "59.058",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M31,31.101V27h-2v4.101c-2.279,0.465-4,2.484-4,4.899c0,2.757,2.243,5,5,5 c2.415,0,4.434-1.721,4.899-4H39v-2h-4.101C34.5,33.044,32.956,31.5,31,31.101z M30,39c-1.654,0-3-1.346-3-3s1.346-3,3-3 s3,1.346,3,3S31.654,39,30,39z",
    fill: "url(#SVGID_3__43666)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "5.5",
    x2: "32",
    y2: "59.058",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M54,33h-2.21C50.366,22.607,41.661,14.505,31,14.025v-0.167c1.72-0.447,3-1.999,3-3.858 c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.859,1.28,3.411,3,3.858v0.167C17.332,14.55,8,24.205,8,36c0,12.131,9.869,22,22,22 c11.113,0,20.322-8.284,21.79-19H54c1.103,0,2-0.897,2-2v-2C56,33.897,55.103,33,54,33z M28,10c0-1.103,0.897-2,2-2s2,0.897,2,2 s-0.897,2-2,2S28,11.103,28,10z M30,56c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S41.028,56,30,56z M54,37h-2.025 C51.99,36.668,52,36.335,52,36s-0.01-0.668-0.025-1H54V37z",
    fill: "url(#SVGID_4__43666)"
  }));
};
var CounterIcon = function CounterIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 66 70",
    version: "1.1",
    viewBox: "0 0 66 70",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_1_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35",
    y2: "35",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#COUNTER_SVGID_1_)",
    d: "M60.7 61.1H5.3c-2.9 0-5.3-2.4-5.3-5.3V14.2c0-2.9 2.4-5.3 5.3-5.3h55.4c2.9 0 5.3 2.4 5.3 5.3v41.6c0 2.9-2.4 5.3-5.3 5.3zM5.3 11.8c-1.3 0-2.4 1.1-2.4 2.4v41.6c0 1.3 1.1 2.4 2.4 2.4h55.4c1.3 0 2.4-1.1 2.4-2.4V14.2c0-1.3-1.1-2.4-2.4-2.4H5.3z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_2_",
    x1: "-0.125",
    x2: "64.866",
    y1: "16.62",
    y2: "16.62",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_2_)",
    cx: "21.5",
    cy: "16.6",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_3_",
    x1: "-0.125",
    x2: "64.866",
    y1: "22.572",
    y2: "22.572",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_3_)",
    cx: "21.5",
    cy: "22.6",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_4_",
    x1: "-0.125",
    x2: "64.866",
    y1: "28.525",
    y2: "28.525",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_4_)",
    cx: "21.5",
    cy: "28.5",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_5_",
    x1: "-0.125",
    x2: "64.866",
    y1: "34.477",
    y2: "34.477",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_5_)",
    cx: "21.5",
    cy: "34.5",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_6_",
    x1: "-0.125",
    x2: "64.866",
    y1: "40.43",
    y2: "40.43",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_6_)",
    cx: "21.5",
    cy: "40.4",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_7_",
    x1: "-0.125",
    x2: "64.866",
    y1: "46.382",
    y2: "46.382",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_7_)",
    cx: "21.5",
    cy: "46.4",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_8_",
    x1: "-0.125",
    x2: "64.866",
    y1: "52.335",
    y2: "52.335",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_8_)",
    cx: "21.5",
    cy: "52.3",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_9_",
    x1: "-0.125",
    x2: "64.866",
    y1: "16.62",
    y2: "16.62",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_9_)",
    cx: "43.7",
    cy: "16.6",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_10_",
    x1: "-0.125",
    x2: "64.866",
    y1: "22.572",
    y2: "22.572",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_10_)",
    cx: "43.7",
    cy: "22.6",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_11_",
    x1: "-0.125",
    x2: "64.866",
    y1: "28.525",
    y2: "28.525",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_11_)",
    cx: "43.7",
    cy: "28.5",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_12_",
    x1: "-0.125",
    x2: "64.866",
    y1: "34.477",
    y2: "34.477",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_12_)",
    cx: "43.7",
    cy: "34.5",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_13_",
    x1: "-0.125",
    x2: "64.866",
    y1: "40.43",
    y2: "40.43",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_13_)",
    cx: "43.7",
    cy: "40.4",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_14_",
    x1: "-0.125",
    x2: "64.866",
    y1: "46.382",
    y2: "46.382",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_14_)",
    cx: "43.7",
    cy: "46.4",
    r: "1.3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_15_",
    x1: "-0.125",
    x2: "64.866",
    y1: "52.335",
    y2: "52.335",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    fill: "url(#COUNTER_SVGID_15_)",
    cx: "43.7",
    cy: "52.3",
    r: "1.3"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_16_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#COUNTER_SVGID_16_)",
    d: "M55.9 28.7h-6v-1.8h8v1.7l-4.5 15.9h-2l4.5-15.8z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_17_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#COUNTER_SVGID_17_)",
    d: "M33.1 43.2h-1.2c-.2 0-.3-.2-.3-.3V28.7c0-.2.2-.3.3-.3h1.2c.2 0 .3.2.3.3v14.2c.1.2-.1.3-.3.3z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "COUNTER_SVGID_18_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#COUNTER_SVGID_18_)",
    d: "M12.5 43.2h-1.2c-.2 0-.3-.2-.3-.3V28.7c0-.2.2-.3.3-.3h1.2c.2 0 .3.2.3.3v14.2c.1.2-.1.3-.3.3z"
  }));
};
var CallToActionIcon = function CallToActionIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-cta",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "12",
    x2: "32",
    y2: "20.876",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M36,16.911c0,1.36-0.68,2.56-1.712,3.288c-0.296-0.984-1.208-1.688-2.288-1.688 c-1.08,0-1.992,0.704-2.288,1.688C28.68,19.471,28,18.271,28,16.911c0-2.208,1.792-4,4-4S36,14.703,36,16.911z",
    fill: "url(#SVGID_1__52516)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "4",
    x2: "32",
    y2: "59.752",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "31",
    y: "6",
    width: "2",
    height: "4",
    fill: "url(#SVGID_2__52516)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "41",
    y1: "4",
    x2: "41",
    y2: "59.752",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "39",
    y: "16",
    width: "4",
    height: "2",
    fill: "url(#SVGID_3__52516)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "23",
    y1: "4",
    x2: "23",
    y2: "59.752",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "21",
    y: "16",
    width: "4",
    height: "2",
    fill: "url(#SVGID_4__52516)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_5__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "38.364",
    y1: "4",
    x2: "38.364",
    y2: "59.752",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    points: "37.657,12.758 36.243,11.344 39.071,8.515 40.485,9.929",
    fill: "url(#SVGID_5__52516)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_6__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "25.637",
    y1: "4",
    x2: "25.637",
    y2: "59.752",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    points: "26.344,12.758 23.515,9.929 24.929,8.515 27.758,11.344",
    fill: "url(#SVGID_6__52516)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_7__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "4",
    x2: "32",
    y2: "59.752",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M34,58h-4c-1.103,0-2-0.897-2-2V44h-9.013c-0.711,0-1.351-0.369-1.711-0.987 c-0.365-0.627-0.371-1.38-0.013-2.012l12.168-21.493C29.966,18.564,30.926,18.001,32,18c1.074,0,2.035,0.563,2.569,1.507 l12.168,21.494c0.357,0.632,0.353,1.384-0.014,2.012C46.363,43.631,45.724,44,45.013,44H36v12C36,57.103,35.103,58,34,58z M32.001,20c-0.166,0-0.577,0.049-0.829,0.493L19.003,41.986L30,42v14h4V42h11.013l0.854-0.507l-0.87,0.492L32.829,20.492 C32.577,20.048,32.166,20,32.001,20z",
    fill: "url(#SVGID_7__52516)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_8__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "25.25",
    x2: "32",
    y2: "40.053",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M38.28,39H25.72c-0.766,0-1.247-0.828-0.867-1.493l6.28-10.99c0.383-0.671,1.35-0.671,1.733,0 l6.28,10.99C39.527,38.172,39.047,39,38.28,39z",
    fill: "url(#SVGID_8__52516)"
  }));
};
var FlipboxIcon = function FlipboxIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "600",
    height: "672",
    viewBox: "0 0 600 672",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Artboard",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "eb-flipbox"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M410,0 L393.55469,13.82812 L301.36719,91.48437 L0,91.48437 L0,671.48437 L308.63281,671.48437 L410,586.13281 L410,0 Z M390,42.96875 L390,576.83593 L301.36719,651.48437 L20,651.48437 L20,111.48437 L308.63281,111.48437 L390,42.96875 Z M430,91.48437 C424.49219,91.48437 420,95.97656 420,101.48437 C420,106.99218 424.49219,111.48437 430,111.48437 C435.50781,111.48437 440,106.99218 440,101.48437 C440,95.97656 435.50781,91.48437 430,91.48437 Z M470,91.48437 C464.49219,91.48437 460,95.97656 460,101.48437 C460,106.99218 464.49219,111.48437 470,111.48437 C475.50781,111.48437 480,106.99218 480,101.48437 C480,95.97656 475.50781,91.48437 470,91.48437 Z M510,91.48437 C504.49219,91.48437 500,95.97656 500,101.48437 C500,106.99218 504.49219,111.48437 510,111.48437 C515.50781,111.48437 520,106.99218 520,101.48437 C520,95.97656 515.50781,91.48437 510,91.48437 Z M550,91.48437 C544.49219,91.48437 540,95.97656 540,101.48437 C540,106.99218 544.49219,111.48437 550,111.48437 C555.50781,111.48437 560,106.99218 560,101.48437 C560,95.97656 555.50781,91.48437 550,91.48437 Z M590,91.48437 C584.49219,91.48437 580,95.97656 580,101.48437 C580,106.99218 584.49219,111.48437 590,111.48437 C595.50781,111.48437 600,106.99218 600,101.48437 C600,95.97656 595.50781,91.48437 590,91.48437 Z M300,131.48437 C294.49219,131.48437 290,135.97656 290,141.48437 C290,146.99218 294.49219,151.48437 300,151.48437 C305.50781,151.48437 310,146.99218 310,141.48437 C310,135.97656 305.50781,131.48437 300,131.48437 Z M590,131.48437 C584.49219,131.48437 580,135.97656 580,141.48437 C580,146.99218 584.49219,151.48437 590,151.48437 C595.50781,151.48437 600,146.99218 600,141.48437 C600,135.97656 595.50781,131.48437 590,131.48437 Z M300,171.48437 C294.49219,171.48437 290,175.97656 290,181.48437 C290,186.99218 294.49219,191.48437 300,191.48437 C305.50781,191.48437 310,186.99218 310,181.48437 C310,175.97656 305.50781,171.48437 300,171.48437 Z M590,171.48437 C584.49219,171.48437 580,175.97656 580,181.48437 C580,186.99218 584.49219,191.48437 590,191.48437 C595.50781,191.48437 600,186.99218 600,181.48437 C600,175.97656 595.50781,171.48437 590,171.48437 Z M300,211.48437 C294.49219,211.48437 290,215.97656 290,221.48437 C290,226.99218 294.49219,231.48437 300,231.48437 C305.50781,231.48437 310,226.99218 310,221.48437 C310,215.97656 305.50781,211.48437 300,211.48437 Z M590,211.48437 C584.49219,211.48437 580,215.97656 580,221.48437 C580,226.99218 584.49219,231.48437 590,231.48437 C595.50781,231.48437 600,226.99218 600,221.48437 C600,215.97656 595.50781,211.48437 590,211.48437 Z M300,251.48437 C294.49219,251.48437 290,255.97656 290,261.48437 C290,266.99218 294.49219,271.48437 300,271.48437 C305.50781,271.48437 310,266.99218 310,261.48437 C310,255.97656 305.50781,251.48437 300,251.48437 Z M590,251.48437 C584.49219,251.48437 580,255.97656 580,261.48437 C580,266.99218 584.49219,271.48437 590,271.48437 C595.50781,271.48437 600,266.99218 600,261.48437 C600,255.97656 595.50781,251.48437 590,251.48437 Z M270,291.48437 L270,331.48437 L220,331.48437 C181.44531,331.48437 150,362.92968 150,401.48437 L150,491.48437 L170,491.48437 L170,401.48437 C170,373.75 192.26563,351.48437 220,351.48437 L270,351.48437 L270,391.48437 L330,341.48437 L270,291.48437 Z M590,291.48437 C584.49219,291.48437 580,295.97656 580,301.48437 C580,306.99218 584.49219,311.48437 590,311.48437 C595.50781,311.48437 600,306.99218 600,301.48437 C600,295.97656 595.50781,291.48437 590,291.48437 Z M590,331.48437 C584.49219,331.48437 580,335.97656 580,341.48437 C580,346.99218 584.49219,351.48437 590,351.48437 C595.50781,351.48437 600,346.99218 600,341.48437 C600,335.97656 595.50781,331.48437 590,331.48437 Z M590,371.48437 C584.49219,371.48437 580,375.97656 580,381.48437 C580,386.99218 584.49219,391.48437 590,391.48437 C595.50781,391.48437 600,386.99218 600,381.48437 C600,375.97656 595.50781,371.48437 590,371.48437 Z M300,411.48437 C294.49219,411.48437 290,415.97656 290,421.48437 C290,426.99218 294.49219,431.48437 300,431.48437 C305.50781,431.48437 310,426.99218 310,421.48437 C310,415.97656 305.50781,411.48437 300,411.48437 Z M590,411.48437 C584.49219,411.48437 580,415.97656 580,421.48437 C580,426.99218 584.49219,431.48437 590,431.48437 C595.50781,431.48437 600,426.99218 600,421.48437 C600,415.97656 595.50781,411.48437 590,411.48437 Z M300,451.48437 C294.49219,451.48437 290,455.97656 290,461.48437 C290,466.99218 294.49219,471.48437 300,471.48437 C305.50781,471.48437 310,466.99218 310,461.48437 C310,455.97656 305.50781,451.48437 300,451.48437 Z M590,451.48437 C584.49219,451.48437 580,455.97656 580,461.48437 C580,466.99218 584.49219,471.48437 590,471.48437 C595.50781,471.48437 600,466.99218 600,461.48437 C600,455.97656 595.50781,451.48437 590,451.48437 Z M300,491.48437 C294.49219,491.48437 290,495.97656 290,501.48437 C290,506.99218 294.49219,511.48437 300,511.48437 C305.50781,511.48437 310,506.99218 310,501.48437 C310,495.97656 305.50781,491.48437 300,491.48437 Z M590,491.48437 C584.49219,491.48437 580,495.97656 580,501.48437 C580,506.99218 584.49219,511.48437 590,511.48437 C595.50781,511.48437 600,506.99218 600,501.48437 C600,495.97656 595.50781,491.48437 590,491.48437 Z M300,531.48437 C294.49219,531.48437 290,535.97656 290,541.48437 C290,546.99218 294.49219,551.48437 300,551.48437 C305.50781,551.48437 310,546.99218 310,541.48437 C310,535.97656 305.50781,531.48437 300,531.48437 Z M590,531.48437 C584.49219,531.48437 580,535.97656 580,541.48437 C580,546.99218 584.49219,551.48437 590,551.48437 C595.50781,551.48437 600,546.99218 600,541.48437 C600,535.97656 595.50781,531.48437 590,531.48437 Z M300,571.48437 C294.49219,571.48437 290,575.97656 290,581.48437 C290,586.99218 294.49219,591.48437 300,591.48437 C305.50781,591.48437 310,586.99218 310,581.48437 C310,575.97656 305.50781,571.48437 300,571.48437 Z M590,571.48437 C584.49219,571.48437 580,575.97656 580,581.48437 C580,586.99218 584.49219,591.48437 590,591.48437 C595.50781,591.48437 600,586.99218 600,581.48437 C600,575.97656 595.50781,571.48437 590,571.48437 Z M300,611.48437 C294.49219,611.48437 290,615.97656 290,621.48437 C290,626.99218 294.49219,631.48437 300,631.48437 C305.50781,631.48437 310,626.99218 310,621.48437 C310,615.97656 305.50781,611.48437 300,611.48437 Z M590,611.48437 C584.49219,611.48437 580,615.97656 580,621.48437 C580,626.99218 584.49219,631.48437 590,631.48437 C595.50781,631.48437 600,626.99218 600,621.48437 C600,615.97656 595.50781,611.48437 590,611.48437 Z M350,651.48437 C344.49219,651.48437 340,655.97656 340,661.48437 C340,666.99218 344.49219,671.48437 350,671.48437 C355.50781,671.48437 360,666.99218 360,661.48437 C360,655.97656 355.50781,651.48437 350,651.48437 Z M390,651.48437 C384.49219,651.48437 380,655.97656 380,661.48437 C380,666.99218 384.49219,671.48437 390,671.48437 C395.50781,671.48437 400,666.99218 400,661.48437 C400,655.97656 395.50781,651.48437 390,651.48437 Z M430,651.48437 C424.49219,651.48437 420,655.97656 420,661.48437 C420,666.99218 424.49219,671.48437 430,671.48437 C435.50781,671.48437 440,666.99218 440,661.48437 C440,655.97656 435.50781,651.48437 430,651.48437 Z M470,651.48437 C464.49219,651.48437 460,655.97656 460,661.48437 C460,666.99218 464.49219,671.48437 470,671.48437 C475.50781,671.48437 480,666.99218 480,661.48437 C480,655.97656 475.50781,651.48437 470,651.48437 Z M510,651.48437 C504.49219,651.48437 500,655.97656 500,661.48437 C500,666.99218 504.49219,671.48437 510,671.48437 C515.50781,671.48437 520,666.99218 520,661.48437 C520,655.97656 515.50781,651.48437 510,651.48437 Z M550,651.48437 C544.49219,651.48437 540,655.97656 540,661.48437 C540,666.99218 544.49219,671.48437 550,671.48437 C555.50781,671.48437 560,666.99218 560,661.48437 C560,655.97656 555.50781,651.48437 550,651.48437 Z M590,651.48437 C584.49219,651.48437 580,655.97656 580,661.48437 C580,666.99218 584.49219,671.48437 590,671.48437 C595.50781,671.48437 600,666.99218 600,661.48437 C600,655.97656 595.50781,651.48437 590,651.48437 Z",
    id: "Shape"
  })))));
};
var InfoboxIcon = function InfoboxIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-info-box",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "19.203",
    x2: "32",
    y2: "45.242",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    points: "43,19 21,19 21,25 29,25 29,45 35,45 35,25 43,25",
    fill: "url(#SVGID_1__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "9.359",
    x2: "32",
    y2: "55.428",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M54,9H10c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h44c2.757,0,5-2.243,5-5V14 C59,11.243,56.757,9,54,9z M57,50c0,1.654-1.346,3-3,3H10c-1.654,0-3-1.346-3-3V14c0-1.654,1.346-3,3-3h44c1.654,0,3,1.346,3,3V50z",
    fill: "url(#SVGID_2__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "26.939",
    x2: "58",
    y2: "61.543",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M58,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S60.206,28,58,28z",
    fill: "url(#SVGID_3__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "30.125",
    x2: "58",
    y2: "33.875",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "58",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_4__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_5__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "26.939",
    x2: "6",
    y2: "61.543",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M6,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S8.206,28,6,28z",
    fill: "url(#SVGID_5__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_6__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "30.125",
    x2: "6",
    y2: "33.875",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "6",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_6__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_7__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "21.172",
    x2: "32",
    y2: "43.205",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    points: "41,21 23,21 23,23 31,23 31,43 33,43 33,23 41,23",
    fill: "url(#SVGID_7__56360)"
  }));
};
var NoticeIcon = function NoticeIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "256",
    height: "359",
    viewBox: "0 0 256 359",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "eb-notice",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M128,0 C111.09568,0 97.28,13.815678 97.28,30.72 L97.28,40.96 L15.36,40.96 C6.9377536,40.96 0,47.8977536 0,56.32 L0,343.04 C0,351.462246 6.9377536,358.4 15.36,358.4 L240.64,358.4 C249.062246,358.4 256,351.462246 256,343.04 L256,56.32 C256,47.8977536 249.062246,40.96 240.64,40.96 L158.72,40.96 L158.72,30.72 C158.72,13.815678 144.90432,0 128,0 Z M128,10.24 C139.36832,10.24 148.48,19.351682 148.48,30.72 L148.48,66.56 C148.48,69.4529536 146.252954,71.68 143.36,71.68 L112.64,71.68 C109.747046,71.68 107.52,69.4529536 107.52,66.56 L107.52,30.72 C107.52,19.351682 116.63168,10.24 128,10.24 Z M128,25.6 C125.172302,25.6 122.88,27.8923021 122.88,30.72 C122.88,33.5476979 125.172302,35.84 128,35.84 C130.827698,35.84 133.12,33.5476979 133.12,30.72 C133.12,27.8923021 130.827698,25.6 128,25.6 Z M15.36,51.2 L97.28,51.2 L97.28,61.44 L92.16,61.44 C80.9096499,61.44 71.68,70.6696499 71.68,81.92 L71.68,87.04 L72.72,87.04 C75.0565325,95.7765786 82.7207987,102.4 92.16,102.4 L163.84,102.4 C173.279201,102.4 180.943468,95.7765786 183.28,87.04 L184.32,87.04 L184.32,81.92 C184.32,70.6696499 175.09035,61.44 163.84,61.44 L158.72,61.44 L158.72,51.2 L240.64,51.2 C243.532954,51.2 245.76,53.4270464 245.76,56.32 L245.76,343.04 C245.76,345.932954 243.532954,348.16 240.64,348.16 L15.36,348.16 C12.4670464,348.16 10.24,345.932954 10.24,343.04 L10.24,56.32 C10.24,53.4270464 12.4670464,51.2 15.36,51.2 Z M35.84,71.68 C33.0123021,71.68 30.72,73.9723021 30.72,76.8 C30.72,79.6276979 33.0123021,81.92 35.84,81.92 C38.6676979,81.92 40.96,79.6276979 40.96,76.8 C40.96,73.9723021 38.6676979,71.68 35.84,71.68 Z M92.16,71.68 L98.24,71.68 C100.376924,77.6054835 106.01919,81.92 112.64,81.92 L143.36,81.92 C149.98081,81.92 155.623076,77.6054835 157.76,71.68 L163.84,71.68 C169.55733,71.68 174.08,76.2026701 174.08,81.92 C174.08,87.6373299 169.55733,92.16 163.84,92.16 L92.16,92.16 C86.4426701,92.16 81.92,87.6373299 81.92,81.92 C81.92,76.2026701 86.4426701,71.68 92.16,71.68 Z M35.84,92.16 C33.0123021,92.16 30.72,94.4523021 30.72,97.28 C30.72,100.107698 33.0123021,102.4 35.84,102.4 C38.6676979,102.4 40.96,100.107698 40.96,97.28 C40.96,94.4523021 38.6676979,92.16 35.84,92.16 Z M35.84,112.64 C33.0123021,112.64 30.72,114.932302 30.72,117.76 C30.72,120.587698 33.0123021,122.88 35.84,122.88 C38.6676979,122.88 40.96,120.587698 40.96,117.76 C40.96,114.932302 38.6676979,112.64 35.84,112.64 Z M35.84,133.12 C33.0123021,133.12 30.72,135.412302 30.72,138.24 C30.72,141.067698 33.0123021,143.36 35.84,143.36 C38.6676979,143.36 40.96,141.067698 40.96,138.24 C40.96,135.412302 38.6676979,133.12 35.84,133.12 Z M35.84,153.6 C33.0123021,153.6 30.72,155.892302 30.72,158.72 C30.72,161.547698 33.0123021,163.84 35.84,163.84 C38.6676979,163.84 40.96,161.547698 40.96,158.72 C40.96,155.892302 38.6676979,153.6 35.84,153.6 Z M117.76,153.6 L121.180001,242.349998 L134.819999,242.349998 L138.24,153.6 L117.76,153.6 Z M35.84,174.08 C33.0123021,174.08 30.72,176.372302 30.72,179.2 C30.72,182.027698 33.0123021,184.32 35.84,184.32 C38.6676979,184.32 40.96,182.027698 40.96,179.2 C40.96,176.372302 38.6676979,174.08 35.84,174.08 Z M35.84,194.56 C33.0123021,194.56 30.72,196.852302 30.72,199.68 C30.72,202.507698 33.0123021,204.8 35.84,204.8 C38.6676979,204.8 40.96,202.507698 40.96,199.68 C40.96,196.852302 38.6676979,194.56 35.84,194.56 Z M35.84,215.04 C33.0123021,215.04 30.72,217.332302 30.72,220.16 C30.72,222.987698 33.0123021,225.28 35.84,225.28 C38.6676979,225.28 40.96,222.987698 40.96,220.16 C40.96,217.332302 38.6676979,215.04 35.84,215.04 Z M35.84,235.52 C33.0123021,235.52 30.72,237.812302 30.72,240.64 C30.72,243.467698 33.0123021,245.76 35.84,245.76 C38.6676979,245.76 40.96,243.467698 40.96,240.64 C40.96,237.812302 38.6676979,235.52 35.84,235.52 Z M35.84,256 C33.0123021,256 30.72,258.292302 30.72,261.12 C30.72,263.947698 33.0123021,266.24 35.84,266.24 C38.6676979,266.24 40.96,263.947698 40.96,261.12 C40.96,258.292302 38.6676979,256 35.84,256 Z M128,256.860001 C122.344604,256.860001 117.76,261.444605 117.76,267.100001 C117.76,272.755397 122.344604,277.340001 128,277.340001 C133.655396,277.340001 138.24,272.755397 138.24,267.100001 C138.24,261.444605 133.655396,256.860001 128,256.860001 Z M35.84,276.48 C33.0123021,276.48 30.72,278.772302 30.72,281.6 C30.72,284.427698 33.0123021,286.72 35.84,286.72 C38.6676979,286.72 40.96,284.427698 40.96,281.6 C40.96,278.772302 38.6676979,276.48 35.84,276.48 Z M35.84,296.96 C33.0123021,296.96 30.72,299.252302 30.72,302.08 C30.72,304.907698 33.0123021,307.2 35.84,307.2 C38.6676979,307.2 40.96,304.907698 40.96,302.08 C40.96,299.252302 38.6676979,296.96 35.84,296.96 Z M35.84,317.44 C33.0123021,317.44 30.72,319.732302 30.72,322.56 C30.72,325.387698 33.0123021,327.68 35.84,327.68 C38.6676979,327.68 40.96,325.387698 40.96,322.56 C40.96,319.732302 38.6676979,317.44 35.84,317.44 Z",
    id: "Shape"
  }))));
};
var PricingTableIcon = function PricingTableIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "256",
    height: "256",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "eb-pricing-table",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M85.3333333,0 C77.4385707,0 70.8027733,5.47924907 68.8833323,12.8 L17.0666667,12.8 C7.69137493,12.8 0,20.4913749 0,29.8666667 L0,226.133333 C0,235.508625 7.69137493,243.2 17.0666667,243.2 L21.3333333,243.2 C23.6897483,243.2 25.6,241.289748 25.6,238.933333 C25.6,236.576918 23.6897483,234.666667 21.3333333,234.666667 L17.0666667,234.666667 C12.3022251,234.666667 8.53333333,230.897775 8.53333333,226.133333 L8.53333333,29.8666667 C8.53333333,25.1022251 12.3022251,21.3333333 17.0666667,21.3333333 L68.2666667,21.3333333 L68.2666667,51.2 L29.8666667,51.2 L29.8666667,59.7333333 L68.2666667,59.7333333 L68.2666667,76.8 L29.8666667,76.8 L29.8666667,85.3333333 L68.2666667,85.3333333 L68.2666667,136.533333 L51.2,136.533333 L51.2,145.066667 L68.2666667,145.066667 L68.2666667,162.133333 L51.2,162.133333 L51.2,170.666667 L68.2666667,170.666667 L68.2666667,238.933333 C68.2666667,248.308625 75.9580416,256 85.3333333,256 L93.8666667,256 C96.2230816,256 98.1333333,254.089748 98.1333333,251.733333 C98.1333333,249.376918 96.2230816,247.466667 93.8666667,247.466667 L85.3333333,247.466667 C80.5688917,247.466667 76.8,243.697775 76.8,238.933333 L76.8,17.0666667 C76.8,12.3022251 80.5688917,8.53333333 85.3333333,8.53333333 L170.666667,8.53333333 C175.431108,8.53333333 179.2,12.3022251 179.2,17.0666667 L179.2,136.533333 L179.2,145.066667 L179.2,162.133333 L179.2,170.666667 L179.2,187.733333 L179.2,196.266667 L179.2,238.933333 C179.2,243.697775 175.431108,247.466667 170.666667,247.466667 L162.133333,247.466667 C159.776918,247.466667 157.866667,249.376918 157.866667,251.733333 C157.866667,254.089748 159.776918,256 162.133333,256 L170.666667,256 C180.041958,256 187.733333,248.308625 187.733333,238.933333 L187.733333,196.266667 L226.133333,196.266667 L226.133333,187.733333 L187.733333,187.733333 L187.733333,170.666667 L226.133333,170.666667 L226.133333,162.133333 L187.733333,162.133333 L187.733333,145.066667 L226.133333,145.066667 L226.133333,136.533333 L187.733333,136.533333 L187.733333,85.3333333 L226.133333,85.3333333 L226.133333,76.8 L187.733333,76.8 L187.733333,59.7333333 L226.133333,59.7333333 L226.133333,51.2 L187.733333,51.2 L187.733333,21.3333333 L238.933333,21.3333333 C243.697775,21.3333333 247.466667,25.1022251 247.466667,29.8666667 L247.466667,226.133333 C247.466667,230.897775 243.697775,234.666667 238.933333,234.666667 L234.666667,234.666667 C232.310252,234.666667 230.4,236.576918 230.4,238.933333 C230.4,241.289748 232.310252,243.2 234.666667,243.2 L238.933333,243.2 C248.308625,243.2 256,235.508625 256,226.133333 L256,29.8666667 C256,20.4913749 248.308625,12.8 238.933333,12.8 L187.116668,12.8 C185.197227,5.47924907 178.561429,0 170.666667,0 L85.3333333,0 Z M93.8666667,42.6666667 L93.8666667,51.2 L162.133333,51.2 L162.133333,42.6666667 L93.8666667,42.6666667 Z M93.8666667,68.2666667 L93.8666667,76.8 L162.133333,76.8 L162.133333,68.2666667 L93.8666667,68.2666667 Z M98.1333333,128 C95.7769184,128 93.8666667,129.910252 93.8666667,132.266667 C93.8666667,134.623082 95.7769184,136.533333 98.1333333,136.533333 C100.489748,136.533333 102.4,134.623082 102.4,132.266667 C102.4,129.910252 100.489748,128 98.1333333,128 Z M115.2,128 L115.2,136.533333 L162.133333,136.533333 L162.133333,128 L115.2,128 Z M34.1333333,136.533333 C31.7769184,136.533333 29.8666667,138.443585 29.8666667,140.8 C29.8666667,143.156415 31.7769184,145.066667 34.1333333,145.066667 C36.4897483,145.066667 38.4,143.156415 38.4,140.8 C38.4,138.443585 36.4897483,136.533333 34.1333333,136.533333 Z M98.1333333,153.6 C95.7769184,153.6 93.8666667,155.510252 93.8666667,157.866667 C93.8666667,160.223082 95.7769184,162.133333 98.1333333,162.133333 C100.489748,162.133333 102.4,160.223082 102.4,157.866667 C102.4,155.510252 100.489748,153.6 98.1333333,153.6 Z M115.2,153.6 L115.2,162.133333 L162.133333,162.133333 L162.133333,153.6 L115.2,153.6 Z M34.1333333,162.133333 C31.7769184,162.133333 29.8666667,164.043585 29.8666667,166.4 C29.8666667,168.756415 31.7769184,170.666667 34.1333333,170.666667 C36.4897483,170.666667 38.4,168.756415 38.4,166.4 C38.4,164.043585 36.4897483,162.133333 34.1333333,162.133333 Z M98.1333333,179.2 C95.7769184,179.2 93.8666667,181.110252 93.8666667,183.466667 C93.8666667,185.823082 95.7769184,187.733333 98.1333333,187.733333 C100.489748,187.733333 102.4,185.823082 102.4,183.466667 C102.4,181.110252 100.489748,179.2 98.1333333,179.2 Z M115.2,179.2 L115.2,187.733333 L162.133333,187.733333 L162.133333,179.2 L115.2,179.2 Z M98.1333333,204.8 C95.7769184,204.8 93.8666667,206.710252 93.8666667,209.066667 C93.8666667,211.423082 95.7769184,213.333333 98.1333333,213.333333 C100.489748,213.333333 102.4,211.423082 102.4,209.066667 C102.4,206.710252 100.489748,204.8 98.1333333,204.8 Z M115.2,204.8 L115.2,213.333333 L162.133333,213.333333 L162.133333,204.8 L115.2,204.8 Z M38.4,234.666667 C36.0435851,234.666667 34.1333333,236.576918 34.1333333,238.933333 C34.1333333,241.289748 36.0435851,243.2 38.4,243.2 C40.7564149,243.2 42.6666667,241.289748 42.6666667,238.933333 C42.6666667,236.576918 40.7564149,234.666667 38.4,234.666667 Z M55.4666667,234.666667 C53.1102517,234.666667 51.2,236.576918 51.2,238.933333 C51.2,241.289748 53.1102517,243.2 55.4666667,243.2 C57.8230816,243.2 59.7333333,241.289748 59.7333333,238.933333 C59.7333333,236.576918 57.8230816,234.666667 55.4666667,234.666667 Z M200.533333,234.666667 C198.176918,234.666667 196.266667,236.576918 196.266667,238.933333 C196.266667,241.289748 198.176918,243.2 200.533333,243.2 C202.889748,243.2 204.8,241.289748 204.8,238.933333 C204.8,236.576918 202.889748,234.666667 200.533333,234.666667 Z M217.6,234.666667 C215.243585,234.666667 213.333333,236.576918 213.333333,238.933333 C213.333333,241.289748 215.243585,243.2 217.6,243.2 C219.956415,243.2 221.866667,241.289748 221.866667,238.933333 C221.866667,236.576918 219.956415,234.666667 217.6,234.666667 Z M110.933333,247.466667 C108.576918,247.466667 106.666667,249.376918 106.666667,251.733333 C106.666667,254.089748 108.576918,256 110.933333,256 C113.289748,256 115.2,254.089748 115.2,251.733333 C115.2,249.376918 113.289748,247.466667 110.933333,247.466667 Z M128,247.466667 C125.643585,247.466667 123.733333,249.376918 123.733333,251.733333 C123.733333,254.089748 125.643585,256 128,256 C130.356415,256 132.266667,254.089748 132.266667,251.733333 C132.266667,249.376918 130.356415,247.466667 128,247.466667 Z M145.066667,247.466667 C142.710252,247.466667 140.8,249.376918 140.8,251.733333 C140.8,254.089748 142.710252,256 145.066667,256 C147.423082,256 149.333333,254.089748 149.333333,251.733333 C149.333333,249.376918 147.423082,247.466667 145.066667,247.466667 Z",
    id: "Shape"
  }))));
};
var ProgressbarIcon = function ProgressbarIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-progress",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "12.315",
    y1: "4.167",
    x2: "12.315",
    y2: "59.168",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M9.8,45.771c1.027,1.637,2.24,3.162,3.606,4.536l1.424-1.408 c-1.261-1.269-2.381-2.678-3.329-4.188L9.8,45.771z",
    fill: "url(#SVGID_1__48178)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "7.592",
    y1: "4.167",
    x2: "7.592",
    y2: "59.168",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M6.003,34.906c0.215,1.923,0.646,3.823,1.283,5.646l1.894-0.658 c-0.588-1.682-0.985-3.435-1.183-5.209L6.003,34.906z",
    fill: "url(#SVGID_2__48178)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "7.586",
    y1: "4.167",
    x2: "7.586",
    y2: "59.168",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M9.173,24.127l-1.894-0.656C6.643,25.295,6.213,27.196,6,29.121l1.994,0.219 C8.19,27.563,8.587,25.81,9.173,24.127z",
    fill: "url(#SVGID_3__48178)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "12.299",
    y1: "4.167",
    x2: "12.299",
    y2: "59.168",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M14.813,15.115l-1.426-1.406c-1.364,1.374-2.576,2.901-3.602,4.538l1.7,1.061 C12.433,17.796,13.552,16.385,14.813,15.115z",
    fill: "url(#SVGID_4__48178)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_5__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "20.846",
    y1: "4.167",
    x2: "20.846",
    y2: "59.168",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M23.789,9.403l-0.676-1.883c-1.821,0.65-3.574,1.509-5.211,2.551l1.079,1.686 C20.493,10.795,22.11,10.003,23.789,9.403z",
    fill: "url(#SVGID_5__48178)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_6__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "20.869",
    y1: "4.167",
    x2: "20.869",
    y2: "59.168",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M17.924,53.942c1.64,1.04,3.395,1.896,5.215,2.546l0.676-1.883 c-1.68-0.6-3.3-1.39-4.813-2.351L17.924,53.942z",
    fill: "url(#SVGID_6__48178)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_7__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "43.399",
    y1: "4.167",
    x2: "43.399",
    y2: "59.168",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M31.921,6c-1.042,0-2.093,0.063-3.124,0.185l0.237,1.986C29.988,8.058,30.958,8,31.921,8 c13.274,0,24.073,10.767,24.073,24S45.195,56,31.921,56c-0.963,0-1.934-0.058-2.887-0.171l-0.237,1.986 C29.828,57.938,30.879,58,31.921,58C46.302,58,58,46.337,58,32S46.302,6,31.921,6z",
    fill: "url(#SVGID_7__48178)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_8__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "31.921",
    y1: "20.667",
    x2: "31.921",
    y2: "45.235",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M27.908,41.937c-1.028,0-2.056-0.391-2.839-1.171l-7.606-7.583l2.837-2.828l7.606,7.583 l15.636-15.583l2.837,2.828l-15.63,15.583C29.965,41.546,28.937,41.937,27.908,41.937z",
    fill: "url(#SVGID_8__48178)"
  }));
};
var InteractivePromoIcon = function InteractivePromoIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-promo",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "37",
    y1: "16.125",
    x2: "37",
    y2: "22.38",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M42,22H32c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1v4 C43,21.552,42.552,22,42,22z",
    fill: "url(#SVGID_1__43971)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "39.5",
    y1: "10",
    x2: "39.5",
    y2: "54.388",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M58,36c0-2.967-2.167-5.431-5-5.91v-7.004c0-0.777-0.435-1.468-1.135-1.805 c-0.7-0.335-1.511-0.244-2.119,0.241l-7.996,6.396c-0.03,0.024-0.052,0.055-0.081,0.081H30c-2.757,0-5,2.243-5,5h-2 c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2h2c0,2.757,2.243,5,5,5v6c0,2.206,1.794,4,4,4s4-1.794,4-4v-6h3.669 c0.029,0.026,0.051,0.057,0.082,0.082l7.995,6.396c0.365,0.292,0.804,0.441,1.247,0.441c0.295,0,0.593-0.066,0.872-0.2 C52.565,50.382,53,49.69,53,48.914V41.91C55.833,41.431,58,38.967,58,36z M23,37v-2h2v2H23z M36,50c0,1.103-0.897,2-2,2 s-2-0.897-2-2v-6h4V50z M30,42c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h11v12h-3H30z M50.996,48.916L43,42.518V29.479l4-3.197 V36h2V24.684l2-1.598l0.002,25.834C51.002,48.92,51,48.919,50.996,48.916z M53,39.858v-7.716c1.72,0.447,3,2,3,3.858 S54.72,39.411,53,39.858z",
    fill: "url(#SVGID_2__43971)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "31",
    y1: "10",
    x2: "31",
    y2: "54.388",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M29,34v2h2v-2h2v-2h-2C29.897,32,29,32.897,29,34z",
    fill: "url(#SVGID_3__43971)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "27.5",
    y1: "10",
    x2: "27.5",
    y2: "54.388",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M8,40V15c0-1.654,1.346-3,3-3h33c1.654,0,3,1.346,3,3v4h2v-4c0-2.757-2.243-5-5-5H11 c-2.757,0-5,2.243-5,5v25c0,2.757,2.243,5,5,5h12v-2H11C9.346,43,8,41.654,8,40z",
    fill: "url(#SVGID_4__43971)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_5__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "19",
    y1: "10",
    x2: "19",
    y2: "54.388",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "16",
    width: "14",
    height: "2",
    fill: "url(#SVGID_5__43971)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_6__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "19",
    y1: "10",
    x2: "19",
    y2: "54.388",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "20",
    width: "14",
    height: "2",
    fill: "url(#SVGID_6__43971)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_7__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "17",
    y1: "10",
    x2: "17",
    y2: "54.388",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "24",
    width: "10",
    height: "2",
    fill: "url(#SVGID_7__43971)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_8__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "16",
    y1: "10",
    x2: "16",
    y2: "54.388",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "28",
    width: "8",
    height: "2",
    fill: "url(#SVGID_8__43971)"
  }));
};
var SocialIcon = function SocialIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-social",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "28",
    y1: "38.167",
    x2: "28",
    y2: "49.844",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "28",
    cy: "44",
    r: "5",
    fill: "url(#SVGID_1__44048)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "10",
    x2: "32",
    y2: "56.363",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M49,11c-6.617,0-12,5.383-12,12c0,2.949,1.074,5.649,2.845,7.741l-6.234,6.234 C32.071,35.742,30.122,35,28,35s-4.071,0.742-5.611,1.975l-5.077-5.077C18.366,30.542,19,28.846,19,27c0-4.411-3.589-8-8-8 s-8,3.589-8,8s3.589,8,8,8c1.846,0,3.542-0.634,4.897-1.688l5.077,5.077C19.742,39.929,19,41.878,19,44c0,4.963,4.037,9,9,9 s9-4.037,9-9c0-2.122-0.742-4.071-1.975-5.611l6.234-6.234C43.351,33.926,46.051,35,49,35c6.617,0,12-5.383,12-12S55.617,11,49,11z M11,33c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S14.309,33,11,33z M28,51c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7 S31.859,51,28,51z M49,33c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S54.514,33,49,33z",
    fill: "url(#SVGID_2__44048)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "49",
    y1: "10",
    x2: "49",
    y2: "56.363",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M49,15c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S53.411,15,49,15z M49,29 c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S52.309,29,49,29z",
    fill: "url(#SVGID_3__44048)"
  }));
};
var TeamMembersIcon = function TeamMembersIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-team-members",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "30.75",
    x2: "30",
    y2: "35.17",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "30",
    cy: "33",
    r: "2",
    fill: "url(#SVGID_1__43670)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "22",
    y1: "30.75",
    x2: "22",
    y2: "35.17",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "22",
    cy: "33",
    r: "2",
    fill: "url(#SVGID_2__43670)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "36.833",
    x2: "26",
    y2: "41.25",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M23,38c0,1.657,1.343,3,3,3h0c1.657,0,3-1.343,3-3v-1h-6V38z",
    fill: "url(#SVGID_3__43670)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "6.75",
    x2: "32",
    y2: "57.323",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M51.114,40.344c0.329-0.77,0.569-1.584,0.716-2.428C54.191,37.518,56,35.473,56,33 c0-2.415-1.721-4.434-4-4.899V27h3.5c1.379,0,2.5-1.121,2.5-2.5S56.879,22,55.5,22H52v-3c0-3.859-3.141-7-7-7H33.715 c-0.866-0.477-1.77-0.885-2.715-1.195V7h-2c-1.2,0-2.266,0.542-3,1.382C25.266,7.542,24.2,7,23,7h-2v3.811 C14.621,12.917,10,18.925,10,26v2h0.026C9.391,28.838,9,29.87,9,31c0,2.533,1.894,4.632,4.339,4.956 c0.165,0.706,0.389,1.389,0.664,2.046C8.968,41.773,6,47.648,6,54v3h40h12v-3C58,48.6,55.436,43.548,51.114,40.344z M54,33 c0,1.302-0.838,2.402-2,2.816v-5.631C53.162,30.598,54,31.698,54,33z M55.5,24c0.275,0,0.5,0.225,0.5,0.5S55.775,25,55.5,25H42 c0-0.333-0.012-0.667-0.033-1H55.5z M43.789,44.874c-1.369-2.668-3.341-5.025-5.794-6.868c0.278-0.664,0.493-1.358,0.659-2.072 C41.1,35.61,43,33.533,43,31c0-1.13-0.391-2.162-1.026-3H42v-1h6v4c0,1.302,0.838,2.402,2,2.816V36c0,3.954-2.532,7.405-6.301,8.588 L43.789,44.874z M35.203,26H36c0.34,0,0.672-0.033,1-0.08v2.792C36.345,28.374,35.563,27.626,35.203,26z M37,30.823V33 c0,6.065-4.935,11-11,11s-11-4.935-11-11v-2.177c1.238-0.356,3.247-1.46,3.83-4.823H33.17C33.753,29.363,35.762,30.466,37,30.823z M36,24h-1h-2H19.101c0.465-2.279,2.484-4,4.899-4h16.899C40.435,22.279,38.415,24,36,24z M41,31c0,1.317-0.859,2.427-2.042,2.829 C38.976,33.553,39,33.28,39,33v-4.816C40.162,28.598,41,29.698,41,31z M39,26.101v-0.786c0.347-0.166,0.679-0.355,0.992-0.573 C39.993,24.828,40,24.914,40,25v1.424C39.682,26.284,39.349,26.172,39,26.101z M45,14c2.757,0,5,2.243,5,5v3h-7.685 C42.75,21.089,43,20.074,43,19v-1h-3.152c-0.881-1.525-1.988-2.87-3.269-4H45z M29,9v1.289c-0.575-0.109-1.159-0.19-1.75-0.236 C27.589,9.429,28.242,9,29,9z M23,9c0.762,0,1.418,0.434,1.756,1.063c-0.595,0.046-1.181,0.119-1.756,0.229V9z M11,31 c0-1.304,0.836-2.416,2-2.829V33c0,0.281,0.009,0.562,0.026,0.838C11.849,33.433,11,32.313,11,31z M14,26 c-0.712,0-1.386,0.155-2,0.424V26c0-7.72,6.28-14,14-14c4.626,0,8.885,2.264,11.486,6H24c-3.519,0-6.432,2.614-6.92,6H17 c0,3.078-1.119,4.258-2,4.713V26H14z M14.937,39.81C17.229,43.52,21.328,46,26,46c4.672,0,8.765-2.486,11.056-6.197 c0.541,0.422,1.053,0.873,1.537,1.349C35.839,45.401,31.104,48,26,48c-5.086,0-9.84-2.612-12.594-6.858 C13.888,40.672,14.399,40.228,14.937,39.81z M44,55h-4v-2h-2v2H14v-2h-2v2H8v-1c0-4.207,1.447-8.182,4.016-11.342 C15.173,47.216,20.41,50,26,50c5.608,0,10.815-2.774,13.972-7.33C42.54,45.843,44,49.835,44,54V55z M56,55h-4v-2h-2v2h-4v-1 c0-2.631-0.53-5.198-1.504-7.574c2.377-0.795,4.334-2.333,5.654-4.311C53.828,44.949,56,49.328,56,54V55z",
    fill: "url(#SVGID_4__43670)"
  }));
};
var TestimonialIcon = function TestimonialIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-testimonials",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "8",
    y1: "22.938",
    x2: "8",
    y2: "27.125",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M10,26c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_1__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "14",
    y1: "22.938",
    x2: "14",
    y2: "27.125",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M16,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_2__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "20",
    y1: "22.938",
    x2: "20",
    y2: "27.125",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M22,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_3__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "22.938",
    x2: "26",
    y2: "27.125",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M28,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_4__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_5__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "8",
    y1: "28.813",
    x2: "8",
    y2: "33.448",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M10,32c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_5__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_6__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "17",
    y1: "28.813",
    x2: "17",
    y2: "33.448",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M22,32c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h8 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_6__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_7__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "28.813",
    x2: "26",
    y2: "33.448",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M28,32c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_7__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_8__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "28",
    y1: "9.5",
    x2: "28",
    y2: "55.566",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M49,9H19c-2.757,0-5,2.241-5,4.998V17H5c-1.654,0-3,1.344-3,2.998v16C2,37.653,3.346,39,5,39 h9v2.998C14,44.755,16.243,47,19,47h11c0.552,0,1,0.447,1,0.998v4.1c0,1.132,0.658,2.135,1.717,2.617 c0.422,0.193,0.865,0.287,1.302,0.287c0.721,0,1.425-0.256,1.995-0.751l8.077-7.007C44.272,47.086,44.506,47,44.748,47H49 c2.757,0,5-2.245,5-5.002v-28C54,11.241,51.757,9,49,9z M14,35c-1.103,0-2,1-2,2H5c-0.552,0-1-0.45-1-1.002v-16 C4,19.447,4.448,19,5,19h24c0.552,0,1,0.447,1,0.998v16C30,36.55,29.552,37,29,37h-7c0-1-0.897-2-2-2H14z M52,41.998 C52,43.653,50.654,45,49,45h-4.252c-0.724,0-1.424,0.26-1.969,0.734l-8.076,7.007c-0.381,0.328-0.846,0.296-1.156,0.154 C33.383,52.821,33,52.593,33,52.098v-4.1C33,46.344,31.654,45,30,45H19c-1.654,0-3-1.347-3-3.002V39h13c1.654,0,3-1.347,3-3.002v-16 C32,18.344,30.654,17,29,17H16v-3.002C16,12.344,17.346,11,19,11h30c1.654,0,3,1.344,3,2.998V41.998z",
    fill: "url(#SVGID_8__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_9__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "37",
    y: "17",
    width: "10",
    height: "2",
    fill: "url(#SVGID_9__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_10__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "37",
    y: "21",
    width: "10",
    height: "2",
    fill: "url(#SVGID_10__43982)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_11__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M44,25h-4c-1.654,0-3,1.344-3,2.998V39h2v-5h6v5h2V27.998C47,26.344,45.654,25,44,25z M45,32 h-6v-4.002C39,27.447,39.448,27,40,27h4c0.552,0,1,0.447,1,0.998V32z",
    fill: "url(#SVGID_11__43982)"
  }));
};
var ImageComparisonIcon = function ImageComparisonIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-img-comparison",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "7",
    x2: "32",
    y2: "56.807",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M52,7H12c-2.757,0-5,2.243-5,5v40c0,2.757,2.243,5,5,5h40c2.757,0,5-2.243,5-5V12 C57,9.243,54.757,7,52,7z M9,12c0-1.654,1.346-3,3-3h40c0.462,0,0.894,0.113,1.285,0.301L41.154,21.432C38.697,19.3,35.501,18,32,18 c-7.72,0-14,6.28-14,14c0,3.501,1.3,6.697,3.432,9.154L9.301,53.285C9.113,52.894,9,52.462,9,52V12z M22.845,39.741 C21.074,37.649,20,34.949,20,32c0-6.617,5.383-12,12-12c2.949,0,5.649,1.074,7.741,2.845L22.845,39.741z M41.155,24.259 C42.926,26.351,44,29.051,44,32c0,6.617-5.383,12-12,12c-2.949,0-5.649-1.074-7.741-2.845L41.155,24.259z M55,52 c0,1.654-1.346,3-3,3H12c-0.462,0-0.894-0.113-1.285-0.301l12.131-12.131C25.303,44.7,28.499,46,32,46c7.72,0,14-6.28,14-14 c0-3.501-1.3-6.697-3.432-9.154l12.131-12.131C54.887,11.106,55,11.538,55,12V52z",
    fill: "url(#SVGID_1__56353)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "34.691",
    y1: "27.618",
    x2: "34.691",
    y2: "41.826",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M32,42c-1.614,0-3.199-0.397-4.618-1.139l13.479-13.479C41.603,28.801,42,30.386,42,32 C42,37.514,37.514,42,32,42z",
    fill: "url(#SVGID_2__56353)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "29.879",
    y1: "11.097",
    x2: "29.879",
    y2: "48.982",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M40.98,18.777C38.336,16.976,35.209,16,32,16c-8.822,0-16,7.178-16,16 c0,3.209,0.976,6.336,2.777,8.98L11,48.758V12c0-0.551,0.449-1,1-1h36.758L40.98,18.777z",
    fill: "url(#SVGID_3__56353)"
  }));
};
var TestIcon = function TestIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20",
    className: "eb-category-icon",
    viewBox: "0 0 453 446",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#2460FF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#B80AFF",
    offset: "100%"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M110.214843,146.445312 L165.730468,146.445312 L165.996093,146.578125 L166.195312,146.578125 C169.515641,146.578125 172.216135,148.282535 174.296875,151.691406 C175.005211,153.10808 175.359375,154.569003 175.359375,156.074219 C175.359375,159.748716 173.544288,162.582021 169.914062,164.574219 C168.674472,165.149742 167.434902,165.4375 166.195312,165.4375 L109.617187,165.4375 C106.960924,165.4375 104.614593,164.220064 102.578125,161.785156 C101.249993,160.014314 100.585937,158.199228 100.585937,156.339844 L100.585937,155.542969 C100.585937,152.621079 102.04686,150.119802 104.96875,148.039062 C106.562507,147.065099 108.134106,146.578125 109.683593,146.578125 L109.949218,146.578125 L110.214843,146.445312 Z M110.082031,193.925781 L138.703125,194.058594 C140.60678,194.058594 142.643218,195.032542 144.8125,196.980469 C146.539071,198.972666 147.402343,201.141915 147.402343,203.488281 C147.402343,206.764339 145.875015,209.442698 142.820312,211.523438 C141.315096,212.408859 139.854173,212.851562 138.4375,212.851562 L109.484375,212.851562 C106.651027,212.851562 104.19402,211.43491 102.113281,208.601562 C101.095046,207.007805 100.585937,205.41407 100.585937,203.820312 L100.585937,203.023438 C100.585937,200.013006 102.157536,197.423188 105.300781,195.253906 C106.894539,194.457027 108.399732,194.058594 109.816406,194.058594 L109.949218,194.058594 C110.03776,194.058594 110.082031,194.014323 110.082031,193.925781 Z M165.664062,194.058594 L166.128906,194.058594 C169.714861,194.058594 172.526031,195.91795 174.5625,199.636719 C175.093752,200.96485 175.359375,202.248692 175.359375,203.488281 C175.359375,207.20705 173.522153,210.06249 169.847656,212.054688 C168.519524,212.58594 167.346359,212.851562 166.328125,212.851562 L165.398437,212.851562 C162.388005,212.851562 159.820323,211.279964 157.695312,208.136719 C156.854162,206.542961 156.433593,204.971362 156.433593,203.421875 C156.433593,199.791649 158.248679,196.958344 161.878906,194.921875 C163.251308,194.346351 164.513015,194.058594 165.664062,194.058594 Z M110.214843,241.207031 L165.730468,241.207031 C165.730468,241.295573 166.416659,241.406249 167.789062,241.539062 C170.091157,242.114586 171.839837,243.15494 173.035156,244.660156 C174.584643,246.475269 175.359375,248.555978 175.359375,250.902344 C175.359375,254.488299 173.544288,257.321604 169.914062,259.402344 C168.807286,259.800783 168.054689,260 167.65625,260 L108.289062,260 C106.739575,260 104.880219,258.959646 102.710937,256.878906 C101.294263,254.975251 100.585937,253.049489 100.585937,251.101562 L100.585937,250.503906 C100.585937,247.227848 102.246077,244.54949 105.566406,242.46875 C106.540369,241.893226 108.045562,241.494793 110.082031,241.273438 C110.082031,241.229166 110.126301,241.207031 110.214843,241.207031 Z M200.175781,145.582031 L242.609375,145.582031 C252.216194,145.582031 260.494757,149.256474 267.445312,156.605469 C273.156279,163.113314 276.011719,170.528604 276.011719,178.851562 C276.011719,188.104213 272.669304,196.050748 265.984375,202.691406 C272.669304,209.022167 276.011719,216.968702 276.011719,226.53125 C276.011719,236.713593 271.783896,245.390589 263.328125,252.5625 C260.539049,254.598969 257.882825,256.148432 255.359375,257.210938 C251.37498,258.716153 248.253918,259.46875 245.996094,259.46875 L203.628906,259.46875 C202.212232,259.46875 200.485687,258.561207 198.449219,256.746094 C196.678377,254.753896 195.792969,252.606782 195.792969,250.304688 L195.792969,202.425781 C195.792969,198.884097 197.608055,196.072927 201.238281,193.992188 C202.787768,193.372393 204.093745,193.0625 205.15625,193.0625 C206.572924,193.106771 207.436196,193.128906 207.746094,193.128906 C214.696649,193.128906 226.649655,193.151041 243.605469,193.195312 C245.951835,193.195312 248.630193,192.199229 251.640625,190.207031 C255.270851,186.930973 257.085938,183.101584 257.085938,178.71875 C257.085938,175.265608 255.735691,171.989599 253.035156,168.890625 C250.290351,166.057277 246.881531,164.640625 242.808594,164.640625 L200.175781,164.640625 C195.881489,164.640625 192.804697,162.559917 190.945312,158.398438 C190.591144,157.24739 190.414062,156.207036 190.414062,155.277344 L190.414062,154.945312 C190.414062,151.713526 191.919256,149.079437 194.929688,147.042969 C196.434903,146.069006 198.183584,145.582031 200.175781,145.582031 Z M217.441406,212.652344 L217.441406,241.140625 L245,241.140625 C251.817742,241.140625 256.466133,237.776075 258.945312,231.046875 C259.388023,229.453117 259.609375,228.10287 259.609375,226.996094 C259.609375,223.365867 258.170587,219.979182 255.292969,216.835938 C252.636705,214.046861 249.028669,212.652344 244.46875,212.652344 L217.441406,212.652344 Z",
    id: "path-2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("filter", {
    x: "-23.1%",
    y: "-22.3%",
    width: "146.2%",
    height: "170.8%",
    filterUnits: "objectBoundingBox",
    id: "filter-3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feOffset", {
    dy: "15",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feGaussianBlur", {
    stdDeviation: "11",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
    in: "shadowBlurOuter1"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    id: "path-4",
    cx: "318.5",
    cy: "60.5",
    r: "55.5"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("filter", {
    x: "-65.8%",
    y: "-44.1%",
    width: "222.5%",
    height: "222.5%",
    filterUnits: "objectBoundingBox",
    id: "filter-5"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feOffset", {
    dx: "-5",
    dy: "19",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feGaussianBlur", {
    stdDeviation: "19.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28161798 0",
    in: "shadowBlurOuter1"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    id: "path-6",
    cx: "319",
    cy: "61",
    r: "17"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("filter", {
    x: "-152.9%",
    y: "-111.8%",
    width: "388.2%",
    height: "388.2%",
    filterUnits: "objectBoundingBox",
    id: "filter-7"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feOffset", {
    dx: "-3",
    dy: "11",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feGaussianBlur", {
    stdDeviation: "14.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feColorMatrix", {
    values: "0 0 0 0 0.382304935 0 0 0 0 0.0324290316 0 0 0 0 0.516581633 0 0 0 0.654381793 0",
    in: "shadowBlurOuter1"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    id: "path-8",
    cx: "63.5",
    cy: "348.5",
    r: "9.5"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("filter", {
    x: "-147.4%",
    y: "-89.5%",
    width: "363.2%",
    height: "363.2%",
    filterUnits: "objectBoundingBox",
    id: "filter-9"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feOffset", {
    dx: "-3",
    dy: "8",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feGaussianBlur", {
    stdDeviation: "7",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28161798 0",
    in: "shadowBlurOuter1"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "79.408%",
    y1: "0%",
    x2: "6.263%",
    y2: "100%",
    id: "linearGradient-10"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#FF710F",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#CB16A9",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "EB-Logo",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Group-5",
    transform: "translate(29 19)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    id: "Oval-2",
    fill: "url(#linearGradient-1)",
    cx: "187",
    cy: "208",
    r: "187"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "EB"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#000",
    filter: "url(#filter-3)",
    xlinkHref: "#path-2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#FFF",
    xlinkHref: "#path-2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Oval-3",
    opacity: "0.913"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#000",
    filter: "url(#filter-5)",
    xlinkHref: "#path-4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#FFF",
    xlinkHref: "#path-4"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Oval-3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#000",
    filter: "url(#filter-7)",
    xlinkHref: "#path-6"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#A43DFF",
    xlinkHref: "#path-6"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Oval-3-Copy-2",
    opacity: "0.913",
    transform: "rotate(-7 63.5 348.5)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#000",
    filter: "url(#filter-9)",
    xlinkHref: "#path-8"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#FFF",
    xlinkHref: "#path-8"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    id: "Oval-3-Copy-4",
    fill: "#F5A623",
    cx: "385",
    cy: "117",
    r: "12"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    id: "Oval-3-Copy-5",
    fill: "#D8D8D8",
    cx: "257",
    cy: "9",
    r: "9"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M145.182623,334.548531 C139.966285,339.764869 137.156925,346.476118 136.753323,353.300766 C136.311922,360.746058 133.113592,367.759704 127.839945,373.033351 C122.604098,378.270418 115.653858,381.543128 108.259778,381.941852 C100.95349,382.335699 93.769137,385.480378 88.3930654,391.383204 C83.408402,396.856823 80.9099736,403.833889 80.8989995,410.813393 L80.8989995,410.914598 C80.9111929,417.89898 83.4144987,424.878484 88.4064781,430.352103 C99.6170933,442.645492 118.683918,442.977153 130.316425,431.343426 C135.532764,426.127088 138.340904,419.418278 138.745725,412.591191 C139.185907,405.144679 142.384237,398.132253 147.659103,392.857387 C152.894951,387.62032 159.843972,384.350049 167.239271,383.951325 C174.544339,383.557478 181.729912,380.41036 187.104764,374.508753 C192.077234,369.048547 194.575662,362.093429 194.59883,355.130996 L194.59883,354.934682 C194.575662,347.964933 192.073576,341.002499 187.092571,335.541074 C181.332407,329.223671 173.498145,326.06558 165.663883,326.06558 C158.251513,326.06558 150.839143,328.89323 145.182623,334.548531",
    id: "Fill-1",
    fill: "url(#linearGradient-10)",
    opacity: "0.898",
    transform: "rotate(34 137.749 382.946)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M220.972652,42 C213.584652,42.035 207.609652,48.035 207.609652,55.43 C207.609652,58.85 208.887652,61.971 210.992652,64.341 C213.289652,66.927 214.540652,70.274 214.540652,73.732 L214.539652,73.732 C214.539652,76.922 213.499652,80.038 211.513652,82.514 C209.037652,84.5 205.920652,85.541 202.731652,85.541 C199.272652,85.541 195.925652,84.29 193.340652,81.994 C190.969652,79.888 187.849652,78.609 184.429652,78.609 C176.801652,78.609 170.659652,84.969 171.014652,92.675 C171.330652,99.551 176.908652,105.132 183.784652,105.454 C187.483652,105.627 190.869652,104.303 193.393652,102.036 C195.949652,99.743 199.300652,98.537 202.733652,98.537 C206.191652,98.537 209.539652,99.788 212.125652,102.085 C214.494652,104.189 217.614652,105.469 221.035652,105.469 C222.732652,105.469 224.354652,105.152 225.849652,104.578 C225.856652,104.576 225.863652,104.574 225.869652,104.57 C226.071652,104.492 226.271652,104.411 226.467652,104.323 C226.485652,104.315 226.501652,104.307 226.519652,104.299 C226.705652,104.216 226.888652,104.13 227.070652,104.038 C227.097652,104.024 227.125652,104.009 227.152652,103.995 C227.322652,103.908 227.489652,103.818 227.656652,103.725 C227.693652,103.704 227.729652,103.681 227.765652,103.659 C227.920652,103.569 228.073652,103.479 228.223652,103.384 C228.270652,103.355 228.315652,103.323 228.361652,103.292 C228.499652,103.202 228.637652,103.111 228.772652,103.017 C228.828652,102.977 228.882652,102.936 228.936652,102.896 C229.058652,102.806 229.181652,102.717 229.301652,102.623 C229.366652,102.572 229.427652,102.52 229.491652,102.468 C229.598652,102.381 229.705652,102.295 229.809652,102.205 C229.882652,102.143 229.952652,102.077 230.023652,102.013 C230.115652,101.931 230.207652,101.848 230.296652,101.763 C230.377652,101.687 230.452652,101.608 230.530652,101.531 C230.608652,101.454 230.686652,101.377 230.762652,101.298 C230.847652,101.208 230.929652,101.116 231.012652,101.024 C231.076652,100.952 231.141652,100.883 231.204652,100.811 C231.294652,100.706 231.380652,100.599 231.467652,100.492 C231.518652,100.429 231.572652,100.366 231.621652,100.302 C231.715652,100.182 231.805652,100.06 231.894652,99.938 C231.934652,99.882 231.976652,99.829 232.015652,99.774 C232.110652,99.639 232.201652,99.501 232.291652,99.362 C232.321652,99.317 232.353652,99.271 232.383652,99.224 C232.478652,99.074 232.569652,98.921 232.658652,98.767 C232.679652,98.73 232.702652,98.694 232.723652,98.656 C232.818652,98.491 232.906652,98.322 232.994652,98.152 C233.008652,98.125 233.022652,98.099 233.037652,98.071 C233.129652,97.89 233.214652,97.707 233.298652,97.519 C233.305652,97.503 233.314652,97.486 233.321652,97.469 C233.409652,97.272 233.491652,97.072 233.569652,96.871 L233.578652,96.851 C234.152652,95.356 234.467652,93.733 234.467652,92.037 C234.467652,88.617 233.189652,85.496 231.083652,83.125 C228.787652,80.54 227.536652,77.191 227.536652,73.733 C227.536652,70.301 228.741652,66.949 231.035652,64.395 C233.302652,61.87 234.625652,58.484 234.453652,54.786 C234.131652,47.91 228.550652,42.332 221.673652,42.015 C221.486652,42.006 221.299652,42.001 221.113652,42 L220.972652,42 Z",
    id: "Fill-1",
    fill: "#FFF",
    opacity: "0.097"
  }))));
};
var WrapperIcon = function WrapperIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    viewBox: "0 0 64 42",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "eb-wrapper",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,0 C1.347656,0 0,1.347656 0,3 L0,27 C0,28.652344 1.347656,30 3,30 L20.050781,30 C20.566406,36.699219 26.171875,42 33,42 C39.828125,42 45.433594,36.699219 45.949219,30 L61,30 C62.652344,30 64,28.652344 64,27 L64,3 C64,1.347656 62.652344,0 61,0 L3,0 Z M3,2 L61,2 C61.550781,2 62,2.449219 62,3 L62,27 C62,27.550781 61.550781,28 61,28 L45.949219,28 C45.460938,21.628906 40.371094,16.539063 34,16.050781 L34,5 C34,4.449219 33.554688,4 33,4 C32.445313,4 32,4.449219 32,5 L32,16.050781 C25.628906,16.539063 20.539063,21.628906 20.050781,28 L3,28 C2.449219,28 2,27.550781 2,27 L2,3 C2,2.449219 2.449219,2 3,2 Z M5,4 C4.445313,4 4,4.449219 4,5 C4,5.550781 4.445313,6 5,6 L7,6 C7.554688,6 8,5.550781 8,5 C8,4.449219 7.554688,4 7,4 L5,4 Z M17,4 C16.445313,4 16,4.449219 16,5 L16,25 C16,25.550781 16.445313,26 17,26 C17.554688,26 18,25.550781 18,25 L18,5 C18,4.449219 17.554688,4 17,4 Z M49,4 C48.445313,4 48,4.449219 48,5 L48,25 C48,25.550781 48.445313,26 49,26 C49.554688,26 50,25.550781 50,25 L50,5 C50,4.449219 49.554688,4 49,4 Z M5,9 C4.445313,9 4,9.449219 4,10 C4,10.550781 4.445313,11 5,11 L7,11 C7.554688,11 8,10.550781 8,10 C8,9.449219 7.554688,9 7,9 L5,9 Z M5,14 C4.445313,14 4,14.449219 4,15 C4,15.550781 4.445313,16 5,16 L7,16 C7.554688,16 8,15.550781 8,15 C8,14.449219 7.554688,14 7,14 L5,14 Z M33,18 C39.066406,18 44,22.933594 44,29 C44,35.066406 39.066406,40 33,40 C26.933594,40 22,35.066406 22,29 C22,22.933594 26.933594,18 33,18 Z M5,19 C4.445313,19 4,19.449219 4,20 C4,20.550781 4.445313,21 5,21 L7,21 C7.554688,21 8,20.550781 8,20 C8,19.449219 7.554688,19 7,19 L5,19 Z M33,22 C32.445313,22 32,22.449219 32,23 L32,28 L27,28 C26.445313,28 26,28.449219 26,29 C26,29.550781 26.445313,30 27,30 L32,30 L32,35 C32,35.550781 32.445313,36 33,36 C33.554688,36 34,35.550781 34,35 L34,30 L39,30 C39.554688,30 40,29.550781 40,29 C40,28.449219 39.554688,28 39,28 L34,28 L34,23 C34,22.449219 33.554688,22 33,22 Z M5,24 C4.445313,24 4,24.449219 4,25 C4,25.550781 4.445313,26 5,26 L7,26 C7.554688,26 8,25.550781 8,25 C8,24.449219 7.554688,24 7,24 L5,24 Z",
    id: "Shape"
  }))));
};
var InstagramIcon = function InstagramIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "\u0421\u043B\u043E\u0439_1",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "6.667",
    x2: "32",
    y2: "57.872",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z",
    fill: "url(#SVGID_1__43625)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "18.167",
    x2: "32",
    y2: "45.679",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z",
    fill: "url(#SVGID_2__43625)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "46",
    y1: "12.75",
    x2: "46",
    y2: "23.049",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "46",
    cy: "18",
    r: "3",
    fill: "url(#SVGID_3__43625)"
  }));
};
var ImageGalleryIcon = function ImageGalleryIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 66 70"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "35.1",
    x2: "79.881",
    y2: "35.1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "st0g",
    d: "M66.1,2.1H-0.1c-0.9,0-1.6,0.7-1.6,1.6v31.4v31.4c0,0.9,0.7,1.6,1.6,1.6h66.2c0.9,0.2,1.6-0.5,1.6-1.4V35.3 V3.7C67.7,2.8,67,2.1,66.1,2.1z M64.6,36.9v5.8v22.5H1.5V33.8V23.5v-18h63.1V36.9z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "25.217",
    x2: "79.881",
    y2: "25.217"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "st1g",
    d: "M12.4,33.2h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H12.4c-1.7,0-3,1.4-3,3v10C9.4,31.9,10.8,33.2,12.4,33.2z M12,20.2c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H12.4c-0.2,0-0.4-0.2-0.4-0.4V20.2z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "43.836",
    x2: "79.881",
    y2: "43.836"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "st2g",
    d: "M12.4,51.8h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H12.4c-1.7,0-3,1.4-3,3v10C9.4,50.5,10.8,51.8,12.4,51.8z M12,38.9c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H12.4c-0.2,0-0.4-0.2-0.4-0.4V38.9z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "43.836",
    x2: "79.881",
    y2: "43.836"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "st3g",
    d: "M37.5,51.8h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H37.5c-1.7,0-3,1.4-3,3v10C34.5,50.5,35.9,51.8,37.5,51.8 z M37.1,38.9c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H37.5c-0.2,0-0.4-0.2-0.4-0.4V38.9z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_5_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "25.217",
    x2: "79.881",
    y2: "25.217"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "st4g",
    d: "M37.5,33.2h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H37.5c-1.7,0-3,1.4-3,3v10C34.5,31.9,35.9,33.2,37.5,33.2 z M37.1,20.2c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4h0l-4.7-4.9h-0.1l-2.5,2.2l-3.2-4 c0,0,0,0-0.1,0c0,0,0,0-0.1,0l-5,6.7c-0.2-0.1-0.3-0.2-0.3-0.4V20.2z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_6_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "22.534",
    x2: "79.881",
    y2: "22.534"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "st5g",
    d: "M48.1,23.8c0.7,0,1.2-0.6,1.2-1.2s-0.6-1.2-1.2-1.2s-1.2,0.6-1.2,1.2C46.8,23.1,47.3,23.8,48.1,23.8z"
  }));
};
var HeadingIcon = function HeadingIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 83 63"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "a",
    x1: "50%",
    x2: "50%",
    y1: ".781%",
    y2: "100.93%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "b",
    x1: "50%",
    x2: "50%",
    y1: "-13.261%",
    y2: "419.291%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0%",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "100%",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "c",
    x1: "50%",
    x2: "50%",
    y1: "3.125%",
    y2: "96.88%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "d",
    x1: "50%",
    x2: "50%",
    y1: ".781%",
    y2: "100.93%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "e",
    x1: "50%",
    x2: "50%",
    y1: ".782%",
    y2: "100.93%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0%",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "100%",
    stopColor: "#C822FF"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#a)",
    fillRule: "nonzero",
    d: "M72.056 0H10.944C7.115 0 4 3.072 4 6.848v49.304C4 59.928 7.115 63 10.944 63h61.112C75.885 63 79 59.928 79 56.152V6.848C79 3.072 75.885 0 72.056 0zm4.166 56.152c0 2.265-1.87 4.109-4.166 4.109H10.944c-2.297 0-4.166-1.844-4.166-4.109V6.848c0-2.265 1.87-4.109 4.166-4.109h61.112c2.297 0 4.166 1.844 4.166 4.109v49.304z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#b)",
    d: "M77.5 26a5.506 5.506 0 00-5.5 5.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "77.5",
    cy: "31.5",
    r: "2.5",
    fill: "url(#c)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#b)",
    d: "M5.5 26A5.506 5.506 0 000 31.5C0 34.533 2.467 37 5.5 37s5.5-2.467 5.5-5.5S8.533 26 5.5 26z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "5.5",
    cy: "31.5",
    r: "2.5",
    fill: "url(#c)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#d)",
    d: "M3 12.667h14.452V19H3v-6.333zm30.968-4.223l-6.194 4.223H25.71V6.333L33.968 0H35v8.444h-1.032z",
    transform: "translate(22 17)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#e)",
    d: "M0 0h6v30H0V0zm16 0h6v30h-6V0zm18 0h6v30h-6V0z",
    transform: "translate(22 17)"
  }))));
};
var SliderIcon = function SliderIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 70 70",
    version: "1.1",
    viewBox: "0 0 70 70",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "-68.872",
    x2: "-62.187",
    y1: "35.19",
    y2: "35.19",
    gradientTransform: "matrix(-1 0 0 1 1.128 0)",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_1_SLIDER"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M64.8 40.6c-.4 0-.7-.1-1-.4-.6-.6-.6-1.5 0-2.1l2.4-2.5-2.3-3.4c-.5-.7-.3-1.6.4-2.1s1.6-.3 2.1.4l3.6 5.4-4.1 4.3c-.3.2-.7.4-1.1.4z",
    className: "st0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "-132.008",
    x2: "-125.322",
    y1: "35.19",
    y2: "35.19",
    gradientTransform: "translate(132.008)",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_2_SLIDER"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M5.2 40.6c-.4 0-.8-.2-1.1-.5L0 35.8l3.6-5.4c.5-.7 1.4-.9 2.1-.4.7.5.9 1.4.4 2.1l-2.3 3.4L6.3 38c.6.6.6 1.5 0 2.1-.4.3-.7.5-1.1.5z",
    className: "st1"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "10.48",
    x2: "59.603",
    y1: "35",
    y2: "35",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_3_SLIDER"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M53 65.2H17.1c-3.6 0-6.6-3-6.6-6.6V11.4c0-3.6 3-6.6 6.6-6.6H53c3.6 0 6.6 3 6.6 6.6v47.2c0 3.6-3 6.6-6.6 6.6zM17.1 7.8c-2 0-3.6 1.6-3.6 3.6v47.2c0 2 1.6 3.6 3.6 3.6H53c2 0 3.6-1.6 3.6-3.6V11.4c0-2-1.6-3.6-3.6-3.6H17.1z",
    className: "st2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "10.809",
    x2: "59.152",
    y1: "40.508",
    y2: "40.508",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_4_SLIDER"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M33.2 53.8L23 41.3 13.2 53.7 10.8 51.8 23 36.6 33.5 49.4 57.1 27.2 59.2 29.4z",
    className: "st3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "39.404",
    x2: "49.259",
    y1: "21.195",
    y2: "21.195",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_5_SLIDER"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M44.3 26.1c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9c.1 2.7-2.2 4.9-4.9 4.9zm0-7c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1s2.1-1 2.1-2.1c.1-1.2-.9-2.1-2.1-2.1z",
    className: "st4"
  }))));
};
var TypingTextIcon = function TypingTextIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 70 70",
    version: "1.1",
    viewBox: "0 0 70 70",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "-16.082",
    x2: "86.557",
    y1: "32.808",
    y2: "37.212",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_1_TYPED"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M63.4 0H6.6C3 0 0 3 0 6.6v56.8C0 67 3 70 6.6 70h56.8c3.6 0 6.6-3 6.6-6.6V6.6C70 3 67 0 63.4 0zM67 63.4c0 2-1.6 3.6-3.6 3.6H6.6c-2 0-3.6-1.6-3.6-3.6V6.6C3 4.6 4.6 3 6.6 3h56.8c2 0 3.6 1.6 3.6 3.6v56.8z",
    className: "st0t"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "-16.763",
    x2: "85.875",
    y1: "48.693",
    y2: "53.097",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_2_TYPED"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M58.8 50.1H44.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z",
    className: "st1t"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "-16.087",
    x2: "86.551",
    y1: "32.94",
    y2: "37.344",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_3_TYPED"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M45.4 25.2v-6.1c0-1.3-1.2-2.2-2.2-2.2H11.9c-1.3 0-2.2 1.2-2.2 2.2v6.1c0 .7.3 1.3.7 1.6.4.4 1.1.7 1.6.7h2.7c1.3 0 2.2-1.2 2.2-2.2v-.8H24V46h-3.2c-1.3 0-2.2 1.2-2.2 2.2v2.7c0 1.3 1.2 2.2 2.2 2.2H35c1.3 0 2.2-1.2 2.2-2.2v-2.6c.1-.5-.1-1-.5-1.4-.4-.5-1-.8-1.7-.8h-3.8V24.4h7.1v.8c0 1.3 1.2 2.2 2.2 2.2h2.7c1.3 0 2.2-1.1 2.2-2.2zm-5.9-3.3H30c-.7 0-1.2.5-1.2 1.2v24.1c0 .7.5 1.2 1.2 1.2h4.8v2.2H21.1v-2.2h4.2c.7 0 1.2-.5 1.2-1.2v-24c0-.7-.5-1.2-1.2-1.2h-9.6c-.7 0-1.2.5-1.2 1.2V25h-2.4v-5.7H43v5.6h-2.2v-1.8c-.1-.6-.6-1.2-1.3-1.2z",
    className: "st2t"
  }));
};
var InstagramOriginalIcon = function InstagramOriginalIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    id: "SVG_INS_ORG"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "a",
    x1: "-46.004",
    x2: "-32.933",
    y1: "634.121",
    y2: "647.192",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#a)",
    d: "M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "b",
    x1: "-42.297",
    x2: "-36.64",
    y1: "637.828",
    y2: "643.485",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#b)",
    d: "M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "c",
    x1: "-35.546",
    x2: "-34.792",
    y1: "644.579",
    y2: "645.333",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    fill: "url(#c)"
  }));
};
var SaveIcon = function SaveIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 500 500",
    version: "1.1",
    viewBox: "0 0 500 500",
    xmlSpace: "preserve",
    className: "eb-instagram-save-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    id: "INS_SAVE",
    d: "M156.4 348c-2.1 0-4.2-.4-6.1-1.4-5.1-2.4-8.4-7.6-8.4-13.2V101.3c0-10.8 8.8-19.7 19.7-19.7h190.6c10.8 0 19.6 8.8 19.6 19.7v232.1c0 5.6-3.3 10.8-8.4 13.2-5.1 2.4-11.2 1.6-15.5-2.1l-91-76.4-91 76.4c-2.8 2.3-6.1 3.5-9.5 3.5zm-6.4-22.3zm213.6 0zm-106.8-85.3c3.4 0 6.7 1.2 9.5 3.5l80.8 67.9V106.3H166.5v205.5l80.9-67.9c2.7-2.3 6-3.5 9.4-3.5zm-6.4 22.3zm12.8 0z",
    className: "st0"
  }));
};
var ParallaxSliderIcon = function ParallaxSliderIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 66 70",
    version: "1.1",
    viewBox: "0 0 66 70",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_PARA_1",
    x1: "-16.218",
    x2: "89.025",
    y1: "15.344",
    y2: "18.043",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M68.4 13c-.3-.4-.7-.6-1.1-.6-.3 0-.5.1-.8.2-.6.5-.8 1.3-.4 1.9l2.3 3.3-2.4 2.5c-.5.5-.5 1.3 0 1.9.2.2.6.4.9.4.3 0 .7-.2 1-.5l3.9-4.1-3.4-5z",
    className: "parallax-st0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_PARA_2",
    x1: "-17.074",
    x2: "88.169",
    y1: "48.75",
    y2: "51.448",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3.5 49.7l2.3-3.3c.4-.6.3-1.4-.4-1.9-.2-.2-.5-.2-.8-.2-.4 0-.9.2-1.1.6l-3.4 5 3.9 4c.3.3.6.5 1 .5.3 0 .7-.1.9-.4.5-.5.5-1.3 0-1.9l-2.4-2.4z",
    className: "parallax-st1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_PARA_3",
    x1: "-16.667",
    x2: "88.576",
    y1: "32.874",
    y2: "35.573",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M58 2L17.4.3c-2.7 0-4.8 2.2-4.8 4.8L10 62.3c0 2.7 2.2 4.8 4.8 4.8h.1l35.8-2.8h.1c2.5-.4 4.1-2 4.6-4.6L61 19l.5-3.6L62.7 7v-.2C62.7 4.1 60.6 2 58 2zm-7.6 59.5l-35.6 2.8c-1.1 0-1.9-.9-1.9-1.9l.7-15.9L26 32l9.5 16.6 21.9-24.2-3.6 26.1-1.2 8.8c-.3 1.3-.9 1.9-2.2 2.2zM36 43.7L26.5 27 13.8 41.8l1.6-36.7c0-1.1.9-2 1.9-2l40.6 1.7c1 0 1.9.8 1.9 1.9L58 19.3 36 43.7z",
    className: "parallax-st2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_PARA_4",
    x1: "-17.353",
    x2: "87.89",
    y1: "59.614",
    y2: "62.312",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M60.5 52.9c-.6-.1-1.3.4-1.4 1l-1.6 10.8c-.2 1-1 1.8-2.1 1.9l-9.8.9c-.7.1-1.1.6-1.1 1.3.1.6.6 1.1 1.2 1.1h.1l9.8-.9c2.2-.2 3.9-1.8 4.2-4l1.6-10.8c.2-.6-.3-1.2-.9-1.3z",
    className: "parallax-st3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_PARA_5",
    x1: "-16.284",
    x2: "88.959",
    y1: "17.925",
    y2: "20.623",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M42.8 17.1c-.1-.3-.3-.5-.5-.8-.2-.2-.3-.4-.5-.5-.2-.1-.3-.3-.5-.4-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.2-.2-.1-.3-.1-.5-.1-.1 0-.2-.1-.3-.1h-.7c-.2 0-.4 0-.5.1-.2 0-.4.1-.5.2-.2.1-.4.2-.5.3-.2.1-.4.2-.5.4-.2.2-.4.3-.5.5-.2.2-.4.5-.6.8-.3.5-.5 1-.6 1.6 0 .2-.1.5-.1.7v1.1c.1.6.2 1.1.5 1.5.1.3.3.5.5.8.2.2.3.4.5.5.2.1.3.2.5.4.2.1.3.2.5.3.2.1.3.1.5.2h1.1c.2 0 .4 0 .5-.1.2 0 .4-.1.5-.1.2-.1.4-.1.5-.2.2-.1.4-.2.5-.3.2-.1.4-.3.5-.4.2-.2.4-.3.5-.5.2-.2.4-.5.6-.8.3-.4.5-.9.6-1.4 0-.2.1-.4.1-.6v-1c-.2-.7-.4-1.2-.6-1.6zM40.5 20c-.1.3-.3.5-.6.7-.2.1-.3.2-.5.3-.2.1-.3.1-.5.1h-.1c-.2 0-.3 0-.5-.1s-.4-.2-.5-.3c-.2-.2-.4-.5-.5-.8-.1-.2-.1-.5-.1-.8 0-.2.1-.4.2-.6.1-.3.3-.6.6-.8.2-.1.3-.3.5-.3.2-.1.3-.1.5-.1h.1c.2 0 .3 0 .4.1.2.1.4.2.5.3.2.2.4.4.5.7.1.2.1.5.1.8.1.3 0 .6-.1.8z",
    className: "parallax-st4"
  }));
};
var CategoryIcon = function CategoryIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    className: "eb-category-icon",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "20",
    height: "20",
    viewBox: "0 0 374 374"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "a",
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0%",
    stopColor: "#2460FF"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "100%",
    stopColor: "#B80AFF"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    id: "c",
    d: "M135.028 96h103.944l.497.21h.373c6.217 0 11.273 2.692 15.169 8.077 1.326 2.237 1.989 4.545 1.989 6.923 0 5.804-3.398 10.28-10.195 13.426-2.321.91-4.642 1.364-6.963 1.364H133.909c-4.973 0-9.366-1.923-13.179-5.77-2.487-2.796-3.73-5.664-3.73-8.6v-1.26c0-4.615 2.735-8.566 8.206-11.853 2.984-1.538 5.927-2.307 8.828-2.307h.497l.497-.21zm1.242 77l58.078.214c3.862 0 7.995 1.568 12.397 4.705 3.503 3.208 5.255 6.701 5.255 10.48 0 5.275-3.1 9.588-9.298 12.939-3.054 1.425-6.019 2.138-8.893 2.138h-58.752c-5.75 0-10.735-2.281-14.958-6.844-2.066-2.566-3.099-5.132-3.099-7.699v-1.283c0-4.848 3.19-9.018 9.567-12.511 3.234-1.284 6.289-1.925 9.163-1.925h.27c.18 0 .27-.071.27-.214zm105.362 0h.736c5.685 0 10.14 2.968 13.369 8.905.842 2.12 1.263 4.17 1.263 6.148 0 5.936-2.912 10.495-8.737 13.675-2.105.848-3.965 1.272-5.579 1.272h-1.473c-4.772 0-8.843-2.509-12.211-7.527-1.333-2.544-2-5.052-2-7.526 0-5.795 2.877-10.318 8.632-13.569 2.175-.919 4.175-1.378 6-1.378zm-106.604 75h103.944c0 .141 1.284.318 3.854.53 4.31.919 7.584 2.58 9.822 4.982 2.901 2.898 4.352 6.22 4.352 9.965 0 5.724-3.398 10.247-10.195 13.569-2.073.636-3.482.954-4.228.954H131.423c-2.901 0-6.383-1.66-10.444-4.982-2.653-3.04-3.979-6.113-3.979-9.223v-.954c0-5.23 3.108-9.505 9.325-12.827 1.824-.919 4.642-1.555 8.455-1.908 0-.07.083-.106.248-.106z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("filter", {
    id: "b",
    width: "157.9%",
    height: "144.5%",
    x: "-28.9%",
    y: "-14%",
    filterUnits: "objectBoundingBox"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feOffset", {
    dy: "15",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feGaussianBlur", {
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "11"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("feColorMatrix", {
    in: "shadowBlurOuter1",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    transform: "translate(-69 -69)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    transform: "translate(69 69)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "187",
    cy: "187",
    r: "187",
    fill: "url(#a)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#000",
    filter: "url(#b)",
    xlinkHref: "#c"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("use", {
    fill: "#FFF",
    xlinkHref: "#c"
  }))))));
};
var ToggleContentIcon = function ToggleContentIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 66 70"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "a"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "toggle-b",
    x1: "1.959",
    x2: "68.382",
    y1: "47.1",
    y2: "47.1",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "toggle-c",
    x1: "1.959",
    x2: "68.382",
    y1: "47.15",
    y2: "47.15",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "d",
    x1: "1.959",
    x2: "68.382",
    y1: "7.5",
    y2: "7.5",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "e",
    x1: "1.959",
    x2: "68.382",
    y1: "7.6",
    y2: "7.6",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "f",
    x1: "1.959",
    x2: "68.382",
    y1: "36.6",
    y2: "36.6",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "g",
    x1: "1.959",
    x2: "68.382",
    y1: "43.3",
    y2: "43.3",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "h",
    x1: "1.959",
    x2: "68.382",
    y1: "49.95",
    y2: "49.95",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#toggle-b)",
    d: "M26.5 24.2H4.6c-2.1 0-3.7 1.6-3.7 3.7v38.5c0 2 1.6 3.6 3.7 3.6h21.9c2.1 0 3.7-1.6 3.7-3.7V28.1c-.1-2.3-1.7-3.9-3.7-3.9zm.9 42.1c0 .5-.5.9-.9.9H4.6c-.5 0-.9-.5-.9-.9V28.1c0-.5.5-.9.9-.9h21.9c.5 0 .9.5.9.9z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#toggle-c)",
    d: "M61.5 24.2H39.6c-2.1 0-3.7 1.6-3.7 3.7v38.5c0 2.1 1.6 3.7 3.7 3.7h21.9c2.1 0 3.7-1.6 3.7-3.7V28.1c.2-2.3-1.7-3.9-3.7-3.9zm.9 42.1c0 .5-.5.9-.9.9H39.6c-.5 0-.9-.5-.9-.9V28.1c0-.5.5-.9.9-.9h21.9c.5 0 .9.5.9.9z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#d)",
    d: "M24.8 15h18.9c2.1 0 3.9-1.6 3.9-3.9V3.9C47.6 1.8 46 0 43.7 0H24.8c-2 0-3.9 1.6-3.9 3.9V11c0 2.4 1.6 4 3.9 4zM23.7 4.1c0-.5.5-.9.9-.9h18.9c.5 0 .9.5.9.9v7.1c0 .5-.5.9-.9.9H24.6c-.5 0-.9-.5-.9-.9z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#e)",
    d: "M36.8 10.4H42.3V4.8H36.8V9z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#f)",
    d: "M56.6 35.2H44.4V38H56.6z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#g)",
    d: "M56.6 41.9H44.4v2.8H56.6z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#h)",
    d: "M56.6 48.6H44.4v2.7H56.6z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#f)",
    d: "M21.4 35.2H9.2V38H21.6v-2.8z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#g)",
    d: "M21.4 41.9H9.2v2.8H21.6v-2.8z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#h)",
    d: "M21.4 48.6H9.2v2.7H21.6v-2.7z"
  }));
};
var TypographyIcon = function TypographyIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    style: {
      width: 14
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M92.6 431.3c5.1 0 6.1-.5 10.7-1.5l91.9-18.4c9.7-2.5 19.4-7.1 27.1-14.8L444.9 174c34.2-34.2 34.2-92.9 0-127.1L426 27c-34.2-34.2-93.4-34.2-127.6 0L75.8 250.1c-7.2 7.1-12.3 17.4-14.8 27.1l-19.4 92.9c-2.5 17.4 2.6 34.2 14.8 46.5 9.7 9.6 24 14.7 36.2 14.7zM110 286.9L332.6 63.8c14.8-14.8 41.9-14.8 56.2 0l19.4 19.4c17.4 17.4 17.4 41.9 0 58.7L186.1 365l-94.4 15.8 18.3-93.9zm0 0M442.8 463H66.1c-14.8 0-24.5 9.7-24.5 24.5S53.9 512 66.1 512h374.7c14.8 0 27.1-9.7 27.1-24.5-.6-14.8-12.8-24.5-25.1-24.5zm0 0",
    className: "eb-typography-icon"
  }));
};
var UserIcon = function UserIcon(_ref) {
  var color = _ref.color;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    style: {
      width: 24
    },
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: color || "#b7b7b7",
    d: "M175.4 249c22.6 16.5 50.5 26.1 80.6 26.1 73.5 0 137.6-63.6 137.6-137.6C393.6 61.7 331.9 0 256 0S118.4 61.7 118.4 137.6c0 45.7 22.4 86.4 57 111.4zm0 0M407.4 285.6c-38.9 39.8-92.8 64.9-151.4 64.9-45.3 0-88.5-14-124.8-40.5-9.9-7.2-19.1-15.1-27.5-23.7C41.2 332.9.5 407.4.5 491.3c0 10.8 8.8 19.7 19.7 19.7h471.6c10.8 0 19.7-8.8 19.7-19.7 0-84.3-41-159.2-104.1-205.7z"
  }));
};
var LeftAlignIcon = function LeftAlignIcon(_ref2) {
  var color = _ref2.color;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M224.9 72.9H36.3C16.3 72.9 0 89.2 0 109.2c0 19.9 16.3 36.3 36.3 36.3h188.6c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M372.5 205.9H36.3c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h336.2c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.4-36.3-36.3-36.3zm0 0M475.7 339H36.3C16.3 339 0 355.3 0 375.3c0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var RightAlignIcon = function RightAlignIcon(_ref3) {
  var color = _ref3.color;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M475.7 78.1H235.1c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h240.6c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 211.2H115.9c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h359.8c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 344.2H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var CenterAlignIcon = function CenterAlignIcon(_ref4) {
  var color = _ref4.color;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M350.3 86.6H161.7c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h188.6c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0M424.1 219.7H87.9c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h336.2c19.9 0 36.3-16.3 36.3-36.3 0-20-16.4-36.3-36.3-36.3zm0 0M475.7 352.8H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var JustifyAlignIcon = function JustifyAlignIcon(_ref5) {
  var color = _ref5.color;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M475.7 86.6H36.3C16.3 86.6 0 103 0 122.9s16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0M475.7 219.7H36.3C16.3 219.7 0 236 0 256c0 19.9 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 352.8H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};

/***/ }),

/***/ "./util/image-avatar/index.js":
/*!************************************!*\
  !*** ./util/image-avatar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var useState = wp.element.useState;

var ImageAvatar = function ImageAvatar(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;

  var _useState = useState(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      deleteHover = _useState4[0],
      setDeleteHover = _useState4[1];

  var deleteButtonStyle = {
    visibility: hover ? "visible" : "hidden",
    backgroundColor: deleteHover ? "white" : "#64666a",
    color: "#b4b5b7",
    position: "absolute",
    right: 34,
    fontSize: 16,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    cursor: "pointer"
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "image-avatar-delete dashicons dashicons-trash",
    onMouseEnter: function onMouseEnter() {
      return setDeleteHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setDeleteHover(false);
    },
    style: deleteButtonStyle,
    onClick: function onClick() {
      return onDeleteImage();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageAvatar);

/***/ }),

/***/ "./util/reset-control/index.js":
/*!*************************************!*\
  !*** ./util/reset-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ResetControl = function ResetControl(_ref) {
  var onReset = _ref.onReset,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-range-controller-container"
  }, children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./util/responsive-range-control/index.js":
/*!************************************************!*\
  !*** ./util/responsive-range-control/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _responsive_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive-btn */ "./util/responsive-range-control/responsive-btn.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");


var __ = wp.i18n.__;
var RangeControl = wp.components.RangeControl;



var ResponsiveRangeController = function ResponsiveRangeController(_ref) {
  var baseLabel = _ref.baseLabel,
      controlName = _ref.controlName,
      resRequiredProps = _ref.resRequiredProps,
      units = _ref.units,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      noUnits = _ref.noUnits;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var desktopSizeUnit;
  var TABsizeUnit;
  var MOBsizeUnit;
  var defaultUnits;
  var desktopRange = attributes["".concat(controlName, "Range")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];

  if (!noUnits) {
    desktopSizeUnit = attributes["".concat(controlName, "Unit")];
    TABsizeUnit = attributes["TAB".concat(controlName, "Unit")];
    MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")];
    defaultUnits = [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }];
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "responsiveRangeControllerWrapper"
  }, noUnits ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, resOption == "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_responsive_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: desktopRange,
    onChange: function onChange(desktopRange) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Range"), desktopRange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  })), resOption == "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_responsive_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: TABrange,
    onChange: function onChange(TABrange) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "Range"), TABrange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  })), resOption == "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_responsive_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: MOBrange,
    onChange: function onChange(MOBrange) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "Range"), MOBrange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, resOption == "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: desktopSizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(desktopSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Unit"), desktopSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_responsive_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: desktopRange,
    onChange: function onChange(desktopRange) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Range"), desktopRange));
    },
    step: desktopSizeUnit === "em" ? 0.1 : step,
    min: desktopSizeUnit === "px" ? min : 0,
    max: desktopSizeUnit === "px" ? max : 100
  }))), resOption == "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: TABsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(TABsizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "Unit"), TABsizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_responsive_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: TABrange,
    onChange: function onChange(TABrange) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "Range"), TABrange));
    },
    step: TABsizeUnit === "em" ? 0.1 : step,
    min: TABsizeUnit === "px" ? min : 0,
    max: TABsizeUnit === "px" ? max : 100
  }))), resOption == "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: MOBsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(MOBsizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "Unit"), MOBsizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_responsive_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: MOBrange,
    onChange: function onChange(MOBrange) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "Range"), MOBrange));
    },
    step: MOBsizeUnit === "em" ? 0.1 : step,
    min: MOBsizeUnit === "px" ? min : 0,
    max: MOBsizeUnit === "px" ? max : 100
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveRangeController);

/***/ }),

/***/ "./util/responsive-range-control/responsive-btn.js":
/*!*********************************************************!*\
  !*** ./util/responsive-range-control/responsive-btn.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResBtns; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");


var dispatch = wp.data.dispatch;

function WithResBtns(_ref) {
  var children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label,
      controlName = _ref.controlName,
      onReset = _ref.onReset;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption,
      objAttributes = resRequiredProps.objAttributes;

  onReset = function onReset() {
    resOption == "Desktop" ? setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Range"), objAttributes["".concat(controlName, "Range")].default)) : "";
    resOption == "Tablet" ? setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "Range"), objAttributes["TAB".concat(controlName, "Range")].default)) : "";
    resOption == "Mobile" ? setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "Range"), objAttributes["MOB".concat(controlName, "Range")].default)) : "";
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "responsive-btn-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "responsive-btn"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "responsive-btn-label"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleDesktopBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleTabBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["handleMobileBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "eb-component-wrapper"
  }, children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  }))));
}

/***/ }),

/***/ "./util/toggle-button/index.js":
/*!*************************************!*\
  !*** ./util/toggle-button/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;

var ToggleButton = function ToggleButton(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      defaultSelected = _ref.defaultSelected;

  var _useState = useState(defaultSelected || options[0]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  useEffect(function () {
    onChange(selected.value);
  }, [selected]);
  useEffect(function () {
    if (defaultSelected) {
      setSelected(defaultSelected);
    }
  }, [defaultSelected]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "switch",
    className: "eb-switch-control"
  }, options.map(function (option) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
      type: "radio",
      name: "gh",
      placeholder: "name",
      onChange: function onChange() {
        return setSelected(option);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      style: {
        color: selected.value === option.value ? "white" : "black"
      }
    }, option.label));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "slideBg",
    style: {
      backgroundColor: "#551ef7",
      transform: selected == options[0] ? "translateX(0)" : "translateX(100%)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./util/typography-control-v2/constants.js":
/*!*************************************************!*\
  !*** ./util/typography-control-v2/constants.js ***!
  \*************************************************/
/*! exports provided: sizeUnitTypes, optionsFontWeights, optionsTextTransforms, optionsTextDecorations, optionsFontStyles, optionsLhLsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontWeights", function() { return optionsFontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextTransforms", function() { return optionsTextTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextDecorations", function() { return optionsTextDecorations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontStyles", function() { return optionsFontStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsLhLsp", function() { return optionsLhLsp; });
var __ = wp.i18n.__;
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var optionsFontWeights = [{
  label: __("Default"),
  value: undefined
}, {
  label: __("100"),
  value: "100"
}, {
  label: __("200"),
  value: "200"
}, {
  label: __("300"),
  value: "300"
}, {
  label: __("400"),
  value: "400"
}, {
  label: __("500"),
  value: "500"
}, {
  label: __("600"),
  value: "600"
}, {
  label: __("700"),
  value: "700"
}, {
  label: __("800"),
  value: "800"
}, {
  label: __("900"),
  value: "900"
}];
var optionsTextTransforms = [{
  label: __("Default"),
  value: undefined
}, {
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var optionsTextDecorations = [{
  label: __("Default"),
  value: undefined
}, {
  label: __("None"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];
var optionsFontStyles = [{
  label: __("Default"),
  value: undefined
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Italic"),
  value: "italic"
}, {
  label: __("Oblique"),
  value: "oblique"
}];
var optionsLhLsp = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./util/typography-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/typography-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _fontPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fontPicker */ "./util/fontPicker/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./util/icons.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");


var __ = wp.i18n.__;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl;






function TypographyDropdown(_ref) {
  var baseLabel = _ref.baseLabel,
      typographyPrefixConstant = _ref.typographyPrefixConstant,
      resRequiredProps = _ref.resRequiredProps;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var fontFamily = attributes["".concat(typographyPrefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(typographyPrefixConstant, "FontWeight")],
      fontStyle = attributes["".concat(typographyPrefixConstant, "FontStyle")],
      textTransform = attributes["".concat(typographyPrefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(typographyPrefixConstant, "TextDecoration")],
      fontSize = attributes["".concat(typographyPrefixConstant, "FontSize")],
      sizeUnit = attributes["".concat(typographyPrefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(typographyPrefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(typographyPrefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(typographyPrefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(typographyPrefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(typographyPrefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(typographyPrefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(typographyPrefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(typographyPrefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(typographyPrefixConstant, "LineHeight")];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __(baseLabel),
    className: "eb-typography-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_icons__WEBPACK_IMPORTED_MODULE_4__["TypographyIcon"], null));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "eb-panel-control eb-typography-component-panel",
        style: {
          padding: "0.2rem"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fontPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: __("Font Family"),
        value: fontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forFontSize",
        resRequiredProps: resRequiredProps
      }, resOption === "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: sizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(sizeUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "SizeUnit"), sizeUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Font Size"),
        value: fontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: sizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: sizeUnit === "em" ? 10 : 300
      })), resOption === "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(TABsizeUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "SizeUnit"), TABsizeUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Font Size"),
        value: TABfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: TABsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: TABsizeUnit === "em" ? 10 : 300
      })), resOption === "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(MOBsizeUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "SizeUnit"), MOBsizeUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Font Size"),
        value: MOBfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: MOBsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: MOBsizeUnit === "em" ? 10 : 300
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
        label: __("Font Weight"),
        value: fontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsFontWeights"],
        onChange: function onChange(FontWeight) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
        label: __("Font Style"),
        value: fontStyle,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsFontStyles"],
        onChange: function onChange(fontStyle) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "FontStyle"), fontStyle));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
        label: __("Text Transform"),
        value: textTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsTextTransforms"],
        onChange: function onChange(TextTransform) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
        label: __("Text Decoration"),
        value: textDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsTextDecorations"],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forLetterSpacing",
        resRequiredProps: resRequiredProps
      }, resOption === "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: letterSpacingUnit === "em" ? 10 : 100,
        step: letterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(TABletterSpacingUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "LetterSpacingUnit"), TABletterSpacingUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Letter Spacing"),
        value: TABletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: TABletterSpacingUnit === "em" ? 10 : 100,
        step: TABletterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(MOBletterSpacingUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "LetterSpacingUnit"), MOBletterSpacingUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Letter Spacing"),
        value: MOBletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: MOBletterSpacingUnit === "em" ? 10 : 100,
        step: MOBletterSpacingUnit === "em" ? 0.1 : 1
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_withResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forLineHeight",
        resRequiredProps: resRequiredProps
      }, resOption === "Desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Line Height"),
        value: lineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: lineHeightUnit === "em" ? 10 : 600,
        step: lineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "Tablet" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(TABlineHeightUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "LineHeightUnit"), TABlineHeightUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Line Height"),
        value: TABlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: TABlineHeightUnit === "em" ? 10 : 600,
        step: TABlineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "Mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(MOBlineHeightUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "LineHeightUnit"), MOBlineHeightUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __("Line Height"),
        value: MOBlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: MOBlineHeightUnit === "em" ? 10 : 600,
        step: MOBlineHeightUnit === "em" ? 0.1 : 1
      }))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyDropdown);

/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/withResButtons/index.js":
/*!**************************************!*\
  !*** ./util/withResButtons/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");

var dispatch = wp.data.dispatch;

function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wrap_res ".concat(className || " ")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(label ? "resBtns" : "resIcons")
  }, label && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    style: {
      paddingRight: "5px"
    },
    className: "resLabel"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleDesktopBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    class: "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleTabBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    class: "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleMobileBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    class: "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map