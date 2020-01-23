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
      type: "SELECT_ANIME",
      selected: anime
    }),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1459946778", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]) + " " + "anime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    draggable: "false",
    src: anime.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1459946778", [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1459946778",
    dynamic: [selected.mal_id != anime.mal_id ? "75px" : "auto", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, selected.mal_id != anime.mal_id ? "150px" : "auto"],
    __self: undefined
  }, `.anime.__jsx-style-dynamic-selector{max-width:${selected.mal_id != anime.mal_id ? "75px" : "auto"};z-index:50;-webkit-clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);clip-path:polygon(12% 0,100% 0,85% 100%,0 100%);}img.__jsx-style-dynamic-selector{height:30vh;-webkit-filter:${selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none"};-webkit-filter:${selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none"};filter:${selected.mal_id != anime.mal_id ? "grayscale(100%)" : "none"};-webkit-transition:filter 1s;transition:filter 1s;}@media ${_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop}{.anime.__jsx-style-dynamic-selector{max-width:${selected.mal_id != anime.mal_id ? "150px" : "auto"};-webkit-transition:max-width 1s;transition:max-width 1s;}.anime.__jsx-style-dynamic-selector:hover>img.__jsx-style-dynamic-selector{-webkit-filter:none;-webkit-filter:none;filter:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR2tELEFBTTNCLEFBUTZCLEFBS25CLFlBWnNCLFFBYTlCLG1CQW5CSCxBQWNlLFdBYnlCLEVBbUJuRCxJQWJvQyx1Q0FRcEMseUNBUHFCLGtCQU52QixnQ0FPQSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0FuaW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi9kZXZpY2VzXCI7XG5cbmNvbnN0IEFuaW1lID0gKHsgYW5pbWUgfSkgPT4ge1xuXG5cbiAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KTtcbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiBhbmltZSB9KX1cbiAgICAgIGNsYXNzTmFtZT1cImFuaW1lXCJcbiAgICA+XG4gICAgICA8aW1nIGRyYWdnYWJsZT1cImZhbHNlXCIgc3JjPXthbmltZS5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYW5pbWUge1xuICAgICAgICAgIG1heC13aWR0aDogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkID8gXCI3NXB4XCIgOiBcImF1dG9cIn07XG4gICAgICAgICAgei1pbmRleDogNTA7XG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEyJSAwLCAxMDAlIDAsIDg1JSAxMDAlLCAwIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6ICR7c2VsZWN0ZWQubWFsX2lkICE9IGFuaW1lLm1hbF9pZFxuICAgICAgICAgICAgPyBcImdyYXlzY2FsZSgxMDAlKVwiXG4gICAgICAgICAgICA6IFwibm9uZVwifTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgIGZpbHRlcjogJHtzZWxlY3RlZC5tYWxfaWQgIT0gYW5pbWUubWFsX2lkXG4gICAgICAgICAgICA/IFwiZ3JheXNjYWxlKDEwMCUpXCJcbiAgICAgICAgICAgIDogXCJub25lXCJ9O1xuICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAuYW5pbWUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAke3NlbGVjdGVkLm1hbF9pZCAhPSBhbmltZS5tYWxfaWQgPyBcIjE1MHB4XCIgOiBcImF1dG9cIn07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFuaW1lOmhvdmVyID4gaW1nIHtcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWU7XG4iXX0= */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Anime.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Anime);

/***/ }),

/***/ "./components/AnimeInfo.js":
/*!*********************************!*\
  !*** ./components/AnimeInfo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../devices */ "./devices.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/AnimeInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const AnimeInfo = () => {
  const {
    search
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__["SearchContext"]);
  const {
    filter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_5__["FilterContext"]);
  const {
    selected,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_3__["AnimeContext"]);
  let {
    0: info,
    1: setInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: trailer,
    1: setTrailer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let stopLoading = res => {
      setTimeout(() => {
        setInfo(res);
        setLoading(false);
      }, 500);
    };

    if (selected.mal_id !== undefined) {
      setLoading(true);
      fetch(`https://api.jikan.moe/v3/anime/${selected.mal_id}`).then(response => response.json()).then(responseJson => stopLoading(responseJson)).catch(err => console.log(err));
    }
  }, [selected]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: "SELECT_ANIME",
      selected: {}
    });
  }, [search, filter]);
  let styles = {
    position: 'absolute',
    top: '10px',
    right: '6%'
  };
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "animeInfoBorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "animeInfoWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "animeInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, selected.title !== undefined ? selected.title.length > 20 ? selected.title.slice(0, 20) + "..." : selected.title : "Select Anime"), loading === true && selected.title !== undefined && __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: styles,
    type: "Circles",
    color: "#ef5050",
    height: 25,
    width: 25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), loading !== true && selected.title !== undefined && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "synopsis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, info.synopsis), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "dataWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "ratingWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, selected.score === 0 || selected.score === undefined ? "No rating" : selected.score + "/10"), __jsx("img", {
    src: selected.score === 0 || selected.score === undefined ? "icons/star-crossed-icon.png" : "icons/star-filled-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3321044847", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop]]]) + " " + "icon rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3321044847",
    dynamic: [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop],
    __self: undefined
  }, `.animeInfoBorder.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#7E7E7E;padding:5px;position:relative;margin-top:3.5%;-webkit-clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);position:absolute;bottom:0;width:100%;top:20%;}.animeInfoWrapper.__jsx-style-dynamic-selector{box-sizing:border-box;height:100%;background-color:white;-webkit-clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{height:75%;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;padding:15px;}.title.__jsx-style-dynamic-selector{width:100%;font-size:1.1em;font-weight:400;border-bottom:1px solid #9B9B9B;padding-bottom:10px;text-align:left;}.loader.__jsx-style-dynamic-selector{width:100%;margin:0 auto;display:block;}.info.__jsx-style-dynamic-selector{height:100%;width:100%;margin:0 auto;padding-top:10px;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{visibility:${selected.title === undefined ? "hidden" : "visible"};}.synopsis.__jsx-style-dynamic-selector{font-size:.7em;margin:0;width:60%;height:89%;overflow-x:auto;padding-right:15px;}.synopsis.__jsx-style-dynamic-selector::-webkit-scrollbar{width:5px;}.synopsis.__jsx-style-dynamic-selector::-webkit-scrollbar-thumb{background-color:#EF5050;border-radius:6px;}.synopsis.__jsx-style-dynamic-selector::-webkit-scrollbar-track{background-color:rgba(2,2,2,0.2);}.ratingWrapper.__jsx-style-dynamic-selector{visibility:${selected.title === undefined ? "hidden" : "visible"};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15%;}.icon.__jsx-style-dynamic-selector{height:20px;-webkit-filter:${selected.title === undefined ? "grayscale(100%)" : "none"};-webkit-filter:${selected.title === undefined ? "grayscale(100%)" : "none"};filter:${selected.title === undefined ? "grayscale(100%)" : "none"};margin-left:10px;}.rating.__jsx-style-dynamic-selector{margin-left:10px;font-size:.7em;}@media ${_devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS}{.animeInfo.__jsx-style-dynamic-selector{height:65%;}.title.__jsx-style-dynamic-selector{font-size:1em;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop}{.animeInfoBorder.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,75% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,75% 100%,0% 100%);height:100%;position:static;margin-top:0;}.animeInfoWrapper.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,75% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,75% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:3%;height:100%;padding:0;}.icon.__jsx-style-dynamic-selector{height:65px;}.title.__jsx-style-dynamic-selector{font-size:1.5em;max-width:250px;font-weight:400;margin:0 20px;border-bottom:none;border-right:1px solid #9B9B9B;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;padding-right:20px;margin-left:40px;}.info.__jsx-style-dynamic-selector{height:80%;border-top:none;margin-left:15px;padding-top:0;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%;}.info.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.ratingWrapper.__jsx-style-dynamic-selector{margin-top:0;}.icon.__jsx-style-dynamic-selector{height:30px;}.rating.__jsx-style-dynamic-selector{font-size:1em;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptopL}{.info.__jsx-style-dynamic-selector{-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%;}.animeInfoBorder.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);height:100%;position:static;margin-top:0;}.animeInfoWrapper.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);}}@media ${_devices__WEBPACK_IMPORTED_MODULE_2__["device"].desktop}{.title.__jsx-style-dynamic-selector{font-size:2em;}.synopsis.__jsx-style-dynamic-selector{font-size:1.4em;}.icon.__jsx-style-dynamic-selector{height:40px;}.rating.__jsx-style-dynamic-selector{font-size:1.3em;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWVJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGUyxBQUcyQyxBQWFBLEFBT1gsQUFTQSxBQVNGLEFBTUcsQUFVNEIsQUFJM0IsQUFTTCxBQUllLEFBTVEsQUFNUyxBQU81QixBQU9LLEFBUVIsQUFJRyxBQU9nRCxBQU9BLEFBS2xELEFBT0EsQUFJSSxBQWdCTCxBQVMyQixBQUl6QixBQU1ILEFBSUUsQUFPRyxBQUlpRCxBQU9BLEFBT2xELEFBS2pCLEFBSWEsQUFJTSxVQXBKbEIsQ0EvQ3NCLEFBU0YsQUFTSixBQW1FaEIsQUFrRGtCLENBL0dILEFBOENpQyxBQTZDbEQsQUF1Q0EsQUFzQ0EsQ0FqRDJDLEFBSzNDLENBM0RFLEFBc0VGLEFBd0JFLENBakpXLENBaUZPLEFBb0VsQixBQVVBLENBeEhtQixLQWpHVSxBQWFiLENBZ0NFLENBY04sQ0FwQkksQUFnQ0ksRUF6Q0EsQUE4SEQsRUF2SUksR0E4RXZCLEFBeUNrQixDQTdEbEIsQ0FqRTJCLEFBOENkLEdBZFEsRUFOckIsQ0FjQSxBQTZCaUIsR0FwRG1CLEFBMENwQyxDQW9GZ0IsQ0FoR0UsRUE1REYsQ0E0SUEsR0E2Q2QsR0EzSWtCLEVBNENvQixDQTVFMEIsQ0ErSW5DLENBNUpWLEVBNERBLENBZ0ZBLFFBOUZMLElBZ0ZOLENBaEdjLEVBN0JKLEdBNERwQixDQWdGaUMsQ0FkbkIsV0E3SG9ELENBOEh0RCxDQWpHUSxTQWtHdEIsT0FqR0UsQ0E4R2EsRUE1RFUsUUE5REgsQ0EySEwsR0E3QkQsQUFRaEIsQUFpRWtCLEFBUWhCLFVBekdxQixFQXJFSixBQThGQyxBQXlFRSxNQTdJcEIsT0F4QkEsRUFvRUEsQ0F5QmUsQUF5RUUsYUF4RW5CLEFBeUVFLGNBakNlLEVBL0lmLGNBa0lxQixVQTdEQyxZQWhGQSxNQWlGdEIsT0EyRUYsS0EzSmUsU0FDRSxXQUNILFFBQ1oseUJBMEl5QixtR0FDVixtREFDTSxtQkFDRixpQkFDckIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9BbmltZUluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uL2RldmljZXNcIjtcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dFwiO1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9GaWx0ZXJDb250ZXh0XCJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInXG5cblxuY29uc3QgQW5pbWVJbmZvID0gKCkgPT4ge1xuICBjb25zdCB7IHNlYXJjaCB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcbiAgY29uc3QgeyBmaWx0ZXIgfSA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dCk7XG5cblxuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuICBsZXQgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3RyYWlsZXIsIHNldFRyYWlsZXJdID0gdXNlU3RhdGUoW10pO1xuICBsZXQgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHN0b3BMb2FkaW5nID0gcmVzID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICBzZXRJbmZvKHJlcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0sNTAwKVxuICAgIH07XG5cbiAgICBpZiAoc2VsZWN0ZWQubWFsX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgXG5cbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvYW5pbWUvJHtzZWxlY3RlZC5tYWxfaWR9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc3RvcExvYWRpbmcocmVzcG9uc2VKc29uKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFTEVDVF9BTklNRVwiLCBzZWxlY3RlZDoge30gfSk7XG4gIH0sIFtzZWFyY2gsIGZpbHRlcl0pO1xuXG4gIGxldCBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMTBweCcsXG4gICAgcmlnaHQ6ICc2JScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1lSW5mb0JvcmRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltZUluZm9XcmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWVJbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAge3NlbGVjdGVkLnRpdGxlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBzZWxlY3RlZC50aXRsZS5sZW5ndGggPiAyMFxuICAgICAgICAgICAgICAgID8gc2VsZWN0ZWQudGl0bGUuc2xpY2UoMCwgMjApICsgXCIuLi5cIlxuICAgICAgICAgICAgICAgIDogc2VsZWN0ZWQudGl0bGVcbiAgICAgICAgICAgICAgOiBcIlNlbGVjdCBBbmltZVwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlICYmIHNlbGVjdGVkLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgPExvYWRlciBzdHlsZT17c3R5bGVzfSB0eXBlPVwiQ2lyY2xlc1wiIGNvbG9yPVwiI2VmNTA1MFwiIGhlaWdodD17MjV9IHdpZHRoPXsyNX0gLz4gfVxuICAgICAgICAgIHtsb2FkaW5nICE9PSB0cnVlICYmIHNlbGVjdGVkLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN5bm9wc2lzXCI+e2luZm8uc3lub3BzaXN9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQuc2NvcmUgPT09IDAgfHwgc2VsZWN0ZWQuc2NvcmUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJObyByYXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIDogc2VsZWN0ZWQuc2NvcmUgKyBcIi8xMFwifVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcmF0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zY29yZSA9PT0gMCB8fCBzZWxlY3RlZC5zY29yZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbnMvc3Rhci1jcm9zc2VkLWljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpY29ucy9zdGFyLWZpbGxlZC1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvQm9yZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdFN0U3RTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41JTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAsIDEwMCUgMCUsIDEwMCUgMzUlICw2NSUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmFuaW1lSW5mb1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCwgMTAwJSAwJSwgMTAwJSAzMyUgLDY0JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlCOUI5QjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvYWRlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC5pbmZvIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zeW5vcHNpcyB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4OSU7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc3lub3BzaXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnN5bm9wc2lzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY1MDUwO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnN5bm9wc2lzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsMiwyLDAuMik7XG5cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yYXRpbmdXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiZ3JheXNjYWxlKDEwMCUpXCIgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB9OyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJncmF5c2NhbGUoMTAwJSlcIiA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZVN9IHtcblxuICAgICAgICAgICAgICAgIC5hbmltZUluZm8ge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5hbmltZUluZm9Cb3JkZXIge1xuICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIlIDAsIDk4LjUlIDAlLCA5NyUgNTUlICw3NSUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hbmltZUluZm9XcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyJSAwLCA5OC41JSAwJSwgOTclIDU1JSAsNzUlIDEwMCUsIDAlIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYW5pbWVJbmZvIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDMlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOUI5QjlCO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDI1JTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA0NSU7XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbmZvOjotd2Via2l0LXNjcm9sbGJhciB7ICAgIGRpc3BsYXk6IG5vbmU7fVxuXG5cbiAgICAgICAgICAgICAgLnJhdGluZ1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3BMfSB7XG4gICAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA2MCU7XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5hbmltZUluZm9Cb3JkZXIge1xuICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMiUgMCwgOTguNSUgMCUsIDk3JSA1NSUgLDg1JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgLmFuaW1lSW5mb1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMiUgMCwgOTguNSUgMCUsIDk3JSA1NSUgLDg1JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmRlc2t0b3B9IHtcbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5zeW5vcHNpcyB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lSW5mbztcbiJdfQ== */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/AnimeInfo.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (AnimeInfo);

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
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__);

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
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    filter
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_3__["FilterContext"]);
  const {
    search
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

  let changeAnime = response => {
    setAnime(response);

    if (filter !== "init") {
      let element = carouselSelector.current;
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


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let url = "";

    if (filter === "top" || filter === "init") {
      url = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
    } else if (filter === "upcoming") {
      url = "https://api.jikan.moe/v3/top/anime/1/upcoming";
    } else url = "https://api.jikan.moe/v3/top/anime/1/movie";

    fetch(url).then(response => response.json()).then(responseJson => changeAnime(responseJson.top)).catch(err => console.log(err));
  }, [filter]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (search.query !== "") {
      function formatQueryParams(params) {
        const queryItems = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);

        return queryItems.join("&");
      }

      const baseurl = "https://api.jikan.moe/v3/search/anime";
      let params = {
        q: search.query,
        page: 1,
        type: "tv",
        limit: 20
      };
      let url = baseurl + "?" + formatQueryParams(params);
      carouselSelector.current.classList.add('wipeContent');
      setLoading(true);
      fetch(url).then(response => response.json()).then(responseJson => setAnime(responseJson.results)).then(res => setTimeout(() => {
        setLoading(false);
        carouselSelector.current.classList.add('wipeContent');
      }, 500)).catch(err => console.log(err));
    }
  }, [search.query]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4054267009", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, loading === true ? __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {
    type: "Circles",
    color: "#ef5050",
    height: 45,
    width: 45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }) : __jsx("div", {
    ref: carouselSelector // onMouseDown={e => onMouseDown(e)}
    // onMouseLeave={e => onMouseLeave(e)}
    // onMouseUp={e => onMouseUp(e)}
    // onMouseMove={e => onMouseMove(e)}
    // onTouchMove={e => onTouchMove(e)}
    ,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4054267009", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + `carousel ${isDown === true ? "isDown" : ""} `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, anime.length === 0 ? __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4054267009", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, "No Results") : anime.map((anime, index) => __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    anime: anime,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4054267009",
    dynamic: [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop],
    __self: undefined
  }, `.carouselWrapper.__jsx-style-dynamic-selector{width:90%;margin:10px auto;height:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel.__jsx-style-dynamic-selector{width:100%;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;height:100%;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{width:100%;}.scrollBar.__jsx-style-dynamic-selector{width:${scrollProgress + '%'};height:2px;background-color:rgb(71,71,51);}.wipeContent.__jsx-style-dynamic-selector{-webkit-animation:wipeContent-__jsx-style-dynamic-selector 2s;animation:wipeContent-__jsx-style-dynamic-selector 2s;}@-webkit-keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@keyframes wipeContent-__jsx-style-dynamic-selector{0%{width:0%;opacity:0;}100%{width:100%;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop}{.carouselWrapper.__jsx-style-dynamic-selector{width:80.5%;margin:20px auto;position:relative;right:1.7%;-webkit-clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUtrQixBQUd1QixBQVNELEFBY2EsQUFLWCxBQUlGLEFBSXdCLEFBTVYsQUFLZCxBQU1FLEFBTUcsU0FYSixDQS9DTyxDQVNKLEFBdUJqQixBQXFCRSxDQU1xQixDQS9CdkIsTUFvQkUsS0F6QjhCLEVBYmpCLENBVEEsRUEyRFMsTUF4QlgsR0FsQ0ksUUFtQ2tCLENBd0JsQixPQXJDakIsSUFzQzBELG1CQXhCMUQsdUJBM0JtQixZQVJJLElBdUN2QixDQTlCYyxZQUNHLGVBQ0csa0JBQ2UsRUFpRC9CLCtCQWhEZ0IsVUFaTyxRQWFOLDJGQVpyQixFQWFvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgQW5pbWUgZnJvbSBcIi4vQW5pbWVcIjtcbmltcG9ydCB7ZGV2aWNlfSBmcm9tIFwiLi4vZGV2aWNlc1wiXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJ1xuXG5cbmNvbnN0IENhcm91c2VsID0gKHsgdG9wQW5pbWUgfSkgPT4ge1xuICBjb25zdCBbYW5pbWUsIHNldEFuaW1lXSA9IHVzZVN0YXRlKHRvcEFuaW1lKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgeyBmaWx0ZXIgfSA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dCk7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuXG4gIGNvbnN0IGNhcm91c2VsU2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Njcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzc10gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgbGV0IGdldFNjcm9sbFBlcmNlbnQgPSAoKSA9PiB7XG4gICAgICAgcmV0dXJuICAoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAgICAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxXaWR0aCAtIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5vZmZzZXRXaWR0aCkpICogMTAwXG4gICAgfVxuXG4gIGNvbnN0IFtpc0Rvd24sIHNldElzRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2Nyb2xsTGVmdCwgc2V0U2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGxldCBjaGFuZ2VBbmltZSA9IChyZXNwb25zZSkgPT4ge1xuXG4gICAgc2V0QW5pbWUocmVzcG9uc2UpXG4gICAgaWYoIGZpbHRlciAhPT0gXCJpbml0XCIpIHtcblxuICAgIGxldCBlbGVtZW50ID0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIndpcGVDb250ZW50XCIpXG4gICAgICAgIHZvaWQgZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3aXBlQ29udGVudFwiKTtcblxuICAgIH1cbiAgfVxuXG5cbi8vICAgbGV0IG9uTW91c2VEb3duID0gZSA9PiB7XG4vLyAgICAgc2V0SXNEb3duKHRydWUpO1xuLy8gICAgIHNldFN0YXJ0WChlLnBhZ2VYIC0gY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50Lm9mZnNldExlZnQpO1xuLy8gICAgIHNldFNjcm9sbExlZnQoY2Fyb3VzZWxTZWxlY3Rvci5jdXJyZW50LnNjcm9sbExlZnQpO1xuLy8gICB9O1xuXG4vLyAgIGxldCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcbi8vICAgICBzZXRJc0Rvd24oZmFsc2UpO1xuLy8gICB9O1xuXG4vLyAgIGxldCBvbk1vdXNlVXAgPSBlID0+IHtcbi8vICAgICBzZXRJc0Rvd24oZmFsc2UpO1xuLy8gICB9O1xuXG4vLyAgIGxldCBvbk1vdXNlTW92ZSA9IGUgPT4ge1xuLy8gICAgIGlmICghaXNEb3duKSByZXR1cm47XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IHggPSBlLnBhZ2VYO1xuLy8gICAgIGNvbnN0IGRpc3RhbmNlID0gKHggLSBzdGFydFgpICogMztcbi8vICAgICBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBkaXN0YW5jZTtcbiAgIFxuLy8gICAgIGxldCBzY3JvbGxQZXJjZW50ID0gZ2V0U2Nyb2xsUGVyY2VudCgpXG4vLyAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Moc2Nyb2xsUGVyY2VudCk7XG4gICAgXG4vLyAgIH07XG5cbi8vICAgbGV0IG9uVG91Y2hNb3ZlID0gZSA9PiB7XG4vLyAgICAgbGV0IHNjcm9sbFBlcmNlbnQgPSBnZXRTY3JvbGxQZXJjZW50KClcbi8vICAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbi8vIH1cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdXJsID0gXCJcIlxuXG4gICAgaWYoZmlsdGVyID09PSBcInRvcFwiIHx8IGZpbHRlciA9PT0gXCJpbml0XCIpIHtcbiAgICAgIHVybCA9IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL2J5cG9wdWxhcml0eVwiXG4gICAgfSBlbHNlIGlmKGZpbHRlciA9PT0gXCJ1cGNvbWluZ1wiKSB7XG4gICAgICB1cmwgPSBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMS91cGNvbWluZ1wiXG4gICAgfSBlbHNlKFxuICAgICAgdXJsID0gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvbW92aWVcIlxuICAgIClcbiAgICAgXG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IGNoYW5nZUFuaW1lKHJlc3BvbnNlSnNvbi50b3ApKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICB9LCBbZmlsdGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoLnF1ZXJ5ICE9PSBcIlwiKSB7XG4gICAgICBmdW5jdGlvbiBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcXVlcnlJdGVtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKFxuICAgICAgICAgIGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5SXRlbXMuam9pbihcIiZcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2V1cmwgPSBcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9zZWFyY2gvYW5pbWVcIjtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHE6IHNlYXJjaC5xdWVyeSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgdHlwZTogXCJ0dlwiLFxuICAgICAgICBsaW1pdDogMjBcbiAgICAgIH07XG5cbiAgICAgIGxldCB1cmwgPSBiYXNldXJsICsgXCI/XCIgKyBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd3aXBlQ29udGVudCcpXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldEFuaW1lKHJlc3BvbnNlSnNvbi5yZXN1bHRzKSApXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgIGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd3aXBlQ29udGVudCcpXG4gICAgICAgIH0sNTAwKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFtzZWFyY2gucXVlcnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRUxFQ1RfQU5JTUVcIiwgc2VsZWN0ZWQ6IHt9IH0pO1xuICB9LCBbYW5pbWVdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGZpbHRlcilcbiAgLy8gICBpZihmaWx0ZXIgPT09IFwiaW5pdFwiKSB7XG5cbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgbGV0IGVsZW1lbnQgPSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnRcbiAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIndpcGVDb250ZW50XCIpXG4gIC8vICAgICB2b2lkIGVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndpcGVDb250ZW50XCIpO1xuICAvLyAgIH1cbiAgLy8gfSwgW2ZpbHRlcl0pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFdyYXBwZXJcIiBcbiAgICA+XG4gICAgICB7bG9hZGluZyA9PT0gdHJ1ZSA/IFxuICAgICAgPExvYWRlciAgdHlwZT1cIkNpcmNsZXNcIiBjb2xvcj1cIiNlZjUwNTBcIiBoZWlnaHQ9ezQ1fSB3aWR0aD17NDV9IC8+XG4gICAgICA6XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsICR7aXNEb3duID09PSB0cnVlID8gXCJpc0Rvd25cIiA6IFwiXCJ9IGB9XG4gICAgICAgIHJlZj17Y2Fyb3VzZWxTZWxlY3Rvcn1cbiAgICAgICAgLy8gb25Nb3VzZURvd249e2UgPT4gb25Nb3VzZURvd24oZSl9XG4gICAgICAgIC8vIG9uTW91c2VMZWF2ZT17ZSA9PiBvbk1vdXNlTGVhdmUoZSl9XG4gICAgICAgIC8vIG9uTW91c2VVcD17ZSA9PiBvbk1vdXNlVXAoZSl9XG4gICAgICAgIC8vIG9uTW91c2VNb3ZlPXtlID0+IG9uTW91c2VNb3ZlKGUpfVxuICAgICAgICAvLyBvblRvdWNoTW92ZT17ZSA9PiBvblRvdWNoTW92ZShlKX1cblxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgIGFuaW1lLmxlbmd0aCA9PT0gMCA/IFxuICAgICAgICAgIDxwPk5vIFJlc3VsdHM8L3A+XG4gICAgICAgICAgOlxuICAgICAgICAgIGFuaW1lLm1hcCgoYW5pbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QW5pbWUga2V5PXtpbmRleH0gYW5pbWU9e2FuaW1lfSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2Fyb3VzZWxXcmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTc1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvLyBJRSAxMCtcbiAgICAgICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7IC8vIEZpcmVmb3hcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwgcCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2Nyb2xsQmFyIHtcbiAgICAgICAgICB3aWR0aDogJHtzY3JvbGxQcm9ncmVzcyArICclJ307XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCA3MSwgNTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndpcGVDb250ZW50IHtcbiAgICAgICAgICBhbmltYXRpb246IHdpcGVDb250ZW50IDJzO1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyB3aXBlQ29udGVudCB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0ge1xuICAgICAgICAgICAgLmNhcm91c2VsV3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MC41JTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDEuNyU7XG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyJSAwLCAxMDAlIDAlLCA5OCUgMTAwJSwgMCUgMTAwJSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjcm9sbEJhciB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Filters.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Filters = () => {
  const {
    dispatch,
    filter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_2__["FilterContext"]);

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
    } else if (e.target.getAttribute('data-filter') === 'Movies') {
      dispatch({
        type: 'CHANGE_FILTER',
        filter: 'movie'
      });
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["556881987", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["556881987", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "filtersWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("span", {
    onClick: e => changeFilter(e),
    "data-filter": "Top",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["556881987", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "topFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Top"), __jsx("span", {
    onClick: e => changeFilter(e),
    "data-filter": "Movies",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["556881987", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "moviesFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Movies"), __jsx("span", {
    onClick: e => changeFilter(e),
    "data-filter": "Upcoming",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["556881987", [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop]]]) + " " + "upcomingFilter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Upcoming")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "556881987",
    dynamic: [filter === 'top' || filter === 'init' ? "white" : "#5F5F5F", filter === 'upcoming' ? "white" : "#5F5F5F", filter === 'movie' ? "white" : "#5F5F5F", _devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop],
    __self: undefined
  }, `.filters.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#212121;-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.filtersWrapper.__jsx-style-dynamic-selector{height:75%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}span.__jsx-style-dynamic-selector{position:relative;color:white;font-size:1em;z-index:1;}.topFilter.__jsx-style-dynamic-selector{display:block;color:${filter === 'top' || filter === 'init' ? "white" : "#5F5F5F"};-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;position:relative;left:4%;}.upcomingFilter.__jsx-style-dynamic-selector{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;color:${filter === 'upcoming' ? "white" : "#5F5F5F"};}.moviesFilter.__jsx-style-dynamic-selector{display:block;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;color:${filter === 'movie' ? "white" : "#5F5F5F"};position:relative;left:2%;}.upcomingFilter.__jsx-style-dynamic-selector:hover,.topFilter.__jsx-style-dynamic-selector:hover,.moviesFilter.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}@media ${_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop}{.filters.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(4% 0,100% 0%,96% 100%,0% 100%);clip-path:polygon(4% 0,100% 0%,96% 100%,0% 100%);-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;}.filtersWrapper.__jsx-style-dynamic-selector{margin-left:13%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}span.__jsx-style-dynamic-selector{display:block;color:white;font-size:1.7em;z-index:1;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_3__["device"].desktop}{span.__jsx-style-dynamic-selector{font-size:3.5em;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRmlsdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QndCLEFBRzJDLEFBUVgsQUFTTyxBQU9KLEFBU0EsQUFPQSxBQVNPLEFBS21DLEFBS3BDLEFBVUgsQUFVRyxXQXRFRixHQWdCZ0IsQUFTZixBQU9BLEFBNkJILEVBVkMsQUFvQmpCLEVBOURZLElBakJhLElBc0VMLEdBN0RQLENBU0MsWUFxREEsRUFwREosR0FsQkcsRUF3Qk0sR0ErQ25CLEVBcERKLHFCQTZCQSxRQWY0QixBQU9BLE9BbUJFLFFBMURiLEtBUWdCLEdBNENaLFlBNUJPLHVDQTZCeEIsV0FNaUMsSUExRGQsT0FnQ2dCLEFBT0EsbUNBZmpCLEFBU3RCLEFBT3NCLFlBaENDLE1BaUJYLEFBZ0JBLFFBZlosQUFnQkEseUJBekNBLDBCQTBEK0IsNEJBbERoQixXQUNmLHNFQW9ESSIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0ZpbHRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHQnXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9kZXZpY2VzJ1xuXG5jb25zdCBGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KVxuICAgIGNvbnN0IGNoYW5nZUZpbHRlciA9IChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKSA9PT0gJ1RvcCcpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidDSEFOR0VfRklMVEVSJywgZmlsdGVyOiAndG9wJ30pXG4gICAgICAgIH0gZWxzZSBpZiggZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpID09PSAnVXBjb21pbmcnKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTonQ0hBTkdFX0ZJTFRFUicsIGZpbHRlcjogJ3VwY29taW5nJ30pXG4gICAgICAgIH0gZWxzZSBpZiggZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpID09PSAnTW92aWVzJykge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0NIQU5HRV9GSUxURVInLCBmaWx0ZXI6ICdtb3ZpZSd9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0gICBcbiAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlRmlsdGVyKGUpfSBjbGFzc05hbWU9XCJ0b3BGaWx0ZXJcIiBkYXRhLWZpbHRlcj1cIlRvcFwiPlRvcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlRmlsdGVyKGUpfSBjbGFzc05hbWU9XCJtb3ZpZXNGaWx0ZXJcIiBkYXRhLWZpbHRlcj1cIk1vdmllc1wiPk1vdmllczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlRmlsdGVyKGUpfSBjbGFzc05hbWU9XCJ1cGNvbWluZ0ZpbHRlclwiIGRhdGEtZmlsdGVyPVwiVXBjb21pbmdcIj5VcGNvbWluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgICBcbiAgICAgICAgICAgICAgICAuZmlsdGVyc3tcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDIwJTsgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZpbHRlcnNXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wRmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiR7ZmlsdGVyID09PSAndG9wJyB8fCBmaWx0ZXIgPT09ICdpbml0JyA/IFwid2hpdGVcIiA6IFwiIzVGNUY1RlwifTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC51cGNvbWluZ0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2ZpbHRlciA9PT0gJ3VwY29taW5nJyA/IFwid2hpdGVcIiA6IFwiIzVGNUY1RlwifTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubW92aWVzRmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7ZmlsdGVyID09PSAnbW92aWUnID8gXCJ3aGl0ZVwiIDogXCIjNUY1RjVGXCJ9O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC51cGNvbWluZ0ZpbHRlcjpob3ZlciwgLnRvcEZpbHRlcjpob3ZlciwgLm1vdmllc0ZpbHRlcjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfXtcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcnN7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNCUgMCwgMTAwJSAwJSwgOTYlIDEwMCUsIDAlIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDI1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXJzV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmRlc2t0b3B9IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVycyJdfQ== */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Filters.js */`));
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
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Filters */ "./components/Filters.js");
/* harmony import */ var _components_AnimeInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AnimeInfo */ "./components/AnimeInfo.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../devices */ "./devices.js");

var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const Footer = () => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_5__["OverlayContext"]);
  const {
    selected
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_6__["AnimeContext"]);

  const showOverlay = () => {
    fetch("https://api.jikan.moe/v3/anime/" + selected.mal_id + "/videos").then(response => response.json()).then(responseJson => dispatch({
      type: 'UPDATE_TRAILERS',
      trailers: responseJson.promo
    })).catch(err => {
      console.log(err);
    });

    if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(selected).length == 0) {
      dispatch({
        type: 'HIDE_SHOW_OVERLAY',
        boolean: true
      });
    }
  };

  return __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1456425070", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_components_Filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_components_AnimeInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("div", {
    onClick: () => showOverlay(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1456425070", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]) + " " + "openTrailers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("img", {
    src: "icons/white-play-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1456425070", [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1456425070",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL, _devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop],
    __self: undefined
  }, `footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:90%;position:relative;height:45%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;}.openTrailers.__jsx-style-dynamic-selector{position:absolute;right:0px;bottom:0px;background-color:#212121;height:40%;width:40%;-webkit-clip-path:polygon(99% 0,22% 100%,100% 100%);clip-path:polygon(99% 0,22% 100%,100% 100%);}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;right:5%;bottom:5%;}@media ${_devices__WEBPACK_IMPORTED_MODULE_7__["device"].mobileS}{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;height:45px;right:2%;bottom:2%;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_7__["device"].tablet}{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:65px;right:10%;bottom:10%;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop}{footer.__jsx-style-dynamic-selector{width:80%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:2.8%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:30%;}.openTrailers.__jsx-style-dynamic-selector{position:absolute;background-color:#212121;height:40%;width:16%;-webkit-clip-path:polygon(85% 0,0% 100%,78% 100%);clip-path:polygon(85% 0,0% 100%,78% 100%);}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:25%;bottom:10%;height:40px;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptopL}{.openTrailers.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(80% 0,3% 100%,75% 100%);clip-path:polygon(80% 0,3% 100%,75% 100%);width:10%;}.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:28%;bottom:7%;height:40px;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_7__["device"].desktop}{.openTrailers.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{right:28%;bottom:5%;height:70px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDd0IsQUFJa0MsQUFVSyxBQVdBLEFBT0ksQUFTTixBQVVGLEFBU1EsQUFTUixBQVFrQyxBQUtsQyxBQVFBLFVBdENJLEFBa0JILEFBYUQsQUFRQSxFQWhEQSxNQTVCSixBQVdELEFBT08sQUE0QmEsRUF1QmIsQUFRQSxDQXJCQSxDQTNCRCxFQVNFLEdBMUJQLENBWEMsRUFrQkUsRUFtRGIsQUFRQSxDQWhEQSxBQTJCQSxJQTVDSixFQVg2QixBQWtCWCxJQTJCQSxNQTFCZCxLQTJCYyxVQTdDSixBQThDc0MsVUEzRHRDLENBY0EsU0FiUSxDQWM0QixPQTBEaEMsTUF4QkMsSUEvQ0osQUF5RVgsT0F6QnVCLElBL0NELDJDQTBEdEIsc0JBVmUsR0FsQ25CLFFBbUNJLEVBaERjLGNBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcnMnXG5pbXBvcnQgQW5pbWVJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvQW5pbWVJbmZvJ1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7ZGV2aWNlIH0gZnJvbSAnLi4vZGV2aWNlcydcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG5cbiAgICBjb25zdCBzaG93T3ZlcmxheSA9ICgpID0+IHtcblxuICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9hbmltZS9cIiArIHNlbGVjdGVkLm1hbF9pZCArIFwiL3ZpZGVvc1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBkaXNwYXRjaCh7dHlwZTonVVBEQVRFX1RSQUlMRVJTJyx0cmFpbGVyczogcmVzcG9uc2VKc29uLnByb21vfSkpXG4gICAgICAgIC5jYXRjaChlcnIgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIU9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgYm9vbGVhbjp0cnVlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8RmlsdGVycz48L0ZpbHRlcnM+XG4gICAgICAgICAgICA8QW5pbWVJbmZvPjwvQW5pbWVJbmZvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVuVHJhaWxlcnNcIiBvbkNsaWNrPXsoKSA9PiBzaG93T3ZlcmxheSgpfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL3doaXRlLXBsYXktaWNvbi5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1JTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDk5JSAwLCAyMiUgMTAwJSwgMTAwJSAxMDAlKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZVN9IHtcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyJTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIuOCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig4NSUgMCwgMCUgMTAwJSwgNzglIDEwMCUpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcEx9IHtcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5UcmFpbGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oODAlIDAsIDMlIDEwMCUsIDc1JSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAub3BlblRyYWlsZXJzIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjglO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5kZXNrdG9wfSB7XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuVHJhaWxlcnMgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyOCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */
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
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Header = () => {
  const {
    search,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_3__["SearchContext"]);
  const title = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  const toggleSearchMode = () => {
    dispatch({
      type: "ACTIVATE_SEARCH",
      active: !search.active
    });

    if (search.active) {
      title.current.classList.remove("slideI");
      title.current.classList.add("slideO");
    } else {
      title.current.classList.remove("slideO");
      title.current.classList.add("slideI");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (search.active) {
      title.current.classList.remove("slideI");
      title.current.classList.add("slideO");
    } else {
      title.current.classList.remove("slideO");
      title.current.classList.add("slideI");
    }
  }, [search]);
  return __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3074362159", [_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("h1", {
    ref: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3074362159", [_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "ANIME TRAILERS"), __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("span", {
    onClick: () => toggleSearchMode(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3074362159", [_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop]]]) + " " + "searchButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "search"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3074362159",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop],
    __self: undefined
  }, `header.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;position:relative;height:20%;background-color:#EF5050;}.title.__jsx-style-dynamic-selector{font-family:council,sans-serif;font-weight:400;font-style:normal;text-align:center;font-size:3.5em;text-align:center;margin:0 10px 5px 0px;display:inline-block;-webkit-order:1;-ms-flex-order:1;order:1;color:white;position:absolute;right:5px;bottom:25px;}.searchButton.__jsx-style-dynamic-selector{display:block;color:white;position:absolute;bottom:15px;left:15px;font-size:.75em;}.slideO.__jsx-style-dynamic-selector{-webkit-animation:slideO-__jsx-style-dynamic-selector 1s forwards;animation:slideO-__jsx-style-dynamic-selector 1s forwards;}@-webkit-keyframes slideO-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}100%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}}@keyframes slideO-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}100%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}}.slideI.__jsx-style-dynamic-selector{-webkit-animation:slideI-__jsx-style-dynamic-selector 1s forwards;animation:slideI-__jsx-style-dynamic-selector 1s forwards;}@-webkit-keyframes slideI-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes slideI-__jsx-style-dynamic-selector{0%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@media ${_devices__WEBPACK_IMPORTED_MODULE_4__["device"].laptop}{header.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:80%;-webkit-clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);clip-path:polygon(2% 0,100% 0%,98% 100%,0% 100%);}.searchButton.__jsx-style-dynamic-selector{left:35px;font-size:1.5em;}header.__jsx-style-dynamic-selector{width:80%;margin:0 auto;}.title.__jsx-style-dynamic-selector{font-family:council,sans-serif;font-weight:400;font-style:normal;text-align:center;font-size:9em;text-align:center;margin:0 10px 5px 0px;display:inline-block;-webkit-order:1;-ms-flex-order:1;order:1;color:white;position:absolute;right:30px;bottom:0px;}.logoWrapper.__jsx-style-dynamic-selector{margin-right:10%;-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:300px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDUyxBQUcwQyxBQVFPLEFBZ0JsQixBQVNhLEFBS0MsQUFHRyxBQUtGLEFBS0ksQUFHSCxBQVFELEFBT2YsQUFLQSxBQUtzQixBQWdCZixVQXpCRixBQUtELElBbEROLEdBdUVLLE9BcEJqQixFQWxEa0IsQUE2Q2xCLEtBOURnQixBQXVFSSxhQXJEUixHQWpCTSxBQXVFSSxTQXJEWixTQWpCUSxBQXVFSSxDQXJETixFQW9FQyxjQW5FckIsQ0FsQm9CLEFBdUVFLENBNUNsQixBQWdCRSxTQWJGLEFBVUUsSUFuRFMsQUE4REcsQUFxQlEsRUF2RUosUUFtRHNDLENBOUR0QyxPQW1GUSxFQXZFSixPQW9CMUIsQUFhRSxFQTVDYSxXQUNhLEFBa0ZDLEVBdkVKLEdBbUZBLGdCQVhULENBWVcsQ0FuRmYsRUFYWixxQ0FtRm9CLEVBdkVKLFVBd0VVLEVBdkVKLEFBZ0RsQixnQkF3QmUsRUF2RUwsU0F5RVgsQ0F4RWEsVUF3RVosQ0FTQSxDQWhGSiIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NlYXJjaENvbnRleHRcIlxuXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vZGV2aWNlc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWFyY2gsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KCBTZWFyY2hDb250ZXh0IClcblxuICBjb25zdCB0aXRsZSA9IHVzZVJlZigpO1xuICBjb25zdCB0b2dnbGVTZWFyY2hNb2RlID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFDVElWQVRFX1NFQVJDSFwiLCBhY3RpdmU6ICFzZWFyY2guYWN0aXZlfSlcbiAgICBpZiAoc2VhcmNoLmFjdGl2ZSkge1xuICAgICAgdGl0bGUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVJXCIpO1xuICAgICAgdGl0bGUuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2xpZGVPXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZU9cIik7XG4gICAgICB0aXRsZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzbGlkZUlcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaC5hY3RpdmUpIHtcbiAgICAgICAgdGl0bGUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVJXCIpO1xuICAgICAgICB0aXRsZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzbGlkZU9cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZU9cIik7XG4gICAgICAgIHRpdGxlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNsaWRlSVwiKTtcbiAgICAgIH1cbiAgfSxbc2VhcmNoXSlcblxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMSByZWY9e3RpdGxlfSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICBBTklNRSBUUkFJTEVSU1xuICAgICAgPC9oMT5cbiAgICAgIDxTZWFyY2g+PC9TZWFyY2g+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2hCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTZWFyY2hNb2RlKCl9PlxuICAgICAgICBzZWFyY2hcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0VGNTA1MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY291bmNpbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggNXB4IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlYXJjaEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC43NWVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVPIHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZU8gMXMgZm9yd2FyZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZU8ge1xuICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsaWRlSSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUkgMXMgZm9yd2FyZHM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZUkge1xuICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIlIDAsIDEwMCUgMCUsIDk4JSAxMDAlLCAwJSAxMDAlKTtcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnNlYXJjaEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY291bmNpbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9nb1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Header.js */`));
};

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
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Search = () => {
  const {
    search,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_2__["SearchContext"]);
  const searchText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

  const updateSearchQuery = e => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_QUERY',
      query: searchText.current.value
    });
    dispatch({
      type: 'ACTIVATE_SEARCH',
      active: !search.active
    });
    searchText.current.blur();
    searchText.current.value = '';
  };

  const unactivateSearch = () => {
    dispatch({
      type: 'ACTIVATE_SEARCH',
      active: !search.active
    });
    searchText.current.value = '';
  };

  if (search.active === true) {
    searchText.current.focus();
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2280095717", [_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop]]]) + " " + "searchBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: e => updateSearchQuery(e),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2280095717", [_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "''", __jsx("input", {
    type: "text",
    onClick: e => updateSearchQuery(e),
    onFocus: () => searchText.current.value = '',
    onBlur: () => unactivateSearch(),
    ref: searchText,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2280095717", [_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop]]]) + " " + "searchInput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2280095717",
    dynamic: [_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop],
    __self: undefined
  }, `.searchBar.__jsx-style-dynamic-selector{min-height:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;bottom:49px;left:-16px;width:99%;}.searchInput.__jsx-style-dynamic-selector{background-color:transparent;border:none;border-bottom:3px solid white;margin-bottom:15px;margin-right:10px;color:white;font-size:1.5em;font-family:campaign,sans-serif;font-weight:200;font-style:normal;width:100%;outline:none;-webkit-appearance:none;padding-left:6%;position:relative;top:10px;-webkit-appearance:none;border-radius:0;}.searchInput.__jsx-style-dynamic-selector:focus{outline:none;border-bottom:4px solid white;-webkit-box-shadow:none;box-shadow:none;}form.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}@media ${_devices__WEBPACK_IMPORTED_MODULE_3__["device"].laptop}{.searchInput.__jsx-style-dynamic-selector{border-bottom:5px solid white;padding-left:3.5%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDd0IsQUFJcUMsQUFVYSxBQXFCaEIsQUFRTSxBQU1lLGFBYkosR0EvQmxCLGFBVUEsQ0FtQ1UsV0FsQ1EsRUFzQk4sS0FjeEIsbUJBYmdCLElBdEJHLFlBdUJ2QixPQWxDdUIsQUFZRCxHQTJCdkIsV0FBQyxJQTFCZ0IsWUFDSSxnQkFDaUIsZ0NBQ2pCLGVBZkUsQ0FnQkEsaUJBZk4sQ0FnQkQsV0FmQSxBQWdCRSxXQWZKLEVBZ0JlLFFBZjVCLGdCQWdCb0IsZ0JBQ0Msa0JBQ1IsU0FDZSx3QkFDUixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NlYXJjaENvbnRleHQnXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9kZXZpY2VzJ1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG5cbiAgICBjb25zdCB7IHNlYXJjaCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoIFNlYXJjaENvbnRleHQgKVxuICAgIGNvbnN0IHNlYXJjaFRleHQgPSB1c2VSZWYoJycpO1xuXG4gICAgY29uc3QgdXBkYXRlU2VhcmNoUXVlcnkgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J1VQREFURV9RVUVSWScsIHF1ZXJ5OiBzZWFyY2hUZXh0LmN1cnJlbnQudmFsdWV9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTonQUNUSVZBVEVfU0VBUkNIJywgYWN0aXZlOiAhc2VhcmNoLmFjdGl2ZX0pXG4gICAgICAgIHNlYXJjaFRleHQuY3VycmVudC5ibHVyKClcbiAgICAgICAgc2VhcmNoVGV4dC5jdXJyZW50LnZhbHVlID0gJydcbiAgICB9XG5cbiAgICBjb25zdCB1bmFjdGl2YXRlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTonQUNUSVZBVEVfU0VBUkNIJywgYWN0aXZlOiAhc2VhcmNoLmFjdGl2ZX0pXG4gICAgICAgIHNlYXJjaFRleHQuY3VycmVudC52YWx1ZSA9ICcnXG5cblxuICAgIH1cblxuICAgIGlmKHNlYXJjaC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgc2VhcmNoVGV4dC5jdXJyZW50LmZvY3VzKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaEJhclwiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB1cGRhdGVTZWFyY2hRdWVyeShlKX0+JydcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJzZWFyY2hJbnB1dFwiIG9uQ2xpY2s9eyhlKSA9PiB1cGRhdGVTZWFyY2hRdWVyeShlKSB9IG9uRm9jdXM9eygpID0+IHNlYXJjaFRleHQuY3VycmVudC52YWx1ZSA9ICcnfSBvbkJsdXI9eygpID0+IHVuYWN0aXZhdGVTZWFyY2goKX0gcmVmPXtzZWFyY2hUZXh0fSA+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICAgIC5zZWFyY2hCYXIge1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA0OXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTZweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6OTklO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zZWFyY2hJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTsgIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjYW1wYWlnbiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNlYXJjaElucHV0OmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlOyAgXG5cbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaElucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzLjUlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaCJdfQ== */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Search.js */`));
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
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const VideosOverlay = () => {
  const {
    selected
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__["AnimeContext"]);
  const {
    dispatch,
    overlay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_3__["OverlayContext"]);

  const hideOverlay = () => {
    dispatch({
      type: 'HIDE_SHOW_OVERLAY',
      open: true
    });
  };

  console.log(overlay.trailers);
  return __jsx("div", {
    onClick: () => hideOverlay(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, selected.title), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'rating',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, selected.score === 0 || selected.score === undefined ? 'No current ratings' : selected.score + '/10')), __jsx("img", {
    src: selected.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'trailerCarousel',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, overlay.trailers.map((trailer, index) => __jsx("a", {
    href: trailer.video_url,
    key: index,
    "data-lity": true,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "trailerlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "trailer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("img", {
    src: trailer.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3353470018", [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, trailer.title))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3353470018",
    dynamic: [overlay.open === true ? "flex" : "none", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop],
    __self: undefined
  }, `.overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:rgb(0,0,0);background-color:rgb(0,0,0,.9);margin-left:auto;margin-right:auto;display:${overlay.open === true ? "flex" : "none"};-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:scroll;}.info.__jsx-style-dynamic-selector{width:80%;text-align:center;margin:20px auto;border-bottom:2px solid rgb(71,71,71);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:22px;min-height:150px;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;}.image.__jsx-style-dynamic-selector{height:150px;}.title.__jsx-style-dynamic-selector{color:white;margin-bottom:10px;text-align:left;font-size:1.1em;}.rating.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:.7em;margin:0;font-weight:200;}.trailerCarousel.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:25px;margin-bottom:50px;}.trailerLink.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;width:100%;}a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;display:block;margin:10px 0;}a.__jsx-style-dynamic-selector:visited{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:active{-webkit-text-decoration:none;text-decoration:none;}.trailer.__jsx-style-dynamic-selector{text-align:center;width:80%;margin:0 auto 10px auto;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{box-sizing:border-box;width:100%;box-shadow:0 0 0 2px white;-webkit-transition:box-shadow 1s;transition:box-shadow 1s;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector:hover{width:100%;box-shadow:0 0 0 10px white;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector:active{width:100%;box-shadow:0 0 0 15px black;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:.7em;-webkit-text-decoration:none;text-decoration:none;border:none;}@media ${_devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet}{.trailerlink.__jsx-style-dynamic-selector{width:80%;}.title.__jsx-style-dynamic-selector{font-size:2.5em;}.rating.__jsx-style-dynamic-selector{font-size:1.5em;}a.__jsx-style-dynamic-selector:link{margin:30px auto;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:1.3em;}}@media ${_devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop}{.trailerCarousel.__jsx-style-dynamic-selector{margin:0 auto;width:80%;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.trailerlink.__jsx-style-dynamic-selector{width:50%;}a.__jsx-style-dynamic-selector:link{margin:60px 0;}.title.__jsx-style-dynamic-selector{font-size:2.7em;}.rating.__jsx-style-dynamic-selector{font-size:1.7em;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:1.3em;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3dCLEFBSXVDLEFBZ0JSLEFBV0csQUFJQSxBQUlELEFBT0EsQUFTRCxBQVVVLEFBS0QsQUFNQSxBQUlBLEFBSUEsQUFLRixBQVFJLEFBTVgsQUFNQSxBQUtDLEFBVUUsQUFJTSxBQUtBLEFBS0MsQUFJRCxBQU9GLEFBTUosQUFHSSxBQUlFLEFBS0EsQUFJQSxVQXRKSCxBQXdHakIsQUErQkEsQ0FwR2EsQUFnRGdCLEFBTUQsQ0F0RVQsQUFPSCxBQW9FQSxDQS9FcEIsQ0FrSGtCLEFBU2QsRUE3QkEsQUFLQSxBQVFBLEFBcUJBLEFBS0EsQUFHQSxDQWpDQSxDQXRJTSxBQXFGSSxJQVFDLEVBNUZILEFBaUprQixJQWpJVCxBQTBCRixBQTRDUSxBQXdCUixHQTNFQSxFQWxDUixBQTRGb0IsTUFPL0IsQUFLQSxDQXZHWSxHQXlDQyxBQW9FWSxFQTlGaUIsRUFtQnRCLENBakNKLEVBeURELEFBS0csQUFNbEIsQUFJQSxBQUlBLENBckRBLENBa0JvQixBQTRDcEIsUUFwRmdDLEFBMEZILENBakM3QixFQXhCQSxDQTZCa0IsSUFyQmxCLFVBc0JBLEtBakRpQixFQWlDRSxHQTlDZ0IsS0EyR25CLFlBQ2hCLGFBbEJBLENBekZxQixBQTRJakIsaUJBM0lrQixNQTZDQyxZQTVDa0IsR0FXUCxrQ0FWUiw0Q0E0Q0Msa0NBM0NSLEdBVUssYUFUeEIsT0FVcUIsaUJBQ3JCLHlCQWdDd0Isb0JBQ0QsbUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FuaW1lQ29udGV4dCdcbmltcG9ydCB7IE92ZXJsYXlDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvT3ZlcmxheUNvbnRleHQnXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbydcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2RldmljZXMnXG4gXG5jb25zdCBWaWRlb3NPdmVybGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KVxuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIG92ZXJsYXkgfSA9IHVzZUNvbnRleHQoT3ZlcmxheUNvbnRleHQpXG5cbiAgICBjb25zdCBoaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0hJREVfU0hPV19PVkVSTEFZJywgb3Blbjp0cnVlfSlcbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKG92ZXJsYXkudHJhaWxlcnMpXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhpZGVPdmVybGF5KCl9IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlJz57c2VsZWN0ZWQudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncmF0aW5nJz57c2VsZWN0ZWQuc2NvcmUgPT09IDAgfHwgc2VsZWN0ZWQuc2NvcmUgPT09IHVuZGVmaW5lZCA/ICdObyBjdXJyZW50IHJhdGluZ3MnIDogc2VsZWN0ZWQuc2NvcmUgKyAnLzEwJ308L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZScgc3JjPXtzZWxlY3RlZC5pbWFnZV91cmx9PjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJhaWxlckNhcm91c2VsJz5cbiAgICAgICAgICAgICAgICB7b3ZlcmxheS50cmFpbGVycy5tYXAoKHRyYWlsZXIsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJhaWxlcmxpbmtcIiBocmVmPXt0cmFpbGVyLnZpZGVvX3VybH0ga2V5PXtpbmRleH0gZGF0YS1saXR5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFpbGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0cmFpbGVyLmltYWdlX3VybH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0cmFpbGVyLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwuOSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7b3ZlcmxheS5vcGVuID09PSB0cnVlPyBcImZsZXhcIiA6IFwibm9uZVwifTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDcxLDcxLDcxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmluZm8gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDUwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLnRyYWlsZXJDYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhaWxlckxpbmsge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGE6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRyYWlsZXIge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG8gMTBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRyYWlsZXIgaW1nIHtcblxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhaWxlciBpbWc6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCAgd2hpdGU7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhaWxlciBpbWc6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDE1cHggYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRyYWlsZXIgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xuXG4gICAgICAgICAgICAgICAgICAgIC50cmFpbGVybGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYTpsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsZXIgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcblxuICAgICAgICAgICAgICAgICAgICAudHJhaWxlckNhcm91c2VsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudHJhaWxlcmxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhOmxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2MHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjdlbTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsZXIgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zT3ZlcmxheSJdfQ== */
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


const FilterContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])('init');

const FilterContextProvider = props => {
  const {
    0: filter,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_filterReducer__WEBPACK_IMPORTED_MODULE_1__["filterReducer"], 'init');
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


const OverlayContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  open: false,
  trailers: []
});

const OverlayContextProvider = props => {
  const {
    0: overlay,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_overlayReducer__WEBPACK_IMPORTED_MODULE_1__["overlayReducer"], {
    open: false,
    trailers: []
  });
  return __jsx(OverlayContext.Provider, {
    value: {
      overlay,
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


const SearchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  query: "",
  active: false
});

const SearchContextProvider = props => {
  const {
    0: search,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_searchReducer__WEBPACK_IMPORTED_MODULE_1__["searchReducer"], {
    query: "",
    active: false
  });
  return __jsx(SearchContext.Provider, {
    value: {
      search,
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
  mobileS: '360px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
const device = {
  mobileS: `(max-width: ${size.mobileS})`,
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_VideosOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/VideosOverlay */ "./components/VideosOverlay.js");
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const Index = ({
  topAnime
}) => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833323328", [_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop]]]) + " " + "app",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("title", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833323328", [_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Anime Trailers"), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, user-scalable=no",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833323328", [_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("link", {
  href: "/styles/lity.min.css",
  rel: "stylesheet",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833323328", [_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("script", {
  src: "/jquery.js",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833323328", [_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("script", {
  src: "/lity.min.js",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833323328", [_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://use.typekit.net/cye7qdh.css",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3833323328", [_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})), __jsx(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_10__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_11__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(_components_VideosOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
  topAnime: topAnime,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3833323328",
  dynamic: [_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop],
  __self: undefined
}, `html,body{overflow:hidden;height:100%;}html,body,#__next,.app{height:100%;width:100%;margin:0;background-color:white;font-family:titling-gothic-fb;font-weight:200;font-style:normal;}.app{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;margin:0 auto;position:relative;}@media ${_devices__WEBPACK_IMPORTED_MODULE_13__["device"].laptop}{.app{width:100%;padding-top:20px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDTyxBQUkyQixBQVFKLEFBVU8sQUFVTixXQUNNLENBcEJSLElBUkMsT0FTSCxLQVBYLEFBNEJFLElBcEJ1Qix1QkFDTyw4QkFDZCxRQU1KLFFBTE0sSUFNUCxXQUNHLEdBTmhCLFdBT29CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJvdXNlbFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIlxuaW1wb3J0IFZpZGVvc092ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlb3NPdmVybGF5J1xuaW1wb3J0IEZpbHRlckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiO1xuaW1wb3J0IFNlYXJjaENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dFwiO1xuaW1wb3J0IEFuaW1lQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCBPdmVybGF5Q29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dFwiXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9kZXZpY2VzJ1xuXG5cbmNvbnN0IEluZGV4ID0gKHsgdG9wQW5pbWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkFuaW1lIFRyYWlsZXJzPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9bm9cIj48L21ldGE+XG4gICAgICA8bGluayBocmVmPVwiL3N0eWxlcy9saXR5Lm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgPHNjcmlwdCBzcmM9XCIvanF1ZXJ5LmpzXCI+PC9zY3JpcHQ+IFxuICAgICAgPHNjcmlwdCBzcmM9XCIvbGl0eS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvY3llN3FkaC5jc3NcIj48L2xpbms+XG4gICAgPC9IZWFkPlxuICAgIDxGaWx0ZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8U2VhcmNoQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8QW5pbWVDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPE92ZXJsYXlDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICA8VmlkZW9zT3ZlcmxheT48L1ZpZGVvc092ZXJsYXk+XG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICAgICAgPENhcm91c2VsIHRvcEFuaW1lPXt0b3BBbmltZX0+PC9DYXJvdXNlbD4gXG4gICAgICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxuICAgICAgICAgIDwvT3ZlcmxheUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPC9BbmltZUNvbnRleHRQcm92aWRlcj5cbiAgICAgIDwvU2VhcmNoQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvRmlsdGVyQ29udGV4dFByb3ZpZGVyPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcblxuICAgICAgICBodG1sLGJvZHkge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIH1cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSxcbiAgICAgICAgI19fbmV4dCxcbiAgICAgICAgLmFwcCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICAgIFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiB0aXRsaW5nLWdvdGhpYy1mYjtcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcHAge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0geyBcbiAgICAgICAgICAuYXBwIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvYnlwb3B1bGFyaXR5XCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXG4gIHJldHVybiB7XG4gICAgdG9wQW5pbWU6IGRhdGEudG9wLm1hcChlbnRyeSA9PiBlbnRyeSlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */
/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/pages/index.js */`));

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.jikan.moe/v3/top/anime/1/bypopularity");
  const data = await res.json();
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

const overlayReducer = (state, action) => {
  switch (action.type) {
    case 'HIDE_SHOW_OVERLAY':
      return _objectSpread({}, state, {
        open: action.boolean
      });

    case 'UPDATE_TRAILERS':
      return _objectSpread({}, state, {
        trailers: action.trailers
      });

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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return _objectSpread({}, state, {
        query: action.query
      });

    case 'ACTIVATE_SEARCH':
      return _objectSpread({}, state, {
        active: action.active
      });

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

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

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

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

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