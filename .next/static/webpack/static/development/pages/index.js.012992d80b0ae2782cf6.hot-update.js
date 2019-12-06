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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3837584704", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "footer",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3837584704", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3837584704", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "clipShape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3837584704", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "buttonWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3837584704",
    dynamic: [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3'],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;z-index:0;}.clipShape.__jsx-style-dynamic-selector{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%;min-height:150px;background-color:#E6E6E6;-webkit-clip-path:polygon(100% 0,87% 100%,100% 100%);clip-path:polygon(100% 0,87% 100%,100% 100%);}.buttonWrapper.__jsx-style-dynamic-selector{background-color:#E6E6E6;min-height:150px;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}input.__jsx-style-dynamic-selector{background-color:".concat(!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', ";color:black;height:75px;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;position:relative;left:25%;top:37.5px;-webkit-clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);-webkit-clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cd0IsQUFHZ0MsQUFTQyxBQVNhLEFBTXFCLFdBdkJqQyxjQWtCSSxpQkFDSixJQUtELEVBZEssVUFlTCxPQWRhLEtBZVosZUF6QlksS0FXc0IsR0FRbkQsNEJBT3FCLGtCQUNSLFNBQ0UsV0FDa0QsdUJBNUIzQyxNQVl0QixZQVhhLFNBQ0MsUUEyQjJDLEVBMUJ6RCwwR0EyQkEiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9BbmltZUNvbnRleHQnXG5pbXBvcnQgeyBPdmVybGF5Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL092ZXJsYXlDb250ZXh0J1xuY29uc3QgRm9vdGVyID0gKCkgPT4gIHtcblxuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG5cbiAgICBjb25zdCBzaG93T3ZlcmxheSA9ICgpID0+IHtcbiAgICAgICAgaWYoIU9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgYm9vbGVhbjpmYWxzZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgb25DbGljaz17KGUpID0+IHNob3dPdmVybGF5KGUpfSB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJWSURFT1NcIj48L2lucHV0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwU2hhcGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uV3JhcHBlclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY2xpcFNoYXBlIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDUlO1xuXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCA4NyUgMTAwJSwgMTAwJSAxMDAlKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5idXR0b25XcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyFPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09IDAgPyAnI2ZkNjU2OCcgOiAnI0MzQzNDMyd9O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNy41cHg7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAxMCUsIDg5JSA2JSwgOTQlIDkxJSwgMTAlIDkwJSk7XG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMCUgMTAlLCA4OSUgNiUsIDk0JSA5MSUsIDEwJSA5MCUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.012992d80b0ae2782cf6.hot-update.js.map