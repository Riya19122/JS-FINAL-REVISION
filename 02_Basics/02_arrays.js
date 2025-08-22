const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// More Methods of Arrays
// 1. marvel_heros.push(dc_heros)  // it treats an another array as elemnt to the first array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// 2. concat method => it adds both the array
// console.log(marvel_heros.concat(dc_heros))

// 3. Spread method  => it also works as concat
// const all_heros = [...marvel_heros , ...dc_heros]   // ... it behaves like each element of an array
// console.log(all_heros);

// 4. flat(infinity) => it converts all the subarrays under array into 1 array
// const another_array = [1,2,3,[4,5,6],7,8,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// 5. isArray() => it ask is this the array or not
// console.log(Array.isArray("riya"));

// 6. From() => it converts into array
// console.log(Array.from("riya"));
// console.log(Array.from({name:"riya"}));  //it gives empty array

// 7. of() => we can use of inplace of from
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));







