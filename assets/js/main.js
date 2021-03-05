import {addReturnButton, renderingGame} from './render.js';

const startMenu = document.querySelector('.screensaver');
const startButton = document.querySelector('.btn--start');
const mainPage = document.querySelector('.page');

startButton.addEventListener('click', () => {
  addReturnButton(startMenu, mainPage, renderingGame);
})

console.log(startButton.clientHeight)

