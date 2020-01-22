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
        type: "SELECT_ANIME",
        selected: anime
      });
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2859107405", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2859107405", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2859107405",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;-webkit-clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);height:100%;}img.__jsx-style-dynamic-selector{height:40vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";-webkit-transition:filter 1s;transition:filter 1s;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.anime.__jsx-style-dynamic-selector{max-width:").concat(selected.mal_id != anime.mal_id ? "150px" : "auto", ";-webkit-transition:max-width 1s;transition:max-width 1s;}.anime.__jsx-style-dynamic-selector:hover>img.__jsx-style-dynamic-selector{-webkit-filter:none;-webkit-filter:none;filter:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR2tELEFBTzNCLEFBUTZCLEFBS25CLFlBWnNCLFFBYTlCLG1CQXBCSCxBQWVlLFdBZHlCLEVBb0JuRCxJQWJvQyx1Q0FRcEMseUNBUHFCLGtCQVBULFlBQ2Qsb0JBT0EiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9BbmltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0FuaW1lQ29udGV4dFwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4vZGV2aWNlc1wiO1xuXG5jb25zdCBBbmltZSA9ICh7IGFuaW1lIH0pID0+IHtcblxuXG4gIGNvbnN0IHsgc2VsZWN0ZWQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dCk7XG4gXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIlNFTEVDVF9BTklNRVwiLCBzZWxlY3RlZDogYW5pbWUgfSl9XG4gICAgICBjbGFzc05hbWU9XCJhbmltZVwiXG4gICAgPlxuICAgICAgPGltZyBkcmFnZ2FibGU9XCJmYWxzZVwiIHNyYz17YW5pbWUuaW1hZ2VfdXJsfT48L2ltZz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFuaW1lIHtcbiAgICAgICAgICBtYXgtd2lkdGg6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/IFwiNzVweFwiIDogXCJhdXRvXCJ9O1xuICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMiUgMCwgMTAwJSAwLCA4NSUgMTAwJSwgMCAxMDAlKTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkXG4gICAgICAgICAgICA/IFwiZ3JheXNjYWxlKDEwMCUpXCJcbiAgICAgICAgICAgIDogXCJub25lXCJ9OyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgZmlsdGVyOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWRcbiAgICAgICAgICAgID8gXCJncmF5c2NhbGUoMTAwJSlcIlxuICAgICAgICAgICAgOiBcIm5vbmVcIn07XG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0ge1xuICAgICAgICAgIC5hbmltZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/IFwiMTUwcHhcIiA6IFwiYXV0b1wifTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAxcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYW5pbWU6aG92ZXIgPiBpbWcge1xuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltZTtcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.9d8d31791d6459058797.hot-update.js.map