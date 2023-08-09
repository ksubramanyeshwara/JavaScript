# Arrays

An array is a single variable that can be used to store elements of different data types.

## Characterestics

- Arrays can be resized, and their elements can be of various data types.
- Array elements must be accessed by pointing to their index number.
- An array's size increases dynamically on its own. Which indicates that the array size need not be declared upfront.
- JavaScript arrays are zero-indexed, the first element of an array is at index 0, the second is at index 1, and so on.
- JavaScript array-copy operations create [shallow copies](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy).

## Declaring and Initializing an array

- Using array literal

    let arrayName = [val1, val2, val3, ...];

    ```JS
    let southernStates = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu"];
    console.log(southernStates);
    ```

- Using new Keyword

    let arrayName = new Array();

    ```JS
    let frontendDevelopment = new Array();
    frontendDevelopment[0] = "HTML";
    frontendDevelopment[1] = "CSS";
    frontendDevelopment[2] = "TailwindCSS";
    frontendDevelopment[3] = "JavaScript";
    frontendDevelopment[4] = "ReactJS";
    frontendDevelopment[5] = "TypeScript";
    frontendDevelopment[6] = "Git";
    console.log(frontendDevelopment);
    ```

***Creating an array with undefined items***

```JS
let arrayNumber = new Array(5);
console.log(arrayNumber);
```

***Accessing array elements***

Any element of an array can be accessed through index number. Index starts from 0.

```JS
console.log(southernStates[1]);
console.log(southernStates[3]);
console.log(southernStates[0]);
```

***Adding an element to the end of an Array***

```JS
console.log("Before adding a value",southernStates);
southernStates[4] = "Telangana";
console.log("After adding a value",southernStates);
```

***Replacing the element in any position from an Array***

```JS
console.log("Before replacing a value",frontendDevelopment);
frontendDevelopment[2] = "Bootstrap";
console.log("After replacing a value",frontendDevelopment);
```

***Deleting an array element from any position***

```JS
let numbers = [1, 2, 3, 4, 5];
console.log("Before deleting a element",numbers);
console.log("Length Before deleting a element",numbers.length);
delete numbers[2];
console.log("After deleting a element",numbers);
console.log("Length After deleting a element",numbers.length);
```

>we can see that the length of an array is same before and after deleting an element because when we delete an element using delete it will simply don't delete the index and that index will have undefined value.

## Multidimentional Array

***Creating Multidimentional Array***

```JS
let evenOddNumbers = [2, 4, 6, 8, 10, [1, 3, 5, 7]];
```

***Accessing Multidimentional Array elements***

```JS
console.log(evenOddNumbers[5][2]);
```

## Array Methods

Let's take an array as exmple for our methods

```JS
const myArray = new Array(1, 2, 3, "Mysuru", "Honnavara");
```

- ***array.push()***

    The specified element is inserted at the end of an array. Length of an array will be changed.

    ```JS
    console.log("Array before Push method", myArray);
    myArray.push("Bengaluru");
    console.log("Array after Push method", myArray);
    ```

    > Merging two arrays using array.push method, Merging two arrays can also be done with the `concat()` method.

    ```Js
    const vegetables = ["parsnip", "potato"];
    const moreVegetables = ["celery", "beetroot"];
    vegetables.push(...moreVegetables);
    console.log(vegetables);
    ```

- ***array.pop()***

    Removes the last element of an array. Length of an array will be changed.

    ```JS
    const leafyVeggies = ['Spinach', 'Cabbage', 'kale', 'Broccoli', 'Lettuce'];
    console.log("Array before pop method : ", leafyVeggies);
    const removedVegetable = leafyVeggies.pop();
    console.log("Array after pop method : ", leafyVeggies);
    console.log("Removed Vegetable : ", removedVegetable);
    ```

- ***array.unshift()***

    Adds the specified elements to the beginning of an array.

    ```JS
    const numbers = [1, 2, 3];
    console.log("Array before unshift method", numbers);
    numbers.unshift(4, 5)
    console.log("Array after unshift method", numbers);
    ```

- ***array.shift()***

    Removes the first element from an array. This method changes the length of the array.

    ```JS
    const numbers = [1, 2, 3];
    console.log("Array before shift method", numbers);
    numbers.shift()
    console.log("Array after shift method", numbers);
    ```

- ***array.includes()***

    Determines whether an array includes a certain value among its entries. Returns `true` or `false`. It is case sensitive.

    ```JS
    const pets = ['Dogs', 'Cats', 'Fish', 'Horses', 1, 2, 3];
    console.log(pets.includes('dogs'));
    console.log(pets.includes('Dogs'));
    console.log(pets.includes('dog'));
    console.log(pets.includes(2));
    ```

- ***array.indexof()***

    Returns the first index of a specified element. Returns -1 if the element is not found.
    By default search starts from first element and ends at the last element.
    It can also start from specific index and searches from left to right.

    ```JS
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Kivi", "Apple", 1, 2, 3];
    console.log(fruits.indexOf("Apple"));
    console.log(fruits.indexOf("Apple", 3));
    console.log(fruits.indexOf("Star"));
    console.log(fruits.indexOf(2));
    ```

- ***array.join()***

    Returns an array as a string. It does not change the original array. Any seperator can be specified. The default is comma(,).

    ```JS
    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join());
    console.log(elements.join(' '));
    console.log(elements.join('-'));
    ```
