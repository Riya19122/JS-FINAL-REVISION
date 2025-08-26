// 6. For-each loop  => mostly used 
// for-each on arrays
const coding = ["js","cpp","rb","py","java"]


/* so here syntax of forEach is => 
    arrayName.forEach(Callback function(){         // callback function has no name 
         anything that we want to print
})
*/

coding.forEach(function(item) {     // by normal function
    // console.log(item);
})

coding.forEach( (item)=>{       // by arrowFunction
    // console.log(item);
    
})

// we can do it as make function seperately and give the name of function to the forEach loop as a parameter
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)      // function give it here as parameter


// here in forEach function we have many parameters not only item 
coding.forEach( (item , index , arr)=>{
    // console.log(item , index , arr)
})


// here we see the forEach on array of objects
const myCoding = [
    {
        language : "C++",
        languageFileName : "cpp"
    } , 
    
    {
        language : "Ruby",
        languageFileName : "rb"
    } ,
    {
        language : "java",
        languageFileName : "java"
    } 
]

myCoding.forEach( (item)=>{  
    console.log(item.languageFileName)     // by the help of items we can find their values    
})

