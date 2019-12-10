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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      startX = _useState3[0],
      setStartX = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      scrollLeft = _useState4[0],
      setScrollLeft = _useState4[1];

  var _onMouseDown = function onMouseDown(e) {
    setIsDown(true);
    setScrollLeft(e.pageX);
    console.log(e.pageX);
  };

  var _onMouseLeave = function onMouseLeave(e) {
    setIsDown(false);
  };

  var _onMouseUp = function onMouseUp(e) {
    setIsDown(false);
  };

  var _onMouseMove = function onMouseMove(e) {
    if (!isDown) return;
    console.count(isDown);
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
    onMouseLeave: function onMouseLeave(e) {
      return _onMouseLeave(e);
    },
    onMouseUp: function onMouseUp(e) {
      return _onMouseUp(e);
    },
    onMouseMove: function onMouseMove(e) {
      return _onMouseMove(e);
    },
    className: "jsx-1325483258" + " " + "carousel ".concat(isDown === true ? 'isDown' : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1325483258",
    __self: this
  }, ".carousel.jsx-1325483258{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;border-bottom:6px solid rgb(0,0,0);}.carousel.jsx-1325483258{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.jsx-1325483258::-webkit-scrollbar{display:none;}.isDown.jsx-1325483258{border-bottom:6px solid rgb(51,51,51);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZ3QixBQUdnQyxBQVlTLEFBS1gsQUFJeUIsYUFIMUMsRUFqQmlCLFNBWWlCLGNBU2xDLGdCQVJBLG1DQVpxQixpQkFDRixlQUNHLGtCQUNlLGlDQUNkLG1CQUNnQixtQ0FFdkMiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHQnXG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCBBbmltZSBmcm9tICcuL0FuaW1lJ1xuXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAoe3RvcEFuaW1lfSkgPT4ge1xuXG4gICAgY29uc3QgW2FuaW1lLCBzZXRBbmltZV0gPSB1c2VTdGF0ZSh0b3BBbmltZSlcbiAgICBjb25zdCB7ZmlsdGVyfSA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dClcbiAgICBjb25zdCB7cXVlcnl9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KVxuICAgIGNvbnN0IHtzZWxlY3RlZCwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgXG5cbiAgICBjb25zdCBbaXNEb3duLCBzZXRJc0Rvd25dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbc2Nyb2xsTGVmdCwgc2V0U2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZSgpXG5cbiAgICBsZXQgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuICAgICAgICBzZXRJc0Rvd24odHJ1ZSlcbiAgICAgICAgc2V0U2Nyb2xsTGVmdChlLnBhZ2VYKVxuICAgICAgICBjb25zb2xlLmxvZyhlLnBhZ2VYKVxuICAgIH1cblxuICAgIGxldCBvbk1vdXNlTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICBzZXRJc0Rvd24oZmFsc2UpXG5cbiAgICB9XG5cbiAgICBsZXQgb25Nb3VzZVVwID0gKGUpID0+IHtcbiAgICAgICAgc2V0SXNEb3duKGZhbHNlKVxuXG4gICAgfVxuXG4gICAgbGV0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgaWYoIWlzRG93bikgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuY291bnQoaXNEb3duKVxuICAgICAgICBjb25zb2xlLmxvZygnZG93b3JrJylcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBmaWx0ZXIgPT09ICd0b3AnID8gJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS9ieXBvcHVsYXJpdHknIDogJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS91cGNvbWluZydcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24udG9wKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpIClcbiAgICB9LFtmaWx0ZXJdKVxuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgXG4gICAgICAgIGlmKHF1ZXJ5ICE9PSAnJykge1xuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlJdGVtcyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5SXRlbXMuam9pbignJicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBiYXNldXJsID0gJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My9zZWFyY2gvYW5pbWUnO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0dicsXG4gICAgICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHVybCA9IGJhc2V1cmwgKyAnPycgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi5yZXN1bHRzKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSApXG5cbiAgICAgICAgfVxuICAgIH0sW3F1ZXJ5XSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOidTRUxFQ1RfQU5JTUUnLCBzZWxlY3RlZDoge319KVxuICAgIH0sW2FuaW1lXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJvdXNlbCAke2lzRG93biA9PT0gdHJ1ZSA/ICdpc0Rvd24nIDogXCJcIn1gfVxuICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IG9uTW91c2VEb3duKGUpfSBcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4gb25Nb3VzZUxlYXZlKGUpfSBcbiAgICAgICAgb25Nb3VzZVVwPXsoZSkgPT4gb25Nb3VzZVVwKGUpfSBcbiAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiBvbk1vdXNlTW92ZShlKX0+XG4gICAgICAgICAgICB7YW5pbWUubWFwKChhbmltZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxBbmltZSBrZXk9e2luZGV4fSBhbmltZT17YW5pbWV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTc1cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogaGFzIHRvIGJlIHNjcm9sbCwgbm90IGF1dG8gKi9cbiAgICAgICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiKDAsMCwwKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8vIElFIDEwK1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTsgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzRG93biB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYig1MSw1MSw1MSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.6a077611849af6bf435c.hot-update.js.map