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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["377138039", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carouselWrapper",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["377138039", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carousel ".concat(isDown === true ? "isDown" : "", " "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, anime.length === 0 ? __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["377138039", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]),
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
    id: "377138039",
    dynamic: [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:90%;-webkit-clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);margin:10px auto;height:35%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel.__jsx-style-dynamic-selector{width:100%;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;height:100%;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{width:100%;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollProgress + '%', ";height:2px;background-color:rgb(71,71,51);}.wipeContent.__jsx-style-dynamic-selector{-webkit-animation:wipeContent-__jsx-style-dynamic-selector 2s;animation:wipeContent-__jsx-style-dynamic-selector 2s;}@-webkit-keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{.carouselWrapper.__jsx-style-dynamic-selector{width:80%;margin:20px auto;position:relative;right:1.7%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUtrQixBQUd1QixBQVVELEFBY2EsQUFLWCxBQUlGLEFBSXdCLEFBTVYsQUFLZCxBQU1FLEFBTUMsU0FYRixDQWhEMEMsQUE0RGpDLENBbEROLEFBdUJqQixBQXFCRSxFQXpCRixNQW9CRSxLQXpCOEIsRUFiakIsQ0FrRFMsUUF4QlgsVUF5QkksQ0F4QmtCLFFBYm5DLEVBc0NJLHFCQXhCSix1QkEzQm1CLGdCQVhFLEFBMENyQixDQTlCYyxZQUNHLElBWkYsV0FDRSxBQVlHLGtCQUNlLGlDQUNmLGtCQUNDLEtBZEUsd0ZBZUgsS0FkTyxhQWUzQixzRkFkQSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9GaWx0ZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NlYXJjaENvbnRleHRcIjtcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCBBbmltZSBmcm9tIFwiLi9BbmltZVwiO1xuaW1wb3J0IHtkZXZpY2V9IGZyb20gXCIuLi9kZXZpY2VzXCJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyB0b3BBbmltZSB9KSA9PiB7XG4gIGNvbnN0IFthbmltZSwgc2V0QW5pbWVdID0gdXNlU3RhdGUodG9wQW5pbWUpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB7IGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KTtcbiAgY29uc3QgeyBzZWFyY2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG4gIGNvbnN0IHsgc2VsZWN0ZWQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dCk7XG5cbiAgY29uc3QgY2Fyb3VzZWxTZWxlY3RvciA9IHVzZVJlZigpO1xuICBjb25zdCBbc2Nyb2xsUHJvZ3Jlc3MsIHNldFNjcm9sbFByb2dyZXNzXSA9IHVzZVN0YXRlKFwiMFwiKTtcbiAgICBsZXQgZ2V0U2Nyb2xsUGVyY2VudCA9ICgpID0+IHtcbiAgICAgICByZXR1cm4gIChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgICAgICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbFdpZHRoIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldFdpZHRoKSkgKiAxMDBcbiAgICB9XG5cbiAgY29uc3QgW2lzRG93biwgc2V0SXNEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzY3JvbGxMZWZ0LCBzZXRTY3JvbGxMZWZ0XSA9IHVzZVN0YXRlKCk7XG5cbiAgbGV0IGNoYW5nZUFuaW1lID0gKHJlc3BvbnNlKSA9PiB7XG5cbiAgICBzZXRBbmltZShyZXNwb25zZSlcbiAgICBpZiggZmlsdGVyICE9PSBcImluaXRcIikge1xuXG4gICAgbGV0IGVsZW1lbnQgPSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnRcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwid2lwZUNvbnRlbnRcIilcbiAgICAgICAgdm9pZCBlbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndpcGVDb250ZW50XCIpO1xuXG4gICAgfVxuICB9XG5cblxuLy8gICBsZXQgb25Nb3VzZURvd24gPSBlID0+IHtcbi8vICAgICBzZXRJc0Rvd24odHJ1ZSk7XG4vLyAgICAgc2V0U3RhcnRYKGUucGFnZVggLSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQub2Zmc2V0TGVmdCk7XG4vLyAgICAgc2V0U2Nyb2xsTGVmdChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCk7XG4vLyAgIH07XG5cbi8vICAgbGV0IG9uTW91c2VMZWF2ZSA9IGUgPT4ge1xuLy8gICAgIHNldElzRG93bihmYWxzZSk7XG4vLyAgIH07XG5cbi8vICAgbGV0IG9uTW91c2VVcCA9IGUgPT4ge1xuLy8gICAgIHNldElzRG93bihmYWxzZSk7XG4vLyAgIH07XG5cbi8vICAgbGV0IG9uTW91c2VNb3ZlID0gZSA9PiB7XG4vLyAgICAgaWYgKCFpc0Rvd24pIHJldHVybjtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgeCA9IGUucGFnZVg7XG4vLyAgICAgY29uc3QgZGlzdGFuY2UgPSAoeCAtIHN0YXJ0WCkgKiAzO1xuLy8gICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3RhbmNlO1xuICAgXG4vLyAgICAgbGV0IHNjcm9sbFBlcmNlbnQgPSBnZXRTY3JvbGxQZXJjZW50KClcbi8vICAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbiAgICBcbi8vICAgfTtcblxuLy8gICBsZXQgb25Ub3VjaE1vdmUgPSBlID0+IHtcbi8vICAgICBsZXQgc2Nyb2xsUGVyY2VudCA9IGdldFNjcm9sbFBlcmNlbnQoKVxuLy8gICAgIHNldFNjcm9sbFByb2dyZXNzKHNjcm9sbFBlcmNlbnQpO1xuLy8gfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB1cmwgPSBcIlwiXG5cbiAgICBpZihmaWx0ZXIgPT09IFwidG9wXCIgfHwgZmlsdGVyID09PSBcImluaXRcIikge1xuICAgICAgdXJsID0gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvYnlwb3B1bGFyaXR5XCJcbiAgICB9IGVsc2UgaWYoZmlsdGVyID09PSBcInVwY29taW5nXCIpIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL3VwY29taW5nXCJcbiAgICB9IGVsc2UoXG4gICAgICB1cmwgPSBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS9tb3ZpZVwiXG4gICAgKVxuICAgICBcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gY2hhbmdlQW5pbWUocmVzcG9uc2VKc29uLnRvcCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gIH0sIFtmaWx0ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2gucXVlcnkgIT09IFwiXCIpIHtcbiAgICAgIGZ1bmN0aW9uIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcykge1xuICAgICAgICBjb25zdCBxdWVyeUl0ZW1zID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoXG4gICAgICAgICAga2V5ID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSl9YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcXVlcnlJdGVtcy5qb2luKFwiJlwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFzZXVybCA9IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3NlYXJjaC9hbmltZVwiO1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcTogc2VhcmNoLnF1ZXJ5LFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICB0eXBlOiBcInR2XCIsXG4gICAgICAgIGxpbWl0OiAyMFxuICAgICAgfTtcblxuICAgICAgbGV0IHVybCA9IGJhc2V1cmwgKyBcIj9cIiArIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcyk7XG4gICAgICAgICAgY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3dpcGVDb250ZW50JylcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0QW5pbWUocmVzcG9uc2VKc29uLnJlc3VsdHMpIClcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3dpcGVDb250ZW50JylcbiAgICAgICAgfSw1MDApKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfSwgW3NlYXJjaC5xdWVyeV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFTEVDVF9BTklNRVwiLCBzZWxlY3RlZDoge30gfSk7XG4gIH0sIFthbmltZV0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coZmlsdGVyKVxuICAvLyAgIGlmKGZpbHRlciA9PT0gXCJpbml0XCIpIHtcblxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBsZXQgZWxlbWVudCA9IGNhcm91c2VsU2VsZWN0b3IuY3VycmVudFxuICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwid2lwZUNvbnRlbnRcIilcbiAgLy8gICAgIHZvaWQgZWxlbWVudC5vZmZzZXRXaWR0aFxuICAvLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwid2lwZUNvbnRlbnRcIik7XG4gIC8vICAgfVxuICAvLyB9LCBbZmlsdGVyXSlcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsV3JhcHBlclwiIFxuICAgID5cbiAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gXG4gICAgICA8TG9hZGVyICB0eXBlPVwiQ2lyY2xlc1wiIGNvbG9yPVwiI2VmNTA1MFwiIGhlaWdodD17NDV9IHdpZHRoPXs0NX0gLz5cbiAgICAgIDpcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtpc0Rvd24gPT09IHRydWUgPyBcImlzRG93blwiIDogXCJcIn0gYH1cbiAgICAgICAgcmVmPXtjYXJvdXNlbFNlbGVjdG9yfVxuICAgICAgICAvLyBvbk1vdXNlRG93bj17ZSA9PiBvbk1vdXNlRG93bihlKX1cbiAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXtlID0+IG9uTW91c2VMZWF2ZShlKX1cbiAgICAgICAgLy8gb25Nb3VzZVVwPXtlID0+IG9uTW91c2VVcChlKX1cbiAgICAgICAgLy8gb25Nb3VzZU1vdmU9e2UgPT4gb25Nb3VzZU1vdmUoZSl9XG4gICAgICAgIC8vIG9uVG91Y2hNb3ZlPXtlID0+IG9uVG91Y2hNb3ZlKGUpfVxuXG4gICAgICA+XG4gICAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgYW5pbWUubGVuZ3RoID09PSAwID8gXG4gICAgICAgICAgPHA+Tm8gUmVzdWx0czwvcD5cbiAgICAgICAgICA6XG4gICAgICAgICAgYW5pbWUubWFwKChhbmltZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxBbmltZSBrZXk9e2luZGV4fSBhbmltZT17YW5pbWV9IC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJvdXNlbFdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyJSAwLCAxMDAlIDAlLCA5OCUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMzUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTc1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvLyBJRSAxMCtcbiAgICAgICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7IC8vIEZpcmVmb3hcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwgcCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2Nyb2xsQmFyIHtcbiAgICAgICAgICB3aWR0aDogJHtzY3JvbGxQcm9ncmVzcyArICclJ307XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCA3MSwgNTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndpcGVDb250ZW50IHtcbiAgICAgICAgICBhbmltYXRpb246IHdpcGVDb250ZW50IDJzO1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyB3aXBlQ29udGVudCB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0ge1xuICAgICAgICAgICAgLmNhcm91c2VsV3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxLjclO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2Nyb2xsQmFyIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.70bb4f4bc59408e7fa34.hot-update.js.map