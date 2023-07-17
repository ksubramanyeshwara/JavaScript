/*
equality operator compares 2 values are equal or not. There are 2 types

1. Abstract(Loose) equality (==)
2. Strict equality (===)

Note: The == or != operator does type conversion of elements before comparing them.
    while comparing two operands, if both operands aren't of the same data type, then the operator tends to convert either of them into other operand's type and then compares their values.
*/

/* 
Abstract Equality (==)
x == y

--In this type of comparison, type coercion is performed by JavaScript.
--Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

--Returns true if the both operands are of the same data type and same value or
--if both are of different data types, but either of them can be converted to the data type of the  other operand and have the same value.
--If both operands have different values, then it returns false.
*/

//string and number |  it will convert the string value to the number type and then compare the values.
console.log("*** Equality Operator ***");
let a = 10;
let b = '10';
console.log(a == b);//true

//both operands are number 
let c = 10;
let d = 10;
let e = -10;
console.log(c==d);//true
console.log(d==e);//false
console.log(e==c);//false

let f = 1;
let g = true;
console.log(f == g);//true
console.log(0 == false);//true
console.log(false == false);//true
console.log(true == false);//false

let str1 = 'Javascript';
let str2 = 'Javascript';
let str3 = 'JavaScript';
console.log(str1 == str2);//true
console.log(str1 == str3);//false
console.log('0' == 0);//true
console.log([9, 2] == '9,2');//true
console.log("" == 0);//true
console.log();

/*
Inequality (!=)
x != y

--returns true if both operands have the same data type and different values 
--if both have a different data type and none of them can be compared to the other operand's type.
*/

console.log("*** Inquality Operator ***");

console.log(10 != '99');//true
console.log(10 != '10');//false

console.log(false != 1);//true
console.log(false != 0);//false
console.log(10 != 10);//false
console.log(10 != -10);
console.log();

/*
Strict Equality (===)
x === y

-- compares operands and returns true if both operands are of the same data type and have some value,
--otherwise, it returns false.

--Strict equality treats NaN as unequal to every other value including itself.
--It also doesn't care about the difference between +0 and -0.

*/
let aa = 10;
let bb = '10';
let cc = 10;
console.log(aa===bb);//false
console.log(aa===cc);//true
console.log(34 === '34');//false
console.log('0' == 0);//false
console.log([9, 2] == '9,2');//false
console.log("" == 0);//false
console.log();


/*
Strict Inequality (!==)
x !== y

--It compares operands and returns true if both operands are of different data types or are of the same data type but have different values. 
--If both operands are of the same data type and have the same value, then it returns false.
*/ 

console.log(34 !== '34');//true


/*
Same Value Equality with "Object.is"


Object.is(0, 0) // true
Object.is(null, null) // true
Object.is(undefined, undefined) // true
Object.is(true, 1) // false
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

*/