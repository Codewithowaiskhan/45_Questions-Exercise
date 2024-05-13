"use strict";
// 24. More Conditional Tests:
// You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array
// equality and inequality
// let myname = "Owais";
// console.log(myname == "Owais") // true equal to
// console.log(myname == "owais") // false not equal to
// numberics
// let mynumber = 10;
// console.log(mynumber == 10); //true
// console.log(mynumber !== 10); // false
// console.log(mynumber > 5); // greater than
// console.log(mynumber < 5); // less than
// console.log(mynumber >= 5); // greater than or equal to
// console.log(mynumber <= 5); // less than or equal to
// and & ===== or |
let Num1 = 20;
let Num2 = 15;
// console.log (Num1 > 17 && Num2 < 15); // false
//         // true stat    false stat
// console.log (Num1 > 17 || Num2 < 15); // true
//           // true stat    false stat
let array = [2, 4, "Owais"];
let myString = "Khan";
console.log(Array.isArray(array)); // true
console.log(Array.isArray(myString)); // false
