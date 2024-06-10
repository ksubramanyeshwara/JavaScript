# Attribute

The attribute is used to control the element's behaviour and to provide additional information to the element.

## Relationship between HTML Attributes and DOM Object's Properties

- HTML attributes are defined within HTML tags and provide additional information about the element.
- When a web browser parses your HTML code, it creates a Document Object Model (DOM), which is a tree-like representation of your webpage.
- In this DOM, each HTML element becomes a DOM object.
- Standard HTML attributes automatically become properties of the corresponding DOM object, creating a connection between how the element is defined and how you can interact with it using JavaScript.
- Not all HTML attributes become properties. This applies to custom attributes you define yourself or attributes specific to certain elements.
- The mapping between attributes and properties is generally one-to-one. For example, the `id` attribute of an element becomes the `id` property of the DOM object.
- Similarly, the `class` attribute becomes the `className` property.

**Standard Attributes**:

```HTML
<p id="main-paragraph" class="important">This is the main paragraph.</p>
```

```JS
let paraElement = document.getElementById("main-paragraph");
console.log(paraElement.id);
console.log(paraElement.className);
```

**Non-Standard Attributes**:

It will not directly be mapped into DOM objects.

```HTML
<h1 data-role="heading">This is a heading</h1>
```

```JS
const headingElement = document.querySelector("h1");
```

We must use methods to access both **standard** and **non-standard** attributes.

- **`element.getAttribute(name)`** – get the attribute value.
- **`element.setAttribute(name, value)`** – set the value for the attribute
- **`element.hasAttribute(name)`** – check for the existence of an attribute
- **`element.removeAttribute(name)`** – remove the attribute

The value of an attribute is always a string. However, when the attribute is converted to the property of a DOM object, the property value can be a string, a boolean, an object, etc.

```HTML
<p id="myParagraph" title="paragraphOne" data-progress="pending" data-value="10%">
      This is a paragraphOne
    </p>
```

## The data-\* attributes

If you want to add a custom attribute to an element, you should prefix it with the `data-` e.g., `data-secured` because all attributes start with `data-` are reserved for the developer’s uses.

To access `data-*` attributes, you can use the dataset property.

```HTML
<div id="main" ></div>
```

```JS
let bar = document.querySelector('#myParagraph');
console.log(bar.dataset);
```

## `element.setAttribute(name, value)`

It is used to set the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise, a new attribute is added with the specified name and value. The `setAttribute()` returns `undefined`.

```JS
element.setAttribute(attributeName, value);
```

- `element`: The DOM element on which you want to set an attribute.
- `attributeName`: The name of the attribute you want to set.
- `value`: The value to which the attribute should be set.

```JS
let para = document.getElementById("myParagraph");
para.setAttribute("class", "myPara");
para.setAttribute("style", "background-color:green");
```

## `element.getAttribute(name)`

It is used to retrieve the value of a specified attribute from an HTML element.

```JS
element.getAttribute(attributeName);
```

- `element` is the HTML element from which you want to retrieve the attribute value.
- `attributeName` is the name of the attribute whose value you want to retrieve.

```JS
let classAttribute = para.getAttribute("class");
console.log(classAttribute);

// Custoom Attribute
let customAttribute = para.getAttribute("data-info");
console.log(customAttribute);
```

## `element.hasAttribute(name)`

It is used to check whether a specified attribute exists on an HTML element. It returns a boolean value: `true` if the element has the attribute, and `false` if it does not.

```JS
element.hasAttribute(attributeName);
```

- `element`: The DOM element you want to check for an attribute.
- `attributeName`: The name of the attribute you want to check for.

```JS
let idAttr = para.hasAttribute("id");
let customAttr = para.hasAttribute("data-info");
let clasaAttr = para.hasAttribute("data-class");
console.log(idAttr);
console.log(customAttr);
console.log(clasaAttr);
```

## `element.removeAttribute(name)`

It is used to remove an attribute from an HTML element.

```JS
element.removeAttribute(name)
```

- `element`: This is the element from which you want to remove an attribute.
- `attributeName`: A string representing the name of the attribute you want to remove.

```JS
para.removeAttribute("id");
console.log(para);
```