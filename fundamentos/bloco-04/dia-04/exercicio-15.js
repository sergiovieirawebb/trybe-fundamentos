/*
  
  Crie uma função que receba uma string word e outra string ending. Verifique
  se a string ending é o final da string word . Considere que a string ending
  sempre será menor que a string word .

    - Valor de teste: 'trybe' e 'be'
    - Valor esperado no retorno da função: true
    
    - verificaFimPalavra('trybe', 'be') ;
    - Retorno esperado: true
    
    - verificaFimPalavra('joaofernando', 'fernan') ;
    - Retorno esperado: false
  
*/

function verificaFimPalavra(palavra, fimDaPalavra) {
  let letrasFinaisDaPalavra = '';

  for (let i = palavra.length - fimDaPalavra.length; i < palavra.length; i += 1) {
    letrasFinaisDaPalavra += palavra[i];
  }

  return letrasFinaisDaPalavra === fimDaPalavra;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
