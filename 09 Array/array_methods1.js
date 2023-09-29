/*
array.filter();
*/
/*
const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

//normal function declaration
// const newOddNumbers = oddNumbers.filter(function (num) {
//     return num;
// })

//arrow function declaration
const newOddNumbers = oddNumbers.filter((num) => {
    return num;
})
console.log(newOddNumbers);

const newOddNumbers1 = oddNumbers.filter((num) => {
    if (num > 5 && num < 13) {
        return num;
    }

})
console.log(newOddNumbers1);

//Jump target cannot cross function boundary - filter or foreach can't break or continue.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);

*/

/*
Array.map();
*/
/*
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map((num) => { return num + 10 })
//chaining multiple Array.map() and a Array.filter()
const newNums1 = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
console.log(newNums);
console.log(newNums1);
*/

/*
Array.reduce()
*/
//with iniial value as 0
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);