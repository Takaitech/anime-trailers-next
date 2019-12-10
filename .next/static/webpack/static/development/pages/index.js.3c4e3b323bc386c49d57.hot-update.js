webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Search = function Search() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_2__["SearchContext"]),
      dispatch = _useContext.dispatch;

  var searchText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

  var updateSearchQuery = function updateSearchQuery(e) {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_QUERY',
      query: searchText.current.value
    });
  };

  return __jsx("div", {
    className: "jsx-1130896420" + " " + "searchBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("input", {
    ref: searchText,
    placeholder: "Search",
    className: "jsx-1130896420" + " " + "searchInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("img", {
    src: "/images/search-icon.png",
    onClick: function onClick(e) {
      return updateSearchQuery(e);
    },
    type: "submit",
    className: "jsx-1130896420" + " " + "submitSearch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1130896420",
    __self: this
  }, ".searchBar.jsx-1130896420{min-height:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.searchInput.jsx-1130896420{background-color:transparent;border:none;border-bottom:1px solid white;margin:15px;margin-right:10px;color:white;font-size:1em;font-family:campaign,sans-serif;font-weight:200;font-style:normal;width:45%;}.submitSearch.jsx-1130896420{height:15px;color:white;-webkit-appearance:none;-moz-appearance:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCd0IsQUFHcUMsQUFNYSxBQWNqQixZQUNBLElBcEJBLFFBcUJZLEtBZlosWUFDa0IsT0FlVCxxQkFDVCxFQWZBLFVBZ0JoQixFQWZzQixPQVJDLFdBU1AsWUFDRSxjQUNtQixnQ0FDakIsZ0JBQ0UsUUFadEIsVUFhYyxVQUNkIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0J1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG5cbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KCBTZWFyY2hDb250ZXh0IClcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gdXNlUmVmKCcnKTtcblxuICAgIGNvbnN0IHVwZGF0ZVNlYXJjaFF1ZXJ5ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOidVUERBVEVfUVVFUlknLCBxdWVyeTogc2VhcmNoVGV4dC5jdXJyZW50LnZhbHVlfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaEJhclwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaElucHV0XCIgcmVmPXtzZWFyY2hUZXh0fSBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2VhcmNoLWljb24ucG5nXCIgb25DbGljaz17KGUpID0+IHVwZGF0ZVNlYXJjaFF1ZXJ5KGUpfSBjbGFzc05hbWU9XCJzdWJtaXRTZWFyY2hcIiB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuc2VhcmNoQmFyIHtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zZWFyY2hJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsgIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7IFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjYW1wYWlnbiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zdWJtaXRTZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2giXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.3c4e3b323bc386c49d57.hot-update.js.map