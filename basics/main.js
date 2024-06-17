// let hour = 16;
// if(hour < 12){
//     console.log("we are allowed");
// }else{

//     console.log("We are not allowed");
// }

// let count = 10;

// for(i =0; i <= count ; i++){
//     console.log(i);
// }


// const person = {
//     name: "Harshit",
//     isStudent: true,
//     age: 23,
//     hobbies: ["reading", "dancing"]
// };

// console.log(person.age);

// let prompt = require('prompt-sync')();
// const age = prompt("Enter your age")
// const ages = [23,45,56,16];

// const result = ages.filter(checkAge)


// function checkAge(age){
//     return age >=18
// }
// console.log(result);


// Q1
// let prompt = require('prompt-sync')();
// let age = prompt("Enter Your age" );
// if(age<18){
//         console.log("You get 20% discount");
// }else if(age >18 && age<65){
//     console.log("Normal ticket price");
// }else{
//     console.log("you get a 30 percent senior discount");
// }

//Q2
//  let prompt = require('prompt-sync')();
//  let length = prompt("Enter length" );
//  let width = prompt("Enter width");
//  let area = length*width;
//  console.log(area);

//Q3


const prompt = require('prompt-sync')();
const guessList = ["Harshit", "Vinisha", "Nandini"];

let enteredName = prompt("Enter name: ");

// Function to check if the entered name is in the guessList
function checkGuess(name) {
    return guessList.includes(name);
}

if (checkGuess(enteredName)) {
    console.log("Name is present.");
} else {
    console.log("Name is not present.");
}
