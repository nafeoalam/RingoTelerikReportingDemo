"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_ViewerComponent_js",{

/***/ "./src/components/ViewerComponent.js":
/*!*******************************************!*\
  !*** ./src/components/ViewerComponent.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _progress_telerik_react_report_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/telerik-react-report-viewer */ \"./node_modules/@progress/telerik-react-report-viewer/dist/es/main.js\");\n\nvar _s = $RefreshSig$();\n\n// import { TelerikReportViewer } from \"@progress/telerik-react-report-viewer\";\n\nconst ViewerComponent = (param)=>{\n    let { reportName, clientName } = param;\n    _s();\n    console.log(clientName);\n    let clientNamesArray = [];\n    if (clientName != null) {\n        clientNamesArray = clientName.split(\",\");\n        console.log(clientNamesArray);\n    }\n    const viewerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_progress_telerik_react_report_viewer__WEBPACK_IMPORTED_MODULE_2__.TelerikReportViewer, {\n        ref: viewerRef,\n        serviceUrl: \"http://localhost:59655/api/reports/render/\",\n        reportSource: {\n            report: reportName + \".trdp\",\n            parameters: {\n                ClientName: clientNamesArray,\n                Status: [\n                    \"Approved\",\n                    \"Closed\"\n                ]\n            }\n        },\n        viewerContainerStyle: {\n            position: \"absolute\",\n            height: \"80%\",\n            width: \"100%\",\n            top: \"15%\",\n            clear: \"both\",\n            fontFamily: \"ms sans serif\"\n        },\n        scaleMode: \"SPECIFIC\",\n        scale: 1.2,\n        enableAccessibility: false\n    }, reportName, false, {\n        fileName: \"C:\\\\Users\\\\Jatin.Bhola\\\\Desktop\\\\TelerikIntegratedWithReact\\\\kendo-react-reporting\\\\src\\\\components\\\\ViewerComponent.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ViewerComponent, \"Mn4ySmOtY4NfrJ0fclWy4k1lh9g=\");\n_c = ViewerComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerComponent);\nvar _c;\n$RefreshReg$(_c, \"ViewerComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWV3ZXJDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDdEMsK0VBQStFO0FBQ0o7QUFHM0UsTUFBTUcsa0JBQWtCO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUU7O0lBQ2pEQyxRQUFRQyxHQUFHLENBQUNGO0lBRVosSUFBSUcsbUJBQW1CLEVBQUU7SUFFekIsSUFBR0gsY0FBYyxNQUFLO1FBQ3BCRyxtQkFBbUJILFdBQVdJLEtBQUssQ0FBQztRQUNwQ0gsUUFBUUMsR0FBRyxDQUFDQztJQUNiO0lBRUQsTUFBTUUsWUFBWVQsNkNBQU1BLENBQUM7SUFHekIscUJBQ0UsOERBQUNDLHNGQUFtQkE7UUFFbEJTLEtBQUtEO1FBQ0xFLFlBQVc7UUFDWEMsY0FBYztZQUNaQyxRQUFRVixhQUFhO1lBQ3JCVyxZQUFZO2dCQUNWQyxZQUFXUjtnQkFDWFMsUUFBUTtvQkFBQztvQkFBVztpQkFBUztZQUMvQjtRQUVGO1FBQ0FDLHNCQUFzQjtZQUNwQkMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFlBQVk7UUFFZDtRQUNBQyxXQUFVO1FBQ1ZDLE9BQU87UUFDUEMscUJBQXFCO09BdEJoQnZCOzs7OztBQXlCWDtHQXhDTUQ7S0FBQUE7QUEwQ04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlld2VyQ29tcG9uZW50LmpzPzlhNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBUZWxlcmlrUmVwb3J0Vmlld2VyIH0gZnJvbSBcIkBwcm9ncmVzcy90ZWxlcmlrLXJlYWN0LXJlcG9ydC12aWV3ZXJcIjtcclxuaW1wb3J0IHsgVGVsZXJpa1JlcG9ydFZpZXdlcn0gZnJvbSBcIkBwcm9ncmVzcy90ZWxlcmlrLXJlYWN0LXJlcG9ydC12aWV3ZXJcIjtcclxuXHJcblxyXG5jb25zdCBWaWV3ZXJDb21wb25lbnQgPSAoeyByZXBvcnROYW1lLCBjbGllbnROYW1lIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhjbGllbnROYW1lKVxyXG5cclxuICBsZXQgY2xpZW50TmFtZXNBcnJheSA9IFtdXHJcblxyXG4gIGlmKGNsaWVudE5hbWUgIT0gbnVsbCl7XHJcbiAgICBjbGllbnROYW1lc0FycmF5ID0gY2xpZW50TmFtZS5zcGxpdCgnLCcpO1xyXG4gICAgY29uc29sZS5sb2coY2xpZW50TmFtZXNBcnJheSlcclxuICAgfVxyXG5cclxuICBjb25zdCB2aWV3ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxUZWxlcmlrUmVwb3J0Vmlld2VyXHJcbiAgICAgIGtleT17cmVwb3J0TmFtZX0gLy8gVXNpbmcgcmVwb3J0TmFtZSBhcyBrZXkgdG8gdHJpZ2dlciByZW1vdW50IGlmIHJlcG9ydE5hbWUgY2hhbmdlc1xyXG4gICAgICByZWY9e3ZpZXdlclJlZn1cclxuICAgICAgc2VydmljZVVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6NTk2NTUvYXBpL3JlcG9ydHMvcmVuZGVyL1wiXHJcbiAgICAgIHJlcG9ydFNvdXJjZT17e1xyXG4gICAgICAgIHJlcG9ydDogcmVwb3J0TmFtZSArIFwiLnRyZHBcIiwgLy8gRHluYW1pYyByZXBvcnQgbmFtZSBiYXNlZCBvbiBzZWxlY3Rpb25cclxuICAgICAgICBwYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICBDbGllbnROYW1lOmNsaWVudE5hbWVzQXJyYXksXHJcbiAgICAgICAgICBTdGF0dXM6IFtcIkFwcHJvdmVkXCIsXCJDbG9zZWRcIl1cclxuICAgICAgICB9LFxyXG4gICAgICBcclxuICAgICAgfX1cclxuICAgICAgdmlld2VyQ29udGFpbmVyU3R5bGU9e3tcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgdG9wOiBcIjE1JVwiLFxyXG4gICAgICAgIGNsZWFyOiBcImJvdGhcIixcclxuICAgICAgICBmb250RmFtaWx5OiBcIm1zIHNhbnMgc2VyaWZcIixcclxuXHJcbiAgICAgIH19XHJcbiAgICAgIHNjYWxlTW9kZT1cIlNQRUNJRklDXCJcclxuICAgICAgc2NhbGU9ezEuMn1cclxuICAgICAgZW5hYmxlQWNjZXNzaWJpbGl0eT17ZmFsc2V9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIlRlbGVyaWtSZXBvcnRWaWV3ZXIiLCJWaWV3ZXJDb21wb25lbnQiLCJyZXBvcnROYW1lIiwiY2xpZW50TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnROYW1lc0FycmF5Iiwic3BsaXQiLCJ2aWV3ZXJSZWYiLCJyZWYiLCJzZXJ2aWNlVXJsIiwicmVwb3J0U291cmNlIiwicmVwb3J0IiwicGFyYW1ldGVycyIsIkNsaWVudE5hbWUiLCJTdGF0dXMiLCJ2aWV3ZXJDb250YWluZXJTdHlsZSIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0b3AiLCJjbGVhciIsImZvbnRGYW1pbHkiLCJzY2FsZU1vZGUiLCJzY2FsZSIsImVuYWJsZUFjY2Vzc2liaWxpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ViewerComponent.js\n"));

/***/ })

});