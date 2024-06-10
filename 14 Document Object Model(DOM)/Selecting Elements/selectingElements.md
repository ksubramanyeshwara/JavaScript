# Selecting Elements

Selecting elements is essential for manipulating and interacting with web pages using JavaScript.

- getElementById()
- getElementsByTagName()
- getElementsByClassName()
- querySelector()
- querySelectorAll()

## getElementById()

Most popular and most used in JavaScript.

It returns an element whose id is matched with the passed string, If the document has no element with the specified id, the `document.getElementById()` returns null
Because the `id` of an element is unique within an HTML document.

The document.getElementById() is a quick way to access an element. If the HTML document has multiple elements with the same id, the document.getElementById() method returns the first element it encounters.

```HTML
<h2 id="id1">Selecting/Accessing Elements</h2>
```

```JS
const id = document.getElementById("id1");
console.log(id);
```

## getElementsByTagName()

Selects and returns all HTML elements with the given tag name in form of `HTMLCollection` which is an array-like object.

The return collection of the getElementsByTagName() is live, meaning that it is automatically updated when elements with the matching tag name are added and/or removed from the document.

when applied on the document then all the element with given tag name is selected. When applied on some element then all its child element with a given name is selected but not itself

```html
<p class="paragraph">Something</p>
<p class="paragraph"></p>
<p class="paragraph"></p>

<div>
    <p class="innerPara"></p>
    <p class="innerPara"></p>
    <p class="innerPara"></p>
    <p class="innerPara"></p>
</div>
```

```JS
let element = document.getElementsByTagName("p");
console.log(element);
```

## getElementsByClassName()

Returns live HTMLCollection of elements that match the specified class name. If specified clssname is not available then returns empty HTMLCollection.

```html
<p class="blue">This is first element</p>
<p class="blue big">This is second element</p>
<p class="blue big">This is third element</p>
<p class="blue">This is fourth element</p>
```

```js
const classBlue = document.getElementsByClassName("blue");
console.log(classBlue);

//converting HTMLCollection to array
const arrayHTMLCollection = Array.from(classBlue);
console.log(arrayHTMLCollection);

```

## querySelector()

It returns the first element that matches one or more CSS selectors. If no matches are found, `null` is returned. It can be used to select id, class, tag, attribute, universal

```html
<div id="demos">
    <p class="demo">Element 1.</p>
    <p class="demo">Element 2.</p>
    <p class="demo">Element 3.</p>
</div>
```

```JS
console.log(document.querySelector("#demos"));
const qs = document.querySelector(".demo");
console.log(qs);
```

## querySelectorAll()

Returns a static NodeList representing collection of all elements that match the selectors.

```html
<div id="demos">
    <p class="demo">Element 1.</p>
    <p class="demo">Element 2.</p>
    <p class="demo">Element 3.</p>
</div>
```

```JS
const qs = document.querySelectorAll(".demo");
console.log(qs);

//converting NodeList into array
const arr = Array.from(qs);
console.log(arr);
```
