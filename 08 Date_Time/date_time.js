let myDate = new Date();
// console.log(myDate);//displays date, time and standard
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

//METHOD 3
// let currentDate = new Date(2023, 1, 12, 5, 3, 5, 5);// helps to display perticular year, month, date time minute seconds and milliseconds
// console.log(currentDate.toLocaleString());
// console.log(currentDate.toLocaleDateString());//helps to display perticular year, month, date
// console.log(currentDate.toLocaleTimeString());//helps to display perticular time minute and seconds

//METHOD 2
// let milliseconds = new Date(92347687467);//Number of milliseconds elapsed since January 1st 1970
// console.log(milliseconds.getFullYear());

//METHOD 4
// let dateTimeString = new Date("Jan 22 2023");
// let dateTimeString1 = new Date("Jan 22 2023 07:02:05");
// console.log(dateTimeString)//Sun Jan 22 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(dateTimeString1)//Sun Jan 22 2023 07:02:05 GMT+0530 (India Standard Time)

/*
2 main methods in JavaScript
1. getTime()
2. setTime() 
*/

//Date.getDate()

// let myTimeStamp = new Date();
// console.log(myTimeStamp.getDate());// Returns current date of the month (1 to 31)
// console.log(myTimeStamp.getDay());// 6th day
// console.log(myTimeStamp.getMonth());// 7 because count starts from 0
// console.log(myTimeStamp.getFullYear());//Returns current year according to local time
// console.log(myTimeStamp.getHours());// hours ranging between 0 and 23
// console.log(myTimeStamp.getMinutes());
// console.log(myTimeStamp.getSeconds());
// console.log();

// myTimeStamp.setDate(15);
// console.log(myTimeStamp.getDate());

// myTimeStamp.setMonth(11);
// console.log(myTimeStamp.getMonth());

// myTimeStamp.setFullYear(1992, 9)
// console.log(myTimeStamp.getFullYear());
// console.log(myTimeStamp.getMonth());

let newDate = new Date();
console.log(
  newDate.toLocaleString("default", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "2-digit",
  })
);

function formattedDate(dateObj) {
  const dateParts = {
    day: dateObj.getDate(),
    month: dateObj.getMonth(),
    year: dateObj.getFullYear(),
    hour: dateObj.getHours() % 12 || 12,
    minute: dateObj.getMinutes(),
    amOrPm: dateObj.getHours() < 12 ? "AM" : "PM",
  };
  return `${dateParts.day}/${dateParts.month}/${dateParts.year} ${dateParts.hour}:${dateParts.minute} ${dateParts.amOrPm}`;
}

let currentDate = new Date();
console.log(formattedDate(currentDate));
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()); // 0 to 11
console.log(currentDate.getDay()); // 0 to 6
console.log(currentDate.getDate()); // 1 to 31
console.log(currentDate.getTime());
