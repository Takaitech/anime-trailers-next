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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1933701325", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1933701325", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1933701325",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;-webkit-clip-path:polygon(10% 0,100% 0,85% 100%,1% 100%);clip-path:polygon(10% 0,100% 0,85% 100%,1% 100%);}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";-webkit-transition:filter 1s;transition:filter 1s;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.anime.__jsx-style-dynamic-selector{max-width:").concat(selected.mal_id != anime.mal_id ? "150px" : "auto", ";-webkit-transition:max-width 1s;transition:max-width 1s;}.anime.__jsx-style-dynamic-selector:hover>img.__jsx-style-dynamic-selector{-webkit-filter:none;-webkit-filter:none;filter:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR2tELEFBTTNCLEFBUTZCLEFBS25CLFlBWnNCLFFBYTlCLG1CQW5CSCxBQWNlLFdBYjBCLEVBbUJwRCxJQWJvQyx1Q0FRcEMseUNBUHFCLG9CQU52Qiw4QkFPQSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0FuaW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi9kZXZpY2VzXCI7XG5cbmNvbnN0IEFuaW1lID0gKHsgYW5pbWUgfSkgPT4ge1xuXG5cbiAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KTtcbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiBhbmltZSB9KX1cbiAgICAgIGNsYXNzTmFtZT1cImFuaW1lXCJcbiAgICA+XG4gICAgICA8aW1nIGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPXthbmltZS5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYW5pbWUge1xuICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCI3NXB4XCIgOiBcImF1dG9cIn07XG4gICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwLCAxMDAlIDAsIDg1JSAxMDAlLCAxJSAxMDAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWRcbiAgICAgICAgICAgID8gXCJncmF5c2NhbGUoMTAwJSlcIlxuICAgICAgICAgICAgOiBcIm5vbmVcIn07IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgICAgICAgICBmaWx0ZXI6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZFxuICAgICAgICAgICAgPyBcImdyYXlzY2FsZSgxMDAlKVwiXG4gICAgICAgICAgICA6IFwibm9uZVwifTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMXM7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XG4gICAgICAgICAgLmFuaW1lIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCIxNTBweFwiIDogXCJhdXRvXCJ9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDFzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbmltZTpob3ZlciA+IGltZyB7XG4gICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lO1xuIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.25bbda55ec8725a47fb9.hot-update.js.map