webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");

var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\basket\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




var Index = function Index() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([0, 0]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      counts = _React$useState2[0],
      setCounts = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    console.log(counts);
  }, [counts]);

  var plusMade = function plusMade() {
    setCounts([counts[0] + 1, counts[1]]);
  };

  var minusMade = function minusMade(e) {
    if (e.target.value === 0) {
      console.log('0 미만은 입력할 수 없습니다.');
      return;
    }

    setCounts([counts[0] - 1, counts[1]]);
  };

  var plusMiss = function plusMiss() {
    setCounts([counts[0], counts[1] + 1]);
  };

  var minusMiss = function minusMiss(e) {
    console.log(e.target.value);

    if (e.target.value === 0) {
      console.log('0 미만은 입력할 수 없습니다.');
      return;
    }

    setCounts([counts[0], counts[1] - 1]);
  };

  return __jsx(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["CountButton"], {
    plusOnClick: plusMade,
    minusOnClick: function minusOnClick(e) {
      return minusMade(e);
    },
    value: counts[0],
    onChange: function onChange(e) {
      setCounts([Number(e.target.value), counts[1]]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["CountButton"], {
    plusOnClick: plusMiss,
    minusOnClick: function minusOnClick(e) {
      return minusMiss(e);
    },
    value: counts[1],
    onChange: function onChange(e) {
      setCounts([counts[0], Number(e.target.value)]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
var Background = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Background",
  componentId: "sc-1n2syxe-0"
})(["position:relative;display:flex;flex-direction:row;"]);

/***/ })

})
//# sourceMappingURL=index.js.bfe35b2c127244f2f4c1.hot-update.js.map