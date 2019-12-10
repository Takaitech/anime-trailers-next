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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('0%'),
      scrollPercent = _useState2[0],
      setScrollPercent = _useState2[1];

  var carouselSelector = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDown = _useState3[0],
      setIsDown = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      startX = _useState4[0],
      setStartX = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      scrollLeft = _useState5[0],
      setScrollLeft = _useState5[1];

  var _onMouseDown = function onMouseDown(e) {
    setIsDown(true);
    setStartX(e.pageX - carouselSelector.current.offsetLeft);
    setScrollLeft(carouselSelector.current.scrollLeft);
  };

  var _onMouseLeave = function onMouseLeave(e) {
    setIsDown(false);
  };

  var _onMouseUp = function onMouseUp(e) {
    setIsDown(false);
  };

  var _onMouseMove = function onMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX;
    var distance = (x - startX) * 2.5;
    carouselSelector.current.scrollLeft = scrollLeft - distance;
    setScrollPercent(carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100);
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    ref: carouselSelector,
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
    className: "jsx-3125133541" + " " + "carousel ".concat(isDown === true ? 'isDown' : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3125133541",
    __self: this
  }, ".carousel.jsx-3125133541{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;border-bottom:6px solid rgb(0,0,0);}.carousel.jsx-3125133541{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.jsx-3125133541::-webkit-scrollbar{display:none;}.scrollBar.jsx-3125133541{width:100%;height:6px;background-color:rgb(51,51,51);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0c0QixBQUdvQyxBQVlTLEFBS1gsQUFJRixXQUNBLEVBSmYsRUFqQmlCLE9Bc0JrQixFQVZELDZCQVlsQyxDQVhBLG1DQVpxQixpQkFDRixlQUNHLGtCQUNlLGlDQUNkLG1CQUNnQixtQ0FFdkMiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHQnXG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCBBbmltZSBmcm9tICcuL0FuaW1lJ1xuXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAoe3RvcEFuaW1lfSkgPT4ge1xuXG4gICAgY29uc3QgW2FuaW1lLCBzZXRBbmltZV0gPSB1c2VTdGF0ZSh0b3BBbmltZSlcbiAgICBjb25zdCB7ZmlsdGVyfSA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dClcbiAgICBjb25zdCB7cXVlcnl9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KVxuICAgIGNvbnN0IHtzZWxlY3RlZCwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgXG4gICAgY29uc3QgW3Njcm9sbFBlcmNlbnQsIHNldFNjcm9sbFBlcmNlbnRdID0gdXNlU3RhdGUoJzAlJylcbiAgICBjb25zdCBjYXJvdXNlbFNlbGVjdG9yID0gdXNlUmVmKClcblxuICAgIGNvbnN0IFtpc0Rvd24sIHNldElzRG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbc3RhcnRYLCBzZXRTdGFydFhdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtzY3JvbGxMZWZ0LCBzZXRTY3JvbGxMZWZ0XSA9IHVzZVN0YXRlKClcblxuICAgIGxldCBvbk1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgICAgIHNldElzRG93bih0cnVlKVxuICAgICAgICBzZXRTdGFydFgoZS5wYWdlWCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRMZWZ0KSBcbiAgICAgICAgc2V0U2Nyb2xsTGVmdChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbGV0IG9uTW91c2VMZWF2ZSA9IChlKSA9PiB7XG4gICAgICAgIHNldElzRG93bihmYWxzZSlcblxuICAgIH1cblxuICAgIGxldCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuICAgICAgICBzZXRJc0Rvd24oZmFsc2UpXG5cbiAgICB9XG5cbiAgICBsZXQgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgICBpZighaXNEb3duKSByZXR1cm5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKHggLSBzdGFydFgpICogMi41XG4gICAgICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0ID0gIChzY3JvbGxMZWZ0IC0gZGlzdGFuY2UpICBcbiAgICAgICAgc2V0U2Nyb2xsUGVyY2VudCgoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgLyAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbFdpZHRoIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldFdpZHRoKSkgKiAxMDAgKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGZpbHRlciA9PT0gJ3RvcCcgPyAnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL2J5cG9wdWxhcml0eScgOiAnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL3VwY29taW5nJ1xuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi50b3ApKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikgKVxuICAgIH0sW2ZpbHRlcl0pXG4gICAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICAgICAgaWYocXVlcnkgIT09ICcnKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUl0ZW1zID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSl9YClcbiAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnlJdGVtcy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJhc2V1cmwgPSAnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3NlYXJjaC9hbmltZSc7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHE6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3R2JyxcbiAgICAgICAgICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdXJsID0gYmFzZXVybCArICc/JyArIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcyk7XG4gICAgICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0QW5pbWUocmVzcG9uc2VKc29uLnJlc3VsdHMpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpIClcblxuICAgICAgICB9XG4gICAgfSxbcXVlcnldKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J1NFTEVDVF9BTklNRScsIHNlbGVjdGVkOiB7fX0pXG4gICAgfSxbYW5pbWVdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJvdXNlbCAke2lzRG93biA9PT0gdHJ1ZSA/ICdpc0Rvd24nIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgIHJlZj17Y2Fyb3VzZWxTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IG9uTW91c2VEb3duKGUpfSBcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiBvbk1vdXNlTGVhdmUoZSl9IFxuICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KGUpID0+IG9uTW91c2VVcChlKX0gXG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiBvbk1vdXNlTW92ZShlKX0+XG4gICAgICAgICAgICAgICAge2FuaW1lLm1hcCgoYW5pbWUsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEFuaW1lIGtleT17aW5kZXh9IGFuaW1lPXthbmltZX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYigwLDAsMCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvLyBJRSAxMCtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lOyAgLy8gRmlyZWZveFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc2Nyb2xsQmFyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsNTEsNTEpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbEJhclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")), __jsx("div", {
    className: "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.2bce15f30061135ff660.hot-update.js.map