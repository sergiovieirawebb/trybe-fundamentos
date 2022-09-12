/*

  Para os exercícios a seguir, use o seguinte código.

*/

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*

  1 - Crie uma função para adicionar o turno da noite na lesson2.
  Essa função deve possuir três parâmetros, sendo eles: o objeto a ser
  modificado, a chave que deverá ser adicionada e o valor dela.

*/

const addEntrieInObject = (object, key, value) => {
  return object[key] = value;
};
addEntrieInObject(lesson2, 'turno', 'noite'); console.log(lesson2);

/*

  2 - Crie uma função para listar as keys de um objeto.
  Essa função deve receber um objeto como parâmetro.

*/

const objectKeysList = (object) => {
  return Object.keys(object);
};
console.log(objectKeysList(lesson3));

/*

  3 - Crie uma função para mostrar o tamanho de um objeto.

*/

const objectSize = (object) => {
  return Object.keys(object).length;
};
console.log(objectSize(lesson3));

/*

  4 - Crie uma função para listar os valores de um objeto.
  Essa função deve receber um objeto como parâmetro.

*/

const listObjectValues = (object) => {
  return Object.values(object);
};
console.log(listObjectValues(lesson1));

/*

  5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas
  através do Object.assign. Cada chave desse novo objeto será uma aula,
  sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando
  console.log(allLessons), a saída deverá ser a seguinte:

*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/*

  6 - Usando o objeto criado no exercício 5, crie uma função que retorne o
  número total de estudantes em todas as aulas.

*/

const totalStudents = (lessons) => {
  const lesson = Object.keys(lessons);
  let numberStudentsInLesson = 0;

  for (let index in lesson) {
    numberStudentsInLesson += lessons[lesson[index]].numeroEstudantes;
  }
  return numberStudentsInLesson;
};
console.log(`Número total de estudantes: ${totalStudents(allLessons)}`);

/*

  7 - Crie uma função que obtenha o valor da chave de acordo com a sua
  posição no objeto. Por exemplo:

    - console.log(getValueByNumber(lesson1, 0));
    - Output: 'Matématica'

*/

const getValueByNumber = (lesson, key) => {
  return Object.values(lesson)[key];
};
console.log(getValueByNumber(lesson1, 0));

/*

  8 - Crie uma função que verifique se o par (chave / valor) existe na função.
  Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da
  chave e o valor da chave. Exemplo:

    - console.log(verifyPair(lesson3, 'turno', 'noite'));
    - Output: true,
    
    - console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
    - Output: false

*/

const verifyPair = (object, key, value) => {
  const objectEntries = Object.entries(object);
  let isEqual = false;

  for (let index in objectEntries) {
    if (objectEntries[index][0] === key && objectEntries[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));


