"use strict";
// // 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function;
// function make_shirt(size: number, label: string){
//     // return size + label;
//     return `my shirt is ${size} and label is ${label}`;
// }
// let myFunc = make_shirt(36, " The Sunny Day");
// // how to print on console
// console.log(myFunc);
let myfun = (size, label) => {
    return size + label;
};
console.log(myfun(36, ` The Cool Day`));
