webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VideosOverlay.js":
/*!*************************************!*\
  !*** ./components/VideosOverlay.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var VideosOverlay = function VideosOverlay() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__["AnimeContext"]),
      selected = _useContext.selected;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_3__["OverlayContext"]),
      dispatch = _useContext2.dispatch,
      hidden = _useContext2.hidden;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      trailers = _useState[0],
      setTrailers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      trailer = _useState2[0],
      setTrailer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      videoOpen = _useState3[0],
      setVideoOpen = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (selected.mal_id !== undefined) {
      fetch("https://api.jikan.moe/v3/anime/" + selected.mal_id + "/videos").then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return setTrailers(responseJson.promo);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [selected]);

  var hideOverlay = function hideOverlay() {
    dispatch({
      type: 'HIDE_SHOW_OVERLAY',
      "boolean": true
    });
  };

  var preventOverlayClose = function preventOverlayClose() {
    setVideoOpen(true);
  };

  return __jsx("div", {
    onClick: function onClick() {
      return hideOverlay();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]) + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, selected.title), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]) + " " + 'rating',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, selected.score + '/10')), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]) + " " + 'trailerCarousel',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, trailers.map(function (trailer, index) {
    return __jsx("a", {
      onClick: function onClick() {
        return preventOverlayClose();
      },
      href: trailer.video_url,
      "data-lity": true,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      key: index,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]) + " " + "trailer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("img", {
      src: trailer.image_url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["554219235", [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, trailer.title)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "554219235",
    dynamic: [hidden === true ? "none" : "flex", videoOpen === true ? "none" : "auto"],
    __self: this
  }, ".overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:rgb(0,0,0);background-color:rgb(0,0,0,.9);margin-left:auto;margin-right:auto;display:".concat(hidden === true ? "none" : "flex", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;pointer-events:").concat(videoOpen === true ? "none" : "auto", ";}.info.__jsx-style-dynamic-selector{width:80%;margin:0 auto;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.title.__jsx-style-dynamic-selector{color:white;text-align:left;}.rating.__jsx-style-dynamic-selector{color:white;text-align:left;}.trailerCarousel.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.trailer.__jsx-style-dynamic-selector{width:80%;margin:0 auto 10px auto;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHdCLEFBSXVDLEFBZ0JSLEFBTUUsQUFLQSxBQU9ELEFBT0QsQUFJQyxBQUdDLFVBL0JFLEFBeUJTLENBUFYsQUFXakIsQ0F2Qm9CLEFBT3JCLEFBbUJDLE1BaERVLE1BQ0UsQUFnQkssSUFNakIsQUFNQSxLQTNCVyxDQXdDWCxNQXZDWSxRQUNJLFlBQ2dCLGVBYWhDLFVBaUJtQixHQTdCZ0IsK0JBQ2QsaUJBQ0EsTUE0QkUsWUEzQmtCLHFDQUNmLDRDQTJCMUIsa0NBekJELDRDQUFDIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7IE92ZXJsYXlDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvT3ZlcmxheUNvbnRleHQnXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbydcblxuXG5jb25zdCBWaWRlb3NPdmVybGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGhpZGRlbiB9ID0gdXNlQ29udGV4dChPdmVybGF5Q29udGV4dClcbiAgICBjb25zdCBbIHRyYWlsZXJzLCBzZXRUcmFpbGVyc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IFsgdHJhaWxlciwgc2V0VHJhaWxlcl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyB2aWRlb09wZW4sIHNldFZpZGVvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIFxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYoc2VsZWN0ZWQubWFsX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL2FuaW1lL1wiICsgc2VsZWN0ZWQubWFsX2lkICsgXCIvdmlkZW9zXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0VHJhaWxlcnMocmVzcG9uc2VKc29uLnByb21vKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxbc2VsZWN0ZWRdKVxuXG5cbiAgICBjb25zdCBoaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgYm9vbGVhbjp0cnVlfSlcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2ZW50T3ZlcmxheUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRWaWRlb09wZW4odHJ1ZSlcbiAgICB9XG5cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoaWRlT3ZlcmxheSgpfSBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSc+e3NlbGVjdGVkLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncmF0aW5nJz57c2VsZWN0ZWQuc2NvcmUgKyAnLzEwJ308L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJhaWxlckNhcm91c2VsJz5cbiAgICAgICAgICAgICAgICB7dHJhaWxlcnMubWFwKCh0cmFpbGVyLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBwcmV2ZW50T3ZlcmxheUNsb3NlKCl9IGhyZWY9e3RyYWlsZXIudmlkZW9fdXJsfSBkYXRhLWxpdHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0cmFpbGVyLmltYWdlX3VybH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0cmFpbGVyLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwuOSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJHtoaWRkZW4gPT09IHRydWU/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogJHt2aWRlb09wZW4gPT09IHRydWUgPyBcIm5vbmVcIiA6IFwiYXV0b1wifVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLnRyYWlsZXJDYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRyYWlsZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRyYWlsZXIgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50cmFpbGVyIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvc092ZXJsYXkiXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (VideosOverlay);

/***/ })

})
//# sourceMappingURL=index.js.4d32dd5341edfcf8df8b.hot-update.js.map