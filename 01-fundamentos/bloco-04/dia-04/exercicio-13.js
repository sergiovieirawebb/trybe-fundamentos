/*
  
  Crie uma função que receba um array de inteiros e retorne o inteiro
  que mais se repete.
  
  - Array de teste: [2, 3, 2, 5, 8, 2, 3]
  - Valor esperado no retorno da função: 2
  
*/

function numeroQueMaisRepete(arrayNum) {
  let maiorContagem = 0;
  let numeroQueMaisRepete;

  for (let i = 0; i < arrayNum.length; i += 1) {
    let contagem = 0;

    for (let j = 0; j < arrayNum.length; j += 1) {
      if (arrayNum[i] === arrayNum[j]) {
        contagem += 1;
      }
    }

    if (maiorContagem < contagem) {
      maiorContagem = contagem;
      numeroQueMaisRepete = arrayNum[i];
    }
  }

  return numeroQueMaisRepete;
}

console.log(numeroQueMaisRepete([2, 3, 3, 3, 8, 2, 3]));
