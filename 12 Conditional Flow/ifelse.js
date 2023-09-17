let temperature = 35;
if (temperature < 25) {
    console.log("It's a hot day!");
} else {
    console.log("It's a normal day!");
}

//using logical OR( || ) 
var a = 15;
if (a == 10 || a < 20) {
  console.log("True, a = 10 or a <20");
}
else {
  console.log("a = 15");
}

//using logical AND( & )
let scoreOne = 53;
let scoreTwo = 75;
let scoreThree = 87;
if (scoreOne & scoreTwo & scoreThree > 90) {
    console.log("Distinction");
} else {
    console.log("First Class");
}