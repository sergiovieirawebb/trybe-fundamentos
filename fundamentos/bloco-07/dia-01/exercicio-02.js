/*

  1 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

    - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

    - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
      
      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.

      console.log(oddsAndEvens); // será necessário alterar essa linha 😉

*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
};
const sortArray = sortOddsAndEvens();
console.log(`Os números ${sortArray} se encontram ordenados de forma crescente!`);

// com o metodo sort()
const sortArrayBonus = oddsAndEvens.sort((a, b) => {
  return a - b;
});
console.log(`Os números ${sortArrayBonus} se encontram ordenados de forma crescente!`);

// com medoto o sort() em uma linha
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);
