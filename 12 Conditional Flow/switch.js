let percantage = 40;

switch (true) {
    case percantage > 90 && percantage < 100:
        console.log("You have got A+ grade");
        break;
    case percantage > 80 && percantage < 90:
        console.log("You have got A grade");
        break;
    case percantage > 70 && percantage < 80:
        console.log("You have got B+ grade");
        break;
    case percantage > 60 && percantage < 70:
        console.log("You have got B grade");
        break;
    case percantage > 50 && percantage < 60:
        console.log("You have got C+ grade");
        break;
    case percantage > 35 && percantage < 50:
        console.log("You have got C grade");
        break;
    default:
        console.log("You Have Failed This Course");
        break;
}

let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent! You got an A.");
        break;
    case "B":
        console.log("Good job! You got a B.");
        break;
    case "C":
        console.log("You got a C. You can do better.");
        break;
    case "D":
        console.log("You got a D. Improvement is needed.");
        break;
    case "F":
        console.log("Oh no! You got an F. You should study harder.");
        break;
    default:
        console.log("Invalid grade entered.");
        break;
}
