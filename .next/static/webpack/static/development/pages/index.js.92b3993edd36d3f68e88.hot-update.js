webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AnimeInfo.js":
/*!*********************************!*\
  !*** ./components/AnimeInfo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../devices */ "./devices.js");
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SearchContext */ "./contexts/SearchContext.js");
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/FilterContext */ "./contexts/FilterContext.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/AnimeInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var AnimeInfo = function AnimeInfo() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__["SearchContext"]),
      search = _useContext.search;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_5__["FilterContext"]),
      filter = _useContext2.filter;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_3__["AnimeContext"]),
      selected = _useContext3.selected,
      dispatch = _useContext3.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      info = _useState[0],
      setInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      trailer = _useState2[0],
      setTrailer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState3[0],
      setLoading = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var stopLoading = function stopLoading(res) {
      setTimeout(function () {
        setInfo(res);
        setLoading(false);
      }, 500);
    };

    if (selected.mal_id !== undefined) {
      setLoading(true);
      fetch("https://api.jikan.moe/v3/anime/" + selected.mal_id + "/videos").then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return setTrailer(responseJson.promo);
      })["catch"](function (err) {
        console.log(err);
      });
      fetch("https://api.jikan.moe/v3/anime/".concat(selected.mal_id)).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return stopLoading(responseJson);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, [selected]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: "SELECT_ANIME",
      selected: {}
    });
  }, [search, filter]);
  var styles = {
    width: '65%',
    position: 'relative',
    top: '15%'
  };
  console.log(info);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfoBorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfoWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, selected.title !== undefined ? selected.title.length > 20 ? selected.title.slice(0, 20) + "..." : selected.title : "Select Anime"), loading === true && selected.title !== undefined && __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: styles,
    type: "Circles",
    color: "#ef5050",
    height: 100,
    width: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), loading !== true && selected.title !== undefined && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "synopsis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, info.synopsis), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "dataWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "ratingWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("img", {
    src: selected.score === 0 || selected.score === undefined ? "icons/star-crossed-icon.png" : "icons/star-filled-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "icon rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, selected.score === 0 || selected.score === undefined ? "No rating" : selected.score + "/10")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "videosWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("img", {
    src: "icons/video-playlist-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "icon videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3776931143", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, trailer !== [] ? trailer.length : "")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3776931143",
    dynamic: [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop],
    __self: this
  }, ".animeInfoBorder.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#7E7E7E;padding:5px;position:relative;margin-top:3.5%;-webkit-clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);position:absolute;bottom:0;width:100%;top:20%;}.animeInfoWrapper.__jsx-style-dynamic-selector{box-sizing:border-box;height:100%;background-color:white;-webkit-clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{height:75%;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;padding:15px;}.title.__jsx-style-dynamic-selector{width:100%;font-size:1.1em;font-weight:400;border-bottom:1px solid #9B9B9B;padding-bottom:10px;text-align:center;}.loader.__jsx-style-dynamic-selector{width:100%;margin:0 auto;display:block;}.info.__jsx-style-dynamic-selector{height:100%;width:100%;margin:0 auto;padding-top:10px;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.synopsis.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{visibility:".concat(selected.title === undefined ? "hidden" : "visible", ";}.synopsis.__jsx-style-dynamic-selector{font-size:.7em;margin:0;width:65%;height:100%;overflow-x:auto;}.ratingWrapper.__jsx-style-dynamic-selector{visibility:").concat(selected.title === undefined ? "hidden" : "visible", ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15%;}.videosWrapper.__jsx-style-dynamic-selector{display:block;visibility:").concat(selected.title === undefined ? "hidden" : "visible", ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon.__jsx-style-dynamic-selector{height:20px;-webkit-filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";-webkit-filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";margin-left:10px;}.rating.__jsx-style-dynamic-selector,.videos.__jsx-style-dynamic-selector{margin-left:10px;font-size:.7em;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, "{.animeInfo.__jsx-style-dynamic-selector{height:65%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, "{.animeInfoBorder.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);height:100%;position:static;margin-top:0;}.animeInfoWrapper.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:3%;height:100%;padding:0;}.icon.__jsx-style-dynamic-selector{height:65px;}.title.__jsx-style-dynamic-selector{font-size:1.5em;max-width:250px;font-weight:400;margin:0 30px;border-right:1px solid #9B9B9B;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;}.info.__jsx-style-dynamic-selector{height:80%;border-top:none;margin-left:15px;padding-top:0;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%;}.info.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.ratingWrapper.__jsx-style-dynamic-selector{margin-top:0;}.videosWrapper.__jsx-style-dynamic-selector{margin-top:0;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{font-size:1.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWVJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9HUyxBQUcyQyxBQWFBLEFBT1gsQUFTQSxBQVNGLEFBTUcsQUFROEIsQUFHRixBQUkzQixBQVEyQixBQU8xQixBQU9GLEFBT0ssQUFRUixBQU15RCxBQU9BLEFBS2xELEFBT0EsQUFJSSxBQWFMLEFBUzJCLEFBSXpCLEFBSUEsQUFLRyxXQTNJRixBQVNGLEFBU0osQUEwRGhCLEFBMEN3QixDQTlGVCxBQXFDaUMsQUF3QzVDLENBdEUyQyxBQStGQSxBQUszQyxBQUlBLENBakZ3QyxDQWZqQyxDQWtFYSxBQW1DcEIsQ0F4RWUsS0F4RlUsQUFhYixDQWdDRSxDQWVOLENBckJJLEVBVEksQUE2R0ssRUF0SEYsR0FxRXZCLEFBb0N3QixFQWhIRyxBQStDYixHQWZPLEVBTnJCLENBZUEsQUFZaUIsR0FwQ21CLENBNkdkLEVBOUVKLENBN0RGLENBOEhNLE1BaEZGLEFBNEJILEVBT3VCLENBbkUwQixDQThIN0IsQ0EzSWhCLEdBNkRyQixBQWlFdUMsUUFoRnZCLElBa0VBLENBbEZRLEVBN0JKLEtBZ0hBLFdBL0c4QyxBQTZIL0MsQ0FiRCxDQW5GRSxTQW9GaEIsQUFhaUIsU0FoR3JCLENBa0N1QixRQTlDSCxJQWdGQSxBQVFoQixFQWxDbUIsUUFPRixFQTVESixBQWdGTyxNQXREeEIsT0F4QkEsRUEyREEsQ0FvQnFCLGFBQ2pCLFdBMEJ1QixHQVdOLEVBOUhyQix3QkFxRHNCLFlBaEVBLEVBd0V0QixJQVBBLE9BMEVJLEtBMUlTLFNBQ0UsV0FDSCxRQUNaLE1BMkgrQixtR0FDVixtREFDakIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9BbmltZUluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uL2RldmljZXNcIjtcbmltcG9ydCB7IEFuaW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BbmltZUNvbnRleHRcIjtcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dFwiO1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9GaWx0ZXJDb250ZXh0XCJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInXG5cblxuY29uc3QgQW5pbWVJbmZvID0gKCkgPT4ge1xuICBjb25zdCB7IHNlYXJjaCB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcbiAgY29uc3QgeyBmaWx0ZXIgfSA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dCk7XG5cblxuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuICBsZXQgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3RyYWlsZXIsIHNldFRyYWlsZXJdID0gdXNlU3RhdGUoW10pO1xuICBsZXQgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgc3RvcExvYWRpbmcgPSByZXMgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIHNldEluZm8ocmVzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSw1MDApXG4gICAgfTtcblxuICAgIGlmIChzZWxlY3RlZC5tYWxfaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL2FuaW1lL1wiICsgc2VsZWN0ZWQubWFsX2lkICsgXCIvdmlkZW9zXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHNldFRyYWlsZXIocmVzcG9uc2VKc29uLnByb21vKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvYW5pbWUvJHtzZWxlY3RlZC5tYWxfaWR9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc3RvcExvYWRpbmcocmVzcG9uc2VKc29uKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFTEVDVF9BTklNRVwiLCBzZWxlY3RlZDoge30gfSk7XG4gIH0sIFtzZWFyY2gsIGZpbHRlcl0pO1xuXG4gIGxldCBzdHlsZXMgPSB7XG4gICAgd2lkdGg6ICc2NSUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzE1JScsXG4gIH07XG5cbiAgY29uc29sZS5sb2coaW5mbyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltZUluZm9Cb3JkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWVJbmZvV3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1lSW5mb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIHtzZWxlY3RlZC50aXRsZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gc2VsZWN0ZWQudGl0bGUubGVuZ3RoID4gMjBcbiAgICAgICAgICAgICAgICA/IHNlbGVjdGVkLnRpdGxlLnNsaWNlKDAsIDIwKSArIFwiLi4uXCJcbiAgICAgICAgICAgICAgICA6IHNlbGVjdGVkLnRpdGxlXG4gICAgICAgICAgICAgIDogXCJTZWxlY3QgQW5pbWVcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSAmJiBzZWxlY3RlZC50aXRsZSAhPT0gdW5kZWZpbmVkICYmIDxMb2FkZXIgc3R5bGU9e3N0eWxlc30gdHlwZT1cIkNpcmNsZXNcIiBjb2xvcj1cIiNlZjUwNTBcIiBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gLz4gfVxuICAgICAgICAgIHtsb2FkaW5nICE9PSB0cnVlICYmIHNlbGVjdGVkLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN5bm9wc2lzXCI+e2luZm8uc3lub3BzaXN9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcmF0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zY29yZSA9PT0gMCB8fCBzZWxlY3RlZC5zY29yZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbnMvc3Rhci1jcm9zc2VkLWljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpY29ucy9zdGFyLWZpbGxlZC1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZC5zY29yZSA9PT0gMCB8fCBzZWxlY3RlZC5zY29yZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIk5vIHJhdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBzZWxlY3RlZC5zY29yZSArIFwiLzEwXCJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiB2aWRlb3NcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJpY29ucy92aWRlby1wbGF5bGlzdC1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvc1wiPlxuICAgICAgICAgICAgICAgICAgICB7dHJhaWxlciAhPT0gW10gPyB0cmFpbGVyLmxlbmd0aCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvQm9yZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdFN0U3RTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41JTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAsIDEwMCUgMCUsIDEwMCUgMzUlICw2NSUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmFuaW1lSW5mb1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCwgMTAwJSAwJSwgMTAwJSAzMyUgLDY0JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlCOUI5QjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvYWRlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc3lub3BzaXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgICAgZGlzcGxheTogbm9uZTt9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyBkaXYge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnRpdGxlID09PSB1bmRlZmluZWQgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc3lub3BzaXMge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJhdGluZ1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnRpdGxlID09PSB1bmRlZmluZWQgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC52aWRlb3NXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJncmF5c2NhbGUoMTAwJSlcIiA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIH07IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAke1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnRpdGxlID09PSB1bmRlZmluZWQgPyBcImdyYXlzY2FsZSgxMDAlKVwiIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJhdGluZywgLnZpZGVvcyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlU30ge1xuXG4gICAgICAgICAgICAgICAgLmFuaW1lSW5mbyB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLmFuaW1lSW5mb0JvcmRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMiUgMCwgOTguNSUgMCUsIDk3JSA1NSUgLDg1JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5hbmltZUluZm9XcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyJSAwLCA5OC41JSAwJSwgOTclIDU1JSAsODUlIDEwMCUsIDAlIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1lSW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzlCOUI5QjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDQ1JTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmluZm86Oi13ZWJraXQtc2Nyb2xsYmFyIHsgICAgZGlzcGxheTogbm9uZTt9XG5cblxuICAgICAgICAgICAgICAgICAgICAucmF0aW5nV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvc1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW5mbyBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWVJbmZvO1xuIl19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/AnimeInfo.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (AnimeInfo);

/***/ })

})
//# sourceMappingURL=index.js.92b3993edd36d3f68e88.hot-update.js.map