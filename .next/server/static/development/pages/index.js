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
  }, "-")), __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "countbutton__ButtonContainer",
  componentId: "sc-1wih92-0"
})(["position:relative;width:100px;margin:20px calc(25% - 50px);height:100%;border-radius:20px;border:1px solid black;cursor:pointer;.title{position:relative;top:103%;width:100%;text-align:center;letter-spacing:5px;text-indent:2.5px;}.plusButton{position:absolute;top:0px;width:100%;height:35%;border:0px;.text{width:100%;position:absolute;top:50%;transform:translate(0%,-50%);text-align:center;font-size:30px;}}input{position:absolute;top:35%;width:100%;height:30%;border:0px;text-align:center;font-size:30px;outline:none;cursor:text;}.minusButton{position:absolute;bottom:0px;width:100%;height:35%;.text{position:absolute;width:100%;top:50%;transform:translate(0%,-50%);text-align:center;font-size:30px;}}"]);

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
    display: props.display,
    title: props.title,
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
  }, props.ratio)), __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const PieChart = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "piechart__PieChart",
  componentId: "jqrpt1-0"
})(["position:relative;width:100px;height:100px;margin:0% calc(16.67% - 50px);display:", ";.title{position:relative;text-align:center;margin:10px;width:120%;right:20%;font-size:15px;font-weight:100;}.pie{position:relative;display:inline-block;width:100%;height:100%;border-radius:50%;transition:0.3s;background:conic-gradient(", " ", "%,#fff ", "% 100%);.center{background:#fff;position:absolute;top:50%;left:50%;width:80%;height:80%;border-radius:50%;transform:translate(-50%,-50%);}.text{position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);font-size:20px;font-weight:100;font-stretch:normal;font-style:oblique;line-height:1.17;letter-spacing:normal;}}"], props => props.display, props => props.barColor, props => props.ratio * 100, props => props.ratio * 100 + 2);

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
    console.log("spot:", spotName[spot], spot);
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

  const calc2Ratio = () => {
    var shootNum = 0;
    var madeNum = 0;
    counts.map((count, idx) => {
      if (2 <= idx && idx <= 7) {
        shootNum += count[0] + count[1];
        madeNum += count[1];
      }
    });
    if (shootNum === 0) return 0;else return (madeNum / shootNum).toFixed(2);
  };

  const calc3Ratio = () => {
    var shootNum = 0;
    var madeNum = 0;
    counts.map((count, idx) => {
      if (2 > idx || idx > 7) {
        shootNum += count[0] + count[1];
        madeNum += count[1];
      }
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
  })(["z-index:1;pointer-events:visible;opacity:0.5;fill:", ";"], props => perc2color(Number(calcSpotRatio(props.keys)) * 100));
  const Pathbasket = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.path.withConfig({
    displayName: "pages__Pathbasket",
    componentId: "sc-1n2syxe-1"
  })(["z-index:1;pointer-events:visible;fill:", ";"], props => props.keys !== spot && "none");
  return __jsx(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(HeaderStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "My Shot Chart")), __jsx("svg", {
    viewBox: "-20 17 940 667",
    style: {
      top: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
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
      strokeWidth: "2",
      opacity: "0.5",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
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
      strokeWidth: "2",
      opacity: "0.5",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
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
      strokeWidth: "2",
      opacity: "0.5",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
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
      strokeWidth: "2",
      opacity: "0.5",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
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
      strokeWidth: "2",
      opacity: "0.5",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
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
      strokeWidth: "2",
      opacity: "0.5",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
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
      strokeWidth: "2",
      opacity: "0.5",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
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
      strokeWidth: "2",
      opacity: "0.5",
      shapeRendering: "crispedges"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }), __jsx("g", {
    stroke: "#000000",
    fill: "none",
    style: {
      strokeWidth: "2",
      zIndex: "-1"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
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
      lineNumber: 116
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
      lineNumber: 117
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
      lineNumber: 118
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
      lineNumber: 119
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
      lineNumber: 120
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
      lineNumber: 121
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
      lineNumber: 122
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
      lineNumber: 123
    },
    __self: undefined
  }), __jsx("path", {
    d: "M54,305A427.5,427.5 1 0,0 846,305",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }), __jsx("path", {
    d: "M342,392A108,108 1 0,1 558,392",
    style: {
      strokeDasharray: "22.5, 22.5"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }), __jsx("path", {
    d: "M342,392A108,108 1 0,0 558,392",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "450",
    cy: "134.6",
    r: "13.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), __jsx("path", {
    d: "M378,148.1A72,72 1 0,0 522,148.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
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
      lineNumber: 129
    },
    __self: undefined
  })), __jsx(Path, {
    d: "M0,50L0,306L54,306L54,50L0,50",
    id: "zone",
    keys: 0,
    onClick: () => setSpot(0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M846,50L846,306L900,306L900,50L846,50",
    id: "zone",
    keys: 1,
    onClick: () => setSpot(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M54,50L54,306L306,306L306,50L54,50",
    id: "zone",
    keys: 2,
    onClick: () => setSpot(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M594,50L594,306L846,306L846,50L594,50",
    id: "zone",
    keys: 3,
    onClick: () => setSpot(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M306,50L306,392L594,392L594,50L306,50",
    id: "zone",
    keys: 4,
    onClick: () => setSpot(4),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M594,545L594,392L306,392L306,545A427.5,427.5 1 0,0 594,545",
    id: "zone",
    keys: 5,
    onClick: () => setSpot(5),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M306,545L306,306L54,306A427.5,427.5 1 0,0 306,545",
    id: "zone",
    keys: 6,
    onClick: () => setSpot(6),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M594,545L594,306L846,306A427.5,427.5 0 0,1 594,545",
    id: "zone",
    keys: 7,
    onClick: () => setSpot(7),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M246,521L186,664L0,664L0,306L54,306A427.5,427.5 0 0,0 246,521",
    id: "zone",
    keys: 8,
    onClick: () => setSpot(8),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M654,521L714,664L900,664L900,306L846,306A427.5,427.5 0 0,1 654,521",
    id: "zone",
    keys: 9,
    onClick: () => setSpot(9),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }), __jsx(Path, {
    d: "M246,521L186,664L714,664L654,521A427.5,427.5 0 0,1 246,521",
    id: "zone",
    keys: 10,
    onClick: () => setSpot(10),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M0,50L0,306L54,306L54,50L0,50",
    fill: "url(#img1)",
    id: "zone",
    keys: 0,
    onClick: () => setSpot(0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M846,50L846,306L900,306L900,50L846,50",
    fill: "url(#img1)",
    id: "zone",
    keys: 1,
    onClick: () => setSpot(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M54,50L54,306L306,306L306,50L54,50",
    fill: "url(#img2)",
    id: "zone",
    keys: 2,
    onClick: () => setSpot(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M594,50L594,306L846,306L846,50L594,50",
    fill: "url(#img2)",
    id: "zone",
    keys: 3,
    onClick: () => setSpot(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M306,50L306,392L594,392L594,50L306,50",
    fill: "url(#img3)",
    id: "zone",
    keys: 4,
    onClick: () => setSpot(4),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M594,545L594,392L306,392L306,545A427.5,427.5 1 0,0 594,545",
    fill: "url(#img4)",
    id: "zone",
    keys: 5,
    onClick: () => setSpot(5),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M306,545L306,306L54,306A427.5,427.5 1 0,0 306,545",
    fill: "url(#img5)",
    id: "zone",
    keys: 6,
    onClick: () => setSpot(6),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M594,545L594,306L846,306A427.5,427.5 0 0,1 594,545",
    fill: "url(#img6)",
    id: "zone",
    keys: 7,
    onClick: () => setSpot(7),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M246,521L186,664L0,664L0,306L54,306A427.5,427.5 0 0,0 246,521",
    fill: "url(#img7)",
    id: "zone",
    keys: 8,
    onClick: () => setSpot(8),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M654,521L714,664L900,664L900,306L846,306A427.5,427.5 0 0,1 654,521",
    fill: "url(#img8)",
    id: "zone",
    keys: 9,
    onClick: () => setSpot(9),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }), __jsx(Pathbasket, {
    d: "M246,521L186,664L714,664L654,521A427.5,427.5 0 0,1 246,521",
    fill: "url(#img9)",
    id: "zone",
    keys: 10,
    onClick: () => setSpot(10),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }), __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx("pattern", {
    id: "img1",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "2",
    y: "100",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  })), __jsx("pattern", {
    id: "img2",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "100",
    y: "100",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  })), __jsx("pattern", {
    id: "img3",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "118",
    y: "180",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  })), __jsx("pattern", {
    id: "img4",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "118",
    y: "40",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  })), __jsx("pattern", {
    id: "img5",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "130",
    y: "70",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  })), __jsx("pattern", {
    id: "img6",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "70",
    y: "70",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  })), __jsx("pattern", {
    id: "img7",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "80",
    y: "140",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  })), __jsx("pattern", {
    id: "img8",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "110",
    y: "140",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  })), __jsx("pattern", {
    id: "img9",
    patternUnits: "objectBoundingBox",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx("image", {
    href: "/static/titleIcon.svg",
    x: "235",
    y: "60",
    width: "50",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  })))), __jsx("div", {
    className: "spotname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, spotName[spot]), __jsx("div", {
    className: "chartsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Piechart"], {
    title: "2\uC810 \uC131\uACF5\uB960",
    ratio: calc2Ratio(),
    display: 2 > spot || spot > 7 ? "none" : "block",
    barColor: perc2color(Number(calc2Ratio()) * 100),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Piechart"], {
    title: "3\uC810 \uC131\uACF5\uB960",
    ratio: calc3Ratio(),
    display: 2 <= spot && spot <= 7 ? "none" : "block",
    barColor: perc2color(Number(calc3Ratio()) * 100),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Piechart"], {
    title: "Spot \uC131\uACF5\uB960",
    ratio: calcSpotRatio(spot),
    barColor: perc2color(Number(calcSpotRatio(spot)) * 100),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Piechart"], {
    title: "\uCD1D \uC131\uACF5\uB960",
    ratio: calcAllRatio(),
    barColor: perc2color(Number(calcAllRatio()) * 100),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  })), __jsx("div", {
    className: "countButtonsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["CountButton"], {
    title: "MADE",
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
      lineNumber: 206
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["CountButton"], {
    title: "FAIL",
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
      lineNumber: 211
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const HeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__HeaderStyle",
  componentId: "sc-1n2syxe-2"
})(["position:relative;top:0px;width:100%;height:35px;background-color:#ff5722;opacity:0.8;z-index:1;box-shadow:0 1px 2px 0 rgba(0,0,0,0.16);padding-top:20px;.text{width:100%;font-size:30px;font-family:'Bebas Neue',cursive;font-weight:normal;font-stretch:normal;font-style:normal;line-height:0.75;letter-spacing:1.5px;text-align:center;color:#ffffff;}"]);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Background",
  componentId: "sc-1n2syxe-3"
})(["position:relative;display:block;width:100vw;height:100vh;font-family:'Noto Sans KR';font-size:30px;font-weight:100;font-stretch:normal;font-style:normal;line-height:1.17;letter-spacing:normal;svg{max-width:1000px;position:relative;top:0px;left:50%;transform:translate(-50%,0%);width:100vw;height:40vh;defs{z-index:2;}}.spotname{position:relative;display:block;text-align:center;font-size:20px;}.countButtonsContainer{position:relative;width:calc(100% - 40px);height:20%;display:flex;margin:20px;margin-top:30px;img{position:absolute;top:100%;width:24px;height:24px;}}.chartsContainer{position:relative;width:calc(100% - 40px);height:100px;display:flex;margin:20px;}"]);

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