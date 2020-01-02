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
    position: 'absolute',
    top: '10px',
    right: '15px'
  };
  console.log(info);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfoBorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfoWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, selected.title !== undefined ? selected.title.length > 20 ? selected.title.slice(0, 20) + "..." : selected.title : "Select Anime"), loading === true && selected.title !== undefined && __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: styles,
    type: "Circles",
    color: "#ef5050",
    height: 25,
    width: 25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), loading !== true && selected.title !== undefined && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "synopsis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, info.synopsis), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "dataWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "ratingWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("img", {
    src: selected.score === 0 || selected.score === undefined ? "icons/star-crossed-icon.png" : "icons/star-filled-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "icon rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, selected.score === 0 || selected.score === undefined ? "No rating" : selected.score + "/10")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "videosWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("img", {
    src: "icons/video-playlist-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "icon videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2451167693", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, trailer !== [] ? trailer.length : "")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2451167693",
    dynamic: [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop],
    __self: this
  }, ".animeInfoBorder.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#7E7E7E;padding:5px;position:relative;margin-top:3.5%;-webkit-clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);position:absolute;bottom:0;width:100%;top:20%;}.animeInfoWrapper.__jsx-style-dynamic-selector{box-sizing:border-box;height:100%;background-color:white;-webkit-clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{height:75%;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;padding:15px;}.title.__jsx-style-dynamic-selector{width:100%;font-size:1.1em;font-weight:400;border-bottom:1px solid #9B9B9B;padding-bottom:10px;text-align:left;}.loader.__jsx-style-dynamic-selector{width:100%;margin:0 auto;display:block;}.info.__jsx-style-dynamic-selector{height:100%;width:100%;margin:0 auto;padding-top:10px;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.synopsis.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{visibility:".concat(selected.title === undefined ? "hidden" : "visible", ";}.synopsis.__jsx-style-dynamic-selector{font-size:.7em;margin:0;width:65%;height:100%;overflow-x:auto;}.ratingWrapper.__jsx-style-dynamic-selector{visibility:").concat(selected.title === undefined ? "hidden" : "visible", ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15%;}.videosWrapper.__jsx-style-dynamic-selector{display:block;visibility:").concat(selected.title === undefined ? "hidden" : "visible", ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon.__jsx-style-dynamic-selector{height:20px;-webkit-filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";-webkit-filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";margin-left:10px;}.rating.__jsx-style-dynamic-selector,.videos.__jsx-style-dynamic-selector{margin-left:10px;font-size:.7em;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, "{.animeInfo.__jsx-style-dynamic-selector{height:65%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, "{.animeInfoBorder.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);height:100%;position:static;margin-top:0;}.animeInfoWrapper.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:3%;height:100%;padding:0;}.icon.__jsx-style-dynamic-selector{height:65px;}.title.__jsx-style-dynamic-selector{font-size:1.5em;max-width:250px;font-weight:400;margin:0 30px;border-right:1px solid #9B9B9B;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;}.info.__jsx-style-dynamic-selector{height:80%;border-top:none;margin-left:15px;padding-top:0;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%;}.info.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.ratingWrapper.__jsx-style-dynamic-selector{margin-top:0;}.videosWrapper.__jsx-style-dynamic-selector{margin-top:0;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{font-size:1.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWVJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9HUyxBQUcyQyxBQWFBLEFBT1gsQUFTQSxBQVNGLEFBTUcsQUFROEIsQUFHRixBQUkzQixBQVEyQixBQU8xQixBQU9GLEFBT0ssQUFRUixBQU15RCxBQU9BLEFBS2xELEFBT0EsQUFJSSxBQWFMLEFBUzJCLEFBSXpCLEFBSUEsQUFLRyxXQTNJRixBQVNGLEFBU0osQUEwRGhCLEFBMEN3QixDQTlGVCxBQXFDaUMsQUF3QzVDLENBdEUyQyxBQStGQSxBQUszQyxBQUlBLENBakZ3QyxDQWZqQyxDQWtFYSxBQW1DcEIsQ0F4RWUsS0F4RlUsQUFhYixDQWdDRSxDQWVOLENBckJJLEVBVEksQUE2R0ssRUF0SEYsR0FxRXZCLEFBb0N3QixFQWhIRyxBQStDYixHQWZPLEVBTnJCLENBZUEsQUFZaUIsR0FwQ21CLENBNkdkLEVBOUVKLENBN0RGLENBOEhNLE1BaEZGLEFBNEJILEVBT3VCLENBbkUwQixDQThIN0IsQ0EzSWhCLEdBNkRyQixBQWlFdUMsUUFoRnZCLElBa0VBLENBbEZRLEVBN0JKLEtBZ0hBLFdBL0c4QyxBQTZIL0MsQ0FiRCxDQW5GQSxTQW9GZCxBQWFpQixPQWhHckIsR0FrQ3VCLFFBOUNILElBZ0ZBLEFBUWhCLEVBbENtQixRQU9GLEVBNURKLEFBZ0ZPLE1BdER4QixPQXhCQSxFQTJEQSxDQW9CcUIsYUFDakIsV0EwQnVCLEdBV04sRUE5SHJCLHdCQXFEc0IsWUFoRUEsRUF3RXRCLElBUEEsT0EwRUksS0ExSVMsU0FDRSxXQUNILFFBQ1osTUEySCtCLG1HQUNWLG1EQUNqQiIsImZpbGUiOiIvVXNlcnMvdGFrYWl0ZWNoL1Rha2FpLVRlY2gvYW5pbWUtdHJhaWxlcnMtbmV4dC9jb21wb25lbnRzL0FuaW1lSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vZGV2aWNlc1wiO1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0FuaW1lQ29udGV4dFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TZWFyY2hDb250ZXh0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHRcIlxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcidcblxuXG5jb25zdCBBbmltZUluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IGZpbHRlciB9ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KTtcblxuXG4gIGNvbnN0IHsgc2VsZWN0ZWQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEFuaW1lQ29udGV4dCk7XG4gIGxldCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdHJhaWxlciwgc2V0VHJhaWxlcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGxldCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBzdG9wTG9hZGluZyA9IHJlcyA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgc2V0SW5mbyhyZXMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9LDUwMClcbiAgICB9O1xuXG4gICAgaWYgKHNlbGVjdGVkLm1hbF9pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvYW5pbWUvXCIgKyBzZWxlY3RlZC5tYWxfaWQgKyBcIi92aWRlb3NcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0VHJhaWxlcihyZXNwb25zZUpzb24ucHJvbW8pKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9hbmltZS8ke3NlbGVjdGVkLm1hbF9pZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzdG9wTG9hZGluZyhyZXNwb25zZUpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiB7fSB9KTtcbiAgfSwgW3NlYXJjaCwgZmlsdGVyXSk7XG5cbiAgbGV0IHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcxMHB4JyxcbiAgICByaWdodDogJzE1cHgnXG4gIH07XG5cbiAgY29uc29sZS5sb2coaW5mbyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltZUluZm9Cb3JkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWVJbmZvV3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1lSW5mb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIHtzZWxlY3RlZC50aXRsZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gc2VsZWN0ZWQudGl0bGUubGVuZ3RoID4gMjBcbiAgICAgICAgICAgICAgICA/IHNlbGVjdGVkLnRpdGxlLnNsaWNlKDAsIDIwKSArIFwiLi4uXCJcbiAgICAgICAgICAgICAgICA6IHNlbGVjdGVkLnRpdGxlXG4gICAgICAgICAgICAgIDogXCJTZWxlY3QgQW5pbWVcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSAmJiBzZWxlY3RlZC50aXRsZSAhPT0gdW5kZWZpbmVkICYmIDxMb2FkZXIgc3R5bGU9e3N0eWxlc30gdHlwZT1cIkNpcmNsZXNcIiBjb2xvcj1cIiNlZjUwNTBcIiBoZWlnaHQ9ezI1fSB3aWR0aD17MjV9IC8+IH1cbiAgICAgICAgICB7bG9hZGluZyAhPT0gdHJ1ZSAmJiBzZWxlY3RlZC50aXRsZSAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzeW5vcHNpc1wiPntpbmZvLnN5bm9wc2lzfTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHJhdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuc2NvcmUgPT09IDAgfHwgc2VsZWN0ZWQuc2NvcmUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImljb25zL3N0YXItY3Jvc3NlZC1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbnMvc3Rhci1maWxsZWQtaWNvbi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQuc2NvcmUgPT09IDAgfHwgc2VsZWN0ZWQuc2NvcmUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJObyByYXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIDogc2VsZWN0ZWQuc2NvcmUgKyBcIi8xMFwifVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb3NXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gdmlkZW9zXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaWNvbnMvdmlkZW8tcGxheWxpc3QtaWNvbi5wbmdcIlxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb3NcIj5cbiAgICAgICAgICAgICAgICAgICAge3RyYWlsZXIgIT09IFtdID8gdHJhaWxlci5sZW5ndGggOiBcIlwifVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmFuaW1lSW5mb0JvcmRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3RTdFN0U7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMuNSU7XG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwLCAxMDAlIDAlLCAxMDAlIDM1JSAsNjUlIDEwMCUsIDAlIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hbmltZUluZm9XcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAsIDEwMCUgMCUsIDEwMCUgMzMlICw2NCUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmFuaW1lSW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5QjlCOUI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zeW5vcHNpczo6LXdlYmtpdC1zY3JvbGxiYXIgeyAgICBkaXNwbGF5OiBub25lO31cblxuICAgICAgICAgICAgICAgIC5pbmZvIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zeW5vcHNpcyB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmF0aW5nV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZpZGVvc1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiAke1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnRpdGxlID09PSB1bmRlZmluZWQgPyBcImdyYXlzY2FsZSgxMDAlKVwiIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgfTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiZ3JheXNjYWxlKDEwMCUpXCIgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmF0aW5nLCAudmlkZW9zIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5tb2JpbGVTfSB7XG5cbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcblxuICAgICAgICAgICAgICAgICAgICAuYW5pbWVJbmZvQm9yZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyJSAwLCA5OC41JSAwJSwgOTclIDU1JSAsODUlIDEwMCUsIDAlIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1lSW5mb1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIlIDAsIDk4LjUlIDAlLCA5NyUgNTUlICw4NSUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAuYW5pbWVJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOUI5QjlCO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDI1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNDUlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIgeyAgICBkaXNwbGF5OiBub25lO31cblxuXG4gICAgICAgICAgICAgICAgICAgIC5yYXRpbmdXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9zV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltZUluZm87XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/AnimeInfo.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (AnimeInfo);

/***/ })

})
//# sourceMappingURL=index.js.515498dcdcc7e00a4543.hot-update.js.map