// singleton 

// object literals

const mySym = Symbol("key1")
const jsUser = {
    "full name": "Harshit Anchan",
    [mySym]:"mykey1",
    name: "Harshit",
    age: 18,
    location: "Vasai",
    email: "harshit.com",
    isLoggedIn: false,
    lastLoginDays:["Mon", "Sat"]
}


//access object
console.log(jsUser.email);


//access  object
// console.log(jsUser["email"]);

// console.log(jsUser [mySym]);


// change something / add 

jsUser.email = "harshitanchan.com"
// console.log(jsUser["email"]);

// if you want to freeze the object , to make no changes here 
Object.freeze(jsUser)
jsUser.email = "harshitanchan647@gmail.com"

// console.log(jsUser);


jsUser.greeting = function(){

    console.log("hello js user");


}
jsUser.greetingtwo = function(){

    console.log(`hello js user, ${this.name}`);


}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());