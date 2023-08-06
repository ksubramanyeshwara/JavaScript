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

    let arrayName = [val1, val2, ...];

    ```JS
    let southernStates = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu",  "Telangana"];
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
