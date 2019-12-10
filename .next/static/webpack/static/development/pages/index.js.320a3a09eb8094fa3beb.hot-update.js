webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Anime.js":
/*!*****************************!*\
  !*** ./components/Anime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Anime = function Anime(_ref) {
  var anime = _ref.anime;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__["AnimeContext"]),
      selected = _useContext.selected,
      dispatch = _useContext.dispatch;

  return __jsx("div", {
    onClick: function onClick() {
      return dispatch({
        type: 'SELECT_ANIME',
        selected: anime
      });
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["226331720", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "75px" : "auto"]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["226331720", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "75px" : "auto"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "226331720",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "75px" : "auto"],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;-webkit-clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.anime.__jsx-style-dynamic-selector{max-width:").concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBR3dELEFBTTNCLEFBUStCLFlBUEMsMkJBTmpDLEFBZ0JYLFdBZm1ELE1BTWYsZ0ZBQ3hDLGtCQUxBIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QW5pbWVDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0cy9BbmltZUNvbnRleHQnXG5pbXBvcnQge2RldmljZX0gZnJvbSAnLi4vLi9kZXZpY2VzJ1xuY29uc3QgQW5pbWUgPSAoe2FuaW1lfSkgPT4ge1xuICAgXG4gICAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIFxuICAgcmV0dXJuICg8ZGl2IG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHt0eXBlOidTRUxFQ1RfQU5JTUUnLHNlbGVjdGVkOiBhbmltZX0pIH0gY2xhc3NOYW1lPVwiYW5pbWVcIj5cbiAgICAgICAgPGltZyBkcmFnZ2FibGU9XCJmYWxzZVwiIHNyYz17YW5pbWUuaW1hZ2VfdXJsfT48L2ltZz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFuaW1lIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/IFwiNzVweFwiIDogXCJhdXRvXCJ9O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMiUgMCwgMTAwJSAwLCA4NSUgMTAwJSwgMCAxMDAlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/ICdncmF5c2NhbGUoMTAwJSknIDogJ25vbmUnfTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgICAgICAgIGZpbHRlcjogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gJ2dyYXlzY2FsZSgxMDAlKScgOiAnbm9uZSd9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5hbmltZSB7IFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/IFwiNzVweFwiIDogXCJhdXRvXCJ9O1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWUiXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.320a3a09eb8094fa3beb.hot-update.js.map