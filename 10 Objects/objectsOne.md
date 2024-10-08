# Object references and copying

In JavaScript, when you assign an object to a variable, you're creating a reference to that object in memory, not a copy of the object itself. This applies to arrays, functions, and other complex data types as well.

```JS
let obj1 = { name: 'Alice', age: 30 };
let obj2 = obj1; // obj2 now references the same object as obj1
```

obj1 and obj2 point to the same object in memory. Modifying one will affect the other:

```JS
obj2.age = 31;
console.log(obj1.age); // Output: 31
```

## Const objects can be modified

> An important side effect of storing objects as references is that an object declared as const can be modified.

```JS
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

console.log(user.name); // Pete
```

# Comparison by reference

In JavaScript, objects are compared by reference, not by their content.
When you compare two objects using the equality operators (== or ===), JavaScript checks if they refer to the same object in memory, rather than comparing their properties or values.

```JS
// Example 1: Comparing two object literals
let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 == obj2);  // Output: false
console.log(obj1 === obj2); // Output: false

// Example 2: Assigning an object reference
let obj3 = obj1;
console.log(obj1 == obj3);  // Output: true
console.log(obj1 === obj3); // Output: true

// Example 3: Modifying an object through a reference
obj3.name = "Jane";
console.log(obj1.name); // Output: "Jane"

// Example 4: Comparing object properties
console.log(obj1.name === obj2.name); // Output: false
```

# Cloning and merging, Object.assign

How to duplicate the objects?
So we can duplicate and replicate the structure by iterating over its properties and copying them on the primitive level.

```JS
let user = {
  name: "Rohit",
  age: 36,
}

// empty object
let clone = {};

// copying the propertis
for (let props in user){
  clone[props] = user[props];
}

// changing the value from cloned object
clone.name = "Virat";
// Value remains same in the original object
console.log(user); // Rohit
// Value changed in cloned object as expected
console.log(clone); // Virat
```

## `object.assign`

`Object.assign(dest, ...sources)`

- The first argument dest is a target object.
- Further arguments is a list of source objects.

It copies the properties of all source objects into the target dest, and then returns it as the result.

> Object.assign will not deeply merge nested objects. Instead, it will overwrite properties at the top level.

```JS
const objectOne = {
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5,
  },
};

const objectTwo = {
  a: 6,
  b: 7,
  c: 8,
  d: {
    e: 9,
  },
};
const objectThree = {};
Object.assign(objectThree, objectOne, objectTwo);
console.log(objectThree);

/*
  OUTPUT

  { a: 6, b: 7, c: 8, d: { e: 9 } }
*/
```

### using spread operator

```JS
const original = {
    a: 10,
    b: {
        c: 20,
    }
};
const clone = { ...original };

console.log(original);
console.log(clone);

/*
  OUTPUT

  { a: 10, b: { c: 20 } }
  { a: 10, b: { c: 20 } }
*/
```

> Object.assign() and rest operator and iterating over properties creatos shallow copy of the object and nested objects are not merged.

## Shallow vs Deep copy

### Shallow Copy

A shallow copy creates a new object, but the values of the properties are references to the original object's properties. This means that changes made to the original object's properties will also be reflected in the copy. Changes made to the nested object in the copy will also reflect in the original object.

```JS
const originalObject = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 4,
    f: 5,
  },
};

console.log(originalObject);
const shallowCopy = { ...originalObject };
console.log(shallowCopy);

shallowCopy.a = 10;
shallowCopy.d.e = 20;
console.log(shallowCopy);
console.log(originalObject); // originalObject.d.e is also changed to 20

/*
    OUTPUT

    { a: 1, b: 2, c: 3, d: { e: 4, f: 5 } }
    { a: 1, b: 2, c: 3, d: { e: 4, f: 5 } }

    { a: 10, b: 2, c: 3, d: { e: 20, f: 5 } }
    { a: 1, b: 2, c: 3, d: { e: 20, f: 5 } }

*/
```

### Deep Copy

A deep copy creates a new object and recursively copies all properties and their values, including nested objects and arrays.

This means that changes made to the original object's properties will not affect the copy.

```JS
// Original object
const original = { a: 1, b: { c: 2 } };
console.log(original);

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));
console.log(deepCopy);

// Modify the original object
original.b.c = 3;
console.log(original);
console.log(deepCopy);
// The deep copy remains unchanged, while the original object has been modified. This demonstrates that the deep copy is a completely independent object, not just a reference to the original object.

// let's modify the deep copy and see what happens to the original object
deepCopy.b.c = 4;
console.log(original);
console.log(deepCopy);
// As you can see, modifying the deep copy does not affect the original object. This further confirms that the deep copy is a completely independent object.
```

**Limitations of JSON.parse(JSON.stringify()):**

- It doesn't copy functions
- It doesn't handle circular references
- It doesn't correctly copy certain object types (like Date, RegExp, Map, Set)

#### structuredClone(object)

It clones the object with all nested properties. It doesn't support when an object has a function property.

```JS
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

console.log( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 50, not related
```
