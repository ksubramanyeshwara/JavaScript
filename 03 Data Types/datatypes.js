//typeof operator
console.log(typeof(undefined)); // undefined
console.log(typeof(null)); // object
console.log(typeof(true)); // boolean
console.log(typeof(12)); // integer
console.log(typeof("Hello")); // string
console.log(typeof(1n)); // bigint
console.log(typeof(Symbol())); // symbol
console.log(typeof({}));// object
console.log(typeof(function(){})); // function
console.log();


//Primitive data types are immutable
let primitive = 'immutable';
console.log( primitive );
primitive[0] ='m';
console.log( primitive );
primitive = 'Primitive'
console.log( primitive );
console.log();

//Undefined
console.log('***** Undefined Type ***** ');
let age;
console.log(age);
console.log(typeof age);
console.log();

//null
let phoneNumber = null;
console.log(phoneNumber);//null
console.log();

//boolean
console.log('***** Boolean Type ***** ');
let isLoggedIn = true;
let inProgress = false;
console.log(isLoggedIn);//true
console.log(typeof inProgress);//boolean
//Boolean value occurs as the outcome of the comparison
let isSmaller = 2 < 5;
console.log(isSmaller);//tue
console.log(typeof isSmaller);//boolean
console.log();

//number
console.log('***** Number Type ***** ');
let price = 25;
console.log(price);
console.log(typeof price);
let discount = 2.6;
console.log(discount);
console.log(typeof discount);

//If a floating-point number looks to be a whole number, JavaScript immediately turns it into an integer number.
let percentage = 87.00;
console.log(percentage);
console.log(typeof percentage);

//We can represent larger numbers with the help of 'e'. 
let x = 312e5;
let y = 312e-5;

//NaN
console.log('a'/2);
console.log(NaN + 1);
console.log(3*NaN);
console.log(NaN/2);
console.log(NaN == NaN);
console.log();

//String
console.log('***** String Type ***** ');
//there is no difference between single and double quotes
let greet = "Hello";
let message = 'Bye';

//backticks
let language = 'JavaScript';
console.log(`Learning ${language}`);

//single and double quotes in the string. 2 ways

//Use double quotes outside when you need single quotes inside the string. Use single quotes outside when you need double quotes outside.
let string = "I'm also a valid String";
console.log(string);
let impMessage = 'Learning "JavaScript" basics important before ReactJS';
console.log(impMessage);

//Use backlash to escape it
let string1 = 'I\'m also a valid String';
console.log(string);
let impMessage1 = "Learning \"JavaScript\" basics important before ReactJS";
console.log(impMessage);
console.log();

//BigInt
let bigInt = 9007199254740991n;
console.log(typeof bigInt);
let bigInt1 = BigInt(9007199254740991);
console.log(bigInt1);
console.log(typeof bigInt1);

//sumbol
let id = Symbol();
//The Symbol() function creates a new unique value each time you call it.
console.log(Symbol() === Symbol());

//As an optional argument, we can provide a description to the symbol.
let firstName = Symbol('first name');
let lastName = Symbol('last name');
console.log(firstName);
console.log(lastName);
console.log();

//non-primitive objects
console.log(typeof [1,2,3,4,5]);//object
console.log(typeof function name(){});//function

//object
// object={
//     property1:value1, 
//     property2:value2,
//           .
//           .
//           .
//     propertyN:valueN
// }

phone = {
    color: "blue" ,
    internal_storage :"16GB",
    display: "5.5inch"
}  
console.log(phone.color+" "+phone.internal_storage+" "+phone.display); 


var phone = new Object();  
phone.color = "blue";  
phone.internal_storage = "16GB" 
phone.display = "5.5inch"
console.log(phone.color+" "+phone.internal_storage+" "+phone.display); 
// blue 16GB 5.5inch
