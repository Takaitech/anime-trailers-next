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
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Carousel = function Carousel(_ref) {
  var topAnime = _ref.topAnime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(topAnime),
      anime = _useState[0],
      setAnime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_3__["FilterContext"]),
      filter = _useContext.filter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__["SearchContext"]),
      search = _useContext2.search;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_5__["AnimeContext"]),
      selected = _useContext3.selected,
      dispatch = _useContext3.dispatch;

  var carouselSelector = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0"),
      scrollProgress = _useState3[0],
      setScrollProgress = _useState3[1];

  var getScrollPercent = function getScrollPercent() {
    return carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDown = _useState4[0],
      setIsDown = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      startX = _useState5[0],
      setStartX = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      scrollLeft = _useState6[0],
      setScrollLeft = _useState6[1];

  var changeAnime = function changeAnime(response) {
    setAnime(response);

    if (filter !== "init") {
      var element = carouselSelector.current;
      element.classList.remove("wipeContent");
      void element.offsetWidth;
      element.classList.add("wipeContent");
    }
  };

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
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  var _onTouchMove = function onTouchMove(e) {
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var url = filter === "top" || filter === "init" ? "https://api.jikan.moe/v3/top/anime/1/bypopularity" : "https://api.jikan.moe/v3/top/anime/1/upcoming";
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      return changeAnime(responseJson.top);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, [filter]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (search.query !== "") {
      var formatQueryParams = function formatQueryParams(params) {
        var queryItems = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params).map(function (key) {
          return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
        });

        return queryItems.join("&");
      };

      var baseurl = "https://api.jikan.moe/v3/search/anime";
      var params = {
        q: search.query,
        page: 1,
        type: "tv",
        limit: 10
      };
      var url = baseurl + "?" + formatQueryParams(params);
      setLoading(true);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return setAnime(responseJson.results);
      }).then(function (res) {
        return setTimeout(function () {
          setLoading(false);
        }, 500);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, [search.query]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: "SELECT_ANIME",
      selected: {}
    });
  }, [anime]); // useEffect(() => {
  //   console.log(filter)
  //   if(filter === "init") {
  //   } else {
  //     let element = carouselSelector.current
  //     element.classList.remove("wipeContent")
  //     void element.offsetWidth
  //     element.classList.add("wipeContent");
  //   }
  // }, [filter])

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["593601538", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, loading === true ? __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
    type: "Circles",
    color: "#ef5050",
    height: 25,
    width: 25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }) : __jsx("div", {
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
    onTouchMove: function onTouchMove(e) {
      return _onTouchMove(e);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["593601538", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carousel ".concat(isDown === true ? "isDown" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, anime.length === 0 ? __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["593601538", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "No Results") : anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    });
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["593601538", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "593601538",
    dynamic: [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:100%;-webkit-clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);margin:10px auto;height:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel.__jsx-style-dynamic-selector{width:100%;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;height:100%;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{width:100%;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollProgress + '%', ";height:2px;background-color:rgb(71,71,51);}.wipeContent.__jsx-style-dynamic-selector{-webkit-animation:wipeContent-__jsx-style-dynamic-selector 2s;animation:wipeContent-__jsx-style-dynamic-selector 2s;}@-webkit-keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{.carouselWrapper.__jsx-style-dynamic-selector{width:80%;margin:20px auto;position:relative;right:1.7%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0prQixBQUd3QixBQVVGLEFBYWEsQUFLWCxBQUlGLEFBSXdCLEFBTVYsQUFLZCxBQU1FLEFBTUMsU0FYRixDQVlTLENBM0RpQyxBQVV2QyxBQXNCakIsQUFxQkUsRUF6QkYsTUFvQkUsS0F6QjhCLEVBWmpCLENBaURTLFFBeEJYLFVBeUJJLENBeEJrQixRQWJuQyxFQXNDSSxxQkF4QkosdUJBMUJtQixnQkE4Qm5CLENBekNxQixBQVlQLFlBQ0csS0FaRixVQWFLLENBWkgsaUJBYWtCLGlDQUNmLGtCQUNDLE1BZEUsdUZBZXZCLE1BZDBCLG1HQUMxQiIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9GaWx0ZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NlYXJjaENvbnRleHRcIjtcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCBBbmltZSBmcm9tIFwiLi9BbmltZVwiO1xuaW1wb3J0IHtkZXZpY2V9IGZyb20gXCIuLi9kZXZpY2VzXCJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyB0b3BBbmltZSB9KSA9PiB7XG4gIGNvbnN0IFthbmltZSwgc2V0QW5pbWVdID0gdXNlU3RhdGUodG9wQW5pbWUpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB7IGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3QgeyBzZWFyY2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG4gIGNvbnN0IHsgc2VsZWN0ZWQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dCk7XG5cbiAgY29uc3QgY2Fyb3VzZWxTZWxlY3RvciA9IHVzZVJlZigpO1xuICBjb25zdCBbc2Nyb2xsUHJvZ3Jlc3MsIHNldFNjcm9sbFByb2dyZXNzXSA9IHVzZVN0YXRlKFwiMFwiKTtcbiAgICBsZXQgZ2V0U2Nyb2xsUGVyY2VudCA9ICgpID0+IHtcbiAgICAgICByZXR1cm4gIChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgICAgICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbFdpZHRoIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldFdpZHRoKSkgKiAxMDBcbiAgICB9XG5cbiAgY29uc3QgW2lzRG93biwgc2V0SXNEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzY3JvbGxMZWZ0LCBzZXRTY3JvbGxMZWZ0XSA9IHVzZVN0YXRlKCk7XG5cbiAgbGV0IGNoYW5nZUFuaW1lID0gKHJlc3BvbnNlKSA9PiB7XG5cbiAgICBzZXRBbmltZShyZXNwb25zZSlcbiAgICBpZiggZmlsdGVyICE9PSBcImluaXRcIikge1xuXG4gICAgbGV0IGVsZW1lbnQgPSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnRcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwid2lwZUNvbnRlbnRcIilcbiAgICAgICAgdm9pZCBlbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndpcGVDb250ZW50XCIpO1xuXG4gICAgfVxuICB9XG5cblxuICBsZXQgb25Nb3VzZURvd24gPSBlID0+IHtcbiAgICBzZXRJc0Rvd24odHJ1ZSk7XG4gICAgc2V0U3RhcnRYKGUucGFnZVggLSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQub2Zmc2V0TGVmdCk7XG4gICAgc2V0U2Nyb2xsTGVmdChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VMZWF2ZSA9IGUgPT4ge1xuICAgIHNldElzRG93bihmYWxzZSk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VVcCA9IGUgPT4ge1xuICAgIHNldElzRG93bihmYWxzZSk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgaWYgKCFpc0Rvd24pIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeCA9IGUucGFnZVg7XG4gICAgY29uc3QgZGlzdGFuY2UgPSAoeCAtIHN0YXJ0WCkgKiAzO1xuICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3RhbmNlO1xuICAgXG4gICAgbGV0IHNjcm9sbFBlcmNlbnQgPSBnZXRTY3JvbGxQZXJjZW50KClcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbiAgICBcbiAgfTtcblxuICBsZXQgb25Ub3VjaE1vdmUgPSBlID0+IHtcbiAgICBsZXQgc2Nyb2xsUGVyY2VudCA9IGdldFNjcm9sbFBlcmNlbnQoKVxuICAgIHNldFNjcm9sbFByb2dyZXNzKHNjcm9sbFBlcmNlbnQpO1xufVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICBmaWx0ZXIgPT09IFwidG9wXCIgfHwgZmlsdGVyID09PSBcImluaXRcIlxuICAgICAgICA/IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL2J5cG9wdWxhcml0eVwiXG4gICAgICAgIDogXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvdXBjb21pbmdcIjtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gY2hhbmdlQW5pbWUocmVzcG9uc2VKc29uLnRvcCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gIH0sIFtmaWx0ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2gucXVlcnkgIT09IFwiXCIpIHtcbiAgICAgIGZ1bmN0aW9uIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcykge1xuICAgICAgICBjb25zdCBxdWVyeUl0ZW1zID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoXG4gICAgICAgICAga2V5ID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSl9YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcXVlcnlJdGVtcy5qb2luKFwiJlwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFzZXVybCA9IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3NlYXJjaC9hbmltZVwiO1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcTogc2VhcmNoLnF1ZXJ5LFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICB0eXBlOiBcInR2XCIsXG4gICAgICAgIGxpbWl0OiAxMFxuICAgICAgfTtcblxuICAgICAgbGV0IHVybCA9IGJhc2V1cmwgKyBcIj9cIiArIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcyk7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi5yZXN1bHRzKSApXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9LDUwMCkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9LCBbc2VhcmNoLnF1ZXJ5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiB7fSB9KTtcbiAgfSwgW2FuaW1lXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhmaWx0ZXIpXG4gIC8vICAgaWYoZmlsdGVyID09PSBcImluaXRcIikge1xuXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGxldCBlbGVtZW50ID0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50XG4gIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aXBlQ29udGVudFwiKVxuICAvLyAgICAgdm9pZCBlbGVtZW50Lm9mZnNldFdpZHRoXG4gIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3aXBlQ29udGVudFwiKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtmaWx0ZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFdyYXBwZXJcIj5cbiAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gXG4gICAgICA8TG9hZGVyIHR5cGU9XCJDaXJjbGVzXCIgY29sb3I9XCIjZWY1MDUwXCIgaGVpZ2h0PXsyNX0gd2lkdGg9ezI1fSAvPlxuICAgICAgOlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbCAke2lzRG93biA9PT0gdHJ1ZSA/IFwiaXNEb3duXCIgOiBcIlwifWB9XG4gICAgICAgIHJlZj17Y2Fyb3VzZWxTZWxlY3Rvcn1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4gb25Nb3VzZURvd24oZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBvbk1vdXNlTGVhdmUoZSl9XG4gICAgICAgIG9uTW91c2VVcD17ZSA9PiBvbk1vdXNlVXAoZSl9XG4gICAgICAgIG9uTW91c2VNb3ZlPXtlID0+IG9uTW91c2VNb3ZlKGUpfVxuICAgICAgICBvblRvdWNoTW92ZT17ZSA9PiBvblRvdWNoTW92ZShlKX1cblxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgIGFuaW1lLmxlbmd0aCA9PT0gMCA/IFxuICAgICAgICAgIDxwPk5vIFJlc3VsdHM8L3A+XG4gICAgICAgICAgOlxuICAgICAgICAgIGFuaW1lLm1hcCgoYW5pbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxCYXJcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcm91c2VsV3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyJSAwLCAxMDAlIDAlLCA5OCUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogaGFzIHRvIGJlIHNjcm9sbCwgbm90IGF1dG8gKi9cbiAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLy8gSUUgMTArXG4gICAgICAgICAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lOyAvLyBGaXJlZm94XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHAge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcm9sbEJhciB7XG4gICAgICAgICAgd2lkdGg6ICR7c2Nyb2xsUHJvZ3Jlc3MgKyAnJSd9O1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNzEsIDUxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aXBlQ29udGVudCB7XG4gICAgICAgICAgYW5pbWF0aW9uOiB3aXBlQ29udGVudCAycztcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgd2lwZUNvbnRlbnQge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgIC5jYXJvdXNlbFdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICByaWdodDogMS43JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjcm9sbEJhciB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.85d9d412206ed54c006d.hot-update.js.map