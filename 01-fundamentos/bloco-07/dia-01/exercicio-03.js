/*

  1 - Crie uma função que receba um número e retorne seu fatorial.

  Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

*/

const fatorial = (number) => {
  for (let index = number - 1; index > 0; index -= 1) {
    number *= index;
  }
  return number;
};

console.log(fatorial(5));
