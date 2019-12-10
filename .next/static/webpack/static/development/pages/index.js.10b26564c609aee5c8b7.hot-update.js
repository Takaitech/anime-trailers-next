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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1500746376", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]) + " " + "app",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1500746376", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Anime Trailers"), __jsx("link", {
    href: "/styles/lity.min.css",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1500746376", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("script", {
    src: "/jquery.js",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1500746376", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("script", {
    src: "/lity.min.js",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1500746376", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/cye7qdh.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1500746376", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1500746376", [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop]]]) + " " + "center-wrapper",
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
    id: "1500746376",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop],
    __self: this
  }, "html,body,#__next,.app{height:100%;width:100%;margin:0;background-color:rgb(15,15,15);font-family:campaign,sans-serif;font-weight:200;font-style:normal;}.app{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:80%;}.center-wrapper{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;top:25px;max-width:100%;}@media ".concat(_devices__WEBPACK_IMPORTED_MODULE_17__["device"].laptop, "{{width:80%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDTyxBQU91QixBQVdDLEFBT00sQUFXVCxVQUVaLEVBOUJhLFdBQ0YsU0FDd0IsK0JBQ0EsV0FRZCxtQkFPTixFQWRHLGdCQUNFLGtCQUVwQixzQ0FLWSxBQU9XLFVBTHZCLGlGQU1pQix5REFDRyxrQkFDVCxTQUNNLGVBRWpCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL0Nhcm91c2VsXCI7XG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IFZpZGVvc092ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlb3NPdmVybGF5J1xuaW1wb3J0IEZpbHRlckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IFNlYXJjaENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dFwiO1xuaW1wb3J0IEFuaW1lQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCBPdmVybGF5Q29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dFwiXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9kZXZpY2VzJ1xuXG5cbmNvbnN0IEluZGV4ID0gKHsgdG9wQW5pbWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkFuaW1lIFRyYWlsZXJzPC90aXRsZT5cbiAgICAgIDxsaW5rIGhyZWY9XCIvc3R5bGVzL2xpdHkubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8c2NyaXB0IHNyYz1cIi9qcXVlcnkuanNcIj48L3NjcmlwdD4gXG4gICAgICA8c2NyaXB0IHNyYz1cIi9saXR5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9jeWU3cWRoLmNzc1wiPjwvbGluaz5cbiAgICA8L0hlYWQ+XG4gICAgPEZpbHRlckNvbnRleHRQcm92aWRlcj5cbiAgICAgIDxTZWFyY2hDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxBbmltZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8T3ZlcmxheUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgIDxWaWRlb3NPdmVybGF5PjwvVmlkZW9zT3ZlcmxheT5cbiAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8U2VhcmNoPjwvU2VhcmNoPiAgXG4gICAgICAgICAgICAgIDxDYXJvdXNlbCB0b3BBbmltZT17dG9wQW5pbWV9PjwvQ2Fyb3VzZWw+IFxuICAgICAgICAgICAgICA8RmlsdGVycz48L0ZpbHRlcnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICAgICAgPC9PdmVybGF5Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8L0FuaW1lQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPC9TZWFyY2hDb250ZXh0UHJvdmlkZXI+XG4gICAgPC9GaWx0ZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7YFxuXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHksXG4gICAgICAgICNfX25leHQsXG4gICAgICAgIC5hcHAge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpOyAgICAgXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGNhbXBhaWduLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmFwcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5jZW50ZXItd3JhcHBlciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHsgXG4gICAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL2J5cG9wdWxhcml0eVwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLnRvcC5sZW5ndGh9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3BBbmltZTogZGF0YS50b3AubWFwKGVudHJ5ID0+IGVudHJ5KVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/pages/index.js */")));
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
//# sourceMappingURL=index.js.10b26564c609aee5c8b7.hot-update.js.map