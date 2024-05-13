// 16. More Guests:
// You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var myfreinds = ["Owais", "Hamza", "Zaid", "Taha"];
console.log(myfreinds);
console.log("we have 3 more friends to invite on dinner\n");
// adding three more friends
// at ad bigining
myfreinds.unshift("Ali");
// ["Ali", Owais", "Hamza", "Zaid", "Taha"];
console.log(myfreinds);
// ad at middle
myfreinds.splice(2, 0, "Muhammad Ali");
// ["Ali", Owais", "Muhammad Ali", "Hamza", "Zaid", "Taha"];
console.log(myfreinds);
// ad at last
myfreinds.push("Salman");
console.log(myfreinds);
// print all friends alongwith message
for (var i = 0; i < myfreinds.length; i++) {
    console.log("Mr. ".concat(myfreinds[i], " you are invited to my dinner"));
}
;
