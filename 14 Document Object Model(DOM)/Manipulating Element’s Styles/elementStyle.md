# Manipulating Element Style

It allows you to dynamically change the appearance of your webpage without reloading it. This can be particularly useful for enhancing user interactions or updating the UI based on certain conditions

**Common HTML**

```HTML
<h1 class="Heading">Popular Languages</h1>
<h2 class="Heading2">Based on Survey</h2>

<ul id="Languages">
    <li class="language">JavaScript</li>
    <li class="language">TypeScript</li>
    <li class="language">Rust</li>
    <li class="language">Go Lang</li>
    <li class="language">Python</li>
</ul>

<h2 class="multi">What else we Survey?</h2>
```

## Setting inline style

You can directly modify the style of an element by accessing its `style` property. This is similar to adding inline styles in HTML.

```JS
const bodyColor = document.querySelector(".body");
bodyColor.style.backgroundColor = "black";
bodyColor.style.color = "White";
bodyColor.style.fontSize = "1.2em";
```

To completely override the existing inline style, you set the cssText property of the style object.

```JS
element.style.cssText = 'color:red;background-color:yellow';
// example
bodyColor.style.cssText = "color: blue;background-color:gray";
```

you can use the `setAttribute()` method:

```JS
bodyColor.setAttribute("style","color: red; font-size:1.4em; background-color:gray "
);
```

> Inline styling is considered as bad practise.


## CSS Classes

Instead of directly setting styles, you can define CSS classes and then add or remove these classes from elements using the DOM. This method is cleaner, especially when dealing with multiple style changes.

```JS
let bodyColor= document.querySelector("body");
bodyColor.classList.add("body");
let lang = document.getElementById("Languages");
lang.classList.add("language");
```

## `getComputedStyle()`

It is a method of the window object, which returns an object that contains the computed style an element.

```JS
getComputedStyle(element);
getComputedStyle(element, pseudoElement);
```

- `element` - for which to get the computed style.
- `pseudoElement` - specifies the pseudo-element to match. It defaults to null.

- It returns live CSSStyleDeclaration object, which updates automatically when the element's styles are changed.

```JS
let styleList = window.getComputedStyle(bodyColor);
console.log(styleList.getPropertyValue("color"));

// pseudoElement
let langOne = document.querySelector(".language");
let langOneStyles = getComputedStyle(langOne, "::first-letter");
console.log(langOneStyles.fontSize);
```

## className

The `className` property allows you to get or set the class attribute of an HTML element, which is commonly used to apply CSS styles to elements.
 
The `className` property can be used with any HTML element that supports the class attribute. `className` can be used to add, remove, or change an element's classes.

```JS
let currentClass = document.querySelector("#headingTwo");
// accessing the classList
console.log(currentClass.className);
// adding the class
currentClass.className += " red";
currentClass.className += " large";
// removing the class
currentClass.className = currentClass.className.replace(" red ", " ");
```

## classList

It provides a more convenient and robust way to manipulate the class list of an element compared to using `className`.

It is a read-only property that returns a live DOMTokenList collection of the CSS classes of the element.

**Features of `classList`**

- `add`: Adds specified class(es) to the element. If these classes already exist in the attribute of the element, they are ignored.
- `remove`: Removes specified class(es) from the element.
- `toggle`: Toggles the specified class. If the class exists, it is removed; if it does not exist, it is added.
- `contains`: Checks if specified class exists in the element's classes.
- `replace`: Replaces an existing class with a new class.
- `length`: Returns the number of classes in the list.
- `item`: Returns the class name by its index in the list.

```JS
const headingThree = document.querySelector("#headingThree");
// get the current class names
console.log(headingThree.classList);

// adding a new class
headingThree.classList.add("bold", "italic");

// removing a class
console.log(headingThree.classList);
headingThree.classList.remove("large")
console.log(headingThree.classList);
// checking if the class exists or not
console.log(headingThree.classList.contains("large"));
console.log(headingThree.classList.contains("bold"));

// checking the item(index)
console.log(headingThree.classList.item("bold"));
console.log(headingThree.classList.item(2));

// toggle()
headingThree.classList.toggle("large");
console.log(headingThree.classList);
```

Benifits of using `classList`:

- It provides a convenient way to manipulate the CSS classes applied to an HTML element.
- It allows you to work with class names in a more object-oriented manner, making your code more readable and maintainable.
- It's a live collection, meaning that any changes made to the classes will be reflected in the DOM and vice versa.

