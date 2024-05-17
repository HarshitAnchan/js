//Stack (Primitive), Heap (Non primitive)


let myYoutubename="harshitanchan"

let anothername = myYoutubename

anothername  = "matchstick"
console.log(anothername)
console.log(myYoutubename)



let userOne = {

    email: "user@google.com",
    upi:"user@okaxis"
}

let userTwo = userOne;

userTwo.email= "harshit@google.com"

console.log(userOne.email);
console.log(userTwo.email);