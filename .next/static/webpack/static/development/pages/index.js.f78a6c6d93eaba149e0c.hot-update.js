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
    var scrollPercentMath = carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
    setScrollPercent(scrollPercentMath);
  };

  var _onMouseLeave = function onMouseLeave(e) {
    setIsDown(false);
  };

  var _onMouseUp = function onMouseUp(e) {
    setIsDown(false);
    var scrollPercentMath = carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
    setScrollPercent(scrollPercentMath);
  };

  var _onMouseMove = function onMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX;
    var distance = (x - startX) * 3;
    carouselSelector.current.scrollLeft = scrollLeft - distance;
  };

  var ontouchmove = function ontouchmove(e) {
    var scrollPercentMath = carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2720226047", [scrollPercent + '%']]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
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
      return onToucStart(e);
    },
    onTouchEnd: function (_onTouchEnd) {
      function onTouchEnd(_x) {
        return _onTouchEnd.apply(this, arguments);
      }

      onTouchEnd.toString = function () {
        return _onTouchEnd.toString();
      };

      return onTouchEnd;
    }(function (e) {
      return onTouchEnd(e);
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2720226047", [scrollPercent + '%']]]) + " " + "carousel ".concat(isDown === true ? "isDown" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    });
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2720226047", [scrollPercent + '%']]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2720226047",
    dynamic: [scrollPercent + '%'],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:100%;}.carousel.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollPercent + '%', ";height:2px;background-color:rgb(71,71,51);-webkit-transition:0.5s width;transition:0.5s width;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUhrQixBQUdzQixBQUlJLEFBVVMsQUFLWCxBQUlzQixXQXRCckMsRUFtQkEsRUFmZSxTQVVpQixXQVNuQixXQUNzQixRQVRuQyx1QkFVd0IsWUFwQkwsaUJBQ0YsZUFDRyxRQW1CcEIsVUFsQm1DLGlDQUNkLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9GaWx0ZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NlYXJjaENvbnRleHRcIjtcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCBBbmltZSBmcm9tIFwiLi9BbmltZVwiO1xuXG5jb25zdCBDYXJvdXNlbCA9ICh7IHRvcEFuaW1lIH0pID0+IHtcbiAgY29uc3QgW2FuaW1lLCBzZXRBbmltZV0gPSB1c2VTdGF0ZSh0b3BBbmltZSk7XG4gIGNvbnN0IHsgZmlsdGVyIH0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuXG4gIGNvbnN0IFtzY3JvbGxQZXJjZW50LCBzZXRTY3JvbGxQZXJjZW50XSA9IHVzZVN0YXRlKFwiMCVcIik7XG4gIGNvbnN0IGNhcm91c2VsU2VsZWN0b3IgPSB1c2VSZWYoKTtcblxuICBjb25zdCBbaXNEb3duLCBzZXRJc0Rvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhcnRYLCBzZXRTdGFydFhdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Njcm9sbExlZnQsIHNldFNjcm9sbExlZnRdID0gdXNlU3RhdGUoKTtcblxuICBsZXQgb25Nb3VzZURvd24gPSBlID0+IHtcbiAgICBzZXRJc0Rvd24odHJ1ZSk7XG4gICAgc2V0U3RhcnRYKGUucGFnZVggLSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQub2Zmc2V0TGVmdCk7XG4gICAgc2V0U2Nyb2xsTGVmdChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCk7XG4gICAgbGV0IHNjcm9sbFBlcmNlbnRNYXRoID0gKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0IC9cbiAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG5cbiAgICAgICAgc2V0U2Nyb2xsUGVyY2VudChzY3JvbGxQZXJjZW50TWF0aCk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VMZWF2ZSA9IGUgPT4ge1xuICAgIHNldElzRG93bihmYWxzZSk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VVcCA9IGUgPT4ge1xuICAgIHNldElzRG93bihmYWxzZSk7XG4gICAgbGV0IHNjcm9sbFBlcmNlbnRNYXRoID0gKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0IC9cbiAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG5cbiAgICAgICAgc2V0U2Nyb2xsUGVyY2VudChzY3JvbGxQZXJjZW50TWF0aCk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgaWYgKCFpc0Rvd24pIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeCA9IGUucGFnZVg7XG4gICAgY29uc3QgZGlzdGFuY2UgPSAoeCAtIHN0YXJ0WCkgKiAzO1xuICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3RhbmNlO1xuICAgXG4gICAgXG4gIH07XG5cbiAgbGV0IG9udG91Y2htb3ZlID0gZSA9PiB7XG4gICAgbGV0IHNjcm9sbFBlcmNlbnRNYXRoID0gKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0IC9cbiAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG5cbiAgICAgICAgc2V0U2Nyb2xsUGVyY2VudChwYXJzZUludChzY3JvbGxQZXJjZW50TWF0aCkpO1xuXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICBmaWx0ZXIgPT09IFwidG9wXCJcbiAgICAgICAgPyBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS9ieXBvcHVsYXJpdHlcIlxuICAgICAgICA6IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL3VwY29taW5nXCI7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi50b3ApKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfSwgW2ZpbHRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHF1ZXJ5ICE9PSBcIlwiKSB7XG4gICAgICBmdW5jdGlvbiBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnlJdGVtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKFxuICAgICAgICAgIGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5SXRlbXMuam9pbihcIiZcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9zZWFyY2gvYW5pbWVcIjtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHE6IHF1ZXJ5LFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICB0eXBlOiBcInR2XCIsXG4gICAgICAgIGxpbWl0OiAxMFxuICAgICAgfTtcblxuICAgICAgbGV0IHVybCA9IGJhc2V1cmwgKyBcIj9cIiArIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcyk7XG4gICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi5yZXN1bHRzKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFtxdWVyeV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFTEVDVF9BTklNRVwiLCBzZWxlY3RlZDoge30gfSk7XG4gIH0sIFthbmltZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFdyYXBwZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtpc0Rvd24gPT09IHRydWUgPyBcImlzRG93blwiIDogXCJcIn1gfVxuICAgICAgICByZWY9e2Nhcm91c2VsU2VsZWN0b3J9XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IG9uTW91c2VEb3duKGUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e2UgPT4gb25Nb3VzZUxlYXZlKGUpfVxuICAgICAgICBvbk1vdXNlVXA9e2UgPT4gb25Nb3VzZVVwKGUpfVxuICAgICAgICBvbk1vdXNlTW92ZT17ZSA9PiBvbk1vdXNlTW92ZShlKX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IG9uVG91Y1N0YXJ0KGUpfVxuICAgICAgICBvblRvdWNoRW5kPXtlID0+IG9uVG91Y2hFbmQoZSl9XG5cbiAgICAgID5cbiAgICAgICAge2FuaW1lLm1hcCgoYW5pbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEFuaW1lIGtleT17aW5kZXh9IGFuaW1lPXthbmltZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsQmFyXCI+PC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJvdXNlbFdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBoYXMgdG8gYmUgc2Nyb2xsLCBub3QgYXV0byAqL1xuICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElFIDEwK1xuICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTsgLy8gRmlyZWZveFxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JvbGxCYXIge1xuICAgICAgICAgIHdpZHRoOiAke3Njcm9sbFBlcmNlbnQgKyAnJSd9O1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNzEsIDUxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIHdpZHRoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.f78a6c6d93eaba149e0c.hot-update.js.map