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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2351484797", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2351484797", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "filtersWrapper",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2351484797", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "topFilter",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2351484797", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "moviesFilter",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2351484797", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "upcomingFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Upcoming")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2351484797",
    dynamic: [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop],
    __self: this
  }, ".filters.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#212121;-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%;}.filtersWrapper.__jsx-style-dynamic-selector{height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}span.__jsx-style-dynamic-selector{position:relative;color:white;font-size:.9em;z-index:1;}.topFilter.__jsx-style-dynamic-selector{display:block;color:".concat(filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", ";-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.upcomingFilter.__jsx-style-dynamic-selector{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;color:").concat(filter === 'upcoming' ? "white" : "#5F5F5F", ";}.upcomingFilter.__jsx-style-dynamic-selector:hover,.topFilter.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.filters.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(4% 0,100% 0%,96% 100%,0% 100%);clip-path:polygon(4% 0,100% 0%,96% 100%,0% 100%);-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.filtersWrapper.__jsx-style-dynamic-selector{margin-left:13%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}span.__jsx-style-dynamic-selector{display:block;color:white;font-size:2em;z-index:1;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop, "{span.__jsx-style-dynamic-selector{font-size:3.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRmlsdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QndCLEFBRzJDLEFBS1YsQUFRTSxBQU9KLEFBT0EsQUFPTyxBQUttQyxBQUtwQyxBQVVILEFBVUcsWUExREYsRUFlZ0IsQUFPZixBQTJCSCxFQVZDLEFBb0JqQixFQW5EWSxJQWJhLElBdURQLElBakRMLEFBUUUsVUEwQ0QsS0F6Q0osRUFkRyxFQW9CTSxDQW9DbkIsS0F6Q0osb0JBa0JBLFFBTjRCLE9BaUJFLFFBM0M5QixNQUtpQyxFQWdDWixZQWpCTyx1Q0FrQnhCLFdBTWlDLFdBakJFLG1DQU52QyxBQU9BLGFBdEJ1QixnRUF1Q1EsNkJBdEMvQixnRkF5Q0kiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9GaWx0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9GaWx0ZXJDb250ZXh0J1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAnLi4vZGV2aWNlcydcblxuY29uc3QgRmlsdGVycyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBmaWx0ZXIgfSA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dClcbiAgICBjb25zdCBjaGFuZ2VGaWx0ZXIgPSAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJykgPT09ICdUb3AnKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTonQ0hBTkdFX0ZJTFRFUicsIGZpbHRlcjogJ3RvcCd9KVxuICAgICAgICB9IGVsc2UgaWYoIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKSA9PT0gJ1VwY29taW5nJykge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0NIQU5HRV9GSUxURVInLCBmaWx0ZXI6ICd1cGNvbWluZyd9KVxuICAgICAgICB9IGVsc2UgaWYoIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKSA9PT0gJ01vdmllcycpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidDSEFOR0VfRklMVEVSJywgZmlsdGVyOiAnbW92aWUnfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9ICAgXG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcnNXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KGUpID0+IGNoYW5nZUZpbHRlcihlKX0gY2xhc3NOYW1lPVwidG9wRmlsdGVyXCIgZGF0YS1maWx0ZXI9XCJUb3BcIj5Ub3A8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KGUpID0+IGNoYW5nZUZpbHRlcihlKX0gY2xhc3NOYW1lPVwibW92aWVzRmlsdGVyXCIgZGF0YS1maWx0ZXI9XCJNb3ZpZXNcIj5Nb3ZpZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KGUpID0+IGNoYW5nZUZpbHRlcihlKX0gY2xhc3NOYW1lPVwidXBjb21pbmdGaWx0ZXJcIiBkYXRhLWZpbHRlcj1cIlVwY29taW5nXCI+VXBjb21pbmc8L3NwYW4+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YCAgXG4gICAgICAgICAgICAgICAgLmZpbHRlcnN7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAyMCU7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsdGVyc1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wRmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiR7ZmlsdGVyID09PSAndG9wJyB8fCBmaWx0ZXIgPT09ICdpbml0JyA/IFwid2hpdGVcIiA6IFwiIzVGNUY1RlwifTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC51cGNvbWluZ0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2ZpbHRlciA9PT0gJ3VwY29taW5nJyA/IFwid2hpdGVcIiA6IFwiIzVGNUY1RlwifTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudXBjb21pbmdGaWx0ZXI6aG92ZXIsIC50b3BGaWx0ZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH17XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXJze1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDQlIDAsIDEwMCUgMCUsIDk2JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyc1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UuZGVza3RvcH0ge1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Filters.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ })

})
//# sourceMappingURL=index.js.31ec4919c3b8f8c70775.hot-update.js.map