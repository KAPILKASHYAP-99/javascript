/**
 * Exercise - For Loop
 */
// 1
// const symbol = " * ";
// for (let i=1; i<=5; i++){
//     console.log(symbol.repeat(i))
// }

// 2 reverse order
// for (let i=5; i>=1; i--){
//     console.log(symbol.repeat(i))
// }

//3
// const userName = "Kapil Kashyap";
// let count = 0;
// for (let i=0; i<userName.length; i++){
//     count++;
// }
// console.log(`Number of character in the string is ${count}`);

// 4
// let userName = "Kapil Kashyap";
// let count = 0;
// for (let i=0; i<userName.length; i++){
//     count++;
// }
// console.log(`Number of character in the string is ${count}`);

// 5 even and odd
// let remainder;
// for (let i=1; i<=10; i++){
//     remainder = i % 2;
//     if (remainder === 0){
//         console.log(`${i} is an even number`)
//     }else{
//         console.log(`${i} is an odd number`)
//     }
// }

// 6
const inputString = "Hello i like GFG"
const vowels = "aeiou";
for (let i=0; i<inputString.length; i++){
    if (vowels.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel`);
    }else{
        console.log(`${inputString[i]} is not vowel`);
    }
}


