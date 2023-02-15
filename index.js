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

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Section\": () => (/* binding */ Section)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Section = /*#__PURE__*/function () {\n  function Section(_ref, containerSelector) {\n    var renderer = _ref.renderer;\n    _classCallCheck(this, Section);\n    this._renderer = renderer;\n    this._container = document.querySelector(containerSelector);\n  }\n  _createClass(Section, [{\n    key: \"addItems\",\n    value: function addItems(items) {\n      var _this = this;\n      items.forEach(function (item) {\n        _this._renderer(item);\n      });\n    }\n  }, {\n    key: \"addItem\",\n    value: function addItem(element) {\n      this._container.prepend(element);\n    }\n  }]);\n  return Section;\n}();\n\n//# sourceURL=webpack://lesta/./src/components/Section.js?");

/***/ }),

/***/ "./src/components/aboutNews.js":
/*!*************************************!*\
  !*** ./src/components/aboutNews.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutNews\": () => (/* binding */ AboutNews)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar AboutNews = /*#__PURE__*/function () {\n  function AboutNews(items, template) {\n    _classCallCheck(this, AboutNews);\n    this._name = items.siteName;\n    this._link = items.siteLink;\n    this._description = items.siteDescription;\n    this._opinion = items.siteOpinion;\n    this._template = template;\n  }\n  _createClass(AboutNews, [{\n    key: \"render\",\n    value: function render() {\n      this._view = this._template.getElementById('.about-news__element').cloneNode(true);\n      this._view.querySelector('.about-news__element-name').textContent = this._name;\n      this._view.querySelector('.about-news__element-description').textContent = this._description;\n      if (this._opinion) this._view.querySelector('.about-news__element-opinion').textContent = this._opinion;\n      return this._view;\n    }\n  }]);\n  return AboutNews;\n}();\n\n//# sourceURL=webpack://lesta/./src/components/aboutNews.js?");

/***/ }),

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameNews\": () => (/* binding */ gameNews),\n/* harmony export */   \"gamesSites\": () => (/* binding */ gamesSites)\n/* harmony export */ });\nvar gamesSites = [{\n  siteName: 'Destiny.Games - Разработка и локализация MMORPG (ddestiny.ru)',\n  siteLink: 'https://www.ddestiny.ru/?roistat_visit=8309392',\n  siteDescription: 'Отзывчивый интерфейс, стандартный дизайн. Мне нравится блок новостей в виде не напрягающего легкого списка'\n}, {\n  siteName: 'Game Garden (game-garden.com)',\n  siteLink: 'https://game-garden.com/ru/about/',\n  siteDescription: 'Отзывчивый интерфейс, стандартный дизайн. Мне нравится блок новостей в виде не напрягающего легкого списка'\n}, {\n  siteName: 'Apps Ministry. Разработка и издательство мобильных приложений',\n  siteLink: 'http://appsministry.com/?roistat_visit=8309392',\n  siteDescription: 'Приятный и комортный глазу дизайн. Всё просто и понятно. Вёрстка частично по BEM, но вложенность секций в дивы и секции зашкаливает )). Нет сертификата https'\n}, {\n  siteName: 'Новая игра про динозавров в мире будущего! (101xp.com)',\n  siteLink: 'https://corp.101xp.com/news/novaya-igra-pro-dinozavrov-v-mire-budushchego',\n  siteDescription: 'Современный сайт, довольно красивый. Верстка по BEM. Нравится, что есть классный интерактивный слайдер внизу'\n}, {\n  siteName: '01-SACRALITH — Odd Meter (odd-meter.com)',\n  siteLink: 'http://odd-meter.com/portfolio-item/scralith/',\n  siteDescription: 'Локаничный дизайн современного сайта, но вёрстка кажется мне сложной и симантически не верной. Нравится интерактивность и логотип. Нет сертификата https'\n}, {\n  siteName: 'MMORPG CARNAGE: бесплатная онлайн игра. Лучшая браузерная игра. Играть в многопользовательскую ролевую игру прямо сейчас!',\n  siteLink: 'http://www.carnage.ru/',\n  siteDescription: 'Сайт игры в которую я играл в свое время. Не адаптивный и устаревший дизайн, но классный логотип. Нет сертификата https'\n}];\nvar gameNews = [{\n  siteName: 'Techland выпустила хотфикс для обновления Dying Light 2 1.9.0 (playground.ru)',\n  siteLink: 'https://www.playground.ru/dying_light_2/news/techland_vypustila_hotfiks_dlya_obnovleniya_dying_light_2_1_9_0-1603904',\n  siteDescription: 'Новость отличная и решает задачу донесения информации о фиксах в игре. Это, скорее всего, привлечет новых пользователей или мотивирует, всё таки, попробовать в неё поиграть тех, кто знаком с игрой, но не скачал её',\n  siteOpinion: 'Кратко и по делу, локанично. Есть чёткий список фиксов. Возможно, стоило бы добавить источник, где можно подробнее почитать и скачть обновление'\n}, {\n  siteName: 'Ubisoft покидает творческий директор Assassins Creed 4: Black Flag и Origins — Игромания (igromania.ru)',\n  siteLink: 'https://www.igromania.ru/news/123262/Ubisoft_pokidaet_tvorcheskiy_direktor_Assassins_Creed_4_Black_Flag_i_Origins.html',\n  siteDescription: 'Новость нейтральная, но интересная. Решает задачу простого ознакомления юзера с судьбой игровой компании, но, дополнительно, намекает, что всё не так хорошо в компании, к тому же релиз опять перенесли',\n  siteOpinion: 'Опять таки, кратко - то, что нужно для таких новостей. Я бы добавил фотку Жана Гесдона'\n}, {\n  siteName: 'Геймплей Pacific Drive — автомобильного выживача в зоне отчуждения | StopGame',\n  siteLink: 'https://stopgame.ru/newsdata/56967/geympley_pacific_drive_avtomobilnogo_vyzhivacha_v_zone_otchuzhdeniya',\n  siteDescription: 'Новость интересная, решает задачу ознакомления юзера с геймплеем игры',\n  siteOpinion: 'Хорошо подана, т.к. есть описание, карусель картинок (это очень удобно) и frame с видео на ютуб. Ничего лишнего'\n}, {\n  siteName: 'Need For Speed Most Wanted 2012. Заложник названия — Игры на DTF',\n  siteLink: 'https://stopgame.ru/newsdata/56967/geympley_pacific_drive_avtomobilnogo_vyzhivacha_v_zone_otchuzhdeniya',\n  siteDescription: 'Ностальгическая новость (для олдов, таких как я)). Решает задачу ознакомления с историей игры.',\n  siteOpinion: 'Хорошо подана, т.к. есть описание, карусель картинок (это очень удобно) и frame с видео на ютуб. Ничего лишнего'\n}, {\n  siteName: 'Институт развития интернета выдаст авторам «Смуты» ещё четверть миллиарда рублей и уже думает, как поддерживать игру после успеха на релизе - (comnews24.ru)',\n  siteLink: 'https://comnews24.ru/igry/institut-razvitiya-interneta-vydast-avtoram-smuty-eshhjo-chetvert-milliarda-rublej-i-uzhe-dumaet-kak-podderzhivat-igru-posle-uspeha-na-relize/',\n  siteDescription: 'Нейтральная новость. Решает задачу привлечения внимания к игре за счёт раскрытия бюджета',\n  siteOpinion: 'Нравится, что раскрыта информация о деньгах и я могу примерно представить масштаб игры. Есть картинки и подробности о релизе'\n}];\n\n//# sourceURL=webpack://lesta/./src/components/data.js?");

/***/ }),

/***/ "./src/components/ticTacToe.js":
/*!*************************************!*\
  !*** ./src/components/ticTacToe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TicTacToe\": () => (/* binding */ TicTacToe)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar human = 'X';\nvar bot = 'O';\nvar TicTacToe = /*#__PURE__*/function () {\n  function TicTacToe(game, result, boardSize, template) {\n    var _this = this;\n    _classCallCheck(this, TicTacToe);\n    _defineProperty(this, \"_play\", function (e) {\n      var item = e.target.getAttribute('data-cell');\n      e.target.removeEventListener('click', _this._play);\n      _this._boardArr[item] = human;\n      _this._cellList[item].innerHTML = \"\".concat(human);\n      _this._turn = _this._turn + 1;\n      if (_this._checkWinner(_this._boardArr, human)) {\n        _this._result.innerHTML = 'You WIN!';\n        _this._removeEventListeners();\n        return;\n      }\n      if (_this._turn === 9) {\n        _this._result.innerHTML = 'WOW! DRAW!';\n        return;\n      }\n      _this._bot();\n    });\n    this._size = boardSize;\n    this._game = game;\n    this._result = result;\n    this._template = template;\n    this._turn = 0;\n    this._cellList = [];\n    this._boardArr = [];\n  }\n  _createClass(TicTacToe, [{\n    key: \"_createView\",\n    value: function _createView() {\n      for (var i = 0; i < this._size; i++) {\n        this._cell = this._template.querySelector('.game__cell').cloneNode(true);\n        this._cell.setAttribute('data-cell', i);\n        this._game.appendChild(this._cell);\n        this._cellList.push(this._cell);\n      }\n    }\n  }, {\n    key: \"_addEventListeners\",\n    value: function _addEventListeners() {\n      var _this2 = this;\n      this._cells = Array.from(document.querySelectorAll('.game__cell'));\n      this._cells.forEach(function (cell) {\n        cell.addEventListener('click', _this2._play);\n      });\n    }\n  }, {\n    key: \"_removeEventListeners\",\n    value: function _removeEventListeners() {\n      var _this3 = this;\n      this._cells.forEach(function (cell) {\n        cell.removeEventListener('click', _this3._play);\n      });\n    }\n  }, {\n    key: \"_bot\",\n    value: function _bot() {\n      this._emptyCellArr = [];\n      for (var i = 0; i < this._size; i++) {\n        if (typeof this._boardArr[i] === \"number\") {\n          this._emptyCellArr.push(i);\n        }\n      }\n      var botCell = this._emptyCellArr[Math.floor(Math.random() * this._emptyCellArr.length)];\n      this._boardArr[botCell] = bot;\n      this._cellList[botCell].innerHTML = \"\".concat(bot);\n      this._turn = this._turn + 1;\n      this._cells[botCell].removeEventListener('click', this._play);\n      if (this._checkWinner(this._boardArr, bot)) {\n        this._result.innerHTML = 'You lose..';\n        this._removeEventListeners();\n        return;\n      }\n    }\n  }, {\n    key: \"_checkWinner\",\n    value: function _checkWinner(board, player) {\n      for (var i = 0; i <= 6; i += 3) {\n        if (board[i] === player && board[i + 1] === player && board[i + 2] === player) return true;\n      }\n      for (var _i = 0; _i < 3; _i++) {\n        if (board[_i] === player && board[_i + 3] === player && board[_i + 6] === player) return true;\n      }\n      if (board[0] === player && board[4] === player && board[8] === player || board[2] === player && board[4] === player && board[6] === player) return true;\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      this._boardArr = Array.from(Array(9).keys());\n      this._cellList = [];\n      this._result = '';\n      this._game.innerHTML = '';\n      this._turn = 0;\n      this._createView();\n      this._addEventListeners();\n    }\n  }]);\n  return TicTacToe;\n}();\n\n//# sourceURL=webpack://lesta/./src/components/ticTacToe.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameNews\": () => (/* reexport safe */ _components_data__WEBPACK_IMPORTED_MODULE_4__.gameNews),\n/* harmony export */   \"gamesSites\": () => (/* reexport safe */ _components_data__WEBPACK_IMPORTED_MODULE_4__.gamesSites)\n/* harmony export */ });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_ticTacToe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ticTacToe.js */ \"./src/components/ticTacToe.js\");\n/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ \"./src/components/Section.js\");\n/* harmony import */ var _components_aboutNews_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/aboutNews.js */ \"./src/components/aboutNews.js\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/data */ \"./src/components/data.js\");\n\n\n\n\n\nvar game = document.getElementById('game');\nvar result = document.getElementById('result');\nvar resetBtn = document.getElementById('reset');\nvar boardSize = 9;\nvar template = document.querySelector('.template').content;\nvar ticTacToe = new _components_ticTacToe_js__WEBPACK_IMPORTED_MODULE_1__.TicTacToe(game, result, boardSize, template);\nticTacToe.startGame();\nresetBtn.addEventListener(\"click\", function () {\n  return ticTacToe.startGame();\n});\n\n//# sourceURL=webpack://lesta/./src/pages/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;