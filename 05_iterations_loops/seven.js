// forEach remaining concept
// const coding = ["js","cpp","rb","py","java"]

// forEach do not return anyvalue it gives undefined when we try to return
// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(value);


// Some methods
const myNums = [1,2,3,4,5,6,7,8,9,10]

// 1. "filter" is used as same as forEach but here we can directly do the things 
// const newNums = myNums.filter( (num)=> num > 5)
// console.log(newNums);

// just like if we want to do the same thing with forEach then 
const number = []

myNums.forEach( (num) => {
    if(num > 5){
        number.push(num)
    }
})
// console.log(number)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter( (book) => book.genre === 'History')
const userBooks = books.filter( (book) => book.publish >= 2000 && book.genre === "Science")
console.log(userBooks);





