/*

  1 -  Dada uma matriz, transforme em um array.

*/

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, value) => {
    return acc.concat(value);
  }, []);
}
// console.log(flatten());

/*

  - Para os exercícios 2, 3 e 4 considere o seguinte array 'books':

*/

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/*

  2 - Crie uma string com os nomes de todas as pessoas autoras.

*/

function reduceNames() {
  const result = books.reduce((acc, book) => {
    acc.push(book.author.name);
    return acc;
  }, []);

  return result.join(', ');
}
// console.log(reduceNames());

/*

  3 - Calcule a média de idade que as pessoas autoras tinham quando
  seus respectivos livros foram lançados.

*/

function averageAge() {
  const numberOfBooks = books.length;

  const sumOfAges = books.reduce((acc, book) => {
    return acc + (book.releaseYear - book.author.birthYear);
  }, 0);

  return sumOfAges / numberOfBooks;
}
// console.log(averageAge());

/*

  4 - Encontre o livro com o maior nome.

*/

function longestNamedBook() {
  return books.reduce((acc, book) =>
    (acc.name.length > book.name.length) ? acc : book);
}
// console.log(longestNamedBook());

/*

  5 - Dada o array de nomes, retorne a quantidade de vezes em que
  aparecem a letra a maiúscula ou minúscula.

*/

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const lettersA = names.join('').split('').reduce((acc, letterA) =>
    (letterA === 'A' || letterA === 'a') ? acc + letterA : acc);

  return lettersA.length;
}
// console.log(containsA());


/*

  6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde
  cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para
  isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos,
  aqui além de reduce será necessário utilizar também a função map.

*/


const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return grades.reduce((acc, grade, index, array) => {
    acc.push({
      name: students[index],
      average: grade.reduce((acc, number) => {
        return acc + number;
      }) / array[index].length
    });

    return acc;
  }, []);
}
console.log(studentAverage());
