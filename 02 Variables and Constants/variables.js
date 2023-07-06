"use strict" 

//decalring a variable without variable keyword

// message = "Hello World";
//var message = "Hello Again";

//and if we run no error but why?
//in this case value called message is created as "global object"
/*
JavaScript Global Object

** For the Browser - the window is the global object
** for server/NodeJs - the global is the global object

** globalthis - is a single reference to global object accross environments(brower/server)
*/

/*
run on the browser

console.log(window.message);
while working with window, we can ommmit the reference i.e
console.log(message);

without "use strict" you won't able to know which value you are using if you have more than one identifier with same name
*/

/*
JavaScript runs in 2 ways

1. Sloppy mode - Default in Scripts
2. Strict mode - Thros errors and prevents pitfalls of the language 

*/

//message = "Hello World"; 
//ReferenceError: message is not defined. It will help to not change the global object
// var message = "Hello Again";
// console.log(message);

console.log(age);
var age = 10;

//"use strict" can't solve the variable hoisting problem. 
//So to solve this we are gonna use let and const

// console.log(year);
// console.log(year1);
// let year = 76; ReferenceError: Cannot access 'year' before initialization
// const year1 = 76; ReferenceError: Cannot access 'year1' before initialization

//var has the globel scope or it will take function scope
//let and const block scoped
//one variable overriding any variable with same name belong to global scope variable shadowing 

//Template literal (backticks `` )

let userName = "Subramanya";
let greeting = `Hello ${userName}, How are you?`;
console.log(greeting);
console.log(`
This 
string 
spans three lines
`);

// variables are case sensitive
// use camelCase for writing variables
// use is,has for while writing boolean values
// use UPPERCASE while declaring constant
