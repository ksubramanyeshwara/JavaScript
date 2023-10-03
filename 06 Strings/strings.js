/*
Creating a string using string literals
*/
console.log('String creating using string literals');
//double quote
const languageName = "JavaScript";
//single quote
let numberAsString = '12345';
//backticks
let greeting = `Hello World!`;
console.log(`Strings are ${languageName},  ${numberAsString}, ${greeting}`)
console.log(typeof languageName, typeof numberAsString, typeof greeting);
console.log();


/*
Creating a string using String constructor
*/
console.log('String creating using string constructor');
let booleanValue = String('true or false');
console.log(booleanValue);
console.log(typeof booleanValue);
console.log();


//string to number
console.log('converting string into number');
const myString = "123";
const myNum = Number(myString);
console.log('String to Number', myNum);
console.log(typeof myNum);
console.log();


//number to string
console.log('converting number into string');
const myNum1 = 123;
const myString1 = String(myNum1);
console.log(myString1);
console.log(typeof myString1);


const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

console.log(eval(s2.valueOf())); // returns the number 4