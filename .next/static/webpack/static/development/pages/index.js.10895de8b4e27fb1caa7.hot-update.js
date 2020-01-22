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
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Filters */ "./components/Filters.js");
/* harmony import */ var _components_AnimeInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AnimeInfo */ "./components/AnimeInfo.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../devices */ "./devices.js");

var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Footer = function Footer() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_5__["OverlayContext"]),
      dispatch = _useContext.dispatch;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_6__["AnimeContext"]),
      selected = _useContext2.selected;

  var showOverlay = function showOverlay() {
    fetch("https://api.jikan.moe/v3/anime/" + selected.mal_id + "/videos").then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      return setTrailers(responseJson.promo);
    })["catch"](function (err) {
      console.log(err);
    });

    if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0) {
      dispatch({
        type: 'HIDE_SHOW_OVERLAY',
        "boolean": false
      });
    }
  };

  return __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1456425070", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_AnimeInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("div", {
    onClick: function onClick() {
      return showOverlay();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1456425070", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]) + " " + "openTrailers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    src: "icons/white-play-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1456425070", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1456425070",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop],
    __self: this
  }, "footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:90%;position:relative;height:45%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;}.openTrailers.__jsx-style-dynamic-selector{position:absolute;right:0px;bottom:0px;background-color:#212121;height:40%;width:40%;-webkit-clip-path:polygon(99% 0,22% 100%,100% 100%);clip-path:polygon(99% 0,22% 100%,100% 100%);}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;right:5%;bottom:5%;}@media ".concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;height:45px;right:2%;bottom:2%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:65px;right:10%;bottom:10%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{footer.__jsx-style-dynamic-selector{width:80%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:2.8%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:30%;}.openTrailers.__jsx-style-dynamic-selector{position:absolute;background-color:#212121;height:40%;width:16%;-webkit-clip-path:polygon(85% 0,0% 100%,78% 100%);clip-path:polygon(85% 0,0% 100%,78% 100%);}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:25%;bottom:10%;height:40px;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, "{.openTrailers.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(80% 0,3% 100%,75% 100%);clip-path:polygon(80% 0,3% 100%,75% 100%);width:10%;}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:28%;bottom:7%;height:40px;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:28%;bottom:5%;height:70px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDd0IsQUFJa0MsQUFVSyxBQVdBLEFBT0ksQUFTTixBQVVGLEFBU1EsQUFTUixBQVFrQyxBQUtsQyxBQVFBLFVBdENJLEFBa0JILEFBYUQsQUFRQSxFQWhEQSxNQTVCSixBQVdELEFBT08sQUE0QmEsRUF1QmIsQUFRQSxDQXJCQSxDQTNCRCxFQVNFLEdBMUJQLENBWEMsRUFrQkUsRUFtRGIsQUFRQSxDQWhEQSxBQTJCQSxJQTVDSixFQVg2QixBQWtCWCxJQTJCQSxNQTFCZCxLQTJCYyxVQTdDSixBQThDc0MsVUEzRHRDLENBY0EsU0FiUSxDQWM0QixPQTBEaEMsTUF4QkMsSUEvQ0osQUF5RVgsT0F6QnVCLElBL0NELDJDQTBEdEIsc0JBVmUsR0FsQ25CLFFBbUNJLEVBaERjLGNBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcnMnXG5pbXBvcnQgQW5pbWVJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvQW5pbWVJbmZvJ1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7ZGV2aWNlIH0gZnJvbSAnLi4vZGV2aWNlcydcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG5cbiAgICBjb25zdCBzaG93T3ZlcmxheSA9ICgpID0+IHtcblxuICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9hbmltZS9cIiArIHNlbGVjdGVkLm1hbF9pZCArIFwiL3ZpZGVvc1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRUcmFpbGVycyhyZXNwb25zZUpzb24ucHJvbW8pKVxuICAgICAgICAuY2F0Y2goZXJyID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKCFPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidISURFX1NIT1dfT1ZFUkxBWScsIGJvb2xlYW46ZmFsc2V9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxGaWx0ZXJzPjwvRmlsdGVycz5cbiAgICAgICAgICAgIDxBbmltZUluZm8+PC9BbmltZUluZm8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZW5UcmFpbGVyc1wiIG9uQ2xpY2s9eygpID0+IHNob3dPdmVybGF5KCl9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvd2hpdGUtcGxheS1pY29uLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDUlO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oOTklIDAsIDIyJSAxMDAlLCAxMDAlIDEwMCUpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyBpbWcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlU30ge1xuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDIlO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS50YWJsZXR9IHtcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMi44JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDg1JSAwLCAwJSAxMDAlLCA3OCUgMTAwJSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wTH0ge1xuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig4MCUgMCwgMyUgMTAwJSwgNzUlIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyOCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDclO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmRlc2t0b3B9IHtcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI4JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.10895de8b4e27fb1caa7.hot-update.js.map