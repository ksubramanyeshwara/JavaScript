/* 
it gives less features 

document.getElementById("owl").onclick = function () {
  alert("Owl");
};

attachEvent() - IE
jQuery - onEvent

*/

/* e - eventObject

false is default

*/
document.getElementById("owl").addEventListener("click", function (e) {
  console.log(e);
});

/* 
## to be studied
** type 
    -- keyboard 
    -- mouse
-- timestamp - interviews
-- defaultPrevented
-- target
-- toElement
-- srcElement
-- currentTarget
-- clientX, clientY
-- screenX, screenY
-- altkey, ctrlkey, shiftkey, keyCode
*/

/* 
# Event Propogation
    -- Event bubbling - default (false) -> it will first track inner element and then go to outer elements - inside out
    -- Event capturing - True -> it will first track outer element and then goes to inner element

*/

/* 
Event bubling

document.getElementById("images").addEventListener("click", (e) => {
  console.log("Clicked inside the ul");
});

document.getElementById("owl").addEventListener("click", (e) => {
    //it will stop event bubbling
    e.stopPropagation();
  console.log("Owl clicked");
});
*/

/* 
Event capturing
*/
/* document.getElementById("images").addEventListener(
  "click",
  (e) => {
    console.log("Clicked inside the ul");
  },
  true
);

document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log("Owl clicked");
  },
  true
);
 */

/* 
e.preventDefault()

document.getElementById("google").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    console.log("Google Clicked");
  },
  false
);
*/

/* 
deleting images after clicking on it

e.target -> it will tell from where event is occuring

*/
document.querySelector("#images").addEventListener(
  "click",
  (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove();
    }
    // removeIt.parentNode.removeChild(removeIt);
  },
  false
);
