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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3254416842", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3254416842", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3254416842",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;-webkit-clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);}img.__jsx-style-dynamic-selector{height:35vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";filter:").concat(selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", ";-webkit-transition:filter 1s;transition:filter 1s;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.anime.__jsx-style-dynamic-selector{max-width:").concat(selected.mal_id != anime.mal_id ? "150px" : "auto", ";-webkit-transition:max-width 1s;transition:max-width 1s;}.anime.__jsx-style-dynamic-selector:hover>img.__jsx-style-dynamic-selector{-webkit-filter:none;-webkit-filter:none;filter:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR2tELEFBTTNCLEFBUTZCLEFBS25CLFlBWnNCLFFBYTlCLG1CQW5CSCxBQWNlLFdBYnlCLEVBbUJuRCxJQWJvQyx1Q0FRcEMseUNBUHFCLGtCQU52QixnQ0FPQSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0FuaW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi9kZXZpY2VzXCI7XG5cbmNvbnN0IEFuaW1lID0gKHsgYW5pbWUgfSkgPT4ge1xuXG5cbiAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KTtcbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiBhbmltZSB9KX1cbiAgICAgIGNsYXNzTmFtZT1cImFuaW1lXCJcbiAgICA+XG4gICAgICA8aW1nIGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPXthbmltZS5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYW5pbWUge1xuICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCI3NXB4XCIgOiBcImF1dG9cIn07XG4gICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEyJSAwLCAxMDAlIDAsIDg1JSAxMDAlLCAwIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZFxuICAgICAgICAgICAgPyBcImdyYXlzY2FsZSgxMDAlKVwiXG4gICAgICAgICAgICA6IFwibm9uZVwifTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgIGZpbHRlcjogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkXG4gICAgICAgICAgICA/IFwiZ3JheXNjYWxlKDEwMCUpXCJcbiAgICAgICAgICAgIDogXCJub25lXCJ9O1xuICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAuYW5pbWUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWQgPyBcIjE1MHB4XCIgOiBcImF1dG9cIn07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFuaW1lOmhvdmVyID4gaW1nIHtcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWU7XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.0a32101bd9469e340124.hot-update.js.map