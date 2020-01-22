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
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Search = function Search() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_2__["SearchContext"]),
      search = _useContext.search,
      dispatch = _useContext.dispatch;

  var searchText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

  var updateSearchQuery = function updateSearchQuery(e) {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_QUERY',
      query: searchText.current.value
    });
    dispatch({
      type: 'ACTIVATE_SEARCH',
      active: !search.active
    });
    searchText.current.blur();
    searchText.current.value = '';
  };

  var unactivateSearch = function unactivateSearch() {
    dispatch({
      type: 'ACTIVATE_SEARCH',
      active: !search.active
    });
    searchText.current.value = '';
  };

  if (search.active === true) {
    searchText.current.focus();
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1862268457", [_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop]]]) + " " + "searchBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("form", {
    onSubmit: function onSubmit(e) {
      return updateSearchQuery(e);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1862268457", [_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "''", __jsx("input", {
    type: "text",
    onClick: function onClick(e) {
      return updateSearchQuery(e);
    },
    onFocus: function onFocus() {
      return searchText.current.value = '';
    },
    onBlur: function onBlur() {
      return unactivateSearch();
    },
    ref: searchText,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1862268457", [_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop]]]) + " " + "searchInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1862268457",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop],
    __self: this
  }, ".searchBar.__jsx-style-dynamic-selector{min-height:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;bottom:49px;left:-16px;width:99%;}.searchInput.__jsx-style-dynamic-selector{background-color:transparent;border:none;border-bottom:3px solid white;margin-bottom:15px;margin-right:10px;color:white;font-size:1.5em;font-family:campaign,sans-serif;font-weight:200;font-style:normal;width:100%;outline:none;-webkit-appearance:none;padding-left:10%;position:relative;top:10px;-webkit-appearance:none;border-radius:0;}.searchInput.__jsx-style-dynamic-selector:focus{outline:none;border-bottom:4px solid white;-webkit-box-shadow:none;box-shadow:none;}form.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}@media ".concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.searchInput.__jsx-style-dynamic-selector{border-bottom:5px solid white;padding-left:2%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDd0IsQUFJcUMsQUFVYSxBQXFCaEIsQUFRTSxBQU1lLGFBYkosR0EvQmxCLGFBVUEsQ0FtQ1EsV0FsQ1UsRUFzQk4sR0FjeEIscUJBYmdCLElBdEJHLFlBdUJ2QixPQWxDdUIsQUFZRCxHQTJCdkIsV0FBQyxJQTFCZ0IsWUFDSSxnQkFDaUIsZ0NBQ2pCLGVBZkUsQ0FnQkEsaUJBZk4sQ0FnQkQsV0FmQSxBQWdCRSxXQWZKLEVBZ0JlLFFBZjVCLGdCQWdCcUIsaUJBQ0Esa0JBQ1IsU0FDZSx3QkFDUixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NlYXJjaENvbnRleHQnXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9kZXZpY2VzJ1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG5cbiAgICBjb25zdCB7IHNlYXJjaCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoIFNlYXJjaENvbnRleHQgKVxuICAgIGNvbnN0IHNlYXJjaFRleHQgPSB1c2VSZWYoJycpO1xuXG4gICAgY29uc3QgdXBkYXRlU2VhcmNoUXVlcnkgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J1VQREFURV9RVUVSWScsIHF1ZXJ5OiBzZWFyY2hUZXh0LmN1cnJlbnQudmFsdWV9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTonQUNUSVZBVEVfU0VBUkNIJywgYWN0aXZlOiAhc2VhcmNoLmFjdGl2ZX0pXG4gICAgICAgIHNlYXJjaFRleHQuY3VycmVudC5ibHVyKClcbiAgICAgICAgc2VhcmNoVGV4dC5jdXJyZW50LnZhbHVlID0gJydcbiAgICB9XG5cbiAgICBjb25zdCB1bmFjdGl2YXRlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTonQUNUSVZBVEVfU0VBUkNIJywgYWN0aXZlOiAhc2VhcmNoLmFjdGl2ZX0pXG4gICAgICAgIHNlYXJjaFRleHQuY3VycmVudC52YWx1ZSA9ICcnXG5cblxuICAgIH1cblxuICAgIGlmKHNlYXJjaC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgc2VhcmNoVGV4dC5jdXJyZW50LmZvY3VzKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaEJhclwiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB1cGRhdGVTZWFyY2hRdWVyeShlKX0+JydcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJzZWFyY2hJbnB1dFwiIG9uQ2xpY2s9eyhlKSA9PiB1cGRhdGVTZWFyY2hRdWVyeShlKSB9IG9uRm9jdXM9eygpID0+IHNlYXJjaFRleHQuY3VycmVudC52YWx1ZSA9ICcnfSBvbkJsdXI9eygpID0+IHVuYWN0aXZhdGVTZWFyY2goKX0gcmVmPXtzZWFyY2hUZXh0fSA+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICAgIC5zZWFyY2hCYXIge1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA0OXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTZweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6OTklO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zZWFyY2hJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTsgIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjYW1wYWlnbiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zZWFyY2hJbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB3aGl0ZTsgIFxuXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2hJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMiU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.ff79942948486760d457.hot-update.js.map