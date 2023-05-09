/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a-1.js":
/*!********************!*\
  !*** ./src/a-1.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar number = 100;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\n\n//# sourceURL=webpack://learn-webpack/./src/a-1.js?");

/***/ }),

/***/ "./src/a-2.js":
/*!********************!*\
  !*** ./src/a-2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar number = 200;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\n\n//# sourceURL=webpack://learn-webpack/./src/a-2.js?");

/***/ }),

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _a_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-1.js */ \"./src/a-1.js\");\n/* harmony import */ var _a_2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a-2.js */ \"./src/a-2.js\");\n\n\n\nvar number = _a_1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] + _a_2_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\n\n//# sourceURL=webpack://learn-webpack/./src/a.js?");

/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar number = 20;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\n\n//# sourceURL=webpack://learn-webpack/./src/b.js?");

/***/ }),

/***/ "./src/c.js":
/*!******************!*\
  !*** ./src/c.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar number = 30;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\n\n//# sourceURL=webpack://learn-webpack/./src/c.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\n/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.js */ \"./src/b.js\");\n/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c.js */ \"./src/c.js\");\n\n\n\n\nconsole.log(_a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconsole.log(_b_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconsole.log(_c_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst $buttonA = document.querySelector('#button-a');\nconst $buttonB = document.querySelector('#button-b');\nconst $buttonC = document.querySelector('#button-c');\nconst $display = document.querySelector('#display');\n\n$buttonA.addEventListener('click', function() {\n    $display.textContent = _a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n})\n\n$buttonB.addEventListener('click', function() {\n    $display.textContent = _b_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n})\n\n$buttonC.addEventListener('click', function() {\n    $display.textContent = _c_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n})\n\n//# sourceURL=webpack://learn-webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;