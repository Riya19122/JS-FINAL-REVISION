// Truthy & Falsy Value
const username = "riya@itm.in"   

// if(username){       // it assumes true 
//     console.log("got username");
// } else{
//     console.log("dont have username");
// }

/*truthy values  => those values are not in falsy they are truthy but here are some examples
"0" , "false" , " " , [] , {} , function(){} ,
*/

/* falsy values
 false , 0 , -0 , bigInt(0n) , null , "" , undefined , NaN
*/

// conditions for checking empty array
const score = []
// if(score.length === 0){
//     console.log("Array is empty");    
// }

// condition for checking empty objects
// const emptyObject = {}
// if(Object.keys(emptyObject).length === 0){
//     console.log("object is empty");
// }


// Nullish Coalescing Operator(??) : for null & undefined
// let val1;
// val1 = 5 ?? 10
// // val1 = null ?? 10      // it means if nothing give value then assign null

// // val1 = undefined ?? 15   // same here if nothing give value then assign undefined

// val1 = null ?? 10 ?? 20  // here first value after null will assign to the variable
// console.log(val1)    


// Ternary Operator
// condition ? true : false;

const iceTea = 10
iceTea >= 80 ? console.log("ice tea is expensive") : console.log("ice tea is cheap")

 
