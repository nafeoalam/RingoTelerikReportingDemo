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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _progress_telerik_react_report_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/telerik-react-report-viewer */ \"./node_modules/@progress/telerik-react-report-viewer/dist/es/main.js\");\n\n\n\nclass ViewerComponent extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_progress_telerik_react_report_viewer__WEBPACK_IMPORTED_MODULE_2__.TelerikReportViewer, {\n            ref: (el)=>this.viewer = el,\n            serviceUrl: \"http://localhost:59655/api/reports/\",\n            reportSource: {\n                report: this.props.reportName,\n                parameters: {\n                    DataParameter: JSON.stringify(this.props.data.data)\n                }\n            },\n            viewerContainerStyle: {\n                position: \"absolute\",\n                height: \"90%\",\n                width: \"90%\",\n                top: \"6%\",\n                clear: \"both\",\n                fontFamily: \"ms sans serif\"\n            },\n            scaleMode: \"SPECIFIC\",\n            scale: 1.2,\n            enableAccessibility: false\n        }, this.props.reportName, false, {\n            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\components\\\\ViewerComponent.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerComponent);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWV3ZXJDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUNtQztBQUU1RSxNQUFNRyx3QkFBd0JGLDRDQUFTQTtJQUdyQ0csU0FBUztRQUNQLHFCQUNFLDhEQUFDRixzRkFBbUJBO1lBRWxCRyxLQUFLLENBQUNDLEtBQVEsSUFBSSxDQUFDQyxNQUFNLEdBQUdEO1lBQzVCRSxZQUFXO1lBQ1hDLGNBQWM7Z0JBQ1pDLFFBQVEsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFVBQVU7Z0JBQzdCQyxZQUFZO29CQUNWQyxlQUFlQyxLQUFLQyxTQUFTLENBQUMsSUFBSSxDQUFDTCxLQUFLLENBQUNNLElBQUksQ0FBQ0EsSUFBSTtnQkFDcEQ7WUFDRjtZQUNBQyxzQkFBc0I7Z0JBQ3BCQyxVQUFVO2dCQUNWQyxRQUFRO2dCQUNSQyxPQUFPO2dCQUNQQyxLQUFLO2dCQUNMQyxPQUFPO2dCQUNQQyxZQUFZO1lBQ2Q7WUFDQUMsV0FBVTtZQUNWQyxPQUFPO1lBQ1BDLHFCQUFxQjtXQW5CaEIsSUFBSSxDQUFDaEIsS0FBSyxDQUFDQyxVQUFVOzs7OztJQXNCaEM7QUFDRjtBQUVBLCtEQUFlVCxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZXdlckNvbXBvbmVudC5qcz85YTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGVsZXJpa1JlcG9ydFZpZXdlciB9IGZyb20gXCJAcHJvZ3Jlc3MvdGVsZXJpay1yZWFjdC1yZXBvcnQtdmlld2VyXCI7XHJcblxyXG5jbGFzcyBWaWV3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHZpZXdlcjtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRlbGVyaWtSZXBvcnRWaWV3ZXJcclxuICAgICAgICBrZXk9e3RoaXMucHJvcHMucmVwb3J0TmFtZX0gLy8gQ2hhbmdlcyB0cmlnZ2VyIHJlbW91bnRcclxuICAgICAgICByZWY9eyhlbCkgPT4gKHRoaXMudmlld2VyID0gZWwpfVxyXG4gICAgICAgIHNlcnZpY2VVcmw9XCJodHRwOi8vbG9jYWxob3N0OjU5NjU1L2FwaS9yZXBvcnRzL1wiXHJcbiAgICAgICAgcmVwb3J0U291cmNlPXt7XHJcbiAgICAgICAgICByZXBvcnQ6IHRoaXMucHJvcHMucmVwb3J0TmFtZSwgLy8gRHluYW1pYyByZXBvcnQgbmFtZSBiYXNlZCBvbiBzZWxlY3Rpb25cclxuICAgICAgICAgIHBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgRGF0YVBhcmFtZXRlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5kYXRhLmRhdGEpLCAvLyBNYWtlIHN1cmUgZGF0YSBpcyBjb3JyZWN0bHkgZm9ybWF0dGVkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmlld2VyQ29udGFpbmVyU3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiOTAlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI5MCVcIixcclxuICAgICAgICAgIHRvcDogXCI2JVwiLFxyXG4gICAgICAgICAgY2xlYXI6IFwiYm90aFwiLFxyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJtcyBzYW5zIHNlcmlmXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzY2FsZU1vZGU9XCJTUEVDSUZJQ1wiXHJcbiAgICAgICAgc2NhbGU9ezEuMn1cclxuICAgICAgICBlbmFibGVBY2Nlc3NpYmlsaXR5PXtmYWxzZX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRlbGVyaWtSZXBvcnRWaWV3ZXIiLCJWaWV3ZXJDb21wb25lbnQiLCJyZW5kZXIiLCJyZWYiLCJlbCIsInZpZXdlciIsInNlcnZpY2VVcmwiLCJyZXBvcnRTb3VyY2UiLCJyZXBvcnQiLCJwcm9wcyIsInJlcG9ydE5hbWUiLCJwYXJhbWV0ZXJzIiwiRGF0YVBhcmFtZXRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwidmlld2VyQ29udGFpbmVyU3R5bGUiLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwidG9wIiwiY2xlYXIiLCJmb250RmFtaWx5Iiwic2NhbGVNb2RlIiwic2NhbGUiLCJlbmFibGVBY2Nlc3NpYmlsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ViewerComponent.js\n"));

/***/ })

});