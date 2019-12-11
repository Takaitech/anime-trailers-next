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

  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var showOverlay = function showOverlay() {
    if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0) {
      dispatch({
        type: 'HIDE_SHOW_OVERLAY',
        "boolean": false
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, [selected]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2837728742", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    ref: buttonRef,
    onClick: function onClick(e) {
      return showOverlay(e);
    },
    type: "button",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2837728742", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id]]]) + " " + "openTrailers ".concat(!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? 'animate' + selected.mal_id : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2837728742", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "TRAILERS")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2837728742", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id]]]) + " " + "buttonWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2837728742",
    dynamic: [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;z-index:0;}.buttonWrapper.__jsx-style-dynamic-selector{background-color:transparent;min-height:150px;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.openTrailers.__jsx-style-dynamic-selector{background-color:".concat(!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', ";height:75px;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;position:relative;left:25%;top:37.5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;max-width:250px;}.").concat('animate' + selected.mal_id, ".__jsx-style-dynamic-selector{-webkit-animation:animate-__jsx-style-dynamic-selector .5s forwards;animation:animate-__jsx-style-dynamic-selector .5s forwards;}span.__jsx-style-dynamic-selector{font-family:council,sans-serif;font-weight:400;font-style:normal;font-size:2em;color:black;margin-left:15px;margin-bottom:5px;display:none;}@-webkit-keyframes animate-__jsx-style-dynamic-selector{0%{-webkit-clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);-webkit-clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);}100%{-webkit-clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);-webkit-clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);}}@keyframes animate-__jsx-style-dynamic-selector{0%{-webkit-clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);-webkit-clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);}100%{-webkit-clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);-webkit-clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCd0IsQUFHZ0MsQUFVa0IsQUFNaUIsQUFhZixBQUlDLEFBWXlELEFBSUQsV0FoRDNFLGtCQVVJLEVBdUJELGVBdEJILEFBS0QsQ0FrQk0sV0FqQkwsT0FrQkMsYUFla0UsQ0FkcEUsQUFTcUUsTUE1Q3hELE1Bb0NULE1BekJwQixXQTBCc0IsQ0FwQkQsaUJBcUJKLENBcEJKLENBVWIsUUFUZSxHQW9CZixRQW5CZ0IsbUNBbkJNLGtCQUNULFNBQ0MsVUFDZCxFQWlCdUIsS0E4Qm5CLEdBTkEscUZBdkJxQiwyRkFDTCxnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dCdcbmNvbnN0IEZvb3RlciA9ICgpID0+ICB7XG5cbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dClcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KE92ZXJsYXlDb250ZXh0KVxuICAgIGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZigpIFxuICAgIGNvbnN0IHNob3dPdmVybGF5ID0gKCkgPT4ge1xuICAgICAgICBpZighT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTonSElERV9TSE9XX09WRVJMQVknLCBib29sZWFuOmZhbHNlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgfSxbc2VsZWN0ZWRdKVxuXG4gICAgcmV0dXJuKCBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtidXR0b25SZWZ9IGNsYXNzTmFtZT17YG9wZW5UcmFpbGVycyAkeyFPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09IDAgPyAnYW5pbWF0ZScgK3NlbGVjdGVkLm1hbF9pZCA6IFwiXCJ9YH0gIG9uQ2xpY2s9eyhlKSA9PiBzaG93T3ZlcmxheShlKX0gdHlwZT1cImJ1dHRvblwiID48c3Bhbj5UUkFJTEVSUzwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uV3JhcHBlclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC5idXR0b25XcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyFPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09IDAgPyAnI2ZkNjU2OCcgOiAnI0MzQzNDMyd9O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzcuNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuJHsnYW5pbWF0ZScgK3NlbGVjdGVkLm1hbF9pZH0ge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUgLjVzIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY291bmNpbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCA0OSUgMCwgMTAwJSAwLCAxMDAlIDQ1JSwgMTAwJSAxMDAlLCA0OCUgMTAwJSwgMCAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDQ5JSAwLCAxMDAlIDAsIDEwMCUgNDUlLCAxMDAlIDEwMCUsIDQ4JSAxMDAlLCAwIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCA1JSwgNjAlIDIwJSwgNjAlIDAlLCA5NSUgNTYlLCA1OSUgMTAwJSwgNjAlIDgwJSwgMCA3NSUpO1xuO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNSUsIDYwJSAyMCUsIDYwJSAwJSwgOTUlIDU2JSwgNTklIDEwMCUsIDYwJSA4MCUsIDAgNzUlKTtcbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.19cb7c725137d34e5322.hot-update.js.map