// Constructor => singleton object
// const tinderUser = new Object()

// Object literals => non singleton objects
const tinderUser = {}

tinderUser.name = "Sammy"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser)   //both give same output but only difference is constructor is singleton and literals is non singleton

// now we will give objects under object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Riya",
            lastname : "Jain"
        }
    }
}

// access
// console.log(regularUser.fullname.userfullname.lastname)

// object Methods
    // 1. merge/concat method
    // const obj1 = {1:'a' , 2:'b'}
    // const obj2 = {3:'c' , 4:'d'}

    // const obj3 = Object.assign({} ,obj1 , obj2)     // assign means concat in objects

    // const obj3 = {...obj1 , ...obj2}   // spread method
    // console.log(obj3);


    // when data comes from database then it comes in the form of array of objects
    const users = [
        {
            id:"riya@gmail.com",
            name:"riya"
        },
        {
            id:"riya@gmail.com",
            name:"riya"
        },
        {
            id:"riya@gmail.com",
            name:"riya"
        }
    ]

    // Access
    // console.log(users[1].name);

// console.log(tinderUser);

// to access keys & values , entries
// console.log(Object.keys(tinderUser))
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))

// // if i just want to check the property in objectthen we use the method which is => hasOwnProperty("")
// console.log(tinderUser.hasOwnProperty("name"))
// console.log(tinderUser.hasOwnProperty("loggedOut"))


// Destructuring of objects   => {} curly braces means destructuring
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}


// another method to access these properties 
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course       // we can update the name of the property
console.log(instructor);


// APIs in objects =>they come in json format

// {
//     "name": "riya",
//     "email": "jain@gmail.com" 
// }

    // sometimes in array format
// [
//     {},
//     {},
//     {}
// ]







    



