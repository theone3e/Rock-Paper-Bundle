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

/***/ "./code/main.js":
/*!**********************!*\
  !*** ./code/main.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = \"import './styles.css';\\nimport { getChoices, getComputerChoice, getOutcome } from './game';\\nimport { clearChildren } from './utils';\\nimport Scissors from './assets/scissors.png';\\nimport Rock from './assets/rock.png';\\nimport Paper from './assets/paper.png';\\n\\n\\nfunction makeChoiceImage(choice) {\\n    const image = new Image(100, 100);\\n    if (choice === 'Scissors') {\\n        image.src = Scissors;\\n    } else if (choice === 'Rock') {\\n        image.src = Rock;\\n    } else {\\n        image.src = Paper;\\n    }\\n    image.alt = choice;\\n    return image;\\n}\\n\\n function setControls(content) {\\n    const controls = document.getElementById('controls'); \\n    clearChildren(controls);\\n    controls.appendChild(content);\\n }\\n \\n function setDescription(message) {\\n     const description = document.getElementById('description');\\n     description.innerHTML = message;\\n }\\n\\n function prepareGame() {\\n    setDescription('Select Rock, Paper, or Scissors:');\\n    const choices = getChoices();\\n    const choicesElement = document.createElement('div');\\n    choices.forEach((choice) => {\\n        const choiceImage = makeChoiceImage(choice);\\n        choiceImage.onclick = () => playGame(choice);\\n        choicesElement.appendChild(choiceImage);\\n    });\\n    setControls(choicesElement);\\n }\\n\\n function playGame(userChoice) {\\n     const computerChoice = getComputerChoice();\\n     const outcome = getOutcome(userChoice, computerChoice);\\n     const outcomeElement = document.getElementById('outcome');\\n     clearChildren(outcomeElement);\\n     outcomeElement.appendChild(makeOutcome(userChoice, computerChoice, outcome));\\n }\\n\\n function makeOutcome(userChoice, computerChoice, outcome) {\\n     const userOutcome = makePlayerOutcome('You chose:', userChoice);\\n     const computerOutcome = makePlayerOutcome('Computer chose:', computerChoice);\\n     const gameOutcome = document.createElement('p');\\n     gameOutcome.textContent = outcome;\\n     gameOutcome.setAttribute('class', outcome);\\n     const outcomeElement = document.createElement('div');\\n     outcomeElement.appendChild(gameOutcome);\\n     outcomeElement.appendChild(userOutcome);\\n     outcomeElement.appendChild(computerOutcome);\\n     outcomeElement.setAttribute('class', 'active');\\n    return outcomeElement;\\n }\\n\\n function makePlayerOutcome(message, choice) {\\n     const outcomeElement = document.createElement('div');\\n     const outcomeText = document.createElement('p');\\n     outcomeText.textContent = message;\\n     outcomeElement.appendChild(outcomeText);\\n     const outcomeImage = makeChoiceImage(choice);\\n     outcomeImage.setAttribute('class', 'outcomeImg');\\n     outcomeElement.appendChild(outcomeImage);\\n     outcomeElement.setAttribute('class', 'playerOutcome');\\n     return outcomeElement;\\n }\\n\\nprepareGame();\";\n\n//# sourceURL=webpack://rock-paper-bundle/./code/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./code/main.js");
/******/ 	
/******/ })()
;