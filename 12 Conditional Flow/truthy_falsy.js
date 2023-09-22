/*
TRUTHY
*/
if (true) {
    console.log("This will be executed.");
}

if (42) {
    console.log("This will be executed.");
}

if ("Hello" && [1, 2, 3]) {
    console.log("This will be executed.");
}

/*
FALSY
*/
if (false) {
    console.log("This won't be executed.");
}

if (0) {
    console.log("This won't be executed.");
}

if ("" || null || undefined) {
    console.log("This won't be executed.");
}