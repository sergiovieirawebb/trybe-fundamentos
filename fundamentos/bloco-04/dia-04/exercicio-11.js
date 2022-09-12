/*

  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    
  - Array de teste: [2, 4, 6, 7, 10, 0, -3];
  - Valor esperado no retorno da função: 6

*/

function indexOfTheMinor(numbers) {
  let indexMinor = 0;

  for (let index in numbers) {
    if (numbers[indexMinor] > numbers[index]) {
      indexMinor = index;
    }
  }

  return indexMinor;
}

console.log(indexOfTheMinor([2, 4, 6, 7, 10, 0, -3]));
