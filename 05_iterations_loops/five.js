// Object specific loop
// 5. for-in loop   => applicable on objects , arrays but not maps
const myObject = {
    js : "javascript",
    cpp : "C++",
    AL : "artificial intelligence"
}
for (const key in myObject) {
    // console.log(key);               // it prints only keys
    // console.log(`${key} : ${myObject[key]}`)  // it prints the values also  
}

// for-in loop on array
const myArr = ["js","py","rb","java","cpp"]
for (const arr in myArr) {
    // console.log(arr);        // here it give the index(key) 
    console.log(myArr[arr]);   // here it gives the values of array   
}

