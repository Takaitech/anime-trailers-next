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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfoBorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfoWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "animeInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "title",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "synopsis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, info.synopsis), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "dataWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "ratingWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("img", {
    src: selected.score === 0 || selected.score === undefined ? "icons/star-crossed-icon.png" : "icons/star-filled-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "icon rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "rating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, selected.score === 0 || selected.score === undefined ? "No rating" : selected.score + "/10")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "videosWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("img", {
    src: "icons/video-playlist-icon.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "icon videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2999576109", [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop]]]) + " " + "videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, trailer !== [] ? trailer.length : "")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2999576109",
    dynamic: [selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "hidden" : "visible", selected.title === undefined ? "grayscale(100%)" : "none", selected.title === undefined ? "grayscale(100%)" : "none", _devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, _devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop],
    __self: this
  }, ".animeInfoBorder.__jsx-style-dynamic-selector{box-sizing:border-box;background-color:#7E7E7E;padding:5px;position:relative;margin-top:3.5%;-webkit-clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 35% ,65% 100%,0% 100%);position:absolute;bottom:0;width:100%;top:20%;}.animeInfoWrapper.__jsx-style-dynamic-selector{box-sizing:border-box;height:100%;background-color:white;-webkit-clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);clip-path:polygon(0% 0,100% 0%,100% 33% ,64% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{height:75%;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;padding:15px;}.title.__jsx-style-dynamic-selector{width:100%;font-size:1.1em;font-weight:400;border-bottom:1px solid #9B9B9B;padding-bottom:10px;text-align:center;}.info.__jsx-style-dynamic-selector{height:100%;width:100%;margin:0 auto;padding-top:10px;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.synopsis.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{visibility:".concat(selected.title === undefined ? "hidden" : "visible", ";}.synopsis.__jsx-style-dynamic-selector{font-size:.7em;margin:0;width:65%;height:100%;overflow-x:auto;}.ratingWrapper.__jsx-style-dynamic-selector{visibility:").concat(selected.title === undefined ? "hidden" : "visible", ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15%;}.videosWrapper.__jsx-style-dynamic-selector{display:block;visibility:").concat(selected.title === undefined ? "hidden" : "visible", ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon.__jsx-style-dynamic-selector{height:20px;-webkit-filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";-webkit-filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";filter:").concat(selected.title === undefined ? "grayscale(100%)" : "none", ";margin-left:10px;}.rating.__jsx-style-dynamic-selector,.videos.__jsx-style-dynamic-selector{margin-left:10px;font-size:.7em;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_2__["device"].mobileS, "{.animeInfo.__jsx-style-dynamic-selector{height:65%;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_2__["device"].laptop, "{.animeInfoBorder.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);height:100%;position:static;margin-top:0;}.animeInfoWrapper.__jsx-style-dynamic-selector{-webkit-clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);clip-path:polygon(2% 0,98.5% 0%,97% 55% ,85% 100%,0% 100%);}.animeInfo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:3%;height:100%;padding:0;}.icon.__jsx-style-dynamic-selector{height:65px;}.title.__jsx-style-dynamic-selector{font-size:1.5em;max-width:250px;font-weight:400;margin:0 30px;border-right:1px solid #9B9B9B;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;}.info.__jsx-style-dynamic-selector{height:80%;border-top:none;margin-left:15px;padding-top:0;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%;}.info.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.ratingWrapper.__jsx-style-dynamic-selector{margin-top:0;}.videosWrapper.__jsx-style-dynamic-selector{margin-top:0;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{font-size:1.2em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWVJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGUyxBQUcyQyxBQWFBLEFBT1gsQUFTQSxBQVNDLEFBUThCLEFBR0YsQUFJM0IsQUFRMkIsQUFPMUIsQUFPRixBQU9LLEFBUVIsQUFNeUQsQUFPQSxBQUtsRCxBQU9BLEFBSUksQUFhTCxBQVMyQixBQUl6QixBQUlBLEFBS0csV0FySUYsQUFTRixBQTZEcEIsQUEwQ3dCLENBOUZULEFBcUNpQyxBQXdDNUMsQ0F0RTJDLEFBK0ZBLEFBSzNDLEFBSUEsQ0FqRndDLENBZmpDLENBa0VhLEFBbUNwQixDQXhFZSxLQWxGVSxBQWFiLENBMEJFLENBZU4sR0F4QlEsQUF1R0ssRUFoSEYsR0ErRHZCLEFBb0N3QixFQTFHRyxBQXlDYixHQWZPLEdBU3JCLEFBWWlCLEdBOUJtQixDQXVHZCxFQTlFSixDQXZERixDQXdITSxNQWhGRixBQTRCSCxFQU91QixDQTdEMEIsQ0F3SDdCLENBckloQixHQXVEckIsQUFpRXVDLFFBaEZ2QixJQWtFQSxDQTVFUSxFQTdCSixLQTBHQSxXQXpHOEMsQUF1SC9DLENBYkQsQ0E3RUUsU0E4RWhCLEFBYWlCLFNBMUZyQixDQTRCdUIsUUF4Q0gsSUEwRUEsQUFRaEIsRUFsQ21CLFFBT0YsRUF0REosQUEwRU8sTUF0RHhCLE9BbEJBLEVBcURBLENBb0JxQixhQUNqQixXQTBCdUIsR0FXTixFQXhIckIsd0JBK0NzQixZQTFEQSxFQWtFdEIsSUFQQSxPQTBFSSxLQXBJUyxTQUNFLFdBQ0gsUUFDWixNQXFIK0IsbUdBQ1YsbURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQW5pbWVJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi9kZXZpY2VzXCI7XG5pbXBvcnQgeyBBbmltZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQW5pbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NlYXJjaENvbnRleHRcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRmlsdGVyQ29udGV4dFwiXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJ1xuXG5cbmNvbnN0IEFuaW1lSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgeyBzZWFyY2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG4gIGNvbnN0IHsgZmlsdGVyIH0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpO1xuXG5cbiAgY29uc3QgeyBzZWxlY3RlZCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQW5pbWVDb250ZXh0KTtcbiAgbGV0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0cmFpbGVyLCBzZXRUcmFpbGVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgbGV0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHN0b3BMb2FkaW5nID0gcmVzID0+IHtcbiAgICAgIHNldEluZm8ocmVzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBpZiAoc2VsZWN0ZWQubWFsX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBmZXRjaChcImh0dHBzOi8vYXBpLmppa2FuLm1vZS92My9hbmltZS9cIiArIHNlbGVjdGVkLm1hbF9pZCArIFwiL3ZpZGVvc1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRUcmFpbGVyKHJlc3BvbnNlSnNvbi5wcm9tbykpXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL2FuaW1lLyR7c2VsZWN0ZWQubWFsX2lkfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VKc29uID0+IHN0b3BMb2FkaW5nKHJlc3BvbnNlSnNvbikpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRUxFQ1RfQU5JTUVcIiwgc2VsZWN0ZWQ6IHt9IH0pO1xuICB9LCBbc2VhcmNoLCBmaWx0ZXJdKTtcblxuXG4gIGNvbnNvbGUubG9nKGluZm8pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWVJbmZvQm9yZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1lSW5mb1dyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltZUluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICB7c2VsZWN0ZWQudGl0bGUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IHNlbGVjdGVkLnRpdGxlLmxlbmd0aCA+IDIwXG4gICAgICAgICAgICAgICAgPyBzZWxlY3RlZC50aXRsZS5zbGljZSgwLCAyMCkgKyBcIi4uLlwiXG4gICAgICAgICAgICAgICAgOiBzZWxlY3RlZC50aXRsZVxuICAgICAgICAgICAgICA6IFwiU2VsZWN0IEFuaW1lXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgJiYgc2VsZWN0ZWQudGl0bGUgIT09IHVuZGVmaW5lZCAmJiA8TG9hZGVyIGNsYXNzTmFtZT1cImxvYWRlclwiIHR5cGU9XCJHcmlkXCIgY29sb3I9XCIjZWY1MDUwXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPiB9XG4gICAgICAgICAge2xvYWRpbmcgIT09IHRydWUgJiYgc2VsZWN0ZWQudGl0bGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3lub3BzaXNcIj57aW5mby5zeW5vcHNpc308L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiByYXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNjb3JlID09PSAwIHx8IHNlbGVjdGVkLnNjb3JlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpY29ucy9zdGFyLWNyb3NzZWQtaWNvbi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImljb25zL3N0YXItZmlsbGVkLWljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkLnNjb3JlID09PSAwIHx8IHNlbGVjdGVkLnNjb3JlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiTm8gcmF0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHNlbGVjdGVkLnNjb3JlICsgXCIvMTBcIn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9zV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHZpZGVvc1wiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImljb25zL3ZpZGVvLXBsYXlsaXN0LWljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0cmFpbGVyICE9PSBbXSA/IHRyYWlsZXIubGVuZ3RoIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5hbmltZUluZm9Cb3JkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0U3RTdFO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjUlO1xuICAgICAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCwgMTAwJSAwJSwgMTAwJSAzNSUgLDY1JSAxMDAlLCAwJSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwLCAxMDAlIDAlLCAxMDAlIDMzJSAsNjQlIDEwMCUsIDAlIDEwMCUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hbmltZUluZm8ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOUI5QjlCO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zeW5vcHNpczo6LXdlYmtpdC1zY3JvbGxiYXIgeyAgICBkaXNwbGF5OiBub25lO31cblxuICAgICAgICAgICAgICAgIC5pbmZvIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zeW5vcHNpcyB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmF0aW5nV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZpZGVvc1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiAke1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnRpdGxlID09PSB1bmRlZmluZWQgPyBcImdyYXlzY2FsZSgxMDAlKVwiIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgfTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiZ3JheXNjYWxlKDEwMCUpXCIgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmF0aW5nLCAudmlkZW9zIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5tb2JpbGVTfSB7XG5cbiAgICAgICAgICAgICAgICAuYW5pbWVJbmZvIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcblxuICAgICAgICAgICAgICAgICAgICAuYW5pbWVJbmZvQm9yZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyJSAwLCA5OC41JSAwJSwgOTclIDU1JSAsODUlIDEwMCUsIDAlIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1lSW5mb1dyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIlIDAsIDk4LjUlIDAlLCA5NyUgNTUlICw4NSUgMTAwJSwgMCUgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAuYW5pbWVJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOUI5QjlCO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDI1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNDUlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIgeyAgICBkaXNwbGF5OiBub25lO31cblxuXG4gICAgICAgICAgICAgICAgICAgIC5yYXRpbmdXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudmlkZW9zV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltZUluZm87XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/AnimeInfo.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (AnimeInfo);

/***/ })

})
//# sourceMappingURL=index.js.54e0b8a9018c2eff131b.hot-update.js.map