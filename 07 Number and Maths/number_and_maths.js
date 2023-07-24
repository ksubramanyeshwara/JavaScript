/*
Primitive Data Types            Built-in(global) Objects
    number                          Number
    string                          String
    boolean                         Boolean

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

 */

//It will give us some methods
const balanace = new Number(123987);
console.log(balanace);
console.log();

//number converted to string
console.log(typeof balanace.toString());
console.log(balanace.toString().length);
console.log();

//mostly used in e-commerce application - 
console.log(balanace.toFixed(2));//123987.00
console.log();

const otherNumber = 23.8966;
const otherNumber1 = 123.8966;
const otherNumber2 = 1123.8966;
console.log(otherNumber.toPrecision(3));//23.9
console.log(otherNumber1.toPrecision(3));//124
console.log(otherNumber1.toPrecision(4));//123.9
console.log(otherNumber2.toPrecision(3));//it will give first 3 number in decimal and other in exponential 1.12e+3
console.log();

//Reading number in Indian standard
const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-US"));
console.log(hundreds.toLocaleString('en-IN'));
console.log();

//using exponent
const lakh = 100000;
console.log(lakh);
const twoLakh = 2e5;
console.log(twoLakh);
let smallNumber = 1e-3;
console.log(smallNumber);
console.log();

/* ---------------- Maths ---------------- */
//always converts negative number into positive
console.log("Negative to Positive number using Math.abs()",Math.abs(-2));
const round = Math.round(4.5); // .5 or above it will be always equal to 1
const round1 = Math.round(4.3);
console.log(`
Round off using Math.round():
1. ${round}
2. ${round1}
`);

/*
Math.ciel() - it will always give upper value
Math.floor() - it will always give lower value
*/
console.log(Math.ceil(5.2));
console.log(Math.floor(5.7));
console.log();

/*
Math.min() gives minimum value from many values
Math.max() gives maximum value from many values
*/
console.log(Math.min(7, 5, 9, 4));
console.log(Math.max(7, 5, 9, 4));
console.log();

//Math.random() reurns greater than or equal to 0 and less than 1
console.log(Math.random());
console.log(Math.random().toFixed(4));
console.log(Math.random() * 10);
// to avoid getting zero use +1
console.log(Math.random() * 10 + 1);
//to fix the number to number of values like 2, 4 or 6
console.log((Math.random().toFixed(4) * 10) + 1);
//to get single number either use floor or ceil
console.log(Math.floor(Math.random() * 10) + 1);
console.log();

//to get number between minimum and maximum value 
const min = 10;
const max = 20;

/* 
Math.random() - to get random number 
(max - min + 1) - to get number from between the range and +1 to avoid 0
+ min -- to get minimum range
Math.random() * (max - min + 1) + min 

*/ 

console.log(Math.floor(Math.random() * (max - min + 1)) + min);