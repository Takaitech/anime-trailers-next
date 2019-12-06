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

  return __jsx("div", {
    onClick: function onClick() {
      return hideOverlay();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]) + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, selected.title), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]) + " " + 'rating',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, selected.score + '/10')), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]) + " " + 'trailerCarousel',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, trailers.map(function (trailer, index) {
    return __jsx("a", {
      href: trailer.video_url,
      key: index,
      "data-lity": true,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]) + " " + "trailerlink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]) + " " + "trailer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      src: trailer.image_url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3612395914", [hidden === true ? "none" : "flex"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, trailer.title)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3612395914",
    dynamic: [hidden === true ? "none" : "flex"],
    __self: this
  }, ".overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:rgb(0,0,0);background-color:rgb(0,0,0,.9);margin-left:auto;margin-right:auto;display:".concat(hidden === true ? "none" : "flex", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.info.__jsx-style-dynamic-selector{width:80%;margin:0 auto;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.title.__jsx-style-dynamic-selector{color:white;text-align:left;}.rating.__jsx-style-dynamic-selector{color:white;text-align:left;}.trailerCarousel.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.trailerLink.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.trailer.__jsx-style-dynamic-selector{width:80%;margin:0 auto 10px auto;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:10px;-webkit-text-decoration:none;text-decoration:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHdCLEFBSXVDLEFBZVIsQUFNRSxBQUtBLEFBT0QsQUFRaEIsQUFHZSxBQUlDLEFBR0MsVUFuQ0UsQUE2QlMsQ0FYVixBQWVqQixDQTNCb0IsQUFPckIsQUF1QnFCLE1BbkRWLE1BQ0UsQUFlSyxJQU1qQixBQU1BLEFBd0JtQixLQWxEUixDQTJDWCxNQTFDWSxHQWtEYSxLQWpEVCxFQW9DaEIsVUFuQ2dDLGVBWWhDLFVBaUJtQixHQTVCZ0IsS0FnRG5CLFlBQ2hCLGNBaERxQixpQkFDQSxNQTJCRSxZQTFCa0IscUNBQ2YsNENBMEIxQixrQ0F6QkEiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9WaWRlb3NPdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dCdcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJ1xuXG5cbmNvbnN0IFZpZGVvc092ZXJsYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgY29uc3QgeyBkaXNwYXRjaCwgaGlkZGVuIH0gPSB1c2VDb250ZXh0KE92ZXJsYXlDb250ZXh0KVxuICAgIGNvbnN0IFsgdHJhaWxlcnMsIHNldFRyYWlsZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgWyB0cmFpbGVyLCBzZXRUcmFpbGVyXSA9IHVzZVN0YXRlKClcblxuXG4gICAgXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RlZC5tYWxfaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvYW5pbWUvXCIgKyBzZWxlY3RlZC5tYWxfaWQgKyBcIi92aWRlb3NcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRUcmFpbGVycyhyZXNwb25zZUpzb24ucHJvbW8pKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFtzZWxlY3RlZF0pXG5cblxuICAgIGNvbnN0IGhpZGVPdmVybGF5ID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTonSElERV9TSE9XX09WRVJMQVknLCBib29sZWFuOnRydWV9KVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGlkZU92ZXJsYXkoKX0gY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPntzZWxlY3RlZC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3JhdGluZyc+e3NlbGVjdGVkLnNjb3JlICsgJy8xMCd9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyYWlsZXJDYXJvdXNlbCc+XG4gICAgICAgICAgICAgICAge3RyYWlsZXJzLm1hcCgodHJhaWxlcixpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0cmFpbGVybGlua1wiIGhyZWY9e3RyYWlsZXIudmlkZW9fdXJsfSBrZXk9e2luZGV4fSBkYXRhLWxpdHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RyYWlsZXIuaW1hZ2VfdXJsfT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3RyYWlsZXIudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLC45KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAke2hpZGRlbiA9PT0gdHJ1ZT8gXCJub25lXCIgOiBcImZsZXhcIn07XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDMwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAudHJhaWxlckNhcm91c2VsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhaWxlckxpbmsge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhaWxlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG8gMTBweCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhaWxlciBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRyYWlsZXIgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zT3ZlcmxheSJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (VideosOverlay);

/***/ })

})
//# sourceMappingURL=index.js.16a9e134d59f8ff7e0dc.hot-update.js.map