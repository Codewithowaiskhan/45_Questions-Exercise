//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.


const myfreindss: string [] = ["Owais", "Hamza", "Zaid", "Taha"];



// 1st method loop
for (let i = 0; i < myfreindss.length; i++){
    console.log(`Mr. ${myfreindss[i]}! you are invited to my dinner on Monday`);
    
}

// 2nd method using map()
myfreindss.map ((ib)=>{
    console.log(`Mr. ${[ib]}! you are invited to my dinner on Monday`);
});
