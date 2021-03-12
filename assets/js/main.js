import {renderingGame, renderingStartPage, addWordsInBlock, objectWords, getRandomValue} from './render.js';

const startMenu = document.querySelector('.screensaver');
const startButton = document.querySelector('.btn--start');
const mainPage = document.querySelector('.page');

const buttonReturn = document.createElement('div');

let fallCount = 0;
let currentWordTheme,
    currentTitle,
    currentWord = null;



startButton.addEventListener('click', () => {
  startMenu.classList.add('hidden');
  buttonReturn.classList.add('btn__return')
  mainPage.append(buttonReturn)
  renderingGame(mainPage)
  initRandomWord( document.querySelector('.game__line'), document.querySelector('.game__theme') );
  drawCanvas();
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
  let currentWordInArray = currentWord.split('');

  if(count >= 6) {
    console.log('game over')
    return false;
  } else {
     drawCanvas();
  }

  for(let child of block.children) {
    if(child.textContent === pressWord) {
      pressBlock.classList.add('letter--truth')
      child.classList.remove('line__hidden')
    } 
  };

  if(!currentWordInArray.includes(pressWord)) {
    pressBlock.classList.add('letter--wrong')
    fallCount ++;
  }

};

function drawCanvas() {
  let canvas = document.querySelector('.game__canvas');
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.lineWidth = 2; 
  //1
  ctx.moveTo(50, 0);
  ctx.lineTo(50, 150);
  // 2
  ctx.moveTo(50, 2)
  ctx.lineTo(250, 2)

  ctx.moveTo(50, 2)
  ctx.lineTo(60, 10);
  // 3
  ctx.moveTo(200, 2)
  ctx.lineTo(200, 20)
  ctx.stroke();
  // 4
  ctx.beginPath();
  ctx.arc(200, 30, 10, 0, 2 * Math.PI);
  //5
  ctx.moveTo(200, 40)
  ctx.lineTo(200, 80)
  //6
  ctx.moveTo(200, 80)
  ctx.lineTo(210, 100)
  //7
  ctx.moveTo(200, 80)
  ctx.lineTo(190, 100)
  //8
  ctx.moveTo(200, 60)
  ctx.lineTo(210, 50)
  //9
  ctx.moveTo(200, 60)
  ctx.lineTo(190, 50)
  ctx.stroke()
}


