// Primitive Datatypes => they are always call by value
   // they are of 7 types : String , Number , Boolean , Null , undefined , Symbol , BigInt

// const score = 100;
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null 
// let username;

// const id = Symbol('123')
// const anotherId = Symbol("123")

// console.log(id === anotherId)  //both are different bcoz symbol datatype make the things and variable unique no matter what the value is

// const bigNumber = 3456789292028n


// Non-Primitive Datatypes => they are call by reference
  // Arrays , Objects , Functions  => in which all datatypes are know as object and object function

//   // Arrays
// const heroes = ["shaktiman" , "naagraj" , "doga"]

// // objects 
// const books = {
//     science:"s Chand",
//     maths : "RD sharma",
//     socialScience : "ALL in one"
// }

// // functions
// const myFunction = function(){
//     console.log("hello world");
// }


// how to know the datatype of variable
    // by TypeOf 
// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)
// console.log(typeof scoreValue)
// console.log(typeof id)

// console.log(typeof myFunction)
// console.log(typeof heroes)
// console.log(typeof books)

// link to more study
// https://262.ecma-international.org/5.1/#sec-11.4.3


// **********************************************  MEMORY IN JS  **************************************

    //  1. Stack Memory
        //  in all the primitive type => stack is used

        let myYoutubeChannel = "RiyaJaindotCom"

        let anotherName = myYoutubeChannel
        anotherName = "chaiaurchode"
        console.log(myYoutubeChannel)
        console.log(anotherName)


    //  2. Heap Memory
       //   in all non primitive type => heap memory is used

       let userOne = {
        email : "user@gmail.com",
        upi : "user@ybl"
       }

       let userTwo = userOne

       console.log(userOne)
       console.log(userTwo)

       userTwo.email = "riya@google.com"
       console.log(userTwo.email)
       console.log(userOne.email)






