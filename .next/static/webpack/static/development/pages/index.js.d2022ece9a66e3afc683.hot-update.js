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
        "boolean": true
      });
    }
  };

  return __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3546834881", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3546834881", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]) + " " + "openTrailers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    src: "icons/white-play-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3546834881", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3546834881",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop],
    __self: this
  }, "footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:90%;position:relative;height:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;}.openTrailers.__jsx-style-dynamic-selector{position:absolute;right:0px;bottom:0px;background-color:#212121;height:40%;width:40%;-webkit-clip-path:polygon(99% 0,22% 100%,100% 100%);clip-path:polygon(99% 0,22% 100%,100% 100%);}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;right:5%;bottom:5%;}@media ".concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;height:45px;right:2%;bottom:2%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:65px;right:10%;bottom:10%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{footer.__jsx-style-dynamic-selector{width:80%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:2.8%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:30%;}.openTrailers.__jsx-style-dynamic-selector{position:absolute;background-color:#212121;height:40%;width:16%;-webkit-clip-path:polygon(85% 0,0% 100%,78% 100%);clip-path:polygon(85% 0,0% 100%,78% 100%);}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:25%;bottom:10%;height:40px;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, "{.openTrailers.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(80% 0,3% 100%,75% 100%);clip-path:polygon(80% 0,3% 100%,75% 100%);width:10%;}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:28%;bottom:7%;height:40px;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop, "{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:28%;bottom:5%;height:70px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDd0IsQUFJa0MsQUFVSyxBQVdBLEFBT0ksQUFTTixBQVVGLEFBU1EsQUFTUixBQVFrQyxBQUtsQyxBQVFBLFVBdENJLEFBa0JILEFBYUQsQUFRQSxFQWhEQSxNQTVCSixBQVdELEFBT08sQUE0QmEsRUF1QmIsQUFRQSxDQXJCQSxDQTNCRCxFQVNFLEdBMUJQLENBWEMsRUFrQkUsRUFtRGIsQUFRQSxDQWhEQSxBQTJCQSxJQTVDSixFQVg2QixBQWtCWCxJQTJCQSxNQTFCZCxLQTJCYyxVQTdDSixBQThDc0MsVUEzRHRDLENBY0EsU0FiUSxDQWM0QixPQTBEaEMsTUF4QkMsSUEvQ0osQUF5RVgsT0F6QnVCLElBL0NELDJDQTBEdEIsc0JBVmUsR0FsQ25CLFFBbUNJLEVBaERjLGNBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcnMnXG5pbXBvcnQgQW5pbWVJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvQW5pbWVJbmZvJ1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7ZGV2aWNlIH0gZnJvbSAnLi4vZGV2aWNlcydcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG5cbiAgICBjb25zdCBzaG93T3ZlcmxheSA9ICgpID0+IHtcblxuICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9hbmltZS9cIiArIHNlbGVjdGVkLm1hbF9pZCArIFwiL3ZpZGVvc1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBkaXNwYXRjaCh7dHlwZTonVVBEQVRFX1RSQUlMRVJTJyx0cmFpbGVyczogcmVzcG9uc2VKc29uLnByb21vfSkpXG4gICAgICAgIC5jYXRjaChlcnIgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIU9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgYm9vbGVhbjp0cnVlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8RmlsdGVycz48L0ZpbHRlcnM+XG4gICAgICAgICAgICA8QW5pbWVJbmZvPjwvQW5pbWVJbmZvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVuVHJhaWxlcnNcIiBvbkNsaWNrPXsoKSA9PiBzaG93T3ZlcmxheSgpfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL3doaXRlLXBsYXktaWNvbi5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDk5JSAwLCAyMiUgMTAwJSwgMTAwJSAxMDAlKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZVN9IHtcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyJTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIuOCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig4NSUgMCwgMCUgMTAwJSwgNzglIDEwMCUpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcEx9IHtcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oODAlIDAsIDMlIDEwMCUsIDc1JSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjglO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5kZXNrdG9wfSB7XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyOCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.d2022ece9a66e3afc683.hot-update.js.map