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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1434266049", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "footer",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1434266049", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1434266049", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "clipShape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1434266049", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "buttonWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1434266049",
    dynamic: [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3'],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;z-index:0;}.clipShape.__jsx-style-dynamic-selector{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%;min-height:150px;background-color:#E6E6E6;-webkit-clip-path:polygon(100% 0,87% 100%,100% 100%);clip-path:polygon(100% 0,87% 100%,100% 100%);}.buttonWrapper.__jsx-style-dynamic-selector{background-color:#E6E6E6;min-height:150px;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}input.__jsx-style-dynamic-selector{background-color:".concat(!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', ";color:black;height:75px;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;position:relative;left:25%;top:37.5px;text-shadow:0px 0 black,0 1px black,1px 0 black,0 -1px black;-webkit-clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);-webkit-clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cd0IsQUFHZ0MsQUFTQyxBQVNhLEFBTXFCLFdBdkJqQyxjQWtCSSxpQkFDSixJQUtELEVBZEssVUFlTCxPQWRhLEtBZVosZUF6QlksS0FXc0IsR0FRbkQsNEJBT3FCLGtCQUNSLFNBQ0UsV0FDcUQsdUJBNUI5QyxNQVl0QixZQVhhLFNBQ0MsVUFDZCxDQTJCaUUsMERBQ1IsNEdBQ3pEIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dCdcbmNvbnN0IEZvb3RlciA9ICgpID0+ICB7XG5cbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dClcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KE92ZXJsYXlDb250ZXh0KVxuXG4gICAgY29uc3Qgc2hvd092ZXJsYXkgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidISURFX1NIT1dfT1ZFUkxBWScsIGJvb2xlYW46ZmFsc2V9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2xpY2s9eyhlKSA9PiBzaG93T3ZlcmxheShlKX0gdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiVklERU9TXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpcFNoYXBlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbldyYXBwZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNsaXBTaGFwZSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA1JTtcblxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgODclIDEwMCUsIDEwMCUgMTAwJSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYnV0dG9uV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHshT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmxlbmd0aCA9PSAwID8gJyNmZDY1NjgnIDogJyNDM0MzQzMnfTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzcuNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAxMCUsIDg5JSA2JSwgOTQlIDkxJSwgMTAlIDkwJSk7XG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMCUgMTAlLCA4OSUgNiUsIDk0JSA5MSUsIDEwJSA5MCUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.3db42902a34ecf71fdeb.hot-update.js.map