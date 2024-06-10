let paraElement = document.getElementById("main-paragraph");
console.log(paraElement.id);
console.log(paraElement.className);

let bar = document.querySelector("#main");
console.log(bar.dataset);

console.log(" ");
console.log(" ");
console.log(" ");

/*
The HTML attribute is a special keyword which is used inside the opening tag of the element. 
The attribute is used to control the element's behaviour and to provide additional information to the element

When the web browser loads an HTML page, the web browser will automatically convert attributes of HTML elements to properties of DOM objects.
if the tag is <p title="paragraph title">, then the DOM object has 'thisParagraph.title = "paragraph title"'

Every attribute of an element does not become DOM object property, only the standard attribute of the element becomes DOM object property.
*/
const para = document.querySelector("#myParagraph");
console.log(para.id);
console.log(para.title);

/*
you don't have access to non-standard attributes since there won't be a DOM property for it.

To access both standard and non-standard attributes, you use the following methods:

element.hasAttribute(name) – check for the existence of an attribute
element.getAttribute(name) – get the attribute value
element.setAttribute(name, value) – set the value for the attribute
element.removeAttribute(name) – remove the attribute
*/

/*
element.hasAttribute(name)

The method returns a boolean value, true if attribute exist in the element and false if attribute does not exist.
*/
const hasAttr = document.querySelector("#myParagraph");
if (hasAttr.hasAttribute("title") && hasAttr.hasAttribute("class")) {
  console.log("paragraphOne exits");
} else {
  console.log("paragraphOne don't exits");
}

/*
element.getAttribute(name)

The getAttribute() method is used to get the attribute value from any DOM element. 
This method returns the value of the attribute specified,
if the attribute doesn't exist then value returned is null or null or "" (empty string).
*/
const getAttr = document.querySelector(".para");
console.log(getAttr.getAttribute("id"));
console.log(getAttr.getAttribute("title"));

/*
element.setAttribute(name, value)

The setAttribute() method is used to set new attribute and its value to the DOM element. 
If the attribute already exists then the value of the attribute is updated with the new value.
*/
const setAttr = document.querySelector("#myParagraph");
setAttr.setAttribute("class", "paraOne");
setAttr.setAttribute("id", "myPara");

/*
element.removeAttribute(name)

The removeAttribute() method is used to remove the attribute with the specific name from the element.
*/
const rmvAttr = document.querySelector("#myPara");
rmvAttr.removeAttribute("class");
