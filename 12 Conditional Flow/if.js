// When condition is false 
let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day!");
}
// When condition is true
let temperature1 = 35;
if (temperature1 > 30) {
    console.log("It's a hot day!");
}

//logical and(&) operator
let scoreOne = 93;
let scoreTwo = 95;
let scoreThree = 97;
if (scoreOne & scoreTwo & scoreThree > 90) {
    console.log("Distinction");
}

//logical OR(||)
const age = 17;
const hasDriversLicense = false;
const tempLicense = true;
if (age >= 18 || hasDriversLicense || tempLicense) {
  console.log("You are old enough to drive.");
}