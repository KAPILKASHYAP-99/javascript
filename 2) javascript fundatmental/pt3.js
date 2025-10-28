// topic 3 nested conditional statement

const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("enter a number: "));
// 1 console.log(number);
const remainder = number % 2;
// 2 =>
//  if (remainder === 0){
//     console.log(`${number} is an even number`)
// }else{
//     console.log(`${number} is an odd number`)
// }
// 3 =>
// if (remainder === 0){
//     console.log(`${number} is an even number`)
//     if (number % 4 === 0){
//         console.log(`${number} is divisible by 4`)
//     }else{
//         console.log(`${number} is not divisible by 4`)
//     }
// }else{
//     console.log(`${number} is an odd number`)
// }

// 4 =>
//     if (remainder === 0){
//     console.log(`${number} is an even number`)
//     if (number % 4 === 0){
//         console.log(`${number} is divisible by 4`)
//     }else{
//         console.log(`${number} is not divisible by 4`)
//     }
// }else{
//     console.log(`${number} is an odd number`)
//     if (number % 5 === 0){
//         console.log(`${number} is divisible by 5`)
//     }else{
//         console.log(`${number} is not  divisible by 5`)  
//     }
// }



