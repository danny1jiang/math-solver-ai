"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/better-react-mathjax";
exports.ids = ["vendor-chunks/better-react-mathjax"];
exports.modules = {

/***/ "(ssr)/./node_modules/better-react-mathjax/esm/MathJax/MathJax.js":
/*!******************************************************************!*\
  !*** ./node_modules/better-react-mathjax/esm/MathJax/MathJax.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MathJaxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MathJaxContext */ \"(ssr)/./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js\");\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__rest=undefined&&undefined.__rest||function(t,e){var n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&\"function\"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};var typesettingFailed=function(t){return\"Typesetting failed: \".concat(void 0!==t.message?t.message:JSON.stringify(t))},MathJax=function(t){function r(){var t;\"every\"===h&&m&&\"post\"===v&&null!==f.current&&(f.current.style.visibility=null!=(t=null==(t=p.style)?void 0:t.visibility)?t:\"visible\"),_.current||(\"first\"===h&&null!==f.current&&(f.current.style.visibility=\"visible\"),n&&n(),_.current=!0),o&&o(),b.current=!1}var e=t.inline,i=void 0!==e&&e,e=t.hideUntilTypeset,n=t.onInitTypeset,o=t.onTypeset,s=t.text,u=t.dynamic,a=t.typesettingOptions,l=t.renderMode,c=t.children,p=__rest(t,[\"inline\",\"hideUntilTypeset\",\"onInitTypeset\",\"onTypeset\",\"text\",\"dynamic\",\"typesettingOptions\",\"renderMode\",\"children\"]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(\"\"),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MathJaxContext__WEBPACK_IMPORTED_MODULE_1__.MathJaxBaseContext),h=null!=e?e:null==d?void 0:d.hideUntilTypeset,v=null!=l?l:null==d?void 0:d.renderMode,g=null!=a?a:null==d?void 0:d.typesettingOptions,m=!1!==u&&(u||\"production\"!==\"development\"),_=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return!b.current&&null!==f.current&&m&&\"every\"===h&&\"post\"===v&&(f.current.style.visibility=\"hidden\"),(\"undefined\"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if((m||!_.current)&&null!==f.current){if(!d)throw Error(\"MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?\");if(\"pre\"===v){if(!(\"string\"==typeof(t=s)&&0<t.length))throw Error(\"Render mode 'pre' requires text prop to be set and non-empty, which was currently \\\"\".concat(s,'\"'));if(!a||!a.fn)throw Error(\"Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext\");if(2===d.version)throw Error(\"Render mode 'pre' only available with MathJax 3, and version 2 is currently in use\")}\"post\"!==v&&s===y.current||b.current||(b.current=!0,3===d.version?d.promise.then(function(e){var n;\"pre\"===v?(n=function(t){y.current=s,e.startup.document.clear(),e.startup.document.updateDocument(),null!==f.current&&(f.current.innerHTML=t.outerHTML),r()},a.fn.endsWith(\"Promise\")?e.startup.promise.then(function(){return e[g.fn](s,__assign(__assign({},(null==g?void 0:g.options)||{}),{display:!i}))}).then(n).catch(function(t){throw r(),Error(typesettingFailed(t))}):e.startup.promise.then(function(){var t=e[g.fn](s,__assign(__assign({},(null==g?void 0:g.options)||{}),{display:!i}));n(t)}).catch(function(t){throw r(),Error(typesettingFailed(t))})):e.startup.promise.then(function(){return e.typesetClear([f.current]),e.typesetPromise([f.current])}).then(r).catch(function(t){throw r(),Error(typesettingFailed(t))})}).catch(function(t){throw r(),Error(typesettingFailed(t))}):d.promise.then(function(t){t.Hub.Queue([\"Typeset\",t.Hub,f.current]),t.Hub.Queue(r)}).catch(function(t){throw r(),Error(typesettingFailed(t))}))}var t}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\",__assign({},p,{style:__assign(__assign({display:i?\"inline\":\"block\"},p.style),{visibility:h?\"hidden\":null==(t=p.style)?void 0:t.visibility}),ref:f}),c)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathJax);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmV0dGVyLXJlYWN0LW1hdGhqYXgvZXNtL01hdGhKYXgvTWF0aEpheC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsYUFBYSxTQUFJLEVBQUUsU0FBSSxzQkFBc0IsMkNBQTJDLGlDQUFpQyxJQUFJLHVGQUF1RixTQUFTLHdCQUF3QixRQUFRLFNBQUksRUFBRSxTQUFJLHVCQUF1QixTQUFTLGtGQUFrRiwwR0FBMEcsV0FBVyw2RkFBNkYsVUFBa0ksa0NBQWtDLG9GQUFvRixxQkFBcUIsYUFBYSxNQUFNLGtRQUFrUSxrU0FBa1MsNkNBQU0sT0FBTyw2Q0FBTSxTQUFTLGlEQUFVLENBQUMsK0RBQWtCLHFLQUFxSyxhQUFvQixJQUFJLDZDQUFNLE9BQU8sNkNBQU0sS0FBSyxrSUFBa0ksa0RBQWUsQ0FBQyw0Q0FBUyxhQUFhLHNDQUFzQyw0R0FBNEcsY0FBYywwSkFBMEosMEpBQTBKLG1IQUFtSCw2RkFBNkYsTUFBTSx5QkFBeUIsbUlBQW1JLDREQUE0RCxxQ0FBcUMsK0JBQStCLEdBQUcsV0FBVyxHQUFHLDRCQUE0QixzQ0FBc0Msb0NBQW9DLG9DQUFvQywrQkFBK0IsR0FBRyxXQUFXLEdBQUcsS0FBSyxvQkFBb0Isc0NBQXNDLHFDQUFxQyxpRUFBaUUsNEJBQTRCLHNDQUFzQyxFQUFFLG9CQUFvQixzQ0FBc0MsNkJBQTZCLHdEQUF3RCxvQkFBb0Isc0NBQXNDLEdBQUcsTUFBTSxFQUFFLDBEQUFtQixtQkFBbUIsSUFBSSx5QkFBeUIsMkJBQTJCLFdBQVcsNERBQTRELFFBQVEsTUFBTSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyIvVXNlcnMvZGFubnkvRG9jdW1lbnRzL3dlYi1kZXNpZ24vbWF0aC1zb2x2ZXItYWkvbm9kZV9tb2R1bGVzL2JldHRlci1yZWFjdC1tYXRoamF4L2VzbS9NYXRoSmF4L01hdGhKYXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBpIGluIGU9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGkpJiYodFtpXT1lW2ldKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sX19yZXN0PXRoaXMmJnRoaXMuX19yZXN0fHxmdW5jdGlvbih0LGUpe3ZhciBuPXt9O2ZvcihpIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSkmJmUuaW5kZXhPZihpKTwwJiYobltpXT10W2ldKTtpZihudWxsIT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKWZvcih2YXIgcj0wLGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtyPGkubGVuZ3RoO3IrKyllLmluZGV4T2YoaVtyXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHQsaVtyXSkmJihuW2lbcl1dPXRbaVtyXV0pO3JldHVybiBufTtpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHQsdXNlRWZmZWN0LHVzZUxheW91dEVmZmVjdCx1c2VSZWZ9ZnJvbVwicmVhY3RcIjtpbXBvcnR7TWF0aEpheEJhc2VDb250ZXh0fWZyb21cIi4uL01hdGhKYXhDb250ZXh0XCI7dmFyIHR5cGVzZXR0aW5nRmFpbGVkPWZ1bmN0aW9uKHQpe3JldHVyblwiVHlwZXNldHRpbmcgZmFpbGVkOiBcIi5jb25jYXQodm9pZCAwIT09dC5tZXNzYWdlP3QubWVzc2FnZTpKU09OLnN0cmluZ2lmeSh0KSl9LE1hdGhKYXg9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcigpe3ZhciB0O1wiZXZlcnlcIj09PWgmJm0mJlwicG9zdFwiPT09diYmbnVsbCE9PWYuY3VycmVudCYmKGYuY3VycmVudC5zdHlsZS52aXNpYmlsaXR5PW51bGwhPSh0PW51bGw9PSh0PXAuc3R5bGUpP3ZvaWQgMDp0LnZpc2liaWxpdHkpP3Q6XCJ2aXNpYmxlXCIpLF8uY3VycmVudHx8KFwiZmlyc3RcIj09PWgmJm51bGwhPT1mLmN1cnJlbnQmJihmLmN1cnJlbnQuc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIiksbiYmbigpLF8uY3VycmVudD0hMCksbyYmbygpLGIuY3VycmVudD0hMX12YXIgZT10LmlubGluZSxpPXZvaWQgMCE9PWUmJmUsZT10LmhpZGVVbnRpbFR5cGVzZXQsbj10Lm9uSW5pdFR5cGVzZXQsbz10Lm9uVHlwZXNldCxzPXQudGV4dCx1PXQuZHluYW1pYyxhPXQudHlwZXNldHRpbmdPcHRpb25zLGw9dC5yZW5kZXJNb2RlLGM9dC5jaGlsZHJlbixwPV9fcmVzdCh0LFtcImlubGluZVwiLFwiaGlkZVVudGlsVHlwZXNldFwiLFwib25Jbml0VHlwZXNldFwiLFwib25UeXBlc2V0XCIsXCJ0ZXh0XCIsXCJkeW5hbWljXCIsXCJ0eXBlc2V0dGluZ09wdGlvbnNcIixcInJlbmRlck1vZGVcIixcImNoaWxkcmVuXCJdKSx5PXVzZVJlZihcIlwiKSxmPXVzZVJlZihudWxsKSxkPXVzZUNvbnRleHQoTWF0aEpheEJhc2VDb250ZXh0KSxoPW51bGwhPWU/ZTpudWxsPT1kP3ZvaWQgMDpkLmhpZGVVbnRpbFR5cGVzZXQsdj1udWxsIT1sP2w6bnVsbD09ZD92b2lkIDA6ZC5yZW5kZXJNb2RlLGc9bnVsbCE9YT9hOm51bGw9PWQ/dm9pZCAwOmQudHlwZXNldHRpbmdPcHRpb25zLG09ITEhPT11JiYodXx8XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViksXz11c2VSZWYoITEpLGI9dXNlUmVmKCExKTtyZXR1cm4hYi5jdXJyZW50JiZudWxsIT09Zi5jdXJyZW50JiZtJiZcImV2ZXJ5XCI9PT1oJiZcInBvc3RcIj09PXYmJihmLmN1cnJlbnQuc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwiKSwoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz91c2VMYXlvdXRFZmZlY3Q6dXNlRWZmZWN0KShmdW5jdGlvbigpe2lmKChtfHwhXy5jdXJyZW50KSYmbnVsbCE9PWYuY3VycmVudCl7aWYoIWQpdGhyb3cgRXJyb3IoXCJNYXRoSmF4IHdhcyBub3QgbG9hZGVkLCBkaWQgeW91IHVzZSB0aGUgTWF0aEpheCBjb21wb25lbnQgb3V0c2lkZSBvZiBhIE1hdGhKYXhDb250ZXh0P1wiKTtpZihcInByZVwiPT09dil7aWYoIShcInN0cmluZ1wiPT10eXBlb2YodD1zKSYmMDx0Lmxlbmd0aCkpdGhyb3cgRXJyb3IoXCJSZW5kZXIgbW9kZSAncHJlJyByZXF1aXJlcyB0ZXh0IHByb3AgdG8gYmUgc2V0IGFuZCBub24tZW1wdHksIHdoaWNoIHdhcyBjdXJyZW50bHkgXFxcIlwiLmNvbmNhdChzLCdcIicpKTtpZighYXx8IWEuZm4pdGhyb3cgRXJyb3IoXCJSZW5kZXIgbW9kZSAncHJlJyByZXF1aXJlcyAndHlwZXNldHRpbmdPcHRpb25zJyBwcm9wIHdpdGggJ2ZuJyBwcm9wZXJ0eSB0byBiZSBzZXQgb24gTWF0aEpheCBlbGVtZW50IG9yIGluIHRoZSBNYXRoSmF4Q29udGV4dFwiKTtpZigyPT09ZC52ZXJzaW9uKXRocm93IEVycm9yKFwiUmVuZGVyIG1vZGUgJ3ByZScgb25seSBhdmFpbGFibGUgd2l0aCBNYXRoSmF4IDMsIGFuZCB2ZXJzaW9uIDIgaXMgY3VycmVudGx5IGluIHVzZVwiKX1cInBvc3RcIiE9PXYmJnM9PT15LmN1cnJlbnR8fGIuY3VycmVudHx8KGIuY3VycmVudD0hMCwzPT09ZC52ZXJzaW9uP2QucHJvbWlzZS50aGVuKGZ1bmN0aW9uKGUpe3ZhciBuO1wicHJlXCI9PT12PyhuPWZ1bmN0aW9uKHQpe3kuY3VycmVudD1zLGUuc3RhcnR1cC5kb2N1bWVudC5jbGVhcigpLGUuc3RhcnR1cC5kb2N1bWVudC51cGRhdGVEb2N1bWVudCgpLG51bGwhPT1mLmN1cnJlbnQmJihmLmN1cnJlbnQuaW5uZXJIVE1MPXQub3V0ZXJIVE1MKSxyKCl9LGEuZm4uZW5kc1dpdGgoXCJQcm9taXNlXCIpP2Uuc3RhcnR1cC5wcm9taXNlLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZVtnLmZuXShzLF9fYXNzaWduKF9fYXNzaWduKHt9LChudWxsPT1nP3ZvaWQgMDpnLm9wdGlvbnMpfHx7fSkse2Rpc3BsYXk6IWl9KSl9KS50aGVuKG4pLmNhdGNoKGZ1bmN0aW9uKHQpe3Rocm93IHIoKSxFcnJvcih0eXBlc2V0dGluZ0ZhaWxlZCh0KSl9KTplLnN0YXJ0dXAucHJvbWlzZS50aGVuKGZ1bmN0aW9uKCl7dmFyIHQ9ZVtnLmZuXShzLF9fYXNzaWduKF9fYXNzaWduKHt9LChudWxsPT1nP3ZvaWQgMDpnLm9wdGlvbnMpfHx7fSkse2Rpc3BsYXk6IWl9KSk7bih0KX0pLmNhdGNoKGZ1bmN0aW9uKHQpe3Rocm93IHIoKSxFcnJvcih0eXBlc2V0dGluZ0ZhaWxlZCh0KSl9KSk6ZS5zdGFydHVwLnByb21pc2UudGhlbihmdW5jdGlvbigpe3JldHVybiBlLnR5cGVzZXRDbGVhcihbZi5jdXJyZW50XSksZS50eXBlc2V0UHJvbWlzZShbZi5jdXJyZW50XSl9KS50aGVuKHIpLmNhdGNoKGZ1bmN0aW9uKHQpe3Rocm93IHIoKSxFcnJvcih0eXBlc2V0dGluZ0ZhaWxlZCh0KSl9KX0pLmNhdGNoKGZ1bmN0aW9uKHQpe3Rocm93IHIoKSxFcnJvcih0eXBlc2V0dGluZ0ZhaWxlZCh0KSl9KTpkLnByb21pc2UudGhlbihmdW5jdGlvbih0KXt0Lkh1Yi5RdWV1ZShbXCJUeXBlc2V0XCIsdC5IdWIsZi5jdXJyZW50XSksdC5IdWIuUXVldWUocil9KS5jYXRjaChmdW5jdGlvbih0KXt0aHJvdyByKCksRXJyb3IodHlwZXNldHRpbmdGYWlsZWQodCkpfSkpfXZhciB0fSksUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIixfX2Fzc2lnbih7fSxwLHtzdHlsZTpfX2Fzc2lnbihfX2Fzc2lnbih7ZGlzcGxheTppP1wiaW5saW5lXCI6XCJibG9ja1wifSxwLnN0eWxlKSx7dmlzaWJpbGl0eTpoP1wiaGlkZGVuXCI6bnVsbD09KHQ9cC5zdHlsZSk/dm9pZCAwOnQudmlzaWJpbGl0eX0pLHJlZjpmfSksYyl9O2V4cG9ydCBkZWZhdWx0IE1hdGhKYXg7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/better-react-mathjax/esm/MathJax/MathJax.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js":
/*!********************************************************************************!*\
  !*** ./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MathJaxBaseContext: () => (/* binding */ MathJaxBaseContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var v2Promise,v3Promise,MathJaxBaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),DEFAULT_V2_SRC=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML\",DEFAULT_V3_SRC=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js\",MathJaxContext=function(e){var n=e.config,t=e.version,t=void 0===t?3:t,o=e.src,o=void 0===o?2===t?DEFAULT_V2_SRC:DEFAULT_V3_SRC:o,a=e.onStartup,r=e.onLoad,i=e.onError,s=e.typesettingOptions,h=e.renderMode,h=void 0===h?\"post\":h,d=e.hideUntilTypeset,e=e.children,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MathJaxBaseContext);if(void 0!==(null==c?void 0:c.version)&&(null==c?void 0:c.version)!==t)throw Error(\"Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.\");if(2===t&&void 0!==v3Promise||3===t&&void 0!==v2Promise)throw Error(\"Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.\");var u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(c),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((null==c?void 0:c.version)||null);if(null===c.current)c.current=t;else if(c.current!==t)throw Error(\"Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.\");var v=o||(2===t?DEFAULT_V2_SRC:DEFAULT_V3_SRC);function f(t,o){n&&(window.MathJax=n);var e=document.createElement(\"script\");e.type=\"text/javascript\",e.src=v,e.async=!0,e.addEventListener(\"load\",function(){var e=window.MathJax;a&&a(e),t(e),r&&r()}),e.addEventListener(\"error\",function(e){return o(e)}),document.getElementsByTagName(\"head\")[0].appendChild(e)}return void 0===u.current&&(c={typesettingOptions:s,renderMode:h,hideUntilTypeset:d},2===t?void 0===v2Promise&&(\"undefined\"!=typeof window?(v2Promise=new Promise(f)).catch(function(e){if(!i)throw Error(\"Failed to download MathJax version 2 from '\".concat(v,\"' due to: \").concat(JSON.stringify(e)));i(e)}):(v2Promise=Promise.reject()).catch(function(e){})):void 0===v3Promise&&(\"undefined\"!=typeof window?(v3Promise=new Promise(f)).catch(function(e){if(!i)throw Error(\"Failed to download MathJax version 3 from '\".concat(v,\"' due to: \").concat(e));i(e)}):(v3Promise=Promise.reject()).catch(function(e){})),u.current=__assign(__assign({},c),2===t?{version:2,promise:v2Promise}:{version:3,promise:v3Promise})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MathJaxBaseContext.Provider,{value:u.current},e)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathJaxContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmV0dGVyLXJlYWN0LW1hdGhqYXgvZXNtL01hdGhKYXhDb250ZXh0L01hdGhKYXhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxhQUFhLFNBQUksRUFBRSxTQUFJLHNCQUFzQiwyQ0FBMkMsaUNBQWlDLElBQUksdUZBQXVGLFNBQVMseUJBQW1GLDJDQUEyQyxvREFBYSx3T0FBd08sNE9BQTRPLGlEQUFVLHFCQUFxQix5VUFBeVUscUxBQXFMLHVRQUF1USxNQUFNLDZDQUFNLE1BQU0sNkNBQU0sbUNBQW1DLGdDQUFnQywwS0FBMEssK0NBQStDLGdCQUFnQixzQkFBc0IsdUNBQXVDLGlGQUFpRixxQkFBcUIsb0JBQW9CLHlDQUF5QyxZQUFZLDBEQUEwRCwrQkFBK0IscURBQXFELG9HQUFvRyxrSEFBa0gsS0FBSyxrREFBa0QsZ0dBQWdHLGtHQUFrRyxLQUFLLGtEQUFrRCxpQ0FBaUMsV0FBVyw0QkFBNEIsRUFBRSw0QkFBNEIsR0FBRywwREFBbUIsOEJBQThCLGdCQUFnQixLQUFLLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5ueS9Eb2N1bWVudHMvd2ViLWRlc2lnbi9tYXRoLXNvbHZlci1haS9ub2RlX21vZHVsZXMvYmV0dGVyLXJlYWN0LW1hdGhqYXgvZXNtL01hdGhKYXhDb250ZXh0L01hdGhKYXhDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbj10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihfX2Fzc2lnbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQsbz0xLG49YXJndW1lbnRzLmxlbmd0aDtvPG47bysrKWZvcih2YXIgYSBpbiB0PWFyZ3VtZW50c1tvXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxhKSYmKGVbYV09dFthXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2ltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VDb250ZXh0LHVzZVJlZn1mcm9tXCJyZWFjdFwiO3ZhciB2MlByb21pc2UsdjNQcm9taXNlLE1hdGhKYXhCYXNlQ29udGV4dD1jcmVhdGVDb250ZXh0KHZvaWQgMCksREVGQVVMVF9WMl9TUkM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRoamF4LzIuNy45L01hdGhKYXguanM/Y29uZmlnPVRlWC1NTUwtQU1fQ0hUTUxcIixERUZBVUxUX1YzX1NSQz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGhqYXgvMy4yLjIvZXM1L3RleC1tbWwtY2h0bWwuanNcIixNYXRoSmF4Q29udGV4dD1mdW5jdGlvbihlKXt2YXIgbj1lLmNvbmZpZyx0PWUudmVyc2lvbix0PXZvaWQgMD09PXQ/Mzp0LG89ZS5zcmMsbz12b2lkIDA9PT1vPzI9PT10P0RFRkFVTFRfVjJfU1JDOkRFRkFVTFRfVjNfU1JDOm8sYT1lLm9uU3RhcnR1cCxyPWUub25Mb2FkLGk9ZS5vbkVycm9yLHM9ZS50eXBlc2V0dGluZ09wdGlvbnMsaD1lLnJlbmRlck1vZGUsaD12b2lkIDA9PT1oP1wicG9zdFwiOmgsZD1lLmhpZGVVbnRpbFR5cGVzZXQsZT1lLmNoaWxkcmVuLGM9dXNlQ29udGV4dChNYXRoSmF4QmFzZUNvbnRleHQpO2lmKHZvaWQgMCE9PShudWxsPT1jP3ZvaWQgMDpjLnZlcnNpb24pJiYobnVsbD09Yz92b2lkIDA6Yy52ZXJzaW9uKSE9PXQpdGhyb3cgRXJyb3IoXCJDYW5ub3QgbmVzdCBNYXRoSmF4Q29udGV4dHMgd2l0aCBkaWZmZXJlbnQgdmVyc2lvbnMuIE1hdGhKYXhDb250ZXh0cyBzaG91bGQgbm90IGJlIG5lc3RlZCBhdCBhbGwgYnV0IGlmIHRoZXkgYXJlLCB0aGV5IGNhbm5vdCBoYXZlIGRpZmZlcmVudCB2ZXJzaW9ucy4gU3RpY2sgd2l0aCBvbmUgdmVyc2lvbiBvZiBNYXRoSmF4IGluIHlvdXIgYXBwIGFuZCBhdm9pZCB1c2luZyBtb3JlIHRoYW4gb25lIE1hdGhKYXhDb250ZXh0LlwiKTtpZigyPT09dCYmdm9pZCAwIT09djNQcm9taXNlfHwzPT09dCYmdm9pZCAwIT09djJQcm9taXNlKXRocm93IEVycm9yKFwiQ2Fubm90IHVzZSBNYXRoSmF4IHZlcnNpb25zIDIgYW5kIDMgc2ltdWx0YW5lb3VzbHkgaW4gdGhlIHNhbWUgYXBwIGR1ZSB0byBob3cgTWF0aEpheCBpcyBzZXQgdXAgaW4gdGhlIGJyb3dzZXI7IGVpdGhlciB5b3UgaGF2ZSBtdWx0aXBsZSBNYXRoSmF4Q29udGV4dHMgd2l0aCBkaWZmZXJlbnQgdmVyc2lvbnMgb3IgeW91IGhhdmUgbW91bnRlZCBhbmQgdW5tb3VudGVkIE1hdGhKYXhDb250ZXh0cyB3aXRoIGRpZmZlcmVudCB2ZXJzaW9ucy4gUGxlYXNlIHN0aWNrIHdpdGggb25lIHZlcnNpb24gb2YgTWF0aEpheCBpbiB5b3VyIGFwcC4gRmlsZSBhbiBpc3N1ZSBpbiB0aGUgcHJvamVjdCBHaXRodWIgcGFnZSBpZiB5b3UgbmVlZCB0aGlzIGZlYXR1cmUuXCIpO3ZhciB1PXVzZVJlZihjKSxjPXVzZVJlZigobnVsbD09Yz92b2lkIDA6Yy52ZXJzaW9uKXx8bnVsbCk7aWYobnVsbD09PWMuY3VycmVudCljLmN1cnJlbnQ9dDtlbHNlIGlmKGMuY3VycmVudCE9PXQpdGhyb3cgRXJyb3IoXCJDYW5ub3QgY2hhbmdlIHZlcnNpb24gb2YgTWF0aEpheCBpbiBhIE1hdGhKYXhDb250ZXh0IGFmdGVyIGl0IGhhcyBtb3VudGVkLiBSZWxvYWQgdGhlIHBhZ2Ugd2l0aCBhIG5ldyB2ZXJzaW9uIHdoZW4gdGhpcyBtdXN0IGhhcHBlbi5cIik7dmFyIHY9b3x8KDI9PT10P0RFRkFVTFRfVjJfU1JDOkRFRkFVTFRfVjNfU1JDKTtmdW5jdGlvbiBmKHQsbyl7biYmKHdpbmRvdy5NYXRoSmF4PW4pO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZS50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIsZS5zcmM9dixlLmFzeW5jPSEwLGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5NYXRoSmF4O2EmJmEoZSksdChlKSxyJiZyKCl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKGUpe3JldHVybiBvKGUpfSksZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGUpfXJldHVybiB2b2lkIDA9PT11LmN1cnJlbnQmJihjPXt0eXBlc2V0dGluZ09wdGlvbnM6cyxyZW5kZXJNb2RlOmgsaGlkZVVudGlsVHlwZXNldDpkfSwyPT09dD92b2lkIDA9PT12MlByb21pc2UmJihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93Pyh2MlByb21pc2U9bmV3IFByb21pc2UoZikpLmNhdGNoKGZ1bmN0aW9uKGUpe2lmKCFpKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGRvd25sb2FkIE1hdGhKYXggdmVyc2lvbiAyIGZyb20gJ1wiLmNvbmNhdCh2LFwiJyBkdWUgdG86IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZSkpKTtpKGUpfSk6KHYyUHJvbWlzZT1Qcm9taXNlLnJlamVjdCgpKS5jYXRjaChmdW5jdGlvbihlKXt9KSk6dm9pZCAwPT09djNQcm9taXNlJiYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz8odjNQcm9taXNlPW5ldyBQcm9taXNlKGYpKS5jYXRjaChmdW5jdGlvbihlKXtpZighaSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBkb3dubG9hZCBNYXRoSmF4IHZlcnNpb24gMyBmcm9tICdcIi5jb25jYXQodixcIicgZHVlIHRvOiBcIikuY29uY2F0KGUpKTtpKGUpfSk6KHYzUHJvbWlzZT1Qcm9taXNlLnJlamVjdCgpKS5jYXRjaChmdW5jdGlvbihlKXt9KSksdS5jdXJyZW50PV9fYXNzaWduKF9fYXNzaWduKHt9LGMpLDI9PT10P3t2ZXJzaW9uOjIscHJvbWlzZTp2MlByb21pc2V9Ont2ZXJzaW9uOjMscHJvbWlzZTp2M1Byb21pc2V9KSksUmVhY3QuY3JlYXRlRWxlbWVudChNYXRoSmF4QmFzZUNvbnRleHQuUHJvdmlkZXIse3ZhbHVlOnUuY3VycmVudH0sZSl9O2V4cG9ydCBkZWZhdWx0IE1hdGhKYXhDb250ZXh0O2V4cG9ydHtNYXRoSmF4QmFzZUNvbnRleHR9OyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js\n");

/***/ })

};
;