let parentNode = document.getElementById("myList");
let newNode = document.createElement("li");
newNode.textContent = "Item 2";
let referenceNode = parentNode.querySelector("li:nth-child(2)");
let referenceNodeOne = parentNode.lastElementChild;
parentNode.insertBefore(newNode, referenceNodeOne);
