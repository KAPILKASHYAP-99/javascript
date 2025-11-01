/**
 * Ternary operator - part 1 --> condition ? yes : no
 */
// 1
// const totalMarksScored = 60;
// if (totalMarksScored < 40){
//     console.log("you need to work hard.");
// }else{
//     console.log("you cleared the exam. Great");
// }

// 2
// const totalMarksScored = 60;
// ternary operator => 
// (totalMarksScored < 40) ? console.log("you need to work hard") : console.log("you cleared the exam ")

// 3 we can convert ternary operator into variable
// const totalMarksScored = 60;
// const result = totalMarksScored < 40 ? "you need to work hard": "you cleared the exam. great"
// console.log(result);

// 4 ternary operator - part 2

const totalMarksScored  = 100;
// if (totalMarksScored < 40){
//     console.log("you need to work hard");
// }else if (totalMarksScored < 60){
//     console.log("B grade");
// }else if (totalMarksScored < 75){
//     console.log("A grade");
// }else if (totalMarksScored < 85){
//     console.log("A+ grade");
// }else {
//     console.log("Genius");
// }


// note we can use ternary operator
const result = totalMarksScored < 40 ? "You need to work hard" : totalMarksScored < 60 ? "B grade" : totalMarksScored <  75 ? "A grade " : totalMarksScored < 85 ? "A+ grade" : "Genius";
console.log(result);

