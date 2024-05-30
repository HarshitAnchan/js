


function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
    
}

// sayMyName();

// function addToNumbers(number1, number2){
//      console.log( number1 +  number2);
// }

function addToNumbers(number1, number2){
    //   let result = number1 + number2
    //   return result

    return number1+number2
}

const result = addToNumbers(3, 4)
// console.log(result);



function loginuser(username){
    if (username=== undefined) {
        console.log("Please enter your username:");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuser("harshit"))
// console.log(loginuser())

function calculateCartPrice (val1, va2, ...num1){

return num1
}

// console.log(calculateCartPrice(200, 400, 500))


const user = {

    username: "harshit",
    price: 200
}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}

// handleObject(user)
handleObject({

    username: "Vini",
    price: 399
})


const myNewArray = [200, 400, 500, 600]



