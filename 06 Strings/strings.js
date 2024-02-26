/*
Creating a string using string literals
*/
console.log("String creating using string literals");
//double quote
const languageName = "JavaScript";
//single quote
let numberAsString = "12345";
//backticks
let greeting = `Hello World!`;
console.log(`Strings are ${languageName},  ${numberAsString}, ${greeting}`);
console.log(typeof languageName, typeof numberAsString, typeof greeting);
console.log();

/*
Creating a string using String constructor
*/
console.log("String creating using string constructor");
let booleanValue = String("true or false");
console.log(booleanValue);
console.log(typeof booleanValue);
console.log();

//String Interpolation
const name = "JavaScript";
const age = 24;

// Basic interpolation:
const greetingss = `Hello, my name is ${name} and I am ${age} years old.`;

// More complex expressions:
const price = 19.99;
const discount = 0.1;
const finalPrice = `The price is $${price} but you get a ${
  discount * 100
}% discount, so it's only $${price * (1 - discount)}.`;

console.log(greetingss);
console.log(finalPrice);

//Using Subtraction `-`, Multiplication `*`, Division `/` operator.
console.log(
  "Using Subtraction `-`, Multiplication `*`, Division `/` operator."
);
console.log("10" - 5);
console.log("10" * 5);
console.log("10" / 5);

//Comparison operators (`<`, `<=`, `>`, `>=`)
console.log("10" > 5);
console.log("10" < 5);
console.log("10" >= 5);
console.log("10" <= 5);

//Empty string handling

//string to number
console.log("converting string into number");
const myString = "123";
const myNum = Number(myString);
console.log("String to Number", myNum);
console.log(typeof myNum);
console.log();

//number to string
console.log("converting number into string");
const myNum1 = 123;
const myString1 = String(myNum1);
console.log(myString1);
console.log(typeof myString1);

//String Coercion

//Concatenation with +
let greetings = "Hello" + " " + "World!"; // "Hello World!"
console.log(greetings);
let combined = 10 + "5"; // "105" (10 coerced to "10")
console.log(combined);
let difference = "100" - 20;
console.log(difference);
let abcd = "10" + "20";
console.log(abcd);

/*
loose equality
*/
console.log("Loose Equality");
//Numeric and string comparison
let num = 123;
let str = "123";
console.log(num == str);

//Null and undefined comparison
console.log(null == undefined);

//Boolean and non-boolean comparison, JavaScript converts the boolean true to 1 and then makes the comparison.
let bool = true;
let numb = 1;
console.log(bool == numb);

console.log(0 == ""); // because JavaScript converts the empty string `""` to 0 before making the comparison.
console.log(1 == true); // because JavaScript converts `true` to 1 before making the comparison.
console.log(0 == false); // because JavaScript converts `false` to 0 before making the comparison.
console.log(NaN == NaN); // false, because NaN is not equal to anything, including itself
console.log(null == null); // true, because both the value and the type are the same
console.log(null == 0);
console.log(undefined == undefined);
console.log(undefined == null); // false, because the types are different (null vs undefined
console.log(undefined == 0);
console.log(undefined == false);
console.log(false == false);
console.log(false == 0);
console.log(false == undefined);
console.log(false == null);
console.log();

/*
Strict equality
*/
console.log("Strict Equality");
console.log(1 === 1); // true, because both the value and the type are the same
console.log(1 === "1"); // false, because the types are different (number vs string)
console.log(true === 1); // false, because the types are different (boolean vs number)
console.log(0 === ""); // false, because the types are different (number vs string)
console.log(NaN === NaN); // false, because NaN is not equal to anything, including itself
console.log(null === null); // true, because both the value and the type are the same
console.log(null === 0);
console.log(undefined === undefined);
console.log(undefined === null); // false, because the types are different (null vs undefined
console.log(undefined === 0);
console.log(undefined === false);
console.log(false === false);
console.log(false === 0);
console.log(false === undefined);
console.log(false === null);
console.log();

/*
Using Subtraction `-`, Multiplication `*`, Division `/` operator.
*/
console.log(
  "Using Subtraction `-`, Multiplication `*`, Division `/` operator."
);
console.log("10" - 5);
console.log("10" * 5);
console.log("10" / 5);
console.log("10" - "5");
console.log("10" * "5");
console.log("10" / "5");
console.log(NaN - 10);
console.log(NaN * 10);
console.log(NaN / 10);
console.log(null - 10);
console.log(null * 10);
console.log(null / 10);
console.log(undefined - 10);
console.log(undefined * 10);
console.log(undefined / 10);
console.log(false - 10);
console.log(false * 10);
console.log(false / 10);
console.log();

/*
Comparison operators (`<`, `<=`, `>`, `>=`)
*/
console.log("Comparison operators (`<`, `<=`, `>`, `>=`)");
console.log();
console.log("10" > 5);
console.log("10" < 5);
console.log("10" >= 5);
console.log("10" <= 5);
console.log("10" > "5");
console.log("10" < "5");
console.log("10" >= "5");
console.log("10" <= "5");
console.log("10" > true);
console.log("10" < true);
console.log("10" >= true);
console.log("10" <= true);
console.log("10" > false);
console.log("10" < false);
console.log("10" >= false);
console.log("10" <= false);
console.log("10" > null);
console.log("10" < null);
console.log("10" >= null);
console.log("10" <= null);
console.log("10" > undefined);
console.log("10" < undefined);
console.log("10" >= undefined);
console.log("10" <= undefined);
console.log("10" > NaN);
console.log("10" < NaN);
console.log("10" >= NaN);
console.log("10" <= NaN);
console.log();

/*
Empty string handling
*/
console.log("Empty string handling");
console.log();
console.log(0 == "");
console.log(0 == "0");
console.log(0 == "00");
console.log(0 === "");
console.log("" === "");
console.log("" == "0");
console.log("" == "00");
console.log("" == 1);
console.log("" == -1);
console.log("" == null);
console.log("" == undefined);
console.log("" == NaN);
console.log("" == false);
console.log("" == true);
console.log("" == []);
console.log("" == {});
console.log(0 == []);
console.log(0 == {});
console.log(0 == null);
console.log(0 == undefined);
console.log(0 == NaN);
console.log(0 == false);
console.log(0 == true);
console.log(false == []);
console.log(false == {});
