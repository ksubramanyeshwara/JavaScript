/*
Basic for loop
*/
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*
Nested for loop
*/
const height = 5;
for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log();
}
