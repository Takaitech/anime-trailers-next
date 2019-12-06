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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      videoPlaying = _useState3[0],
      setVideoPlaying = _useState3[1];

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
  var specifiedElement = document.getElementById('videoButton'); //I'm using "click" but it works with any event

  document.addEventListener('click', function (event) {
    var isClickInside = specifiedElement.contains(event.target);

    if (!isClickInside) {
      console.log('outside');
    }
  });

  var hideOverlay = function hideOverlay() {
    console.log("hi");

    if (videoPlaying === false) {
      dispatch({
        type: 'HIDE_SHOW_OVERLAY',
        "boolean": true
      });
    } else if (videoPlaying === true) {
      setVideoPlaying(false);
    }
  };

  var preventOverlayClose = function preventOverlayClose() {
    setVideoPlaying(true);
  };

  console.log(videoPlaying);
  return __jsx("div", {
    onClick: function onClick() {
      return hideOverlay();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, selected.title), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + 'rating',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, selected.score + '/10')), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + 'trailerCarousel',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, trailers.map(function (trailer, index) {
    return __jsx("a", {
      id: "videoButton",
      href: trailer.video_url,
      onClick: function onClick() {
        return preventOverlayClose();
      },
      key: index,
      "data-lity": true,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + "trailerLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + "trailer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      src: trailer.image_url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, trailer.title)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3831109512",
    dynamic: [hidden === true ? "none" : "flex"],
    __self: this
  }, ".overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:rgb(0,0,0);background-color:rgb(0,0,0,.9);margin-left:auto;margin-right:auto;display:".concat(hidden === true ? "none" : "flex", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.info.__jsx-style-dynamic-selector{width:80%;margin:0 auto;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.title.__jsx-style-dynamic-selector{color:white;text-align:left;}.rating.__jsx-style-dynamic-selector{color:white;text-align:left;}.trailerCarousel.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.trailerLink.__jsx-style-dynamic-selector{position:absolute;z-index:156;}.trailer.__jsx-style-dynamic-selector{width:80%;margin:0 auto 10px auto;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRXdCLEFBSXVDLEFBZVIsQUFNRSxBQUtBLEFBT0QsQUFPTyxBQUtSLEFBSUMsQUFHQyxVQXBDRSxBQThCUyxDQVpWLEFBZ0JqQixDQTVCb0IsQUFPckIsQUF3QkMsTUFwRFUsQUF3Q00sTUF2Q0osQUFlSyxJQU1qQixBQU1BLEVBYUEsR0F2Q1csQ0E0Q1gsTUEzQ1ksUUFDSSxZQUNnQixlQVloQyxVQWlCbUIsR0E1QmdCLCtCQUNkLGlCQUNBLE1BMkJFLFlBMUJrQixxQ0FDZiw0Q0EwQjFCLGtDQXpCQSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL1ZpZGVvc092ZXJsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9BbmltZUNvbnRleHQnXG5pbXBvcnQgeyBPdmVybGF5Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL092ZXJsYXlDb250ZXh0J1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nXG5cblxuY29uc3QgVmlkZW9zT3ZlcmxheSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dClcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBoaWRkZW4gfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG4gICAgY29uc3QgWyB0cmFpbGVycywgc2V0VHJhaWxlcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBbIHRyYWlsZXIsIHNldFRyYWlsZXJdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgdmlkZW9QbGF5aW5nLCBzZXRWaWRlb1BsYXlpbmcgXSA9IHVzZVN0YXRlKClcblxuICAgIFxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYoc2VsZWN0ZWQubWFsX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL2FuaW1lL1wiICsgc2VsZWN0ZWQubWFsX2lkICsgXCIvdmlkZW9zXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0VHJhaWxlcnMocmVzcG9uc2VKc29uLnByb21vKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxbc2VsZWN0ZWRdKVxuXG5cbiAgICB2YXIgc3BlY2lmaWVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb0J1dHRvbicpO1xuXG4gICAgLy9JJ20gdXNpbmcgXCJjbGlja1wiIGJ1dCBpdCB3b3JrcyB3aXRoIGFueSBldmVudFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaXNDbGlja0luc2lkZSA9IHNwZWNpZmllZEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAoIWlzQ2xpY2tJbnNpZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ291dHNpZGUnKVxuICAgIH1cblxuICAgIH0pO1xuXG4gICAgY29uc3QgaGlkZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICAgICAgaWYodmlkZW9QbGF5aW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgYm9vbGVhbjp0cnVlfSlcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb1BsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNldFZpZGVvUGxheWluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByZXZlbnRPdmVybGF5Q2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFZpZGVvUGxheWluZyh0cnVlKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh2aWRlb1BsYXlpbmcpXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGlkZU92ZXJsYXkoKX0gY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPntzZWxlY3RlZC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3JhdGluZyc+e3NlbGVjdGVkLnNjb3JlICsgJy8xMCd9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyYWlsZXJDYXJvdXNlbCc+XG4gICAgICAgICAgICAgICAge3RyYWlsZXJzLm1hcCgodHJhaWxlcixpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0cmFpbGVyTGlua1wiIGlkPVwidmlkZW9CdXR0b25cIiBocmVmPXt0cmFpbGVyLnZpZGVvX3VybH0gb25DbGljaz17KCkgPT4gcHJldmVudE92ZXJsYXlDbG9zZSgpfSBrZXk9e2luZGV4fSBkYXRhLWxpdHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RyYWlsZXIuaW1hZ2VfdXJsfT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3RyYWlsZXIudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLC45KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAke2hpZGRlbiA9PT0gdHJ1ZT8gXCJub25lXCIgOiBcImZsZXhcIn07XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDMwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAudHJhaWxlckNhcm91c2VsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhaWxlckxpbmsge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1NjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhaWxlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG8gMTBweCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhaWxlciBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRyYWlsZXIgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zT3ZlcmxheSJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (VideosOverlay);

/***/ })

})
//# sourceMappingURL=index.js.a873a06f9a25cc99bc59.hot-update.js.map