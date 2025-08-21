// **************************************  NUMBERS  *****************************************************
// const score = 400
// console.log(score);


// const balance = new Number(100)
// console.log(balance);

// // some methods access
// console.log(balance.toString().length);
// console.log(typeof balance);

// console.log(balance.toFixed(3))  // toFixed() => it give the zeroes after decimal

// const otherNumber = 123.8988
// console.log(otherNumber.toPrecision(5))  // toPrecision() => it converts the roundoff digit 

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());  // toLocalString() => it give (,) in  btw zeroes



// *************************************************  MATHS  *************************************************

// console.log(Math)  // inbuild properties
// console.log(Math.abs(-4));   // abs => means absolute value , it converts negative to positive
// console.log(Math.round(4.2)); // round => it gives the roundoff value if it is less then .5 then it will give lower value
// console.log(Math.round(4.6));  // round => it gives the roundoff value if it is greater then .5 then it will give greater value
// console.log(Math.ceil(4.2));   // ceil => it give the top value 
// console.log(Math.floor(4.6));  // floor => it give the lower value

// console.log(Math.min(4,3,5,6,7,10));  // min => it tells about the minimum value
// console.log(Math.max(4,3,5,6,7,10));  // max => it tells about the maximum value

// console.log(Math.random());  // random => it gives the random value btw 0 to 1

// console.log(Math.floor(Math.random()* 10) + 1)  // now random value will multiply by 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)








