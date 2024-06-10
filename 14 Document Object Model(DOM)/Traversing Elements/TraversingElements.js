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

//the lastChild property returns the last element node, text node, or comment node.
console.log(parent.lastChild);
//to get the last child with the Element node only, you can use the lastElementChild property
console.log(parent.lastElementChild);

//selecting parent element through child element
const dayOne = document.querySelector(".day");
console.log(dayOne.parentNode);
console.log(dayOne.parentElement);

/*
getting siblings
*/

//to get next sibling use nextElementSibling attribute
const nextSibling = document.querySelector(".dayFour"); //selecting an element
console.log(nextSibling.nextElementSibling); //printing the next sibling of selected element

// const nextSibling1 = document.querySelector(".parent:nth-child(5)"); //selecting an element
// console.log(nextSibling1.nextElementSibling); //printing the next sibling of selected element

//to get previous sibling use previousElementSibling attribute
const previousSibling = document.querySelector(".dayFour"); //selecting an element
console.log(previousSibling.previousElementSibling); //printing the next sibling of selected element
