/* 

  Faça um programa que defina três constantes com os valores dos três
  ângulos internos de um triângulo. Retorne true se os ângulos representarem
  os ângulos de um triângulo e false , caso contrário. Se algum ângulo for
  inválido o programa deve retornar uma mensagem de erro.
  
*/

const angleA = 90;
const angleB = 45;
const angleC = 45;

const allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
const isTriangle = angleA + angleB + angleC === 180;

let result = 'Erro: ângulo inválido';

if (allAnglesArePositives) {
  if (isTriangle) {
    result = true;
  } else {
    result = false;
  }
}

console.log(result);
