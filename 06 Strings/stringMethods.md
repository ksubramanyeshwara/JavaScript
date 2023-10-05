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

It returns the index of the first occurrence of `searchString`. If the occurance is not found then `-1` will be returned.

The `indexOf()` method is case sensitive. if the `searchString` is not found then returns `-1`:

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

    Index of the first occurance of the dog is 40    
    Index of the second occurance of the dog is 52   
*/
```

## string.lastIndexOf()

It searches the string and returns the index of the last occurrence of the specified substring.

It returns the index of the last occurrence of `searchString`. If the occurance is not found then `-1` will be returned.

The `lastIndexOf()` method is case sensitive. if the `searchString` is not found then returns `-1`:

```JS
lastIndexOf(searchString, position)
```

```JS
let str = "Learning String and String methods";
console.log(str.lastIndexOf("String"));
console.log(str.lastIndexOf('string'))
/*
    OUTPUT

    20
    -1
*/
```

## string.concat()

It is used to join two or more strings together without changing the original strings and returning a new string.

```JS
concat(str1, str2, /* …, */ strN)
```

```JS
const learning = 'I am learning';
const learningLanguage = learning.concat(' JavaScript')
console.log(learningLanguage);
console.log();

const mdn = 'Mozilla';
const mdnFullForm = mdn.concat(' Developer', ' Network');
console.log(mdnFullForm);
console.log();

//joining 2 or more strings using string interpolation
const myName = "K Subramanyeshwara";
let repoCount = 4;
console.log(`My name is ${myName} and My GitHub repo count is ${repoCount}`);

/*
    OUTPUT

    I am learning JavaScript
    Mozilla Developer Network
    My name is K Subramanyeshwara and My GitHub repo count is 4
*/
```

## string.startsWith()

Whether the given string starts with the characters of the specified string or not. returns true or false

```JS
startsWith(searchString, position)
```

```JS
const str = "To be, or not to be, that is the question.";
console.log(str.startsWith("To be"));
console.log(str.startsWith("not to be"));
console.log(str.startsWith("not to be", 10));
/*
    OUTPUT

    true
    true
    false
*/
```

## string.endsWith()

Whether the given string ends with the characters of the specified string or not. returns true or false

```JS
endsWith(searchString, endPosition)
```

```JS
const languageName = 'JavaScript';
console.log(languageName.endsWith("t"));
console.log(languageName.endsWith("S", 5));
console.log(languageName.endsWith("t", 5));
/*
    OUTPUT

    true
    true
    false
*/
```

## string.toLowerCase()

Converts the entire string to lowercase.

```JS
toLowerCase()
```

```JS
const anotherLanguageName = 'JAVASCRIPT';
console.log(anotherLanguageName.toLowerCase());
/*
    OUTPUT

    javascript
*/
```

## string.toUpperCase()

Converts the entire string to lowercase.

```JS
toUpperCase()
```

```JS
const languageName = 'javascript';
console.log(languageName.toUpperCase());
/*
    OUTPUT

    JAVASCRIPT
*/
```

## string.replace()

It is used to replace a part of the given string with another string or a regular expression

```JS
replace(pattern, replacement)
```

```JS
const url = "https://www.subramanya.com/subramanya%219ishwara";
console.log(url);
console.log(url.replace("%219", "--"));
/*
    OUTPUT

    https://www.subramanya.com/subramanya%219ishwara
    https://www.subramanya.com/subramanya_ishwara 
*/
```

## string.replaceAll()

Returns a new string after replacing all the matches of a string with a specified string/regex.

```js
replaceAll(pattern, replacement)
```

```JS
let gfg = "Geeks or Geeks or geeks";
console.log(gfg);
console.log(gfg.replaceAll("or", "for"));

/*
    OUTPUT

    Geeks or Geeks or geeks
    Geeks for Geeks for geeks
*/
```

## string.includes()

Returns true if the string contains the characters, otherwise, it returns false. It is a case sensitive.

```JS
includes(searchString, position)
```

```JS
const languageName = 'JavaScript';
console.log(languageName.includes("Scri"));
console.log(languageName.includes("scri"));
console.log(languageName.includes('a', 2));
console.log(languageName.includes("asd"));
/*
    OUTPUT

    true
    false
    true
    false
*/
```

## string.substring()

 Returns the part of this string from the given index and will print till -1 of the given index or to the end of the string if no end index is supplied.

```JS
substring(indexStart)
substring(indexStart, indexEnd)
```

```JS

/*
    OUTPUT
    
    JavaScript
    JavaS
    aScript
    JavaScript
*/
```

***Using substring() with length property***

```JS
const text = "Mozilla";
// starts from 2 because string.length = 6 - 4 = 2(which is starting index)
console.log(text.substring(text.length - 4));
console.log(text.substring(text.length - 5));
/*
    OUTPUT

    illa
    zilla
*/
```

## string.trim()

Remove the white spaces from both ends of the given string returns a new string, without modifying the original string

```JS
trim()
```

```JS
let newString = "     Subramanya    ";
console.log(newString);
console.log(newString.trim());
/*
    OUTPUT
        Subramanya
    Subramanya
*/
```

## string.trimEnd()

It removes whitespace from the end of this string and returns a new string, without modifying the original string.

```JS
trimEnd()
```

```JS
let newString = "     Subramanya    ";
console.log(newString);
console.log(newString.trimEnd());
/*
    OUTPUT

        Subramanya
        Subramanya

*/
```

## string.trimStart()

It removes whitespace from the beginning of this string and returns a new string, without modifying the original string.

```JS
trimStart()
```

```JS
let newString = "     Subramanya    ";
console.log(newString);
console.log(newString.trimStart());
/*
    OUTPUT
        Subramanya
    Subramanya
*/
```

## string.splice()

It extracts a section of this string and returns it as a new string, without modifying the original string.

```JS
slice(indexStart)
slice(indexStart, indexEnd)
```

- If `indexStart` is omitted, undefined, or cannot be converted to a number, it's treated as 0.
- It extracts up to but not including `indexEnd`.
- If `indexStart` < 0, the index is counted from the end of the string.
- If `indexEnd` is omitted, undefined, or cannot be converted to a number, `slice()` extracts to the end of the string.

```JS
const str1 = 'The quick brown fox jumps over the lazy dog.';
console.log(str1.slice(31));
console.log(str1.slice(4, 19));
console.log(str1.slice(-4));
console.log(str1.slice(-9, -5));
console.log(str1.slice(0));
/*
    OUTPUT

    the lazy dog.
    quick brown fox
    dog.
    lazy
*/
```

```JS
const str1 = "The morning is upon us.";
//start index is -11(count starts from the end) and includes the starting index and the end index is 16(count starts from the beginning) and excludes the end index.
console.log(str1.slice(-11, 16)); // "is u"
//start index is 5(count starts from the beginning)and  includes the starting index and the end index is -9(count starts from the end) and excludes the end index
console.log(str1.slice(5, -9));
/*
    OUTPUT

    is u
    orning is
*/
```

```JS
let fullName = "Snoop Dogg werfwer";
console.log(fullName.slice(0, fullName.indexOf(" ")));
console.log(fullName.slice(fullName.indexOf(" ") + 1));
console.log(fullName.slice(0, fullName.indexOf('g')))
/*
    OUTPUT

    Snoop
    Dogg werfwer
    Snoop Do
*/
```

<!--
## string.split()

It divides a string into a list of substrings and returns them as an array.

## string.search()

It searches for a match between a given string and a regular expression.

It returns the index of the first match in the string. or it returns `-1` if no match was found.

```JS

```

```JS

/*
    OUTPUT

*/
```

## string.match()

```JS

```

```JS

/*
    OUTPUT

*/
```

## string.matchAll()

```JS

```

```JS

/*
    OUTPUT

*/
```

```JS

/*
    OUTPUT

*/
```

 -->