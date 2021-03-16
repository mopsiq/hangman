"use strict";

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
    if(fallCount + 1 === 9) return false
    comparison(wordBlock, document.querySelector('.game__line'), fallCount)
    console.log(fallCount)
  }
})

function initRandomWord(blockWords, blockTitle) {
  currentWordTheme = objectWords[`collection${getRandomValue(objectWords)}`];
  currentTitle = currentWordTheme.title;
  currentWord = currentWordTheme.words[getRandomValue(currentWordTheme.words)];
  blockTitle.textContent = currentTitle;
  addWordsInBlock(blockWords, currentWord, 'line__hidden');
}

function comparison(pressBlock, block, count) {
  let pressWord = pressBlock.textContent.toLowerCase();
  let currentWordInArray = currentWord.split('');
  
  if(!currentWordInArray.includes(pressWord)) {
    pressBlock.classList.add('letter--wrong')
    pressBlock.setAttribute('disabled', 'disabled')
    fallCount ++;
  } 

  if(fallCount + 1 === 9) {
    gameOver()
  }

  for(let child of block.children) {
    if(child.textContent === pressWord) {
      pressBlock.classList.add('letter--truth')
      child.classList.remove('line__hidden')
    } 
  };

  drawCanvas(fallCount);
};


function gameOver() {
  let statsDiv = document.createElement('div');
  let words = document.querySelector('.game__line');
  let wordsGuess = 0,
      wordsWrongess = 0;

  for(let i = 0; i < words.children.length; i++) {
    if(words.children[i].classList.contains('line__hidden')) {
      wordsWrongess += 1;

      words.children[i].classList.remove('line__hidden');
      words.children[i].classList.add('line__truthy')
    } else {
      wordsGuess += 1;
    }
  };

  statsDiv.classList.add('game__stats')
  statsDiv.innerHTML = `
  <div class="game__wrapper">
    <div class="game__guessed">${wordsGuess}</div>
    <div class="game__wrongess">${wordsWrongess}</div>
  </div>
  <button class="btn btn--start">NEW GAME?</button>
  `
  return document.querySelector('.game__inner').append(statsDiv);
}



function drawCanvas(value) {
  let canvas = document.querySelector('.game__canvas');
  let ctx = canvas.getContext('2d');

  switch(value) {
    case 1: 
      ctx.beginPath();
      ctx.lineWidth = 2; 
      ctx.moveTo(50, 0);
      ctx.lineTo(50, 150);
      ctx.moveTo(50, 2)
      ctx.lineTo(250, 2)
      ctx.moveTo(50, 2)
      ctx.lineTo(60, 10);
      ctx.stroke();
      break
    case 2:
      ctx.beginPath();
      ctx.moveTo(200, 2)
      ctx.lineTo(200, 20)
      ctx.stroke();
      break
    case 3:
      ctx.beginPath();
      ctx.arc(200, 30, 10, 0, 2 * Math.PI);
      ctx.stroke();
      break
    case 4:
      ctx.beginPath();
      ctx.moveTo(200, 40)
      ctx.lineTo(200, 80)
      ctx.stroke();
      break
    case 5:
      ctx.beginPath();
      ctx.moveTo(200, 80)
      ctx.lineTo(210, 100)
      ctx.stroke();
      break
    case 6:
      ctx.beginPath();
      ctx.moveTo(200, 80)
      ctx.lineTo(190, 100)
      ctx.stroke();
      break
    case 7:
      ctx.beginPath();
      ctx.moveTo(200, 60)
      ctx.lineTo(210, 50)
      ctx.stroke();
      break
    case 8:
      ctx.beginPath();
      ctx.moveTo(200, 60)
      ctx.lineTo(190, 50)
      ctx.stroke()
      break
  }
}


