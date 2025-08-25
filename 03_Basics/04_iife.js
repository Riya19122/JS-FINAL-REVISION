// Immediately Invoked Function Expressions(IIFE)
/*
sometimes, we face the problem of global scope polution , so here we use "iife" to remove the polution of global scope(variable , and soon)
 */

// (function chai(){
//     console.log(`DB Connected`);
// })();      // here we can directly call the function which is "iife" and have to use ; after function end
// chai() // dont need to to this

// here for using "iife" we need to use semicolon to stop the error and end the line
 
(() =>{
    console.log(`DB connected two`)
})();

(function chai(name){
    console.log(`DB Connected ${name}`);    //can give argument same as function
})("riya")

/*
two types of "iife" :
1. named iife => those function which has name they are named iifi
2. unnamed iife => those function which dont have any name they are unnamed iifi
*/

