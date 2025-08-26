// from here , We Studied Array Specific Loops
// 4. For-Of Loop
const myArr = [1,2,3,4,5,6]
for (const num of myArr) {
    // console.log(num);  
}

const greeting = "Hello-World"
for (const greet of greeting) {
    // console.log(greet);
}

// Maps => it is key:value pair in which duplicates it not present
const map = new Map()

// map.set(key , value) => is used to add the property
map.set('In' , "India")
map.set('USA' , "United State of America")
map.set('Fr' , "France")

// console.log(map);

// now here we apply for of loop on "map"
for (const key of map) {       
    // console.log(key);       // here it prints key: value pair in array
}

for (const [key,value] of map) {
    // console.log(key,':', value);    // here it prints only key and value pair without an array format
}

// Now apply for-of loop on objects
const obj1 = {
    'user':"riya",
    'age':21
}
// here we see objects are not iterable from for-of loop , so we have another method to iterate the objects
for (const element of obj1) {
    console.log(element);
}
