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
      setInfo(res);
      setLoading(false);
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
  console.log(info);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfoBorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfoWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, selected.title !== undefined ? selected.title.length > 20 ? selected.title.slice(0, 20) + "..." : selected.title : "Select Anime"), loading === true && selected.title !== undefined && __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "loader",
    type: "Grid",
    color: "#ef5050",
    height: 30,
    width: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), loading !== true && selected.title !== undefined && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "synopsis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, info.synopsis), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "dataWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "ratingWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("img", {
    src: selected.score === 0 || selected.score === undefined ? "icons/star-crossed-icon.png" : "icons/star-filled-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "icon rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, selected.score === 0 || selected.score === undefined ? "No rating" : selected.score + "/10")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "videosWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("img", {
    src: "icons/video-playlist-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "icon videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3269423239", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, trailer !== [] ? trailer.length : "")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3269423239",
    dynamic: [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop],
    __self: this
  }, ".animeInfoBorder.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#7E7E7E;padding:5px;position:relative;margin-top:3.5%;-webkit-clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);position:absolute;bottom:0;width:100%;top:20%;}.animeInfoWrapper.__jsx-style-dynamic-selector{box-sizing:border-box;height:100%;background-color:white;-webkit-clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{height:75%;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;padding:15px;}.title.__jsx-style-dynamic-selector{width:100%;font-size:1.1em;font-weight:400;border-bottom:1px solid #9B9B9B;padding-bottom:10px;text-align:center;}.loader.__jsx-style-dynamic-selector{width:100%;margin:0 auto;}.info.__jsx-style-dynamic-selector{height:100%;width:100%;margin:0 auto;padding-top:10px;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.synopsis.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{visibility:".concat(selected.title === undefined ? "hidden" : "visible", ";}.synopsis.__jsx-style-dynamic-selector{font-size:.7em;margin:0;width:65%;height:100%;overflow-x:auto;}.ratingWrapper.__jsx-style-dynamic-selector{visibility:").concat(selected.title === undefined ? "hidden" : "visible", ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15%;}.videosWrapper.__jsx-style-dynamic-selector{display:block;visibility:").concat(selected.title === undefined ? "hidden" : "visible", ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon.__jsx-style-dynamic-selector{height:20px;-webkit-filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";-webkit-filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";margin-left:10px;}.rating.__jsx-style-dynamic-selector,.videos.__jsx-style-dynamic-selector{margin-left:10px;font-size:.7em;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, "{.animeInfo.__jsx-style-dynamic-selector{height:65%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, "{.animeInfoBorder.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);height:100%;position:static;margin-top:0;}.animeInfoWrapper.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:3%;height:100%;padding:0;}.icon.__jsx-style-dynamic-selector{height:65px;}.title.__jsx-style-dynamic-selector{font-size:1.5em;max-width:250px;font-weight:400;margin:0 30px;border-right:1px solid #9B9B9B;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;}.info.__jsx-style-dynamic-selector{height:80%;border-top:none;margin-left:15px;padding-top:0;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%;}.info.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.ratingWrapper.__jsx-style-dynamic-selector{margin-top:0;}.videosWrapper.__jsx-style-dynamic-selector{margin-top:0;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{font-size:1.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWVJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGUyxBQUcyQyxBQWFBLEFBT1gsQUFTQSxBQVNGLEFBS0csQUFROEIsQUFHRixBQUkzQixBQVEyQixBQU8xQixBQU9GLEFBT0ssQUFRUixBQU15RCxBQU9BLEFBS2xELEFBT0EsQUFJSSxBQWFMLEFBUzJCLEFBSXpCLEFBSUEsQUFLRyxXQTFJRixBQVNGLEFBU0osQUF5RGhCLEFBMEN3QixDQTlGVCxBQXFDaUMsQUF3QzVDLENBdEUyQyxBQStGQSxBQUszQyxBQUlBLENBakZ3QyxDQWZqQyxDQWtFYSxBQW1DcEIsQ0F4RWUsS0F2RlUsQUFhYixDQStCRSxDQWVOLENBcEJaLEVBVG9CLEFBNEdLLEVBckhGLEdBb0V2QixBQW9Dd0IsRUEvR0csQUE4Q2IsR0FmTyxHQVNyQixBQVlpQixHQW5DbUIsQ0E0R2QsRUE5RUosQ0E1REYsQ0E2SE0sTUFoRkYsQUE0QkgsRUFPdUIsQ0FsRTBCLENBNkg3QixDQTFJaEIsR0E0RHJCLEFBaUV1QyxRQWhGdkIsSUFrRUEsQ0FqRlEsRUE3QkosS0ErR0EsV0E5RzhDLEFBNEgvQyxDQWJELENBbEZFLFNBbUZoQixBQWFpQixTQS9GckIsQ0FpQ3VCLFFBN0NILElBK0VBLEFBUWhCLEVBbENtQixRQU9GLEVBM0RKLEFBK0VPLE1BdER4QixPQXZCQSxFQTBEQSxDQW9CcUIsYUFDakIsV0EwQnVCLEdBV04sRUE3SHJCLHdCQW9Ec0IsWUEvREEsRUF1RXRCLElBUEEsT0EwRUksS0F6SVMsU0FDRSxXQUNILFFBQ1osTUEwSCtCLG1HQUNWLG1EQUNqQiIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0FuaW1lSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vZGV2aWNlc1wiO1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0FuaW1lQ29udGV4dFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHRcIlxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcidcblxuXG5jb25zdCBBbmltZUluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KTtcblxuXG4gIGNvbnN0IHsgc2VsZWN0ZWQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dCk7XG4gIGxldCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdHJhaWxlciwgc2V0VHJhaWxlcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGxldCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBzdG9wTG9hZGluZyA9IHJlcyA9PiB7XG4gICAgICBzZXRJbmZvKHJlcyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgaWYgKHNlbGVjdGVkLm1hbF9pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvYW5pbWUvXCIgKyBzZWxlY3RlZC5tYWxfaWQgKyBcIi92aWRlb3NcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0VHJhaWxlcihyZXNwb25zZUpzb24ucHJvbW8pKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9hbmltZS8ke3NlbGVjdGVkLm1hbF9pZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzdG9wTG9hZGluZyhyZXNwb25zZUpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiB7fSB9KTtcbiAgfSwgW3NlYXJjaCwgZmlsdGVyXSk7XG5cblxuICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1lSW5mb0JvcmRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltZUluZm9XcmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWVJbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAge3NlbGVjdGVkLnRpdGxlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBzZWxlY3RlZC50aXRsZS5sZW5ndGggPiAyMFxuICAgICAgICAgICAgICAgID8gc2VsZWN0ZWQudGl0bGUuc2xpY2UoMCwgMjApICsgXCIuLi5cIlxuICAgICAgICAgICAgICAgIDogc2VsZWN0ZWQudGl0bGVcbiAgICAgICAgICAgICAgOiBcIlNlbGVjdCBBbmltZVwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlICYmIHNlbGVjdGVkLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgPExvYWRlciBjbGFzc05hbWU9XCJsb2FkZXJcIiB0eXBlPVwiR3JpZFwiIGNvbG9yPVwiI2VmNTA1MFwiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz4gfVxuICAgICAgICAgIHtsb2FkaW5nICE9PSB0cnVlICYmIHNlbGVjdGVkLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN5bm9wc2lzXCI+e2luZm8uc3lub3BzaXN9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcmF0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zY29yZSA9PT0gMCB8fCBzZWxlY3RlZC5zY29yZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbnMvc3Rhci1jcm9zc2VkLWljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpY29ucy9zdGFyLWZpbGxlZC1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZC5zY29yZSA9PT0gMCB8fCBzZWxlY3RlZC5zY29yZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIk5vIHJhdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBzZWxlY3RlZC5zY29yZSArIFwiLzEwXCJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiB2aWRlb3NcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJpY29ucy92aWRlby1wbGF5bGlzdC1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvc1wiPlxuICAgICAgICAgICAgICAgICAgICB7dHJhaWxlciAhPT0gW10gPyB0cmFpbGVyLmxlbmd0aCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvQm9yZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdFN0U3RTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41JTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAsIDEwMCUgMCUsIDEwMCUgMzUlICw2NSUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmFuaW1lSW5mb1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCwgMTAwJSAwJSwgMTAwJSAzMyUgLDY0JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlCOUI5QjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvYWRlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnN5bm9wc2lzOjotd2Via2l0LXNjcm9sbGJhciB7ICAgIGRpc3BsYXk6IG5vbmU7fVxuXG4gICAgICAgICAgICAgICAgLmluZm8gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnN5bm9wc2lzIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yYXRpbmdXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudmlkZW9zV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnRpdGxlID09PSB1bmRlZmluZWQgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiZ3JheXNjYWxlKDEwMCUpXCIgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB9OyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJncmF5c2NhbGUoMTAwJSlcIiA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yYXRpbmcsIC52aWRlb3Mge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZVN9IHtcblxuICAgICAgICAgICAgICAgIC5hbmltZUluZm8ge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0ge1xuXG4gICAgICAgICAgICAgICAgICAgIC5hbmltZUluZm9Cb3JkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIlIDAsIDk4LjUlIDAlLCA5NyUgNTUlICw4NSUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAuYW5pbWVJbmZvV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMiUgMCwgOTguNSUgMCUsIDk3JSA1NSUgLDg1JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5hbmltZUluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMyU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5QjlCOUI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMjUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA0NSU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvOjotd2Via2l0LXNjcm9sbGJhciB7ICAgIGRpc3BsYXk6IG5vbmU7fVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLnJhdGluZ1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52aWRlb3NXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmluZm8gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lSW5mbztcbiJdfQ== */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/AnimeInfo.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (AnimeInfo);

/***/ })

})
//# sourceMappingURL=index.js.698292dfd235165d8ecb.hot-update.js.map