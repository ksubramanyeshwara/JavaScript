//Arithmetic Operators
let num1 = 10;
let num2 = 20;
let num3 = 30.3;
let num4 = 40.7;

//addition
let add = num1 + num2;
console.log(add);
console.log();

console.log("***** Strign Operation with + *****");
console.log();
//because left operand is string so result is string because right operand is converted to string
let stringAdd = "10 + 20 = " + num1 + num2;
let stringAdd1 = "20 + 10 = " + num2 + num1;
console.log(stringAdd);
console.log(stringAdd1);
console.log();

//the parentheses change the operator precedence, and so first, the num1 + num2 expression is evaluated to 50, then this value is converted to a string.
let stringAdd2 = "10 + 20 = " + (num1 + num2);
console.log(stringAdd2);
console.log();


//if both operands are strings then the second operand is concatinated to first operand
console.log("10" + "10");
console.log("String" + "Concatination");
console.log();

//If any one of the operand is string then another operand is converted to string and concatinated,  it doesn’t matter whether the first operand is a string or the second one.
console.log(10 + "10");
console.log("10" + 10);
console.log();

//operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'
console.log(2 + 2 + "1");

//the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122"
console.log("1" + 2 + 2);
console.log();

/* 
-- If any of the operands is NaN, the operation result will be NaN, too.

--If an operation provides a result that is higher than the maximum value that can  be represented by Number, the result is 'Infinity'.

--Similarly, if the result is lower than the lowest negative value that can be represented by Number, the result is '–Infinity'.
*/

/*
Subtraction 
subtract one number from another
*/

console.log("***** Subtraction *****");
//'Infinity' subtracted from 'Infinity' results NaN.
console.log(num2 - num1); //10
console.log(num1 - true); //9 because true is 1

//NaN if the string vale can't be converted to a number
console.log(num1 - undefined);
console.log(num2 - "hi");
console.log();

console.log("***** Multiplication *****");
//if any one of the value is not number then result is NaN
let result = "hello" * 2;
console.log(result);
console.log();

console.log("***** Devision *****");
//if any one of the value is not number then result is NaN
let result1 = "hello" / 2;
console.log(result1);
console.log(0/0);//NaN





