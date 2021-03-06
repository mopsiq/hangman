import {renderingGame, renderingStartPage} from './render.js';

const startMenu = document.querySelector('.screensaver');
const startButton = document.querySelector('.btn--start');
const mainPage = document.querySelector('.page');

const buttonReturn = document.createElement('div');

startButton.addEventListener('click', () => {
  startMenu.classList.add('hidden');
  buttonReturn.classList.add('btn__return')
  mainPage.append(buttonReturn)
  // new enteringLiterals(mainPage)
  renderingGame(mainPage)
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




// class enteringLiterals {
//   constructor(mainBlock) {
//     this.mainBlock = mainBlock;
//     this.init()
//   }

//   init() {
//     let mainDiv = document.createElement('div');
//     let childrenDiv = document.createElement('div');
//     mainDiv.classList.add('game__window');
//     mainDiv.append(childrenDiv);
//     childrenDiv.outerHTML = `
//     <div class="game__letters">
//       <button class="letter">А</button>
//       <button class="letter">Б</button>
//       <button class="letter">В</button>
//       <button class="letter">Г</button>
//       <button class="letter">Д</button>
//       <button class="letter">Е</button>
//       <button class="letter">Ё</button>
//       <button class="letter">Ж</button>
//       <button class="letter">З</button>
//       <button class="letter">И</button>
//       <button class="letter">Й</button>
//       <button class="letter">К</button>
//       <button class="letter">Л</button>
//       <button class="letter">М</button>
//       <button class="letter">Н</button>
//       <button class="letter">О</button>
//       <button class="letter">П</button>
//       <button class="letter">Р</button>
//       <button class="letter">С</button>
//       <button class="letter">Т</button>
//       <button class="letter">У</button>
//       <button class="letter">Ф</button>
//       <button class="letter">Х</button>
//       <button class="letter">Ц</button>
//       <button class="letter">Ч</button>
//       <button class="letter">Ш</button>
//       <button class="letter">Щ</button>
//       <button class="letter">Ъ</button>
//       <button class="letter">Ы</button>
//       <button class="letter">Ь</button>
//       <button class="letter">Э</button>
//       <button class="letter">Ю</button>
//       <button class="letter">Я</button>
//     </div>
//     `;
//     this.mainBlock.append(mainDiv);
//     console.log(mainDiv)
//     mainDiv.addEventListener('click', (e) => this.test(e) )
//   }

//   test(e) {
//     console.log(e.target)
//   }
// }