const accountId = 14453
let accountEmail = "riya@google.com"
var accountPassword = "1234"
accountCity = "jaipur"

// accountId = 2   // it is not allowed bcoz const key will not change

accountEmail = "jriya9313@gmail.com"
accountPassword = "12345"
accountCity = "Bhopal"
let accountState;

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail , accountPassword , accountCity , accountState])
