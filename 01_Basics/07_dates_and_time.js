// **************************************************  DATES  ************************************************

// let myDate = new Date()
// console.log(myDate);

// console.log(typeof myDate);   // Date is an "Object"

// Methods to access dates 
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2025 , 3 , 22)   // bcoz in js month always starts from 0
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

// let mydate2 = new Date(2025 , 3 , 24 , 4 , 5 ) 
// console.log(mydate2);
// console.log(mydate2.toLocaleString());

// let myDate3 = new Date("2025-01-12")    // here month starts with 1
// let myDate3 = new Date("01-12-2023")
// console.log(myDate3);
// console.log(myDate3.toLocaleString());

// ***************************************************  TIMES  **************************************************

// it is used for the poles to decide who the winner
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);    // comes in miliseconds

// console.log(myDate3.getTime());   //now we can compare both the times 

// console.log(Math.floor(Date.now()/1000));   //for convert in seconds

let newDate = new Date()
// console.log(newDate);

// methods to access the days , months etc
// console.log(newDate.getDay());
// console.log(newDate.getDate());


// it is most important method to change the style of date , time , week etc
newDate.toLocaleString('default' ,{
     weekday:"long"
})

console.log(newDate.toLocaleString('default' ,{
     weekday:"long"
}));




















