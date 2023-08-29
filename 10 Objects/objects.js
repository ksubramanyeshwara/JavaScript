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
*/
