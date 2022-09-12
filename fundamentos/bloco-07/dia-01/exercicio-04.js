/*

  4 - Crie uma função que receba uma frase e retorne qual a maior palavra.

*/

const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let biggestWord = words[0];

  for (let index in words) {
    if (biggestWord.length < words[index].length) {
      biggestWord = words[index];
    }
  }
  return biggestWord;
};

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'

// Com o metodo sort()
const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu"));
