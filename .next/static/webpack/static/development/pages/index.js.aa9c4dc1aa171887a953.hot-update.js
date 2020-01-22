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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092333524", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092333524", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4092333524",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;-webkit-clip-path:polygon(10% 0,100% 0,85% 100%,0 %);clip-path:polygon(10% 0,100% 0,85% 100%,0 %);}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";-webkit-transition:filter 1s;transition:filter 1s;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.anime.__jsx-style-dynamic-selector{max-width:").concat(selected.mal_id != anime.mal_id ? "150px" : "auto", ";-webkit-transition:max-width 1s;transition:max-width 1s;}.anime.__jsx-style-dynamic-selector:hover>img.__jsx-style-dynamic-selector{-webkit-filter:none;-webkit-filter:none;filter:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR2tELEFBTTNCLEFBUTZCLEFBS25CLFlBWnNCLFFBYTlCLG1CQW5CSCxBQWNlLFdBYnNCLEVBbUJoRCxJQWJvQyx1Q0FRcEMseUNBUHFCLFlBTnZCLHNDQU9BIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uL2RldmljZXNcIjtcblxuY29uc3QgQW5pbWUgPSAoeyBhbmltZSB9KSA9PiB7XG5cblxuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuIFxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogXCJTRUxFQ1RfQU5JTUVcIiwgc2VsZWN0ZWQ6IGFuaW1lIH0pfVxuICAgICAgY2xhc3NOYW1lPVwiYW5pbWVcIlxuICAgID5cbiAgICAgIDxpbWcgZHJhZ2dhYmxlPVwiZmFsc2VcIiBzcmM9e2FuaW1lLmltYWdlX3VybH0+PC9pbWc+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hbmltZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWQgPyBcIjc1cHhcIiA6IFwiYXV0b1wifTtcbiAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAsIDEwMCUgMCwgODUlIDEwMCUsIDAgJSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkXG4gICAgICAgICAgICA/IFwiZ3JheXNjYWxlKDEwMCUpXCJcbiAgICAgICAgICAgIDogXCJub25lXCJ9OyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgZmlsdGVyOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWRcbiAgICAgICAgICAgID8gXCJncmF5c2NhbGUoMTAwJSlcIlxuICAgICAgICAgICAgOiBcIm5vbmVcIn07XG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0ge1xuICAgICAgICAgIC5hbmltZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/IFwiMTUwcHhcIiA6IFwiYXV0b1wifTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAxcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYW5pbWU6aG92ZXIgPiBpbWcge1xuICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltZTtcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.aa9c4dc1aa171887a953.hot-update.js.map