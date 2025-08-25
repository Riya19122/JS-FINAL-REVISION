// This Keyword  => when we want to refer current context then we use "this"
const user = {
    username: "riya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);  // this refers to the current cotext/changes
        console.log(this);   //here it is refer to the current object 
    }
}

// user.welcomeMessage()     //output => riya , bcoz this is refer to the current object
// user.username = "sami"
// user.welcomeMessage()     //output => sami , bcoz here username is now updated then "this" refers to now here

// console.log(this);    // here it will refer to empty{} , bcoz here in (node) there is no object in global scope

/* 
node => dont have global object  (this) => {}empty object in global scope
browser => have global object which is window object  (this)=> window object for global scope
*/

// function chai(){
//     let username = "riya"
//     console.log(this.username)    // "this" works only on objects => so it gives undefined
//     console.log(this);    // it means "this" holds some value if we use in function
// }
// chai()


// Arrow Functions  
/* Declaration syntax => 
    datatype variableName = ()=> { 
        content of the function btw the curly braces => same as normal function
        } 
*/

// const chai = ()=>{
//     let username = "riya"
//     console.log(this)    // in arrow function => "this" will give the empty object{}
// }
// chai();

// Basic way to write arrow function => if we use {} then we have to write return keyword
// const addTwo = (num1 , num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(2,3))

// here implicit return way => we can remove curly braces and return keyword 
// const addTwo = (num1,num2) =>  num1+num2
// console.log(addTwo(2,4))

// one more way to write arrow function by implicit return => if we use parenthesis () then we dont need to write the return keyword
// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(4,5));

// if we want to write object in arrowfunction => we have to wrap it in ({without curly braces we will not identify it as object})
const user1 = (num1,num2) => ({username : "riya"})
console.log(user1(2,3));




    

 

