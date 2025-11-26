/**
 * function
 * 1. function statement/function declaration
 */
// 1 function declaration
// function greetMessage(){
//     console.log("Hello from geeksforgeeks");
// }
// // ->  calling the function
// greetMessage();

// 2
function greetMesssage(name, city){
    console.log(`${name}, welcome to geeksforgeeks`);
    console.log(`thank you for joining from ${city}`)
}
greetMesssage("kapil","delhi");
greetMesssage("kaka","mumbai");
greetMesssage("gaurangi","goa");

// 3 home work
function calculateSum(min,max){
    let sum = 0;
    for (let i=min; i<=max; i++){
        sum += i;
    }
    return sum;
}
console.log(calculateSum(1,10)); // Expected output: 55
