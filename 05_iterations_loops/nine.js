// 3. "Reduce" => here (accumulator , currentvalue) we have to give them
const myNum = [1,2,3,4]
const initialValue = 0
// const numTotal = myNum.reduce(function(acc , currVal) {
//     console.log(`acc is : ${acc} and currval is ${currVal}`);
//     return acc + currVal
// },initialValue) 

// by arrow function 
const numTotal = myNum.reduce((acc,currVal)=> acc+currVal , initialValue)
// console.log(numTotal);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "mobile dev Course",
        price : 5999
    },
    {
        itemName : "datascience Course",
        price : 12999
    }
]

const shoppingTotal = shoppingCart.reduce( (acc , item)=> (acc + item.price) , 0)
console.log(shoppingTotal);

