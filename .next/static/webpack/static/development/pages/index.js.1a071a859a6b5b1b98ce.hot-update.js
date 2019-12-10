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
    className: "jsx-355526776" + " " + "carousel ".concat(isDown === true ? 'isDown' : ""),
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
    className: "jsx-355526776" + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "355526776",
    __self: this
  }, ".carousel.jsx-355526776{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;border-bottom:6px solid rgb(0,0,0);}.carousel.jsx-355526776{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.jsx-355526776::-webkit-scrollbar{display:none;}.scrollBar.jsx-355526776{height:6px;background-color:rgb(51,51,51);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0d3QixBQUdnQyxBQVlTLEFBS1gsQUFJRixXQUNvQixFQUpuQyxFQWpCaUIsU0FZaUIsa0JBV2xDLFlBVkEsbUNBWnFCLGlCQUNGLGVBQ0csa0JBQ2UsaUNBQ2QsbUJBQ2dCLG1DQUV2QyIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dCdcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0J1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuaW1wb3J0IEFuaW1lIGZyb20gJy4vQW5pbWUnXG5cblxuXG5jb25zdCBDYXJvdXNlbCA9ICh7dG9wQW5pbWV9KSA9PiB7XG5cbiAgICBjb25zdCBbYW5pbWUsIHNldEFuaW1lXSA9IHVzZVN0YXRlKHRvcEFuaW1lKVxuICAgIGNvbnN0IHtmaWx0ZXJ9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KVxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpXG4gICAgY29uc3Qge3NlbGVjdGVkLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dClcbiAgICBcbiAgICBjb25zdCBbc2Nyb2xsUGVyY2VudCwgc2V0U2Nyb2xsUGVyY2VudF0gPSB1c2VTdGF0ZSgnMCUnKVxuICAgIGNvbnN0IGNhcm91c2VsU2VsZWN0b3IgPSB1c2VSZWYoKVxuXG4gICAgY29uc3QgW2lzRG93biwgc2V0SXNEb3duXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3Njcm9sbExlZnQsIHNldFNjcm9sbExlZnRdID0gdXNlU3RhdGUoKVxuXG4gICAgbGV0IG9uTW91c2VEb3duID0gKGUpID0+IHtcbiAgICAgICAgc2V0SXNEb3duKHRydWUpXG4gICAgICAgIHNldFN0YXJ0WChlLnBhZ2VYIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldExlZnQpIFxuICAgICAgICBzZXRTY3JvbGxMZWZ0KGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBsZXQgb25Nb3VzZUxlYXZlID0gKGUpID0+IHtcbiAgICAgICAgc2V0SXNEb3duKGZhbHNlKVxuXG4gICAgfVxuXG4gICAgbGV0IG9uTW91c2VVcCA9IChlKSA9PiB7XG4gICAgICAgIHNldElzRG93bihmYWxzZSlcblxuICAgIH1cblxuICAgIGxldCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgIGlmKCFpc0Rvd24pIHJldHVyblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgeCA9IGUucGFnZVhcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAoeCAtIHN0YXJ0WCkgKiAyLjVcbiAgICAgICAgY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgPSAgKHNjcm9sbExlZnQgLSBkaXN0YW5jZSkgIFxuICAgICAgICBzZXRTY3JvbGxQZXJjZW50KChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsV2lkdGggLSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQub2Zmc2V0V2lkdGgpKSAqIDEwMCApXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gZmlsdGVyID09PSAndG9wJyA/ICdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvYnlwb3B1bGFyaXR5JyA6ICdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvdXBjb21pbmcnXG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0QW5pbWUocmVzcG9uc2VKc29uLnRvcCkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSApXG4gICAgfSxbZmlsdGVyXSlcbiAgICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IFxuICAgICAgICBpZihxdWVyeSAhPT0gJycpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5SXRlbXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKX1gKVxuICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeUl0ZW1zLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYmFzZXVybCA9ICdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvc2VhcmNoL2FuaW1lJztcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgcTogcXVlcnksXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndHYnLFxuICAgICAgICAgICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB1cmwgPSBiYXNldXJsICsgJz8nICsgZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24ucmVzdWx0cykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikgKVxuXG4gICAgICAgIH1cbiAgICB9LFtxdWVyeV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTonU0VMRUNUX0FOSU1FJywgc2VsZWN0ZWQ6IHt9fSlcbiAgICB9LFthbmltZV0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtpc0Rvd24gPT09IHRydWUgPyAnaXNEb3duJyA6IFwiXCJ9YH1cbiAgICAgICAgICAgIHJlZj17Y2Fyb3VzZWxTZWxlY3Rvcn1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gb25Nb3VzZURvd24oZSl9IFxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4gb25Nb3VzZUxlYXZlKGUpfSBcbiAgICAgICAgICAgIG9uTW91c2VVcD17KGUpID0+IG9uTW91c2VVcChlKX0gXG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17KGUpID0+IG9uTW91c2VNb3ZlKGUpfT5cbiAgICAgICAgICAgIHthbmltZS5tYXAoKGFuaW1lLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEFuaW1lIGtleT17aW5kZXh9IGFuaW1lPXthbmltZX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxCYXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTc1cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogaGFzIHRvIGJlIHNjcm9sbCwgbm90IGF1dG8gKi9cbiAgICAgICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiKDAsMCwwKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8vIElFIDEwK1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTsgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjcm9sbEJhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLDUxLDUxKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.1a071a859a6b5b1b98ce.hot-update.js.map