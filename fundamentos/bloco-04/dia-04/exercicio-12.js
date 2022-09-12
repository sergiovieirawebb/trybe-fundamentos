/*

  Crie uma função que receba um array de nomes e retorne o nome com
  a maior quantidade de caracteres.
    
  - Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  - Valor esperado no retorno da função: Fernanda.

*/

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];

  for (let index in palavras) {
    if (maiorPalavra.length < palavras[index].length) {
      maiorPalavra = palavras[index];
    }
  }

  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
