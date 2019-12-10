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
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../devices */ "./devices.js");

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

  var carouselSelector = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0"),
      scrollProgress = _useState2[0],
      setScrollProgress = _useState2[1];

  var getScrollPercent = function getScrollPercent() {
    return carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
  };

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
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  var _onMouseLeave = function onMouseLeave(e) {
    setIsDown(false);
  };

  var _onMouseUp = function onMouseUp(e) {
    setIsDown(false);
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  var _onMouseMove = function onMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX;
    var distance = (x - startX) * 3;
    carouselSelector.current.scrollLeft = scrollLeft - distance;
  };

  var _onTouchStart = function onTouchStart(e) {
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  var _onTouchEnd = function onTouchEnd(e) {
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var url = filter === "top" ? "https://api.jikan.moe/v3/top/anime/1/bypopularity" : "https://api.jikan.moe/v3/top/anime/1/upcoming";
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      return setAnime(responseJson.top);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, [filter]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: "SELECT_ANIME",
      selected: {}
    });
  }, [anime]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["569060357", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
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
    onTouchStart: function onTouchStart(e) {
      return _onTouchStart(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      return _onTouchEnd(e);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["569060357", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carousel ".concat(isDown === true ? "isDown" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    });
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["569060357", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "569060357",
    dynamic: [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:100%;}.carousel.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollProgress + '%', ";height:2px;background-color:rgb(71,71,51);-webkit-transition:0.3s width;transition:0.3s width;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{.scrollBar.__jsx-style-dynamic-selector{-webkit-transition:0.5s width;transition:0.5s width;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0hrQixBQUdzQixBQUlJLEFBU1MsQUFLWCxBQUlzQixBQVFQLFdBN0I5QixFQWtCQSxFQWRlLFNBU2lCLFdBU25CLFdBQ3NCLE1BUS9CLEVBakJKLHVCQVV3QixZQW5CTCxpQkFDRixlQUNHLFFBa0JwQixVQWpCbUMsaUNBQ25DIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dFwiO1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0FuaW1lQ29udGV4dFwiO1xuaW1wb3J0IEFuaW1lIGZyb20gXCIuL0FuaW1lXCI7XG5pbXBvcnQge2RldmljZX0gZnJvbSBcIi4uL2RldmljZXNcIlxuXG5jb25zdCBDYXJvdXNlbCA9ICh7IHRvcEFuaW1lIH0pID0+IHtcbiAgY29uc3QgW2FuaW1lLCBzZXRBbmltZV0gPSB1c2VTdGF0ZSh0b3BBbmltZSk7XG4gIGNvbnN0IHsgZmlsdGVyIH0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuXG4gIGNvbnN0IGNhcm91c2VsU2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Njcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzc10gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgbGV0IGdldFNjcm9sbFBlcmNlbnQgPSAoKSA9PiB7XG4gICAgICAgcmV0dXJuICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG4gICAgfVxuXG4gIGNvbnN0IFtpc0Rvd24sIHNldElzRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2Nyb2xsTGVmdCwgc2V0U2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGxldCBvbk1vdXNlRG93biA9IGUgPT4ge1xuICAgIHNldElzRG93bih0cnVlKTtcbiAgICBzZXRTdGFydFgoZS5wYWdlWCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRMZWZ0KTtcbiAgICBzZXRTY3JvbGxMZWZ0KGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0KTtcbiAgICBsZXQgc2Nyb2xsUGVyY2VudCA9IGdldFNjcm9sbFBlcmNlbnQoKVxuICAgIHNldFNjcm9sbFByb2dyZXNzKHNjcm9sbFBlcmNlbnQpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlVXAgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICAgIGxldCBzY3JvbGxQZXJjZW50ID0gZ2V0U2Nyb2xsUGVyY2VudCgpXG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3Moc2Nyb2xsUGVyY2VudCk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgaWYgKCFpc0Rvd24pIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeCA9IGUucGFnZVg7XG4gICAgY29uc3QgZGlzdGFuY2UgPSAoeCAtIHN0YXJ0WCkgKiAzO1xuICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3RhbmNlO1xuICAgXG4gICAgXG4gIH07XG5cbiAgbGV0IG9uVG91Y2hTdGFydCA9IGUgPT4ge1xuICAgICAgICBsZXQgc2Nyb2xsUGVyY2VudCA9IGdldFNjcm9sbFBlcmNlbnQoKVxuICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbiAgfVxuXG4gIGxldCBvblRvdWNoRW5kID0gZSA9PiB7XG4gICAgICAgIGxldCBzY3JvbGxQZXJjZW50ID0gZ2V0U2Nyb2xsUGVyY2VudCgpXG4gICAgICAgIHNldFNjcm9sbFByb2dyZXNzKHNjcm9sbFBlcmNlbnQpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgZmlsdGVyID09PSBcInRvcFwiXG4gICAgICAgID8gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvYnlwb3B1bGFyaXR5XCJcbiAgICAgICAgOiBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS91cGNvbWluZ1wiO1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24udG9wKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH0sIFtmaWx0ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChxdWVyeSAhPT0gXCJcIikge1xuICAgICAgZnVuY3Rpb24gZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5SXRlbXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChcbiAgICAgICAgICBrZXkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKX1gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBxdWVyeUl0ZW1zLmpvaW4oXCImXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBiYXNldXJsID0gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvc2VhcmNoL2FuaW1lXCI7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdHlwZTogXCJ0dlwiLFxuICAgICAgICBsaW1pdDogMTBcbiAgICAgIH07XG5cbiAgICAgIGxldCB1cmwgPSBiYXNldXJsICsgXCI/XCIgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24ucmVzdWx0cykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9LCBbcXVlcnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRUxFQ1RfQU5JTUVcIiwgc2VsZWN0ZWQ6IHt9IH0pO1xuICB9LCBbYW5pbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxXcmFwcGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsICR7aXNEb3duID09PSB0cnVlID8gXCJpc0Rvd25cIiA6IFwiXCJ9YH1cbiAgICAgICAgcmVmPXtjYXJvdXNlbFNlbGVjdG9yfVxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiBvbk1vdXNlRG93bihlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtlID0+IG9uTW91c2VMZWF2ZShlKX1cbiAgICAgICAgb25Nb3VzZVVwPXtlID0+IG9uTW91c2VVcChlKX1cbiAgICAgICAgb25Nb3VzZU1vdmU9e2UgPT4gb25Nb3VzZU1vdmUoZSl9XG4gICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiBvblRvdWNoU3RhcnQoZSl9XG4gICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4gb25Ub3VjaEVuZChlKX1cblxuICAgICAgPlxuICAgICAgICB7YW5pbWUubWFwKChhbmltZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxCYXJcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcm91c2VsV3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElFIDEwK1xuICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTsgLy8gRmlyZWZveFxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JvbGxCYXIge1xuICAgICAgICAgIHdpZHRoOiAke3Njcm9sbFByb2dyZXNzICsgJyUnfTtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDcxLCA1MSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyB3aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgIC5zY3JvbGxCYXIge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgd2lkdGg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.f440abcf5d8eac85f5ec.hot-update.js.map