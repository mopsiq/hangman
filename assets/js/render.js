export function addReturnButton(btn, mainBlock, callback) {
  btn.classList.add('hidden');
  let returnBtn = document.createElement('div');
  returnBtn.classList.add('btn__return');
  mainBlock.append(returnBtn)
  callback(mainBlock);
}


export function renderingGame(mainBlock) {
  let mainDiv = document.createElement('div');
  let childrenDiv = document.createElement('div');
  mainDiv.classList.add('game__window');
  mainDiv.append(childrenDiv);
  childrenDiv.outerHTML = "<p>Text 1</p><p>Text 2</p><p>Text 3</p>";
  mainBlock.append(mainDiv)
}