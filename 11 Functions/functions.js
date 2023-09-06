/* 
Function Declaration
*/
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("K Subramanyeshwara"));


/*
Function Expression
*/
// const greet = function(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Ramya"));


/*
Function Constructor
*/
// const greet = new Function('name', 'return `Hello, ${name}!`');
// console.log(greet("Sumanth"));


/*
Immediately Invoked Function Expression (IIFE)
*/
// (function() {
//   const message = "I'm an IIFE!";
//   console.log(message);
// })();


/*
Named Function Expression
*/
// const multiply = function multiplyNumbers(a, b) {
//   return a * b;
// };
// console.log(multiply(5, 3));



/*
Arrow Function Expression (ES6+)
*/
// const greet = (name) => {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Meghnana"));


/*
ES6+ Method Declaration (Class Methods)
*/
// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
// }
// const calc = new Calculator();
// console.log(calc.add(2, 3));


/*
Generator Function (ES6+)
*/
// function* countToThree() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const iterator = countToThree();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

/**
 * Calling a function
*/
// Function declaration
// function hello() {
//   console.log("Hello World!");
// }
// Function call
// hello();


/**
 * JavaScript function parameter/arguments
*/
// function fullName(firstname, lastname) {
//   console.log(firstname + " " + lastname);
// }
// fullName("Stephen", "Hawking");
// fullName("Stephen", "William", "Hawking");
// fullName("Stephen");


/**
 * function return
*/
// function multiply(a, b) {
//   return a * b;
// }
// var value = multiply(4, 6);
// console.log("Multiplication of 2 numbers:",value);


/**
 * specifying default value to the function parameter
*/
// function userLoginMessage(username = "user") {
//     return `${username} just logged in`;
// }
// let result = userLoginMessage("Subramanyeshwara");
// let result1 = userLoginMessage();
// console.log(result);
// console.log(result1);


/**
 * passing multiple values in an function
*/
function calculateCartPrice(...cartItems) {
    return cartItems;
}
let cartItems = calculateCartPrice(500, 700, 300, 900);
console.log(cartItems);
// We can also use rest operator after taking some values
function calculateCartPrice1(cartItems1, cartItems2, ...cartItemsN) {
    return cartItemsN;
}
let cartItems1 = calculateCartPrice1(500, 700, 300, 900);
console.log(cartItems1);