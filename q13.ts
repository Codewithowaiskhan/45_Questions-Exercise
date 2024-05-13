//13. Your Own Array:
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


let mytrans: string [] = ["Bike", "Car", "Train","Airoplan"];

// first method (loop)

// for (let i = 0; i < mytrans.length; i++){
//     console.log(`I would you like to own a ${mytrans[i]}`);
// }

// 2nd method

mytrans.map((ib)=>{
    console.log(`I would tou like to own a ${ib}`)
});