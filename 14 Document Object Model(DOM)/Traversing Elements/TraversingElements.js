/*

Let's learn how to get he first child element, last child element, and all children of a specified element.

*/

//selecting parent element
const parent = document.querySelector(".parent");
console.log(parent);

// to get all children nodes - accessing children elements through parent
const child = parent.children;
console.log(child);

//another way - this will also inculdes newline as well
const child1 = parent.childNodes;
console.log(child1);

//first child - Note that any whitespace such as a single space, multiple spaces, returns, and tabs will create a #text node.
const firstChild = parent.firstChild;
console.log(firstChild);

//to get the first child with the Element node only, you can use the firstElementChild property
console.log(parent.firstElementChild);

//the lastChild property returns the first element node, text node, or comment node.
console.log(parent.lastChild);
//to get the last child with the Element node only, you can use the lastElementChild property
console.log(parent.lastElementChild);

//selecting parent element through child element
const childrenDiv = document.querySelector(".day");
console.log(childrenDiv.parentNode);
console.log(childrenDiv.parentElement);

//getting siblings
