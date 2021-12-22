/* 

  Faça um programa que, dado um valor definido numa constante, retorne "positive"
  se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
  
*/

const number = 1;
let result = 'zero';

if (number > 0) {
  result = 'positive';
} else if (number < 0) {
  result = 'negative';
}

console.log(result);
