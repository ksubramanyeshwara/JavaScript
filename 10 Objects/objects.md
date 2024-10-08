# Objects

In JavaScript, an object is like a container that can hold various properties (which are mutable) and methods (functions) as a single unit.

In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

1. Properties: Properties are the characteristics of an object. They are defined using a key-value pair. The key property is an identifier (either a name, a number, or a string literal) And the value of a property can be any value. (such as numbers, strings, arrays, other objects, or even functions).

2. Methods: Methods are functions that are stored as properties within an object. These functions can be executed (called) using the object they belong to. Methods allow objects to perform actions or behaviors. Methods are defined in the same way as properties, but their values are functions.

Javascript is an object-based language, everything in javascript is an object or can be made an object using a new keyword.

- Numbers can be made object using the new keyword
- Boolean can be made object using the new keyword
- Strings can be made object using the new keyword
- An array is an object
- A function is an object
- Date is an object
- Regex (Regular Expression) is an object
- Maths is an object
- Objects are always objects

## JavaScript Object structure

![Object structure](./javascript-object.png)

## Creating an Object

There are 5 ways to create objects in JavaScript

1. Object Literals (Object Initializers)
2. using new keyword
3. constructor function
4. Object.create()
5. ES6 classes
6. Factory Functions

**_Among all ways to create objects in javascript, the most common way is the object literal._**

## Object Literals

```JS
const obj = {
property1: value1, // property name may be an identifier
2: value2, // or a number
"property n": value3, // or a string
};
```

```JS
const JsUser = {
    name: "Subramanya",
    age: 18,
    location: "Bengaluru",
    email: "Subramanya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};
console.log(JsUser);

/*
    OUTPUT

    {
     name: 'Subramanya',
     age: 18,
     location: 'Bengaluru',
     email: 'Subramanya@google.com',
     isLoggedIn: false,
     lastLoginDays: [ 'Monday', 'Saturday' ]
    }
*/
```

## using `new` keyword

This method is similar to other class based language, ex Java. In this, the object is created using the ‘new’ keyword.

```JS
let person = new Object();
person.name = "K Subramanyeshwara";
person.age = 26;
person.getDetails = function(){
  return `${this.name} is ${this.age} years old`;
};

console.log(person.getDetails());

/*
    OUTPUT

    K Subramanyeshwara is 26 years old
*/
```

## Constructor function

When you want to create multiple objects where the objects share same design.

- Create an object by writing a constructor function.
- The function should have a parameter that is the object properties.
- Create an instance of the object with `new` keyword.

```JS
function Laptop(brand, processor, ram, gpu) {
  this.brand = brand;
  this.processor = processor;
  this.ram = ram;
  this.gpu = gpu;
  this.laptopDetails = function () {
    return `The brand of the laptop is ${this.brand} and the processor is ${this.processor} and the ram is ${this.ram} and the gpu is ${this.gpu}`;
  };
}
// here brand, ram, cpu are the keys
const laptop1 = new Laptop("Lenovo", "AMD", 24, "1024mb");
const laptop2 = new Laptop("Dell", "Intel", 16, "1024mb");
console.log(laptop1.laptopDetails());
console.log(laptop2.laptopDetails());


/*
    OUTPUT

    The brand of the laptop is Lenovo and the processor is AMD and the ram is 24 and the gpu is 1024mb
    The brand of the laptop is Dell and the processor is Intel and the ram is 16 and the gpu is 1024mb

*/
```

You can use the `prototype` property to add the methods to an object and this method is shared by all the objects created by constructor function.

```JS
function Person(firstname, lastname, age, company, occupation, salary) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.company = company;
  this.occupation = occupation;
  this.salary = salary;
  this.jobDescription = function () {
    return `I work as a ${this.occupation} at ${this.company} and my monthly salary is ${this.salary}.`;
  };
}

Person.prototype.fullName = function () {
  return `My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old.`;
};

let person1 = new Person("K", "Subramanyeshwara", 25, "Lava", "SDE", 155000);

console.log(person1.fullName());
console.log(person1.jobDescription());

/*
    OUTPUT

    My name is K Subramanyeshwara and I am 25 years old.
  I work as a SDE at Lava and my monthly salary is 155000.
*/
```

## `Object.create()`

The `Object.create()` method is used to create an object from an existing object. It creates a new object with the same properties as the existing object.

It is a singleton object.

```JS
let person = {
  firstname: "steve",
  lastname: "jobs",
  fullName: function() {
    return "My name is " + this.firstname + " " + this.lastname;
  }
}
// create a new object
let newPerson = Object.create(person);
// printing just object
console.log(newPerson);// it will not show the properties because all the properties are hidden under prototype and can access them as regular properties.
console.log(newPerson.fullName());

// change the value of the new object
newPerson.firstname = "K";
newPerson.lastname = "Subramanyeshwara";

console.log(newPerson.fullName());

/*

    OUTPUT

    {}
    My name is steve jobs
    My name is K Subramanyeshwara
*/
```

## Using ES6 classes

ES6 supports class concept like any other object oriented language.

The class is used to create an object constructor.

There is difference between the class and the object constructor. All the difference is in their syntax

```JS
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.firstName} ${this.lastName} and my age is ${this.age}`;
  }
}

const person = new Person('K', 'Subramanyeshwara', 26);
console.log(person.greet());

/*
    OUTPUT

    Hello, I'm K Subramanyeshwara and my age is 26
*/
```

## Accessing properties of Object

1. Using the dot operator.
2. Using the bracket operator.

**_dot operator_**

Using `dot operator` you can acess the properties of the object by writing the object's name, a dot (`.`), and the property name.

The dot operator is most commonly used to access the properties of an object.

```JS
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

console.log(myCar.make);
console.log(myCar.model);

/*
    OUTPUT

    Ford
    Mustang
*/
```

**_bracket operator_**

Another way to access the properties of an object is `bracket operator`.

It is useful when you are not sure about the properties name whether it contains white space or not.

```JS
let Laptop = {
   brand: "Samsung",
   "processor": "Snapdragon",
    "RAM": 24,
    gpu : "1024mb"
};

console.log(Laptop["brand"]);
console.log(Laptop["processor"]);
console.log(Laptop["RAM"]);

/*
    OUTPUT

    Samsung
    Snapdragon
    24
*/
```

**_Difference between dot (.) and bracket ( [ ] ) notations_**

Dot Notation only allows static keys while Bracket Notation accepts dynamic keys.

Static key here means that the key is typed directly,

Dynamic key here means that the key is evaluated from an expression.

Read More on [freeCodeCamp](https://www.freecodecamp.org/news/dot-notation-vs-square-brackets-javascript/#:~:text=Differences%20between%20Dot%20Notation%20and,is%20evaluated%20from%20an%20expression.)

**_Using symbol as object-key_**

```JS
const mySymbl = Symbol("Key");

const Laptop = {
   brand: "Samsung",
   "processor": "Snapdragon",
   "RAM": 24,
    gpu: "1024mb",
    [mySymbl]: "myKey"
};

console.log(Laptop[mySymbl]);
console.log(Laptop);

/*
  OUTPUT

  myKey
  {
   brand: 'Samsung',
   processor: 'Snapdragon',
   RAM: 24,
   gpu: '1024mb',
   [Symbol(Key)]: 'myKey'
  }
*/
```

## Updating an existing properties of an Object

```JS
const Laptop = {
   brand: "Samsung",
   "processor": "Snapdragon",
   "RAM": 24,
    gpu: "1024mb",
};
console.log(Laptop);

//dot noatation
Laptop.gpu = "2048mb";
console.log(Laptop);

//bracket notation
Laptop["processor"] = "AMD";
console.log(Laptop);

/*
  OUTPUT

  { brand: 'Samsung', processor: 'Snapdragon', RAM: 24, gpu: '1024mb' }
  { brand: 'Samsung', processor: 'Snapdragon', RAM: 24, gpu: '2048mb' }
  { brand: 'Samsung', processor: 'AMD', RAM: 24, gpu: '2048mb' }
*/
```

**_Handling the non-existing property_**

Retrieving the property which does not exist inside the obj will return undefined.

```JS
let person = {
   first_name: "K Subramanyeshwara"
};

console.log(person.first_name);
console.log(person.last_name);

/*
  OUTPUT

  K Subramanyeshwara
  undefined
*/
```

## Adding new properties to an Object

```JS
const Person = {
    firstName: "K",
    lastName: "Subramanyeshwara",
    age: 26,
    location: "Bengaluru",
    email: "k@remote.com"
}
console.log(Person);

//dot notation
Person.socialMediaPresence = true;
console.log(Person);

//bracket notation
Person["married"] = false;
console.log(Person);

/*
  OUTPUT

  {
   firstName: 'K',
   lastName: 'Subramanyeshwara',
   age: 26,
   location: 'Bengaluru',
   email: 'k@remote.com'
  }
  {
   firstName: 'K',
   lastName: 'Subramanyeshwara',
   age: 26,
   location: 'Bengaluru',
   email: 'k@remote.com',
   socialMediaPresence: true
  }
  {
   firstName: 'K',
   lastName: 'Subramanyeshwara',
   age: 26,
   location: 'Bengaluru',
   email: 'k@remote.com',
   socialMediaPresence: true,
   married: false
  }
*/
```

## Deleting properties from an Object

We can delete the property using `delete` operator. If the property is not present then it will simply ignore it.

```JS
const Car = {
    name: "Ford",
    color: "Red",
    price: "$100000",
    topSpeed: "220kph"
}
console.log(Car);
delete Car.price;
console.log(Car);

/*
  OUTPUT

  { name: 'Ford', color: 'Red', price: '$100000', topSpeed: '220kph' }
  { name: 'Ford', color: 'Red', topSpeed: '220kph' }
*/
```

## Property value shorthand

Using existing variables as values for property names.

```
function makeUser(name, age){
 return{
   name: name,
   age: age,
 };
}

let user = makeUser("Rohit", 35);
console.log(user.name);
```

In the example above, properties have the same names as variables.

## Checking if property or method exist in object

**_using `in` operator_**

`in` operator will check whether the given property exist or not. It will look for the property in the prototype chain also.

```JS
const User = {
    fullName: "K Subramanyeshwara",
    age: 26,
    gender: "male",
    getDetails: function () {
        return`name is ${this.fullName}, the age is ${this.age} and the gender is ${this.gender}`;
    }
}

console.log(User.getDetails());
console.log("fullName" in User);
console.log("getDetails" in User);

/*
  OUTPUT

  name is K Subramanyeshwara, the age is 26 and the gender is male
  true
  true
*/
```

**_hasOwnProperty()_**

`hasOwnProperty()` operator will check whether the given property or method exist or not. It will not check for the properties present in the prototype chain.

```JS
const User = {
    fullName: "K Subramanyeshwara",
    age: 26,
    gender: "male",
    getDetails: function () {
        return`name is ${this.fullName}, the age is ${this.age} and the gender is ${this.gender}`;
    }
}

console.log(User.getDetails());
console.log(User.hasOwnProperty("fullName"));
console.log(User.hasOwnProperty("getDetails"));

/*
  OUTPUT

  name is K Subramanyeshwara, the age is 26 and the gender is male
  true
  true
*/
```

## Object Destructuring

It allows you to extract properties from an object and assign them to variables in a concise and readable way.

```JS
// create an object
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2005,
  color: "White",
  price: 8000,
};

// Destructure the Object: Use curly braces {} to specify the properties you want to extract
const { brand, model, year } = car;

//  you can use the destructured variables directly.
console.log(`Brand: ${brand}`);
console.log(`Model: ${model}`);

// You can also rename the variables while destructuring, You can only rename the variable not the property name of the object
const { color: carColor, price: carPrice } = car;
console.log(`Color: ${carColor}`);

// Default Values
// You can assign default values to variables in case the property does not exist in the object
const { engine = "Petrol" } = car;
console.log(`Engine: ${engine}`);

// Nested Object Destructuring
// You can also destructure nested objects using curly braces {} inside the outer curly braces.
const Person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  job: {
    title: "Software Engineer",
    company: "ABC Inc",
    salary: 90000,
  },
};
const {
  address: { city, state },
  job: { title: jobTitile },
} = Person;
console.log(`City: ${city}`);
console.log(`Job: ${jobTitile}`);

/*
  OUTPUT

  Brand: Toyota
  Model: Corolla
  Color: White
  Engine: Petrol
  City: New York
  Job: Software Engineer
*/ 

```

**_What is `this` referred in Object?_**

The `this` keyword refers to the current object the code is being written inside. Why don't we write `object` name instead of `this`.

when you only have to create a single object literal, it's not so useful. But if you create more than one, `this` enables you to use the same method definition for every object you create.

Let's understand through an example,

```JS
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
/*
  OUTPUT

  Hi! I'm Chris.
  Hi! I'm Deepti.
*/
```
