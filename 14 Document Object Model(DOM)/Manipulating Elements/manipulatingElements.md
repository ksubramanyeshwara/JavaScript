# Manipulating Elements

## Creating an element

- `document.createElement(tag)`: Creates a new element node with the given tag.
- `document.createTextNode(text)`: Creates a new text node with the given text

```JS
let mainDiv = document.createElement("div")
console.log(mainDiv);
let txtNode = document.createTextNode("Hello World!");
console.log(txtNode);
```

## `.append()`:

It inserts content (a set of Node objects or DOMString objects) after the last child of a parent node.
It can handle a variety of content types including text nodes, HTML strings, and DOM elements.

- It can add multiple nodes or strings in a single call
- It does not return anything.

```JS
element.append(child1, child2, ..., childN);
```

`child1`, `child2`, ..., `childN`: These are the nodes or strings that will be appended to the element.

```JS
let mainDiv = document.createElement("div")
console.log(mainDiv);
let txtNode = document.createTextNode("Hello World!");
console.log(txtNode);
mainDiv.append(txtNode);
document.body.append(mainDiv);
```

**Appending Multiple Elements**

```JS
let divOne = document.createElement("div");
let divTwo = document.createElement("div");
let txtNodeOne = document.createTextNode("DivOne");
let txtNodeTwo = document.createTextNode("DivTwo");
divOne.append(txtNodeOne);
divTwo.append(txtNodeTwo);
document.body.append(divOne, "fff", divTwo, "Hello", "World");
```

## `.prepend()`:

It is used to insert content at the beginning of the selected elements within the DOM.

- It can prepend multiple nodes in a single call.
- It can directly prepend text strings and it doesn't return anything.

```JS
element.prepend(child1, child2, ..., childN);
```

`child1`, `child2`, ..., `childN`: These are the nodes or strings that will be prepended to the element.

```JS
let txtNodeThree = document.createTextNode("Prepend example");
mainDiv.prepend(txtNodeThree);
document.body.prepend(mainDiv);
// document.body.prepend(divOne, divTwo,);
```

## `appendChild()`:

It is used to add a child node to the end of the child nodes list of a specified parent node. It can be used to move an existing child node to the new position within the document.

- It can only append one node per call and it must be a DOM node (not a text string directly).
- If the node already exists elsewhere in the DOM, it will be moved to the new location (a node can't be in two places at once).
- It returns the appended child node as it appears in the DOM, which can be useful for further manipulation.

```JS
parentElement.appendChild(childElement);
```

```HTML
<div id="container">
        <ul id="listOne">
            <li>Apple</li>
            <li>Mango</li>
            <li>Grapes</li>
            <li>Cucumber</li>
        </ul>
        <ul id="listTwo">
            <li>Carrot</li>
            <li>Tomato</li>
        </ul>
    </div>
```

```JS
const container = document.querySelector("#container");

const paragraph = document.createElement("p");
let txtNode = document.createTextNode("Hello, world!");

let para = paragraph.appendChild(txtNode);
container.appendChild(para);
// container.appendChild(paragraph.appendChild(txtNode));
```

**Moving an Existing Element**

```JS
let listOne = document.querySelector("#listOne");
let listTwo = document.querySelector("#listTwo");
let lastChild = listOne.lastElementChild;
listTwo.appendChild(lastChild);
```

## `replaceChild()`:

It is used to replace an existing child node with a new node in the DOM. This method is a part of the Node interface and can be very useful when you need to update part of your webpage dynamically.

```JS
parentElement.replaceChild(newChild, oldChild);
```

- `parentElement`: This is the DOM node that contains the child node you want to replace.
- `newChild`: The new node that you want to insert in place of the old one.
- `oldChild`: The existing child node that you want to replace.

The `replaceChild()` method returns the replaced node (oldChild), or `null` if the oldChild does not exist.

> If the `newChild` is already in the DOM, it will be removed from its current position and added at the new location.

> If `oldChild` is not a child of `parentElement`, the method throws a `NotFoundError` exception.

```JS
let listOne = document.querySelector("#listOne");
let oldList = listOne.firstElementChild;
console.log(oldList);
let newList = document.createElement("li");
listOne.replaceChild(newList, oldList);
```

## `removeChild()`:

It is used to remove a child node from the DOM and returns the removed node.

```JS
parentElement.removeChild(childElement);
```

- `parentElement` is the DOM node that is the parent of the element you want to remove.
- `childElement` is the child node that you want to remove from the DOM.
- `removeChild()` method returns the removed child node as its result

```JS
let listOne = document.getElementById("listOne");
listOne.removeChild(listOne.lastElementChild);
```

## `textContent`

It is used to get or set the text content of a specified node and all its descendants. It is commonly used when you want to manipulate the text within an element, such as a `<div>`, `<span>`, or `<p>` tag, without affecting any child nodes that are not text.

> Text Retrieval: When you need to extract text from elements for use in functions, logs, or data storage.

- **Gets or Sets Text**: It can retrieve or change the text within an element.
- **Ignores HTML Tags**: Unlike `innerHTML`, `textContent` does not parse HTML tags. It treats them as plain text.
- **Performance**: It is faster than `innerHTML` when dealing with plain text because it does not involve HTML parsing.
- **Security**: Using `textContent` can prevent security risks associated with HTML injection because it does not parse HTML content.

```HTML
<h1 id="myHeading">Hello World</h1>
<p id="myParagraph">Learning manipulating Elements</p>
```

```JS
let myHeading = document.getElementById("myHeading");
//getting the textContent
console.log(myHeading.textContent);
let myParagraph = document.getElementById("myParagraph");
//setting the textContennt
myParagraph.textContent = "Learning DOM";

// we can also create new element and set the textContent
let secondPara = document.createElement("p");
secondPara.textContent = "Learning manipulating Elements";
myParagraph.appendChild(secondPara);
```

## `innerHTML`

It is used to get or set the HTML content of an element. It allows you to read the current HTML content of an element and also modify it by assigning a new HTML string to it.

- **Get HTML Content**: You can retrieve the inner HTML of an element, which includes all the tags, attributes, and text within that element.
- **Set HTML Content**: You can set the inner HTML of an element by providing a string of HTML. This will replace the existing content of the element with the new HTML provided.
- **Versatility**: It can handle any HTML content, including elements, attributes, text, and even scripts.
- **Performance**: While convenient, using `innerHTML` to manipulate large amounts of content or in performance-critical situations can be less efficient than methods like `createElement` and `appendChild`.

> HTML5 specifies that a `script` tag inserted with `innerHTML` should not execute.

```HTML
<div id="info">
    <h1 id="myHeading">Hello World</h1>
    <p id="myParagraph">Learning manipulating Elements<p>
</div>
```

```JS
let info = document.getElementById("info");
// getting the html contents
console.log(info.innerHTML);
// setting the html contents
info.innerHTML = "<div><h1>set by innerHTML</h1></div>"
```

>**Overwriting**: Setting `innerHTML` overwrites all existing content within the element, including any event listeners attached to child elements. To avoid this, consider using methods like `appendChild` or `insertAdjacentHTML` when you need to preserve existing elements or event listeners.

>**Security**: Be cautious when using `innerHTML` to set HTML content that includes user input, as this can lead to Cross-Site Scripting (XSS) vulnerabilities. Always sanitize user input before including it in your HTML.

## `after()`

It allows you to insert one or more nodes after the specified element. The `after()` method does not return a value; it performs the operation in-place.

The `after()` method can take a variety of arguments:
- Strings (representing HTML or text)
- DOM elements
- Document fragments

```JS
element.after(...contentToInsert);
```

`contentToInsert` can be:

- **A String**: The string will be converted into a text node and inserted.
- **An Element Node**: You can directly insert another HTML element as a sibling after the target element.
- **An Array of Nodes**: If you provide an array, each element within the array will be inserted one after another, following the target element.

```HTML
<div id="container">
    <div id="first">First Element</div>
    <div id="second">Second Element</div>
</div>
```

```JS
let firstElement = document.getElementById("first");
// creating a new elememt
let newElement = document.createElement("div");
let newElementOne = document.createElement("p");
newElement.textContent = "div inserted by after()";
newElementOne.textContent = "Insrted using after() method";

firstElement.after(
  newElement,
  newElementOne,
  "String Example",
  " ", "String Example One"
);
```

## `cloneNode()`

It is used to create a copy of a node, and optionally, all of its attributes and child nodes. It returns the cloned node.

```JS
const clone = originalNode.cloneNode(deep);
```

- **originalNode**: This is the node to be cloned.
- **deep (optional)**: A boolean value that, if true, indicates that all descendants of the node should also be cloned. If false or omitted, only the node itself will be cloned, without any of its children.
    - `true` - The node and its whole subtree (i.e., all of its descendants) are cloned.
    - `false` - Only the node itself is cloned.

```HTML
<div id="original">
    <p>First paragraph</p>
    <p>Second paragraph</p>
</div>
```

```JS
let origianlNode = document.getElementById("original");
// cloning with child
let cloneNode = origianlNode.cloneNode(true);
console.log(cloneNode);
origianlNode.appendChild(cloneNode);

// cloning without child
let cloneNodeOne = origianlNode.cloneNode(false);
console.log(cloneNodeOne);
```

**Use Cases**

- **Reusing components**: If you have a complex component that needs to be used multiple times on a page, you can create it once, clone it, and insert it wherever needed.

- **Manipulating offline nodes**: You can clone nodes, modify the clones without affecting the original, and then insert them into the document. This can help in avoiding reflows and repaints, improving performance when making multiple changes to the DOM.

>**Event Listeners**: Cloned nodes do not copy their event listeners. You need to re-add event listeners to the cloned node if necessary.

>**ID Attributes**: If the cloned node has an ID attribute, ensure to change or remove it to avoid duplicate IDs in the document.

## `insertBefore()`

It allows you to insert a node before a reference node as a child of a specified parent node.

```JS
parentNode.insertBefore(newNode, referenceNode);
```

- **parentNode**: This is the parent element that will contain the new node.
- **newNode**: This is the new node that you want to insert.
- **referenceNode**: This is the child node of parentNode before which the newNode will be inserted. If this parameter is `null`, the `newNode` is inserted at the end of the children of `parentNode`.

```HTML
<ul id="myList">
  <li>Item 1</li>
  <li>Item 3</li>
</ul>
```

```JS
let parentNode = document.getElementById("myList");
let newNode = document.createElement("li");
newNode.textContent = "Item 2";
let referenceNode = parentNode.querySelector("li:nth-child(2)");
let referenceNodeOne = parentNode.lastElementChild;
parentNode.insertBefore(newNode, referenceNodeOne);
```

- If `referenceNode` is not a child of `parentNode`, the `insertBefore()` method will throw an error.
- If `referenceNode` is `null`, the `newNode` will be added at the end of the `parentNode`'s children, which is similar to the behavior of the `appendChild()` method.
