webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavInner_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavInner.jsx */ "./components/NavInner.jsx");
/* harmony import */ var _customs_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customs/app.scss */ "./customs/app.scss");
/* harmony import */ var _customs_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_customs_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainBody_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainBody.jsx */ "./components/MainBody.jsx");
var _jsxFileName = "C:\\Users\\Tanbir\\Documents\\coding\\Chapel\\rcc\\app\\components\\App.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      opacity = _useState[0],
      setOpacity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      active = _useState2[0],
      setActive = _useState2[1];

  function triggerO() {
    var o = active ? "0.2" : "1";
    setOpacity(o);
    console.log(opacity);
  }

  function triggerA(condition) {
    setActive(condition);
    triggerO();
  }

  return __jsx("div", {
    className: "highestContainer",
    style: {
      opacity: opacity,
      transitionProperty: "opacity",
      transitionDuration: "0.8s"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_NavInner_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    triggerA: triggerA,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_MainBody_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.a1f5ee5923e065a6cc89.hot-update.js.map