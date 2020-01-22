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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3559278829", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3559278829", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "filtersWrapper",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3559278829", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "topFilter",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3559278829", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "moviesFilter",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3559278829", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "upcomingFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Upcoming")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3559278829",
    dynamic: [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop],
    __self: this
  }, ".filters.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#212121;-webkit-flex:0 0 %;-ms-flex:0 0 %;flex:0 0 %;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.filtersWrapper.__jsx-style-dynamic-selector{height:75%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}span.__jsx-style-dynamic-selector{position:relative;color:white;font-size:1em;z-index:1;}.topFilter.__jsx-style-dynamic-selector{display:block;color:".concat(filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", ";-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;position:relative;left:4%;}.upcomingFilter.__jsx-style-dynamic-selector{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;color:").concat(filter === 'upcoming' ? "white" : "#5F5F5F", ";}.moviesFilter.__jsx-style-dynamic-selector{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;color:").concat(filter === 'movie' ? "white" : "#5F5F5F", ";position:relative;left:2%;}.upcomingFilter.__jsx-style-dynamic-selector:hover,.topFilter.__jsx-style-dynamic-selector:hover,.moviesFilter.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.filters.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(4% 0,100% 0%,96% 100%,0% 100%);clip-path:polygon(4% 0,100% 0%,96% 100%,0% 100%);-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.filtersWrapper.__jsx-style-dynamic-selector{margin-left:13%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}span.__jsx-style-dynamic-selector{display:block;color:white;font-size:1.7em;z-index:1;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop, "{span.__jsx-style-dynamic-selector{font-size:3.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRmlsdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QndCLEFBRzJDLEFBUVgsQUFTTyxBQU9KLEFBU0EsQUFPQSxBQVNPLEFBS21DLEFBS3BDLEFBVUgsQUFVRyxXQXRFRixHQWdCZ0IsQUFTZixBQU9BLEFBNkJILEVBVkMsQUFvQmpCLEVBOURZLElBakJhLElBc0VMLEdBN0RQLENBU0MsWUFxREEsRUFwREosR0FsQkMsRUF3QlEsR0ErQ25CLEVBcERKLHFCQTZCQSxRQWY0QixBQU9BLE9BbUJFLEVBMURiLFdBUWdCLEdBNENaLFlBNUJPLHVDQTZCeEIsU0FwRG1CLEVBMERjLFdBMUJFLEFBT0EsbUNBZmpCLEFBU3RCLEFBT3NCLFlBaENDLE1BaUJYLEFBZ0JBLFFBZlosQUFnQkEsbUJBekNBLGdDQTBEK0IsNEJBbERoQixXQUNmLHNFQW9ESSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0ZpbHRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHQnXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9kZXZpY2VzJ1xuXG5jb25zdCBGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KVxuICAgIGNvbnN0IGNoYW5nZUZpbHRlciA9IChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKSA9PT0gJ1RvcCcpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidDSEFOR0VfRklMVEVSJywgZmlsdGVyOiAndG9wJ30pXG4gICAgICAgIH0gZWxzZSBpZiggZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpID09PSAnVXBjb21pbmcnKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTonQ0hBTkdFX0ZJTFRFUicsIGZpbHRlcjogJ3VwY29taW5nJ30pXG4gICAgICAgIH0gZWxzZSBpZiggZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpID09PSAnTW92aWVzJykge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0NIQU5HRV9GSUxURVInLCBmaWx0ZXI6ICdtb3ZpZSd9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0gICBcbiAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlRmlsdGVyKGUpfSBjbGFzc05hbWU9XCJ0b3BGaWx0ZXJcIiBkYXRhLWZpbHRlcj1cIlRvcFwiPlRvcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlRmlsdGVyKGUpfSBjbGFzc05hbWU9XCJtb3ZpZXNGaWx0ZXJcIiBkYXRhLWZpbHRlcj1cIk1vdmllc1wiPk1vdmllczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlRmlsdGVyKGUpfSBjbGFzc05hbWU9XCJ1cGNvbWluZ0ZpbHRlclwiIGRhdGEtZmlsdGVyPVwiVXBjb21pbmdcIj5VcGNvbWluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgICBcbiAgICAgICAgICAgICAgICAuZmlsdGVyc3tcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwICU7IFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5maWx0ZXJzV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcEZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjoke2ZpbHRlciA9PT0gJ3RvcCcgfHwgZmlsdGVyID09PSAnaW5pdCcgPyBcIndoaXRlXCIgOiBcIiM1RjVGNUZcIn07ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudXBjb21pbmdGaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtmaWx0ZXIgPT09ICd1cGNvbWluZycgPyBcIndoaXRlXCIgOiBcIiM1RjVGNUZcIn07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm1vdmllc0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2ZpbHRlciA9PT0gJ21vdmllJyA/IFwid2hpdGVcIiA6IFwiIzVGNUY1RlwifTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudXBjb21pbmdGaWx0ZXI6aG92ZXIsIC50b3BGaWx0ZXI6aG92ZXIsIC5tb3ZpZXNGaWx0ZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH17XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXJze1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDQlIDAsIDEwMCUgMCUsIDk2JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyc1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5kZXNrdG9wfSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnMiXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Filters.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ })

})
//# sourceMappingURL=index.js.a41074d70189df92f37a.hot-update.js.map