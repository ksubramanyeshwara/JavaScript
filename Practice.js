/*
Spread Operator
*/

//function calls
function additon(num1, num2, num3) {
  return num1 + num2 + num3;
}
const evenNumbers = [2, 4, 6];
const resultAddition = additon(...evenNumbers);
console.log(resultAddition); // 12

//concatinating arrays
const arrayOne = [1, 2, 3];
const arrayTwo = ["Subramanya", true];
const concatedArray = [...arrayOne, ...arrayTwo];
console.log(concatedArray); // [1, 2, 3, 'Subramanya', true]

//copying an array(Shallow Copy)
const oddNumbers = [false, 3, 5];
const moreOddNumbers = [...oddNumbers, 7, 9];
console.log(moreOddNumbers); //  [false, 3, 5, 7, 9]

// Object literals
const person = {
  userName: "K Subramanyeshwara",
  age: 27,
};
const personMissingDetails = {
  liveIn: "Mysuru",
  earning: 75000,
};
const user = { ...person, ...personMissingDetails };
console.log(user); // {userName: 'K Subramanyeshwara', age: 27, liveIn: 'Mysuru', earning: 75000}

/*
Rest Operator
*/

// function with rest parameter
function sumAll(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
const result = sumAll(1, 2, 3, 4, 5);
console.log(result); // 15

// array destructuring with rest paramters
let names = ["Krishna", "Sujata", "Meghana", "Sumanth"];
const [father, mother, ...remaining] = names;
console.log(father); // Krishna
console.log(mother); // Sujata
console.log(remaining); // ['Meghana', 'Sumanth']

// object destructuring with rest paramters
const userOne = {
  userName: "Ramya",
  age: 33,
  place: "Dubai",
  job: "Home maker",
  socialMedia: true,
};
let { userName: fullname, ...remainings } = userOne;
console.log(fullname); // Ramya
console.log(remainings); // {age: 33, place: 'Dubai', job: 'Home maker', socialMedia: true}
