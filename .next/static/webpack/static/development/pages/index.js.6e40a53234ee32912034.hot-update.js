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
    className: "jsx-499132965" + " " + "searchBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("input", {
    ref: searchText,
    placeholder: "Search",
    className: "jsx-499132965" + " " + "searchInput",
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
    className: "jsx-499132965" + " " + "submitSearch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "499132965",
    __self: this
  }, ".searchBar.jsx-499132965{min-height:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.searchInput.jsx-499132965{background-color:transparent;border:none;border-bottom:1px solid white;margin:15px;margin-right:10px;color:white;font-size:1.1em;font-family:campaign,sans-serif;font-weight:200;font-style:normal;width:45%;}.submitSearch.jsx-499132965{height:15px;color:white;-webkit-appearance:none;-moz-appearance:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCd0IsQUFHcUMsQUFNYSxBQWNqQixZQUNBLElBcEJBLFFBcUJZLEtBZlosWUFDa0IsT0FlVCxxQkFDVCxFQWZBLFVBZ0JoQixFQWZzQixPQVJDLFdBU1AsWUFDSSxnQkFDaUIsZ0NBQ2pCLGdCQUNFLE1BWnRCLFlBYWMsVUFDZCIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL1NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dCdcblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuXG4gICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dCggU2VhcmNoQ29udGV4dCApXG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IHVzZVJlZignJyk7XG5cbiAgICBjb25zdCB1cGRhdGVTZWFyY2hRdWVyeSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTonVVBEQVRFX1FVRVJZJywgcXVlcnk6IHNlYXJjaFRleHQuY3VycmVudC52YWx1ZX0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hCYXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hJbnB1dFwiIHJlZj17c2VhcmNoVGV4dH0gcGxhY2Vob2xkZXI9XCJTZWFyY2hcIj48L2lucHV0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZ1wiIG9uQ2xpY2s9eyhlKSA9PiB1cGRhdGVTZWFyY2hRdWVyeShlKX0gY2xhc3NOYW1lPVwic3VibWl0U2VhcmNoXCIgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnNlYXJjaEJhciB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc2VhcmNoSW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7ICBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4OyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjYW1wYWlnbiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zdWJtaXRTZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2giXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.6e40a53234ee32912034.hot-update.js.map