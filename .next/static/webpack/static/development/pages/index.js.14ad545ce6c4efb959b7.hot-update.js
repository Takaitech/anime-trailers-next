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
    className: "jsx-3438222317" + " " + "carousel ".concat(isDown === true ? 'isDown' : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    });
  }), __jsx("div", {
    className: "jsx-3438222317" + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3438222317",
    __self: this
  }, ".carousel.jsx-3438222317{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;border-bottom:6px solid rgb(0,0,0);}.carousel.jsx-3438222317{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.jsx-3438222317::-webkit-scrollbar{display:none;}.scrollBar.jsx-3438222317{height:6px;background-color:rgb(51,51,51);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0d3QixBQUdnQyxBQVlTLEFBS1gsQUFJRixXQUVoQixFQUxDLEVBakJpQixTQVlpQixrQkFVbEMsWUFUQSxtQ0FacUIsaUJBQ0YsZUFDRyxrQkFDZSxpQ0FDZCxtQkFDZ0IsbUNBRXZDIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9GaWx0ZXJDb250ZXh0J1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NlYXJjaENvbnRleHQnXG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9BbmltZUNvbnRleHQnXG5pbXBvcnQgQW5pbWUgZnJvbSAnLi9BbmltZSdcblxuXG5cbmNvbnN0IENhcm91c2VsID0gKHt0b3BBbmltZX0pID0+IHtcblxuICAgIGNvbnN0IFthbmltZSwgc2V0QW5pbWVdID0gdXNlU3RhdGUodG9wQW5pbWUpXG4gICAgY29uc3Qge2ZpbHRlcn0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpXG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dClcbiAgICBjb25zdCB7c2VsZWN0ZWQsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIFxuICAgIGNvbnN0IFtzY3JvbGxQZXJjZW50LCBzZXRTY3JvbGxQZXJjZW50XSA9IHVzZVN0YXRlKCcwJScpXG4gICAgY29uc3QgY2Fyb3VzZWxTZWxlY3RvciA9IHVzZVJlZigpXG5cbiAgICBjb25zdCBbaXNEb3duLCBzZXRJc0Rvd25dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbc2Nyb2xsTGVmdCwgc2V0U2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZSgpXG5cbiAgICBsZXQgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuICAgICAgICBzZXRJc0Rvd24odHJ1ZSlcbiAgICAgICAgc2V0U3RhcnRYKGUucGFnZVggLSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQub2Zmc2V0TGVmdCkgXG4gICAgICAgIHNldFNjcm9sbExlZnQoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGxldCBvbk1vdXNlTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICBzZXRJc0Rvd24oZmFsc2UpXG5cbiAgICB9XG5cbiAgICBsZXQgb25Nb3VzZVVwID0gKGUpID0+IHtcbiAgICAgICAgc2V0SXNEb3duKGZhbHNlKVxuXG4gICAgfVxuXG4gICAgbGV0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgaWYoIWlzRG93bikgcmV0dXJuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB4ID0gZS5wYWdlWFxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9ICh4IC0gc3RhcnRYKSAqIDIuNVxuICAgICAgICBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCA9ICAoc2Nyb2xsTGVmdCAtIGRpc3RhbmNlKSAgXG4gICAgICAgIHNldFNjcm9sbFBlcmNlbnQoKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0IC8gKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwIClcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBmaWx0ZXIgPT09ICd0b3AnID8gJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS9ieXBvcHVsYXJpdHknIDogJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS91cGNvbWluZydcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24udG9wKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpIClcbiAgICB9LFtmaWx0ZXJdKVxuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgXG4gICAgICAgIGlmKHF1ZXJ5ICE9PSAnJykge1xuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlJdGVtcyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5SXRlbXMuam9pbignJicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBiYXNldXJsID0gJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My9zZWFyY2gvYW5pbWUnO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0dicsXG4gICAgICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHVybCA9IGJhc2V1cmwgKyAnPycgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi5yZXN1bHRzKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSApXG5cbiAgICAgICAgfVxuICAgIH0sW3F1ZXJ5XSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOidTRUxFQ1RfQU5JTUUnLCBzZWxlY3RlZDoge319KVxuICAgIH0sW2FuaW1lXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJvdXNlbCAke2lzRG93biA9PT0gdHJ1ZSA/ICdpc0Rvd24nIDogXCJcIn1gfVxuICAgICAgICAgICAgcmVmPXtjYXJvdXNlbFNlbGVjdG9yfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBvbk1vdXNlRG93bihlKX0gXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiBvbk1vdXNlTGVhdmUoZSl9IFxuICAgICAgICAgICAgb25Nb3VzZVVwPXsoZSkgPT4gb25Nb3VzZVVwKGUpfSBcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4gb25Nb3VzZU1vdmUoZSl9PlxuICAgICAgICAgICAge2FuaW1lLm1hcCgoYW5pbWUsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbEJhclwiPjwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBoYXMgdG8gYmUgc2Nyb2xsLCBub3QgYXV0byAqL1xuICAgICAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2IoMCwwLDApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLy8gSUUgMTArXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lOyAgLy8gRmlyZWZveFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2Nyb2xsQmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsNTEsNTEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.14ad545ce6c4efb959b7.hot-update.js.map