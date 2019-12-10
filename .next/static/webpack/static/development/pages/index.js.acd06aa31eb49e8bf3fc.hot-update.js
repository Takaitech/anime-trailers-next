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
  };

  var _onMouseLeave = function onMouseLeave() {
    setIsDown(false);
  };

  var _onMouseUp = function onMouseUp() {
    setIsDown(false);
  };

  var _onMouseMove = function onMouseMove() {
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
    className: "jsx-3863946185" + " " + "carousel",
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
        lineNumber: 88
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3863946185",
    __self: this
  }, ".carousel.jsx-3863946185{pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;}.carousel.jsx-3863946185{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.jsx-3863946185::-webkit-scrollbar{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZ3QixBQUd3QixBQVNpQixBQUtYLFFBYkEsS0FjakIsV0FMa0MsOEJBQ2xDLDRCQVRxQixpQkFDRixlQUNHLGtCQUNlLGlDQUNyQyIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dCdcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0J1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuaW1wb3J0IEFuaW1lIGZyb20gJy4vQW5pbWUnXG5cblxuXG5jb25zdCBDYXJvdXNlbCA9ICh7dG9wQW5pbWV9KSA9PiB7XG5cbiAgICBjb25zdCBbYW5pbWUsIHNldEFuaW1lXSA9IHVzZVN0YXRlKHRvcEFuaW1lKVxuICAgIGNvbnN0IHtmaWx0ZXJ9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KVxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpXG4gICAgY29uc3Qge3NlbGVjdGVkLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dClcbiAgICBcblxuICAgIGNvbnN0IFtpc0Rvd24sIHNldElzRG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBsZXQgc3RhcnRYO1xuICAgIGxldCBzY3JvbGxMZWZ0O1xuXG4gICAgbGV0IG9uTW91c2VEb3duID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0Rvd24odHJ1ZSlcblxuICAgIH1cblxuICAgIGxldCBvbk1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzRG93bihmYWxzZSlcblxuICAgIH1cblxuICAgIGxldCBvbk1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICAgIHNldElzRG93bihmYWxzZSlcblxuICAgIH1cblxuICAgIGxldCBvbk1vdXNlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYoIWlzRG93bikgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUuY291bnQoaXNEb3duKVxuICAgICAgICBjb25zb2xlLmxvZygnZG93b3JrJylcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBmaWx0ZXIgPT09ICd0b3AnID8gJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS9ieXBvcHVsYXJpdHknIDogJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS91cGNvbWluZydcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24udG9wKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpIClcbiAgICB9LFtmaWx0ZXJdKVxuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgXG4gICAgICAgIGlmKHF1ZXJ5ICE9PSAnJykge1xuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlJdGVtcyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5SXRlbXMuam9pbignJicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBiYXNldXJsID0gJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My9zZWFyY2gvYW5pbWUnO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0dicsXG4gICAgICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHVybCA9IGJhc2V1cmwgKyAnPycgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi5yZXN1bHRzKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSApXG5cbiAgICAgICAgfVxuICAgIH0sW3F1ZXJ5XSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOidTRUxFQ1RfQU5JTUUnLCBzZWxlY3RlZDoge319KVxuICAgIH0sW2FuaW1lXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiIFxuICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IG9uTW91c2VEb3duKGUpfSBcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4gb25Nb3VzZUxlYXZlKGUpfSBcbiAgICAgICAgb25Nb3VzZVVwPXsoZSkgPT4gb25Nb3VzZVVwKGUpfSBcbiAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiBvbk1vdXNlTW92ZShlKX0+XG4gICAgICAgICAgICB7YW5pbWUubWFwKChhbmltZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxBbmltZSBrZXk9e2luZGV4fSBhbmltZT17YW5pbWV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8vIElFIDEwK1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTsgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.acd06aa31eb49e8bf3fc.hot-update.js.map