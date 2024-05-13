"use strict";
/*3. Name Cases:
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.*/
/*lowercase*/
let myName = `Owais`;
console.log(myName.toLowerCase());
/*uppercase*/
console.log(myName.toUpperCase());
/*titlecase*/
let firstletter = (myName.charAt(0).toUpperCase());
let lastletters = (myName.slice(1).toLowerCase());
let titleCase = firstletter + lastletters;
console.log(titleCase);
