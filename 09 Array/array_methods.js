//Array Methods

//array.push()
//const myArray = new Array(1, 2, 3, "Mysuru", "Honnavara");
// console.log("Array before Push method", myArray);
// myArray.push("Bengaluru");
// console.log("Array after Push method", myArray);

//Merging two arrays using array.push method, Merging two arrays can also be done with the concat() method.
// const vegetables = ["parsnip", "potato"];
// const moreVegetables = ["celery", "beetroot"];
// vegetables.push(...moreVegetables);
// console.log(vegetables);


//array.pop()
// const leafyVeggies = ['Spinach', 'Cabbage', 'kale', 'Broccoli', 'Lettuce'];
// console.log("Array before pop method : ", leafyVeggies);
// const removedVegetable = leafyVeggies.pop();
// console.log("Array after pop method : ", leafyVeggies);
// console.log("Removed Vegetable : ", removedVegetable);

//array.unshift()
// const numbers = [1, 2, 3];
// console.log("Array before unshift method", numbers);
// numbers.unshift(4, 5)
// console.log("Array after unshift method", numbers);

//array.shift()
// const numbers = [1, 2, 3];
// console.log("Array before shift method", numbers);
// numbers.shift()
// console.log("Array after shift method", numbers);

//array.includes()
// const pets = ['Dogs', 'Cats', 'Fish', 'Horses', 1, 2, 3];
// console.log(pets.includes('dogs'));
// console.log(pets.includes('Dogs'));
// console.log(pets.includes('dog'));
// console.log(pets.includes(2));

//array.indexof()
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kivi", "Apple", 1, 2, 3];
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.indexOf("Apple", 3));
// console.log(fruits.indexOf("Star"));
// console.log(fruits.indexOf(2));


//array.join()
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(' '));
console.log(elements.join('-'));