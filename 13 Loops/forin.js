//using object
const programName = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby'
}
//to get key
for (const key in programName) {
    console.log(key);
}
//to get value of an object
for (const key in programName) {
    console.log(programName[key]);
}
// to get and value of an object
for (const key in programName) {
    console.log(`${key} is shortcut for ${programName[key]}`);
}

//using array
const oddNumbers = [1, 3, 5, 7, 9];
//to get keys
for (const key in oddNumbers) {
    console.log(key);
}
//to get values
for (const key in oddNumbers) {
    console.log(oddNumbers[key]);
}