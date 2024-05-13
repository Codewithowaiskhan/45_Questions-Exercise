// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let MyFreinds: string [] = ["Ali", "Ahmad", "Waqar", "Manzoor", "Tariq"];

console.log(`I am inviting ${MyFreinds.length} number of freinds to my dinner which are following\n`);
for(let i = 0; i< MyFreinds.length; i++){
    console.log(`${i + 1}. ${MyFreinds[i]}`)
};