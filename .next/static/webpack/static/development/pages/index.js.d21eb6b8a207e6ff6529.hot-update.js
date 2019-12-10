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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _Anime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Anime */ "./components/Anime.js");


var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Carousel = function Carousel(_ref) {
  var topAnime = _ref.topAnime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(topAnime),
      anime = _useState[0],
      setAnime = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_4__["FilterContext"]),
      filter = _useContext.filter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_5__["SearchContext"]),
      query = _useContext2.query;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_6__["AnimeContext"]),
      selected = _useContext3.selected,
      dispatch = _useContext3.dispatch;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("0%"),
      scrollPercent = _useState2[0],
      setScrollPercent = _useState2[1];

  var carouselSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isDown = _useState3[0],
      setIsDown = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      startX = _useState4[0],
      setStartX = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
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
    var distance = (x - startX) * 3;
    carouselSelector.current.scrollLeft = scrollLeft - distance;
    var scrollPercentMath = carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
    setScrollPercent(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(scrollPercentMath));
  };

  var ontouchmove = function ontouchmove(e) {
    var scrollPercentMath = carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var url = filter === "top" ? "https://api.jikan.moe/v3/top/anime/1/bypopularity" : "https://api.jikan.moe/v3/top/anime/1/upcoming";
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      return setAnime(responseJson.top);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, [filter]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (query !== "") {
      var formatQueryParams = function formatQueryParams(params) {
        var queryItems = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params).map(function (key) {
          return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
        });

        return queryItems.join("&");
      };

      var baseurl = "https://api.jikan.moe/v3/search/anime";
      var params = {
        q: query,
        page: 1,
        type: "tv",
        limit: 10
      };
      var url = baseurl + "?" + formatQueryParams(params);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return setAnime(responseJson.results);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: "SELECT_ANIME",
      selected: {}
    });
  }, [anime]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2106514049", [scrollPercent + '%']]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
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
    touchMove: function touchMove(e) {
      return ontouchmove(e);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2106514049", [scrollPercent + '%']]]) + " " + "carousel ".concat(isDown === true ? "isDown" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    });
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2106514049", [scrollPercent + '%']]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2106514049",
    dynamic: [scrollPercent + '%'],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:100%;}.carousel.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollPercent + '%', ";height:2px;background-color:rgb(71,71,51);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdrQixBQUdzQixBQUlJLEFBVVMsQUFLWCxBQUlzQixXQXRCckMsRUFtQkEsRUFmZSxTQVVpQixXQVNuQixXQUNzQixRQVRuQyx1QkFVQSxZQXBCbUIsaUJBQ0YsZUFDRyxrQkFDZSxpQ0FDZCxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgQW5pbWUgZnJvbSBcIi4vQW5pbWVcIjtcblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyB0b3BBbmltZSB9KSA9PiB7XG4gIGNvbnN0IFthbmltZSwgc2V0QW5pbWVdID0gdXNlU3RhdGUodG9wQW5pbWUpO1xuICBjb25zdCB7IGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcbiAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KTtcblxuICBjb25zdCBbc2Nyb2xsUGVyY2VudCwgc2V0U2Nyb2xsUGVyY2VudF0gPSB1c2VTdGF0ZShcIjAlXCIpO1xuICBjb25zdCBjYXJvdXNlbFNlbGVjdG9yID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2lzRG93biwgc2V0SXNEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzY3JvbGxMZWZ0LCBzZXRTY3JvbGxMZWZ0XSA9IHVzZVN0YXRlKCk7XG5cbiAgbGV0IG9uTW91c2VEb3duID0gZSA9PiB7XG4gICAgc2V0SXNEb3duKHRydWUpO1xuICAgIHNldFN0YXJ0WChlLnBhZ2VYIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldExlZnQpO1xuICAgIHNldFNjcm9sbExlZnQoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlVXAgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGlmICghaXNEb3duKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHggPSBlLnBhZ2VYO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gKHggLSBzdGFydFgpICogMztcbiAgICBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBkaXN0YW5jZTtcbiAgICBsZXQgc2Nyb2xsUGVyY2VudE1hdGggPSAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbFdpZHRoIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldFdpZHRoKSkgKiAxMDBcblxuICAgICAgICBzZXRTY3JvbGxQZXJjZW50KHBhcnNlSW50KHNjcm9sbFBlcmNlbnRNYXRoKSk7XG4gICAgXG4gIH07XG5cbiAgbGV0IG9udG91Y2htb3ZlID0gZSA9PiB7XG4gICAgbGV0IHNjcm9sbFBlcmNlbnRNYXRoID0gKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0IC9cbiAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICBmaWx0ZXIgPT09IFwidG9wXCJcbiAgICAgICAgPyBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS9ieXBvcHVsYXJpdHlcIlxuICAgICAgICA6IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL3VwY29taW5nXCI7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi50b3ApKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfSwgW2ZpbHRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHF1ZXJ5ICE9PSBcIlwiKSB7XG4gICAgICBmdW5jdGlvbiBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnlJdGVtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKFxuICAgICAgICAgIGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5SXRlbXMuam9pbihcIiZcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9zZWFyY2gvYW5pbWVcIjtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHE6IHF1ZXJ5LFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICB0eXBlOiBcInR2XCIsXG4gICAgICAgIGxpbWl0OiAxMFxuICAgICAgfTtcblxuICAgICAgbGV0IHVybCA9IGJhc2V1cmwgKyBcIj9cIiArIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcyk7XG4gICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi5yZXN1bHRzKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFtxdWVyeV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFTEVDVF9BTklNRVwiLCBzZWxlY3RlZDoge30gfSk7XG4gIH0sIFthbmltZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFdyYXBwZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtpc0Rvd24gPT09IHRydWUgPyBcImlzRG93blwiIDogXCJcIn1gfVxuICAgICAgICByZWY9e2Nhcm91c2VsU2VsZWN0b3J9XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IG9uTW91c2VEb3duKGUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e2UgPT4gb25Nb3VzZUxlYXZlKGUpfVxuICAgICAgICBvbk1vdXNlVXA9e2UgPT4gb25Nb3VzZVVwKGUpfVxuICAgICAgICBvbk1vdXNlTW92ZT17ZSA9PiBvbk1vdXNlTW92ZShlKX1cbiAgICAgICAgdG91Y2hNb3ZlPXtlID0+IG9udG91Y2htb3ZlKGUpfVxuICAgICAgPlxuICAgICAgICB7YW5pbWUubWFwKChhbmltZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxCYXJcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcm91c2VsV3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLy8gSUUgMTArXG4gICAgICAgICAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lOyAvLyBGaXJlZm94XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAgICAgICB9XG5cbiAgICAgICAgLnNjcm9sbEJhciB7XG4gICAgICAgICAgd2lkdGg6ICR7c2Nyb2xsUGVyY2VudCArICclJ307XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCA3MSwgNTEpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.d21eb6b8a207e6ff6529.hot-update.js.map