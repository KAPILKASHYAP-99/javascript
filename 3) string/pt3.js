// topic String Method - indexOf
// 1
// const displayMessage="I am a Mentor at GeeksforGeeks"
// console.log(displayMessage.indexOf("a"))

// 2
// const displayMessage="I am a Mentor at GeeksforGeeks"
// console.log(displayMessage.indexOf("a",2))

// 3 find character 
// function findCharacter (text, char) {
//     const index = text.indexOf(char);

//     return index;
// }
// const result = findCharacter("I am a Mentor at GeeksforGeeks", "x");
// console.log(result)

// or
// function findCharacter (text, char) {
//     const index = text.indexOf(char);
//     if (index === -1){
//         return "Character not found"
//     }else{
//         return "Character found in the string"
//     }
// }
// const result = findCharacter("I am a Mentor at GeeksforGeeks", "x");
// console.log(result)

// 4  find character by using arrow function
const findCharacter = (text, char) => text.indexOf(char) === -1 ? "Character not found" : "Character found";
const result = findCharacter("Kapilkashyap.com","a");
console.log(result);
