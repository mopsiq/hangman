import {renderingGame, renderingStartPage, addWordsInBlock, objectWords, getRandomValue} from './render.js';

const startMenu = document.querySelector('.screensaver');
const startButton = document.querySelector('.btn--start');
const mainPage = document.querySelector('.page');

const buttonReturn = document.createElement('div');

let currentWordTheme,
    currentTitle,
    currentWord = null;
let fallCount = 0;


startButton.addEventListener('click', () => {
  startMenu.classList.add('hidden');
  buttonReturn.classList.add('btn__return')
  mainPage.append(buttonReturn)
  renderingGame(mainPage)
  initRandomWord( document.querySelector('.game__line'), document.querySelector('.game__theme') );
  console.log(currentWord)
});

buttonReturn.addEventListener('click', () => {
  startMenu.classList.remove('hidden');
  buttonReturn.classList.remove('btn__return');
  renderingStartPage(document.querySelector('.game__window'));
});


mainPage.addEventListener('click', (e) => {
  if(e.target.classList.contains('letter')) {
    let wordBlock = e.target;
    comparison(wordBlock, document.querySelector('.game__line'), fallCount)
    console.log(fallCount)
  }
})

function initRandomWord(blockWords, blockTitle) {
  currentWordTheme = objectWords[`collection${getRandomValue(objectWords)}`];
  currentTitle = currentWordTheme.title;
  currentWord = currentWordTheme.words[getRandomValue(currentWordTheme.words)];
  blockTitle.textContent = currentTitle;
  addWordsInBlock(blockWords, currentWord);
}

function comparison(pressBlock, block, count) {
  let pressWord = pressBlock.textContent.toLowerCase();
  let arrayWords = [];
  

  for(let child of block.children) {
    arrayWords.push(child.textContent)

    if(child.textContent === pressWord) {
      pressBlock.classList.add('letter--truth')
      child.classList.remove('line__hidden')
      console.log(child.textContent)
    } 
  }
  
  if(!arrayWords.includes(pressWord)) {
    pressBlock.classList.add('letter--wrong')
    fallCount += 1;
  }

}
