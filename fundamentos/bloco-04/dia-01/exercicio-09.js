/* 

  Escreva um programa que defina três números em constantes e retorne true se
  pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
  
  - Bônus: use somente um if .

*/

const numberA = 10;
const numberB = 3;
const numberC = 8;

let isOdd = false;

if (numberA % 2 !== 0 || numberB % 2 !== 0 || numberC % 2 !== 0) {
  isOdd = true;
}

console.log(isOdd);
