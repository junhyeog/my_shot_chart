module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/countbutton.js":
/*!***********************************!*\
  !*** ./components/countbutton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\basket\\components\\countbutton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const Index = props => {
  function filterNumber(e) {
    var code = e.keyCode;

    if (code > 47 && code < 58) {
      return;
    }

    if (code === 110 || code === 190) {
      return;
    }

    if (e.ctrlKey || e.altKey) {
      return;
    }

    if (code === 36 || code === 35 || code === 37 || code === 39 || code === 8 || code === 46 || code === 13) {
      return;
    }

    e.preventDefault();
  }

  return __jsx(ButtonContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "plusButton",
    onClick: props.plusOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "+")), __jsx("input", {
    min: "0",
    onKeyDown: e => filterNumber(e),
    value: props.value,
    onChange: props.onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("div", {
    className: "minusButton",
    onClick: props.minusOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "-")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "countbutton__ButtonContainer",
  componentId: "sc-1wih92-0"
})(["position:relative;width:100px;height:200px;border-radius:20px;border:1px solid black;cursor:pointer;.plusButton{position:absolute;top:0px;width:100%;height:35%;border:0px;.text{width:100%;transform:translate(0%,30%);text-align:center;font-size:30px;}}input{position:absolute;top:35%;width:100%;height:30%;border:0px;text-align:center;font-size:30px;outline:none;cursor:text;}.minusButton{position:absolute;bottom:0px;width:100%;height:35%;.text{width:100%;bottom:0px;transform:translate(0%,30%);text-align:center;font-size:30px;}}"]);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: CountButton, Piechart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countbutton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countbutton */ "./components/countbutton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountButton", function() { return _countbutton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _piechart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piechart */ "./components/piechart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Piechart", function() { return _piechart__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/piechart.js":
/*!********************************!*\
  !*** ./components/piechart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\basket\\components\\piechart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const Index = props => {
  return __jsx(PieChart, {
    ratio: props.ratio,
    mama: "111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "pie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.ratio)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const PieChart = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "piechart__PieChart",
  componentId: "jqrpt1-0"
})(["width:100px;height:100px;.pie{position:relative;display:inline-block;width:100%;height:100%;border-radius:50%;transition:0.3s;background:conic-gradient(#f1511f ", "%,#fff ", "% 100%);.center{background:#fff;position:absolute;top:50%;left:50%;width:80%;height:80%;border-radius:50%;transform:translate(-50%,-50%);}.text{position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);}}"], props => props.ratio * 100, props => props.ratio * 100);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\basket\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const Index = () => {
  const [counts, setCounts] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([[0, 0], [0, 0], [0, 0]]);
  const [spot, setSpot] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    console.log(counts);
  }, [counts]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    console.log("spot:", spot);
  }, [spot]);

  const setCount = (spot, made, step) => {
    var tempArr = counts.slice();
    tempArr[spot][made] += step;
    setCounts(tempArr);
  };

  const calcSpotRatio = spot => {
    if (counts[spot][0] + counts[spot][1] === 0) return 0;else return (counts[spot][1] / (counts[spot][0] + counts[spot][1])).toFixed(2);
  };

  const calcAllRatio = () => {
    var shootNum = 0;
    var madeNum = 0;
    counts.map(count => {
      shootNum += count[0] + count[1];
      madeNum += count[1];
    });
    if (shootNum === 0) return 0;else return (madeNum / shootNum).toFixed(2);
  };

  return __jsx(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, ["orange", "blue", "red"].map((spotColor, spot) => {
    return __jsx("div", {
      key: spot,
      style: {
        width: "100px",
        height: "100px",
        backgroundColor: spotColor
      },
      onClick: () => setSpot(spot),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    });
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["CountButton"], {
    plusOnClick: () => setCount(spot, 1, 1),
    minusOnClick: () => setCount(spot, 1, -1),
    value: counts[spot][1],
    onChange: e => {
      var tempArr = counts.slice();
      tempArr[spot][1] = Number(e.target.value);
      setCounts(tempArr);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["CountButton"], {
    plusOnClick: () => setCount(spot, 0, 1),
    minusOnClick: () => setCount(spot, 0, -1),
    value: counts[spot][0],
    onChange: e => {
      var tempArr = counts.slice();
      tempArr[spot][0] = Number(e.target.value);
      setCounts(tempArr);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Piechart"], {
    ratio: calcSpotRatio(spot),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Piechart"], {
    ratio: calcAllRatio(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Background",
  componentId: "sc-1n2syxe-0"
})(["position:relative;display:flex;flex-direction:row;"]);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Downloads\250gaza\basket\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map