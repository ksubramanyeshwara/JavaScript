/*
document.createElement()

to create a new HTML element

The element created by the createElement() method does not automatically attach to the document, 
we have to explicitly append elements to the document.
*/
const mainDiv = document.createElement("div");
console.log(mainDiv);
document.body.append(mainDiv);

/*
element.innerHTML = "<tag>New Content</tag>"

The innerHTML is a property of the Element that allows us to get or set the HTML markup contained within the element.
You can use innerHTML to examine the current cuntent by logging
*/
mainDiv.innerHTML = "<h1>Learning DOM</h1>";
console.log(mainDiv);

//adding id and class to the div
mainDiv.id = "Container";
mainDiv.className = "flex";

/*
To make the created element a part of the document, We need to attach it to the document using

1. append() - It appends the Node objects or DOMString object to the parent element.
2. appendChild() - It can append only Node objects to the parent element.
*/

//An example including above 3 methods
const resource = document.createElement("p");
resource.innerHTML = "Youtube Videos";
mainDiv.append(resource);

//adding text using createTextNode()
const addText = document.createTextNode("Websites");
mainDiv.appendChild(addText);

/*
`innerHTML`: Use when you need to get or set the HTML content. It includes all the HTML tags, so you can use it to read or change the structure of the document.
`innerText`: Use when you need the text as it appears to the user. it won't include text from hidden elements.retrieves and sets the visible text content of an element.
`textContent`: it returns all text content, including text inside <script> and <style> elements, when you want to manipulate all text content of an element, including text inside <script> and <style> elements.
*/

/*
node.textContent = "Text"

get and set the text content of a node.
*/
const blogs = document.createElement("p");
blogs.textContent = "Blogs";
blogs.id = "blog";
mainDiv.appendChild(blogs);

/*
Adding list item using function
*/
const ul = document.createElement("ul");
ul.id = "Languages";
mainDiv.append(ul);

function addLanguage(languageName) {
  const li = document.createElement("li");
  li.textContent = languageName;
  document.querySelector("#Languages").append(li);
}
addLanguage("JavaScript");
addLanguage("Rust");
addLanguage("Go Lang");

//optimized approch
function optiAddLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector("#Languages").appendChild(li);
}
optiAddLanguage("CPP");
optiAddLanguage("Mojo");
optiAddLanguage("Java");

/*
Editing Element
*/

//editing element by replacing entire element not just content
const selectElement = document.querySelector("li:nth-child(4)"); //select element to edit
const editElement = document.createElement("li"); // create a new element
editElement.textContent = "Solana"; // add value to newly created element
selectElement.replaceWith(editElement); //replace the old element with newly created element

//editing element thorugh outerHTML
const lastElement = document.querySelector("li:nth-child(6)"); //select element to edit
lastElement.outerHTML = "<li>Kotlin</li>"; //edit the entire html element

//editing element just replacing the content without replacing entire li element
const selectElement1 = document.querySelector("li:last-child"); //select element to edit
selectElement1.textContent = "Dart"; // replacing content

/*
Removing Element
*/
const remeoveElement = document.querySelector("li:nth-child(3)");
remeoveElement.remove();
const remeoveElement1 = document.getElementById("blog");
remeoveElement1.remove();

// element.after()
const resources = document.querySelector("#resource");
const paragraph = document.createElement("p");
paragraph.innerText = "Resources to learn JavaScript";
resources.after(paragraph);

// element.prepend()
const ppnd = document.querySelector("#resource");
const heading = document.createElement("h1");
heading.textContent = "Wanna Learn JavaScript?";
ppnd.prepend(heading);

// element.removeChild
const parent = document.querySelector(".parent");
// parent.removeChild(parent.firstChild);
console.log(parent);

const div = document.createElement("div");
div.textContent = "Sunday";
parent.replaceChild(div, parent.firstElementChild);

const fruit = document.querySelector(".fruits");
console.log(fruit);

function addFruits(fruit) {
  const li = document.createElement("li");
  li.textContent = `${fruit}`;
  document.querySelector(".fruits").appendChild(li);
}
addFruits("mango");
