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

/***/ "(app-pages-browser)/./src/components/BackButton.js":
/*!**************************************!*\
  !*** ./src/components/BackButton.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackButton: () => (/* binding */ BackButton)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backButton_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backButton.png */ \"(app-pages-browser)/./src/backButton.png\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction BackButton(param) {\n    var style = param.style, hoverStyle = param.hoverStyle, onClick = param.onClick;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), hover = _useState[0], setHover = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), clicked = _useState1[0], setClicked = _useState1[1];\n    var finalStyle = style;\n    if (hover) {\n        finalStyle = hoverStyle;\n    }\n    if (clicked) {\n        finalStyle = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, hoverStyle), {\n            opacity: 0.5\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: finalStyle,\n        onMouseEnter: function() {\n            return setHover(true);\n        },\n        onMouseLeave: function() {\n            setHover(false);\n            setClicked(false);\n        },\n        onMouseDown: function() {\n            return setClicked(true);\n        },\n        onMouseUp: function() {\n            return setClicked(false);\n        },\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: _backButton_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n            alt: \"Back\"\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/BackButton.js\",\n            lineNumber: 28,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/BackButton.js\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, this);\n}\n_s(BackButton, \"hB8/5KhsfOKv5fVphQj12FpALpQ=\");\n_c = BackButton;\nvar _c;\n$RefreshReg$(_c, \"BackButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhY2tCdXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNZO0FBRXBDLFNBQVNFLFdBQVcsS0FBNEI7UUFBM0JDLFFBQUQsTUFBQ0EsT0FBT0MsYUFBUixNQUFRQSxZQUFZQyxVQUFwQixNQUFvQkE7O0lBQzlDLElBQTBCTCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBNUJNLFFBQW1CTixjQUFaTyxXQUFZUDtJQUMxQixJQUE4QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQWhDUSxVQUF1QlIsZUFBZFMsYUFBY1Q7SUFFOUIsSUFBSVUsYUFBYVA7SUFDakIsSUFBSUcsT0FBTztRQUNWSSxhQUFhTjtJQUNkO0lBQ0EsSUFBSUksU0FBUztRQUNaRSxhQUFhLHNJQUFJTjtZQUFZTyxTQUFTOztJQUN2QztJQUVBLHFCQUNDLDhEQUFDQztRQUNBVCxPQUFPTztRQUNQRyxjQUFjO21CQUFNTixTQUFTOztRQUM3Qk8sY0FBYztZQUNiUCxTQUFTO1lBQ1RFLFdBQVc7UUFDWjtRQUNBTSxhQUFhO21CQUFNTixXQUFXOztRQUM5Qk8sV0FBVzttQkFBTVAsV0FBVzs7UUFDNUJKLFNBQVNBO2tCQUVULDRFQUFDWTtZQUFJQyxLQUFLakIsdURBQVVBLENBQUNpQixHQUFHO1lBQUVDLEtBQUk7Ozs7Ozs7Ozs7O0FBR2pDO0dBM0JnQmpCO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvZGFubnkvRG9jdW1lbnRzL3dlYi1kZXNpZ24vbWF0aC1zb2x2ZXItYWkvc3JjL2NvbXBvbmVudHMvQmFja0J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBiYWNrQnV0dG9uIGZyb20gXCIuLi9iYWNrQnV0dG9uLnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQmFja0J1dHRvbih7c3R5bGUsIGhvdmVyU3R5bGUsIG9uQ2xpY2t9KSB7XG5cdGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0bGV0IGZpbmFsU3R5bGUgPSBzdHlsZTtcblx0aWYgKGhvdmVyKSB7XG5cdFx0ZmluYWxTdHlsZSA9IGhvdmVyU3R5bGU7XG5cdH1cblx0aWYgKGNsaWNrZWQpIHtcblx0XHRmaW5hbFN0eWxlID0gey4uLmhvdmVyU3R5bGUsIG9wYWNpdHk6IDAuNX07XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdHN0eWxlPXtmaW5hbFN0eWxlfVxuXHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cblx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuXHRcdFx0XHRzZXRIb3ZlcihmYWxzZSk7XG5cdFx0XHRcdHNldENsaWNrZWQoZmFsc2UpO1xuXHRcdFx0fX1cblx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBzZXRDbGlja2VkKHRydWUpfVxuXHRcdFx0b25Nb3VzZVVwPXsoKSA9PiBzZXRDbGlja2VkKGZhbHNlKX1cblx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0PlxuXHRcdFx0PGltZyBzcmM9e2JhY2tCdXR0b24uc3JjfSBhbHQ9XCJCYWNrXCIgLz5cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImJhY2tCdXR0b24iLCJCYWNrQnV0dG9uIiwic3R5bGUiLCJob3ZlclN0eWxlIiwib25DbGljayIsImhvdmVyIiwic2V0SG92ZXIiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImZpbmFsU3R5bGUiLCJvcGFjaXR5IiwiYnV0dG9uIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJpbWciLCJzcmMiLCJhbHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BackButton.js\n"));

/***/ })

});