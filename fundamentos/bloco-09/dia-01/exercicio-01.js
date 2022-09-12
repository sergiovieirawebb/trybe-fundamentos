const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};


/*

  1 - Dado o código abaixo, qual a ordem de finalização de execução
  das linhas comentadas?

*/

// console.log(planetDistanceFromSun(mars)); // 1
// console.log(planetDistanceFromSun(venus)); // 2
// console.log(planetDistanceFromSun(jupiter)); // 3


/*

  2 - Agora, dado o código abaixo, qual a ordem de finalização de
  execução das linhas comentadas?

*/

// console.log(planetDistanceFromSun(mars)); // 1
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // 3
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // 2


/*

  3 - A função getPlanet abaixo imprime o planeta Marte de forma
  síncrona. Modifique getPlanet, de forma que Marte seja impresso
  assincronamente, depois de 4 segundos.

*/

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4_000);
};

// imprime Marte depois de 4 segundos
// getPlanet();

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

/*

  4 - Suponha que você precise simular uma mensagem enviada do robô
  Curiosity de Marte para a Terra. O Curiosity envia para a Terra a
  temperatura atual em Marte, gastando um tempo variável de até 5 segundos
  para que termine o envio. Crie a função sendMarsTemperature, que imprime
  a temperatura em Marte.

*/

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature4() {
  const temperatureMars = getMarsTemperature();

  setTimeout(() => {
    console.log(`"Mars temperature is: ${temperatureMars} degree Celsius"`);
  }, messageDelay());
}

// imprime "Mars temperature is: 20 degree Celsius", por exemplo
// sendMarsTemperature();


/*

  5 - Agora que você fez a função que envia a temperatura de Marte,
  suponha que você consiga enviar para o robô Curiosity o que você
  deseja fazer, uma vez obtida com sucesso a temperatura em Marte.
  Logo, adicione na função sendMarsTemperature uma callback que contenha
  as ações a serem tomadas em cima da temperatura.

*/

// definição da função sendMarsTemperature...
function sendMarsTemperature5(onSuccess) {
  const currentTemperature = getMarsTemperature();

  setTimeout(() => {
    onSuccess(currentTemperature);
  }, messageDelay());
}

// imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(temperatureInFahrenheit);
// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
// sendMarsTemperature(greet);


/*

  6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem
  de 60% devido ao fato de o robô já estar muito ocupado com outras operações.
  Logo, adicione na função sendMarsTemperature uma outra callback que contenha
  as ações a serem tomadas em caso de falha.

*/

// definição da função sendMarsTemperature...
function sendMarsTemperature6(onSuccess, onError) {
  const currentTemperature = getMarsTemperature();
  const successRate = Math.random() <= 0.6;

  setTimeout(() => {
    try {
      if (successRate) onSuccess(currentTemperature);
      else throw new Error('Robot is busy');
    } catch (error) {
      onError(error);
    }
  }, messageDelay());
}
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);


/*

  7 - Escreva um teste que verifique a chamada da callback de uma função uppercase,
  que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter
  cuidado com os falso-positivos em testes assíncronos.

*/

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = { uppercase };


/*

  8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador
  Pokémon! No laboratório do Professor Carvalho, você é informado de que existem três
  pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função
  getPokemonDetails de modo que ela imprima no console os detalhes do pokémon que você
  escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros caso o
  pokémon não exista no banco de dados, então não se esqueça de tratá-los também, combinado?

*/

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const filter = (pokemon) => pokemon.name === 'Charmander';
const callback = (onError, onSuccess) => {
  if (onSuccess !== null) {
    console.log(onSuccess);
  } else {
    console.log(onError);
  }

};

// getPokemonDetails(filter, callback);

module.exports = { getPokemonDetails };
