/*
Date and Time is displayed in a format where human can understand but JavaScript understands date based upon timestamp
Timestamp specified as milliseconds elapsed since January 1st 1970 (unix time)

To start using the date object we need to create or instantiate new date object

*/

let myDate = new Date();
//console.log(myDate);//displays date, time and standard
// console.log(myDate.toString());//use toString() method on VScode only
// console.log();
// console.log(myDate.toDateString());//displays date
// console.log();
// console.log(myDate.toISOString());
// console.log();
// console.log(myDate.toTimeString());//displays time and standard
// console.log();
// console.log(myDate.toUTCString());
// console.log();
// console.log(myDate.toLocaleString());//displays date and time
// console.log();
// console.log(myDate.toLocaleDateString());//displays date only
// console.log();
// console.log(myDate.toLocaleTimeString());//displays time only


let currentDate = new Date(2023, 1, 12, 5, 3, 5, 5);// helps to display perticular year, month, date time minute seconds and milliseconds
// console.log(currentDate.toLocaleString());
// console.log(currentDate.toLocaleDateString());//helps to display perticular year, month, date
// console.log(currentDate.toLocaleTimeString());//helps to display perticular time minute and seconds 

let milliseconds = new Date(92347687467);//Number of milliseconds elapsed since January 1st 1970
//console.log(milliseconds.getFullYear());

let dateTimeString = new Date("Jan 22 2023");
let dateTimeString1 = new Date("Jan 22 2023 07:02:05");
// console.log(dateTimeString)//Sun Jan 22 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(dateTimeString1)//Sun Jan 22 2023 07:02:05 GMT+0530 (India Standard Time)

/*
2 main methods in JavaScript
1. getTime()
2. setTime() 
*/ 