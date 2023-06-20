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

/***/ "./src/components/Navigation/style.scss":
/*!**********************************************!*\
  !*** ./src/components/Navigation/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/Navigation/style.scss?");

/***/ }),

/***/ "./src/components/ProjectItem/style.scss":
/*!***********************************************!*\
  !*** ./src/components/ProjectItem/style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/ProjectItem/style.scss?");

/***/ }),

/***/ "./src/components/Stub/style.scss":
/*!****************************************!*\
  !*** ./src/components/Stub/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/Stub/style.scss?");

/***/ }),

/***/ "./src/components/TaskItem/style.scss":
/*!********************************************!*\
  !*** ./src/components/TaskItem/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/TaskItem/style.scss?");

/***/ }),

/***/ "./src/components/ListItem.js":
/*!************************************!*\
  !*** ./src/components/ListItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_img_user_item_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/user-item.png */ \"./src/assets/img/user-item.png\");\n\r\n\r\nclass ListItem {\r\n  constructor(appContainer, type, name, code, author, lastchange) {\r\n    this.appContainer = appContainer;\r\n    this.type = type;\r\n    this.name = name;\r\n    this.code = code;\r\n    this.author = author;\r\n    this.lastchange = lastchange;\r\n  }\r\n\r\n  render() {\r\n\r\n    const newElement = (tag, someClass, inner) => {\r\n      const element = document.createElement(`${tag}`);\r\n      element.classList.add(`${someClass}`);\r\n      element.innerHTML = `${inner}`;\r\n\r\n      return element;\r\n    };\r\n\r\n    const div = document.createElement('div');\r\n    div.classList.add('item');\r\n    const container = document.createElement('div');\r\n    container.classList.add('item__container');\r\n\r\n    const name = newElement('p', 'item__name', this.name);\r\n\r\n    if (this.type === 'project') {\r\n      container.append(name);\r\n    } else if (this.type === 'task') {\r\n      const div = document.createElement('div');\r\n      div.classList.add('item__title');\r\n      div.append(name);\r\n      const img = new Image();\r\n      img.classList.add('item__avatar');\r\n      img.src = _assets_img_user_item_png__WEBPACK_IMPORTED_MODULE_0__;\r\n      img.setAttribute('alt', 'аватар пользователя');\r\n      div.append(img);\r\n      \r\n      container.append(div);\r\n    }\r\n\r\n    const details = document.createElement('div');\r\n    details.classList.add('item__details');\r\n    container.append(details);\r\n\r\n    const code = newElement('p', 'item__code', this.code);\r\n    details.append(code);\r\n\r\n    const author = newElement('p', 'item__author', this.author);\r\n    details.append(author);\r\n\r\n    if (this.type === 'task') {\r\n      const button = document.createElement('button');\r\n      button.classList.add('item__status', 'item__status_in-work');\r\n      button.textContent = 'Черновик';\r\n      details.append(button);\r\n    }\r\n\r\n    const lastchange = newElement('p', 'item__last-change', this.lastchange);\r\n    details.append(lastchange);\r\n\r\n\r\n    const button = document.createElement('button');\r\n    button.classList.add('button_secondary', 'button_small');\r\n\r\n    div.append(container);\r\n    div.append(button);\r\n    this.appContainer.append(div);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);\n\n//# sourceURL=webpack:///./src/components/ListItem.js?");

/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/components/Navigation/Navigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/components/Navigation/style.scss\");\n/* harmony import */ var _assets_img_user_item_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/img/user-item.png */ \"./src/assets/img/user-item.png\");\n\r\n\r\n\r\nconst Navigation = (appContainer, buttons) => {\r\n\r\n  const arrayButtons = buttons;\r\n\r\n  const container = document.createElement('nav');\r\n  container.classList.add('navigation');\r\n  \r\n  const list = document.createElement('ul');\r\n  list.classList.add('navigation__list');\r\n\r\n  arrayButtons.forEach(item => {\r\n    const li = document.createElement('li');\r\n    li.classList.add('navigation__item');\r\n\r\n    const button = document.createElement('button');\r\n    button.classList.add('button_primary');\r\n    button.textContent = `${item}`;\r\n\r\n    li.append(button);\r\n    list.append(li);\r\n  });\r\n\r\n  const user = document.createElement('button');\r\n      user.classList.add('navigation__user');\r\n      const img = new Image();\r\n      img.classList.add('navigation__avatar');\r\n      img.src = _assets_img_user_item_png__WEBPACK_IMPORTED_MODULE_1__;\r\n      img.setAttribute('alt', 'аватар пользователя');\r\n      user.append(img);\r\n\r\n  container.append(list);\r\n  container.append(user);\r\n\r\n  appContainer.append(container);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);\n\n//# sourceURL=webpack:///./src/components/Navigation/Navigation.js?");

/***/ }),

/***/ "./src/components/ProjectItem/ProjectItem.js":
/*!***************************************************!*\
  !*** ./src/components/ProjectItem/ProjectItem.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/components/ProjectItem/style.scss\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ListItem */ \"./src/components/ListItem.js\");\n\r\n\r\n\r\nconst ProjectItem = (appContainer) => {\r\n  new _ListItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](appContainer, 'project', 'Название', '#1', 'Иванов И.И. создал 1 час назад', 'Баранов В.В. изменил 1 минуту назад').render();\r\n  new _ListItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](appContainer, 'project', 'Другое Название', '#12', 'Иванов В.И. создал 5 часов назад', 'Баранов А.А. изменил 9 минут назад').render();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectItem);\n\n//# sourceURL=webpack:///./src/components/ProjectItem/ProjectItem.js?");

/***/ }),

/***/ "./src/components/Stub/Stub.js":
/*!*************************************!*\
  !*** ./src/components/Stub/Stub.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/components/Stub/style.scss\");\n\r\n\r\nconst Stub = (appContainer, type) => {\r\n\r\nlet description;\r\n\r\n  switch (type) {\r\n    case 'project':\r\n      description = 'Не создан ни один проект';\r\n      break;\r\n    case 'task':\r\n      description = 'Не создана ни одна задача';\r\n      break;\r\n    default:\r\n      description = 'В данном разделе ничего нет';\r\n  }\r\n\r\n  const container = document.createElement('div');\r\n  container.classList.add('stub__container');\r\n  \r\n  const text = document.createElement('p');\r\n  text.textContent = `${description}`;\r\n\r\n  const button = document.createElement('button');\r\n  button.classList.add('button_primary');\r\n  button.textContent = `Добавить`;\r\n\r\n  appContainer.append(container);\r\n  container.append(text);\r\n  container.append(button);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stub);\n\n//# sourceURL=webpack:///./src/components/Stub/Stub.js?");

/***/ }),

/***/ "./src/components/TaskItem/TaskItem.js":
/*!*********************************************!*\
  !*** ./src/components/TaskItem/TaskItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/components/TaskItem/style.scss\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ListItem */ \"./src/components/ListItem.js\");\n\r\n\r\n\r\nconst TaskItem = (appContainer) => {\r\n  new _ListItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](appContainer, 'task', 'Название', '#1', 'Иванов И.И. создал 1 час назад', 'Баранов В.В. изменил 1 минуту назад').render();\r\n  new _ListItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](appContainer, 'task', 'Другое Название', '#123', 'Иванов В.И. создал 5 часов назад', 'Баранов А.А. изменил 9 минут назад').render();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskItem);\n\n//# sourceURL=webpack:///./src/components/TaskItem/TaskItem.js?");

/***/ }),

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dropdown = (items, button) => {\r\n    if (!button.classList.contains('active')) {\r\n      button.classList.add('active');\r\n      setList(items, button);\r\n      // if (!document.body.querySelector('.dropdown__wrapper')) {\r\n      //   const wrapper = document.createElement('div');\r\n      //   wrapper.classList.add('dropdown__wrapper')\r\n      //   document.body.append(wrapper);\r\n      // }\r\n      \r\n    } else {\r\n      button.classList.remove('active');\r\n      button.querySelector('.dropdown__list').remove();\r\n\r\n\r\n\r\n      //document.body.querySelector('.dropdown__wrapper').remove();\r\n    }\r\n  }\r\n\r\n  const setList = (items, parent) => {\r\n    const dropdownList = document.createElement('ul');\r\n    dropdownList.classList.add('dropdown__list');\r\n    items.forEach(item => {\r\n      const dropdownItem = document.createElement('li');\r\n\r\n      for (const key in item) {\r\n        dropdownItem.classList.add(...item[key]);\r\n        dropdownItem.innerHTML = `<p>${key}</p>`;\r\n        }\r\n\r\n      dropdownList.append(dropdownItem);\r\n    });\r\n    \r\n    parent.append(dropdownList);\r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropdown);\n\n//# sourceURL=webpack:///./src/js/dropdown.js?");

/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ \"./src/js/dropdown.js\");\n\r\n\r\nconst baseClass = 'dropdown__item';\r\nconst editButton = {'Редактировать': [`${baseClass}`]}\r\nconst deleteButton = {'Удалить': [`${baseClass}`, `${baseClass}_delete`]}\r\nconst profileButton = {'Профиль': [`${baseClass}`]}\r\nconst exitButton = {'Выход': [`${baseClass}`]}\r\n\r\n\r\ndocument.addEventListener('click', (e) => {\r\n  // для меню навигации\r\n  if (e.target.classList.contains('button_primary') && !e.target.classList.contains('active') && e.target.parentElement.classList.contains('navigation__item')) {\r\n    for (let item of e.target.closest('.navigation__list').children) {\r\n      item.firstChild.classList.remove('active');\r\n    }\r\n\r\n    if (!e.target.classList.contains('active')) {\r\n      e.target.classList.add('active');\r\n    }\r\n  }\r\n\r\n  // для выпадающего меню профиля\r\n\r\n  if (e.target.classList.contains('navigation__user') || e.target.classList.contains('navigation__avatar')) {\r\n    const button = e.target.classList.contains('navigation__user') ? e.target : e.target.closest('.navigation__user');\r\n    (0,_dropdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([profileButton, exitButton], button);\r\n  }\r\n\r\n  // для выпадающего меню для проектов и задач\r\n  if (e.target.classList.contains('button_small')) {\r\n    const button = e.target;\r\n    (0,_dropdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([editButton, deleteButton], button);\r\n  }\r\n\r\n  // закрывать меню\r\n  const arrayButtons = [document.querySelector('.navigation__user'), ...document.querySelectorAll('.button_small')];\r\n\r\n  arrayButtons.forEach(button => {\r\n    if (button.classList.contains('active') && !e.target.classList.contains('dropdown__list') && e.target !== button\r\n    && e.target.parentElement !== button && !e.target.closest('.dropdown__list')) {\r\n      button.classList.remove('active');\r\n      button.querySelector('.dropdown__list').remove();\r\n    }\r\n  })\r\n});\n\n//# sourceURL=webpack:///./src/js/events.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Stub_Stub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Stub/Stub */ \"./src/components/Stub/Stub.js\");\n/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation/Navigation */ \"./src/components/Navigation/Navigation.js\");\n/* harmony import */ var _components_ProjectItem_ProjectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectItem/ProjectItem */ \"./src/components/ProjectItem/ProjectItem.js\");\n/* harmony import */ var _components_TaskItem_TaskItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TaskItem/TaskItem */ \"./src/components/TaskItem/TaskItem.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ \"./src/js/events.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst appContainer = document.querySelector('#app');\r\nconst arrNavigation = ['Проекты', 'Задачи', 'Пользователи'];\r\n\r\nconst render = (appContainer) => {\r\n  (0,_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(appContainer, arrNavigation);\r\n  (0,_components_ProjectItem_ProjectItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContainer);\r\n  (0,_components_TaskItem_TaskItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appContainer);\r\n  (0,_components_Stub_Stub__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(appContainer, 'project');\r\n  (0,_components_Stub_Stub__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(appContainer, 'task');\r\n}\r\n\r\nrender(appContainer);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/assets/img/user-item.png":
/*!**************************************!*\
  !*** ./src/assets/img/user-item.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/user-item.png\";\n\n//# sourceURL=webpack:///./src/assets/img/user-item.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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