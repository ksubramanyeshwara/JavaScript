// Basic callback
function hello(callback) {
  console.log("Hello");
  callback();
}

function goodBye() {
  console.log("Good Bye!");
}

hello(goodBye);

/*
sum of two numbers using callback
*/
function sum(a, b, callback) {
  let result = a + b;
  callback(result);
}
function displayResult(data) {
  console.log(data);
}
sum(5, 10, displayResult);

/*
callback with setTimeOut
*/
function fetchData(callback) {
  console.log(`Starting Data Fetch`);
  setTimeout(() => {
    let data = { id: 1, name: "John Doe" };
    callback(data); // Invoking the callback function after 2 seconds
  }, 2000);
  console.log("Data Fetch initiated, Waiting for the data");
}
function processData(data) {
  console.log(`Data received is ${data.name}`);
}
fetchData(processData);

/* 
countdown with a callback 
*/
function countdown(number, callback) {
  let timer = setInterval(function () {
    console.log(number);
    number--;

    if (number < 0) {
      clearInterval(timer); // Stops the timer when the countdown reaches 0
      callback(); // Calls the callback function when countdown is done
    }
  }, 1000); // 1000ms = 1 second
}
function onCountdownComplete() {
  console.log("Countdown complete!");
}
// Call the countdown function with a number and the callback
countdown(5, onCountdownComplete);

/*
Array Transformation
Write a function that takes an array and a callback. The function should apply the callback to each element of the array and return a new array with the results.
*/

function transformArray(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}
// callback function
function double(num) {
  return num * 2;
}
let arr = [1, 2, 3, 4, 5];
let result = transformArray(arr, double);
console.log(result); // Output: [2, 4, 6, 8, 10]
