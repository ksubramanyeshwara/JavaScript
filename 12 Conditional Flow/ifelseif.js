let x = 9;

if (x == 1) {
    console.log('January');
} else if (x == 2) {
    console.log('Feburary');
} else if (x == 3) {
    console.log('March');
} else if (x == 4) {
    console.log('April');
} else if (x == 5) {
    console.log('May');
} else if (x == 6) {
    console.log('June');
} else if (x == 7) {
    console.log('July');
} else if (x == 8) {
    console.log('August');
} else if (x == 9) {
    console.log('September');
} else if (x == 10) {
    console.log('October');
} else if (x == 11) {
    console.log('November');
} else if (x == 12) {
    console.log('December');
} else {
    console.log('Enter a valid number');
}

let today = new Date().getDay();

if (today == 0) {
    console.log("Sunday!");
}
else if (today == 1) {
    console.log("Monday!");
}
else if (today == 2) {
    console.log("Tuesday!");
}
else if (today == 3) {
    console.log("Wednesday!");
}
else if (today == 4) {
    console.log("Thursday!");
}
else if (today == 5) {
    console.log("Friday!");
}
else {
    console.log("Saturday!");
}