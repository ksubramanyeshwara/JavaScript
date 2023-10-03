# String Methods

## length

To get the length of a string, It returns the number of characters in the string. This is Read-only.

```JS
const languageName = "JavaScript";
console.log(`String is "${languageName}" and the length is ${languageName.length}`);
/*
    OUTPUT

    String is "JavaScript" and the length is 10
*/
```

## Character access

Character can be accessed 2 ways

1. Treating string as array like object - string[stringIndex]
2. string.at(stringIndex)
3. string.charAt(stringIndex)

***string[stringIndex]***

It returns the character at the specified index. Can't access using negative index.

```JS
const languageName = "JavaScript";
console.log(languageName[0]);
console.log(languageName[3]);
/*
    OUTPUT

    J
    a
*/
```

***string.at(stringIndex)***

Returns the character at the specified index. It takes both positive and negative integers. Negative integers count back from the last string character.

It will start index from 0 in the beginning of the index and index starts from -1 from the last string character.

```JS
const study = "Welcome to JavaScript";
console.log(study.at(3));
console.log(study.at(-4));
/*
    OUTPUT

    c
    r
*/
```

***string.charAt()***

Returns the character at the specified index. Can't access using negative index.

```JS
const study = "Welcome to JavaScript";
console.log(study.charAt(9));
/*
    OUTPUT

    o
*/
```

## string.indexOf()

It searches the string and returns the index of the first occurrence of the specified substring.

It returns the index of the first occurrence of `searchString`. If the occurance not found then `-1` will be returned.

```JS
indexOf(searchString, position)
```

You can specify the position then first occurence from the postion will be displayed.

```JS
let documentName = 'Mozilla Developer Network(MDN)'
console.log(documentName.indexOf("o"));
console.log(documentName.indexOf("e"));
console.log(documentName.indexOf("N"));
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
console.log(paragraph.indexOf('dog'))
console.log(paragraph.indexOf('dog', 45))
/*
    OUTPUT

    1
    9
    18
    40
    52
*/
```



<!--
```JS

/*
    OUTPUT

*/
```

 -->