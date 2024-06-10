/*
Setting inline styles
*/
// const bodyColor = document.querySelector(".body");
// bodyColor.style.backgroundColor = "black";
// bodyColor.style.color = "White";
// bodyColor.style.fontSize = "1.2em";

// const heading = document.querySelector(".Heading");
// heading.style.color = "Red";

// //setAttribute() to add inline colors
// const headingTwo = document.querySelector(".Heading2");
// headingTwo.setAttribute("style", "color:blue;background-color:yellow");

// //concatinating styles
// headingTwo.style.cssText += "font-size:2em";
// bodyColor.style.cssText = "color: blue;background-color:gray";

/*
CSS Classes
*/
let bodyColor = document.querySelector("body");
bodyColor.classList.add("body");
// let lang = document.getElementById("Languages");
// lang.classList.add("language");

/*
getComputedStyle()
*/
// let styleList = getComputedStyle(bodyColor);
// console.log(styleList.getPropertyValue("color"));
// let langOne = document.querySelector(".language");
// let langOneStyles = getComputedStyle(langOne, "::first-letter");
// console.log(langOneStyles.fontSize);

/*
className 
*/
// let currentClass = document.querySelector("#headingTwo");
// accessing the classList
// console.log(currentClass.className);
// adding the class
// currentClass.className += " red";
// currentClass.className += " large";
// removing the class
// currentClass.className = currentClass.className.replace(" red ", " ");

/*
classList
*/
// const headingThree = document.querySelector("#headingThree");
// // get the current class names
// console.log(headingThree.classList);

// // adding a new class
// headingThree.classList.add("bold", "italic");

// // removing a class
// console.log(headingThree.classList);
// headingThree.classList.remove("large")
// console.log(headingThree.classList);
// // checking if the class exists or not
// console.log(headingThree.classList.contains("large"));
// console.log(headingThree.classList.contains("bold"));

// // checking the item(index)
// console.log(headingThree.classList.item("bold"));
// console.log(headingThree.classList.item(2));

// // toggle()
// headingThree.classList.toggle("large");
// console.log(headingThree.classList);

// //Adding Multiple Style Rules through object
// const styleObject = {
//   backgroundColor: "blue",
//   color: "white",
//   fontSize: "18px",
//   fontWeight: "bold",
// };
// const multi = document.querySelector(".multi");
// for (const property in styleObject) {
//   multi.style[property] = styleObject[property];
// }
