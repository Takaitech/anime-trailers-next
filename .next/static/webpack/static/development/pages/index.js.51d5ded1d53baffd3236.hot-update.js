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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0%"),
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
    var scrollPercentMath = carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;

    if (scrollPercentMath % 1 === 0) {
      setScrollPercent(scrollPercentMath);
    }
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["333669359", [scrollPercent + '%']]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["333669359", [scrollPercent + '%']]]) + " " + "carousel ".concat(isDown === true ? "isDown" : ""),
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
        lineNumber: 98
      },
      __self: this
    });
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["333669359", [scrollPercent + '%']]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "333669359",
    dynamic: [scrollPercent + '%'],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:100%;}.carousel.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollPercent + '%', ";height:6px;background-color:rgb(51,51,51);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUdrQixBQUdzQixBQUlJLEFBVVMsQUFLWCxBQUlzQixXQXRCckMsRUFtQkEsRUFmZSxTQVVpQixXQVNuQixXQUNzQixRQVRuQyx1QkFVQSxZQXBCbUIsaUJBQ0YsZUFDRyxrQkFDZSxpQ0FDZCxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgQW5pbWUgZnJvbSBcIi4vQW5pbWVcIjtcblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyB0b3BBbmltZSB9KSA9PiB7XG4gIGNvbnN0IFthbmltZSwgc2V0QW5pbWVdID0gdXNlU3RhdGUodG9wQW5pbWUpO1xuICBjb25zdCB7IGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcbiAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KTtcblxuICBjb25zdCBbc2Nyb2xsUGVyY2VudCwgc2V0U2Nyb2xsUGVyY2VudF0gPSB1c2VTdGF0ZShcIjAlXCIpO1xuICBjb25zdCBjYXJvdXNlbFNlbGVjdG9yID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2lzRG93biwgc2V0SXNEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzY3JvbGxMZWZ0LCBzZXRTY3JvbGxMZWZ0XSA9IHVzZVN0YXRlKCk7XG5cbiAgbGV0IG9uTW91c2VEb3duID0gZSA9PiB7XG4gICAgc2V0SXNEb3duKHRydWUpO1xuICAgIHNldFN0YXJ0WChlLnBhZ2VYIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldExlZnQpO1xuICAgIHNldFNjcm9sbExlZnQoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlVXAgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGlmICghaXNEb3duKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHggPSBlLnBhZ2VYO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gKHggLSBzdGFydFgpICogMi41O1xuICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3RhbmNlO1xuICAgIGxldCBzY3JvbGxQZXJjZW50TWF0aCA9ICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbFdpZHRoIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldFdpZHRoKSkgKiAxMDBcbiAgICBpZihzY3JvbGxQZXJjZW50TWF0aCAlIDEgPT09IDApIHtcbiAgICAgICAgc2V0U2Nyb2xsUGVyY2VudChzY3JvbGxQZXJjZW50TWF0aCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIGZpbHRlciA9PT0gXCJ0b3BcIlxuICAgICAgICA/IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL2J5cG9wdWxhcml0eVwiXG4gICAgICAgIDogXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvdXBjb21pbmdcIjtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0QW5pbWUocmVzcG9uc2VKc29uLnRvcCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9LCBbZmlsdGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkgIT09IFwiXCIpIHtcbiAgICAgIGZ1bmN0aW9uIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcykge1xuICAgICAgICBjb25zdCBxdWVyeUl0ZW1zID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoXG4gICAgICAgICAga2V5ID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSl9YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcXVlcnlJdGVtcy5qb2luKFwiJlwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFzZXVybCA9IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3NlYXJjaC9hbmltZVwiO1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcTogcXVlcnksXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHR5cGU6IFwidHZcIixcbiAgICAgICAgbGltaXQ6IDEwXG4gICAgICB9O1xuXG4gICAgICBsZXQgdXJsID0gYmFzZXVybCArIFwiP1wiICsgZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKTtcbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0QW5pbWUocmVzcG9uc2VKc29uLnJlc3VsdHMpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiB7fSB9KTtcbiAgfSwgW2FuaW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsV3JhcHBlclwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbCAke2lzRG93biA9PT0gdHJ1ZSA/IFwiaXNEb3duXCIgOiBcIlwifWB9XG4gICAgICAgIHJlZj17Y2Fyb3VzZWxTZWxlY3Rvcn1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4gb25Nb3VzZURvd24oZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBvbk1vdXNlTGVhdmUoZSl9XG4gICAgICAgIG9uTW91c2VVcD17ZSA9PiBvbk1vdXNlVXAoZSl9XG4gICAgICAgIG9uTW91c2VNb3ZlPXtlID0+IG9uTW91c2VNb3ZlKGUpfVxuICAgICAgPlxuICAgICAgICB7YW5pbWUubWFwKChhbmltZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxCYXJcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcm91c2VsV3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLy8gSUUgMTArXG4gICAgICAgICAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lOyAvLyBGaXJlZm94XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAgICAgICB9XG5cbiAgICAgICAgLnNjcm9sbEJhciB7XG4gICAgICAgICAgd2lkdGg6ICR7c2Nyb2xsUGVyY2VudCArICclJ307XG4gICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.51d5ded1d53baffd3236.hot-update.js.map