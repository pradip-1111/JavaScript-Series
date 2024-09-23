// dates
let mydate = new Date()
// console.log(mydate.toDatString())
// console.log(mydate.toString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(typeof mydate)

let create = new Date(2024,1,10)
// console.log(create.toDateString())

//  note in js the month is started with 0 index 
// 0 jan ,1 feb ,2 march like this but started with the 0 only [in array only] 
// but in string("23-01-23") then it started with 1 only

let mytime = new Date()
// console.log(mytime)
// console.log(create.getTime())
// console.log(Math.floor(Date.now()/1000))
console.log(mytime.getMonth())
console.log(mytime.getDay())