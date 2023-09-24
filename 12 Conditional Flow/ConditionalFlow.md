# Conditional

Conditionals allow you to manage the flow of the code/program based on specific conditions.They allow you to execute different blocks of code depending on whether a given condition is true or false.

Conditionals are essential for managing the flow of your programme and applying logic.

***Types of Conditionals***

1. if
2. if else
3. if else if
4. switch
5. ternary operator

## if

`if statement` is a basic conditional statement. It executes the code only when the condition is `true`

if the given condition is false then code execution will the skip the perticular block and continue the execution.

```JS
// syntax
if (condition) {
  //this part of code runs for truthy condition
}
```

```JS
// When condition is false 
let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day!");
}
// When condition is true
let temperature1 = 35;
if (temperature1 > 30) {
    console.log("It's a hot day!");
}

//logical and(&) operator
let scoreOne = 93;
let scoreTwo = 95;
let scoreThree = 97;
if (scoreOne & scoreTwo & scoreThree > 90) {
    console.log("Distinction!");
}

//logical OR(||)
const age = 17;
const hasDriversLicense = false;
const tempLicense = true;
if (age >= 18 || hasDriversLicense || tempLicense) {
  console.log("You are old enough to drive.");
}

/*
    OUTPUT

    It's a hot day!
    Distinction!
    You are old enough to drive.
*/
```

## if else

`if` statement let's you execute a code block when some condition is true, `else` another code block executed when `if` statement is `false`

```JS
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
```

```JS
let temperature = 35;
if (temperature < 25) {
    console.log("It's a hot day!");
} else {
    console.log("It's a normal day!");
}

//using logical OR( || ) 
var a = 15;
if (a == 10 || a < 20) {
  console.log("True, a = 10 or a <20");
}
else {
  console.log("a = 15");
}

//using logical AND( & )
let scoreOne = 53;
let scoreTwo = 75;
let scoreThree = 87;
if (scoreOne & scoreTwo & scoreThree > 90) {
    console.log("Distinction");
} else {
    console.log("First Class");
}

/*
    OUTPUT

    It's a normal day!
    True, a = 10 or a <20
    First Class
*/
```

## if else if

It will be used when you want to check multiple conditions.

```JS
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
```

```JS
let x = 9;

if (x == 1) {
    console.log('January');
} else if (x == 2) {
    console.log('Feburary');
} else if (x == 3) {
    console.log('March');
} else if (x == 4) {
    console.log('April');
} else if (x == 5) {
    console.log('May');
} else if (x == 6) {
    console.log('June');
} else if (x == 7) {
    console.log('July');
} else if (x == 8) {
    console.log('August');
} else if (x == 9) {
    console.log('September');
} else if (x == 10) {
    console.log('October');
} else if (x == 11) {
    console.log('November');
} else if (x == 12) {
    console.log('December');
} else {
    console.log('Enter a valid number');
}

let today = new Date().getDay();

if (today == 0) {
    console.log("Sunday!");
}
else if (today == 1) {
    console.log("Monday!");
}
else if (today == 2) {
    console.log("Tuesday!");
}
else if (today == 3) {
    console.log("Wednesday!");
}
else if (today == 4) {
    console.log("Thursday!");
}
else if (today == 5) {
    console.log("Friday!");
}
else {
    console.log("Saturday!");
}

/*
    OUTPUT

    September
    Sunday!
*/
```

## switch

It is used to when you have multiple values for evaluating.

```JS
switch(expression) {
 case value1:
 // code to be executed
 break;
 case value2:
 // code to be executed
 break;
 case value-n:
 // code to be executed
 break;
}
```

If the expression equals to value1, do whatever code is specified for that case. If the expression equals to value2, do whatever code is specified for that case, and so on. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition.

```JS
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
```

```JS
let percantage = 40;

switch (true) {
    case percantage > 90 && percantage < 100:
        console.log("You have got A+ grade");
        break;
    case percantage > 80 && percantage < 90:
        console.log("You have got A grade");
        break;
    case percantage > 70 && percantage < 80:
        console.log("You have got B+ grade");
        break;
    case percantage > 60 && percantage < 70:
        console.log("You have got B grade");
        break;
    case percantage > 50 && percantage < 60:
        console.log("You have got C+ grade");
        break;
    case percantage > 35 && percantage < 50:
        console.log("You have got C grade");
        break;
    default:
        console.log("You Have Failed This Course");
        break;
}

let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent! You got an A.");
        break;
    case "B":
        console.log("Good job! You got a B.");
        break;
    case "C":
        console.log("You got a C. You can do better.");
        break;
    case "D":
        console.log("You got a D. Improvement is needed.");
        break;
    case "F":
        console.log("Oh no! You got an F. You should study harder.");
        break;
    default:
        console.log("Invalid grade entered.");
        break;
}
/*
    OUTPUT

    You have got C grade
    Good job! You got a B.
*/
```

## ternary operator

It is also a conditional operator. It is a shorthand way to write conditional statement.

```JS
condition ? expressionIfTrue : expressionIfFalse;
```

It takes three operands.

1. Condtion : Condition evalueates to either `true` or `false`.
2. expressionIfTrue : an expression to execute if the condition is `true`
3. expressionIfFalse : an expression to execute if the condition is `false`.

***Simple Ternary Operator***

```JS
let age = 25;
let isAdult = age >= 18 ? console.log("Yes") : console.log("No");

/*
    OUTPUT

    Yes
*/
```

In this example:

Condition: age >= 18 checks if the age variable is greater than or equal to 18.
ExpressionIfTrue: "Yes" is assigned to isAdult if the condition is true.
ExpressionIfFalse: "No" is assigned to isAdult if the condition is false.

***Ternary Operator with Operations***

```JS
let num = 10;
let result = num % 2 === 0 ? console.log("Even") : console.log("Odd");

/*
    OUTPUT

    Even
*/
```

***Ternary Operator with Function Calls***

```JS
function greet(name) {
    return "Hello, " + name + "!";
}

let isLoggedIn = true;
let user = isLoggedIn ? console.log(greet("John")) : console.log("Guest");

/*
    OUTPUT

    Hello, John!
*/
```

***Nested Ternary Operators***

```JS
let score = 85;
let grade =
    score >= 90
        ? console.log("A")
        : score >= 80
            ? console.log("B")
            : score >= 70
                ? console.log("C")
                : console.log("D");

/*
    OUTPUT

    B
*/                
```

## Truthy and Falsy Values

In JavaScript we have a primitive data type called boolean and it's value is either true or false. In JavaScript every other value is considered as truthy or falsy.

Truthy and falsy values are the non-boolean values that are coerced to true or false when encountered in a Boolean context(conditional statements if, while, for, etc).

***Truthy Values***

`Truthy` value considered as `true` when encountered in Boolean context.

All values are `truthy` unless they are defined as `falsy`.

- true
- Non-zero numbers
- Non-empty strings
- Objects
- Arrays
- Functions
- Infinity and -Infinity
- Symbols

```JS
if (true) {
    console.log("This will be executed.");
}

if (42) {
    console.log("This will be executed.");
}

if ("Hello" && [1, 2, 3]) {
    console.log("This will be executed.");
}

/*
    OUTPUT

    This will be executed.
    This will be executed.
    This will be executed.
*/
```

***Falsy Values***

`Falsy` value considered as `false` when encountered in Boolean context.

- false
- 0 or -0
- 0n
- ""
- null
- undefined
- NaN

```JS
if (false) {
    console.log("This won't be executed.");
}

if (0) {
    console.log("This won't be executed.");
}

if ("" || null || undefined) {
    console.log("This won't be executed.");
}

/*
    OUTPUT


*/
```

## Nullish Coalescing Operator (??)

nullish coalescing operator (??) is a logical operator. It provides a short way to handle default values when dealing with potentially `null` or `undefined` values.

It returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

```JS
leftExpr ?? rightExpr
```

```JS
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA);
console.log(valB);
console.log(valC);
/*
    OUTPUT

    default for A
        (as the empty string is not null or undefined)
    42
*/
```

***Chaining nullish coalescing operators***

A series of `??` can also be used to choose the first value from a list that isn't `null` or `undefined`.

```JS
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");
/*
    OUTPUT

    Supercoder
*/
```

***Using the operator with object properties***

```JS
const user = {
  name: "John",
  age: null,
};

const userName = user.name ?? "Guest";
const userAge = user.age ?? 30;

console.log(userName);
console.log(userAge);

/*
    OUTPUT

    John
    30
*/
```

## Conclusion

We don't want to execute all the code all the time and we need control of the execution So we use conditionals.

Coditions will help to execute code when certain codition matach and certain codition dosen't matach.

We have discussed `if`, `if else`, `if else if`, `switch`, `ternary operator`, `truthy and falsy values` and `Nullish Coalescing Operator (??)` with examples for each.
