webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");

var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Footer = function Footer() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_3__["AnimeContext"]),
      selected = _useContext.selected;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_4__["OverlayContext"]),
      dispatch = _useContext2.dispatch;

  var showOverlay = function showOverlay() {
    if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0) {
      dispatch({
        type: 'HIDE_SHOW_OVERLAY',
        "boolean": false
      });
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2340249038", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("input", {
    onClick: function onClick(e) {
      return showOverlay(e);
    },
    type: "button",
    value: "VIDEOS",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2340249038", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2340249038", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "clipShape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2340249038", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "buttonWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2340249038",
    dynamic: [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3'],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;z-index:0;}.clipShape.__jsx-style-dynamic-selector{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%;min-height:150px;background-color:#E6E6E6;-webkit-clip-path:polygon(100% 0,87% 100%,100% 100%);clip-path:polygon(100% 0,87% 100%,100% 100%);}.buttonWrapper.__jsx-style-dynamic-selector{background-color:#E6E6E6;min-height:150px;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}input.__jsx-style-dynamic-selector{background-color:".concat(!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', ";color:black;height:75px;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;position:relative;left:25%;top:37.5px;text-shadow:0px 0 red,0 1px black,1px 0 black,0 -1px black;-webkit-clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);-webkit-clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cd0IsQUFHZ0MsQUFTQyxBQVNhLEFBTXFCLFdBdkJqQyxjQWtCSSxpQkFDSixJQUtELEVBZEssVUFlTCxPQWRhLEtBZVosZUF6QlksS0FXc0IsR0FRbkQsNEJBT3FCLGtCQUNSLFNBQ0UsV0FDbUQsdUJBNUI1QyxNQVl0QixZQVhhLFNBQ0MsU0E0Qm1ELENBM0JqRSx5REE0QnlELDRHQUN6RCIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7IE92ZXJsYXlDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvT3ZlcmxheUNvbnRleHQnXG5jb25zdCBGb290ZXIgPSAoKSA9PiAge1xuXG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChPdmVybGF5Q29udGV4dClcblxuICAgIGNvbnN0IHNob3dPdmVybGF5ID0gKCkgPT4ge1xuICAgICAgICBpZighT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTonSElERV9TSE9XX09WRVJMQVknLCBib29sZWFuOmZhbHNlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXsoZSkgPT4gc2hvd092ZXJsYXkoZSl9IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlZJREVPU1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBTaGFwZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25XcmFwcGVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jbGlwU2hhcGUge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNSU7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDg3JSAxMDAlLCAxMDAlIDEwMCUpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJ1dHRvbldyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDMwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IU9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT0gMCA/ICcjZmQ2NTY4JyA6ICcjQzNDM0MzJ307XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDM3LjVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwIHJlZCwgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMTAlIDEwJSwgODklIDYlLCA5NCUgOTElLCAxMCUgOTAlKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAxMCUsIDg5JSA2JSwgOTQlIDkxJSwgMTAlIDkwJSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.e4d4099e9664c265dee3.hot-update.js.map