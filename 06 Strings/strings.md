# String

String is a sequence of characters. It contains zero or more characters within single (' '), double (" "), or backticks (``).

Strings are immutable. Which means if you modify a string, you will always get a new string. The original string doesn’t change.

## Creating a String

A string can be created by using `string literals` or by using a `String()` constructor.

**_String literal_**

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

**_String constructor_**

String can be created using `String()` constructor. It creates string object. It takes one argumenet which is convrted into string. If the multimple arguments passed then only the first argument is taken into consideration.

```JS
let booleanValue = String('true or false');
console.log(booleanValue);
console.log(typeof booleanValue);
let names = String('name1', 'name2', 'name3');
console.log(names);
/*
    OUTPUT

    true or false
    string
    name1
*/
```

**_Multiline String_**

Multiline string can be easily created using Template Literals (Backticks).

```JS
const poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;
console.log(poem);

/*
    OUTPUT

    Roses are red,
    Violets are blue,
    JavaScript is awesome,
    And so are you

*/
```

**_String Interpolation_**

Template literals can also be used to create a string with variables.

```JS
const name = "JavaScript";
const age = 24;

// Basic interpolation:
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// More complex expressions:
const price = 19.99;
const discount = 0.1;
const finalPrice = `The price is $${price} but you get a ${discount * 100}% discount, so it's only $${price * (1 - discount)}.`;

console.log(greeting);
console.log(finalPrice);

/*
    OUTPUT

    Hello, my name is JavaScript and I am 24 years old.
    The price is $19.99 but you get a 10% discount, so it's only $17.991.
*/
```

## Type Conversion

**_The Number() function converts its argument to a number._**

```JS
const myString = "123";
console.log(typeof myString);
const myNum = Number(myString);
console.log(myNum);
console.log(typeof myNum);

/*
    OUTPUT

    string
    123
    number
*/
```

**_The String() function converts its argument to a string._**

```JS
const myNum1 = 123;
console.log(typeof myNum1);
const myString1 = String(myNum1);
console.log(myString1);
console.log(typeof myString1);
/*
    OUTPUT

    number
    123
    string
*/
```

## String coercion

Automatic conversion of non-string values into strings when they are used in a context where a string is expected. This process happens implicitly by the JavaScript engine. String coercion is a fundamental aspect of JavaScript's dynamic typing system.

1. **_Concatenation with `+` :_**

   When adding a string and a non-string, the non-string is coerced to a string:
   If one or both the operands are strings then it will concatinate them.

   ```JS
    let greetings = "Hello" + " " + "World!"; // "Hello World!"
    console.log(greetings);
    let combined = 10 + "5"; // "105" (10 coerced to "10")
    console.log(combined);
    let difference = "100" - 20;
    console.log(difference);
    let abcd = '10' + '20';
    console.log(abcd);
    //NaN
    let str = 'String123';
    let nan = NaN;
    let strnan = str + nan;
    console.log(strnan)
    console.log(typeof strnan)
    // null
    let strnull = str + null;
    console.log(strnull);
    console.log(null + 5);
    // false
    console.log('Hello' + false);
    // undefined
    console.log('Hello' + undefined);


    /*
        OUTPUT

        Hello World!
        105
        80
        1020

        String123NaN
        string

        String123null
        5

        Hellofalse

        Helloundefined
    */
   ```

2. **_Loose equality (==) :_**

   JavaScript will attempt to convert the operands to the same type before making the comparison. This is why it's called "loose" equality, because it allows for type coercion.

   ```JS
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

   /*
       OUTPUT

        true
        true
        true
        true
        true
        true
        false
        true
        false
        true
        true
        false
        false
        true
        true
        false
        false
   */
   ```

3. **_Strict equality (===) :_**

   Use strict equality (===) to compare by value and avoid coercion.
   strict equality checks not only the values but also the types of the two operands. If the values and types are the same, it returns true; otherwise, it returns false.

   ```JS
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

   /*
        OUTPUT

        true
        false
        false
        false
        false
        true
        false
        true
        false
        false
        false
        true
        false
        false
        false
   */

   ```

4. **_Using Subtraction `-`, Multiplication `_`, Division `/` operator :\***

   JavaScript will coerce non-numeric operands to numbers before performing the operation.

   ```JS
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

   /*
       OUTPUT

        5
        50
        2
        5
        50
        2
        NaN
        NaN
        NaN
        -10
        0
        0
        NaN
        NaN
        NaN
        -10
        0
        0
   */
   ```

5. **_Comparison operators (`<`, `<=`, `>`, `>=`) :_**

   When comparing values of different types, JavaScript will attempt to coerce them to numbers before making the comparison.

   ```JS
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
   /*
       OUTPUT

        true
        false
        true
        false
        false
        true
        false
        true
        true
        false
        true
        false
        true
        false
        true
        false
        true
        false
        true
        false
        false
        false
        false
        false
        false
        false
        false
        false
   */
   ```

6. **_Empty string handling :_**

   In loose equality (==), an empty string ("") are equal to `0`, `false`, `null`, `undefined`, and `NaN`
   Using strict equality (===), an empty strings are only equal to other empty strings
   In numeric operations, an empty string is converted to 0.
   Empty strings are considered falsy in boolean contexts

   ```JS
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

   /*
        OUTPUT

        true
        true
        true
        false
        true
        false
        false
        false
        false
        false
        false
        false
        true
        false
        true
        false
        true
        false
        false
        false
        false
        true
        false
        true
        false
   */
   ```
