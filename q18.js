"use strict";
// 18. Seeing the World: 
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
// // order has changed.
let myplaces = ["Karachi", "Pindi", "Hyderabad", "Quetta", "Islamabad", "Naran"];
// console.log(myplaces);
// making a copy of an array
let copyofarray = myplaces.slice();
let sortedarray = copyofarray.sort();
// console.log(sortedarray);
// orignal printing array
// console.log(myplaces);
// reversing orignal array
// first we have make a copy of orignal array
let copyofarray2 = myplaces.slice();
let reverseoriarray = copyofarray2.reverse();
// console.log(reverseoriarray);
// printing orignal array
// console.log(myplaces);
// reverse the oder of orignal array
let reverseoriarray2 = myplaces.reverse();
// console.log(reverseoriarray2);
let againreverse = reverseoriarray2.reverse();
// console.log(againreverse); // same as orignal array
// sorting orignal array
let sortoriarray = myplaces.sort();
console.log(sortoriarray);
let reversesortedarray = sortoriarray.reverse();
console.log(reversesortedarray);
