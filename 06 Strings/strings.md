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

## Numbers vs Strings - Conversation

***The Number() function converts its argument to a number.***

```JS
const myString = "123";
const myNum = Number(myString);
console.log(myNum);
console.log(typeof myNum);

/*
    OUTPUT

    123
    number
*/
```

***The String() function converts its argument to a string.***

```JS
const myNum1 = 123;
const myString1 = String(myNum1);
console.log(myString1);
console.log(typeof myString1);
/*
    OUTPUT
    123
    string
*/
```

## Comparing String

All comparison operators, including === and ==, compare strings case-sensitively. So convert the comparing strings into same case(upper or lower)

## String primitives and String objects

- String literals(single or double quotes) and string constructor String() are primitive strings.
- Strign object - non-primitive string

    ```JS
    let myString = new String("Hello, World!");
    ```

String primitives and String objects will give different results when using with eval()

```JS
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1));
console.log(eval(s2));

/*
    OUTPUT

    4
    [String: '2 + 2']
*/
```

So valueOf() method is used to convert a string object into  primitive counterpart.

```JS
console.log(eval(s2.valueOf()));

/*
    OUTPUT

    4
*/
```

>It is recommeneded not to use `eval()`. [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)

## String coercion

Conversion of non-string values into strings when they are used in a context that expects a string.

Objects are first converted to a primitive by calling its toPrimitive(), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.

Template literal does the string coercion for the embedded expression.
