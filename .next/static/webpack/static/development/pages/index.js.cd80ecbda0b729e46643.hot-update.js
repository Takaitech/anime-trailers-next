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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4242791977", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', device.laptop]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4242791977", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', device.laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4242791977",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', device.laptop],
    __self: this
  }, ".anime.__jsx-style-dynamic-selector{max-width:".concat(selected.mal_id != anime.mal_id ? "75px" : "auto", ";z-index:50;-webkit-clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";-webkit-filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";filter:").concat(selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', ";}@media ").concat(device.laptop, "{.__jsx-style-dynamic-selector{width:80%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBR3dELEFBTTNCLEFBTUYsVUFFWixFQVA4QywyQkFOakMsV0FDd0MsTUFNZixnRkFDeEMsa0JBTEEiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9BbmltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtBbmltZUNvbnRleHR9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcblxuY29uc3QgQW5pbWUgPSAoe2FuaW1lfSkgPT4ge1xuICAgXG4gICAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIFxuICAgcmV0dXJuICg8ZGl2IG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHt0eXBlOidTRUxFQ1RfQU5JTUUnLHNlbGVjdGVkOiBhbmltZX0pIH0gY2xhc3NOYW1lPVwiYW5pbWVcIj5cbiAgICAgICAgPGltZyBkcmFnZ2FibGU9XCJmYWxzZVwiIHNyYz17YW5pbWUuaW1hZ2VfdXJsfT48L2ltZz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFuaW1lIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/IFwiNzVweFwiIDogXCJhdXRvXCJ9O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMiUgMCwgMTAwJSAwLCA4NSUgMTAwJSwgMCAxMDAlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZCA/ICdncmF5c2NhbGUoMTAwJSknIDogJ25vbmUnfTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgICAgICAgIGZpbHRlcjogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gJ2dyYXlzY2FsZSgxMDAlKScgOiAnbm9uZSd9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ })

})
//# sourceMappingURL=index.js.cd80ecbda0b729e46643.hot-update.js.map