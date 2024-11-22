// [].map()
// Squaring numbers
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => {
  return num * num;
});
// console.log(squaredNumbers);

// numbers to binary
function binarEQ(num) {
  return num.toString(2);
}
const binaryQuual = numbers.map(binarEQ);
// console.log(binaryQuual);

// converting strings to uppercase and capitalized string
const strings = ["hello", "world", "javascript"];
const uppercasedStrings = strings.map((string) => {
  //   return strings.toUpperCase();
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});
// console.log(uppercasedStrings);

// Extracting specific properties from array of objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 2, name: "Bob", age: 30 },
];
const usersName = users.map((user) => {
  return user.name;
});
// console.log(usersName);

// Using Index in the Callback
const userPosition = users.map((users, index) => {
  return `${users.name} position is ${index + 1}`;
});
// console.log(userPosition);

// [].filter()

// Filtering Even Numbers
const numbersOne = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersOne.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumbers);

// Filtering Strings Longer than 3 Characters
const words = ["apple", "bat", "banana", "cat", "dog"];
const longerWords = words.filter((word) => {
  return word.length > 3;
});
console.log(longerWords);

// Filtering Array of Objects by Property
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 60 },
];
const grade = students
  .filter((student) => student.grade >= 80)
  .map((student) => `${student.name} (${student.grade})`);

console.log(`Students with distinction are ${grade}`);

// Filtering array of objects by property value
const userss = [
  { id: 1, name: "John Doe", active: true },
  { id: 2, name: "Jane Doe", active: false },
  { id: 3, name: "Bob Smith", active: true },
];

const activeUsers = userss
  .filter((user) => user.active)
  .map((user) => `${user.name}`);
console.log(`Active users are ${activeUsers}`);

// [].reduce()
const arrNumbers = [2, 3, 4, 5, 7, 9];

// normal way
function noramlSum(arrNumbers) {
  let sum = 0;
  for (let index = 0; index < arrNumbers.length; index++) {
    sum = sum + arrNumbers[index];
  }
  return sum;
}
console.log(noramlSum(arrNumbers));

function normalMax(num) {
  let max = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}
console.log(normalMax(arrNumbers));

const reduceSum = arrNumbers.reduce((acc, curr) => {
  return acc + curr;
});
console.log(reduceSum);

const reduceMax = arrNumbers.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
});
console.log(reduceMax);
