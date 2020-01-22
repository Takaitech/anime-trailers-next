webpackHotUpdate("static/development/pages/index.js",{

/***/ "./contexts/OverlayContext.js":
/*!************************************!*\
  !*** ./contexts/OverlayContext.js ***!
  \************************************/
/*! exports provided: OverlayContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContext", function() { return OverlayContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_overlayReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/overlayReducer */ "./reducers/overlayReducer.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/contexts/OverlayContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var OverlayContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  open: false,
  trailers: []
});

var OverlayContextProvider = function OverlayContextProvider(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_overlayReducer__WEBPACK_IMPORTED_MODULE_1__["overlayReducer"], {
    open: false,
    trailers: []
  }),
      overlay = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(OverlayContext.Provider, {
    value: {
      overlay: overlay,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayContextProvider);

/***/ })

})
//# sourceMappingURL=index.js.762b3b14591b2b32a1c1.hot-update.js.map