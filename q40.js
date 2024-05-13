"use strict";
// 40. Album: Write a function called make_album() that builds an Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing differentalbums. 
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album
function myAlbum(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = myAlbum("Ali", "Rang-e-Muhabbat");
let album2 = myAlbum("Madad", "Roshan Andhera");
let album3 = myAlbum("Ayaz", "Mousam-e-DIl");
console.log(album1);
console.log(album2);
console.log(album3);
// number of track
function myAlbum2(artistName, albumTitle, numberOfTrack) {
    return { artistName, albumTitle, numberOfTrack };
}
let album4 = myAlbum2("Ali", "Rang-e-Muhabbat", 30);
let album5 = myAlbum2("Madad", "Roshan Andhera", 55);
let album6 = myAlbum2("Ayaz", "Mousam-e-DIl");
console.log(album4);
console.log(album5);
console.log(album6);
