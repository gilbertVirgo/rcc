webpackHotUpdate("static\\development\\pages\\index.js",{

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
      display: "none"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavInner, [{
    key: "updateDisplay",
    value: function updateDisplay() {
      var D = this.state.light === true ? "block" : "none";
      this.setState({
        display: D
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(_NavOuter__WEBPACK_IMPORTED_MODULE_6__["default"], {
        display: this.state.display,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("nav", {
        className: "navContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("img", {
        src: "/assets/logo.png",
        alt: "this is a logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx("button", {
        className: "Navbtn",
        onClick: function onClick() {
          _this2.setState({
            light: !_this2.state.light
          });

          _this2.updateDisplay();

          console.log(_this2.state.display, _this2.state.light);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("img", {
        src: "/assets/navIcon.png",
        alt: "this is the nav icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })))), __jsx("div", {
        className: "navTContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("div", {
        className: "navText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontSize: "20px",
          marginBottom: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Ridley Community Church"), __jsx("p", {
        style: {
          fontSize: "10px",
          marginTop: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
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
//# sourceMappingURL=index.js.f76370c9359144a387ef.hot-update.js.map