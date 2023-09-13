/**
 * Block Scope (let and const)
*/
if (true) {
  let blockVar = "I'm in a block scope";
  console.log(blockVar); // Accessing blockVar is allowed
}
console.log(blockVar); // ReferenceError: blockVar is not defined