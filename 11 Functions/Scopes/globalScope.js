/**
 * Global Scope
*/
let userName = "K Subramanyeshwara";
function greeting() {
    return `Welcome ${userName}, Let's learn scope in JavaScript \n`;
}
let namaste = greeting();
console.log(namaste);
userName = "Sam";
console.log(userName);