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
  return __jsx("div", {
    className: "highestContainer",
    style: {
      opacity: opacity,
      transitionProperty: "opacity",
      transitionDuration: "0.8s"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_NavInner_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_MainBody_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/NavInner.jsx":
/*!*********************************!*\
  !*** ./components/NavInner.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavInner; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavOuter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavOuter */ "./components/NavOuter.jsx");





var _jsxFileName = "C:\\Users\\Tanbir\\Documents\\coding\\Chapel\\rcc\\app\\components\\NavInner.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var NavInner =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavInner, _Component);

  function NavInner(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavInner);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavInner).call(this, props));
    _this.state = {
      light: true,
      display: "none",
      transform: "translate(-300px,0px)",
      opacity: "1"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavInner, [{
    key: "updateDisplay",
    value: function updateDisplay() {
      console.log(this.props);
      var D = this.state.light ? "block" : "none";
      var T = this.state.light ? "translate(0px,0px)" : "translate(-300px,0px)";
      var O = this.state.light ? "1" : "0.5";
      this.setState({
        display: D
      });
      this.setState({
        transform: T
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "navInner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("div", {
        className: "opacityContainer",
        style: {
          opacity: this.state.opacity
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx(_NavOuter__WEBPACK_IMPORTED_MODULE_6__["default"], {
        transform: this.state.transform,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("nav", {
        className: "navContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("img", {
        src: "/assets/logo.png",
        alt: "this is a logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("button", {
        className: "navBtn",
        onClick: function onClick() {
          _this2.setState({
            light: !_this2.state.light
          });

          _this2.updateDisplay();

          console.log(_this2.state.display, _this2.state.light);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("img", {
        src: "/assets/navIcon.png",
        alt: "this is the nav icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })))), __jsx("div", {
        className: "navTContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("div", {
        className: "navText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontSize: "20px",
          marginBottom: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Ridley Community Church"), __jsx("p", {
        style: {
          fontSize: "10px",
          marginTop: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "An Evangelical Church in Forest Gate"))));
    }
  }]);

  return NavInner;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

/***/ })

})
//# sourceMappingURL=index.js.abec6f9a50de4d73bc2d.hot-update.js.map