/*

  O fatorial é a multiplicação de um número natural pelos seus
  antecessores, exceto o zero:

  - Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

*/

const number = 4;
let fatorial = number;

for (let index = 1; index < number; index += 1) {
  fatorial *= number - index;
}

console.log(fatorial);
