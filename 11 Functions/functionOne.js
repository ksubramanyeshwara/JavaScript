function sum(a, b) {
  return a + b;
}
let add = sum;
console.log(add);
// calling the function in two ways
let result = sum(2, 4); // normal way
let resultOne = add(2, 4); // assigned way
console.log(result);
console.log(resultOne);

// passing function to another function
function avarage(a, b, fn) {
  return fn(a, b) / 2;
}
let resultTwo = avarage(10, 20, add);
let resultThree = avarage(10, 20, sum);
console.log(resultTwo);
console.log(resultThree);

// putting altogether
function multiply(a, b) {
  return a * b;
}
let multi = multiply;
function multiplyAverage(a, b, multi) {
  return multi(a, b) / 2;
}
let multiResult = multiplyAverage(5, 4, multi);
console.log(multiResult);

/**
 * Returning functions from functions
 */
function compareBy(propertName) {
  return function (a, b) {
    let x = a[propertName];
    let y = b[propertName];
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}

let products = [
  {
    productName: "Samsung",
    price: 1500,
    year: 2023,
  },
  {
    productName: "Lava",
    price: 500,
    year: 2024,
  },
  {
    productName: "Apple",
    price: 1800,
    year: 2022,
  },
  {
    productName: "Google",
    price: 1000,
    year: 2024,
  },
];

console.log("Product sorted by Name: ");
products.sort(compareBy("year"));
console.table(products);

/**
 *
 * More examples
 */

function cmToIn(length) {
  return length / 2.54;
}

function inToCm(length) {
  return length * 2.54;
}

function convert(fn, length) {
  return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(Number(inches).toFixed(2));

let cm = convert(inToCm, 10);
console.log(Number(cm).toFixed(2));

/**
 * Immediatly invoked function expression
 */

(function () {
  console.log("I am IIFE");
})();

// passing arguments iife
let person = {
  firstName: "Jhon",
  lastName: "Smith",
};

(function () {
  console.log(
    `Employee first name is ${person.firstName} and the last name is ${person.lastName}`
  );
})();

// Using anonymous functions as arguments
setTimeout(function () {
  console.log("Executed after 5 seconds");
}, 5000);
