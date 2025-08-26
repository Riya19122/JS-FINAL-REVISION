// 2. "Map" => is used to do some calculation on each element
const myNum = [1,2,3,4,5,6,7,8,9,10]
// let newNum = myNum.map( (num) => {
//     return num + 10
// })

// 3. Chaining
const newNum = myNum
          .map( (num) => num*10)
          .map( (num) => num + 1)
          .filter( (num) => num >= 40)
console.log(newNum)

