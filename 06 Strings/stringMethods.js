const languageName = "JavaScript";

/*
//length
console.log(`String is "${languageName}" and the length is ${languageName.length}`);
console.log();


//accessing a letter through index
console.log(languageName[0]);
console.log(languageName[3]);
console.log();


//string.at()
const study = "Welcome to JavaScript";
console.log(study.at(3));//c
console.log(study.at(-4));//r
console.log();

//string.charAt()
console.log(study.charAt(1));
console.log();
*/

// //string.concat() -	Join two or more strings together in JavaScript.
// const learn = "I am learning";
// console.log(learn + " " + languageName);

// //better approch called string interpolation
// const myName = "K Subramanyeshwara";
// let repoCount = 4;
// console.log(`My name is ${myName} and My GitHub repo count is ${repoCount}`);
// console.log();

// //string.endsWith() - Whether the given string ends with the characters of the specified string or not. returns true or false
// console.log(languageName.endsWith("t"));//true
// console.log(languageName.endsWith("S", 5));//true
// console.log(languageName.endsWith("t", 5));//false
// console.log();

// //strign.includes() - Returns true if the string contains the characters, otherwise, it returns false
// console.log(languageName.includes("Scri"));//true
// console.log(languageName.includes("scri"));//false
// console.log(languageName.includes("a"));//true
// console.log(languageName.includes("asd"));//false
// console.log();

//string.indexOf()
let documentName = 'Mozilla Developer Network(MDN)'
console.log(documentName.indexOf("o"));
console.log(documentName.indexOf("e"));
console.log(documentName.indexOf("N"));
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
console.log(paragraph.indexOf('dog'))
console.log(paragraph.indexOf('dog', 45))
//get the second occurance of the searchItem
const searchItem = 'dog'

console.log(paragraph.indexOf('dog', 'dog' + 1))
console.log();

// //string.lastIndexOf() - Finds the index of the last occurrence of the argument string in the given string.
// let str = "GeeksforGeeksGeeks";
// console.log(str.lastIndexOf("Geeks"));//8
// console.log();

// //replace - it will replace perticular string with given string
// const url = "https://www.subramanya.com/subramanya%219ishwara";
// console.log(url);
// console.log(url.replace("%219", "--"));
// console.log();

// //string.replaceAll() - Returns a new string after replacing all the matches of a string with a specified string/regex.
// let string = "Geeks or Geeks or geeor";
// console.log(string.replaceAll("or", "for"));//Geeks for Geeks for geefor
// console.log();

// //string.toUpperCase() - Converts the entire string to uppercase.
// console.log(languageName.toUpperCase());//JAVASCRIPT
// console.log();

// //string.toLowerCase()	- Converts the entire string to lowercase.
// console.log(languageName.toLowerCase());//javascript
// console.log();

// //string.substring() - substring starts from the given index and will print till -1 of the given index
// console.log(languageName.substring(0, 5));//
// console.log();

// //string.trim( - Remove the white spaces from both ends of the given string.) 
// let newString = "     Subramanya    ";
// console.log(newString);
// console.log(newString.trim());
// console.log(newString.trimEnd());
// console.log(newString.trimStart());
// console.log();

// //string.slice() - It extracts a section of a string and returns it as a new string, without modifying the original string
// const str1 = 'The quick brown fox jumps over the lazy dog.';

// console.log(str1.slice(31));//
// // Expected output: "the lazy dog."

// console.log(str1.slice(4, 19));//start and end index
// // Expected output: "quick brown fox"

// console.log(str1.slice(-4));
// // Expected output: "dog."

// console.log(str1.slice(-9, -5));
// // Expected output: "lazy"

// let fullName = "Snoop Dogg werfwer";
// let firstName;
// let lastName;

// firstName = fullName.slice(0, fullName.indexOf(" "));//start from 0 and end when space occured
// lastName = fullName.slice(fullName.indexOf(" ") + 1)//everything after 1st space
// console.log(firstName);
// console.log(lastName);
// console.log();

// //string.split() - returns Array of strings, 
// console.log(str1.split());
