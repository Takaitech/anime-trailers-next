webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Filters */ "./components/Filters.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_VideosOverlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/VideosOverlay */ "./components/VideosOverlay.js");
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../devices */ "./devices.js");


var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;















var Index = function Index(_ref) {
  var topAnime = _ref.topAnime;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2618628547", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]) + " " + "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2618628547", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Anime Trailers"), __jsx("link", {
    href: "/styles/lity.min.css",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2618628547", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("script", {
    src: "/jquery.js",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2618628547", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("script", {
    src: "/lity.min.js",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2618628547", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/cye7qdh.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2618628547", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_components_VideosOverlay__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2618628547", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]) + " " + "center-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    topAnime: topAnime,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_Filters__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2618628547",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop],
    __self: this
  }, "html,body,#__next,.app{height:100%;width:100%;margin:0;background-color:rgb(15,15,15);font-family:campaign,sans-serif;font-weight:200;font-style:normal;}.app{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:80%;margin:0 auto;}.center-wrapper{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;top:25px;max-width:100%;}@media ".concat(_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop, "{{width:80%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDTyxBQU91QixBQVdDLEFBUU0sQUFXVCxVQUVaLEVBL0JhLFdBQ0YsU0FDd0IsK0JBQ0EsV0FRZCxtQkFRTixFQWZHLGdCQUNFLGtCQUVwQixzQ0FLWSxBQVFXLFVBUFAsY0FFaEIsbUVBTWlCLHlEQUNHLGtCQUNULFNBQ00sZUFFakIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fyb3VzZWxcIjtcbmltcG9ydCBGaWx0ZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlcnNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgVmlkZW9zT3ZlcmxheSBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvc092ZXJsYXknXG5pbXBvcnQgRmlsdGVyQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9GaWx0ZXJDb250ZXh0XCI7XG5pbXBvcnQgU2VhcmNoQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgQW5pbWVDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHRzL0FuaW1lQ29udGV4dFwiO1xuaW1wb3J0IE92ZXJsYXlDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHRzL092ZXJsYXlDb250ZXh0XCJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2RldmljZXMnXG5cblxuY29uc3QgSW5kZXggPSAoeyB0b3BBbmltZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+QW5pbWUgVHJhaWxlcnM8L3RpdGxlPlxuICAgICAgPGxpbmsgaHJlZj1cIi9zdHlsZXMvbGl0eS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiL2pxdWVyeS5qc1wiPjwvc2NyaXB0PiBcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2xpdHkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2N5ZTdxZGguY3NzXCI+PC9saW5rPlxuICAgIDwvSGVhZD5cbiAgICA8RmlsdGVyQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPFNlYXJjaENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPEFuaW1lQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgIDxPdmVybGF5Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgPFZpZGVvc092ZXJsYXk+PC9WaWRlb3NPdmVybGF5PlxuICAgICAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2g+PC9TZWFyY2g+ICBcbiAgICAgICAgICAgICAgPENhcm91c2VsIHRvcEFuaW1lPXt0b3BBbmltZX0+PC9DYXJvdXNlbD4gXG4gICAgICAgICAgICAgIDxGaWx0ZXJzPjwvRmlsdGVycz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgICAgICAgICA8L092ZXJsYXlDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDwvQW5pbWVDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8L1NlYXJjaENvbnRleHRQcm92aWRlcj5cbiAgICA8L0ZpbHRlckNvbnRleHRQcm92aWRlcj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG5cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSxcbiAgICAgICAgI19fbmV4dCxcbiAgICAgICAgLmFwcCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7ICAgICBcbiAgICAgICAgICBmb250LWZhbWlseTogY2FtcGFpZ24sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAuYXBwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICB9XG5cbiAgICAgICAgLmNlbnRlci13cmFwcGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0geyBcbiAgICAgICAgICB3aWR0aDogODAlO1xuXG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvYnlwb3B1bGFyaXR5XCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEudG9wLmxlbmd0aH1gKTtcblxuICByZXR1cm4ge1xuICAgIHRvcEFuaW1lOiBkYXRhLnRvcC5tYXAoZW50cnkgPT4gZW50cnkpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/pages/index.js */")));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.jikan.moe/v3/top/anime/1/bypopularity");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.top.length));
          return _context.abrupt("return", {
            topAnime: data.top.map(function (entry) {
              return entry;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e7c2868c4d1471a08807.hot-update.js.map