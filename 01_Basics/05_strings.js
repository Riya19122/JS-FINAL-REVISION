const name = "Riya"
const repoCount = 50

// console.log(name + repoCount + " value ")   // it was old method to write it we will not use this 

// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); // we use backticks bcoz it becomes more readable and we use placeholder here to write the variables

// modern way to define a string 
const gameName = new String('riya-jain')

// key access
// console.log(gameName[0]);   
// console.log(gameName[1]);   
// console.log(gameName[2]);   
// console.log(gameName[3]);   
// console.log(gameName[4]);  

// some methods access
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));   // to find the place of character
console.log(gameName.indexOf('r'));  // to find the index of character 

const newSubstring = gameName.substring(2,5)   // start with first number and end with end number-1 ( ex. 5 is the end number so the substring ends with index 4)
console.log(newSubstring);

const anotherString = gameName.slice(2,5)  // slice() => it also converts in the substring 
console.log(anotherString);

const newStringOne = "    Riya    "
console.log(newStringOne.trim());  // trim() => it reduces or removes the unusable spaces
console.log(newStringOne);

const url = "https://riya.com/riya%20jain"
console.log(url.replace('%20' , '-'))  // replace() => it replace the existing value with the new value

console.log(url.includes('riya')); // includes() => tells about the presence of keyword in the variable
console.log(url.includes('beautiful'));

console.log(gameName.split('')) // split() => it converts in array on the basis of seperator
console.log(gameName.split('-')) 













