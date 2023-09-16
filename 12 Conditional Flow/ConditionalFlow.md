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
