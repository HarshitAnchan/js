// Primitive Datatype ---- its a call by value 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

const bigNumber = 3263363373638373n

//Reference (Non Primitive Dataype) 


//Arrays, Objects, Functions

// array
const heros = ["batman", "ironman", "thor"]


// object
let myObj = {

    name:"harshit",
    age:22
}

// function

let myFunction = function (){

    console.log("hello World");
}


console.log(typeof scoreValue);


//typeof

// Undefined = "undefined"
// Null	= "object"
// Boolean =	"boolean"
// Number	= "number"
// String	= "string"
// Object (native and does not implement [[Call]])	= "object"
// Object (native or host and does implement [[Call]])	= "function"
// Object (host and does not implement [[Call]])	= Implementation-defined except may not be "undefined", "boolean", "number", or "string".
