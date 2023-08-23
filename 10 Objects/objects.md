# Objects

In JavaScript, an object is a data structure that lets you group related information together. It's like a container that can hold various properties and methods (functions) as a single unit.

In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

1. Properties: Properties are the characteristics of an object. They are defined using a key-value pair. The key property is an identifier (either a name, a number, or a string literal) And the value of a property can be any value.  (such as numbers, strings, arrays, other objects, or even functions).

2. Methods: Methods are functions that are stored as properties within an object. These functions can be executed (called) using the object they belong to. Methods allow objects to perform actions or behaviors. Methods are defined in the same way as properties, but their values are functions.

## Creating an Object

There are 4 ways to create objects in JavaScript

1. Using Object Literals (Object initializers).
2. Creating object with a constructor.
3. Creating object with Object.create() method.
4. Using ES6 classes.

***Using Object Literals (Object initializers).***

```JS
const obj = {
property1: value1, // property name may be an identifier
2: value2, // or a number
"property n": value3, // or a string
};
```
