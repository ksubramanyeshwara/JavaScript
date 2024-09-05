let para = document.querySelector("#para");
let strong = document.querySelector("#strong");
let btn = document.querySelector("#btn");

/*
Event Bubbling
*/
// para.addEventListener("click", () => {
//   console.log("You have clicked on Paragraph");
// });
// strong.addEventListener("click", () => {
//   console.log("You have clicked on strong text");
// });
// btn.addEventListener("click", () => {
//   console.log("You have clicked on btn");
// });

/*
Event Capture
*/
// para.addEventListener(
//   "click",
//   () => {
//     console.log("You have clicked on Paragraph");
//   },
//   {
//     capture: true,
//   }
// );
// strong.addEventListener(
//   "click",
//   () => {
//     console.log("You have clicked on strong text");
//   },
//   {
//     capture: true,
//   }
// );
// btn.addEventListener(
//   "click",
//   () => {
//     console.log("You have clicked on btn");
//   },
//   {
//     capture: true,
//   }
// );

/*
e.stopPropagation();
*/
// para.addEventListener("click", (e) => {
//   console.log("You have clicked on Paragraph");
//   e.stopPropagation();
// });
// strong.addEventListener("click", (e) => {
//   console.log("You have clicked on strong text");
//   e.stopPropagation();
// });
// btn.addEventListener("click", (e) => {
//   console.log("You have clicked on btn");
//   e.stopPropagation();
// });

/*
e.preventDefault()
*/
// document.querySelector("#loginForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Form submission prevented.");
// });

/*
event delegation
*/

let itemList = document.querySelector("#itemList");
itemList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(e.target.textContent);
  }
});
let newLi = document.createElement("li");
newLi.textContent = "Elephant";
itemList.appendChild(newLi);

/*
event.target, event.currentTarget, this.target
*/
// para.addEventListener("click", clik);
// strong.addEventListener("click", clik);
// btn.addEventListener("click", clik);
// function clik(event) {
//   alert(
//     `You clicked on ${event.currentTarget.tagName} and ${event.target.tagName} and ${this.tagName}`
//   );
// }
