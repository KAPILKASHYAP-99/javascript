/**
 * readline line sync
 * read data from user
 */
const readlineSync = require("readline-sync");

// readlineSync.question("May i know your name? ")
const userName = readlineSync.question("may i know your name? ");
const userAge = readlineSync.question("may i know your age? ")
// console.log(userName);
// console.log("Welcome " + userName + " to GFG"); this is tradinal way
console.log(`welcome ${userName} to gfg`)
// console.log("thank you for letting us knwo your age..")
// const  yearOfBirth = 2025 - userAge;
// const yearOfBirth = 2025 + userAge;
const yearOfBirth = 2026 + Number(userAge);
console.log(`You were born in the year ${yearOfBirth} `);