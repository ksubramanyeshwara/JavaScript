//using array literal
let southernStates = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu"];
// console.log(southernStates);
// console.log();

//using new keyword
let frontendDevelopment = new Array();
frontendDevelopment[0] = "HTML";
frontendDevelopment[1] = "CSS";
frontendDevelopment[2] = "TailwindCSS";
frontendDevelopment[3] = "JavaScript";
frontendDevelopment[4] = "ReactJS";
frontendDevelopment[5] = "TypeScript";
frontendDevelopment[6] = "Git";
// console.log(frontendDevelopment);
// console.log();

// Creates an array of 5 undefined elements
// let arrayNumber = new Array(5);
// console.log(arrayNumber);
// console.log();

// Accessing array elements 
// console.log(southernStates[1]);
// console.log(southernStates[3]);
// console.log(southernStates[0]);
// console.log();

//  Adding an element to the end of an array
// console.log("Before adding a value",southernStates);
// southernStates[4] = "Telangana";
// console.log("\nAfter adding a value",southernStates);

// Replacing the element in any position from an Array
// console.log("Before replacing a value",frontendDevelopment);
// frontendDevelopment[2] = "Bootstrap";
// console.log("After replacing a value",frontendDevelopment);

//Deleting an array element from any position
// let numbers = [1, 2, 3, 4, 5];
// console.log("Before deleting a element",numbers);
// console.log("Length Before deleting a element",numbers.length);
// delete numbers[2];
// console.log();
// console.log("After deleting a element",numbers);
// console.log("Length After deleting a element",numbers.length);
//we can see that the length of an array is same before and after deleting an element.
// console.log("Deleted Element Index",numbers[2]);
// console.log();
//when we delete an element using delete it will simply don't delete the index and it will be undefined. 

//Multidimensional array
let evenOddNumbers = [2, 4, 6, 8, 10, [1, 3, 5, 7]];
console.log(evenOddNumbers[5][2]);