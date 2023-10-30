/*
getElementsById()

Most popular and most used in JavaScript. It returns an element whose id is matched with the passed string
If the document has no element with the specified id, the document.getElementById() returns null
Because the id of an element is unique within an HTML document, the document.getElementById() is a quick way to access an element.

If the HTML document has multiple elements with the same id, the document.getElementById() method returns the first element it encounters.
*/

const id = document.getElementById("id1");
console.log(id);

/*
getElementsByClassName()

returns an HTMLCollection of elements that match the passed class name.
Class names separated by whitespace, we can search for multiple class names.
if specified clssname is not available then returns empty HTMLCollection


This method can be applied on a document or on any specific element of the document
** when applied on any element like <div>, <article>, etc then only child element of the element having given class name is returned,
** when applied on the document then all the elements with the given class name within the document is returned.

const elements = document.getElementsByClassName(names);
or
const elements = rootElement.getElementsByClassName(names);

*/

const h2 = document.getElementsByClassName("header2");
console.log(h2);

const classBlue = document.getElementsByClassName("blue");
console.log(classBlue);

//converting HTMLCollection to array
const arrayHTMLCollection = Array.from(classBlue);
console.log(arrayHTMLCollection);

//selecting multiple classes
const multiple = document.getElementsByClassName("big blue");
console.log(multiple);

/*

document.getElementsByTagName()

selects and returns all HTML elements with the given tag name in form of an array.

when applied on the document then all the element with given tag name is selected
when applied on some element then all its child element with a given name is selected but not itself.


const elements = document.getElementsByTagName();
or
const elements = rootElement.getElementsByTagName();

*/

const tagName = document.getElementsByTagName("p");
console.log(tagName);

/*

document.querySelector()

The querySelector() method allows you to select the first element that matches one or more CSS selectors.

It can be used to select id, class, tag, attribute, universal

*/

console.log(document.querySelector("#demos"));
const qs = document.querySelector(".demo");
console.log(qs);


/*
document.querySelectorAll()

selects all the element matching the given string and return as a collection.

*/
const qsa = document.querySelectorAll(".demo");
console.log(qsa);

//converting NodeList into array
const arrayNodeList = Array.from(qsa);
console.log(arrayNodeList);

/*

**document.getElementsByClassName() 

-- it gives HTMLCollection
-- it dosen't give any array property

** document.querySelectorAll()

-- it gives NodeList
-- it provides forEach array property

To convert NodeList and HTMLCollection to array use "Array.from()" method.

*/
