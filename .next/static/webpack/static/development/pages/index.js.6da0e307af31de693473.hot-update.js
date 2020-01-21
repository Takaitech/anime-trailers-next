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
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../devices */ "./devices.js");
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, selected.title), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'rating',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, selected.score === 0 || selected.score === undefined ? 'No current ratings' : selected.score + '/10')), __jsx("img", {
    src: selected.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'trailerCarousel',
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "trailerlink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "trailer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      src: trailer.image_url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1751016806", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, trailer.title)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1751016806",
    dynamic: [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop],
    __self: this
  }, ".overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:rgb(0,0,0);background-color:rgb(0,0,0,.9);margin-left:auto;margin-right:auto;display:".concat(hidden === true ? "none" : "flex", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:scroll;}.info.__jsx-style-dynamic-selector{width:80%;text-align:center;margin:20px auto;border-bottom:2px solid rgb(71,71,71);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:22px;min-height:150px;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;}.image.__jsx-style-dynamic-selector{height:150px;}.title.__jsx-style-dynamic-selector{color:white;margin-bottom:10px;text-align:left;font-size:1.1em;}.rating.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:.7em;margin:0;font-weight:200;}.trailerCarousel.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:25px;margin-bottom:50px;}.trailerLink.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;width:100%;}a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;display:block;margin:10px 0;}a.__jsx-style-dynamic-selector:visited{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:active{-webkit-text-decoration:none;text-decoration:none;}.trailer.__jsx-style-dynamic-selector{text-align:center;width:80%;margin:0 auto 10px auto;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{box-sizing:border-box;width:100%;box-shadow:0 0 0 2px white;-webkit-transition:box-shadow 1s;transition:box-shadow 1s;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector:hover{width:100%;box-shadow:0 0 0 10px white;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector:active{width:100%;box-shadow:0 0 0 15px black;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:.7em;-webkit-text-decoration:none;text-decoration:none;border:none;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, "{.trailerlink.__jsx-style-dynamic-selector{width:80%;}.title.__jsx-style-dynamic-selector{font-size:2.5em;}.rating.__jsx-style-dynamic-selector{font-size:1.5em;}a.__jsx-style-dynamic-selector:link{margin:30px auto;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:1.3em;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop, "{.trailerCarousel.__jsx-style-dynamic-selector{margin:0 auto;width:80%;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.trailerlink.__jsx-style-dynamic-selector{width:50%;}a.__jsx-style-dynamic-selector:link{margin:60px 0;}.title.__jsx-style-dynamic-selector{font-size:2.7em;}.rating.__jsx-style-dynamic-selector{font-size:1.7em;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:1.3em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHdCLEFBSXVDLEFBZ0JSLEFBV0csQUFJQSxBQUlELEFBT0EsQUFTRCxBQVVVLEFBS0QsQUFNQSxBQUlBLEFBSUEsQUFLRixBQVFJLEFBTVgsQUFNQSxBQUtDLEFBVUUsQUFJTSxBQUtBLEFBS0MsQUFLRCxBQU9GLEFBTUosQUFHSSxBQUlFLEFBS0EsQUFJQSxVQXZKSCxBQXdHakIsQUFnQ0EsQ0FyR2EsQUFnRGdCLEFBTUQsQ0F0RVQsQUFPSCxBQW9FQSxDQS9FcEIsQ0FtSGtCLEFBU2QsRUE5QkEsQUFLQSxBQVNBLEFBcUJBLEFBS0EsQUFHQSxDQWxDQSxDQXRJTSxBQXFGSSxJQVFDLEVBNUZILEFBa0prQixJQWxJVCxBQTBCRixBQTRDUSxBQXdCUixHQTNFQSxFQWxDUixBQTRGb0IsTUFPL0IsQUFLQSxDQXZHWSxHQXlDQyxBQW9FWSxFQTlGaUIsRUFtQnRCLENBakNKLEVBeURELEFBS0csQUFNbEIsQUFJQSxBQUlBLENBckRBLENBa0JvQixBQTRDcEIsUUFwRmdDLEFBMEZILENBakM3QixFQXhCQSxDQTZCa0IsSUFyQmxCLFVBc0JBLEtBakRpQixFQWlDRSxHQTlDZ0IsS0EyR25CLFlBQ2hCLGFBbEJBLENBekZxQixBQTZJakIsaUJBNUlrQixNQTZDQyxZQTVDa0IsR0FXUCxrQ0FWUiw0Q0E0Q0Msa0NBM0NSLEdBVUssYUFUeEIsT0FVcUIsaUJBQ3JCLHlCQWdDd0Isb0JBQ0QsbUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7IE92ZXJsYXlDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvT3ZlcmxheUNvbnRleHQnXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbydcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2RldmljZXMnXG4gXG5jb25zdCBWaWRlb3NPdmVybGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGhpZGRlbiB9ID0gdXNlQ29udGV4dChPdmVybGF5Q29udGV4dClcbiAgICBjb25zdCBbIHRyYWlsZXJzLCBzZXRUcmFpbGVyc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIFxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYoc2VsZWN0ZWQubWFsX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL2FuaW1lL1wiICsgc2VsZWN0ZWQubWFsX2lkICsgXCIvdmlkZW9zXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0VHJhaWxlcnMocmVzcG9uc2VKc29uLnByb21vKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxbc2VsZWN0ZWRdKVxuXG5cbiAgICBjb25zdCBoaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgYm9vbGVhbjp0cnVlfSlcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhpZGVPdmVybGF5KCl9IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlJz57c2VsZWN0ZWQudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncmF0aW5nJz57c2VsZWN0ZWQuc2NvcmUgPT09IDAgfHwgc2VsZWN0ZWQuc2NvcmUgPT09IHVuZGVmaW5lZCA/ICdObyBjdXJyZW50IHJhdGluZ3MnIDogc2VsZWN0ZWQuc2NvcmUgKyAnLzEwJ308L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZScgc3JjPXtzZWxlY3RlZC5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJhaWxlckNhcm91c2VsJz5cbiAgICAgICAgICAgICAgICB7dHJhaWxlcnMubWFwKCh0cmFpbGVyLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRyYWlsZXJsaW5rXCIgaHJlZj17dHJhaWxlci52aWRlb191cmx9IGtleT17aW5kZXh9IGRhdGEtbGl0eT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhaWxlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dHJhaWxlci5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dHJhaWxlci50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsLjkpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAke2hpZGRlbiA9PT0gdHJ1ZT8gXCJub25lXCIgOiBcImZsZXhcIn07XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OnNjcm9sbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYig3MSw3MSw3MSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbmZvIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyQ2Fyb3VzZWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRyYWlsZXJMaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhOmxpbmsge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50cmFpbGVyIGltZyB7XG5cbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRyYWlsZXIgaW1nOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggIHdoaXRlO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRyYWlsZXIgaW1nOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxNXB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS50YWJsZXR9IHtcblxuICAgICAgICAgICAgICAgICAgICAudHJhaWxlcmxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsZXIgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcblxuICAgICAgICAgICAgICAgICAgICAudHJhaWxlckNhcm91c2VsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudHJhaWxlcmxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhOmxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2MHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjdlbTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsZXIgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zT3ZlcmxheSJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (VideosOverlay);

/***/ })

})
//# sourceMappingURL=index.js.6da0e307af31de693473.hot-update.js.map