"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[report]",{

/***/ "./src/pages/[report].js":
/*!*******************************!*\
  !*** ./src/pages/[report].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/speakers */ \"./src/data/speakers.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-data-query */ \"./node_modules/@progress/kendo-data-query/dist/es/main.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-theme-default/dist/all.css */ \"./node_modules/@progress/kendo-theme-default/dist/all.css\");\n/* harmony import */ var _progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_7__);\n// pages/[report].js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ViewerComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_ViewerComponent_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/ViewerComponent */ \"./src/components/ViewerComponent.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\[report].js -> \" + \"../components/ViewerComponent\"\n        ]\n    },\n    ssr: false\n});\n_c = ViewerComponent;\nconst ReportPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { report, clientName } = router.query; // Accessing dynamic route and query parameters\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(report); // Initialize with a default report\n    const [gridDataState, setGridDataState] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(()=>({\n            data: (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__.process)([], {\n                sort: [\n                    {\n                        field: \"Name\",\n                        dir: \"asc\"\n                    }\n                ]\n            })\n        }));\n    const handleChange = (event)=>{\n        setSelected(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Report: \",\n                    report\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    label: \"React Report Viewer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ViewerComponent, {\n                            reportName: selected !== null && selected !== void 0 ? selected : report,\n                            clientName: clientName,\n                            data: gridDataState.data\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: selected,\n                            onChange: handleChange,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Multiselect\",\n                                    children: \"Multiselect\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"chartsTrial\",\n                                    children: \"chartsTrial\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"RequisitionAnalysisReport\",\n                                    children: \"RequisitionAnalysisReport\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"SubReport\",\n                                    children: \"SubReport\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Selected: \",\n                                selected\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\[report].js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReportPage, \"nES4ETlh7IurXSuSiqJeRHpMN9c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c1 = ReportPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReportPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"ViewerComponent\");\n$RefreshReg$(_c1, \"ReportPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3JlcG9ydF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9COzs7QUFDb0I7QUFDWDtBQUNtQjtBQUNiO0FBQ2tCO0FBQ3BCO0FBQ21CO0FBRXBELE1BQU1NLGtCQUFrQkgsbURBQU9BLENBQUMsSUFBTSwwTUFBdUM7Ozs7OztJQUMzRUksS0FBSzs7S0FEREQ7QUFJTixNQUFNRSxhQUFhOztJQUNqQixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHRixPQUFPRyxLQUFLLEVBQUUsK0NBQStDO0lBRTVGLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQ0ssU0FBUyxtQ0FBbUM7SUFDckYsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQUMsSUFBTztZQUN4RFksTUFBTWIsbUVBQU9BLENBQUMsRUFBRSxFQUFFO2dCQUFFYyxNQUFNO29CQUFDO3dCQUFFQyxPQUFPO3dCQUFRQyxLQUFLO29CQUFNO2lCQUFFO1lBQUM7UUFDNUQ7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCUixZQUFZUSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDaEM7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzs7b0JBQUc7b0JBQVNoQjs7Ozs7OzswQkFFYiw4REFBQ2U7MEJBQ0MsNEVBQUNBO29CQUFJRSxPQUFNOztzQ0FDVCw4REFBQ3JCOzRCQUNDc0IsWUFBWWYscUJBQUFBLHNCQUFBQSxXQUFZSDs0QkFDeEJDLFlBQVlBOzRCQUNaTSxNQUFNRixjQUFjRSxJQUFJOzs7Ozs7c0NBRzFCLDhEQUFDWTs0QkFBT0wsT0FBT1g7NEJBQVVpQixVQUFVVDs7OENBRWpDLDhEQUFDVTtvQ0FBT1AsT0FBTTs4Q0FBYzs7Ozs7OzhDQUU1Qiw4REFBQ087b0NBQU9QLE9BQU07OENBQWM7Ozs7Ozs4Q0FDNUIsOERBQUNPO29DQUFPUCxPQUFNOzhDQUE0Qjs7Ozs7OzhDQUcxQyw4REFBQ087b0NBQU9QLE9BQU07OENBQVk7Ozs7Ozs7Ozs7OztzQ0FHNUIsOERBQUNDOztnQ0FBSTtnQ0FBV1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQXpDTUw7O1FBQ1dSLGtEQUFTQTs7O01BRHBCUTtBQTJDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3JlcG9ydF0uanM/NzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9bcmVwb3J0XS5qc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBzcGVha2Vyc0RhdGEgfSBmcm9tIFwiLi4vZGF0YS9zcGVha2Vyc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IHByb2Nlc3MgfSBmcm9tIFwiQHByb2dyZXNzL2tlbmRvLWRhdGEtcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiQHByb2dyZXNzL2tlbmRvLXRoZW1lLWRlZmF1bHQvZGlzdC9hbGwuY3NzXCI7XHJcblxyXG5jb25zdCBWaWV3ZXJDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvVmlld2VyQ29tcG9uZW50XCIpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcmVwb3J0LCBjbGllbnROYW1lIH0gPSByb3V0ZXIucXVlcnk7IC8vIEFjY2Vzc2luZyBkeW5hbWljIHJvdXRlIGFuZCBxdWVyeSBwYXJhbWV0ZXJzXHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUocmVwb3J0KTsgLy8gSW5pdGlhbGl6ZSB3aXRoIGEgZGVmYXVsdCByZXBvcnRcclxuICBjb25zdCBbZ3JpZERhdGFTdGF0ZSwgc2V0R3JpZERhdGFTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xyXG4gICAgZGF0YTogcHJvY2VzcyhbXSwgeyBzb3J0OiBbeyBmaWVsZDogXCJOYW1lXCIsIGRpcjogXCJhc2NcIiB9XSB9KSwgLy8gQXNzdW1pbmcgaW5pdGlhbCBkYXRhIHNldHVwXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlbGVjdGVkKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5SZXBvcnQ6IHtyZXBvcnR9PC9oMT5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBsYWJlbD1cIlJlYWN0IFJlcG9ydCBWaWV3ZXJcIj5cclxuICAgICAgICAgIDxWaWV3ZXJDb21wb25lbnRcclxuICAgICAgICAgICAgcmVwb3J0TmFtZT17c2VsZWN0ZWQgPz8gcmVwb3J0fVxyXG4gICAgICAgICAgICBjbGllbnROYW1lPXtjbGllbnROYW1lfVxyXG4gICAgICAgICAgICBkYXRhPXtncmlkRGF0YVN0YXRlLmRhdGF9XHJcbiAgICAgICAgICA+PC9WaWV3ZXJDb21wb25lbnQ+XHJcblxyXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZT1cIlNhbXBsZVJlcG9ydFwiPlNhbXBsZVJlcG9ydDwvb3B0aW9uPiAqL31cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk11bHRpc2VsZWN0XCI+TXVsdGlzZWxlY3Q8L29wdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGFydHNUcmlhbFwiPmNoYXJ0c1RyaWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSZXF1aXNpdGlvbkFuYWx5c2lzUmVwb3J0XCI+XHJcbiAgICAgICAgICAgICAgUmVxdWlzaXRpb25BbmFseXNpc1JlcG9ydFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN1YlJlcG9ydFwiPlN1YlJlcG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7LyogPG9wdGlvbiB2YWx1ZT1cIk1vcmVDb2x1bXNcIj5Nb3JlQ29sdW1zPC9vcHRpb24+ICovfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2PlNlbGVjdGVkOiB7c2VsZWN0ZWR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJIZWFkIiwic3BlYWtlcnNEYXRhIiwiZHluYW1pYyIsInByb2Nlc3MiLCJ1c2VTdGF0ZSIsIlZpZXdlckNvbXBvbmVudCIsInNzciIsIlJlcG9ydFBhZ2UiLCJyb3V0ZXIiLCJyZXBvcnQiLCJjbGllbnROYW1lIiwicXVlcnkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZ3JpZERhdGFTdGF0ZSIsInNldEdyaWREYXRhU3RhdGUiLCJkYXRhIiwic29ydCIsImZpZWxkIiwiZGlyIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImgxIiwibGFiZWwiLCJyZXBvcnROYW1lIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[report].js\n"));

/***/ })

});