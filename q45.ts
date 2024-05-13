// 5. Cars: Write a function that stores information about a car in an Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information wasstored correctly

function carDetails(manufacture: string, modelName: string, ...additionalInfo:any[]){
    const car = {manufacture, modelName, ...Object.fromEntries(additionalInfo)};
    return car; 
};

const myCarDetails = carDetails("Toyota", "corolla", [`color`, `blue`], [`Year`,2022]);

console.log(myCarDetails);