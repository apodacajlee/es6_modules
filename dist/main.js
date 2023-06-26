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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n    constructor (id, make, model, year) {\r\n        this.id = id;\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\n\r\n\r\nconsole.log(\"index.js start\");\r\n\r\n// TODO\r\n// Select elements\r\nconst form = document.getElementById(\"submitForm\");\r\nconst makeInput = document.getElementById(\"makeInput\");\r\nconst modelInput = document.getElementById(\"modelInput\");\r\nconst yearInput = document.getElementById(\"yearInput\");\r\n\r\nconst makeP = document.getElementById(\"car-make\");\r\nconst modelP = document.getElementById(\"car-model\");\r\nconst yearP = document.getElementById(\"car-year\");\r\n\r\nconst removeBtn = document.getElementById(\"removeBtn\");\r\nconst submitBtn = document.getElementById(\"submitBtn\");\r\n\r\nremoveBtn.addEventListener(\"click\", removeCar, false);\r\nsubmitBtn.addEventListener(\"click\", addCar, false);\r\n\r\nconst listEle = document.getElementsByTagName(\"ul\")[0];\r\n\r\n\r\n// create new instance for WishList\r\nlet wishList = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nfunction showCarDetails (car) {\r\n    makeP.textContent = car.make;\r\n    modelP.textContent = car.model;\r\n    yearP.textContent = car.year;\r\n\r\n    // enable remove button\r\n    removeBtn.disabled = false;\r\n    removeBtn.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\nfunction updateDOMList () {\r\n    // clear contents of 'ul'\r\n    listEle.innerHTML = \"\";\r\n\r\n    // iterate over each car in wishlist.list\r\n    wishList.list.forEach((car) => {\r\n        // create a new 'li' that displays the car's make and model\r\n        const li = document.createElement(\"li\");\r\n        li.textContent = `${car.make} ${car.model}`;\r\n\r\n        // add a click event listener to the 'li'\r\n        li.addEventListener(\"click\", () => showCarDetails(car));\r\n\r\n        // append each 'li' to the 'ul'\r\n        listEle.appendChild(li);\r\n    });\r\n\r\n}\r\n\r\nfunction addCar (event) {\r\n    event.preventDefault();\r\n    if ((makeInput.value != \"\") && (modelInput.value != \"\") && (yearInput.value != \"\")) {\r\n        console.log(\"Passing the \" + makeInput.value);\r\n        wishList.add(makeInput.value, modelInput.value, yearInput.value);\r\n        updateDOMList();\r\n\r\n        // QOL, clear the input fields\r\n        makeInput.value = \"\";\r\n        modelInput.value = \"\";\r\n        yearInput.value = \"\";\r\n\r\n    }\r\n\r\n    else {\r\n        console.log(\"Input cannot be blank\");\r\n    }\r\n}\r\n\r\n\r\nfunction removeCar () {\r\n    let carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n    wishList.remove(carId);\r\n    updateDOMList();\r\n    makeP.textContent = \"\";\r\n    modelP.textContent = \"\";\r\n    yearP.textContent = \"\";\r\n    removeBtn.disabled = true;\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\nclass WishList {\r\n    constructor () {\r\n        this.list = [];\r\n        this.nextID = 0;\r\n    }\r\n\r\n    add (make, model, year) {\r\n        let newCar = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nextID++, make, model, year);\r\n        this.list.push(newCar);\r\n    }\r\n\r\n    remove (carId) {\r\n        this.list = this.list.filter((car) => car.id != carId);\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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