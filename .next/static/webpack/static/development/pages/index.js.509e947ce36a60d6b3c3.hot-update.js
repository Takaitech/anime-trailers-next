webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Filters.js":
/*!*******************************!*\
  !*** ./components/Filters.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Filters.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Filters = function Filters() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_2__["FilterContext"]),
      dispatch = _useContext.dispatch,
      filter = _useContext.filter;

  var changeFilter = function changeFilter(e) {
    if (e.target.getAttribute('data-filter') === 'Top') {
      dispatch({
        type: 'CHANGE_FILTER',
        filter: 'top'
      });
    } else if (e.target.getAttribute('data-filter') === 'Upcoming') {
      dispatch({
        type: 'CHANGE_FILTER',
        filter: 'upcoming'
      });
    } else if (e.target.getAttribute('data-filter') === 'Movies') {
      dispatch({
        type: 'CHANGE_FILTER',
        filter: 'movie'
      });
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1429517863", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1429517863", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "filtersWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    onClick: function onClick(e) {
      return changeFilter(e);
    },
    "data-filter": "Top",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1429517863", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "topFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Top"), __jsx("span", {
    onClick: function onClick(e) {
      return changeFilter(e);
    },
    "data-filter": "Movies",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1429517863", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "moviesFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Movies"), __jsx("span", {
    onClick: function onClick(e) {
      return changeFilter(e);
    },
    "data-filter": "Upcoming",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1429517863", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "upcomingFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Upcoming")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1429517863",
    dynamic: [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop],
    __self: this
  }, ".filters.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#212121;-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.filtersWrapper.__jsx-style-dynamic-selector{height:75%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}span.__jsx-style-dynamic-selector{position:relative;color:white;font-size:1em;z-index:1;}.topFilter.__jsx-style-dynamic-selector{display:block;color:".concat(filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", ";-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.upcomingFilter.__jsx-style-dynamic-selector{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;color:").concat(filter === 'upcoming' ? "white" : "#5F5F5F", ";}.moviesFilter.__jsx-style-dynamic-selector{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;color:").concat(filter === 'movie' ? "white" : "#5F5F5F", ";}.upcomingFilter.__jsx-style-dynamic-selector:hover,.topFilter.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.filters.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(4% 0,100% 0%,96% 100%,0% 100%);clip-path:polygon(4% 0,100% 0%,96% 100%,0% 100%);-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.filtersWrapper.__jsx-style-dynamic-selector{margin-left:13%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}span.__jsx-style-dynamic-selector{display:block;color:white;font-size:1.7em;z-index:1;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop, "{span.__jsx-style-dynamic-selector{font-size:3.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRmlsdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QndCLEFBRzJDLEFBT1gsQUFRTyxBQU9KLEFBT0EsQUFPQSxBQU9PLEFBS21DLEFBS3BDLEFBVUgsQUFVRyxXQWpFRixHQWVnQixBQU9mLEFBT0EsQUEyQkgsRUFWQyxBQW9CakIsRUExRFksSUFmYSxJQWdFTCxHQXhEUCxDQVFDLFlBaURBLEVBaERKLEdBaEJHLEVBc0JNLEdBMkNuQixFQWhESixxQkF5QkEsUUFiNEIsQUFPQSxPQWlCRSxRQXBEYixLQU9nQixHQXVDWixZQXhCTyx1Q0F5QnhCLFdBTWlDLElBcERkLE9BNEJnQixBQU9BLG1DQWJ2QyxBQU9BLEFBT0EsWUE3QnVCLHVDQU52QiwwQkFvRCtCLDRCQTdDL0IsaUZBZ0RJIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRmlsdGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dCdcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2RldmljZXMnXG5cbmNvbnN0IEZpbHRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgZmlsdGVyIH0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpXG4gICAgY29uc3QgY2hhbmdlRmlsdGVyID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpID09PSAnVG9wJykge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0NIQU5HRV9GSUxURVInLCBmaWx0ZXI6ICd0b3AnfSlcbiAgICAgICAgfSBlbHNlIGlmKCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJykgPT09ICdVcGNvbWluZycpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidDSEFOR0VfRklMVEVSJywgZmlsdGVyOiAndXBjb21pbmcnfSlcbiAgICAgICAgfSBlbHNlIGlmKCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJykgPT09ICdNb3ZpZXMnKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTonQ0hBTkdFX0ZJTFRFUicsIGZpbHRlcjogJ21vdmllJ30pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSAgIFxuICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJzV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VGaWx0ZXIoZSl9IGNsYXNzTmFtZT1cInRvcEZpbHRlclwiIGRhdGEtZmlsdGVyPVwiVG9wXCI+VG9wPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VGaWx0ZXIoZSl9IGNsYXNzTmFtZT1cIm1vdmllc0ZpbHRlclwiIGRhdGEtZmlsdGVyPVwiTW92aWVzXCI+TW92aWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VGaWx0ZXIoZSl9IGNsYXNzTmFtZT1cInVwY29taW5nRmlsdGVyXCIgZGF0YS1maWx0ZXI9XCJVcGNvbWluZ1wiPlVwY29taW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2AgIFxuICAgICAgICAgICAgICAgIC5maWx0ZXJze1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMjAlOyBcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbHRlcnNXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50b3BGaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHtmaWx0ZXIgPT09ICd0b3AnIHx8IGZpbHRlciA9PT0gJ2luaXQnID8gXCJ3aGl0ZVwiIDogXCIjNUY1RjVGXCJ9OyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnVwY29taW5nRmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7ZmlsdGVyID09PSAndXBjb21pbmcnID8gXCJ3aGl0ZVwiIDogXCIjNUY1RjVGXCJ9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5tb3ZpZXNGaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtmaWx0ZXIgPT09ICdtb3ZpZScgPyBcIndoaXRlXCIgOiBcIiM1RjVGNUZcIn07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnVwY29taW5nRmlsdGVyOmhvdmVyLCAudG9wRmlsdGVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9e1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig0JSAwLCAxMDAlIDAlLCA5NiUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcnNXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMyU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UuZGVza3RvcH0ge1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Filters.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ })

})
//# sourceMappingURL=index.js.509e947ce36a60d6b3c3.hot-update.js.map