const coding = ["js","py","java","ruby"]

// const values = coding.forEach( (item) =>{
//     console.log(item)
//     return item;
// })
// console.log(values)
// foreach loop that doesnot return anything


//this is how we can run on each item
const num = [1,2,3,4,5,6,7]
const mynum  = num.filter( (num)=> {
    return num>4
})
// console.log(mynum)


const book = [{title:"bookone",name:"science",year:2000,price:200},{title:"booktwo",name:"maths",year:2003,price:300},{title:"bookthree",name:"computer",year:2004,price:400},{title:"bookfour",name:"nepali",year:2008,price:3200},{title:"bookfive",name:"hindi",year:2007,price:500}];

const user = book.filter((bk) => bk.year===2007)
// console.log(user)


//map 
const number = [1,2,3,4,5,6,7];

const item = number.map( (number) =>{
    return number+10
})
// console.log(item)

// chaining
const number2 = [1,2,3,4,5,6,7,8]
const value = number2
                    .map((number2) => number2*5)
                    .map((number2) => number2**2)
                    .filter((number2) => number2>40)
// console.log(value)


// reduce

const num2 = [1,2,3]
const result = num2.reduce((function(acc,current){
    // console.log(`acc :${acc} and current: ${current}`)
    
    return acc+current;
}),0)
// console.log(result)

const shoppingcart = [
    {
        course:"js course",
        price:2999
    },
    {
        course:"python course",
        price:1999
    },
    {
        course:"java course",
        price:3999
    }
]
const sum = shoppingcart.reduce((function(acc,item){
    return acc + item.price
}),0)

console.log(sum)