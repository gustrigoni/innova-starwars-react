/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/SearchContext.tsx":
/*!*******************************!*\
  !*** ./src/SearchContext.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchProvider: () => (/* binding */ SearchProvider),\n/* harmony export */   useSearch: () => (/* binding */ useSearch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst EMPTY_PERSON = {\n    name: \"\",\n    birth: \"\",\n    gender: \"\",\n    eyeColor: \"\",\n    image: \"\",\n    films: []\n};\nconst SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction SearchProvider({ children }) {\n    const [personData, setPersonData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(EMPTY_PERSON);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"SearchProvider.useMemo[value]\": ()=>({\n                personData,\n                setPersonData\n            })\n    }[\"SearchProvider.useMemo[value]\"], [\n        personData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gustavo\\\\Desktop\\\\projetos\\\\innova-starwars-reactjs\\\\src\\\\SearchContext.tsx\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, this);\n}\nfunction useSearch() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SearchContext);\n    if (!context) {\n        throw new Error(\"useSearch must be used within SearchProvider.\");\n    }\n    return context;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9TZWFyY2hDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFGO0FBWXJGLE1BQU1JLGVBQXVCO0lBQzNCQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxVQUFVO0lBQ1ZDLE9BQU87SUFDUEMsT0FBTyxFQUFFO0FBQ1g7QUFFQSxNQUFNQyw4QkFBZ0JYLG9EQUFhQSxDQUE0QjtBQUUvRCxTQUFTWSxlQUFlLEVBQUVDLFFBQVEsRUFBdUI7SUFDdkQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFTQztJQUVyRCxNQUFNWSxRQUFRZCw4Q0FBT0E7eUNBQ25CLElBQU87Z0JBQ0xZO2dCQUNBQztZQUNGO3dDQUNBO1FBQUNEO0tBQVc7SUFHZCxxQkFBTyw4REFBQ0gsY0FBY00sUUFBUTtRQUFDRCxPQUFPQTtrQkFBUUg7Ozs7OztBQUNoRDtBQUVBLFNBQVNLO0lBQ1AsTUFBTUMsVUFBVWxCLGlEQUFVQSxDQUFDVTtJQUUzQixJQUFJLENBQUNRLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxPQUFPRDtBQUNUO0FBRXFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEd1c3Rhdm9cXERlc2t0b3BcXHByb2pldG9zXFxpbm5vdmEtc3RhcndhcnMtcmVhY3Rqc1xcc3JjXFxTZWFyY2hDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB0eXBlIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgUGVyc29uIH0gZnJvbSBcIi4vbGliL2NvbnRyYWN0c1wiO1xuXG5pbnRlcmZhY2UgU2VhcmNoQ29udGV4dFZhbHVlIHtcbiAgcGVyc29uRGF0YTogUGVyc29uO1xuICBzZXRQZXJzb25EYXRhKHBlcnNvbjogUGVyc29uKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFNlYXJjaFByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBFTVBUWV9QRVJTT046IFBlcnNvbiA9IHtcbiAgbmFtZTogXCJcIixcbiAgYmlydGg6IFwiXCIsXG4gIGdlbmRlcjogXCJcIixcbiAgZXllQ29sb3I6IFwiXCIsXG4gIGltYWdlOiBcIlwiLFxuICBmaWxtczogW10sXG59O1xuXG5jb25zdCBTZWFyY2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTZWFyY2hDb250ZXh0VmFsdWUgfCBudWxsPihudWxsKTtcblxuZnVuY3Rpb24gU2VhcmNoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBTZWFyY2hQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFtwZXJzb25EYXRhLCBzZXRQZXJzb25EYXRhXSA9IHVzZVN0YXRlPFBlcnNvbj4oRU1QVFlfUEVSU09OKTtcblxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHBlcnNvbkRhdGEsXG4gICAgICBzZXRQZXJzb25EYXRhLFxuICAgIH0pLFxuICAgIFtwZXJzb25EYXRhXVxuICApO1xuXG4gIHJldHVybiA8U2VhcmNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5mdW5jdGlvbiB1c2VTZWFyY2goKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZVNlYXJjaCBtdXN0IGJlIHVzZWQgd2l0aGluIFNlYXJjaFByb3ZpZGVyLlwiKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgeyBTZWFyY2hQcm92aWRlciwgdXNlU2VhcmNoIH07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkVNUFRZX1BFUlNPTiIsIm5hbWUiLCJiaXJ0aCIsImdlbmRlciIsImV5ZUNvbG9yIiwiaW1hZ2UiLCJmaWxtcyIsIlNlYXJjaENvbnRleHQiLCJTZWFyY2hQcm92aWRlciIsImNoaWxkcmVuIiwicGVyc29uRGF0YSIsInNldFBlcnNvbkRhdGEiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlU2VhcmNoIiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/SearchContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(pages-dir-node)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/main.css */ \"(pages-dir-node)/./src/assets/css/main.css\");\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SearchContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SearchContext */ \"(pages-dir-node)/./src/SearchContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchContext__WEBPACK_IMPORTED_MODULE_4__.SearchProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                theme: \"dark\",\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gustavo\\\\Desktop\\\\projetos\\\\innova-starwars-reactjs\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gustavo\\\\Desktop\\\\projetos\\\\innova-starwars-reactjs\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gustavo\\\\Desktop\\\\projetos\\\\innova-starwars-reactjs\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2dEO0FBRUQ7QUFDZjtBQUVrQjtBQUVuQyxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCwwREFBY0E7OzBCQUNiLDhEQUFDRCwwREFBY0E7Z0JBQ2JLLFVBQVM7Z0JBQ1RDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGFBQWE7Z0JBQ2JDLFlBQVk7Z0JBQ1pDLEtBQUs7Z0JBQ0xDLE9BQU07Z0JBQ05DLGdCQUFnQjtnQkFDaEJDLFNBQVM7Z0JBQ1RDLFlBQVk7Ozs7OzswQkFFZCw4REFBQ1g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEd1c3Rhdm9cXERlc2t0b3BcXHByb2pldG9zXFxpbm5vdmEtc3RhcndhcnMtcmVhY3Rqc1xcc3JjXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9tYWluLmNzc1wiO1xuXG5pbXBvcnQgeyBTZWFyY2hQcm92aWRlciB9IGZyb20gXCIuLi9TZWFyY2hDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFNlYXJjaFByb3ZpZGVyPlxuICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TZWFyY2hQcm92aWRlcj5cbiAgKTtcbn1cclxuIl0sIm5hbWVzIjpbIlRvYXN0Q29udGFpbmVyIiwiU2VhcmNoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicnRsIiwidGhlbWUiLCJwYXVzZU9uRm9jdXNMb3NzIiwiZHJhZ2dhYmxlIiwicGF1c2VPbkhvdmVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-toastify"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();