const accountId = 144553
let accountEmail = "harshit@gmail.com"
var accountPassword = "12345"
accountCity= "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@gmail.com"
accountPassword= "1221112"

accountCity="vasai"
console.log(accountEmail);



/*
Perfer not to use var
because of issue in block scope and fuctional scope

*/ 
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])