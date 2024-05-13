/*3. Name Cases:
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.*/

/*lowercase*/
let myName: string = `Owais`;
console.log(myName.toLowerCase());


/*uppercase*/
console.log(myName.toUpperCase());


/*titlecase*/
let firstletter: string = (myName.charAt (0).toUpperCase());
let lastletters: string = (myName.slice(1).toLowerCase());
let titleCase: string = firstletter + lastletters;
console.log(titleCase);