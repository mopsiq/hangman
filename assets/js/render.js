// export function addReturnButton(btn, mainBlock, callback) {
//   btn.classList.add('hidden');
//   let returnBtn = document.createElement('div');
//   returnBtn.classList.add('btn__return');
//   mainBlock.append(returnBtn)
//   callback(mainBlock);
// }

let objectWords = {
  collection0: {
    title: 'Животные',
    words: ['слон', 'жираф']
  },
  collection1: {
    title: 'Одежда',
    words: ['шляпа', 'ботинок']
  },
  collection2: {
    title: 'Электротехника',
    words: ['стиральная машинка', 'компьютер']
  },
}

function getWordInPage(obj, block) {
  const randomValue = (data) => {
    return Math.trunc(Math.random() * Object.keys(data).length)
  };
  let currentTheme = obj[`collection${randomValue(obj)}`];
  let currentTitle = currentTheme.title;
  let currentListWords = currentTheme.words;
  let randomWord = currentListWords[randomValue(currentListWords)]
  console.log(randomWord)
}

function getRandomValue(array) {
  
}

getWordInPage(objectWords)

export function renderingGame(mainBlock) {
  let mainDiv = document.createElement('div');
  let childrenDiv = document.createElement('div');
  let lineInputDiv = document.createElement('div');

  mainDiv.classList.add('game__window');
  mainDiv.append(lineInputDiv)
  mainDiv.append(childrenDiv);

  childrenDiv.outerHTML = `
  <div class="game__letters">
    <button class="letter">А</button>
    <button class="letter">Б</button>
    <button class="letter">В</button>
    <button class="letter">Г</button>
    <button class="letter">Д</button>
    <button class="letter">Е</button>
    <button class="letter">Ё</button>
    <button class="letter">Ж</button>
    <button class="letter">З</button>
    <button class="letter">И</button>
    <button class="letter">Й</button>
    <button class="letter">К</button>
    <button class="letter">Л</button>
    <button class="letter">М</button>
    <button class="letter">Н</button>
    <button class="letter">О</button>
    <button class="letter">П</button>
    <button class="letter">Р</button>
    <button class="letter">С</button>
    <button class="letter">Т</button>
    <button class="letter">У</button>
    <button class="letter">Ф</button>
    <button class="letter">Х</button>
    <button class="letter">Ц</button>
    <button class="letter">Ч</button>
    <button class="letter">Ш</button>
    <button class="letter">Щ</button>
    <button class="letter">Ъ</button>
    <button class="letter">Ы</button>
    <button class="letter">Ь</button>
    <button class="letter">Э</button>
    <button class="letter">Ю</button>
    <button class="letter">Я</button>
  </div>
  `;
  lineInputDiv.outerHTML = `
  <div class="game__line">
  <span class="line line__hidden">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  <span class="line">a</span>
  </div>
  `;
  mainBlock.append(lineInputDiv, mainDiv);
}

export function renderingStartPage(gameClass) {
  gameClass.remove();
}