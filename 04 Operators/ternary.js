/*
special operator which has three operands.

condition ? expression_if_true : expression_if_false

*/

//for if-else

var marks = 50;

if(marks >= 40)
{
    console.log("Passed");
}
else {
    console.log("Failed");
}

//Using the Ternary Operator, we can write the above block in just one line.

console.log(( marks >= 40 ) ? "Passed" : "Failed" );

/*

if-else-if

if(condition_1){
    statement_1
}
else if(condition_2)
{
    statement_2
}
else
{
    statement_3
}


(condition_1) //first if condition
    ? statement_1 //if the first condition is true
    : (condition_2) //this condition will be checked
                when the first condition is false
    ? statement_2 //if the condition_2 is true
    : statement_3  //if all the conditions are false


*/

var AQI = 340;

if (AQI > 300) {
  result = "Air Quality is BAD";
} else if (AQI > 200) {
  result = "Air Quality is NORMAL";
} else if (AQI > 100) {
  result = "Air Quality is GOOD";
} else {
  result = "Air Quality is EXCELLENT";
}

console.log(result);

var result =
  AQI > 300 //if condition
    ? "Air Quality is BAD"  //if first condition satisfies
    : AQI > 200 //first else-if condition
    ? "Air Quality is NORMAL" 
    : AQI > 100 //second else-if condition
    ? "Air Quality is GOOD"
    : "Air Quality is EXCELLENT"; //if all the conditions fail

console.log(result);

//Using multiple JavaScript ternary operators example

let speed = 90;
let message = speed >= 120 ? 'Too Fast' : speed >= 100 ? 'Fast' : 'OK';

console.log(message);