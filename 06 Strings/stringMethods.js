/*
const languageName = "JavaScript";
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



/*
//string.indexOf()
let documentName = 'Mozilla Developer Network(MDN)'
console.log(documentName.indexOf("o"));
console.log(documentName.indexOf("e"));
console.log(documentName.indexOf("N"));
console.log();
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
console.log(paragraph.indexOf('dog'))
console.log(paragraph.indexOf('dog', 45))
console.log();

//using variables
const searchItem = 'dog'
const indexOffFirst = paragraph.indexOf(searchItem)
console.log(`Index of the first occurance of the ${searchItem} is ${indexOffFirst}`)

//get the second occurance of the searchItem
console.log(`Index of the second occurance of the ${searchItem} is ${paragraph.indexOf(searchItem, indexOffFirst + 1)}`)
console.log();

//string.lastIndexOf() - Finds the index of the last occurrence of the argument string in the given string.
let str = "Learning String and String methods";
console.log(str.lastIndexOf("String"));
console.log(str.lastIndexOf('string'))
console.log();
*/



/*
//string.concat() -	Join two or more strings together in JavaScript.
const learning = 'I am learning';
const learningLanguage = learning.concat(' JavaScript')
console.log(learningLanguage);
console.log();
//joining 2 or more strings using string interpolation
const myName = "K Subramanyeshwara";
let repoCount = 4;
console.log(`My name is ${myName} and My GitHub repo count is ${repoCount}`);
console.log();

const mdn = 'Mozilla';
const mdnFullForm = mdn.concat(' Developer', ' Network');
console.log(mdnFullForm);
console.log();
*/


/*
// string.startsWith()
const str = "To be, or not to be, that is the question.";
console.log(str.startsWith("To be"));
console.log(str.startsWith("not to be"));
console.log(str.startsWith("not to be", 10));
console.log();

//string.endsWith()
const languageName = 'JavaScript';
console.log(languageName.endsWith("t"));
console.log(languageName.endsWith("S", 5));
console.log(languageName.endsWith("t", 5));
console.log();
*/



/*
//string.toUpperCase()
const languageName = 'javascript';
console.log(languageName.toUpperCase());
console.log();

//string.toLowerCase()
const anotherLanguageName = 'JAVASCRIPT';
console.log(anotherLanguageName.toLowerCase());
console.log();
*/



/*
//string.replace()
const url = "https://www.subramanya.com/subramanya%219ishwara";
console.log(url);
console.log(url.replace("%219", "_"));
console.log();

//string.replaceAll()
let gfg = "Geeks or Geeks or geeks";
console.log(gfg);
console.log(gfg.replaceAll("or", "for"));
console.log();
*/



/*
//string.includes()
const languageName = 'JavaScript';
console.log(languageName.includes("Scri"));
console.log(languageName.includes("scri"));
console.log(languageName.includes('a', 2));
console.log(languageName.includes("asd"));
console.log();

//string.substring()
console.log(languageName.substring(0));
console.log(languageName.substring(0, 5));
console.log(languageName.substring(3));
console.log(languageName.substring(0, 10));
//Using substring() with length property
const text = "Mozilla";
// starts from 2 because string.length = 6 - 4 = 2(which is starting index)
console.log(text.substring(text.length - 4));
console.log(text.substring(text.length - 5));
console.log();
*/



/*
//string.trim()
let newString = "     Subramanya    ";
console.log(newString);
console.log(newString.trim());
console.log();

//string.trim()
console.log(newString.trimEnd());
console.log();

//string.trimStart()
console.log(newString.trimStart());
console.log();
*/



/*
//string.slice()
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
console.log(str.slice(4, 19));
console.log(str.slice(-4));
console.log(str.slice(-9, -5));
console.log(str.slice(0));

const str1 = "The morning is upon us.";
console.log(str1.slice(-11, 16)); // "is u"
console.log(str1.slice(5, -9));

let fullName = "Snoop Dogg werfwer";
console.log(fullName.slice(0, fullName.indexOf(" ")));
console.log(fullName.slice(fullName.indexOf(" ") + 1));
console.log(fullName.slice(0, fullName.indexOf('g')))
console.log();
*/

//string.split() - returns Array of strings,
// console.log(str1.split());




//string.search()



//string.match()



//string.matchAll() 