let age = 25;
let isAdult = age >= 18 ? console.log("Yes") : console.log("No");

let num = 10;
let result = num % 2 === 0 ? console.log("Even") : console.log("Odd");

function greet(name) {
    return "Hello, " + name + "!";
}

let isLoggedIn = true;
let user = isLoggedIn ? console.log(greet("John")) : console.log("Guest");


let score = 85;
let grade =
    score >= 90
        ? console.log("A")
        : score >= 80
            ? console.log("B")
            : score >= 70
                ? console.log("C")
                : console.log("D");