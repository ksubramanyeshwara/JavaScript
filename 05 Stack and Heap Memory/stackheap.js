/*
Stack (Primitive data types)
--Whatever you declare primitive data types it will go to stack memory
--when you assign variable1 to variable2 you will get a copy of variable 1
--whenever you change the value of variable2 only variable2 value will be changed since you got copy of variable1, not reference
*/
let  favLanguage = "JavaScript";

let anotherFavLanguage = favLanguage;

anotherFavLanguage = "Java";
console.log();
console.log(favLanguage);
console.log(anotherFavLanguage);
console.log();
/*
Heap (Non-primitive data types)
--when you declare non-primitive data types you will get reference of oroginal value in Stack and values are stored in Heap.
--when you assign it to another variable you will get reference to original value itself not a copy of original value
--so whenever changes made through 2nd or 3rd variable, original value will be changed.

*/

let userOne = {
    email : "user@google.com",
    upi : "something@upi",
    position : "SDE 1"
}

let userTwo = userOne;
console.log("Before changing",userOne.position);
userOne.position = "SDE 2";

console.log(userOne.position);
console.log(userTwo.position);