//declaring a varibale
let variableName;
let message;

//declaring multiple varibale in one line but not recommended 
//let variableName1, variableName2, variableName3;

//rewriting it as
let variableName1;
let variableName2;
let variableName3;

//The console.log() method outputs a message to the web console.
console.log(variableName);
console.log(message);

//Initializing a Variable 
message = "Hello World!";
console.log(message); 

//Declaring and Initializing a Variable at the same time
let info = "Hello World!";
console.log(info); //Hello World!

info = "Learnig JavaScript Variables";
console.log(info); //Learnig JavaScript Variables

//Variable scope in JavaScript

//JavaScript Local Scope
function print(){
    let localVariable = "I am local variable";
    console.log(localVariable);
}
print();//I am local variable
//console.log(localVariable); /*since message variable is in local scope, ReferenceError: message is not defined*/

//JavaScript Global Scope
var globalVariable = "I am global variable";
function result(){
    console.log(globalVariable);
}
result();//I am global variable
console.log(globalVariable);//I am global variable

//Constant
const PI = 3.14159265359;
console.log(PI);