let name ="pradip dai"
let address="nepal"
let phone = "348759387"
//  this one method
// console.log(`hello my ${name} and my number is ${phone} and i am from ${address}`)

//  we can also use + sign also 
// console.log("hello " + name +" phone number is " +phone+ " and address is "+address)

const gamename =new String("pradip2ranjit2dai")
console.log(gamename[0])
console.log(gamename.substring(0,3))
console.log(gamename.slice(-5,3))
console.log(gamename.trim())

const url = "https://pradip%20youtubechannel"
console.log(url.replace('%20','--'))

console.log(gamename.split(2))  // on the basis of the 2 in the string we split the String