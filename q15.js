// //15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var myFreinds = ["Owais", "Hamza", "Zaid", "Taha"];
console.log("due to some personal reasons Mr. ".concat(myFreinds[1], " will not come on my dinner"));
myFreinds[1] = "Najam";
console.log("New list of my friends who are comming to my dinner\n");
for (var i = 0; i < myFreinds.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myFreinds[i]));
}
