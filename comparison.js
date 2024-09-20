// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined>=0)

// primitive datatypes

// 7 types : string , number , boolean , null , symbol , BigInt

// Reference (Non-Primitive)

// Array , Objects  ,funtion 

const id = Symbol('1234')
const anotherid = Symbol('1234')
console.log(id===anotherid)


const heros = ["spiderman","shaktiman","thor"]

let myobj = {
    name:"pradip",
    age:21,
    home:"nepal"
}
console.log(myobj)
console.log(heros)


// function
const muyfunc = function(){
    console.log("your the best")
}