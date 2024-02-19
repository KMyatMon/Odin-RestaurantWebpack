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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\r\n\r\nconst contact = () => {\r\n    const body = document.querySelector('body');\r\n    const main = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(body, 'main', 'main');\r\n    const page = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(main,'div', 'contact-page');\r\n    const header = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(page,'h1','header','Contact');\r\n    const boxes = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(page,'div','boxes');\r\n    const box1 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.contactBox)(boxes,\"Shop 1\",\"OdinShopOne@gmail.com\",\"No.34, Street(9), Bayyern Quarter(2), North Hedelberg, GER\");\r\n    const box2 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.contactBox)(boxes,\"Shop 2\",\"OdinShopTwp@gmail.com\",\"No.34, Street(9), Bayyern Quarter(2), North Hedelberg, GER\");\r\n    const box3 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.contactBox)(boxes,\"Shop 3\",\"OdinShopThree@gmail.com\",\"No.34, Street(9), Bayyern Quarter(2), North Hedelberg, GER\");\r\n\r\n    const footer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(page,'footer','link','Made with love by KMM');\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurantwebpack/./src/contact.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactBox: () => (/* binding */ contactBox),\n/* harmony export */   createBox: () => (/* binding */ createBox),\n/* harmony export */   createFoodCard: () => (/* binding */ createFoodCard),\n/* harmony export */   createImg: () => (/* binding */ createImg),\n/* harmony export */   createNavbar: () => (/* binding */ createNavbar),\n/* harmony export */   createTextBox: () => (/* binding */ createTextBox)\n/* harmony export */ });\nconst createTextBox = (parent, type, classes, text ) => {\r\n    const newBox = document.createElement(type);\r\n    newBox.setAttribute(\"class\", classes);\r\n    newBox.textContent = text;\r\n    parent.appendChild(newBox);\r\n    return newBox;\r\n};\r\n\r\nconst contactBox = (parent, Shopname, email, address) => {\r\n  const box = createBox(parent,'div','box');\r\n  const h2 = document.createElement('h2');\r\n  h2.textContent = Shopname;\r\n  const h4 = document.createElement('h4');\r\n  h4.textContent = email;\r\n  const p = document.createElement('p');\r\n  p.textContent = address;\r\n  box.appendChild(h2);\r\n  box.appendChild(h4);\r\n  box.appendChild(p);\r\n\r\n}\r\n\r\nconst createBox = (parent, type, classes) => {\r\n    const newBox = document.createElement(type);\r\n    newBox.setAttribute(\"class\", classes);\r\n    parent.appendChild(newBox);\r\n    return newBox;\r\n};\r\n\r\nconst createNavbar = (parent, name, subElements) => {\r\n    const mainElement = document.createElement(\"nav\");\r\n    mainElement.setAttribute(\"class\", `navbar ${name}` );\r\n    mainElement.setAttribute(\"role\", \"navigation\");\r\n    const elementArray = [];\r\n    subElements.forEach((obj) => {\r\n      const a = document.createElement(\"a\");\r\n      a.setAttribute(\"class\", `${name}__navlink navlink navlink-${obj.class}`);\r\n      a.textContent = obj.text;\r\n      mainElement.appendChild(a);\r\n      elementArray.push(a);\r\n    });\r\n  \r\n    parent.appendChild(mainElement);\r\n    return elementArray\r\n  };\r\n\r\n  const createFoodCard = (parent, food) => {\r\n    const card = createBox(parent,\"div\" ,\"food-card\");\r\n\r\n    createTextBox(card, \"h3\", \"food-card__title\", food.name);\r\n    createTextBox(card, \"h4\", \"food-card__price\", food.price);\r\n    createTextBox(card, \"p\", \"food-card__desc\", food.desc);\r\n    createImg(card, \"img\", \"food-card__img\", food.img);\r\n    \r\n  }\r\n\r\n  const createImg = (parent, type, classes, src) => {\r\n    const newImg = document.createElement(\"img\");\r\n    newImg.setAttribute(\"class\", classes);\r\n    newImg.setAttribute(\"src\", src);\r\n    parent.appendChild(newImg);\r\n    return newImg;\r\n  };\n\n//# sourceURL=webpack://odin-restaurantwebpack/./src/elements.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\r\n\r\nconst home = () => {\r\n    const body = document.querySelector('body');\r\n    const main = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(body, 'main', 'main');\r\n    const bgMain = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(main, 'div', 'bgMain');\r\n    const bg = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(bgMain, 'div', 'bg');\r\n    const title = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(bg, 'h1', 'title', 'ODIN');\r\n    const minititle = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(bg,'h3','mini-title','Restaurant Website');\r\n    const para = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(bg, 'p', 'description','Known as the \"last bastion in the Fiat World of classically rich cuisine\" The Ace of Space has become a galactic institution, recognised for its culinary excellence and unparalleled attention to detail.');\r\n}\n\n//# sourceURL=webpack://odin-restaurantwebpack/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\r\n\r\n\r\n(0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\n\n//# sourceURL=webpack://odin-restaurantwebpack/./src/index.js?");

/***/ }),

/***/ "./src/menu-items.js":
/*!***************************!*\
  !*** ./src/menu-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allitems: () => (/* binding */ allitems),\n/* harmony export */   burgers: () => (/* binding */ burgers),\n/* harmony export */   dessert: () => (/* binding */ dessert),\n/* harmony export */   drinks: () => (/* binding */ drinks),\n/* harmony export */   sides: () => (/* binding */ sides)\n/* harmony export */ });\nconst burgers = [\r\n    {id: \"burger-donald\", name: \"The Hamberder\", desc: \"Great american food\", price: \"49.9k\",img: \"./img/donaldBurger.jpg\"},\r\n    {id: \"burger-beaconcheese\", name: \"Beacon Cheeseburger\", desc: \"16oz beef patty, bacon, cheese\", price: \"54.9k\",img: \"./img/baconcheeseburger.jpeg\"},\r\n    {id: \"burger-canada\", name: \"Hot Hamburg Sandwich\", desc: \"The Hamberder, gravy, topped with cheese\", price: \"54.9k\", img: \"./img/canadaburger.jpg\"},\r\n]\r\n  \r\n  const sides = [\r\n    {id: \"sides-fries\", name: \"French Fries\", desc: \"Thick or thin\", price: \"19.9k\", img: \"./img/sideFries.jpg\"},\r\n    {id: \"sides-canada\", name: \"Poutine\", desc: \"Canadian fries, gravy, cheese\", price: \"22.9k\", img: \"./img/canadasides.jpg\"},\r\n    {id: \"sides-us\", name: \"Mac n Cheese\", desc: \"Maccaroni, béchamel sauce, gruyere, cheddar, emmental\", price: \"24.9k\",img: \"./img/UKsides.jpg\"},\r\n    {id: \"sides-korea\", name: \"Banchan\", desc: \"Bap, gamja-tang, kimchi, namul, bokkeum, danmuji\", price: \"26.9k\", img: \"./img/KoreanSides.jpg\"},\r\n  ]\r\n  \r\n  const drinks = [\r\n    {id: \"drinks-soda\", name: \"Soda Fountain\", desc: \"Free flow soda\", price: \"19.9k\", img:\"./img/drinksSoda.jpg\"},\r\n    {id: \"drinks-guinness\", name: \"Guinness\", desc: \"Irish dry stout\", price: \"33.9k\", img: \"./img/drinksGuinness.jpg\"},\r\n    {id: \"drinks-ipa\", name: \"IPA\", desc: \"Hoppy, bitter, juicy\", price: \"34.9k\", img:\"./img/drinksIPa.jpg\"},\r\n    {id: \"drinks-korea\", name: \"Poktanju\", desc: \"Beer, soju\", price: \"33.9k\", img:\"./img/drinksKorea.jpg\"},\r\n  ]\r\n  \r\n  const dessert = [\r\n    {id: \"dessert-turkey\", name: \"Baklava\", desc: \"Phyllo pastry, honey, pistachio, walnut, hazelnut, \", price: \"37.9k\", img: \"./img/dessertTurkey.jpg\"},\r\n    {id: \"dessert-sa\", name: \"Koeksisters\", desc: \"Deep-fried dough rolls, cold sugar syrup\", price: \"29.9k\",img: \"./img/dessertAUS.jpg\"},\r\n    {id: \"dessert-japan\", name: \"Mochi\", desc: \"Glutinous rice ball, sweet filling\", price: \"39.9k\", img: \"./img/dessertJapan.jpg\"},\r\n    {id: \"dessert-aus\", name: \"Lamingtons\", desc: \"Sponge cake, chocolate coating, coconut sprinkles\", price: \"32.9k\", img: \"./img/dessertAUS.jpg\"},\r\n  ]\r\n\r\n  const allitems = [\r\n    {id: \"drinks-soda\", name: \"Soda Fountain\", desc: \"Free flow soda\", price: \"19.9k\", img:\"./img/drinksSoda.jpg\"},\r\n    {id: \"dessert-sa\", name: \"Koeksisters\", desc: \"Deep-fried dough rolls, cold sugar syrup\", price: \"29.9k\",img: \"./img/dessertAUS.jpg\"},\r\n    {id: \"dessert-japan\", name: \"Mochi\", desc: \"Glutinous rice ball, sweet filling\", price: \"39.9k\", img: \"./img/dessertJapan.jpg\"},\r\n    {id: \"drinks-ipa\", name: \"IPA\", desc: \"Hoppy, bitter, juicy\", price: \"34.9k\", img:\"./img/drinksIPa.jpg\"},\r\n    {id: \"burger-beaconcheese\", name: \"Beacon Cheeseburger\", desc: \"16oz beef patty, bacon, cheese\", price: \"54.9k\",img: \"./img/baconcheeseburger.jpeg\"},\r\n    {id: \"sides-us\", name: \"Mac n Cheese\", desc: \"Maccaroni, béchamel sauce, gruyere, cheddar, emmental\", price: \"24.9k\",img: \"./img/UKsides.jpg\"},\r\n    {id: \"burger-beaconcheese\", name: \"Beacon Cheeseburger\", desc: \"16oz beef patty, bacon, cheese\", price: \"54.9k\",img: \"./img/baconcheeseburger.jpeg\"},\r\n    {id: \"dessert-turkey\", name: \"Baklava\", desc: \"Phyllo pastry, honey, pistachio, walnut, hazelnut, \", price: \"37.9k\", img: \"./img/dessertTurkey.jpg\"},\r\n    {id: \"sides-korea\", name: \"Banchan\", desc: \"Bap, gamja-tang, kimchi, namul, bokkeum, danmuji\", price: \"26.9k\", img: \"./img/KoreanSides.jpg\"}\r\n  ]\n\n//# sourceURL=webpack://odin-restaurantwebpack/./src/menu-items.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ \"./src/menu-items.js\");\n\r\n\r\n\r\nconst populateMenu = (parent, foodArray) => {\r\n    parent.textContent = \"\";\r\n    foodArray.forEach((foodObj) => (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createFoodCard)(parent, foodObj))\r\n  }\r\n\r\nconst menu = () => {\r\n    const body = document.querySelector('body');\r\n    const main = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(body, 'main', 'main');\r\n    const menuMain = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(main, 'div', 'menuMain');\r\n    const title = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(menuMain, 'h1', 'menu-title', 'Menu');\r\n    const menuNav = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createNavbar)(menuMain, \"menu-navbar\", [\r\n        {class: \"burgers\", text: \"Burgers\"},\r\n        {class: \"sides\", text: \"Sides\"},\r\n        {class: \"drinks\", text: \"Drinks\"},\r\n        {class: \"dessert\", text: \"Dessert\"},\r\n      ]);\r\n    const section = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(menuMain, 'section', 'menu-section');\r\n    const menuContent = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(section,'div', 'menu-content');\r\n    const populatedMenu = () => {\r\n        populateMenu(menuContent, _menu_items__WEBPACK_IMPORTED_MODULE_1__.allitems);\r\n    }\r\n    menuNav[0].addEventListener(\"click\", () => populateMenu(menuContent, _menu_items__WEBPACK_IMPORTED_MODULE_1__.burgers));\r\n    menuNav[1].addEventListener(\"click\", () => populateMenu(menuContent, _menu_items__WEBPACK_IMPORTED_MODULE_1__.sides));\r\n    menuNav[2].addEventListener(\"click\", () => populateMenu(menuContent, _menu_items__WEBPACK_IMPORTED_MODULE_1__.drinks));\r\n    menuNav[3].addEventListener(\"click\", () => populateMenu(menuContent, _menu_items__WEBPACK_IMPORTED_MODULE_1__.dessert));\r\n    populatedMenu();\r\n\r\n}\n\n//# sourceURL=webpack://odin-restaurantwebpack/./src/menu.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst tabs = () => {\r\n\r\n    const body = document.querySelector('body');\r\n    const tabs = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(body, 'div', 'tabs');\r\n    const divtabs = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createBox)(tabs,'ul','');\r\n    const div1 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(divtabs, 'li', 'tab', 'Home');\r\n    const div2 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(divtabs, 'li', 'tab', 'Menu');\r\n    const div3 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTextBox)(divtabs, 'li', 'tab', 'Contact');\r\n    \r\n    div1.addEventListener('click', () => {\r\n        clearContent();\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_2__.home)();\r\n    })\r\n    div2.addEventListener('click', () => {\r\n        clearContent();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\r\n    })\r\n    div3.addEventListener('click', () => {\r\n        clearContent();\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.contact)();\r\n    })\r\n}\r\n\r\nfunction clearContent() {\r\n    const body = document.querySelector('body');\r\n    const main = document.querySelector('.main');\r\n    if(main) {\r\n        body.removeChild(main);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://odin-restaurantwebpack/./src/tabs.js?");

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