/*
break
*/
//using for loop
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//using switch case
let x = 2;
switch (x) {
    case 1:
        console.log("x = 1");
        break;
    case 2:
        console.log("x = 2");
        break;
    case 3:
        console.log("x = 3");
        break;
    default:
        console.log("nothing match");
}

/*
continue
*/
//Skip even numbers in a loop
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//Skip odd numbers in a loop
let i = 0;
while (i <= 10) {
    i++;
    if (i % 2 === 0) {
        console.log(i);
    }
    continue;
}
