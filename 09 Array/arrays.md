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

    /*
        OUTPUT

        [ 'Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu' ]
    */
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

    /*
        OUTPUT
        [
         'HTML',
         'CSS',
         'TailwindCSS',
         'JavaScript',
         'ReactJS',
         'TypeScript',
         'Git'
        ]
    */
    ```

***Creating an array with undefined items***

```JS
let arrayNumber = new Array(5);
console.log(arrayNumber);

/*
    OUTPUT

    [ <5 empty items> ]
*/
```

***Accessing array elements***

Any element of an array can be accessed through index number. Index starts from 0.

```JS
console.log(southernStates[1]);
console.log(southernStates[3]);
console.log(southernStates[0]);

/*
    OUTPUT

    Karnataka
    Tamil Nadu
    Andhra Pradesh
*/
```

***Adding an element to the end of an Array***

```JS
console.log("Before adding a value",southernStates);
southernStates[4] = "Telangana";
console.log("After adding a value",southernStates);

/*
    OUTPUT

    Before adding a value [ 'Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu' ]

    After adding a value [ 'Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Telangana' ] 
*/
```

***Replacing the element in any position from an Array***

```JS
console.log("Before replacing a value",frontendDevelopment);
frontendDevelopment[2] = "Bootstrap";
console.log("After replacing a value",frontendDevelopment);

/*
    OUTPUT

    Before replacing a value [
     'HTML',
     'CSS',
     'TailwindCSS',
     'JavaScript',
     'ReactJS',
     'TypeScript',
     'Git'
    ]
    After replacing a value [
     'HTML',
     'CSS',
     'Bootstrap',
     'JavaScript',
     'ReactJS',
     'TypeScript',
     'Git'
    ]
*/
```

***Deleting an array element from any position***

```JS
let numbers = [1, 2, 3, 4, 5];
console.log("Before deleting a element",numbers);
console.log("Length Before deleting a element",numbers.length);
delete numbers[2];
console.log("After deleting a element",numbers);
console.log("Length After deleting a element",numbers.length);

/*
    OUTPUT

    Before deleting a element [ 1, 2, 3, 4, 5 ]
    Length Before deleting a element 5

    After deleting a element [ 1, 2, <1 empty item>, 4, 5 ]
    Length After deleting a element 5
    Deleted Element Index undefined

*/
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

/*
    OUTPUT

    5
*/
```

## Array Property

- ***array.length***

    Represents the number of elements in that array.

    ```JS
    const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
    console.log(clothing);
    console.log(clothing.length);
    //to get last value from an array
    console.log(clothing[clothing.length - 1]);
    //changing original array through length
    clothing.length = 2;
    console.log(clothing);

    /*
        OUTPUT

        4
        sweaters
        [ 'shoes', 'shirts', 'socks', 'sweaters' ]
        [ 'shoes', 'shirts' ]
    */
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
    console.log("\nArray after Push method", myArray);

    /*
        OUTPUT

        Array before Push method [ 1, 2, 3, 'Mysuru', 'Honnavara' ]

        Array after Push method [ 1, 2, 3, 'Mysuru', 'Honnavara', 'Bengaluru' ]
    */
    ```

    > Merging two arrays using array.push method, Merging two arrays can also be done with the `concat()` method.

    ```Js
    const vegetables = ["parsnip", "potato"];
    const moreVegetables = ["celery", "beetroot"];
    console.log(vegetables);
    console.log(moreVegetables);
    vegetables.push(...moreVegetables);
    console.log(vegetables);

    /*
        OUTPUT

        [ 'parsnip', 'potato' ]
        [ 'celery', 'beetroot' ]
        [ 'parsnip', 'potato', 'celery', 'beetroot' ]
    */
    ```

- ***array.pop()***

    Removes the last element of an array. Length of an array will be changed.

    ```JS
    const leafyVeggies = ['Spinach', 'Cabbage', 'kale', 'Broccoli', 'Lettuce'];
    console.log("Array before pop method : ", leafyVeggies);
    const removedVegetable = leafyVeggies.pop();
    console.log("Array after pop method : ", leafyVeggies);
    console.log("Removed Vegetable : ", removedVegetable);

    /*
        OUTPUT

        Array before pop method :  [ 'Spinach', 'Cabbage', 'kale', 'Broccoli', 'Lettuce' ]
        Array after pop method :  [ 'Spinach', 'Cabbage', 'kale', 'Broccoli' ]
        Removed Vegetable :  Lettuce
    */
    ```

- ***array.unshift()***

    Adds the specified elements to the beginning of an array.

    ```JS
    const numbers = [1, 2, 3];
    console.log("Array before unshift method", numbers);
    numbers.unshift(4, 5)
    console.log("Array after unshift method", numbers);

    /*
        OUTPUT

        Array before unshift method [ 1, 2, 3 ]
        Array after unshift method [ 4, 5, 1, 2, 3 ]
    */
    ```

- ***array.shift()***

    Removes the first element from an array. This method changes the length of the array.

    ```JS
    const numbers = [1, 2, 3];
    console.log("Array before shift method", numbers);
    numbers.shift()
    console.log("Array after shift method", numbers);

    /*
        OUTPUT

        Array before shift method [ 1, 2, 3 ]
        Array after shift method [ 2, 3 ]
    */
    ```

- ***array.includes()***

    Determines whether an array includes a certain value among its entries. Returns `true` or `false`. It is case sensitive.

    ```JS
    const pets = ['Dogs', 'Cats', 'Fish', 'Horses', 1, 2, 3];
    console.log(pets.includes('dogs'));
    console.log(pets.includes('Dogs'));
    console.log(pets.includes('dog'));
    console.log(pets.includes(2));

    /*
        OUTPUT

        false
        true
        false
        true
    */
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

    /*
        OUTPUT

        2
        5
        -1
        7
    */
    ```

- ***array.join()***

    Returns an array as a string. It does not change the original array. Any seperator can be specified. The default is comma(,).

    ```JS
    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join());
    console.log(elements.join(' '));
    console.log(elements.join('-'));

    /*
        OUTPUT

        Fire,Air,Water
        Fire Air Water
        Fire-Air-Water
    */
    ```

- ***array.slice()***

    Returns a [shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) of a selected elements in an array, as a new array. The original remains unchanged.
    Selects from a user specified start index, up to a user specified end index(end index is not included).

    ```JS
    const animals = ['Cat', 'Dog', 'Cow', 'Lion', 'Ant', 'Bear', 'Rabbit'];
    console.log(animals);
    console.log(animals.slice(1, 3));
    console.log(animals.slice(3));
    console.log(animals.slice(-3));
    console.log(animals.slice(2, -1));
    /*
        OUTPUT

        [
         'Cat',    'Dog',
         'Cow',    'Lion',
         'Ant',    'Bear',
         'Rabbit']
        [ 'Dog', 'Cow' ]
        [ 'Lion', 'Ant', 'Bear', 'Rabbit' ] 
        [ 'Ant', 'Bear', 'Rabbit' ]
        [ 'Cow', 'Lion', 'Ant', 'Bear' ] 
    */
    ```

- ***array.splice()***

    Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

    ```JS
    const months = ['Jan', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'];
    console.log(months);
    /*
        OUTPUT

        [ 'Jan', 'Mar', 'Apr', 'Jun', 'Aug' ]
    */
    ```

    ***array.splice(start)***

    The index at which to start changing the array. This is a required argument. It will delete everything after start index.

    ```JS
    months.splice(1);
    console.log(months);
    /*
        OUTPUT

        [ 'Jan' ]
    */
    ```

    ***array.splice(start, deleteCount)***

    Start: The index at which to start changing the array. This is a required argument.

    deleteCount: The number of elements to remove from the array, starting at the start index. If deleteCount is not provided or is greater than the number of elements remaining in the array after the start index, all elements from the start index to the end of the array will be removed.

    ```JS
    months.splice(2, 2);
    console.log(months);
    /*
        OUTPUT

        [ 'Jan', 'Mar', 'Aug' ]
    */
    ```

    ***array.splice(start, deleteCount, item0, item1, /* …, */ itemN)***

    start: The index at which to start changing the array. This is a required argument.

    deleteCount: The number of elements to remove from the array, starting at the start index. If deleteCount is 0, no elements will be removed.

    item0, item1, ...: The elements to be added to the array, starting at the start index. These elements will be inserted into the array at the specified position.

    ```JS
    months.splice(1, 0, 'Feb') //No element is deleted and 1 element is added at the index 1
    months.splice(4, 2, 'Jun', 'Jul', 'Aug')// Removes 2 element starting from index 4 and adds 3 
    /*
        OUTPUT
        
        [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Aug' ]
        [
        'Jan', 'Feb',
        'Mar', 'Apr',
        'Jun', 'Jul',
        'Aug'
        ]
    */
    ```

- ***array.concat()***

    Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    ```JS
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = ['g', 'h', 'i'];
    const array4 = array1.concat(array2);
    const array5 = array1.concat(array2, array3);
    console.log(array4);
    console.log(array5);

    /*
        OUTPUT

        [ 'a', 'b', 'c', 'd', 'e', 'f' ]

        [
         'a', 'b', 'c',
         'd', 'e', 'f',
         'g', 'h', 'i'
        ]
    */
    ```

- ***spread operator***

    ```JS
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = ['g', 'h', 'i'];
    const array4 = [...array1, ...array2, ...array3];
    console.log(array4);

    const parts = ["shoulders", "knees"];
    const lyrics = ["head", ...parts, "and", "toes"];
    console.log(lyrics);

    /*
        OUTPUT

        [
         'a', 'b', 'c',
         'd', 'e', 'f',
         'g', 'h', 'i'
        ]
        [ 'head', 'shoulders', 'knees', 'and', 'toes' ]
    */
    ```

- ***array.flat(depth)***

    Creates a new array with all sub-array elements concatenated into it. We can also specify how deep a nested array should be flattened.

    ```JS
    const arr1 = [0, 1, 2, [3, 4],5, [6, [7, 8], 9]];
    const arr2 = arr1.flat(3);
    console.log(arr2);

    /*
        OUTPUT

        [
         0, 1, 2, 3, 4,
         5, 6, 7, 8, 9
        ]
    */
    ```

- ***Array.isArray()***

    determines whether the passed value is an Array or not.

    ```JS
    console.log(Array.isArray('Subramanya'));
    console.log(Array.isArray([]));
    console.log(Array.isArray([1, 3, 5, 7]));
    console.log(Array.isArray(new Array()));
    console.log(Array.isArray(new Array("a", "b", "c", "d")));

    /*
        OUTPUT

        false
        true
        true
        true
        true
    */
    ```

- ***Array.from()***

    Creates a new, shallow-copied Array instance from an iterable or array-like object.

    ```JS
    console.log(Array.from('foo'));
    console.log(Array.from({Language : "JavaScript"}));

    /*
        OUTPUT

        [ 'f', 'o', 'o' ]
        [] //Because it don't know from where to create an array. 
    */
    ```

- ***Array.of()***

    Creates a new Array instance from the given arguments.

    ```JS
    const score1 = 100;
    const score2 = 150;
    const score3 = 200;
    console.log(Array.of('foo', 2, 'bar', true, score1, score2, score3));

    /*
        OUTPUT

        [
         'foo', 2,   'bar',
         true,  100, 150,
         200
        ]        
    */
    ```

- ***array.copyWithin(Target, start, end)***

    Copies array elements from one position to another in the given array. It keeps it's original length.

    target: The index position where you want to copy the elements to(Required).

    start: It is optional. The index position to start copying elements from (default is 0).

    end: It is optional. The index position to stop copying elements from (default is array.length).

    ```JS
    let numbers = [1, 2, 3, 4, 5, 6];
    //take the element from index 3 and above and place the element from index 0
    console.log(numbers.copyWithin(0, 3));

    //It takes element from index 0 and above and place the element from index 0 to end of an array
    let numbers1 = [1, 2, 3, 4, 5, 6];
    console.log(numbers1.copyWithin(2));

    //Take element from index 0 to 3(Exclusive) and place it from the index 3
    let numbers2 = [1, 2, 3, 4, 5, 6];
    console.log(numbers2.copyWithin(3, 0, 3));
    
    /*
        OUTPUT

        [ 4, 5, 6, 4, 5, 6 ]
        [ 1, 2, 1, 2, 3, 4 ]
        [ 1, 2, 3, 1, 2, 3 ]
    */
    ```

- ***array.reduce()***

- ***array.fill(value, start, end)***

    Fills an array with specified elements. It can fill entire array or part of an array. It overwrites the original array.

    value - Value to fill the array with.

    start (optional) - Start index (default is 0).

    end (optional) - End index (default is Array.length), which is always excluded.

    `array.fill(value)`

    ```JS
    const fruits = ["Mango", "Banana", "Grape", "Apple", "Orange", "Lemon", "Papaya"];
    console.log(fruits);
    console.log(fruits.fill(1)); //fill the array with 1 for all array elements

    /*
        OUTPUT

        [
         'Mango',  'Banana',
         'Grape',  'Apple',
         'Orange', 'Lemon',
         'Papaya'
        ]
        [
         1, 1, 1, 1,
         1, 1, 1
        ]
    */
    ```

    `array.fill(value, start)`

    ```JS
    const fruits = ["Mango", "Banana", "Grape", "Apple", "Orange", "Lemon", "Papaya"];
    console.log(fruits);
    console.log(fruits.fill(1, 3));//fill the array with 1 from index 3 to end of an array

    /*
        OUTPUT

        [
         'Mango',  'Banana',
         'Grape',  'Apple',
         'Orange', 'Lemon',
         'Papaya'
        ]
        [ 'Mango', 'Banana', 'Grape', 1, 1, 1, 1 ]
    */
    ```

    `array.fill(value, start, end)`

    ```JS
    const fruits = ["Mango", "Banana", "Grape", "Apple", "Orange", "Lemon", "Papaya"];
    console.log(fruits);
    console.log(fruits.fill(1, 2, 4));//fill the array with 1 from index 2 to 4(Exclusive)

    /*
        OUTPUT

        [
         'Mango',  'Banana',
         'Grape',  'Apple',
         'Orange', 'Lemon',
         'Papaya'
        ]
        [
         'Mango',  'Banana',
         1,        1,
         'Orange', 'Lemon',
         'Papaya'
        ];
    */
    ```
