"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_speakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/speakers */ \"./src/data/speakers.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-data-query */ \"./node_modules/@progress/kendo-data-query/dist/es/main.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-theme-default/dist/all.css */ \"./node_modules/@progress/kendo-theme-default/dist/all.css\");\n/* harmony import */ var _progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_progress_kendo_theme_default_dist_all_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ViewerComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_ViewerComponent_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/ViewerComponent */ \"./src/components/ViewerComponent.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\index.js -> \" + \"../components/ViewerComponent\"\n        ]\n    },\n    ssr: false\n});\n_c = ViewerComponent;\nfunction Home() {\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const handleChange = (event)=>{\n        setSelected(event.target.value);\n    };\n    const [gridDataState, setGridDataState] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>({\n            data: (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_4__.process)(_data_speakers__WEBPACK_IMPORTED_MODULE_2__.speakersData, {\n                sort: [\n                    {\n                        field: \"Name\",\n                        dir: \"asc\"\n                    }\n                ]\n            })\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Telerik Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    label: \"React Report Viewer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ViewerComponent, {\n                                data: gridDataState.data\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: selected,\n                                    onChange: handleChange,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"SampleReport\",\n                                            children: \"SampleReport\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"chartsTrial\",\n                                            children: \"chartsTrial\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"ProductSales\",\n                                            children: \"ProductSales\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"RequisitionAnalysisReport\",\n                                            children: \"RequisitionAnalysisReport\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"SubReport\",\n                                            children: \"SubReport\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Selected: \",\n                                        selected\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nalam\\\\source\\\\repos\\\\RingoTelerikWebApi\\\\kendo-react-reporting\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"LYKw1gUIMV9IizC48V7GAc7Pq8M=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"ViewerComponent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ21CO0FBQ2I7QUFDa0I7QUFDcEI7QUFDbUI7QUFFcEQsTUFBTUssa0JBQWtCSCxtREFBT0EsQ0FBQyxJQUFNLDBNQUF1Qzs7Ozs7O0lBQzNFSSxLQUFLOztLQURERDtBQUlTLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFFekMsTUFBTU0sZUFBZSxDQUFDQztRQUNwQkYsWUFBWUUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2hDO0lBQ0EsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQUMsSUFBTztZQUN4RFksTUFBTWIsbUVBQU9BLENBQUNGLHdEQUFZQSxFQUFFO2dCQUMxQmdCLE1BQU07b0JBQUM7d0JBQUVDLE9BQU87d0JBQVFDLEtBQUs7b0JBQU07aUJBQUU7WUFDdkM7UUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ25CLGtEQUFJQTs7a0NBQ0gsOERBQUNvQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzswQkFDQyw0RUFBQ0E7b0JBQUlDLE9BQU07O3NDQUNULDhEQUFDRDtzQ0FDQyw0RUFBQ3RCO2dDQUFnQlcsTUFBTUYsY0FBY0UsSUFBSTs7Ozs7Ozs7Ozs7c0NBRTNDLDhEQUFDVzs7OENBQ0MsOERBQUNFO29DQUFPaEIsT0FBT0w7b0NBQVVzQixVQUFVcEI7O3NEQUNqQyw4REFBQ3FCOzRDQUFPbEIsT0FBTTtzREFBZTs7Ozs7O3NEQUM3Qiw4REFBQ2tCOzRDQUFPbEIsT0FBTTtzREFBYzs7Ozs7O3NEQUM1Qiw4REFBQ2tCOzRDQUFPbEIsT0FBTTtzREFBZTs7Ozs7O3NEQUM3Qiw4REFBQ2tCOzRDQUFPbEIsT0FBTTtzREFBNEI7Ozs7OztzREFHMUMsOERBQUNrQjs0Q0FBT2xCLE9BQU07c0RBQVk7Ozs7Ozs7Ozs7Ozs4Q0FFNUIsOERBQUNjOzt3Q0FBSTt3Q0FBV25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQXpDd0JEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgc3BlYWtlcnNEYXRhIH0gZnJvbSBcIi4uL2RhdGEvc3BlYWtlcnNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyBwcm9jZXNzIH0gZnJvbSBcIkBwcm9ncmVzcy9rZW5kby1kYXRhLXF1ZXJ5XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIkBwcm9ncmVzcy9rZW5kby10aGVtZS1kZWZhdWx0L2Rpc3QvYWxsLmNzc1wiO1xyXG5cclxuY29uc3QgVmlld2VyQ29tcG9uZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL1ZpZXdlckNvbXBvbmVudFwiKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgW2dyaWREYXRhU3RhdGUsIHNldEdyaWREYXRhU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKHtcclxuICAgIGRhdGE6IHByb2Nlc3Moc3BlYWtlcnNEYXRhLCB7XHJcbiAgICAgIHNvcnQ6IFt7IGZpZWxkOiBcIk5hbWVcIiwgZGlyOiBcImFzY1wiIH1dLFxyXG4gICAgfSksXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRlbGVyaWsgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgbGFiZWw9XCJSZWFjdCBSZXBvcnQgVmlld2VyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Vmlld2VyQ29tcG9uZW50IGRhdGE9e2dyaWREYXRhU3RhdGUuZGF0YX0+PC9WaWV3ZXJDb21wb25lbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2FtcGxlUmVwb3J0XCI+U2FtcGxlUmVwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoYXJ0c1RyaWFsXCI+Y2hhcnRzVHJpYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJvZHVjdFNhbGVzXCI+UHJvZHVjdFNhbGVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJlcXVpc2l0aW9uQW5hbHlzaXNSZXBvcnRcIj5cclxuICAgICAgICAgICAgICAgIFJlcXVpc2l0aW9uQW5hbHlzaXNSZXBvcnRcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3ViUmVwb3J0XCI+U3ViUmVwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8ZGl2PlNlbGVjdGVkOiB7c2VsZWN0ZWR9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3BlYWtlcnNEYXRhIiwiZHluYW1pYyIsInByb2Nlc3MiLCJ1c2VTdGF0ZSIsIlZpZXdlckNvbXBvbmVudCIsInNzciIsIkhvbWUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdyaWREYXRhU3RhdGUiLCJzZXRHcmlkRGF0YVN0YXRlIiwiZGF0YSIsInNvcnQiLCJmaWVsZCIsImRpciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJsYWJlbCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});