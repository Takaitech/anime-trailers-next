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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3090435393", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id]]]) + " " + "footer",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3090435393", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id]]]) + " " + "openTrailers ".concat(!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? 'animate' + selected.mal_id : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3090435393", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "TRAILERS")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3090435393", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id]]]) + " " + "buttonWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3090435393",
    dynamic: [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', 'animate' + selected.mal_id],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;z-index:0;}.buttonWrapper.__jsx-style-dynamic-selector{background-color:transparent;min-height:150px;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.openTrailers.__jsx-style-dynamic-selector{background-color:".concat(!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3', ";height:75px;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;position:relative;left:25%;top:37.5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:left max-width:300px;-webkit-justify-content:left max-width:300px;-ms-flex-pack:left max-width:300px;justify-content:left max-width:300px;}.").concat('animate' + selected.mal_id, ".__jsx-style-dynamic-selector{-webkit-animation:animate-__jsx-style-dynamic-selector .5s forwards;animation:animate-__jsx-style-dynamic-selector .5s forwards;}span.__jsx-style-dynamic-selector{font-family:council,sans-serif;font-weight:400;font-style:normal;font-size:2em;color:black;margin-left:15px;margin-bottom:5px;}@-webkit-keyframes animate-__jsx-style-dynamic-selector{0%{-webkit-clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);-webkit-clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);}100%{-webkit-clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);-webkit-clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);}}@keyframes animate-__jsx-style-dynamic-selector{0%{-webkit-clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);-webkit-clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);clip-path:polygon(0 0,49% 0,100% 0,100% 45%,100% 100%,48% 100%,0 100%);}100%{-webkit-clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);-webkit-clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);clip-path:polygon(0 5%,60% 20%,60% 0%,95% 56%,59% 100%,60% 80%,0 75%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCd0IsQUFHZ0MsQUFVa0IsQUFNaUIsQUFhZixBQUlDLEFBV3lELEFBSUQsV0EvQzNFLGtCQVVJLEVBdUJELGVBdEJILEFBS0QsQ0FrQk0sV0FqQkwsT0FrQkMsYUFja0UsQ0FicEUsQUFRcUUsTUEzQ3hELE1Bb0NULE1BekJwQixXQTBCc0IsQ0FwQkQsaUJBcUJyQixDQXBCYSxDQVViLFFBVGUsV0FDQyxtQ0FuQk0sa0JBQ1QsU0FDQyxVQUNkLEVBaUJ1QixLQTZCbkIsR0FOQSxxRkFyQmdCLDJKQUNwQiIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9BbmltZUNvbnRleHQnXG5pbXBvcnQgeyBPdmVybGF5Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL092ZXJsYXlDb250ZXh0J1xuY29uc3QgRm9vdGVyID0gKCkgPT4gIHtcblxuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG4gICAgY29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKCkgXG4gICAgY29uc3Qgc2hvd092ZXJsYXkgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidISURFX1NIT1dfT1ZFUkxBWScsIGJvb2xlYW46ZmFsc2V9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB9LFtzZWxlY3RlZF0pXG5cbiAgICByZXR1cm4oIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiByZWY9e2J1dHRvblJlZn0gY2xhc3NOYW1lPXtgb3BlblRyYWlsZXJzICR7IU9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT0gMCA/ICdhbmltYXRlJyArc2VsZWN0ZWQubWFsX2lkIDogXCJcIn1gfSAgb25DbGljaz17KGUpID0+IHNob3dPdmVybGF5KGUpfSB0eXBlPVwiYnV0dG9uXCIgPjxzcGFuPlRSQUlMRVJTPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25XcmFwcGVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLmJ1dHRvbldyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IU9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT0gMCA/ICcjZmQ2NTY4JyA6ICcjQzNDM0MzJ307XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNy41cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLiR7J2FuaW1hdGUnICtzZWxlY3RlZC5tYWxfaWR9IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlIC41cyBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGNvdW5jaWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgNDklIDAsIDEwMCUgMCwgMTAwJSA0NSUsIDEwMCUgMTAwJSwgNDglIDEwMCUsIDAgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCA0OSUgMCwgMTAwJSAwLCAxMDAlIDQ1JSwgMTAwJSAxMDAlLCA0OCUgMTAwJSwgMCAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgNSUsIDYwJSAyMCUsIDYwJSAwJSwgOTUlIDU2JSwgNTklIDEwMCUsIDYwJSA4MCUsIDAgNzUlKTtcbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDUlLCA2MCUgMjAlLCA2MCUgMCUsIDk1JSA1NiUsIDU5JSAxMDAlLCA2MCUgODAlLCAwIDc1JSk7XG47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.5b9343ade27245a73072.hot-update.js.map