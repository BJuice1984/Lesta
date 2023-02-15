/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/aboutNews.js":
/*!********************************!*\
  !*** ./src/pages/aboutNews.js ***!
  \********************************/
/***/ (() => {

eval("var gameTemplate = document.getElementById('template-game').content;\nvar newsTemplate = document.getElementById('template-news').content;\nvar gameContainer = document.getElementById('game');\nvar newsContainer = document.getElementById('news');\nfunction createNew(item, template) {\n  var news = new AboutNews(item, template);\n  var newsElement = news.render();\n  return newsElement;\n}\nvar gameElement = new Section({\n  renderer: function renderer(newsItem) {\n    gameElement.addItem(createNew(newsItem, gameTemplate));\n  }\n}, gameContainer);\ngameElement.addItems(gamesSites);\n\n//# sourceURL=webpack://lesta/./src/pages/aboutNews.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/aboutNews.js"]();
/******/ 	
/******/ })()
;