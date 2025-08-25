// Conditional Statements in JS

/* 
some conditions for checking :
1. > => greater than 
2. < => smaller than
3. >=  => greater than or equal to
4. <=  => smaller than or equal to
5. ==   => checks equal equals to(only check value)
6. !=  => check doesnot equals to(only values)
7. ===  => checks equals to in terms of datatypes also
8. !==  => checks for value and type too
*/

// 1. If-else Statement
// if(2 == "2"){                    // it runs bcoz string first convert it into number then compare it
//     console.log("executed");
// }else{
//     console.log("not executed");
// }

// if(2 === "2"){
//     console.log("true");     // here datatype will also check so it gives false  
// }else{
//     console.log("false")
// }
 
// if( 2 != -2){               
//     console.log("not equal")
// } else{
//     console.log("equal")
// }

// if(2 !== "2"){
//     console.log("not same")
// } else{
//     console.log("same")
// }

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);    // it will give error bcoz it is defined inside the scope so we cant access it in outside the scope

  // shorthand to write if-else 
// const rupee = 1000
// if(rupee > 500) console.log("true");   // we will not use this bcoz this is not readable

// 2. if - else if statement
// if(rupee < 500){
//     console.log("less than 500")
// } else if(rupee < 750){
//     console.log("less than 750");
// } else {
//     console.log("greater than 750 and 500 both")
// }

// we can check multiple conditions together
const isLoggedIn = true
const isDebitCard = true
const isLoggedInFromGoogle = false;
const isLoggedInFromEmail = true;

if((isLoggedIn && isDebitCard) == true){
    console.log("allow access")
}

if(isLoggedInFromGoogle || isLoggedInFromEmail){
    console.log("user logged in");    
}




