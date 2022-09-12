/* 

  Faça um programa que retorne o maior de três números. Defina no começo
  do programa três constantes com os valores que serão comparados.
  
*/

const a = 100;
const b = 3000;
const c = 500;
let result = a;

if (b > c && b > a) {
  result = b;
} else if (c > b && c > a) {
  result = c;
}

console.log(result);
