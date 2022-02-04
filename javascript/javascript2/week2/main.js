//Doubling of number with map and filter
/*
let numbers = [1, 2, 3, 4];
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}
console.log("The doubled numbers are", newNumbers); // [2, 6]
*/

let numbers = [1, 2, 3, 4];
const newNumbers = numbers.filter((number) => number % 2 === 1);
const doubleNumbers = newNumbers.map((newNumber) => newNumber * 2);
console.log("The doubled numbers are", doubleNumbers);
