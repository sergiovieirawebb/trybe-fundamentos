/*
  
  Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso,
  escreva um algoritmo que retorne o maior número primo entre 0 e 50.
  
*/

const number = 50;
let biggestPrimeNumber;

for (let currentNumber = 2; currentNumber <= number; currentNumber += 1) {
  let numberOfDividers = 1;

  for (let currentDivisor = 2; currentDivisor <= number; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      numberOfDividers += 1;
    }
  }

  if (numberOfDividers === 2) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
