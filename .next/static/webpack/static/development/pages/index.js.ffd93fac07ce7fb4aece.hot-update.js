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
      return dispatch({
        type: 'UPDATE_TRAILERS',
        trailers: responseJson.promo
      });
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
  }, "footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:90%;position:relative;height:45%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;}.openTrailers.__jsx-style-dynamic-selector{position:absolute;right:0px;bottom:0px;background-color:#212121;height:40%;width:40%;-webkit-clip-path:polygon(99% 0,22% 100%,100% 100%);clip-path:polygon(99% 0,22% 100%,100% 100%);}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;right:5%;bottom:5%;}@media ".concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;height:45px;right:2%;bottom:2%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:65px;right:10%;bottom:10%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{footer.__jsx-style-dynamic-selector{width:80%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:2.8%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:30%;}.openTrailers.__jsx-style-dynamic-selector{position:absolute;background-color:#212121;height:40%;width:16%;-webkit-clip-path:polygon(85% 0,0% 100%,78% 100%);clip-path:polygon(85% 0,0% 100%,78% 100%);}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:25%;bottom:10%;height:40px;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, "{.openTrailers.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(80% 0,3% 100%,75% 100%);clip-path:polygon(80% 0,3% 100%,75% 100%);width:10%;}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:28%;bottom:7%;height:40px;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:28%;bottom:5%;height:70px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDd0IsQUFJa0MsQUFVSyxBQVdBLEFBT0ksQUFTTixBQVVGLEFBU1EsQUFTUixBQVFrQyxBQUtsQyxBQVFBLFVBdENJLEFBa0JILEFBYUQsQUFRQSxFQWhEQSxNQTVCSixBQVdELEFBT08sQUE0QmEsRUF1QmIsQUFRQSxDQXJCQSxDQTNCRCxFQVNFLEdBMUJQLENBWEMsRUFrQkUsRUFtRGIsQUFRQSxDQWhEQSxBQTJCQSxJQTVDSixFQVg2QixBQWtCWCxJQTJCQSxNQTFCZCxLQTJCYyxVQTdDSixBQThDc0MsVUEzRHRDLENBY0EsU0FiUSxDQWM0QixPQTBEaEMsTUF4QkMsSUEvQ0osQUF5RVgsT0F6QnVCLElBL0NELDJDQTBEdEIsc0JBVmUsR0FsQ25CLFFBbUNJLEVBaERjLGNBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcnMnXG5pbXBvcnQgQW5pbWVJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvQW5pbWVJbmZvJ1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7ZGV2aWNlIH0gZnJvbSAnLi4vZGV2aWNlcydcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG5cbiAgICBjb25zdCBzaG93T3ZlcmxheSA9ICgpID0+IHtcblxuICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9hbmltZS9cIiArIHNlbGVjdGVkLm1hbF9pZCArIFwiL3ZpZGVvc1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBkaXNwYXRjaCh7dHlwZTonVVBEQVRFX1RSQUlMRVJTJyx0cmFpbGVyczogcmVzcG9uc2VKc29uLnByb21vfSkpXG4gICAgICAgIC5jYXRjaChlcnIgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIU9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgYm9vbGVhbjpmYWxzZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPEZpbHRlcnM+PC9GaWx0ZXJzPlxuICAgICAgICAgICAgPEFuaW1lSW5mbz48L0FuaW1lSW5mbz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BlblRyYWlsZXJzXCIgb25DbGljaz17KCkgPT4gc2hvd092ZXJsYXkoKX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy93aGl0ZS1wbGF5LWljb24ucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NSU7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig5OSUgMCwgMjIlIDEwMCUsIDEwMCUgMTAwJSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDUlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5tb2JpbGVTfSB7XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMiU7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0ge1xuICAgICAgICAgICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyLjglO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNiU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oODUlIDAsIDAlIDEwMCUsIDc4JSAxMDAlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3BMfSB7XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDgwJSAwLCAzJSAxMDAlLCA3NSUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI4JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNyU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UuZGVza3RvcH0ge1xuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjglO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.ffd93fac07ce7fb4aece.hot-update.js.map