//Using Object Literals

// const JsUser = {
//     name: "Subramanya",
//     age: 18,
//     location: "Bengaluru",
//     email: "Subramanya@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser);



//Creating object with a constructor function
// function Laptop(brand, processor, ram, gpu) {
//     this.brand = brand;
//     this.processor = processor;
//     this.ram = ram;
//     this.gpu = gpu;
// }
// const laptop1 = new Laptop("Lenovo", "AMD", 24, "1024mb");
// const laptop2 = new Laptop("Dell", "Intel", 16, "1024mb");
// console.log(laptop1);
// console.log(laptop2);
//prototype
// function Person(firstname, lastname, age) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.age = age;
// }
// Person.prototype.fullName = function() {
//   return "My name is " + this.firstname + " " + this.lastname;
// }
// let person1 = new Person("K", "Subramanyeshwara", 25);
// console.log(person1.fullName());



// prototype object
// let person = {
//   firstname: "steve",
//   lastname: "jobs",
//   fullName: function() {
//     return "My name is " + this.firstname + " " + this.lastname;
//   }
// }
// create a new object
// let newPerson = Object.create(person);
// printing just object
// console.log(newPerson);// it will not show the properties because all the properties are hidden under prototype and can access them as regular properties.
//to see what is hidden under prototype
// console.log(Object.getPrototypeOf(newPerson));
// console.log(newPerson.fullName());
// change the value of the new object
// newPerson.firstname = "K";
// newPerson.lastname = "Subramanyeshwara";
// console.log(newPerson.fullName());



// let person = new Object();
// person.name = "K Subramanyeshwara";
// person.age = 26;
// person.getDetails = function(){
//   return `${this.name} is ${this.age} years old`;
// };
// console.log(person.getDetails());



//ES6 classes
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   greet() {
//     return `Hello, I'm ${this.firstName} ${this.lastName} and my age is ${this.age}`;
//   }
// }
// const person = new Person('K ', 'Subramanyeshwara', 26);
// console.log(person.greet());

/*
Accessing properties of Object
*/

//dot notation
// const myCar = {
//   make: "Ford",
//   model: "Mustang",
//   year: 1969,
// };

// console.log(myCar.make);
// console.log(myCar.model);

// let Laptop = {
//    brand: "Samsung",
//    "processor": "Snapdragon",
//     "RAM": 24,
//     gpu : "1024mb"
// };

// console.log(Laptop["brand"]);
// console.log(Laptop["processor"]);
// console.log(Laptop["RAM"]);



/*
Interview Question
Declaring symbol inside the object as key or Using symbol as object-key
Adding predefined method to object property.
*/
// const mySymbl = Symbol("Key");
// const Laptop = {
//    brand: "Samsung",
//    "processor": "Snapdragon",
//    "RAM": 24,
//     gpu: "1024mb",
//     [mySymbl]: "myKey"
// };
// console.log(Laptop[mySymbl]);
// console.log(Laptop);


/*
Updating an existing properties of an object
*/
// const Laptop = {
//    brand: "Samsung",
//    "processor": "Snapdragon",
//    "RAM": 24,
//     gpu: "1024mb",
// };
// console.log(Laptop);
//dot noatation
// Laptop.gpu = "2048mb";
// console.log(Laptop);
//bracket notation
// Laptop["processor"] = "AMD";
// console.log(Laptop);


/*
Handling the non-existing property
*/
// let person = {
//    first_name: "K Subramanyeshwara"
// };
// console.log(person.first_name);
// console.log(person.last_name);


/*
Adding new properties to an object
*/
// const Person = {
//     firstName: "K",
//     lastName: "Subramanyeshwara",
//     age: 26,
//     location: "Bengaluru",
//     email: "k@remote.com"
// }
// console.log(Person);
//Two ways to add properties
//dot notation
// Person.socialMediaPresence = true;
// console.log(Person);
//bracket notation
// Person["married"] = false;
// console.log(Person);


/*
Deleting properties from an Object
*/
// const Car = {
//     name: "Ford",
//     color: "Red",
//     price: "$100000",
//     topSpeed: "220kph"
// }
// console.log(Car);
// delete Car.price;
// console.log(Car);


/*
Checking if property or method exist in object
*/
//using in operator
// const User = {
//     fullName: "K Subramanyeshwara",
//     age: 26,
//     gender: "male",
//     getDetails: function () {
//         return`name is ${this.fullName}, the age is ${this.age} and the gender is ${this.gender}`;
//     }
// }
// console.log(User.getDetails());
// console.log("fullName" in User);
// console.log("getDetails" in User);

//using hasOwnProperty()
// const User = {
//     fullName: "K Subramanyeshwara",
//     age: 26,
//     gender: "male",
//     getDetails: function () {
//         return`name is ${this.fullName}, the age is ${this.age} and the gender is ${this.gender}`;
//     }
// }
// console.log(User.getDetails());
// console.log(User.hasOwnProperty("fullName"));
// console.log(User.hasOwnProperty("getDetails"));