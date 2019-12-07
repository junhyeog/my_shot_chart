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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
})(["position:relative;width:30%;margin:0% 10%;height:100%;border-radius:20px;border:1px solid black;cursor:pointer;.plusButton{position:absolute;top:0px;width:100%;height:35%;border:0px;.text{width:100%;transform:translate(0%,30%);text-align:center;font-size:30px;}}input{position:absolute;top:35%;width:100%;height:30%;border:0px;text-align:center;font-size:30px;outline:none;cursor:text;}.minusButton{position:absolute;bottom:0px;width:100%;height:35%;.text{width:100%;bottom:0px;transform:translate(0%,30%);text-align:center;font-size:30px;}}"]);

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
    barColor: props.barColor,
    ratio: props.ratio,
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
})(["position:relative;width:100px;height:100px;margin:0% calc(25% - 50px);.pie{position:relative;display:inline-block;width:100%;height:100%;border-radius:50%;transition:0.3s;background:conic-gradient(", " ", "%,#fff ", "% 100%);.center{background:#fff;position:absolute;top:50%;left:50%;width:80%;height:80%;border-radius:50%;transform:translate(-50%,-50%);}.text{position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);}}"], props => props.barColor, props => props.ratio * 100, props => props.ratio * 100 + 2);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");

var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\basket\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




const Index = () => {
  const [counts, setCounts] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]); //local storage에 남아있는 데이터 확인

  const [spot, setSpot] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](0);
  const spotName = ["왼쪽 코너", "오른쪽 코너", "왼쪽 쇼트 코너", "오른쪽 쇼트 코너", "페인트존", "키", "왼쪽 엘보", "오른쪽 엘보", "왼쪽 윙", "오른쪽 윙", "탑"];
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    if (JSON.parse(localStorage.getItem('counts'))) setCounts(JSON.parse(localStorage.getItem('counts')));
    console.log("pre-counts:", counts);
    if (JSON.parse(localStorage.getItem('spot'))) setSpot(JSON.parse(localStorage.getItem('spot')));
    console.log("pre-spot:", spot);
  }, []); //local storage에 남아있는 데이터 확인하기

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    console.log(" made:", counts[spot][1], "\n", "fail:", counts[spot][0]);
  }, [counts]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    console.log("spot:", spotName[spot]);
  }, [spot]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    localStorage.setItem('counts', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(counts));
    localStorage.setItem('spot', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(spot));
  });

  const setCount = (spot, made, step) => {
    var tempArr = counts.slice();

    if (tempArr[spot][made] === 0 && step === -1) {
      console.log("0 미만으로 입력하실 수 없습니다.");
      return;
    }

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

  const perc2color = perc => {
    var r,
        g,
        b = 0;

    if (perc < 50) {
      r = 255;
      g = Math.round(5.1 * perc);
    } else {
      g = 255;
      r = Math.round(510 - 5.10 * perc);
    }

    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return '#' + ('000000' + h.toString(16)).slice(-6);
  };

  const Path = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.path.withConfig({
    displayName: "pages__Path",
    componentId: "sc-1n2syxe-0"
  })(["z-index:1;pointer-events:visible;opacity:", ";fill:", ";"], props => props.keys === spot ? 0.3 : 0.2, props => perc2color(Number(calcSpotRatio(props.keys)) * 100));
  return __jsx(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "-20 17 940 667",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("line", {
    x1: "0",
    x2: "50",
    y1: "306",
    y2: "306",
    stroke: "#000000",
    style: {
      strokeDasharray: "6, 6",
      strokeWidth: "1",
      opacity: "0.1",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("line", {
    x1: "846",
    x2: "896",
    y1: "306",
    y2: "306",
    stroke: "#000000",
    style: {
      strokeDasharray: "6, 6",
      strokeWidth: "1",
      opacity: "0.1",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("line", {
    x1: "50",
    x2: "306",
    y1: "306",
    y2: "306",
    stroke: "#000000",
    style: {
      strokeDasharray: "6, 6",
      strokeWidth: "1",
      opacity: "0.1",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("line", {
    x1: "594",
    x2: "846",
    y1: "306",
    y2: "306",
    stroke: "#000000",
    style: {
      strokeDasharray: "6, 6",
      strokeWidth: "1",
      opacity: "0.1",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx("line", {
    x1: "306",
    x2: "306",
    y1: "392",
    y2: "545",
    stroke: "#000000",
    style: {
      strokeDasharray: "6, 6",
      strokeWidth: "1",
      opacity: "0.1",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("line", {
    x1: "594",
    x2: "594",
    y1: "392",
    y2: "545",
    stroke: "#000000",
    style: {
      strokeDasharray: "6, 6",
      strokeWidth: "1",
      opacity: "0.1",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("line", {
    x1: "654",
    x2: "714",
    y1: "522",
    y2: "664",
    stroke: "#000000",
    style: {
      strokeDasharray: "6, 6",
      strokeWidth: "1",
      opacity: "0.1",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("line", {
    x1: "246",
    x2: "186",
    y1: "522",
    y2: "664",
    stroke: "#000000",
    style: {
      strokeDasharray: "6, 6",
      strokeWidth: "1",
      opacity: "0.1",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx("g", {
    stroke: "#000000",
    fill: "none",
    style: {
      strokeWidth: "1",
      zIndex: "-1"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("line", {
    x1: "306",
    x2: "306",
    y1: "50",
    y2: "392",
    style: {
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx("line", {
    x1: "594",
    x2: "594",
    y1: "50",
    y2: "392",
    style: {
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx("line", {
    x1: "306",
    x2: "594",
    y1: "392",
    y2: "392",
    style: {
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("line", {
    x1: "396",
    x2: "504",
    y1: "120.2",
    y2: "120.2",
    style: {
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), __jsx("line", {
    x1: "378",
    x2: "378",
    y1: "125.6",
    y2: "148.1",
    style: {
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx("line", {
    x1: "522",
    x2: "522",
    y1: "125.6",
    y2: "148.1",
    style: {
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), __jsx("line", {
    x1: "54",
    x2: "54",
    y1: "50",
    y2: "306",
    style: {
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), __jsx("line", {
    x1: "846",
    x2: "846",
    y1: "50",
    y2: "306",
    style: {
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), __jsx("path", {
    d: "M54,305A427.5,427.5 1 0,0 846,305",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), __jsx("path", {
    d: "M342,392A108,108 1 0,1 558,392",
    style: {
      strokeDasharray: "22.5, 22.5"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx("path", {
    d: "M342,392A108,108 1 0,0 558,392",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "450",
    cy: "134.6",
    r: "13.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), __jsx("path", {
    d: "M378,148.1A72,72 1 0,0 522,148.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx("line", {
    x1: "0",
    x2: "900",
    y1: "50",
    y2: "50",
    style: {
      shapeRendering: "crispedges",
      strokeWidth: "2"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })), __jsx(Path, {
    d: "M0,50L0,306L54,306L54,50L0,50",
    fill: "none",
    id: "zone",
    keys: 0,
    onClick: () => setSpot(0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M846,50L846,306L900,306L900,50L846,50",
    fill: "none",
    id: "zone",
    keys: 1,
    onClick: () => setSpot(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M54,50L54,306L306,306L306,50L54,50",
    fill: "none",
    id: "zone",
    keys: 2,
    onClick: () => setSpot(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M594,50L594,306L846,306L846,50L594,50",
    fill: "none",
    id: "zone",
    keys: 3,
    onClick: () => setSpot(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M306,50L306,392L594,392L594,50L306,50",
    fill: "none",
    id: "zone",
    keys: 4,
    onClick: () => setSpot(4),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M594,545L594,392L306,392L306,545A427.5,427.5 1 0,0 594,545",
    fill: "none",
    id: "zone",
    keys: 5,
    onClick: () => setSpot(5),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M306,545L306,306L54,306A427.5,427.5 1 0,0 306,545",
    fill: "none",
    id: "zone",
    keys: 6,
    onClick: () => setSpot(6),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M594,545L594,306L846,306A427.5,427.5 0 0,1 594,545",
    fill: "none",
    id: "zone",
    keys: 7,
    onClick: () => setSpot(7),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M246,521L186,664L0,664L0,306L54,306A427.5,427.5 0 0,0 246,521",
    fill: "none",
    id: "zone",
    keys: 8,
    onClick: () => setSpot(8),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M654,521L714,664L900,664L900,306L846,306A427.5,427.5 0 0,1 654,521",
    fill: "none",
    id: "zone",
    keys: 9,
    onClick: () => setSpot(9),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M246,521L186,664L714,664L654,521A427.5,427.5 0 0,1 246,521",
    fill: "none",
    id: "zone",
    keys: 10,
    onClick: () => setSpot(10),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  })), __jsx("div", {
    className: "spotname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, spotName[spot]), __jsx("div", {
    className: "chartsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Piechart"], {
    ratio: calcSpotRatio(spot),
    barColor: perc2color(Number(calcSpotRatio(spot)) * 100),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Piechart"], {
    ratio: calcAllRatio(),
    barColor: perc2color(Number(calcAllRatio()) * 100),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  })), __jsx("div", {
    className: "countButtonsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["CountButton"], {
    plusOnClick: () => setCount(spot, 1, 1),
    minusOnClick: () => setCount(spot, 1, -1),
    value: counts[spot] ? counts[spot][1] : 0,
    onChange: e => {
      var tempArr = counts.slice();
      tempArr[spot][1] = Number(e.target.value);
      setCounts(tempArr);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["CountButton"], {
    plusOnClick: () => setCount(spot, 0, 1),
    minusOnClick: () => setCount(spot, 0, -1),
    value: counts[spot] ? counts[spot][0] : 0,
    onChange: e => {
      var tempArr = counts.slice();
      tempArr[spot][0] = Number(e.target.value);
      setCounts(tempArr);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Background",
  componentId: "sc-1n2syxe-1"
})(["position:relative;width:100vw;height:100vh;svg{max-width:1000px;position:relative;top:0px;width:100%;height:33%;}.spotname{position:relative;text-align:center;}.countButtonsContainer{position:relative;width:calc(100% - 40px);height:20%;display:flex;margin:20px;margin-top:40px;}.chartsContainer{position:relative;width:calc(100% - 40px);height:100px;display:flex;margin:20px;}"]);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Downloads\250gaza\basket\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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