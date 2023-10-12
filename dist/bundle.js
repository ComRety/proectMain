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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://proectmain/./src/style.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.js */ \"./src/js/message.js\");\n/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.js */ \"./src/js/order.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ \"./src/js/popup.js\");\n/* harmony import */ var _read_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./read.js */ \"./src/js/read.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet show = document.getElementById('all-brands');\r\nshow.addEventListener('click', openBrands);\r\nfunction openBrands() {\r\n    let forFrid = document.getElementById('grid-for-swiper');\r\n    forFrid.style.height = 'auto';\r\n    show.style.display = 'none';\r\n    let hides = document.getElementById('hide-brands');\r\n    hides.style.display = 'inline';\r\n}\r\n\r\nlet hide = document.getElementById('hide-brands');\r\nhide.addEventListener('click', hideBrands);\r\nfunction hideBrands() {\r\n    let forFrid = document.getElementById('grid-for-swiper');\r\n    forFrid.style.height = '170px';\r\n    show.style.display = 'inline';\r\n    let hides = document.getElementById('hide-brands');\r\n    hides.style.display = 'none';\r\n}\r\n\r\nlet showTechnic = document.getElementById('all-technic');\r\nshowTechnic.addEventListener('click', openTechnic);\r\nfunction openTechnic() {\r\n    let forFrid = document.getElementById('grid-technic');\r\n    forFrid.style.height = 'auto';\r\n    showTechnic.style.display = 'none';\r\n    let hides = document.getElementById('hide-technic');\r\n    hides.style.display = 'inline';\r\n}\r\n\r\nlet hideTechnic = document.getElementById('hide-technic');\r\nhideTechnic.addEventListener('click', hideTechni);\r\nfunction hideTechni() {\r\n    let forFrid = document.getElementById('grid-technic');\r\n    forFrid.style.height = '170px';\r\n    showTechnic.style.display = 'inline';\r\n    let hides = document.getElementById('hide-technic');\r\n    hides.style.display = 'none';\r\n}\n\n//# sourceURL=webpack://proectmain/./src/js/index.js?");

/***/ }),

/***/ "./src/js/message.js":
/*!***************************!*\
  !*** ./src/js/message.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCall: () => (/* binding */ addCall),\n/* harmony export */   closemessageModal: () => (/* binding */ closemessageModal),\n/* harmony export */   removeCall: () => (/* binding */ removeCall)\n/* harmony export */ });\nfunction addCall () {\r\n    document.getElementById('modal-call').classList.add('call');\r\n}\r\n\r\nfunction removeCall () {\r\n    document.getElementById('modal-call').classList.remove('call');\r\n}\r\n\r\nlet message = document.getElementById('massagge-pop');\r\nmessage.addEventListener(\"click\", addCall);\r\n\r\nlet messageClose = document.getElementById('button-close-call');\r\nmessageClose.addEventListener(\"click\", removeCall);\r\n\r\nlet messageOne = document.getElementById('button-massage');\r\nmessageOne.addEventListener(\"click\", addCall);\r\n\r\nconst closemessageModal = event => {\r\n    let target = event.target;\r\n\r\n    if (target === messageElem) {\r\n        messageElem.classList.remove('call');\r\n    }\r\n}\r\n\r\nlet messageElem = document.getElementById('modal-call');\r\nmessageElem.addEventListener(\"click\", closemessageModal);\n\n//# sourceURL=webpack://proectmain/./src/js/message.js?");

/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addOrder: () => (/* binding */ addOrder),\n/* harmony export */   closeOrderModal: () => (/* binding */ closeOrderModal),\n/* harmony export */   removeOrder: () => (/* binding */ removeOrder)\n/* harmony export */ });\nfunction addOrder () {\r\n    document.getElementById('order-call').classList.add('order');\r\n}\r\n\r\nfunction removeOrder () {\r\n    document.getElementById('order-call').classList.remove('order');\r\n}\r\n\r\nlet order = document.getElementById('button-call');\r\norder.addEventListener(\"click\", addOrder);\r\n\r\nlet orderOne = document.getElementById('call-popup');\r\norderOne.addEventListener(\"click\", addOrder);\r\n\r\nlet orderClose = document.getElementById('button-close-order');\r\norderClose.addEventListener(\"click\", removeOrder);\r\n\r\nconst closeOrderModal = event => {\r\n    let target = event.target;\r\n\r\n    if (target === orderElem) {\r\n        orderElem.classList.remove('order');\r\n    }\r\n}\r\n\r\nlet orderElem = document.getElementById('order-call');\r\norderElem.addEventListener(\"click\", closeOrderModal);\n\n//# sourceURL=webpack://proectmain/./src/js/order.js?");

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addOpen: () => (/* binding */ addOpen),\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   removeOpen: () => (/* binding */ removeOpen)\n/* harmony export */ });\nfunction addOpen () {\r\n    document.getElementById('modal').classList.add('open');\r\n}\r\n\r\nfunction removeOpen () {\r\n    document.getElementById('modal').classList.remove('open');\r\n}\r\n\r\nlet burger = document.getElementById('header__button-burger');\r\nburger.addEventListener(\"click\", addOpen);\r\n\r\nlet close = document.getElementById('close');\r\nclose.addEventListener(\"click\", removeOpen);\r\n\r\nconst closeModal = event => {\r\n    let target = event.target;\r\n\r\n    if (target === modalElem) {\r\n        modalElem.classList.remove('open');\r\n    }\r\n}\r\n\r\nlet modalElem = document.getElementById('modal');\r\nmodalElem.addEventListener(\"click\", closeModal);\n\n//# sourceURL=webpack://proectmain/./src/js/popup.js?");

/***/ }),

/***/ "./src/js/read.js":
/*!************************!*\
  !*** ./src/js/read.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeText: () => (/* binding */ closeText),\n/* harmony export */   readAlls: () => (/* binding */ readAlls)\n/* harmony export */ });\nfunction readAlls () {\r\n    let read = document.getElementById('inBlock');\r\n    read.style.height = 'auto';\r\n    readAll.style.display = 'none';\r\n    let readClose = document.getElementById('readClose');\r\n    readClose.style.display = 'inline';\r\n}\r\n\r\nlet readAll = document.getElementById('readAll');\r\nreadAll.addEventListener(\"click\", readAlls);\r\n\r\nif (matchMedia) {\r\n    let screen = window.matchMedia(\"(min-width:768px)\");\r\n    screen.addEventListener(\"change\", closeText);\r\n    closeText(screen);\r\n}\r\n\r\nfunction closeText(screen) {\r\n    if (screen.matches) {\r\n        let readClose = document.getElementById('readClose');\r\n        readClose.addEventListener(\"click\", function() {\r\n        let read = document.getElementById('inBlock');\r\n        read.style.height = '160px';\r\n        readClose.style.display = 'none';\r\n        readAll = document.getElementById('readAll');\r\n        readAll.style.display = 'inline';\r\n    })} else {\r\n            let readClose = document.getElementById('readClose');\r\n            readClose.addEventListener(\"click\", function() {\r\n            let read = document.getElementById('inBlock');\r\n            read.style.height = '100px';\r\n            readClose.style.display = 'none';\r\n            readAll = document.getElementById('readAll');\r\n            readAll.style.display = 'inline';\r\n})\r\n    }\r\n}\n\n//# sourceURL=webpack://proectmain/./src/js/read.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resizableSwiper: () => (/* binding */ resizableSwiper)\n/* harmony export */ });\nconst resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {\r\n  let swiper;\r\n\r\n  breakpoint = window.matchMedia(breakpoint);\r\n\r\n  const enableSwiper = function(className, settings) {\r\n    swiper = new Swiper(className, settings);\r\n  }\r\n\r\n  const checker = function() {\r\n    if (breakpoint.matches) {\r\n      return enableSwiper(swiperClass, swiperSettings);\r\n    } else {\r\n      if (swiper !== undefined) swiper.destroy(true, true);\r\n      return;\r\n    }\r\n  };\r\n\r\n  breakpoint.addEventListener('change', checker);\r\n  checker();\r\n}\r\n\r\nresizableSwiper(\r\n  '(max-width: 768px)',\r\n  '.swiper-container',\r\n  {\r\n      pagination: {\r\n          el: '.swiper-pagination',\r\n          clickable: true,\r\n      },\r\n      spaceBetween: 15,\r\n  \r\n      loop: true,\r\n  }\r\n);\n\n//# sourceURL=webpack://proectmain/./src/js/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;