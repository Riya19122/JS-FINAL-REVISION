// Scopes 
// 1. Global Scope => it means we can access the variable globally 
let a = 200;
// var a = 20;   // var is global scope

// 2. Block Scope  => it means we can access the variable under the blocks 
if(true){
    let a = 10
    const b = 20
    var c = 30      // here we see "var" variable is not treated as block scope
    // console.log("Inner : ",a);     //block scope
}

//  console.log(a);      // global scope
//  console.log(b);
//  console.log(c);


// 3.Nested Scope
function one(){
    const name = "riya"     // global scope for two()

    function two(){
        const website = "youtube"    // block scope for anything
        console.log(name);
    }
    // console.log(website)
    two();  
}
// one();


if(true){
    const username = "Riya"     // global scope for inner loop
    if(username == "Riya"){
        const website = " youtube"       // block scope
        // console.log(username + website);
    } 
    // console.log(website);     //this is not accessible bcoz website variable is block scope
}
// console.log(username)    // here this is also block scope for the whole , it give error after the loop ends


// *******************************  Interesting Concept  ********************************
console.log(addOne(5));    // it will not give error bcoz we can call function anywhere
function addOne(num){
    return num+1
}

// console.log(addTwo(6))     // it will give error bcoz here we assigned a function to the variable so we can not declare it before

// if we assigned a function to the variable then we have to call it after assigned variable , otherwise it will give error
const addTwo = function(num){    // this is the another way to declare function
    return num+2
}
console.log(addTwo(6))     // it works properly bcoz here we called a function after declaration    


