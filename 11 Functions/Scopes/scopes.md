# Scope

In JavaScript, scope refers to the visibility and accessibility of variables and functions within your code. Scope determines where in the code a variable and function can be accessed.

Scoping of a variable is controlled by the location of its declaration.
Writing clear and error-free JavaScript code requires an in-depth knowledge of scopes.

There are 3 types of scope in JavaScript

1. Global Scope
2. Local Scope (Function Scope)
3. Block Scope (let and const)
4. Lexical Scope (Closures)

## Global Scope

Variables declared outside of any function or block have global scope.
Variables and functions declared in the global scope are accessible from anywhere in the code.

These are often referred to as global variables.
Global variables can be accessed and modified from anywhere in your code, including within function.

```JS
let userName = "K Subramanyeshwara";
function greeting() {
    return `Welcome ${userName}, Let's learn scope in JavaScript \n`;
}
let namaste = greeting();
console.log(namaste);
userName = "Sam";
console.log(userName);

/*
    OUTPUT

    Welcome K Subramanyeshwara, Let's learn scope in JavaScript

    Sam
*/
```

In the above example, you can see we have used the variable inside the function and also changed the variable value as well.

## Local Scope (Function Scope)

Local scope refers to the scope within functions or blocks of code enclosed by curly braces `{...}`

Variables declared within a function are only accessible within that function, and they do not affect variables in the global scope.
This helps in encapsulating data and avoiding naming conflicts between different parts of your code.

Each function creates its own local scope, which can include nested scopes.

```JS
function scopeLocal() {
  let localVar = 20; // It have a local scope and can only be accessed within the function
  console.log(localVar);
}
scopeLocal();
//console.log(localVar); // ReferenceError: localVar is not defined
/*
    OUTPUT

    20
*/
```

***Nested Scope***

```JS
function scopeLocal1() {
    let localVar1 = "scope level 1";
    function scopeLocal2() {
        let localVar2 = "scope level 2"; 
        console.log(localVar1); // scope level 1 - executed because localVar1 is in global scope for scopeLocal2 function
    }
    // console.log(localVar2); // ReferenceError: localVar2 is not defined because localVar2 have local scope of scopeLocal2 function
    scopeLocal2();
}
scopeLocal1();
/*
    OUTPUT

    scope level 1
*/
```

## Block Scope (let and const)

With the introduction of ES6 (ECMAScript 2015), the let and const keywords introduced block-scoped variables. A code block is defined by these braces `{...}`

Variables declared with `let` and `const` are block-scoped, which means they are only accessible within the block they are declared in.

```JS
if (true) {
  let blockVar = "I'm in a block scope";
  console.log(blockVar); // Accessing blockVar is allowed
}
//console.log(blockVar); // ReferenceError: blockVar is not defined
/*
    OUTPUT

    I'm in a block scope
*/
```

## Variable Declaration : var, let and const

In JavaScript, variable declarations can be made using `var`, `let`, and `const` keywords, each with its own scoping rules.

- `var`: Variables declared with `var` have function scope or global scope, depending on where they are declared. They are hoisted to the top of their scope during the parsing phase.

- `let`: Variables declared with `let` have block scope. They are not hoisted and are only accessible within the block  and all the child blocks where they are defined.

- `const`: Variables declared with `const` also have block scope like `let`. However, `const` variables are read-only and cannot be reassigned after declaration. The variables declared using the const keyword are block-scoped i.e. these variables are only accessible within the block in which they are declared and all the child blocks.

Any variable declared via var can be re-declared as many times as we want. However, let and const can be only declared once in their respective scope.

It is advised to use `let` and `const` instead of `var` when declaring variables to avoid common issues.
