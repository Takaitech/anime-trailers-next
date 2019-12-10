module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Anime.js":
/*!*****************************!*\
  !*** ./components/Anime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Anime = ({
  anime
}) => {
  const {
    selected,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__["AnimeContext"]);
  return __jsx("div", {
    onClick: () => dispatch({
      type: 'SELECT_ANIME',
      selected: anime
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1220129868", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1220129868", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1220129868",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none', _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"],
    __self: undefined
  }, `.anime.__jsx-style-dynamic-selector{max-width:${selected.mal_id != anime.mal_id ? "75px" : "auto"};z-index:50;-webkit-clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:${selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none'};-webkit-filter:${selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none'};filter:${selected.mal_id != anime.mal_id ? 'grayscale(100%)' : 'none'};}@media ${_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop}{.anime.__jsx-style-dynamic-selector{max-width:${selected.mal_id != anime.mal_id ? "150px" : "auto"};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBR3dELEFBTTNCLEFBUStCLFlBUEMsMkJBTmpDLEFBZVgsV0FkbUQsTUFNZixnRkFDeEMsa0JBTEEiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9BbmltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtBbmltZUNvbnRleHR9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7ZGV2aWNlfSBmcm9tICcuLi8uL2RldmljZXMnXG5jb25zdCBBbmltZSA9ICh7YW5pbWV9KSA9PiB7XG4gICBcbiAgICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgXG4gICByZXR1cm4gKDxkaXYgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goe3R5cGU6J1NFTEVDVF9BTklNRScsc2VsZWN0ZWQ6IGFuaW1lfSkgfSBjbGFzc05hbWU9XCJhbmltZVwiPlxuICAgICAgICA8aW1nIGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPXthbmltZS5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYW5pbWUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCI3NXB4XCIgOiBcImF1dG9cIn07XG4gICAgICAgICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEyJSAwLCAxMDAlIDAsIDg1JSAxMDAlLCAwIDEwMCUpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gJ2dyYXlzY2FsZSgxMDAlKScgOiAnbm9uZSd9OyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWQgPyAnZ3JheXNjYWxlKDEwMCUpJyA6ICdub25lJ307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmFuaW1lIHsgXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCIxNTBweFwiIDogXCJhdXRvXCJ9O1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lIl19 */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ }),

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _Anime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Anime */ "./components/Anime.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../devices */ "./devices.js");

var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const Carousel = ({
  topAnime
}) => {
  const {
    0: anime,
    1: setAnime
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(topAnime);
  const {
    filter
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_3__["FilterContext"]);
  const {
    query
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__["SearchContext"]);
  const {
    selected,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_5__["AnimeContext"]);
  const carouselSelector = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const {
    0: scrollProgress,
    1: setScrollProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0");

  let getScrollPercent = () => {
    return carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
  };

  const {
    0: isDown,
    1: setIsDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: startX,
    1: setStartX
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: scrollLeft,
    1: setScrollLeft
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();

  let onMouseDown = e => {
    setIsDown(true);
    setStartX(e.pageX - carouselSelector.current.offsetLeft);
    setScrollLeft(carouselSelector.current.scrollLeft);
    let scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  let onMouseLeave = e => {
    setIsDown(false);
  };

  let onMouseUp = e => {
    setIsDown(false);
    let scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  let onMouseMove = e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const distance = (x - startX) * 3;
    carouselSelector.current.scrollLeft = scrollLeft - distance;
  };

  let onTouchStart = e => {
    let scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  let onTouchEnd = e => {
    let scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const url = filter === "top" ? "https://api.jikan.moe/v3/top/anime/1/bypopularity" : "https://api.jikan.moe/v3/top/anime/1/upcoming";
    fetch(url).then(response => response.json()).then(responseJson => setAnime(responseJson.top)).catch(err => console.log(err));
  }, [filter]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (query !== "") {
      function formatQueryParams(params) {
        const queryItems = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);

        return queryItems.join("&");
      }

      const baseurl = "https://api.jikan.moe/v3/search/anime";
      let params = {
        q: query,
        page: 1,
        type: "tv",
        limit: 10
      };
      let url = baseurl + "?" + formatQueryParams(params);
      fetch(url).then(response => response.json()).then(responseJson => setAnime(responseJson.results)).catch(err => console.log(err));
    }
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
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
    __self: undefined
  }, __jsx("div", {
    ref: carouselSelector,
    onMouseDown: e => onMouseDown(e),
    onMouseLeave: e => onMouseLeave(e),
    onMouseUp: e => onMouseUp(e),
    onMouseMove: e => onMouseMove(e),
    onTouchStart: e => onTouchStart(e),
    onTouchEnd: e => onTouchEnd(e),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["569060357", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + `carousel ${isDown === true ? "isDown" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, anime.map((anime, index) => __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    anime: anime,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["569060357", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "569060357",
    dynamic: [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop],
    __self: undefined
  }, `.carouselWrapper.__jsx-style-dynamic-selector{width:100%;}.carousel.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.scrollBar.__jsx-style-dynamic-selector{width:${scrollProgress + '%'};height:2px;background-color:rgb(71,71,51);-webkit-transition:0.3s width;transition:0.3s width;}@media ${_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop}{.scrollBar.__jsx-style-dynamic-selector{-webkit-transition:0.5s width;transition:0.5s width;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0hrQixBQUdzQixBQUlJLEFBU1MsQUFLWCxBQUlzQixBQVFQLFdBN0I5QixFQWtCQSxFQWRlLFNBU2lCLFdBU25CLFdBQ3NCLE1BUS9CLEVBakJKLHVCQVV3QixZQW5CTCxpQkFDRixlQUNHLFFBa0JwQixVQWpCbUMsaUNBQ25DIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dFwiO1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0FuaW1lQ29udGV4dFwiO1xuaW1wb3J0IEFuaW1lIGZyb20gXCIuL0FuaW1lXCI7XG5pbXBvcnQge2RldmljZX0gZnJvbSBcIi4uL2RldmljZXNcIlxuXG5jb25zdCBDYXJvdXNlbCA9ICh7IHRvcEFuaW1lIH0pID0+IHtcbiAgY29uc3QgW2FuaW1lLCBzZXRBbmltZV0gPSB1c2VTdGF0ZSh0b3BBbmltZSk7XG4gIGNvbnN0IHsgZmlsdGVyIH0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuXG4gIGNvbnN0IGNhcm91c2VsU2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Njcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzc10gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgbGV0IGdldFNjcm9sbFBlcmNlbnQgPSAoKSA9PiB7XG4gICAgICAgcmV0dXJuICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG4gICAgfVxuXG4gIGNvbnN0IFtpc0Rvd24sIHNldElzRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2Nyb2xsTGVmdCwgc2V0U2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGxldCBvbk1vdXNlRG93biA9IGUgPT4ge1xuICAgIHNldElzRG93bih0cnVlKTtcbiAgICBzZXRTdGFydFgoZS5wYWdlWCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRMZWZ0KTtcbiAgICBzZXRTY3JvbGxMZWZ0KGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0KTtcbiAgICBsZXQgc2Nyb2xsUGVyY2VudCA9IGdldFNjcm9sbFBlcmNlbnQoKVxuICAgIHNldFNjcm9sbFByb2dyZXNzKHNjcm9sbFBlcmNlbnQpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlVXAgPSBlID0+IHtcbiAgICBzZXRJc0Rvd24oZmFsc2UpO1xuICAgIGxldCBzY3JvbGxQZXJjZW50ID0gZ2V0U2Nyb2xsUGVyY2VudCgpXG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3Moc2Nyb2xsUGVyY2VudCk7XG4gIH07XG5cbiAgbGV0IG9uTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgaWYgKCFpc0Rvd24pIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeCA9IGUucGFnZVg7XG4gICAgY29uc3QgZGlzdGFuY2UgPSAoeCAtIHN0YXJ0WCkgKiAzO1xuICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3RhbmNlO1xuICAgXG4gICAgXG4gIH07XG5cbiAgbGV0IG9uVG91Y2hTdGFydCA9IGUgPT4ge1xuICAgICAgICBsZXQgc2Nyb2xsUGVyY2VudCA9IGdldFNjcm9sbFBlcmNlbnQoKVxuICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbiAgfVxuXG4gIGxldCBvblRvdWNoRW5kID0gZSA9PiB7XG4gICAgICAgIGxldCBzY3JvbGxQZXJjZW50ID0gZ2V0U2Nyb2xsUGVyY2VudCgpXG4gICAgICAgIHNldFNjcm9sbFByb2dyZXNzKHNjcm9sbFBlcmNlbnQpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgZmlsdGVyID09PSBcInRvcFwiXG4gICAgICAgID8gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvYnlwb3B1bGFyaXR5XCJcbiAgICAgICAgOiBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS91cGNvbWluZ1wiO1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24udG9wKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH0sIFtmaWx0ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChxdWVyeSAhPT0gXCJcIikge1xuICAgICAgZnVuY3Rpb24gZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5SXRlbXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChcbiAgICAgICAgICBrZXkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKX1gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBxdWVyeUl0ZW1zLmpvaW4oXCImXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBiYXNldXJsID0gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvc2VhcmNoL2FuaW1lXCI7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdHlwZTogXCJ0dlwiLFxuICAgICAgICBsaW1pdDogMTBcbiAgICAgIH07XG5cbiAgICAgIGxldCB1cmwgPSBiYXNldXJsICsgXCI/XCIgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRBbmltZShyZXNwb25zZUpzb24ucmVzdWx0cykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9LCBbcXVlcnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRUxFQ1RfQU5JTUVcIiwgc2VsZWN0ZWQ6IHt9IH0pO1xuICB9LCBbYW5pbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxXcmFwcGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsICR7aXNEb3duID09PSB0cnVlID8gXCJpc0Rvd25cIiA6IFwiXCJ9YH1cbiAgICAgICAgcmVmPXtjYXJvdXNlbFNlbGVjdG9yfVxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiBvbk1vdXNlRG93bihlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtlID0+IG9uTW91c2VMZWF2ZShlKX1cbiAgICAgICAgb25Nb3VzZVVwPXtlID0+IG9uTW91c2VVcChlKX1cbiAgICAgICAgb25Nb3VzZU1vdmU9e2UgPT4gb25Nb3VzZU1vdmUoZSl9XG4gICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiBvblRvdWNoU3RhcnQoZSl9XG4gICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4gb25Ub3VjaEVuZChlKX1cblxuICAgICAgPlxuICAgICAgICB7YW5pbWUubWFwKChhbmltZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxCYXJcIj48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcm91c2VsV3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElFIDEwK1xuICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTsgLy8gRmlyZWZveFxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JvbGxCYXIge1xuICAgICAgICAgIHdpZHRoOiAke3Njcm9sbFByb2dyZXNzICsgJyUnfTtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDcxLCA1MSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyB3aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgIC5zY3JvbGxCYXIge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgd2lkdGg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/Filters.js":
/*!*******************************!*\
  !*** ./components/Filters.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Filters = () => {
  const {
    dispatch,
    filter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_1__["FilterContext"]);

  const changeFilter = e => {
    if (e.target.getAttribute('data-filter') === 'Top') {
      dispatch({
        type: 'CHANGE_FILTER',
        filter: 'top'
      });
    } else if (e.target.getAttribute('data-filter') === 'Upcoming') {
      dispatch({
        type: 'CHANGE_FILTER',
        filter: 'upcoming'
      });
    }
  };

  return __jsx("div", {
    className: "filterBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "filtersWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("span", {
    onClick: e => changeFilter(e),
    className: "upcomingFilter",
    "data-filter": "Upcoming",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Upcoming"), __jsx("span", {
    onClick: e => changeFilter(e),
    className: "topFilter",
    "data-filter": "Top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Top")), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, `  
                .filterBar {
                    min-height: 20px;
                }
                .filtersWrapper {
                    position: relative;
                    top: 10px;
                    margin-left: 15px;
                }

               span {
                    position: relative;
                    color: white;
                    font-size: 1.5em;
                    z-index: 1;
                }

                .topFilter {
                    display: block;
                    margin-top: 10px;
                    color: ${filter === 'top' ? "white" : "#5F5F5F"}

                }
                .upcomingFilter {
                    color: ${filter === 'upcoming' ? "white" : "#5F5F5F"}
                }

            `));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");

var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const Footer = () => {
  const {
    selected
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_3__["AnimeContext"]);
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_4__["OverlayContext"]);

  const showOverlay = () => {
    if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0) {
      dispatch({
        type: 'HIDE_SHOW_OVERLAY',
        boolean: false
      });
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1010670747", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("input", {
    onClick: e => showOverlay(e),
    type: "button",
    value: "VIDEOS",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1010670747", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1010670747", [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3']]]) + " " + "buttonWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1010670747",
    dynamic: [!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3'],
    __self: undefined
  }, `.footer.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;z-index:0;}.buttonWrapper.__jsx-style-dynamic-selector{background-color:#E6E6E6;min-height:150px;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}input.__jsx-style-dynamic-selector{font-family:council,sans-serif;font-weight:400;font-style:normal;font-size:2em;background-color:${!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0 ? '#fd6568' : '#C3C3C3'};color:black;height:75px;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;position:relative;left:25%;top:37.5px;-webkit-clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);-webkit-clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);clip-path:polygon(10% 10%,89% 6%,94% 91%,10% 90%);}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cd0IsQUFHZ0MsQUFVYyxBQU1PLFdBZm5CLGNBVUksTUFNRCxXQUxILEtBTUssa0JBQ0osY0FDZ0MsTUFsQnJCLFFBVzdCLGdDQVFnQixZQUNBLFlBQ0MsaUNBcEJLLGtCQUNULEFBb0JRLFNBbkJQLFNBb0JELENBbkJiLFFBb0JlLFdBQ2tELDBEQUNSLDRHQUN6RCIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7IE92ZXJsYXlDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvT3ZlcmxheUNvbnRleHQnXG5jb25zdCBGb290ZXIgPSAoKSA9PiAge1xuXG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChPdmVybGF5Q29udGV4dClcblxuICAgIGNvbnN0IHNob3dPdmVybGF5ID0gKCkgPT4ge1xuICAgICAgICBpZighT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTonSElERV9TSE9XX09WRVJMQVknLCBib29sZWFuOmZhbHNlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXsoZSkgPT4gc2hvd092ZXJsYXkoZSl9IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlZJREVPU1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbldyYXBwZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAuYnV0dG9uV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGNvdW5jaWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IU9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT0gMCA/ICcjZmQ2NTY4JyA6ICcjQzNDM0MzJ307XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNTAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDM3LjVweDsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMTAlIDEwJSwgODklIDYlLCA5NCUgOTElLCAxMCUgOTAlKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAxMCUsIDg5JSA2JSwgOTQlIDkxJSwgMTAlIDkwJSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiXX0= */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Header = () => __jsx("header", {
  className: "jsx-4023935905",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-4023935905" + " " + "shape",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-4023935905" + " " + "logoWrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/logo-art.png",
  className: "jsx-4023935905" + " " + "logoArt",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("h1", {
  className: "jsx-4023935905" + " " + "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "ANIME TRAILERS")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4023935905",
  __self: undefined
}, "header.jsx-4023935905{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;position:absolute;top:0;right:0;}.clipShape.jsx-4023935905{background-color:#E6E6E6;-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%;min-height:150px;}.logoWrapper.jsx-4023935905{background-color:#E6E6E6;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;min-height:150px;text-align:right;}.logoArt.jsx-4023935905{height:110px;margin:15px 15px 0 0;}.title.jsx-4023935905{font-family:council,sans-serif;font-weight:400;font-style:normal;text-align:center;font-size:21pt;text-align:center;width:80%;margin:0 10px 5px 0px;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9vQixBQUs4QixBQVNZLEFBT0EsQUFPWixBQU9tQixhQU5YLFlBZFQsQUFPQyxNQWNHLEdBTHBCLGFBTXNCLGtCQUNBLFFBdEJELENBVlEsRUFpQlIsT0FnQkYsT0FyQm5CLEdBTXFCLEtBZ0JDLFlBZHRCLE1BZWMsVUFDWSxzQkFDRCxxQkFDekIsRUFyQ2UsV0FDTSxrQkFDWixNQUNHLFFBQ1oiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGhlYWRlciA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGVcIj48L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb0FydFwiIHNyYz1cIi9pbWFnZXMvbG9nby1hcnQucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BTklNRSBUUkFJTEVSUzwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG5cblxuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbGlwU2hhcGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDUlO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNTAlO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nb0FydHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAxNXB4IDAgMDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGNvdW5jaWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFwdDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCA1cHggMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Search = () => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_2__["SearchContext"]);
  const searchText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

  const updateSearchQuery = e => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_QUERY',
      query: searchText.current.value
    });
  };

  return __jsx("div", {
    className: "jsx-1130896420" + " " + "searchBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("input", {
    ref: searchText,
    placeholder: "Search",
    className: "jsx-1130896420" + " " + "searchInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("img", {
    src: "/images/search-icon.png",
    onClick: e => updateSearchQuery(e),
    type: "submit",
    className: "jsx-1130896420" + " " + "submitSearch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1130896420",
    __self: undefined
  }, ".searchBar.jsx-1130896420{min-height:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.searchInput.jsx-1130896420{background-color:transparent;border:none;border-bottom:1px solid white;margin:15px;margin-right:10px;color:white;font-size:1em;font-family:campaign,sans-serif;font-weight:200;font-style:normal;width:45%;}.submitSearch.jsx-1130896420{height:15px;color:white;-webkit-appearance:none;-moz-appearance:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCd0IsQUFHcUMsQUFNYSxBQWNqQixZQUNBLElBcEJBLFFBcUJZLEtBZlosWUFDa0IsT0FlVCxxQkFDVCxFQWZBLFVBZ0JoQixFQWZzQixPQVJDLFdBU1AsWUFDRSxjQUNtQixnQ0FDakIsZ0JBQ0UsUUFadEIsVUFhYyxVQUNkIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0J1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG5cbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KCBTZWFyY2hDb250ZXh0IClcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gdXNlUmVmKCcnKTtcblxuICAgIGNvbnN0IHVwZGF0ZVNlYXJjaFF1ZXJ5ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOidVUERBVEVfUVVFUlknLCBxdWVyeTogc2VhcmNoVGV4dC5jdXJyZW50LnZhbHVlfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaEJhclwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaElucHV0XCIgcmVmPXtzZWFyY2hUZXh0fSBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2VhcmNoLWljb24ucG5nXCIgb25DbGljaz17KGUpID0+IHVwZGF0ZVNlYXJjaFF1ZXJ5KGUpfSBjbGFzc05hbWU9XCJzdWJtaXRTZWFyY2hcIiB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuc2VhcmNoQmFyIHtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zZWFyY2hJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsgIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7IFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjYW1wYWlnbiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zdWJtaXRTZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2giXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/VideosOverlay.js":
/*!*************************************!*\
  !*** ./components/VideosOverlay.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const VideosOverlay = () => {
  const {
    selected
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__["AnimeContext"]);
  const {
    dispatch,
    hidden
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_3__["OverlayContext"]);
  const {
    0: trailers,
    1: setTrailers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: trailer,
    1: setTrailer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (selected.mal_id !== undefined) {
      fetch("https://api.jikan.moe/v3/anime/" + selected.mal_id + "/videos").then(response => response.json()).then(responseJson => setTrailers(responseJson.promo)).catch(err => {
        console.log(err);
      });
    }
  }, [selected]);

  const hideOverlay = () => {
    dispatch({
      type: 'HIDE_SHOW_OVERLAY',
      boolean: true
    });
  };

  return __jsx("div", {
    onClick: () => hideOverlay(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]) + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, selected.title), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]) + " " + 'rating',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, selected.score + '/10')), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]) + " " + 'trailerCarousel',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, trailers.map((trailer, index) => __jsx("a", {
    href: trailer.video_url,
    key: index,
    "data-lity": true,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]) + " " + "trailerlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]) + " " + "trailer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("img", {
    src: trailer.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2684229314", [hidden === true ? "none" : "flex"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, trailer.title))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2684229314",
    dynamic: [hidden === true ? "none" : "flex"],
    __self: undefined
  }, `.overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:rgb(0,0,0);background-color:rgb(0,0,0,.9);margin-left:auto;margin-right:auto;display:${hidden === true ? "none" : "flex"};-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.info.__jsx-style-dynamic-selector{width:80%;margin:0 auto;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.title.__jsx-style-dynamic-selector{color:white;text-align:left;margin-bottom:10px;}.rating.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:16px;margin:0;}.trailerCarousel.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.trailerLink.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:visited{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:active{-webkit-text-decoration:none;text-decoration:none;}.trailer.__jsx-style-dynamic-selector{width:80%;margin:0 auto 10px auto;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:10px;-webkit-text-decoration:none;text-decoration:none;border:none;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHdCLEFBSXVDLEFBZVIsQUFNRSxBQU1BLEFBUUQsQUFRaEIsQUFHeUIsQUFJQSxBQUlBLEFBSUEsQUFJVixBQUlDLEFBR0MsVUFyREUsQUErQ1MsQ0EzQlYsQUErQmpCLENBN0NvQixBQU1BLEFBMENBLE1BckVWLE1BQ0UsQUFlSyxJQU1NLEFBTUosQUEwQ0EsS0FwRVIsQ0E2RFgsTUE1RFksR0EwQkMsQUEwQ1ksSUFoRHpCLENBbkJnQixFQXNDaEIsQUFJQSxBQUlBLEFBSUEsQUFJQSxFQTVCQSxRQXpCZ0MsZUFZaEMsVUFtQm1CLEdBOUJnQixLQWtFbkIsWUFDaEIsY0FsRXFCLGlCQUNBLE1BNkJFLFlBNUJrQixxQ0FDZiw0Q0E0QjFCLGtDQTNCQSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL1ZpZGVvc092ZXJsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9BbmltZUNvbnRleHQnXG5pbXBvcnQgeyBPdmVybGF5Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL092ZXJsYXlDb250ZXh0J1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nXG5cblxuY29uc3QgVmlkZW9zT3ZlcmxheSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dClcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBoaWRkZW4gfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG4gICAgY29uc3QgWyB0cmFpbGVycywgc2V0VHJhaWxlcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBbIHRyYWlsZXIsIHNldFRyYWlsZXJdID0gdXNlU3RhdGUoKVxuXG5cbiAgICBcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkLm1hbF9pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9hbmltZS9cIiArIHNlbGVjdGVkLm1hbF9pZCArIFwiL3ZpZGVvc1wiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldFRyYWlsZXJzKHJlc3BvbnNlSnNvbi5wcm9tbykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sW3NlbGVjdGVkXSlcblxuXG4gICAgY29uc3QgaGlkZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOidISURFX1NIT1dfT1ZFUkxBWScsIGJvb2xlYW46dHJ1ZX0pXG4gICAgfVxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoaWRlT3ZlcmxheSgpfSBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSc+e3NlbGVjdGVkLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncmF0aW5nJz57c2VsZWN0ZWQuc2NvcmUgKyAnLzEwJ308L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJhaWxlckNhcm91c2VsJz5cbiAgICAgICAgICAgICAgICB7dHJhaWxlcnMubWFwKCh0cmFpbGVyLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRyYWlsZXJsaW5rXCIgaHJlZj17dHJhaWxlci52aWRlb191cmx9IGtleT17aW5kZXh9IGRhdGEtbGl0eT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhaWxlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dHJhaWxlci5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dHJhaWxlci50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsLjkpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7aGlkZGVuID09PSB0cnVlPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyQ2Fyb3VzZWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyTGluayB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0byAxMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50cmFpbGVyIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhaWxlciBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3NPdmVybGF5Il19 */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (VideosOverlay);

/***/ }),

/***/ "./contexts/AnimeContext.js":
/*!**********************************!*\
  !*** ./contexts/AnimeContext.js ***!
  \**********************************/
/*! exports provided: AnimeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeContext", function() { return AnimeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_animeReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/animeReducer */ "./reducers/animeReducer.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/contexts/AnimeContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AnimeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

const AnimeContextProvider = props => {
  const {
    0: selected,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_animeReducer__WEBPACK_IMPORTED_MODULE_1__["animeReducer"], {});
  return __jsx(AnimeContext.Provider, {
    value: {
      selected,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AnimeContextProvider);

/***/ }),

/***/ "./contexts/FilterContext.js":
/*!***********************************!*\
  !*** ./contexts/FilterContext.js ***!
  \***********************************/
/*! exports provided: FilterContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterContext", function() { return FilterContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_filterReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/filterReducer */ "./reducers/filterReducer.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/contexts/FilterContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FilterContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])('top');

const FilterContextProvider = props => {
  const {
    0: filter,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_filterReducer__WEBPACK_IMPORTED_MODULE_1__["filterReducer"], 'top');
  return __jsx(FilterContext.Provider, {
    value: {
      filter,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (FilterContextProvider);

/***/ }),

/***/ "./contexts/OverlayContext.js":
/*!************************************!*\
  !*** ./contexts/OverlayContext.js ***!
  \************************************/
/*! exports provided: OverlayContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContext", function() { return OverlayContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_overlayReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/overlayReducer */ "./reducers/overlayReducer.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/contexts/OverlayContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const OverlayContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(true);

const OverlayContextProvider = props => {
  const {
    0: hidden,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_overlayReducer__WEBPACK_IMPORTED_MODULE_1__["overlayReducer"], true);
  return __jsx(OverlayContext.Provider, {
    value: {
      hidden,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayContextProvider);

/***/ }),

/***/ "./contexts/SearchContext.js":
/*!***********************************!*\
  !*** ./contexts/SearchContext.js ***!
  \***********************************/
/*! exports provided: SearchContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContext", function() { return SearchContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_searchReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/searchReducer */ "./reducers/searchReducer.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/contexts/SearchContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])('');

const SearchContextProvider = props => {
  const {
    0: query,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_searchReducer__WEBPACK_IMPORTED_MODULE_1__["searchReducer"], '');
  return __jsx(SearchContext.Provider, {
    value: {
      query,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchContextProvider);

/***/ }),

/***/ "./devices.js":
/*!********************!*\
  !*** ./devices.js ***!
  \********************/
/*! exports provided: device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Filters */ "./components/Filters.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_VideosOverlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/VideosOverlay */ "./components/VideosOverlay.js");
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const Index = ({
  topAnime
}) => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1687357669", [_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]]]) + " " + "app",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("title", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1687357669", [_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Anime Trailers"), __jsx("link", {
  href: "/styles/lity.min.css",
  rel: "stylesheet",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1687357669", [_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("script", {
  src: "/jquery.js",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1687357669", [_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("script", {
  src: "/lity.min.js",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1687357669", [_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://use.typekit.net/cye7qdh.css",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1687357669", [_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})), __jsx(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_11__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_13__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_14__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(_components_VideosOverlay__WEBPACK_IMPORTED_MODULE_10__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1687357669", [_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]]]) + " " + "center-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
  topAnime: topAnime,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx(_components_Filters__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
})), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1687357669",
  dynamic: [_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop],
  __self: undefined
}, `html,body,#__next,.app{height:100%;width:100%;margin:0;background-color:rgb(15,15,15);font-family:campaign,sans-serif;font-weight:200;font-style:normal;}.app{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:0 auto;position:relative;overflow:hidden;}.center-wrapper{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;top:25px;max-width:100%;}@media ${_devices__WEBPACK_IMPORTED_MODULE_15__["device"].laptop}{.app{width:80%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDTyxBQU91QixBQVdDLEFBVU0sQUFZUCxVQUNaLEVBakNXLFdBQ0YsU0FDd0IsK0JBQ0EsV0FRZCxtQkFVTixFQWpCRyxnQkFDRSxrQkFFcEIsc0NBS2EsQUFVVSxXQVRQLGNBQ0ksa0JBQ0YsZ0JBRWxCLGdDQU1pQix5REFDRyxrQkFDVCxTQUNNLGVBRWpCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL0Nhcm91c2VsXCI7XG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IFZpZGVvc092ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlb3NPdmVybGF5J1xuaW1wb3J0IEZpbHRlckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IFNlYXJjaENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dFwiO1xuaW1wb3J0IEFuaW1lQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCBPdmVybGF5Q29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dFwiXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9kZXZpY2VzJ1xuXG5cbmNvbnN0IEluZGV4ID0gKHsgdG9wQW5pbWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkFuaW1lIFRyYWlsZXJzPC90aXRsZT5cbiAgICAgIDxsaW5rIGhyZWY9XCIvc3R5bGVzL2xpdHkubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8c2NyaXB0IHNyYz1cIi9qcXVlcnkuanNcIj48L3NjcmlwdD4gXG4gICAgICA8c2NyaXB0IHNyYz1cIi9saXR5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9jeWU3cWRoLmNzc1wiPjwvbGluaz5cbiAgICA8L0hlYWQ+XG4gICAgPEZpbHRlckNvbnRleHRQcm92aWRlcj5cbiAgICAgIDxTZWFyY2hDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxBbmltZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8T3ZlcmxheUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgIDxWaWRlb3NPdmVybGF5PjwvVmlkZW9zT3ZlcmxheT5cbiAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8U2VhcmNoPjwvU2VhcmNoPiAgXG4gICAgICAgICAgICAgIDxDYXJvdXNlbCB0b3BBbmltZT17dG9wQW5pbWV9PjwvQ2Fyb3VzZWw+IFxuICAgICAgICAgICAgICA8RmlsdGVycz48L0ZpbHRlcnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICAgICAgPC9PdmVybGF5Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8L0FuaW1lQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPC9TZWFyY2hDb250ZXh0UHJvdmlkZXI+XG4gICAgPC9GaWx0ZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7YFxuXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHksXG4gICAgICAgICNfX25leHQsXG4gICAgICAgIC5hcHAge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpOyAgICAgXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGNhbXBhaWduLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmFwcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIH1cblxuICAgICAgICAuY2VudGVyLXdyYXBwZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7IFxuICAgICAgICAgIC5hcHAge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvYnlwb3B1bGFyaXR5XCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEudG9wLmxlbmd0aH1gKTtcblxuICByZXR1cm4ge1xuICAgIHRvcEFuaW1lOiBkYXRhLnRvcC5tYXAoZW50cnkgPT4gZW50cnkpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/pages/index.js */`));

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.jikan.moe/v3/top/anime/1/bypopularity");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.top.length}`);
  return {
    topAnime: data.top.map(entry => entry)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./reducers/animeReducer.js":
/*!**********************************!*\
  !*** ./reducers/animeReducer.js ***!
  \**********************************/
/*! exports provided: animeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animeReducer", function() { return animeReducer; });
const animeReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_ANIME':
      return action.selected;

    default:
      return state;
  }
};

/***/ }),

/***/ "./reducers/filterReducer.js":
/*!***********************************!*\
  !*** ./reducers/filterReducer.js ***!
  \***********************************/
/*! exports provided: filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return filterReducer; });
const filterReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;

    default:
      return state;
  }
};

/***/ }),

/***/ "./reducers/overlayReducer.js":
/*!************************************!*\
  !*** ./reducers/overlayReducer.js ***!
  \************************************/
/*! exports provided: overlayReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlayReducer", function() { return overlayReducer; });
const overlayReducer = (state, action) => {
  switch (action.type) {
    case 'HIDE_SHOW_OVERLAY':
      return action.boolean;

    default:
      return state;
  }
};

/***/ }),

/***/ "./reducers/searchReducer.js":
/*!***********************************!*\
  !*** ./reducers/searchReducer.js ***!
  \***********************************/
/*! exports provided: searchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return searchReducer; });
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return action.query;

    default:
      return state;
  }
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/takaitech/Takai-Tech/anime-trailers-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map