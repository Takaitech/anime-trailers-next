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

  var videoLink = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('click', function (event) {
      var isClickInside = specifiedElement.contains(event.target);

      if (!isClickInside) {
        dispatch({
          type: 'HIDE_SHOW_OVERLAY',
          "boolean": true
        });
      }
    });
  });
  return __jsx("div", {
    onClick: function onClick(e) {
      return console.log('overlay clicked');
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, selected.title), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + 'rating',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, selected.score + '/10')), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + 'trailerCarousel',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, trailers.map(function (trailer, index) {
    return __jsx("a", {
      ref: videoLink,
      onClick: function onClick(e) {
        return console.log('link clicked');
      },
      href: trailer.video_url,
      key: index,
      "data-lity": true,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + "trailerLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]) + " " + "trailer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("img", {
      src: trailer.image_url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3831109512", [hidden === true ? "none" : "flex"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, trailer.title)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3831109512",
    dynamic: [hidden === true ? "none" : "flex"],
    __self: this
  }, ".overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:rgb(0,0,0);background-color:rgb(0,0,0,.9);margin-left:auto;margin-right:auto;display:".concat(hidden === true ? "none" : "flex", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.info.__jsx-style-dynamic-selector{width:80%;margin:0 auto;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.title.__jsx-style-dynamic-selector{color:white;text-align:left;}.rating.__jsx-style-dynamic-selector{color:white;text-align:left;}.trailerCarousel.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.trailerLink.__jsx-style-dynamic-selector{position:absolute;z-index:156;}.trailer.__jsx-style-dynamic-selector{width:80%;margin:0 auto 10px auto;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRHdCLEFBSXVDLEFBZVIsQUFNRSxBQUtBLEFBT0QsQUFPTyxBQUtSLEFBSUMsQUFHQyxVQXBDRSxBQThCUyxDQVpWLEFBZ0JqQixDQTVCb0IsQUFPckIsQUF3QkMsTUFwRFUsQUF3Q00sTUF2Q0osQUFlSyxJQU1qQixBQU1BLEVBYUEsR0F2Q1csQ0E0Q1gsTUEzQ1ksUUFDSSxZQUNnQixlQVloQyxVQWlCbUIsR0E1QmdCLCtCQUNkLGlCQUNBLE1BMkJFLFlBMUJrQixxQ0FDZiw0Q0EwQjFCLGtDQXpCQSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL1ZpZGVvc092ZXJsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7IE92ZXJsYXlDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvT3ZlcmxheUNvbnRleHQnXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbydcblxuXG5jb25zdCBWaWRlb3NPdmVybGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGhpZGRlbiB9ID0gdXNlQ29udGV4dChPdmVybGF5Q29udGV4dClcbiAgICBjb25zdCBbIHRyYWlsZXJzLCBzZXRUcmFpbGVyc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IFsgdHJhaWxlciwgc2V0VHJhaWxlcl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyB2aWRlb1BsYXlpbmcsIHNldFZpZGVvUGxheWluZyBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IHZpZGVvTGluayA9IHVzZVJlZigpO1xuXG4gICAgXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RlZC5tYWxfaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvYW5pbWUvXCIgKyBzZWxlY3RlZC5tYWxfaWQgKyBcIi92aWRlb3NcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRUcmFpbGVycyhyZXNwb25zZUpzb24ucHJvbW8pKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFtzZWxlY3RlZF0pXG5cblxuICAgICAgICAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGlzQ2xpY2tJbnNpZGUgPSBzcGVjaWZpZWRFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghaXNDbGlja0luc2lkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgYm9vbGVhbjp0cnVlfSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKCdvdmVybGF5IGNsaWNrZWQnKX0gY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPntzZWxlY3RlZC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3JhdGluZyc+e3NlbGVjdGVkLnNjb3JlICsgJy8xMCd9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyYWlsZXJDYXJvdXNlbCc+XG4gICAgICAgICAgICAgICAge3RyYWlsZXJzLm1hcCgodHJhaWxlcixpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0cmFpbGVyTGlua1wiIHJlZj17dmlkZW9MaW5rfSBvbkNsaWNrPXsoZSkgPT4gY29uc29sZS5sb2coJ2xpbmsgY2xpY2tlZCcpfSAgaHJlZj17dHJhaWxlci52aWRlb191cmx9IGtleT17aW5kZXh9IGRhdGEtbGl0eT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhaWxlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dHJhaWxlci5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dHJhaWxlci50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsLjkpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7aGlkZGVuID09PSB0cnVlPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyQ2Fyb3VzZWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyTGluayB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU2O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0byAxMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50cmFpbGVyIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhaWxlciBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3NPdmVybGF5Il19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (VideosOverlay);

/***/ })

})
//# sourceMappingURL=index.js.c92b46e55f1e22f6a263.hot-update.js.map