// Singleton => when we declared objects by constructor it will always make singleton but when we make by literals then i will not make singleton
// Objects
// Objects Declaration  => objects are the key:value pairs

// Symbol declaration
const mySymbol = Symbol("mykey1")


// 1. Object Literals
const jsUser = {
    name: "Riya",
    "full name": "riya jain",
    [mySymbol]: "key1",  // symbols always declare in square bracket in objects
    age: 21,
    location: "Gwalior",
    email: "jriya9313@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["monday" , "saturday"]
}

// Object access  => mostly we access by dot but in some cases we use sqaure-brackets
// console.log(jsUser.email)  // first way
// console.log(jsUser["email"])  // 2nd way
// console.log(jsUser["full name"]);

// console.log(jsUser[mySymbol])
// console.log(typeof jsUser[mySymbol])


// Objects methods 
   // 1. update 
//    jsUser.email = "riya@itm.com"
//    console.log(jsUser.email)

   // 2. freeze => stop the updation
//    Object.freeze(jsUser)
//    jsUser.age = 18
//    console.log(jsUser.age)

//    console.log(jsUser);


   // 3. i Just want to add a function in object
   jsUser.greetings = function(){
    console.log("hello Js users")
   }

   jsUser.greeting2 = function(){
    console.log(`hello Js users ${this.name}`)   // "this" refers to the same object in which we want to add new key:value pairs
   }


   jsUser.greetings()
   jsUser.greeting2()

   console.log(jsUser)
   



// 2. Object Constructor
// Object.create 

   