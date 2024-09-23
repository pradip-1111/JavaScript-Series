const score  = 2030
// console.log(score)  
// we can also use the same method to define the number but sometimes we only need the number so we can use the new method
const balance = new Number(2323)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(3))

const other = 123.76
// console.log(other.toPrecision(5))


// this helps us to put the comma like in lakhs 1,00,000 ,thousands 1,000
const numbers = 100000
// console.log(numbers.toLocaleString('en-IN'))  

// ========================== maths============================
// console.log(Maths)


// console.log(Math.abs(-342))
// console.log(Math.round(3.42))
// console.log(Math.ceil(34.2))
// console.log(Math.floor(34.2))
// console.log(Math.max(34,23,800,1,0))
// console.log(Math.min(34.2,0,-1,4))

console.log(Math.random())
console.log(Math.random()*10+1)
console.log(Math.random()*10+2)


const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)

