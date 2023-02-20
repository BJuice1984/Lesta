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

/***/ "./src/components/Compare.js":
/*!***********************************!*\
  !*** ./src/components/Compare.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Compare\": () => (/* binding */ Compare)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Compare = /*#__PURE__*/function () {\n  function Compare(item, template, handleCardClick) {\n    _classCallCheck(this, Compare);\n    this._description = item.issueDescription;\n    this._evaluation = item.issueEvaluation;\n    this._handleCardClick = handleCardClick;\n    this._template = template;\n  }\n  _createClass(Compare, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      this._view = this._template.getElementById('table-template').cloneNode(true);\n      this._view.querySelector('.patch-notes__table-body').textContent = this._description;\n      if (this._evaluation === 'good') {\n        this._view.querySelector('.patch-notes__table-image_type_bad').remove();\n        this._view.querySelector('.patch-notes__table-image_type_bug').remove();\n      }\n      if (this._evaluation === 'bad') {\n        this._view.querySelector('.patch-notes__table-image_type_good').remove();\n        this._view.querySelector('.patch-notes__table-image_type_bug').remove();\n      }\n      if (this._evaluation === 'img') {\n        this._view.querySelector('.patch-notes__table-image_type_good').remove();\n        this._view.querySelector('.patch-notes__table-image_type_bad').remove();\n        this._view.querySelector('.patch-notes__table-image_type_bug').addEventListener('click', function () {\n          _this._handleCardClick(_this._view.querySelector('.patch-notes__table-image_type_bug').src);\n        });\n      }\n      return this._view;\n    }\n  }]);\n  return Compare;\n}();\n\n//# sourceURL=webpack://lesta/./src/components/Compare.js?");

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Popup\": () => (/* binding */ Popup)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Popup = /*#__PURE__*/function () {\n  function Popup(popupSelector) {\n    _classCallCheck(this, Popup);\n    this._popup = document.querySelector(popupSelector);\n    this._closePopupByEsc = this._closePopupByEsc.bind(this);\n    this._currentPopupName = this._popup.querySelector('.popup__content_type_name');\n    this._currentPopupLink = this._popup.querySelector('.popup__content_type_image');\n  }\n  _createClass(Popup, [{\n    key: \"openPopup\",\n    value: function openPopup(link) {\n      this._currentPopupLink.src = link;\n      this._currentPopupLink.alt = 'Изображение загружется либо недоступно';\n      this._popup.classList.add('popup_opened');\n      document.addEventListener('keydown', this._closePopupByEsc);\n    }\n  }, {\n    key: \"closePopup\",\n    value: function closePopup() {\n      this._popup.classList.remove('popup_opened');\n      document.removeEventListener('keydown', this._closePopupByEsc);\n    }\n  }, {\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      var _this = this;\n      this._popup.addEventListener('mousedown', function (evt) {\n        if (evt.target.classList.contains('popup_opened')) {\n          _this.closePopup();\n        }\n        if (evt.target.classList.contains('popup__close-button')) {\n          _this.closePopup();\n        }\n      });\n    }\n  }, {\n    key: \"_closePopupByEsc\",\n    value: function _closePopupByEsc(evt) {\n      if (evt.key === 'Escape') {\n        this.closePopup();\n      }\n    }\n  }]);\n  return Popup;\n}();\n\n//# sourceURL=webpack://lesta/./src/components/Popup.js?");

/***/ }),

/***/ "./src/pages/compare.js":
/*!******************************!*\
  !*** ./src/pages/compare.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Section.js */ \"./src/components/Section.js\");\n/* harmony import */ var _components_Compare_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Compare.js */ \"./src/components/Compare.js\");\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Popup */ \"./src/components/Popup.js\");\n/* harmony import */ var _components_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/data.js */ \"./src/components/data.js\");\n\n\n\n\n\nvar template = document.querySelector('.template').content;\nvar container = 'table';\nvar popupElementImage = new _components_Popup__WEBPACK_IMPORTED_MODULE_3__.Popup('.popup_type_image');\npopupElementImage.setEventListeners();\nvar handleCardClick = function handleCardClick(link) {\n  popupElementImage.openPopup(link);\n};\nfunction createNew(item, template) {\n  var issue = new _components_Compare_js__WEBPACK_IMPORTED_MODULE_2__.Compare(item, template, handleCardClick);\n  var issueElement = issue.render();\n  return issueElement;\n}\nvar issueElement = new _components_Section_js__WEBPACK_IMPORTED_MODULE_1__.Section({\n  renderer: function renderer(issueItem) {\n    issueElement.addItem(createNew(issueItem, template));\n  }\n}, container);\nissueElement.addItems(_components_data_js__WEBPACK_IMPORTED_MODULE_4__.compareIssues);\n\n//# sourceURL=webpack://lesta/./src/pages/compare.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"compare": 0,
/******/ 			"src_blocks_about-game___card-container_about-game__card-container_css-src_blocks_about-game__-15185d": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklesta"] = self["webpackChunklesta"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_blocks_about-game___card-container_about-game__card-container_css-src_blocks_about-game__-15185d","src_components_Section_js-src_components_data_js-src_pages_index_css"], () => (__webpack_require__("./src/pages/compare.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;