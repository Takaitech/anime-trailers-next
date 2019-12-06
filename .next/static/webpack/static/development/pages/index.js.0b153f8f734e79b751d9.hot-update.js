webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Filters.js":
/*!*******************************!*\
  !*** ./components/Filters.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Filters = function Filters() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_1__["FilterContext"]),
      dispatch = _useContext.dispatch,
      filter = _useContext.filter;

  var changeFilter = function changeFilter(e) {
    if (e.target.value === 'Top') {
      dispatch({
        type: 'CHANGE_FILTER',
        filter: 'top'
      });
    } else if (e.target.value === 'Upcoming') {
      dispatch({
        type: 'CHANGE_FILTER',
        filter: 'upcoming'
      });
    }
  };

  return __jsx("div", {
    className: "filterBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "filtersWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("input", {
    onClick: function onClick(e) {
      return changeFilter(e);
    },
    className: "upcomingFilter",
    type: "button",
    value: "Upcoming",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("input", {
    onClick: function onClick(e) {
      return changeFilter(e);
    },
    className: "topFilter",
    type: "button",
    value: "Top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\n                .filterBar {\n                    min-height: 20px;\n                }\n                .filtersWrapper {\n                    position: relative;\n                    top: 10px;\n                }\n\n                input {\n                    position: relative;\n                    color: white;\n                    font-size: 15px;\n                    z-index: 1;\n                }\n\n                .topFilter {\n                    display: block;\n                    margin-top: 10px;\n                }\n                .upcomingFilter {\n                    color: ".concat(filter === 'upcoming' ? "white" : "#5F5F5F", "\n                }\n\n            ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ })

})
//# sourceMappingURL=index.js.0b153f8f734e79b751d9.hot-update.js.map