// Hello World Object
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
function isEmpty(obj){
    for(let key of obj){
        return false; // if the loop has started, there is a property
    }
    return true;
};

// sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumAllSalaries(obj) {
    let sum = 0;
    for (let key in obj){
        console.log(obj[key]);
        sum = sum + obj[key];
    }
    return sum;
}
console.log(sumAllSalaries(salaries));

// Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  console.log(menu);
  
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }  
    }
}
multiplyNumeric(menu);

console.log(menu);