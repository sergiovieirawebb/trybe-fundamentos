let numbers = [5, 9, 3, 1, 70, 8, 100, 2, 35, 27];

/*

  Utilizando for, descubra qual o maior valor contido no array e imprima-o

*/

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (higherNumber < numbers[index]) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);
