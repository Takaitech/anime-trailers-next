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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["706434657", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none']]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["706434657", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "706434657",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none'],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBR3dELEFBSzNCLFlBQ2dDLDJCQUxqQyxXQUVmLE1BSXdDLGdGQUN4QyIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0FuaW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0FuaW1lQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuXG5jb25zdCBBbmltZSA9ICh7YW5pbWV9KSA9PiB7XG4gICBcbiAgICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgXG4gICByZXR1cm4gKDxkaXYgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goe3R5cGU6J1NFTEVDVF9BTklNRScsc2VsZWN0ZWQ6IGFuaW1lfSkgfSBjbGFzc05hbWU9XCJhbmltZVwiPlxuICAgICAgICA8aW1nIGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPXthbmltZS5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYW5pbWUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCI3NXB4XCIgOiBcImF1dG9cIn07XG4gICAgICAgICAgICAgICAgei1pbmRleDogNTA7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWQgPyAnZ3JheXNjYWxlKDEwMCUpJyA6ICdub25lJ307IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgICAgICAgICAgICAgICBmaWx0ZXI6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/ICdncmF5c2NhbGUoMTAwJSknIDogJ25vbmUnfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBbmltZSJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.41acaf40561b708da965.hot-update.js.map