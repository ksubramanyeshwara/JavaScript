# Traversing Elements

It is used to navigate from one element to other in the tree structure.

- Child Element - `children`, `childNodes`, `firstChild`, `lastChild`
- Parent Element - `parentNode`, `parentElement`
- Sibling Element - `nextSibling`, `previousSibling`

**HTML is common for all the examples:**

```HTML
<div class="grandParent">
    <div class="parent">
        <div class="day">Sunday</div>
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day dayFour">Wednesday</div>
        <div class="day">Thursday</div>
        <div class="day">Friday</div>
        <div class="day">Saturday</div>
    </div>
</div>

<ul id="menu">
    <li>Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li>About Us</li>
</ul>
```

# Child Element

To get all child nodes, first child, last child.

## To Get All Childrens

`.children`: Returns an HTMLCollection of only the child elements, excluding text and comment nodes.

`.childNodes`: Returns a NodeList containing all child nodes of an element, including text nodes and comment nodes.

```JS
// Selecting the parent
const parent = document.querySelector(".parent");
console.log(parent);

const allChilderns = parent.children;
console.log(allChilderns);

const allChildernsOne = parent.childNodes;
console.log(allChildernsOne);
```

## First Child

`firstChild`: Returns a child node which can be any node type such as an element node, a text node, or a comment node.
>Note that any whitespace such as a single space, multiple spaces, returns, and tabs will create a `#text` node.

`firstElementChild`: Returns the first child with the Element node only


```JS
const firstChild = parent.firstChild;
console.log(firstChild);
console.log(parent.firstElementChild);
```

## Last Child

`lastChild`: Returns the last element node, text node, or comment node.

`lastElementChild`: Returns the last child with the Element node only

```JS
console.log(parent.lastChild);
console.log(parent.lastElementChild);
```

## Summary

The `firstChild` and `lastChild` return the first and last child of a node, which can be any node type including text node, comment node, and element node.

The `firstElementChild` and `lastElementChild` return the first and last child Element node.

The `childNodes` returns a live NodeList of all child nodes of any node type of a specified node. The `children` returns HTMLCollection of only the child elements, excluding text and comment nodes.

# Parent Element

Selecting parent element through child element. We are able navigate upwards one parent at a time.

`parentNode`: Returns the parent node of the specified element.
`parentElement`: Similar to parentNode but returns the parent element (or null if the parent node is not an element).

> Accessing the parent node is particularly useful when you want to dynamically change the properties of the parent element based on the interaction with or the state of the child element.

```JS
let day = document.querySelector(".day");
console.log(day.parentNode);
console.log(day.parentElement);
```

**Selecting ansestor**

```JS
let grandParent = day.closest(".grandParent");
console.log(grandParent);
```

## Summary

The `document` and `DocumentFragment` do not have a parent node

# Sibling Element

Sibling elements are elements that share the same parent element. These elements are on the same level in the hierarchy of the DOM tree.

**Types of Siblings:**
- **Adjacent Sibling**: These are elements that are next to each other in the same level of the DOM tree, having same parent node.

    **_example_**, two divs or a paragraph followed by a div within the same parent element.

- **General Sibling**: These are elements that share the same parent but are not necessarily next to each other in the DOM tree

## Properties to Access Sibling Elements

- `nextSibling`: Returns the next sibling node of the specified element in the DOM tree, including text nodes and comment nodes.
- `nextElementSibling`: Returns the next sibling element (ignoring text and comment nodes) of the specified element in the DOM tree. It returns `null` if the specified element is the last one in the list.
- `previousSibling`: Returns the previous sibling node of the specified element in the DOM tree, including text nodes and comment nodes.
- `previousElementSibling`: Returns the previous sibling node of the specified element in the DOM tree, including text nodes and comment nodes. It returns `null` if the current element is the first one in the list.

```JS
let dayFour = document.querySelector(".dayFour");
let nextElementSibling = dayFour.nextElementSibling;
let previousElementSibling = dayFour.previousElementSibling;
console.log(dayFour);
console.log(nextElementSibling.textContent);
console.log(previousElementSibling.textContent);
```
