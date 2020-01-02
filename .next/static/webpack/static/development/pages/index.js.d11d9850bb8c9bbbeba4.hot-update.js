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
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return setAnime(responseJson.results);
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1084216518", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, loading === true ? __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: styles,
    type: "Circles",
    color: "#ef5050",
    height: 25,
    width: 25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1084216518", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carousel ".concat(isDown === true ? "isDown" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, anime.length === 0 ? __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1084216518", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "No Results") : anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    });
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1084216518", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1084216518",
    dynamic: [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:100%;-webkit-clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);margin:10px auto;height:30%;}.carousel.__jsx-style-dynamic-selector{width:100%;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;height:100%;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{width:100%;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollProgress + '%', ";height:2px;background-color:rgb(71,71,51);}.wipeContent.__jsx-style-dynamic-selector{-webkit-animation:wipeContent-__jsx-style-dynamic-selector 2s;animation:wipeContent-__jsx-style-dynamic-selector 2s;}@-webkit-keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{.carouselWrapper.__jsx-style-dynamic-selector{width:80%;margin:20px auto;position:relative;right:1.7%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEprQixBQUd3QixBQVFGLEFBYWEsQUFLWCxBQUlGLEFBSXdCLEFBTVYsQUFLZCxBQU1FLEFBTUMsU0FYRixDQVlTLENBekRpQyxBQVF2QyxBQXNCakIsQUFxQkUsRUF6QkYsTUFvQkUsS0F6QjhCLEVBWmpCLENBaURTLFFBeEJYLFVBeUJJLENBeEJrQixRQWJuQyxFQXNDSSxxQkF4QkosdUJBMUJtQixnQkE4Qm5CLENBdkNxQixBQVVQLFlBQ0csS0FWRixVQVdLLENBVHBCLGlCQVVtQyxpQ0FDZixrQkFDQyw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgQW5pbWUgZnJvbSBcIi4vQW5pbWVcIjtcbmltcG9ydCB7ZGV2aWNlfSBmcm9tIFwiLi4vZGV2aWNlc1wiXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJ1xuXG5cbmNvbnN0IENhcm91c2VsID0gKHsgdG9wQW5pbWUgfSkgPT4ge1xuICBjb25zdCBbYW5pbWUsIHNldEFuaW1lXSA9IHVzZVN0YXRlKHRvcEFuaW1lKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgeyBmaWx0ZXIgfSA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dCk7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuXG4gIGNvbnN0IGNhcm91c2VsU2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Njcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzc10gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgbGV0IGdldFNjcm9sbFBlcmNlbnQgPSAoKSA9PiB7XG4gICAgICAgcmV0dXJuICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG4gICAgfVxuXG4gIGNvbnN0IFtpc0Rvd24sIHNldElzRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2Nyb2xsTGVmdCwgc2V0U2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGxldCBjaGFuZ2VBbmltZSA9IChyZXNwb25zZSkgPT4ge1xuXG4gICAgc2V0QW5pbWUocmVzcG9uc2UpXG4gICAgaWYoIGZpbHRlciAhPT0gXCJpbml0XCIpIHtcblxuICAgIGxldCBlbGVtZW50ID0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIndpcGVDb250ZW50XCIpXG4gICAgICAgIHZvaWQgZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3aXBlQ29udGVudFwiKTtcblxuICAgIH1cbiAgfVxuXG5cbiAgbGV0IG9uTW91c2VEb3duID0gZSA9PiB7XG4gICAgc2V0SXNEb3duKHRydWUpO1xuICAgIHNldFN0YXJ0WChlLnBhZ2VYIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldExlZnQpO1xuICAgIHNldFNjcm9sbExlZnQoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlVXAgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGlmICghaXNEb3duKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHggPSBlLnBhZ2VYO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gKHggLSBzdGFydFgpICogMztcbiAgICBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBkaXN0YW5jZTtcbiAgIFxuICAgIGxldCBzY3JvbGxQZXJjZW50ID0gZ2V0U2Nyb2xsUGVyY2VudCgpXG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3Moc2Nyb2xsUGVyY2VudCk7XG4gICAgXG4gIH07XG5cbiAgbGV0IG9uVG91Y2hNb3ZlID0gZSA9PiB7XG4gICAgbGV0IHNjcm9sbFBlcmNlbnQgPSBnZXRTY3JvbGxQZXJjZW50KClcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbn1cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgZmlsdGVyID09PSBcInRvcFwiIHx8IGZpbHRlciA9PT0gXCJpbml0XCJcbiAgICAgICAgPyBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS9ieXBvcHVsYXJpdHlcIlxuICAgICAgICA6IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL3VwY29taW5nXCI7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IGNoYW5nZUFuaW1lKHJlc3BvbnNlSnNvbi50b3ApKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICB9LCBbZmlsdGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoLnF1ZXJ5ICE9PSBcIlwiKSB7XG4gICAgICBmdW5jdGlvbiBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnlJdGVtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKFxuICAgICAgICAgIGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5SXRlbXMuam9pbihcIiZcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9zZWFyY2gvYW5pbWVcIjtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHE6IHNlYXJjaC5xdWVyeSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdHlwZTogXCJ0dlwiLFxuICAgICAgICBsaW1pdDogMTBcbiAgICAgIH07XG5cbiAgICAgIGxldCB1cmwgPSBiYXNldXJsICsgXCI/XCIgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24ucmVzdWx0cykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9LCBbc2VhcmNoLnF1ZXJ5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiB7fSB9KTtcbiAgfSwgW2FuaW1lXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhmaWx0ZXIpXG4gIC8vICAgaWYoZmlsdGVyID09PSBcImluaXRcIikge1xuXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGxldCBlbGVtZW50ID0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50XG4gIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aXBlQ29udGVudFwiKVxuICAvLyAgICAgdm9pZCBlbGVtZW50Lm9mZnNldFdpZHRoXG4gIC8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3aXBlQ29udGVudFwiKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtmaWx0ZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFdyYXBwZXJcIj5cbiAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gXG4gICAgICA8TG9hZGVyIHN0eWxlPXtzdHlsZXN9IHR5cGU9XCJDaXJjbGVzXCIgY29sb3I9XCIjZWY1MDUwXCIgaGVpZ2h0PXsyNX0gd2lkdGg9ezI1fSAvPlxuICAgICAgOlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbCAke2lzRG93biA9PT0gdHJ1ZSA/IFwiaXNEb3duXCIgOiBcIlwifWB9XG4gICAgICAgIHJlZj17Y2Fyb3VzZWxTZWxlY3Rvcn1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4gb25Nb3VzZURvd24oZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBvbk1vdXNlTGVhdmUoZSl9XG4gICAgICAgIG9uTW91c2VVcD17ZSA9PiBvbk1vdXNlVXAoZSl9XG4gICAgICAgIG9uTW91c2VNb3ZlPXtlID0+IG9uTW91c2VNb3ZlKGUpfVxuICAgICAgICBvblRvdWNoTW92ZT17ZSA9PiBvblRvdWNoTW92ZShlKX1cblxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgIGFuaW1lLmxlbmd0aCA9PT0gMCA/IFxuICAgICAgICAgIDxwPk5vIFJlc3VsdHM8L3A+XG4gICAgICAgICAgOlxuICAgICAgICAgIGFuaW1lLm1hcCgoYW5pbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxCYXJcIj48L2Rpdj5cbiAgICAgXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJvdXNlbFdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMiUgMCwgMTAwJSAwJSwgOTglIDEwMCUsIDAlIDEwMCUpO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDMwJTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogaGFzIHRvIGJlIHNjcm9sbCwgbm90IGF1dG8gKi9cbiAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLy8gSUUgMTArXG4gICAgICAgICAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lOyAvLyBGaXJlZm94XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHAge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcm9sbEJhciB7XG4gICAgICAgICAgd2lkdGg6ICR7c2Nyb2xsUHJvZ3Jlc3MgKyAnJSd9O1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNzEsIDUxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aXBlQ29udGVudCB7XG4gICAgICAgICAgYW5pbWF0aW9uOiB3aXBlQ29udGVudCAycztcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgd2lwZUNvbnRlbnQge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgIC5jYXJvdXNlbFdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICByaWdodDogMS43JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjcm9sbEJhciB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.d11d9850bb8c9bbbeba4.hot-update.js.map