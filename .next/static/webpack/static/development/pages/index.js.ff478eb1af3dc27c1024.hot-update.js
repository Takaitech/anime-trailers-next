webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _Anime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Anime */ "./components/Anime.js");

var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Carousel = function Carousel(_ref) {
  var topAnime = _ref.topAnime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(topAnime),
      anime = _useState[0],
      setAnime = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_3__["FilterContext"]),
      filter = _useContext.filter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__["SearchContext"]),
      query = _useContext2.query;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_5__["AnimeContext"]),
      selected = _useContext3.selected,
      dispatch = _useContext3.dispatch;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDown = _useState2[0],
      setIsDown = _useState2[1];

  var startX;
  var scrollLeft;

  var _onMouseDown = function onMouseDown() {
    setIsDown(true);
    console.log(isDown);
  };

  var onMouseLeave = function onMouseLeave() {
    setIsDown(false);
  };

  var onMouseUp = function onMouseUp() {
    setIsDown(false);
  };

  var onMouseMove = function onMouseMove() {
    console.log(isDown);
    console.log('dowork');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var url = filter === 'top' ? 'https://api.jikan.moe/v3/top/anime/1/bypopularity' : 'https://api.jikan.moe/v3/top/anime/1/upcoming';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      return setAnime(responseJson.top);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, [filter]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (query !== '') {
      var formatQueryParams = function formatQueryParams(params) {
        var queryItems = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params).map(function (key) {
          return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
        });

        return queryItems.join('&');
      };

      var baseurl = 'https://api.jikan.moe/v3/search/anime';
      var params = {
        q: query,
        page: 1,
        type: 'tv',
        limit: 10
      };
      var url = baseurl + '?' + formatQueryParams(params);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return setAnime(responseJson.results);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: 'SELECT_ANIME',
      selected: {}
    });
  }, [anime]);
  return __jsx("div", {
    onMouseDown: function onMouseDown(e) {
      return _onMouseDown(e);
    },
    className: "jsx-3991870118" + " " + "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3991870118",
    __self: this
  }, ".carousel.jsx-3991870118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;}.carousel.jsx-3991870118{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.jsx-3991870118::-webkit-scrollbar{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZ3QixBQUc4QixBQVFXLEFBS1gsYUFDakIsV0FMa0MsOEJBQ2xDLG9CQVRxQixpQkFDRixlQUNHLGtCQUNlLGlDQUNyQyIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dCdcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0J1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuaW1wb3J0IEFuaW1lIGZyb20gJy4vQW5pbWUnXG5cblxuXG5jb25zdCBDYXJvdXNlbCA9ICh7dG9wQW5pbWV9KSA9PiB7XG5cbiAgICBjb25zdCBbYW5pbWUsIHNldEFuaW1lXSA9IHVzZVN0YXRlKHRvcEFuaW1lKVxuICAgIGNvbnN0IHtmaWx0ZXJ9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KVxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpXG4gICAgY29uc3Qge3NlbGVjdGVkLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dClcbiAgICBcblxuICAgIGNvbnN0IFtpc0Rvd24sIHNldElzRG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBsZXQgc3RhcnRYO1xuICAgIGxldCBzY3JvbGxMZWZ0O1xuXG4gICAgbGV0IG9uTW91c2VEb3duID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0Rvd24odHJ1ZSlcbiAgICAgICAgY29uc29sZS5sb2coaXNEb3duKVxuXG4gICAgfVxuXG4gICAgbGV0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEb3duKGZhbHNlKVxuXG4gICAgfVxuXG4gICAgbGV0IG9uTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEb3duKGZhbHNlKVxuXG4gICAgfVxuXG4gICAgbGV0IG9uTW91c2VNb3ZlID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpc0Rvd24pXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb3dvcmsnKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGZpbHRlciA9PT0gJ3RvcCcgPyAnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL2J5cG9wdWxhcml0eScgOiAnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL3VwY29taW5nJ1xuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi50b3ApKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikgKVxuICAgIH0sW2ZpbHRlcl0pXG4gICAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICAgICAgaWYocXVlcnkgIT09ICcnKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUl0ZW1zID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSl9YClcbiAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnlJdGVtcy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJhc2V1cmwgPSAnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3NlYXJjaC9hbmltZSc7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHE6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3R2JyxcbiAgICAgICAgICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdXJsID0gYmFzZXVybCArICc/JyArIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcyk7XG4gICAgICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0QW5pbWUocmVzcG9uc2VKc29uLnJlc3VsdHMpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpIClcblxuICAgICAgICB9XG4gICAgfSxbcXVlcnldKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J1NFTEVDVF9BTklNRScsIHNlbGVjdGVkOiB7fX0pXG4gICAgfSxbYW5pbWVdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsXCIgb25Nb3VzZURvd249eyhlKSA9PiBvbk1vdXNlRG93bihlKX0+XG4gICAgICAgICAgICB7YW5pbWUubWFwKChhbmltZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxBbmltZSBrZXk9e2luZGV4fSBhbmltZT17YW5pbWV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBoYXMgdG8gYmUgc2Nyb2xsLCBub3QgYXV0byAqL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvLyBJRSAxMCtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7ICAvLyBGaXJlZm94XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.ff478eb1af3dc27c1024.hot-update.js.map