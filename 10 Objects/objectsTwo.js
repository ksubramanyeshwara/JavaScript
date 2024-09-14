let user = {
    name : "Rohit",
    age : 35,
    sayHi(){
        console.log(`username is ${this.name}`)
    },
}

console.log(user.sayHi())

// calculator

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let principal = new Person('John','Doe');
console.log(principal.getFullName());