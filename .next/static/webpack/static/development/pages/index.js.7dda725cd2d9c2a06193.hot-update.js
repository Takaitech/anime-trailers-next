webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Header = function Header() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_3__["SearchContext"]),
      search = _useContext.search,
      dispatch = _useContext.dispatch;

  var title = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var toggleSearchMode = function toggleSearchMode() {
    dispatch({
      type: "ACTIVATE_SEARCH",
      active: !search.active
    });

    if (search.active) {
      title.current.classList.remove("slideI");
      title.current.classList.add("slideO");
    } else {
      title.current.classList.remove("slideO");
      title.current.classList.add("slideI");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (search.active) {
      title.current.classList.remove("slideI");
      title.current.classList.add("slideO");
    } else {
      title.current.classList.remove("slideO");
      title.current.classList.add("slideI");
    }
  }, [search]);
  return __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4238709096", [_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    ref: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4238709096", [_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "ANIME TRAILERS"), __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("span", {
    onClick: function onClick() {
      return toggleSearchMode();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4238709096", [_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop]]]) + " " + "searchButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "search"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4238709096",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop],
    __self: this
  }, "header.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;position:relative;height:20%;background-color:#EF5050;}.title.__jsx-style-dynamic-selector{font-family:council,sans-serif;font-weight:400;font-style:normal;text-align:center;font-size:3.5em;text-align:center;margin:0 10px 5px 0px;display:inline-block;-webkit-order:1;-ms-flex-order:1;order:1;color:white;position:absolute;right:5px;bottom:25px;}.searchButton.__jsx-style-dynamic-selector{display:block;color:white;position:absolute;bottom:15px;left:15px;font-size:.75em;}.slideO.__jsx-style-dynamic-selector{-webkit-animation:slideO-__jsx-style-dynamic-selector 1s forwards;animation:slideO-__jsx-style-dynamic-selector 1s forwards;}@-webkit-keyframes slideO-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}100%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}}@keyframes slideO-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}100%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}}.slideI.__jsx-style-dynamic-selector{-webkit-animation:slideI-__jsx-style-dynamic-selector 1s forwards;animation:slideI-__jsx-style-dynamic-selector 1s forwards;}@-webkit-keyframes slideI-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes slideI-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@media ".concat(_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop, "{header.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:80%;-webkit-clip-path:polygon(2% 0,100% 0%,99% 100%,0% 100%);clip-path:polygon(2% 0,100% 0%,99% 100%,0% 100%);}.searchButton.__jsx-style-dynamic-selector{left:35px;font-size:1.5em;}header.__jsx-style-dynamic-selector{width:80%;margin:0 auto;}.title.__jsx-style-dynamic-selector{font-family:council,sans-serif;font-weight:400;font-style:normal;text-align:center;font-size:9em;text-align:center;margin:0 10px 5px 0px;display:inline-block;-webkit-order:1;-ms-flex-order:1;order:1;color:white;position:absolute;right:30px;bottom:0px;}.logoWrapper.__jsx-style-dynamic-selector{margin-right:10%;-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:300px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDUyxBQUcwQyxBQVFPLEFBZ0JsQixBQVNhLEFBS0MsQUFHRyxBQUtGLEFBS0ksQUFHSCxBQVFELEFBT2YsQUFLQSxBQUtzQixBQWdCZixVQXpCRixBQUtELElBbEROLEdBdUVLLE9BcEJqQixFQWxEa0IsQUE2Q2xCLEtBOURnQixBQXVFSSxhQXJEUixHQWpCTSxBQXVFSSxTQXJEWixTQWpCUSxBQXVFSSxDQXJETixFQW9FQyxjQW5FckIsQ0FsQm9CLEFBdUVFLENBNUNsQixBQWdCRSxTQWJGLEFBVUUsSUFuRFMsQUE4REcsQUFxQlEsRUF2RUosUUFtRHNDLENBOUR0QyxPQW1GUSxFQXZFSixPQW9CMUIsQUFhRSxFQTVDYSxXQUNhLEFBa0ZDLEVBdkVKLEdBbUZBLGdCQVhULENBWVcsQ0FuRmYsRUFYWixxQ0FtRm9CLEVBdkVKLFVBd0VVLEVBdkVKLEFBZ0RsQixnQkF3QmUsRUF2RUwsU0F5RVgsQ0F4RWEsVUF3RVosQ0FTQSxDQWhGSiIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NlYXJjaENvbnRleHRcIlxuXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vZGV2aWNlc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWFyY2gsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KCBTZWFyY2hDb250ZXh0IClcblxuICBjb25zdCB0aXRsZSA9IHVzZVJlZigpO1xuICBjb25zdCB0b2dnbGVTZWFyY2hNb2RlID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFDVElWQVRFX1NFQVJDSFwiLCBhY3RpdmU6ICFzZWFyY2guYWN0aXZlfSlcbiAgICBpZiAoc2VhcmNoLmFjdGl2ZSkge1xuICAgICAgdGl0bGUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVJXCIpO1xuICAgICAgdGl0bGUuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2xpZGVPXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZU9cIik7XG4gICAgICB0aXRsZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzbGlkZUlcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaC5hY3RpdmUpIHtcbiAgICAgICAgdGl0bGUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVJXCIpO1xuICAgICAgICB0aXRsZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzbGlkZU9cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZU9cIik7XG4gICAgICAgIHRpdGxlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNsaWRlSVwiKTtcbiAgICAgIH1cbiAgfSxbc2VhcmNoXSlcblxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMSByZWY9e3RpdGxlfSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICBBTklNRSBUUkFJTEVSU1xuICAgICAgPC9oMT5cbiAgICAgIDxTZWFyY2g+PC9TZWFyY2g+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2hCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTZWFyY2hNb2RlKCl9PlxuICAgICAgICBzZWFyY2hcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0VGNTA1MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY291bmNpbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggNXB4IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlYXJjaEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC43NWVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVPIHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZU8gMXMgZm9yd2FyZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZU8ge1xuICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsaWRlSSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUkgMXMgZm9yd2FyZHM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZUkge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIlIDAsIDEwMCUgMCUsIDk5JSAxMDAlLCAwJSAxMDAlKTtcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnNlYXJjaEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY291bmNpbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9nb1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Header.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.7dda725cd2d9c2a06193.hot-update.js.map