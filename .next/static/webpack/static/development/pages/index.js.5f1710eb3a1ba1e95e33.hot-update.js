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
  }; //   let onMouseDown = e => {
  //     setIsDown(true);
  //     setStartX(e.pageX - carouselSelector.current.offsetLeft);
  //     setScrollLeft(carouselSelector.current.scrollLeft);
  //   };
  //   let onMouseLeave = e => {
  //     setIsDown(false);
  //   };
  //   let onMouseUp = e => {
  //     setIsDown(false);
  //   };
  //   let onMouseMove = e => {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX;
  //     const distance = (x - startX) * 3;
  //     carouselSelector.current.scrollLeft = scrollLeft - distance;
  //     let scrollPercent = getScrollPercent()
  //     setScrollProgress(scrollPercent);
  //   };
  //   let onTouchMove = e => {
  //     let scrollPercent = getScrollPercent()
  //     setScrollProgress(scrollPercent);
  // }


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var url = "";

    if (filter === "top" || filter === "init") {
      url = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
    } else if (filter === "upcoming") {
      url = "https://api.jikan.moe/v3/top/anime/1/upcoming";
    } else url = "https://api.jikan.moe/v3/top/anime/1/movie";

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
        limit: 20
      };
      var url = baseurl + "?" + formatQueryParams(params);
      carouselSelector.current.classList.add('wipeContent');
      setLoading(true);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return setAnime(responseJson.results);
      }).then(function (res) {
        return setTimeout(function () {
          setLoading(false);
          carouselSelector.current.classList.add('wipeContent');
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["7917903", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, loading === true ? __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
    type: "Circles",
    color: "#ef5050",
    height: 45,
    width: 45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }) : __jsx("div", {
    ref: carouselSelector // onMouseDown={e => onMouseDown(e)}
    // onMouseLeave={e => onMouseLeave(e)}
    // onMouseUp={e => onMouseUp(e)}
    // onMouseMove={e => onMouseMove(e)}
    // onTouchMove={e => onTouchMove(e)}
    ,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["7917903", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carousel ".concat(isDown === true ? "isDown" : "", " "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, anime.length === 0 ? __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["7917903", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "No Results") : anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "7917903",
    dynamic: [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:90%;-webkit-clip-path:polygon(1.5% 0,100% 0%,98.5% 100%,0% 100%);clip-path:polygon(1.5% 0,100% 0%,98.5% 100%,0% 100%);margin:10px auto;height:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel.__jsx-style-dynamic-selector{width:100%;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;height:100%;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{width:100%;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollProgress + '%', ";height:2px;background-color:rgb(71,71,51);}.wipeContent.__jsx-style-dynamic-selector{-webkit-animation:wipeContent-__jsx-style-dynamic-selector 2s;animation:wipeContent-__jsx-style-dynamic-selector 2s;}@-webkit-keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{.carouselWrapper.__jsx-style-dynamic-selector{width:80.5%;margin:20px auto;position:relative;right:1.7%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUtrQixBQUd1QixBQVVELEFBY2EsQUFLWCxBQUlGLEFBSXdCLEFBTVYsQUFLZCxBQU1FLEFBTUcsU0FYSixDQWhEOEMsQ0FVM0MsQUF1QmpCLEFBcUJFLENBTXFCLENBL0J2QixNQW9CRSxLQXpCOEIsRUFiakIsR0FrRFMsTUF4QlgsV0FDc0IsQ0F3QmxCLE9BckNqQixJQXNDSSxtQkF4QkosdUJBM0JtQixnQkErQm5CLENBOUJjLE9BWk8sS0FhSixZQVpGLEdBYUssUUFaSCxVQWFrQixpQ0FDZixrQkFDQyxhQWRFLGdGQWVILGFBZE8sS0FlM0IsOEZBZEEiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgQW5pbWUgZnJvbSBcIi4vQW5pbWVcIjtcbmltcG9ydCB7ZGV2aWNlfSBmcm9tIFwiLi4vZGV2aWNlc1wiXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJ1xuXG5cbmNvbnN0IENhcm91c2VsID0gKHsgdG9wQW5pbWUgfSkgPT4ge1xuICBjb25zdCBbYW5pbWUsIHNldEFuaW1lXSA9IHVzZVN0YXRlKHRvcEFuaW1lKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgeyBmaWx0ZXIgfSA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dCk7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuXG4gIGNvbnN0IGNhcm91c2VsU2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Njcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzc10gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgbGV0IGdldFNjcm9sbFBlcmNlbnQgPSAoKSA9PiB7XG4gICAgICAgcmV0dXJuICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG4gICAgfVxuXG4gIGNvbnN0IFtpc0Rvd24sIHNldElzRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2Nyb2xsTGVmdCwgc2V0U2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGxldCBjaGFuZ2VBbmltZSA9IChyZXNwb25zZSkgPT4ge1xuXG4gICAgc2V0QW5pbWUocmVzcG9uc2UpXG4gICAgaWYoIGZpbHRlciAhPT0gXCJpbml0XCIpIHtcblxuICAgIGxldCBlbGVtZW50ID0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIndpcGVDb250ZW50XCIpXG4gICAgICAgIHZvaWQgZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3aXBlQ29udGVudFwiKTtcblxuICAgIH1cbiAgfVxuXG5cbi8vICAgbGV0IG9uTW91c2VEb3duID0gZSA9PiB7XG4vLyAgICAgc2V0SXNEb3duKHRydWUpO1xuLy8gICAgIHNldFN0YXJ0WChlLnBhZ2VYIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldExlZnQpO1xuLy8gICAgIHNldFNjcm9sbExlZnQoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQpO1xuLy8gICB9O1xuXG4vLyAgIGxldCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcbi8vICAgICBzZXRJc0Rvd24oZmFsc2UpO1xuLy8gICB9O1xuXG4vLyAgIGxldCBvbk1vdXNlVXAgPSBlID0+IHtcbi8vICAgICBzZXRJc0Rvd24oZmFsc2UpO1xuLy8gICB9O1xuXG4vLyAgIGxldCBvbk1vdXNlTW92ZSA9IGUgPT4ge1xuLy8gICAgIGlmICghaXNEb3duKSByZXR1cm47XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IHggPSBlLnBhZ2VYO1xuLy8gICAgIGNvbnN0IGRpc3RhbmNlID0gKHggLSBzdGFydFgpICogMztcbi8vICAgICBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBkaXN0YW5jZTtcbiAgIFxuLy8gICAgIGxldCBzY3JvbGxQZXJjZW50ID0gZ2V0U2Nyb2xsUGVyY2VudCgpXG4vLyAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Moc2Nyb2xsUGVyY2VudCk7XG4gICAgXG4vLyAgIH07XG5cbi8vICAgbGV0IG9uVG91Y2hNb3ZlID0gZSA9PiB7XG4vLyAgICAgbGV0IHNjcm9sbFBlcmNlbnQgPSBnZXRTY3JvbGxQZXJjZW50KClcbi8vICAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbi8vIH1cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdXJsID0gXCJcIlxuXG4gICAgaWYoZmlsdGVyID09PSBcInRvcFwiIHx8IGZpbHRlciA9PT0gXCJpbml0XCIpIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL2J5cG9wdWxhcml0eVwiXG4gICAgfSBlbHNlIGlmKGZpbHRlciA9PT0gXCJ1cGNvbWluZ1wiKSB7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS91cGNvbWluZ1wiXG4gICAgfSBlbHNlKFxuICAgICAgdXJsID0gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvbW92aWVcIlxuICAgIClcbiAgICAgXG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IGNoYW5nZUFuaW1lKHJlc3BvbnNlSnNvbi50b3ApKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICB9LCBbZmlsdGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoLnF1ZXJ5ICE9PSBcIlwiKSB7XG4gICAgICBmdW5jdGlvbiBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnlJdGVtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKFxuICAgICAgICAgIGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5SXRlbXMuam9pbihcIiZcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9zZWFyY2gvYW5pbWVcIjtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHE6IHNlYXJjaC5xdWVyeSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdHlwZTogXCJ0dlwiLFxuICAgICAgICBsaW1pdDogMjBcbiAgICAgIH07XG5cbiAgICAgIGxldCB1cmwgPSBiYXNldXJsICsgXCI/XCIgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd3aXBlQ29udGVudCcpXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi5yZXN1bHRzKSApXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd3aXBlQ29udGVudCcpXG4gICAgICAgIH0sNTAwKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFtzZWFyY2gucXVlcnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRUxFQ1RfQU5JTUVcIiwgc2VsZWN0ZWQ6IHt9IH0pO1xuICB9LCBbYW5pbWVdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGZpbHRlcilcbiAgLy8gICBpZihmaWx0ZXIgPT09IFwiaW5pdFwiKSB7XG5cbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgbGV0IGVsZW1lbnQgPSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnRcbiAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIndpcGVDb250ZW50XCIpXG4gIC8vICAgICB2b2lkIGVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndpcGVDb250ZW50XCIpO1xuICAvLyAgIH1cbiAgLy8gfSwgW2ZpbHRlcl0pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFdyYXBwZXJcIiBcbiAgICA+XG4gICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IFxuICAgICAgPExvYWRlciAgdHlwZT1cIkNpcmNsZXNcIiBjb2xvcj1cIiNlZjUwNTBcIiBoZWlnaHQ9ezQ1fSB3aWR0aD17NDV9IC8+XG4gICAgICA6XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsICR7aXNEb3duID09PSB0cnVlID8gXCJpc0Rvd25cIiA6IFwiXCJ9IGB9XG4gICAgICAgIHJlZj17Y2Fyb3VzZWxTZWxlY3Rvcn1cbiAgICAgICAgLy8gb25Nb3VzZURvd249e2UgPT4gb25Nb3VzZURvd24oZSl9XG4gICAgICAgIC8vIG9uTW91c2VMZWF2ZT17ZSA9PiBvbk1vdXNlTGVhdmUoZSl9XG4gICAgICAgIC8vIG9uTW91c2VVcD17ZSA9PiBvbk1vdXNlVXAoZSl9XG4gICAgICAgIC8vIG9uTW91c2VNb3ZlPXtlID0+IG9uTW91c2VNb3ZlKGUpfVxuICAgICAgICAvLyBvblRvdWNoTW92ZT17ZSA9PiBvblRvdWNoTW92ZShlKX1cblxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgIGFuaW1lLmxlbmd0aCA9PT0gMCA/IFxuICAgICAgICAgIDxwPk5vIFJlc3VsdHM8L3A+XG4gICAgICAgICAgOlxuICAgICAgICAgIGFuaW1lLm1hcCgoYW5pbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2Fyb3VzZWxXcmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMS41JSAwLCAxMDAlIDAlLCA5OC41JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogaGFzIHRvIGJlIHNjcm9sbCwgbm90IGF1dG8gKi9cbiAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElFIDEwK1xuICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTsgLy8gRmlyZWZveFxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbCBwIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JvbGxCYXIge1xuICAgICAgICAgIHdpZHRoOiAke3Njcm9sbFByb2dyZXNzICsgJyUnfTtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDcxLCA1MSk7XG4gICAgICAgIH1cblxuICAgICAgICAud2lwZUNvbnRlbnQge1xuICAgICAgICAgIGFuaW1hdGlvbjogd2lwZUNvbnRlbnQgMnM7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHdpcGVDb250ZW50IHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XG4gICAgICAgICAgICAuY2Fyb3VzZWxXcmFwcGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwLjUlO1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICByaWdodDogMS43JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjcm9sbEJhciB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.5f1710eb3a1ba1e95e33.hot-update.js.map