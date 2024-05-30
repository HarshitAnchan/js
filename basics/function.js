


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
console.log(loginuser())


