// Functions

// function definition
function myName(){
    console.log("Riya Jain")
}

// function calling
// myName()

// Write the function to add two numbers
// function addTwoNumbers(a , b){
//     console.log( a + b)         // it gives the undefined output
// }

// better way to write a function it give the value of result
function addTwoNumbers(a , b){
    // let result = a + b
    // return result

    // console.log("riya");    // it will never execute bcoz after return nothing will be executed

    return a + b     // we can write directly as it 
    
}
const result = addTwoNumbers(10 , 20)
// console.log("result is : ",result)

// give string as parameter & argument
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter username");
        return                                    
    }
    return `${username} just logged in`      // now this will not run bcoz return was used earlier
}
// console.log(loginUserMessage("riya"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage("riya"))

// Rest opeartor    => (...) it helps to save rest of the values in the array
// function calculateCartPrice(...num1){      
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,500))


function calculateCartPrice(val1 , val2 ,...num1){       // now val1 and val2 value will nor print and others are save in array as same as before  
    return num1
}
// console.log(calculateCartPrice(200,300,400,500))

// object
const user = {
    username: "riya",
    price:999
}

// pass object as parameter & argument
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

// handleObject({                           // we can directly access it by the time of function calling
//     username:"riya",
//     price:199
// })

// array
const myNewArray = [200,400,500,600] 

// pass arrays as parameter & argument
function handleArrays(getArray){
    return getArray[1]
}

// console.log(handleArrays(myNewArray))

console.log(handleArrays([100,200,300,400]))   // another way to define array in the time of function calling





    