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
    var distance = (x - startX) * 2.5;
    carouselSelector.current.scrollLeft = scrollLeft - distance;
    var scrollPercentMath = carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
    console.log(scrollPercentMath);
    setScrollPercent(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(scrollPercentMath));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["333669359", [scrollPercent + '%']]]) + " " + "carouselWrapper",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["333669359", [scrollPercent + '%']]]) + " " + "carousel ".concat(isDown === true ? "isDown" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    });
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["333669359", [scrollPercent + '%']]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "333669359",
    dynamic: [scrollPercent + '%'],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:100%;}.carousel.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollPercent + '%', ";height:6px;background-color:rgb(51,51,51);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0drQixBQUdzQixBQUlJLEFBVVMsQUFLWCxBQUlzQixXQXRCckMsRUFtQkEsRUFmZSxTQVVpQixXQVNuQixXQUNzQixRQVRuQyx1QkFVQSxZQXBCbUIsaUJBQ0YsZUFDRyxrQkFDZSxpQ0FDZCxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgQW5pbWUgZnJvbSBcIi4vQW5pbWVcIjtcblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyB0b3BBbmltZSB9KSA9PiB7XG4gIGNvbnN0IFthbmltZSwgc2V0QW5pbWVdID0gdXNlU3RhdGUodG9wQW5pbWUpO1xuICBjb25zdCB7IGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcbiAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KTtcblxuICBjb25zdCBbc2Nyb2xsUGVyY2VudCwgc2V0U2Nyb2xsUGVyY2VudF0gPSB1c2VTdGF0ZShcIjAlXCIpO1xuICBjb25zdCBjYXJvdXNlbFNlbGVjdG9yID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2lzRG93biwgc2V0SXNEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzY3JvbGxMZWZ0LCBzZXRTY3JvbGxMZWZ0XSA9IHVzZVN0YXRlKCk7XG5cbiAgbGV0IG9uTW91c2VEb3duID0gZSA9PiB7XG4gICAgc2V0SXNEb3duKHRydWUpO1xuICAgIHNldFN0YXJ0WChlLnBhZ2VYIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldExlZnQpO1xuICAgIHNldFNjcm9sbExlZnQoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlVXAgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGlmICghaXNEb3duKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHggPSBlLnBhZ2VYO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gKHggLSBzdGFydFgpICogMi41O1xuICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3RhbmNlO1xuICAgIGxldCBzY3JvbGxQZXJjZW50TWF0aCA9IChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgIChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsV2lkdGggLSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQub2Zmc2V0V2lkdGgpKSAqIDEwMFxuICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxQZXJjZW50TWF0aClcblxuICAgICAgICBzZXRTY3JvbGxQZXJjZW50KHBhcnNlSW50KHNjcm9sbFBlcmNlbnRNYXRoKSk7XG4gICAgXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgZmlsdGVyID09PSBcInRvcFwiXG4gICAgICAgID8gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvYnlwb3B1bGFyaXR5XCJcbiAgICAgICAgOiBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS91cGNvbWluZ1wiO1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24udG9wKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH0sIFtmaWx0ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChxdWVyeSAhPT0gXCJcIikge1xuICAgICAgZnVuY3Rpb24gZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5SXRlbXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChcbiAgICAgICAgICBrZXkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKX1gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBxdWVyeUl0ZW1zLmpvaW4oXCImXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBiYXNldXJsID0gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvc2VhcmNoL2FuaW1lXCI7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdHlwZTogXCJ0dlwiLFxuICAgICAgICBsaW1pdDogMTBcbiAgICAgIH07XG5cbiAgICAgIGxldCB1cmwgPSBiYXNldXJsICsgXCI/XCIgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24ucmVzdWx0cykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9LCBbcXVlcnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRUxFQ1RfQU5JTUVcIiwgc2VsZWN0ZWQ6IHt9IH0pO1xuICB9LCBbYW5pbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxXcmFwcGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsICR7aXNEb3duID09PSB0cnVlID8gXCJpc0Rvd25cIiA6IFwiXCJ9YH1cbiAgICAgICAgcmVmPXtjYXJvdXNlbFNlbGVjdG9yfVxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiBvbk1vdXNlRG93bihlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtlID0+IG9uTW91c2VMZWF2ZShlKX1cbiAgICAgICAgb25Nb3VzZVVwPXtlID0+IG9uTW91c2VVcChlKX1cbiAgICAgICAgb25Nb3VzZU1vdmU9e2UgPT4gb25Nb3VzZU1vdmUoZSl9XG4gICAgICA+XG4gICAgICAgIHthbmltZS5tYXAoKGFuaW1lLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxBbmltZSBrZXk9e2luZGV4fSBhbmltZT17YW5pbWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbEJhclwiPjwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2Fyb3VzZWxXcmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTc1cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogaGFzIHRvIGJlIHNjcm9sbCwgbm90IGF1dG8gKi9cbiAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvLyBJRSAxMCtcbiAgICAgICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7IC8vIEZpcmVmb3hcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICAgICAgIH1cblxuICAgICAgICAuc2Nyb2xsQmFyIHtcbiAgICAgICAgICB3aWR0aDogJHtzY3JvbGxQZXJjZW50ICsgJyUnfTtcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.18686861fcbad4ea2be7.hot-update.js.map