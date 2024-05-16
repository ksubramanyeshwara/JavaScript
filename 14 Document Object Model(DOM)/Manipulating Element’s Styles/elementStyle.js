//Setting inline styles
const bodyColor = document.querySelector(".body");
bodyColor.style.backgroundColor = "black";
bodyColor.style.color = "White";

const heading = document.querySelector(".Heading");
heading.style.color = "Red";

//setAttribute() to add inline colors
const headingTwo = document.querySelector(".Heading2");
headingTwo.setAttribute("style", "color:blue;background-color:yellow");

//concatinating styles
headingTwo.style.cssText += "font-size:2em";

//Adding Multiple Style Rules through object
const styleObject = {
  backgroundColor: "blue",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
};
const multi = document.querySelector(".multi");
for (const property in styleObject) {
  multi.style[property] = styleObject[property];
}
