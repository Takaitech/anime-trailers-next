webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VideosOverlay.js":
/*!*************************************!*\
  !*** ./components/VideosOverlay.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AnimeContext */ "./contexts/AnimeContext.js");
/* harmony import */ var _contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/OverlayContext */ "./contexts/OverlayContext.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../devices */ "./devices.js");
var _jsxFileName = "/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var VideosOverlay = function VideosOverlay() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_AnimeContext__WEBPACK_IMPORTED_MODULE_2__["AnimeContext"]),
      selected = _useContext.selected;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_OverlayContext__WEBPACK_IMPORTED_MODULE_3__["OverlayContext"]),
      dispatch = _useContext2.dispatch,
      hidden = _useContext2.hidden;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      trailers = _useState[0],
      setTrailers = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (selected.mal_id !== undefined) {
      fetch("https://api.jikan.moe/v3/anime/" + selected.mal_id + "/videos").then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        return setTrailers(responseJson.promo);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [selected]);

  var hideOverlay = function hideOverlay() {
    dispatch({
      type: 'HIDE_SHOW_OVERLAY',
      "boolean": true
    });
  };

  return __jsx("div", {
    onClick: function onClick() {
      return hideOverlay();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, selected.title), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'rating',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, selected.score === 0 || selected.score === undefined ? 'No current ratings' : selected.score + '/10')), __jsx("img", {
    src: selected.image_url,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + 'trailerCarousel',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, trailers.map(function (trailer, index) {
    return __jsx("a", {
      href: trailer.video_url,
      key: index,
      "data-lity": true,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "trailerlink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]) + " " + "trailer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      src: trailer.image_url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1724056708", [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, trailer.title)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1724056708",
    dynamic: [hidden === true ? "none" : "flex", _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop],
    __self: this
  }, ".overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:rgb(0,0,0);background-color:rgb(0,0,0,.9);margin-left:auto;margin-right:auto;display:".concat(hidden === true ? "none" : "flex", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:scroll;}.info.__jsx-style-dynamic-selector{width:80%;text-align:center;margin:20px auto;border-bottom:2px solid rgb(71,71,71);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:22px;height:150px;}.info.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;}.image.__jsx-style-dynamic-selector{height:150px;}.title.__jsx-style-dynamic-selector{color:white;margin-bottom:10px;text-align:left;font-size:1.1em;}.rating.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:.7em;margin:0;font-weight:200;}.trailerCarousel.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:25px;margin-bottom:50px;}.trailerLink.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;width:100%;}a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;display:block;margin:10px 0;}a.__jsx-style-dynamic-selector:visited{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:active{-webkit-text-decoration:none;text-decoration:none;}.trailer.__jsx-style-dynamic-selector{text-align:center;width:80%;margin:0 auto 10px auto;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{box-sizing:border-box;width:100%;box-shadow:0 0 0 2px white;-webkit-transition:box-shadow 1s;transition:box-shadow 1s;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector:hover{width:100%;box-shadow:0 0 0 10px white;}.trailer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector:active{width:100%;box-shadow:0 0 0 15px black;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:white;text-align:left;font-size:.7em;-webkit-text-decoration:none;text-decoration:none;border:none;}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet, "{.trailerlink.__jsx-style-dynamic-selector{width:80%;}.title.__jsx-style-dynamic-selector{font-size:2.5em;}.rating.__jsx-style-dynamic-selector{font-size:1.5em;}a.__jsx-style-dynamic-selector:link{margin:30px auto;}.image.__jsx-style-dynamic-selector{height:275px;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:1.3em;}}@media ").concat(_devices__WEBPACK_IMPORTED_MODULE_5__["device"].laptop, "{.trailerCarousel.__jsx-style-dynamic-selector{margin:0 auto;width:80%;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.trailerlink.__jsx-style-dynamic-selector{width:50%;}a.__jsx-style-dynamic-selector:link{margin:60px 0;}.title.__jsx-style-dynamic-selector{font-size:2.7em;}.rating.__jsx-style-dynamic-selector{font-size:1.7em;}.image.__jsx-style-dynamic-selector{height:355px;}.trailer.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:1.3em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWthaXRlY2gvVGFrYWktVGVjaC9hbmltZS10cmFpbGVycy1uZXh0L2NvbXBvbmVudHMvVmlkZW9zT3ZlcmxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHdCLEFBSXVDLEFBZ0JSLEFBV0csQUFJQSxBQUlELEFBT0EsQUFTRCxBQVVVLEFBS0QsQUFNQSxBQUlBLEFBSUEsQUFLRixBQVFJLEFBTVgsQUFNQSxBQUtDLEFBVUUsQUFJTSxBQUtBLEFBS0MsQUFJSixBQUlHLEFBT0YsQUFNSixBQUdJLEFBSUUsQUFLQSxBQUtILEFBSUcsVUEvSkgsQUF3R2pCLEFBbUNBLENBeEdhLEFBZ0RnQixBQU1ELENBdEVULEFBT0gsQUFvRUEsQ0EvRXBCLEFBMkdJLEFBa0NBLENBdkJjLEFBU2QsRUFqQ0EsQUFLQSxBQVlBLEFBcUJBLEFBS0EsQUFRQSxDQTFDQSxDQXRJTSxBQXFGSSxJQVFDLEVBNUZILEFBcUprQixJQXJJVCxBQTBCRixBQTRDUSxBQXdCUixHQTNFQSxFQWxDUixBQTRGb0IsTUFPL0IsQUFLQSxDQXZHWSxHQXlDQyxBQW9FWSxFQTlGaUIsRUFtQnRCLENBakNKLEVBeURELEFBS0csQUFNbEIsQUFJQSxBQUlBLENBckRBLENBa0JvQixBQTRDcEIsUUFwRmdDLEFBMEZILENBakM3QixFQXhCQSxDQTZCa0IsSUFyQmxCLFVBc0JBLEtBakRpQixFQWlDRSxHQTlDZ0IsS0EyR25CLFlBQ2hCLGFBbEJBLENBekZxQixBQWdKakIsaUJBL0lrQixNQTZDQyxZQTVDa0IsR0FXUCxrQ0FWUiw0Q0E0Q0Msa0NBM0NSLEdBVUssYUFUeEIsT0FVaUIsYUFDakIsNkJBZ0N3QixvQkFDRCxtQkFDdkIiLCJmaWxlIjoiL1VzZXJzL3Rha2FpdGVjaC9UYWthaS1UZWNoL2FuaW1lLXRyYWlsZXJzLW5leHQvY29tcG9uZW50cy9WaWRlb3NPdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW5pbWVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQW5pbWVDb250ZXh0J1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9PdmVybGF5Q29udGV4dCdcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJ1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAnLi4vZGV2aWNlcydcbiBcbmNvbnN0IFZpZGVvc092ZXJsYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdXNlQ29udGV4dChBbmltZUNvbnRleHQpXG4gICAgY29uc3QgeyBkaXNwYXRjaCwgaGlkZGVuIH0gPSB1c2VDb250ZXh0KE92ZXJsYXlDb250ZXh0KVxuICAgIGNvbnN0IFsgdHJhaWxlcnMsIHNldFRyYWlsZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RlZC5tYWxfaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjMvYW5pbWUvXCIgKyBzZWxlY3RlZC5tYWxfaWQgKyBcIi92aWRlb3NcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSnNvbiA9PiBzZXRUcmFpbGVycyhyZXNwb25zZUpzb24ucHJvbW8pKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFtzZWxlY3RlZF0pXG5cblxuICAgIGNvbnN0IGhpZGVPdmVybGF5ID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTonSElERV9TSE9XX09WRVJMQVknLCBib29sZWFuOnRydWV9KVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGlkZU92ZXJsYXkoKX0gY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPntzZWxlY3RlZC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdyYXRpbmcnPntzZWxlY3RlZC5zY29yZSA9PT0gMCB8fCBzZWxlY3RlZC5zY29yZSA9PT0gdW5kZWZpbmVkID8gJ05vIGN1cnJlbnQgcmF0aW5ncycgOiBzZWxlY3RlZC5zY29yZSArICcvMTAnfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlJyBzcmM9e3NlbGVjdGVkLmltYWdlX3VybH0+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmFpbGVyQ2Fyb3VzZWwnPlxuICAgICAgICAgICAgICAgIHt0cmFpbGVycy5tYXAoKHRyYWlsZXIsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJhaWxlcmxpbmtcIiBocmVmPXt0cmFpbGVyLnZpZGVvX3VybH0ga2V5PXtpbmRleH0gZGF0YS1saXR5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFpbGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0cmFpbGVyLmltYWdlX3VybH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0cmFpbGVyLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwuOSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7aGlkZGVuID09PSB0cnVlPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDcxLDcxLDcxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyBkaXYge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNTAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAudHJhaWxlckNhcm91c2VsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyTGluayB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYTpsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYTphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhaWxlciB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0byAxMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhaWxlciBpbWcge1xuXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50cmFpbGVyIGltZzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4ICB3aGl0ZTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50cmFpbGVyIGltZzphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTVweCBibGFjaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhaWxlciBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsZXJsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhOmxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNzVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50cmFpbGVyIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsZXJDYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsZXJsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYTpsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNjBweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi43ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzU1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudHJhaWxlciBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3NPdmVybGF5Il19 */\n/*@ sourceURL=/Users/takaitech/Takai-Tech/anime-trailers-next/components/VideosOverlay.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (VideosOverlay);

/***/ })

})
//# sourceMappingURL=index.js.8181685f55e49148ba24.hot-update.js.map