/* 

  Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100)
  em conceitos de A a F. Siga essas regras:
  
  - Porcentagem >= 90 -> A
  - Porcentagem >= 80 -> B
  - Porcentagem >= 70 -> C
  - Porcentagem >= 60 -> D
  - Porcentagem >= 50 -> E
  - Porcentagem < 50 -> F
  
  - O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

*/

const percentageGrade = 69;
let result;

if (percentageGrade < 0 || percentageGrade > 100) {
  result = 'Erro: nota inválida';
} else {
  if (percentageGrade >= 60 && percentageGrade < 70) {
    result = 'D';
  } else if (percentageGrade >= 80 && percentageGrade < 90) {
    result = 'B';
  } else if (percentageGrade >= 70 && percentageGrade < 80) {
    result = 'C';
  } else if (percentageGrade >= 90) {
    result = 'A';
  } else if (percentageGrade >= 50 && percentageGrade < 60) {
    result = 'E';
  } else if (percentageGrade < 50) {
    result = 'F';
  }
}

console.log(result);
