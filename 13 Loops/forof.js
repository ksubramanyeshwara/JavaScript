//Iterating over an array
const evenNumbers = [2, 4, 6, 8, 10];
for (const eveNumbs of evenNumbers) {
    console.log(eveNumbs);
}

//iterating over string
let greetings = "Hello World";
for (const greet of greetings) {
    if (greet === " ") {
        continue;
    }
    console.log(greet);
}

//Iterating Over a Map
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}
