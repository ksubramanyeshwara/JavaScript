# String

String is a sequence of characters. It contains zero or more characters within single (' '), double (" "), or backticks (``).

Strings are immutable. Which means if you modify a string, you will always get a new string. The original string doesn’t change.

## Creating a String

A string can be created by using `string literals` or by using a `String()` constructor.

***String literal***

It is the simplest way to create a string. Enclose the text content in single quotes ('), double quotes ("), or backticks (`).

```JS
//double quote
const languageName = "JavaScript";
//single quote
let numberAsString = '12345';
//backticks
let greeting = `Hello World!`;
console.log(`Strings are ${languageName},  ${numberAsString}, ${booleanValue}`)
console.log(typeof languageName, typeof numberAsString, typeof greeting);

/*
    OUTPUT

    Strings are JavaScript,  12345, Hello World!     
    string string string    
*/
```

***String constructor***

String can be created using `String()` constructor. It creates string object. It takes one argumenet which is convrted into string.

```JS

/*
    OUTPUT

    true or false
    string
*/
```

> Multiline string can be easily created using backticks

## Numbers vs Strings

The Number() function converts anything passed to it into a number.

```JS

```
