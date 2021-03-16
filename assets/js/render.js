export const objectWords = {
  collection0: {
    title: 'Животные',
    words: ['слон', 'жираф', 'волк', 'заяц', 'медведь']
  },
  collection1: {
    title: 'Одежда',
    words: ['шляпа', 'ботинок', 'носки', 'трусы', 'майка']
  },
  collection2: {
    title: 'Электротехника',
    words: ['компьютер', 'телевизор']
  },
  collection3: {
    title: 'Виды спорта',
    words: ['бокс', 'атлетика', 'плавание', 'футбол', 'теннис']
  }
};

export const getRandomValue = (data) => {
  return Math.trunc(Math.random() * Object.keys(data).length)
};


export function addWordsInBlock(block, word, className) {
  for(let i = 0; i < word.length; i++) {
    let span = document.createElement('span')
    span.classList.add('line')
    span.classList.add(className)
    span.textContent = word[i];
    block.append(span);
  };
};

export function renderingGame(mainBlock) {
  let canvas = document.createElement('canvas');
  let mainDiv = document.createElement('div');
  let childrenDiv = document.createElement('div');
  let lineInputDiv = document.createElement('div');

  canvas.classList.add('game__canvas');
  mainDiv.classList.add('game__window');
  mainDiv.append(canvas)
  mainDiv.append(lineInputDiv);
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
  <div class="game__inner">
    <div class="game__theme">
      <span>text</span>
    </div>
    <div class="game__line">
    </div>
  </div>
  `;
  mainBlock.append(lineInputDiv, mainDiv);
};

export function renderingStartPage(gameClass) {
  gameClass.remove();
};