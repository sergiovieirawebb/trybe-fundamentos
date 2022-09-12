/* 

  Escreva um programa que defina três números em constantes e retorne true se
  pelo menos uma das três for par. Caso contrário, ele retorna false .
  
  - Bônus: use somente um if .

*/

const numberA = 13;
const numberB = 15;
const numberC = 17;

let isEven = false;

if (numberA % 2 === 0 || numberB % 2 === 0 || numberC % 2 === 0) {
  isEven = true;
}

console.log(isEven);
