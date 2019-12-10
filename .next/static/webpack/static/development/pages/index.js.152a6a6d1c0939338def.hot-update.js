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

var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Carousel = function Carousel(_ref) {
  var topAnime = _ref.topAnime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(topAnime),
      anime = _useState[0],
      setAnime = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_3__["FilterContext"]),
      filter = _useContext.filter;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_4__["SearchContext"]),
      query = _useContext2.query;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_5__["AnimeContext"]),
      selected = _useContext3.selected,
      dispatch = _useContext3.dispatch;

  var carouselSelector = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0%"),
      scrollProgress = _useState2[0],
      setScrollProgress = _useState2[1];

  var getScrollPercent = function getScrollPercent() {
    return carouselSelector.current.scrollLeft / (carouselSelector.current.scrollWidth - carouselSelector.current.offsetWidth) * 100;
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDown = _useState3[0],
      setIsDown = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      startX = _useState4[0],
      setStartX = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      scrollLeft = _useState5[0],
      setScrollLeft = _useState5[1];

  var _onMouseDown = function onMouseDown(e) {
    setIsDown(true);
    setStartX(e.pageX - carouselSelector.current.offsetLeft);
    setScrollLeft(carouselSelector.current.scrollLeft);
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  var _onMouseLeave = function onMouseLeave(e) {
    setIsDown(false);
  };

  var _onMouseUp = function onMouseUp(e) {
    setIsDown(false);
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  var _onMouseMove = function onMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX;
    var distance = (x - startX) * 3;
    carouselSelector.current.scrollLeft = scrollLeft - distance;
  };

  var _onTouchStart = function onTouchStart(e) {
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  var _onTouchEnd = function onTouchEnd(e) {
    var scrollPercent = getScrollPercent();
    setScrollProgress(scrollPercent);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var url = filter === "top" ? "https://api.jikan.moe/v3/top/anime/1/bypopularity" : "https://api.jikan.moe/v3/top/anime/1/upcoming";
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      return setAnime(responseJson.top);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, [filter]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (query !== "") {
      var formatQueryParams = function formatQueryParams(params) {
        var queryItems = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params).map(function (key) {
          return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
        });

        return queryItems.join("&");
      };

      var baseurl = "https://api.jikan.moe/v3/search/anime";
      var params = {
        q: query,
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
  }, [query]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: "SELECT_ANIME",
      selected: {}
    });
  }, [anime]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3610558922", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carouselWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
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
    onTouchStart: function onTouchStart(e) {
      return _onTouchStart(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      return _onTouchEnd(e);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3610558922", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "carousel ".concat(isDown === true ? "isDown" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, anime.map(function (anime, index) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      anime: anime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    });
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3610558922", [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]]]) + " " + "scrollBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3610558922",
    dynamic: [scrollProgress + '%', _devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop],
    __self: this
  }, ".carouselWrapper.__jsx-style-dynamic-selector{width:100%;}.carousel.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:175px;max-width:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-bottom:5px;}.carousel.__jsx-style-dynamic-selector{-ms-overflow-style:none;overflow:-moz-scrollbars-none;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.scrollBar.__jsx-style-dynamic-selector{width:".concat(scrollProgress + '%', ";height:2px;background-color:rgb(71,71,51);-webkit-transition:0.4s width;transition:0.4s width;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_7__["device"].laptop, "{.scrollBar.__jsx-style-dynamic-selector{-webkit-transition:0.5s width;transition:0.5s width;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0hrQixBQUdzQixBQUlJLEFBVVMsQUFLWCxBQUlzQixBQVFQLFdBOUI5QixFQW1CQSxFQWZlLFNBVWlCLFdBU25CLFdBQ3NCLE1BUS9CLEVBakJKLHVCQVV3QixZQXBCTCxpQkFDRixlQUNHLFFBbUJwQixVQWxCbUMsaUNBQ2QsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0ZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU2VhcmNoQ29udGV4dFwiO1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0FuaW1lQ29udGV4dFwiO1xuaW1wb3J0IEFuaW1lIGZyb20gXCIuL0FuaW1lXCI7XG5pbXBvcnQge2RldmljZX0gZnJvbSBcIi4uL2RldmljZXNcIlxuXG5jb25zdCBDYXJvdXNlbCA9ICh7IHRvcEFuaW1lIH0pID0+IHtcbiAgY29uc3QgW2FuaW1lLCBzZXRBbmltZV0gPSB1c2VTdGF0ZSh0b3BBbmltZSk7XG4gIGNvbnN0IHsgZmlsdGVyIH0gPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpO1xuXG4gIGNvbnN0IGNhcm91c2VsU2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Njcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzc10gPSB1c2VTdGF0ZShcIjAlXCIpO1xuICAgIGxldCBnZXRTY3JvbGxQZXJjZW50ID0gKCkgPT4ge1xuICAgICAgIHJldHVybiAgKGNhcm91c2VsU2VsZWN0b3IuY3VycmVudC5zY3JvbGxMZWZ0IC9cbiAgICAgICAgICAgIChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsV2lkdGggLSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQub2Zmc2V0V2lkdGgpKSAqIDEwMFxuICAgIH1cblxuICBjb25zdCBbaXNEb3duLCBzZXRJc0Rvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhcnRYLCBzZXRTdGFydFhdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Njcm9sbExlZnQsIHNldFNjcm9sbExlZnRdID0gdXNlU3RhdGUoKTtcblxuICBsZXQgb25Nb3VzZURvd24gPSBlID0+IHtcbiAgICBzZXRJc0Rvd24odHJ1ZSk7XG4gICAgc2V0U3RhcnRYKGUucGFnZVggLSBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQub2Zmc2V0TGVmdCk7XG4gICAgc2V0U2Nyb2xsTGVmdChjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCk7XG4gICAgbGV0IHNjcm9sbFBlcmNlbnQgPSBnZXRTY3JvbGxQZXJjZW50KClcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbiAgfTtcblxuICBsZXQgb25Nb3VzZUxlYXZlID0gZSA9PiB7XG4gICAgc2V0SXNEb3duKGZhbHNlKTtcbiAgfTtcblxuICBsZXQgb25Nb3VzZVVwID0gZSA9PiB7XG4gICAgc2V0SXNEb3duKGZhbHNlKTtcbiAgICBsZXQgc2Nyb2xsUGVyY2VudCA9IGdldFNjcm9sbFBlcmNlbnQoKVxuICAgIHNldFNjcm9sbFByb2dyZXNzKHNjcm9sbFBlcmNlbnQpO1xuICB9O1xuXG4gIGxldCBvbk1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGlmICghaXNEb3duKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHggPSBlLnBhZ2VYO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gKHggLSBzdGFydFgpICogMztcbiAgICBjYXJvdXNlbFNlbGVjdG9yLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBkaXN0YW5jZTtcbiAgIFxuICAgIFxuICB9O1xuXG4gIGxldCBvblRvdWNoU3RhcnQgPSBlID0+IHtcbiAgICAgICAgbGV0IHNjcm9sbFBlcmNlbnQgPSBnZXRTY3JvbGxQZXJjZW50KClcbiAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Moc2Nyb2xsUGVyY2VudCk7XG4gIH1cblxuICBsZXQgb25Ub3VjaEVuZCA9IGUgPT4ge1xuICAgICAgICBsZXQgc2Nyb2xsUGVyY2VudCA9IGdldFNjcm9sbFBlcmNlbnQoKVxuICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhzY3JvbGxQZXJjZW50KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIGZpbHRlciA9PT0gXCJ0b3BcIlxuICAgICAgICA/IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL2J5cG9wdWxhcml0eVwiXG4gICAgICAgIDogXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEvdXBjb21pbmdcIjtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0QW5pbWUocmVzcG9uc2VKc29uLnRvcCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9LCBbZmlsdGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkgIT09IFwiXCIpIHtcbiAgICAgIGZ1bmN0aW9uIGZvcm1hdFF1ZXJ5UGFyYW1zKHBhcmFtcykge1xuICAgICAgICBjb25zdCBxdWVyeUl0ZW1zID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoXG4gICAgICAgICAga2V5ID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSl9YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcXVlcnlJdGVtcy5qb2luKFwiJlwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFzZXVybCA9IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3NlYXJjaC9hbmltZVwiO1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcTogcXVlcnksXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHR5cGU6IFwidHZcIixcbiAgICAgICAgbGltaXQ6IDEwXG4gICAgICB9O1xuXG4gICAgICBsZXQgdXJsID0gYmFzZXVybCArIFwiP1wiICsgZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zKTtcbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZUpzb24gPT4gc2V0QW5pbWUocmVzcG9uc2VKc29uLnJlc3VsdHMpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VMRUNUX0FOSU1FXCIsIHNlbGVjdGVkOiB7fSB9KTtcbiAgfSwgW2FuaW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsV3JhcHBlclwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbCAke2lzRG93biA9PT0gdHJ1ZSA/IFwiaXNEb3duXCIgOiBcIlwifWB9XG4gICAgICAgIHJlZj17Y2Fyb3VzZWxTZWxlY3Rvcn1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4gb25Nb3VzZURvd24oZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBvbk1vdXNlTGVhdmUoZSl9XG4gICAgICAgIG9uTW91c2VVcD17ZSA9PiBvbk1vdXNlVXAoZSl9XG4gICAgICAgIG9uTW91c2VNb3ZlPXtlID0+IG9uTW91c2VNb3ZlKGUpfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gb25Ub3VjaFN0YXJ0KGUpfVxuICAgICAgICBvblRvdWNoRW5kPXtlID0+IG9uVG91Y2hFbmQoZSl9XG5cbiAgICAgID5cbiAgICAgICAge2FuaW1lLm1hcCgoYW5pbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEFuaW1lIGtleT17aW5kZXh9IGFuaW1lPXthbmltZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsQmFyXCI+PC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJvdXNlbFdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBoYXMgdG8gYmUgc2Nyb2xsLCBub3QgYXV0byAqL1xuICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElFIDEwK1xuICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTsgLy8gRmlyZWZveFxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JvbGxCYXIge1xuICAgICAgICAgIHdpZHRoOiAke3Njcm9sbFByb2dyZXNzICsgJyUnfTtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDcxLCA1MSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC40cyB3aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sYXB0b3B9IHtcbiAgICAgICAgICAgIC5zY3JvbGxCYXIge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgd2lkdGg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/Carousel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.152a6a6d1c0939338def.hot-update.js.map