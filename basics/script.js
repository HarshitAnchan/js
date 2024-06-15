// int age = 19;

// if(age >= 18){
//     console.log("Can have license");

// }else{
//     console.log("Yoou cannot have license");
// }

// let num = 10;
// if (num %2 ===  0) {
//     console.log(num, "is even");
// }else{
//     console.log(num, "is odd");
// }

// let mode = "yellow";
// let color;
// if (mode == "dark") {
//     console.log("black");
// }else if (mode === "blue") {
//     console.log("blue");
// } else {
//     console.log(color = "white");
// }

// let age = 20;

// const checkAge = age >18 ? "adult" :"not adult";
// console.log(checkAge);



// let age = 20;

// switch (age) {
//     case age < 18:
//         console.log("under 18");
//         break;
//     case age >=18:
//         console.log("above 18");
//         break;

//     default:
//         console.log("hello idk your age");
//         break;
    
// }


// let num = prompt("Enter Your number");

// if (num %5 == 0 ) {
//     console.log(`the num ${num} is multiple of 5`);
// }else{
//     console.log(`it is not the multiple of 5`);
// }



// let score = prompt("ENTER SCORE");

// if (score >=80 && score<=100) {
//     console.log("A grade");
// } else if (score ==70 && score<=79) {
//     console.log("B grade");
// }else if (score==60 && score<=69) {
    
// }else if (score ==50  && score<=59) {
    
// }else{

// console.log("F grade");
// }


// for(let count=1; count <=5; count++){

//     console.log("harshit");
// }


// Calculate sum of 1 to n

// let sum=0;
// let n =100
// for(let i = 1; i <= n; i++ ){
//     sum = sum + i
// }
// console.log(`sum = ${sum}`);



// let i =1;
// while (i<=5) {
//     console.log(i);
//         i++;
// }



// let i=1;

// do{
//     console.log(i);
//     i++;
// }while(i<=10);



// for of loop

// let str = "harshit";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log("string size", size);



// for in loop

// let student ={
//     name:"harshit,",
//     age:22,
//     cgpa: 8.7,
//     isPass: true
// };
//  for (let key in student) {
   
//         console.log(key , student[key]);
//     }
 


//practice print even number from 1 to 100


// for(num =0; num<=100; num++){
//     if (num %2 == 0) {
//         console.log(num); 

//     }
// }



// practice q 2

// let gameNum =25;
// let userNum =prompt("guesss the number")
//  while (userNum != gameNum) {
//    userNum = prompt("you have entered wrong number")
//  }
// console.log("congo correct num");


// let str = "Harshit"
// console.log(str[0], str[1]);


// let  obj={
//     item:"pen",
//     price:10,
// };
// console.log(`the cost of  ${obj.item} is , ${obj.price} rupees`);



// let str = "hello"

// let str1="world!"



// console.log(str.replace(str, "jajajaja"));




// let fullName = prompt("enter full name");

// let username = `@${fullName}${fullName.length}`
// console.log(username);


// ARRAY


let heroes = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Spider-Man",
    "Iron Man",
    "Captain America",
    "Thor",
    "Black Panther",
    "Hulk",
    "Black Widow"
  ];


//   for loop
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }


// forof loop
// for (let hero of heroes) {
//     console.log(hero);
// }


// let cities = [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "Houston",
//     "Phoenix",
//     "Philadelphia",
//     "San Antonio",
//     "San Diego",
//     "Dallas",
//     "San Jose"
//   ];

  
//   for (let city of cities) {
//     console.log(city.toUpperCase());
//   }




// Practice

// let marks = [85, 97, 44, 37, 76, 60]


// let sum = 0;
// for (let val of marks) {
//     sum+= val;
    
// }
// let avg = sum/marks.length;

// console.log(avg);




// let items= [250, 645, 300,900,50];

// for(i =0; i<items.length ; i++){

//     let offer = items[i] /10;
//     items[i] -= offer;
// }

// console.log(items);



// let items = ["potato", "apple", "litchi", "chips", "fries"]

// console.log(items.splice(2,2));




// let arr =[1,2,3,4,5,6,7,8,9]

// arr.splice(2,2,101,102);



// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];


// companies.splice(2, 1 , "ola")

// companies.push("Amazon")




// FUNCTION


// function myFunction(msg, n){
//   console.log(msg*n);
// }

// myFunction("hello world", 10);



// sum of 2 number

// function sum (x, y){

// x and y acts as local variables

//   sum = x+y;
//   return sum;
// }

// let val = sum(2, 4);
// console.log(val);




// Multiplication of 2 number

// function mul (x, y){
//   return x*y;

// }
// console.log(mul(5, 6))





// Arrow function


// const sum = (a, b) => {
// console.log(a +b)
// }


// const mul = (a, b) => {
//   return a * b;
// }
// console.log(mul(3, 4));



// practice COUNT NO OF VOLWELS
 
// function countVowels (str){
//     let count=0;
//   for(const char of str){
//     if(char==="a" || char ==="e" || char === "i" || char==="o" || char==="u"){
//       count++;
//     }
//   }
//     console.log(count);

// }



//same as above CREATE AN ARROW FUNCTION

// const countVowels = (str) =>{
//   let count=0;
//   for(const char of str){
//     if(char==="a" || char ==="e" || char === "i" || char==="o" || char==="u"){
//       count++;
//     }
//   }
//     console.log(count);

// }


// for each loop array
// let arr =[1,2,3,4,5];

// arr.forEach(function printValue(val){  //value ateach index
//     console.log(val);

// })


// same but arrow fun

// let arr =["pune", "delhi"];

// arr.forEach((val, idx, arr ) => {

//   console.log(val.toUpperCase(), idx, arr);
// })



let num =[1,2,3,4,5];
num.forEach((num ) => {
    console.log(num*num);
})

















