// let myStates = ["Karnataka", "Andra Pradesh", "Goa", "Tamilnadu", "Telangana", "Kerala"]

//Normal function
// myStates.forEach(function (state) {
//     console.log(state);
// });
// console.log();
//arrow function
// myStates.forEach((state) => {
//     console.log(state);
// });
// console.log();

// let printMe = (item) => {
//     console.log(item);
// }
// myStates.forEach(printMe)

// Accessing objects inside an array
const phoneBook = [
    {
        fullName: 'Ramya',
        number: 9867543423,
        country: 'UAE'
    },
    {
        fullName: 'Subramanya',
        number: 8790543423,
        country: 'USA'
    },
    {
        fullName: 'bharat',
        number: 9867239823,
        country: 'China'
    }
];

phoneBook.forEach((item) => {
    console.log(item.fullName);
})