//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
var myfreindss = ["Owais", "Hamza", "Zaid", "Taha"];
// 1st method loop
for (var i = 0; i < myfreindss.length; i++) {
    console.log("Mr. ".concat(myfreindss[i], "! you are invited to my dinner on Monday"));
}
// 2nd method using map()
myfreindss.map(function (ib) {
    console.log("Mr. ".concat([ib], "! you are invited to my dinner on Monday"));
});
