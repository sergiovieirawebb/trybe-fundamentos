/*

  7 - Escreva um teste que verifique a chamada da callback de uma função uppercase,
  que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter
  cuidado com os falso-positivos em testes assíncronos.

*/

// const { uppercase } = require('./9.1');

// it('uppercase "sergio" to equal "SERGIO"', (done) => {
//   uppercase('sergio', (str) => {
//     try {
//       expect(str).toBe('SERGIO');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });


/*

  9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho
  pediu que você o ajude a escrever testes para o sistema que distribui os pokémons.
  Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes
  para a função getPokemonDetails de acordo com as especificações.

*/

const { getPokemonDetails } = require('./9.1');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    const filter = (pokemon) => pokemon.name === 'Pikachu';
    const callback = (onError, onSuccess) => {
      try {
        expect(onError).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    };

    getPokemonDetails(filter, callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é '
      + 'Fire e a habilidade principal dele é Ember';

    const filter = (pokemon) => pokemon.name === 'Charmander';
    const callback = (onError, onSuccess) => {
      try {
        expect(onSuccess).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    };

    getPokemonDetails(filter, callback);
  });
});
