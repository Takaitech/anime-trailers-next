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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2687205101", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2687205101", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2687205101",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;-webkit-clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, "{}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBR3dELEFBTTNCLFlBQ2dDLDJCQU5qQyxXQUN3QyxNQU1mLGdGQUN4QyxrQkFMQSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0FuaW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0FuaW1lQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuaW1wb3J0IHtkZXZpY2V9IGZyb20gJy4uLy4vZGV2aWNlcydcbmNvbnN0IEFuaW1lID0gKHthbmltZX0pID0+IHtcbiAgIFxuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dClcbiAgICBcbiAgIHJldHVybiAoPGRpdiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7dHlwZTonU0VMRUNUX0FOSU1FJyxzZWxlY3RlZDogYW5pbWV9KSB9IGNsYXNzTmFtZT1cImFuaW1lXCI+XG4gICAgICAgIDxpbWcgZHJhZ2dhYmxlPVwiZmFsc2VcIiBzcmM9e2FuaW1lLmltYWdlX3VybH0+PC9pbWc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5hbmltZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWQgPyBcIjc1cHhcIiA6IFwiYXV0b1wifTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTIlIDAsIDEwMCUgMCwgODUlIDEwMCUsIDAgMTAwJSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWQgPyAnZ3JheXNjYWxlKDEwMCUpJyA6ICdub25lJ307IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgICAgICAgICAgICAgICBmaWx0ZXI6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/ICdncmF5c2NhbGUoMTAwJSknIDogJ25vbmUnfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0geyBcbiAgICAgICAgICAgICAgICBcbiAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.b89733d166d085c7b4f9.hot-update.js.map