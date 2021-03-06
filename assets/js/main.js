import {renderingGame, renderingStartPage, addWordsInBlock, objectWords, getRandomValue} from './render.js';

const startMenu = document.querySelector('.screensaver');
const startButton = document.querySelector('.btn--start');
const mainPage = document.querySelector('.page');

const buttonReturn = document.createElement('div');

let currentWordTheme = null;
let currentTitle = null;
let currentWord = null;

startButton.addEventListener('click', () => {
  startMenu.classList.add('hidden');
  buttonReturn.classList.add('btn__return')
  mainPage.append(buttonReturn)
  renderingGame(mainPage)
  initRandomWord(document.querySelector('.game__line'));
  console.log(currentWordTheme)
  console.log(currentTitle)
  console.log(currentWord)
});

buttonReturn.addEventListener('click', () => {
  startMenu.classList.remove('hidden');
  buttonReturn.classList.remove('btn__return');
  renderingStartPage(document.querySelector('.game__window'));
});


mainPage.addEventListener('click', (e) => {
  if(e.target.classList.contains('letter')) {
    console.log(e.target)
  }
})

function initRandomWord(block) {
  currentWordTheme = objectWords[`collection${getRandomValue(objectWords)}`];
  currentTitle = currentWordTheme.title;
  currentWord = currentWordTheme.words[getRandomValue(currentWordTheme)];

  addWordsInBlock(block, currentWord);
}