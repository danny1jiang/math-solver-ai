"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/CustomButton.js":
/*!****************************************!*\
  !*** ./src/components/CustomButton.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomButtonComponent: () => (/* binding */ CustomButtonComponent)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction CustomButtonComponent(param) {\n    var style = param.style, hoverStyle = param.hoverStyle, onClick = param.onClick, children = param.children;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), hover = _useState[0], setHover = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), clicked = _useState1[0], setClicked = _useState1[1];\n    var style = {};\n    if (hover) {\n        style = hoverStyle;\n    }\n    if (clicked) {\n        style = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, hoverStyle), {\n            opacity: 0.5\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: style,\n        onMouseEnter: function() {\n            return setHover(true);\n        },\n        onMouseLeave: function() {\n            return setHover(false);\n        },\n        onMouseDown: function() {\n            return setClicked(true);\n        },\n        onMouseUp: function() {\n            return setClicked(false);\n        },\n        onClick: onClick,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/CustomButton.js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, this);\n}\n_s(CustomButtonComponent, \"hB8/5KhsfOKv5fVphQj12FpALpQ=\");\n_c = CustomButtonComponent;\nvar _c;\n$RefreshReg$(_c, \"CustomButtonComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFeEIsU0FBU0Msc0JBQXNCLEtBQXNDO1FBQXJDQyxRQUFELE1BQUNBLE9BQU9DLGFBQVIsTUFBUUEsWUFBWUMsVUFBcEIsTUFBb0JBLFNBQVNDLFdBQTdCLE1BQTZCQTs7SUFDbEUsSUFBMEJMLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUE1Qk0sUUFBbUJOLGNBQVpPLFdBQVlQO0lBQzFCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBaENRLFVBQXVCUixlQUFkUyxhQUFjVDtJQUU5QixJQUFJRSxRQUFRLENBQUM7SUFDYixJQUFJSSxPQUFPO1FBQ1ZKLFFBQVFDO0lBQ1Q7SUFDQSxJQUFJSyxTQUFTO1FBQ1pOLFFBQVEsc0lBQUlDO1lBQVlPLFNBQVM7O0lBQ2xDO0lBRUEscUJBQ0MsOERBQUNDO1FBQ0FULE9BQU9BO1FBQ1BVLGNBQWM7bUJBQU1MLFNBQVM7O1FBQzdCTSxjQUFjO21CQUFNTixTQUFTOztRQUM3Qk8sYUFBYTttQkFBTUwsV0FBVzs7UUFDOUJNLFdBQVc7bUJBQU1OLFdBQVc7O1FBQzVCTCxTQUFTQTtrQkFFUkM7Ozs7OztBQUdKO0dBeEJnQko7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5ueS9Eb2N1bWVudHMvd2ViLWRlc2lnbi9tYXRoLXNvbHZlci1haS9zcmMvY29tcG9uZW50cy9DdXN0b21CdXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21CdXR0b25Db21wb25lbnQoe3N0eWxlLCBob3ZlclN0eWxlLCBvbkNsaWNrLCBjaGlsZHJlbn0pIHtcblx0Y29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRsZXQgc3R5bGUgPSB7fTtcblx0aWYgKGhvdmVyKSB7XG5cdFx0c3R5bGUgPSBob3ZlclN0eWxlO1xuXHR9XG5cdGlmIChjbGlja2VkKSB7XG5cdFx0c3R5bGUgPSB7Li4uaG92ZXJTdHlsZSwgb3BhY2l0eTogMC41fTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0c3R5bGU9e3N0eWxlfVxuXHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cblx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfVxuXHRcdFx0b25Nb3VzZURvd249eygpID0+IHNldENsaWNrZWQodHJ1ZSl9XG5cdFx0XHRvbk1vdXNlVXA9eygpID0+IHNldENsaWNrZWQoZmFsc2UpfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDdXN0b21CdXR0b25Db21wb25lbnQiLCJzdHlsZSIsImhvdmVyU3R5bGUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJob3ZlciIsInNldEhvdmVyIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJvcGFjaXR5IiwiYnV0dG9uIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CustomButton.js\n"));

/***/ })

});