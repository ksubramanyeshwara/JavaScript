# Object methods, "this"

A method in an object is simply a function that is a property of that object.

**Basic Syntax**

```JS
let object = {
  property: value,
  methodName: function() {
    // method body
  }
};
```

**ES6 syntax**

```JS
let object = {
  methodName() {
    // method body
  }
};
```

## "this" in methods

It’s common that an object method needs to access the information stored in the object to do its job.

The method inside the `user` object may need to access the properties of the `user` object itself so `this` is used

```JS
let user = {
    name : "Rohit",
    age : 35,
    sayHi(){
        console.log(`username is ${this.name}`)
    },
}
```

# Constructor, operator "new"

The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.

## Constructor function

- They are named with capital letter first.
- To create a new instance of the constructor function, you use the new operator

```JS
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let principal = new Person('John','Doe');
```

**When a function is executed with new, it does the following steps:**

- A new empty object is created and assigned to this.
- The function body executes. Usually it modifies this, adds new properties to it.
- The value of this is returned.

### Methods in constructor

```JS
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let principal = new Person('John','Doe');
console.log(principal.getFullName());
```

## Optional chaining '?.'

The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

### Accessing Nested Objects

```JS
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
```

### Accessing Nested Array

```JS
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
```
