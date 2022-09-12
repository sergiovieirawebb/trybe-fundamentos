/*

1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

*/

function changeText() {
  const paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerText = 'Ganhando R$ 7000,00 trabalhando por conta';
}
changeText();

/*

  2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109))

*/

function changeSquareToGreen() {
  const squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.backgroundColor = 'rgb(76,164,109)';
}
changeSquareToGreen();

/*

  3. Crie uma função que mude a cor do quadrado vermelho para branco.

*/

function changeSquareToWhite() {
  const squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.backgroundColor = 'rgb(255, 255, 255)';
}
changeSquareToWhite();

/*

  4. Crie uma função que corrija o texto da tag <h1>

*/

function correctTitle() {
  const title = document.getElementsByClassName('title');
  title[0].innerText = 'Exercício 5.1 - JavaScript';
}
correctTitle();

/*

  5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

*/

function paragraphUpperCase() {
  const paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerText = paragraph.innerText.toUpperCase();
}
paragraphUpperCase();

/*

  6. Crie uma função que exiba o conteúdo de todas a tags <p> no console.

*/

function showParagraphs() {
  const paragraphs = document.getElementsByTagName('p');
  for (let content of paragraphs) {
    console.log(content.innerText);
  }
}
showParagraphs();
