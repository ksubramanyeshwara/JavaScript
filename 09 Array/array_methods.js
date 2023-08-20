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
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// console.log(elements.join(' '));
// console.log(elements.join('-'));

//array.slice()
// const animals = ['Cat', 'Dog', 'Cow', 'Lion', 'Ant', 'Bear', 'Rabbit'];
// console.log(animals);
// console.log(animals.slice(1, 3));
// console.log(animals.slice(3));
// console.log(animals.slice(-3));
// console.log(animals.slice(2, -1));

//array,splice()
// const months = ['Jan', 'Mar', 'Apr', 'Jun', 'Aug'];
// console.log(months);
// array.splice(start) - the starting index at which a change will be made to an array.
// months.splice(1);
// console.log(months);

// array.splice(start, deleteCount)
// months.splice(2, 2); //Removes 2 elements starting from index 2 
// console.log(months);

//array.splice(start, deleteCount, item0, item1, /* …, */ itemN)
// months.splice(1, 0, 'Feb') //No element is deleted and 1 element is added at the index 1
// console.log(months);
//[ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Aug' ]
// months.splice(4, 2, 'Jun', 'Jul', 'Aug')// Removes 2 element starting from index 4 and adds 3 elements
// console.log(months);

//array.concat()
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = ['g', 'h', 'i'];
// const array4 = array1.concat(array2);
// const array5 = array1.concat(array2, array3);
// console.log(array4);
// console.log(array5);

//marging through spread operator
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = ['g', 'h', 'i'];
// const array4 = [...array1, ...array2, ...array3];
// console.log(array4);

// const parts = ["shoulders", "knees"];
// const lyrics = ["head", ...parts, "and", "toes"];
// console.log(lyrics);

//array.flat()
// const arr1 = [0, 1, 2, [3, 4],5, [6, [7, 8], 9]];
// const arr2 = arr1.flat(3);
// console.log(arr2);