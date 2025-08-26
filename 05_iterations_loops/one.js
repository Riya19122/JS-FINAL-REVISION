// LOOPS IN JS
// 1. For loop 
for (let i = 0; i < 10; i++) {
    const element = i
    if(element == 5){
        // console.log("5 is the best number"); 
    }
    // console.log(element)
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop : ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop : ${j} and outer loop value : ${i}`)
    }
}

const myArray = ["riya" , "mahi" , "adhish" , "rashi"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// Break & Continue Keyword
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        // console.log(`detected 5`);
        break;                           // it breaks whole after that element and own itself
    }
    // console.log(`value of i is : ${i}`);  
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        continue;                       // only skip that element
    }
    console.log(`value of i is : ${i}`);  
}