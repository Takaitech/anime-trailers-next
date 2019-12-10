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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3526815204", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "75px" : "auto"]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3526815204", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "75px" : "auto"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3526815204",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "75px" : "auto"],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;-webkit-clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{.anime.__jsx-style-dynamic-selector{max-width:").concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBR3dELEFBTTNCLEFBUStCLFlBUEMsMkJBTmpDLEFBZVgsV0FkbUQsTUFNZixnRkFDeEMsa0JBTEEiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9BbmltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtBbmltZUNvbnRleHR9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7ZGV2aWNlfSBmcm9tICcuLi8uL2RldmljZXMnXG5jb25zdCBBbmltZSA9ICh7YW5pbWV9KSA9PiB7XG4gICBcbiAgICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgXG4gICByZXR1cm4gKDxkaXYgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goe3R5cGU6J1NFTEVDVF9BTklNRScsc2VsZWN0ZWQ6IGFuaW1lfSkgfSBjbGFzc05hbWU9XCJhbmltZVwiPlxuICAgICAgICA8aW1nIGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPXthbmltZS5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYW5pbWUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCI3NXB4XCIgOiBcImF1dG9cIn07XG4gICAgICAgICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEyJSAwLCAxMDAlIDAsIDg1JSAxMDAlLCAwIDEwMCUpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gJ2dyYXlzY2FsZSgxMDAlKScgOiAnbm9uZSd9OyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWQgPyAnZ3JheXNjYWxlKDEwMCUpJyA6ICdub25lJ307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmFuaW1lIHsgXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCI3NXB4XCIgOiBcImF1dG9cIn07XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWUiXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.7294e5f885d163baf1a4.hot-update.js.map