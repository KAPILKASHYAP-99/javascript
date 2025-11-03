/**
 * Logical Operator part - 2
 * 1. OR ||
 * 2. AND &&
 */
// 1
// const firstName = "kapil";
// const nickName = "thaliva"
// console.log(firstName);
// console.log(nickName);

const { BiUnderline } = require("react-icons/bi");

// 2
// const firstName = "";
// const nickName = "thaliva"
// // console.log(firstName);
// console.log(firstName || nickName);

// 3
/**
 * Truthy
 * falsy value --> "", 0, null, undefined 
 */
// const firstName = "Kapil";
// const nickName = " ";
// console.log(Boolean("kapil"));
// console.log(Boolean("kaka"));
// console.log(Boolean("")); if there is no space it will give false
// console.log(Boolean(" "));
// console.log(Boolean(0));
// console.log(Boolean(undefined));

// const firstName = "Kapil";
// const nickName = "thaliva";
// const userName = firstName || nickName;
// console.log(`Name - ${userName}`);

// const firstName = "";
// const nickName = "thaliva";
// const userName = firstName || nickName;
// console.log(`Name - ${userName}`);

// const firstName = "";
// const nickName = null;
// const userName = firstName || nickName;
// console.log(`Name - ${userName}`);

// const firstName = undefined;
// const nickName = null;
// const userName = firstName || nickName;
// console.log(`Name - ${userName}`);

// const firstName = null;
// const nickName = undefined;
// const userName = firstName || nickName;
// console.log(`Name - ${userName}`);

// const firstName = null;
// const nickName = undefined;
// const userName = firstName || nickName || null;
// console.log(`Name - ${userName}`);

// const firstName = null;
// const nickName = "thaliva";
// const userName = firstName || nickName || null;
// console.log(`Name - ${userName}`);

// const firstName = null;
// const nickName = "";
// const userName = firstName || nickName || null || "HiddenGeek"
// console.log(`Name - ${userName}`);

// const firstName = null;
// const nickName = "";
// const userName = firstName || nickName ||  "HiddenGeek" // short circuting
// console.log(`Name - ${userName}`);

// let a = 12;
// let b;
// let b = null;
// let b = "";
// console.log(a + b);
// console.log(a + (b || 0));

// let a = 12;
// let b;
// console.log(a + b);
// console.log(b || 0);

// const firstName = "kapil";
// const nickName = "thaliva";
// const nickName = "";
// const nickName = null;
// const nickName = "thaliva"

// const userName = firstName && nickName;
// const userName = firstName && nickName && "HiddenGeek";
// console.log(`Name - ${userName}`);

/*
exercise 
 */
// q1 what will be the result of the OR operation
// console.log(3|| 2|| 1);
// console.log("" || 0 || 2);
// console.log(""|| "null" || 2);
// console.log(""|| 0|| undefined);

// q2 what will be output
// console.log(3 || 2 || 1);
// console.log("" || 0 || 2);
// console.log("" || 0 || undefined)
// console.log("" || "null" || 2);

// note --> never use and operator in short circuting








