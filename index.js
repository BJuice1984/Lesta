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

/***/ "./src/components/TicTacToe.js":
/*!*************************************!*\
  !*** ./src/components/TicTacToe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TicTacToe\": () => (/* binding */ TicTacToe)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar human = 'X';\nvar bot = 'O';\nvar TicTacToe = /*#__PURE__*/function () {\n  function TicTacToe(game, result, boardSize, template) {\n    var _this = this;\n    _classCallCheck(this, TicTacToe);\n    _defineProperty(this, \"_play\", function (e) {\n      var item = e.target.getAttribute('data-cell');\n      e.target.removeEventListener('click', _this._play);\n      _this._boardArr[item] = human;\n      _this._cellList[item].textContent = \"\".concat(human);\n      _this._turn = _this._turn + 1;\n      if (_this._checkWinner(_this._boardArr, human)) {\n        _this._result.textContent = 'You WIN!';\n        _this._result.classList.add('game__result_type_active');\n        _this._removeEventListeners();\n        return;\n      }\n      if (_this._turn === 9) {\n        _this._result.textContent = 'WOW! DRAW!';\n        _this._result.classList.add('game__result_type_active');\n        return;\n      }\n      _this._bot();\n    });\n    this._size = boardSize;\n    this._game = game;\n    this._result = result;\n    this._template = template;\n    this._turn = 0;\n    this._cellList = [];\n    this._boardArr = [];\n  }\n  _createClass(TicTacToe, [{\n    key: \"_createView\",\n    value: function _createView() {\n      for (var i = 0; i < this._size; i++) {\n        this._cell = this._template.querySelector('.game__cell').cloneNode(true);\n        this._cell.setAttribute('data-cell', i);\n        this._game.appendChild(this._cell);\n        this._cellList.push(this._cell);\n      }\n    }\n  }, {\n    key: \"_addEventListeners\",\n    value: function _addEventListeners() {\n      var _this2 = this;\n      this._cells = Array.from(document.querySelectorAll('.game__cell'));\n      this._cells.forEach(function (cell) {\n        cell.addEventListener('click', _this2._play);\n      });\n    }\n  }, {\n    key: \"_removeEventListeners\",\n    value: function _removeEventListeners() {\n      var _this3 = this;\n      this._cells.forEach(function (cell) {\n        cell.removeEventListener('click', _this3._play);\n      });\n    }\n  }, {\n    key: \"_bot\",\n    value: function _bot() {\n      this._emptyCellArr = [];\n      for (var i = 0; i < this._size; i++) {\n        if (typeof this._boardArr[i] === \"number\") {\n          this._emptyCellArr.push(i);\n        }\n      }\n      var botCell = this._emptyCellArr[Math.floor(Math.random() * this._emptyCellArr.length)];\n      this._boardArr[botCell] = bot;\n      this._cellList[botCell].textContent = \"\".concat(bot);\n      this._turn = this._turn + 1;\n      this._cells[botCell].removeEventListener('click', this._play);\n      if (this._checkWinner(this._boardArr, bot)) {\n        this._result.textContent = 'You lose..';\n        this._result.classList.add('game__result_type_active');\n        this._removeEventListeners();\n        return;\n      }\n    }\n  }, {\n    key: \"_checkWinner\",\n    value: function _checkWinner(board, player) {\n      for (var i = 0; i <= 6; i += 3) {\n        if (board[i] === player && board[i + 1] === player && board[i + 2] === player) return true;\n      }\n      for (var _i = 0; _i < 3; _i++) {\n        if (board[_i] === player && board[_i + 3] === player && board[_i + 6] === player) return true;\n      }\n      if (board[0] === player && board[4] === player && board[8] === player || board[2] === player && board[4] === player && board[6] === player) return true;\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      this._boardArr = Array.from(Array(9).keys());\n      this._cellList = [];\n      this._game.innerHTML = '';\n      this._turn = 0;\n      this._result.classList.remove('game__result_type_active');\n      this._createView();\n      this._addEventListeners();\n    }\n  }]);\n  return TicTacToe;\n}();\n\n//# sourceURL=webpack://lesta/./src/components/TicTacToe.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_TicTacToe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TicTacToe.js */ \"./src/components/TicTacToe.js\");\n\n\nvar game = document.getElementById('game');\nvar result = document.getElementById('result');\nvar resetBtn = document.getElementById('reset');\nvar boardSize = 9;\nvar template = document.querySelector('.template').content;\nvar ticTacToe = new _components_TicTacToe_js__WEBPACK_IMPORTED_MODULE_1__.TicTacToe(game, result, boardSize, template);\nticTacToe.startGame();\nresetBtn.addEventListener(\"click\", function () {\n  return ticTacToe.startGame();\n});\n\n//# sourceURL=webpack://lesta/./src/pages/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesta/./src/pages/index.css?");

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
/******/ 			"index": 0,
/******/ 			"src_blocks_about-news___container_about-news__container_css-src_blocks_about-news___element-d-1a6543": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_blocks_about-news___container_about-news__container_css-src_blocks_about-news___element-d-1a6543"], () => (__webpack_require__("./src/pages/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;