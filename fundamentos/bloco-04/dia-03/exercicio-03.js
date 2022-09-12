/*

  Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que
  retorne a menor. Considere o número de caracteres de cada palavra.  

*/

const array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let i = 1; i < array.length; i += 1) {
  if (biggestWord.length < array[i].length) {
    biggestWord = array[i];
  }

  if (smallestWord.length > array[i].length) {
    smallestWord = array[i];
  }
}

console.log(biggestWord);
console.log(smallestWord);
