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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./src/js/Article.js\");\n/* harmony import */ var _js_ArticleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ArticleModal */ \"./src/js/ArticleModal.js\");\n/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Modal */ \"./src/js/Modal.js\");\n\r\n\r\n\r\n//object for strategy\r\nconst data = [\r\n    {\r\n        id: 1,\r\n        title: 'Increasing Prosperity With Positive Thinking',\r\n        urlToImage: './src/assets/strategy/1.jpg' ,\r\n        tags: ['Art', 'Design'] ,\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,\r\n        date: '14.11.2022',\r\n    } ,\r\n    {\r\n        id: 2,\r\n        title: 'Motivation Is The First Step To Success' ,\r\n        urlToImage: './src/assets/strategy/3.jpg' ,\r\n        tags: ['Culture'] ,\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,\r\n        date: '14.11.2022',\r\n    },\r\n    {\r\n        id: 3,\r\n        title: 'Success Steps For Your Personal Or Business Life' ,\r\n        urlToImage: './src/assets/strategy/2.jpg' ,\r\n        tags: ['Culture' , 'Design' , 'Art'] ,\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,\r\n        date: '14.11.2022',\r\n    } ,\r\n    {\r\n        id: 4,\r\n        title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back' ,\r\n        urlToImage: './src/assets/strategy/5.jpg' ,\r\n        tags: ['Culture' , 'Design' , 'Art'] ,\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,\r\n        date: '14.11.2022',\r\n    } ,\r\n    {\r\n        id: 5 ,\r\n        title: 'Increasing Prosperity With Positive Thinking' ,\r\n        urlToImage: './src/assets/strategy/4.jpg' ,\r\n        tags: ['Design'] ,\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,\r\n        date: '14.11.2022',\r\n    },\r\n    {\r\n        id: 6 ,\r\n        title: 'Motivation Is The First Step To Success' ,\r\n        urlToImage: './src/assets/strategy/3.jpg' ,\r\n        tags: ['cultures'] ,\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,\r\n        date: '14.11.2022',\r\n    },\r\n    {\r\n        id: 7 ,\r\n        title: 'Success Steps For Your Personal Or Business Life' ,\r\n        urlToImage: './src/assets/strategy/2.jpg' ,\r\n        tags: ['Culture' , 'Design' , 'Art'] ,\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,\r\n        date: '14.11.2022',\r\n    },\r\n]\r\nwindow.onload = function() {\r\n    console.log('hallo');\r\n     //render articles\r\n     if(data){\r\n        renderArticalsToDom();\r\n     }\r\n    //tags\r\n    addTagsClickHandler();\r\n    //modal class\r\n    addToolsClickHandler();\r\n    //burger menu\r\n    showBurgermenu();\r\n    closeBurgerMenu();\r\n\r\n}\r\nconst  addTagsClickHandler = () => {\r\n    document.querySelector('.strategies__tags').addEventListener('click', (e) => {\r\n      if (e.target.classList.contains('tag')) {\r\n        let clickedTag = e.target;\r\n        removeSelectedTags();\r\n        selectClickedTag(clickedTag);\r\n        if(clickedTag.innerText === 'All'){\r\n          showAllStrategies();\r\n        } else {\r\n            filterStrategyBySelectedTag(clickedTag.innerText);\r\n        }\r\n      }\r\n    })\r\n};\r\nconst  removeSelectedTags = () => {\r\n    let tags = document.querySelectorAll('.strategies__tags .tag');\r\n   tags.forEach( tag => {\r\n    tag.classList.remove('tag_selected');\r\n    tag.classList.add('tag_bordered');\r\n   })\r\n   \r\n};\r\nconst selectClickedTag = (clickedTag) => {\r\n    clickedTag.classList.add('tag_selected');\r\n    clickedTag.classList.remove('tag_bordered');\r\n}\r\nconst showAllStrategies = () => {\r\n    let strategies = document.querySelectorAll('.strategies-wrapper .stretegy');\r\n    strategies.forEach(stretegy => {\r\n        stretegy.classList.remove('stretegy_hidden');\r\n    })\r\n}\r\nconst filterStrategyBySelectedTag = (selectedTag) => {\r\n    let strategies = document.querySelectorAll('.strategies-wrapper .stretegy');\r\n    strategies.forEach(stretegy => {\r\n        stretegy.classList.add('stretegy_hidden');\r\n        stretegy.querySelectorAll('.tag').forEach(tag => {\r\n            if(tag.innerText === selectedTag) {\r\n                stretegy.classList.remove('stretegy_hidden');\r\n            }\r\n        })\r\n    })\r\n}\r\nconst renderArticalsToDom = () => {\r\n    let stratagiesWrapper = getSrategiesWrapper();\r\n    generateArticles(data).forEach(article => {\r\n        stratagiesWrapper.append(article.generateArticle())\r\n        }\r\n    )\r\n    addStrategyClickHandler();\r\n}\r\nconst getSrategiesWrapper = () => {\r\n    const strategiesConteiner = document.querySelector('.strategies-wrapper');\r\n    strategiesConteiner.innerHTML = '';\r\n    return strategiesConteiner;\r\n}\r\nconst generateArticles = (data) => {\r\n    let articles = [];\r\n    data.forEach(article => {\r\n        articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(article))\r\n       \r\n    } )\r\n    return articles;\r\n}\r\nconst addToolsClickHandler = () => {\r\n    document.querySelector('.tools__button .button').addEventListener('click',() => {\r\n        generateToolsModal();\r\n    })\r\n    \r\n}\r\nconst generateToolsModal = () => {\r\n    renderModalWindow ('ggggggggggggg');\r\n}\r\nconst renderModalWindow = (content) => {\r\n let modal = new _js_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal('tools-modal');\r\n modal.buildModal(content);\r\n}\r\nconst addStrategyClickHandler = () => {\r\n    document.querySelector('.strategies-wrapper').addEventListener('click', (e)=>{\r\n        if (e.target.closest('.stretegy')){\r\n            let clickedStrategyId = e.target.closest('.stretegy').getAttribute('data-id');\r\n            let clickedStrategyDate = getClickedDate(clickedStrategyId);\r\n            renderArticalModalWindow(clickedStrategyDate);\r\n        }\r\n    })\r\n}\r\nconst getClickedDate = (id) => {\r\n    return data.find(article => article.id == id);\r\n} \r\nconst renderArticalModalWindow = (article) => {\r\n    let modal = new _js_ArticleModal__WEBPACK_IMPORTED_MODULE_1__.ArticleModal('article-modal', article);\r\n    modal.renderModal();\r\n}\r\n//burger menu\r\nconst showBurgermenu = function () {\r\n    document.querySelector('.humburger').addEventListener('click',()=>{\r\n        addShowBurger();\r\n    } )\r\n}\r\nconst addShowBurger = () => {\r\n    document.querySelector('.burger__menu').classList.add('show_window');\r\n}\r\n\r\nconst closeBurgerMenu = () => {\r\n    document.querySelector('.burger__menu').addEventListener('click', (e) => {\r\n       if(e.target.closest('.burger__navigetion' || 0)){\r\n        return\r\n       }else {\r\n        removeBurgerMenu()\r\n       }\r\n    })\r\n}\r\nconst removeBurgerMenu = () => {\r\n    document.querySelector('.burger__menu').classList.remove('show_window');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nclass Article {\r\n    constructor({id, title, urlToImage, tags, ...rest}) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.urlToImage = urlToImage;\r\n        this.tags = tags;\r\n    }\r\n    //Article generation\r\n    generateArticle(){\r\n        let template = '';\r\n        let article = document.createElement('article');\r\n        article.className = 'stretegy blok-shadowed';\r\n        article.setAttribute('data-id' , this.id);\r\n\r\n        this.urlToImage &&\r\n       (template += `<img class=\"stretegy__img\" src=${this.urlToImage} alt=\"strategy\" `) \r\n\r\n       if(this.title ||  this.tags) {\r\n        template += `<div class=\"stratedies__content\">`\r\n        this.title &&\r\n        (template += `<h3 class=\"strategies__name\">${this.title}</h3>`) \r\n        if(this.tags){\r\n            template += `<div class=\"strategies__tags\">`\r\n              this.tags.map(tag => {\r\n                template += ` <span class=\"tag tag_colored\">${tag}</span>`\r\n              })\r\n            template += `</div>`\r\n        }\r\n        template += `</div>`\r\n       }\r\n       article.innerHTML = template;\r\n       return article;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/Article.js?");

/***/ }),

/***/ "./src/js/ArticleModal.js":
/*!********************************!*\
  !*** ./src/js/ArticleModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleModal\": () => (/* binding */ ArticleModal)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/js/Modal.js\");\n\r\n\r\nclass ArticleModal extends _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal {\r\n  constructor (classes,{id, title, urlToImage, tags, content, date}){\r\n        super(classes);\r\n        this.id = id;\r\n        this.title = title;\r\n        this.urlToImage = urlToImage;\r\n        this.tags = tags;\r\n        this.content = content;\r\n        this.date = date;\r\n  }\r\n     //Article Modal generator\r\n     generateContent(){\r\n        let template = '';\r\n        let article = document.createElement('div');\r\n        article.className = 'article-modal__content';\r\n\r\n        this.urlToImage &&\r\n       (template += `<img class=\"stretegy__img\" src=${this.urlToImage} alt=\"strategy\" `) \r\n\r\n       if(this.title ||  this.tags || this.content || this.date) {\r\n        template += `<div class=\"stratedies__content\">`\r\n        this.date &&\r\n        (template += `<p class=\"strategies__date\">${this.date}</p>`) \r\n        this.title &&\r\n        (template += `<h3 class=\"strategies__name\">${this.title}</h3>`)\r\n        this.content &&\r\n        (template += `<p class=\"stratedies__content\">${this.content}</p>`) \r\n        \r\n        if(this.tags){\r\n            template += `<div class=\"strategies__tags\">`\r\n              this.tags.map(tag => {\r\n                template += ` <span class=\"tag tag_colored\">${tag}</span>`\r\n              })\r\n            template += `</div>`\r\n        }\r\n        template += `</div>`\r\n       }\r\n       article.innerHTML = template;\r\n       return article;\r\n    }\r\n    renderModal(){\r\n        let content = this.generateContent();\r\n        super.buildModal(content);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/ArticleModal.js?");

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n class Modal{\r\nconstructor(classes) {\r\n    this.classes = classes;\r\n    this.modal = '';\r\n    this.modalContent = '';\r\n    this.modalCloseBtn = '';\r\n    this.overly = '';\r\n}\r\nbuildModal(content) {\r\n//overly\r\nthis.overly = this.createDomNode(this.overly, 'div', 'overly','overly_modal');\r\n//overly\r\nthis.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);\r\n//modal-content\r\nthis.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');\r\n//modalCloseBtn\r\nthis.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');\r\nthis.modalCloseBtn.innerHTML = '<svg width=\"21\" height=\"22\" viewBox=\"0 0 21 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z\" fill=\"#2F281E\"/></svg>';\r\nthis.setContent(content);\r\nthis.appendModalElements();\r\n//bindEvents\r\nthis.bindEvents();\r\n//open Modal\r\nthis.openModal();\r\n}\r\ncreateDomNode(node, element, ...classes){\r\n//overly\r\nnode = document.createElement(element);\r\nnode.classList.add(...classes);\r\nreturn node\r\n};\r\nsetContent(content){\r\n   if(typeof content === 'string'){\r\n     this.modalContent.innerHTML = content;\r\n   }else {\r\n    this.modalContent.innerHTML = '';\r\n    this.modalContent.append(content);\r\n   }\r\n}\r\nappendModalElements () {\r\n    this.modal.append(this.modalCloseBtn);\r\n    this.modal.append(this.modalContent);\r\n    this.overly.append(this.modal);\r\n}\r\nbindEvents(){\r\n  this.modalCloseBtn.addEventListener('click', this.closeModal);\r\n  this.overly.addEventListener('click', this.closeModal);\r\n}\r\nopenModal(){\r\n  document.body.append(this.overly);\r\n}\r\ncloseModal(e){\r\n  let classes = e.target.classList;\r\n  if(classes.contains('overly') || classes.contains('modal__close-icon')){\r\n    document.querySelector('.overly').remove();\r\n  }\r\n\r\n}\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/Modal.js?");

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