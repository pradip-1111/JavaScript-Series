//  in js we can make array of different data types  and resizable also  or nested array also will be there
//  shallow copy it means we can change the original value by the reference
//  deep copy it means we can not change it 

let arr = [1,2,3,4,5,6,7]
// console.log(arr[0])
//  array methods
// arr.push(20)
// arr.pop() // it removes the last element from array
// console.log(arr)

// arr.unshift(100) // to add element in the first
// arr.shift()  // it removes the first element from array
// console.log(arr)

const myarr = arr.join() // it converts array into string 
// console.log(arr)
// console.log(myarr)
// console.log(typeof myarr)

let n1 = arr.slice(0,3)
// console.log(n1)

let n2 = arr.splice(1,5) // it means it print the element from 1 to 5 include all 1 and 5 element also
// after splice  when we print the original array then it gets changes and the remaining elements get printed
// for example arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(1,6)
//  new arr will be [1,8,9] the original array get manupilated   but not in the slice this is the difference
// console.log(n2)
// console.log(arr)

const heros1 = [10,20,30,40,50]
const heros2 =[60,70,80]
// heros1.push(heros2)
// when we push a array in the array then that array will be taken as asingle element like heros2 will be a single element in heros1
// console.log(heros1)

// but concate will add all the elements of the both array in a single array
const all = heros1.concat(heros2)
// console.log(all)

const newarr = [12,23,[34,10,99,[20,90,100,[85,345,324,908]]]]
const realarr = newarr.flat(4) // this flat will all the nested array in a single aary
// console.log(realarr)

const formarr = (Array.from("Pradip sah saonar")) // this will convert all the string into array
// console.log(formarr)


const objarr = (Array.from({name:"ranjit"}))
// console.log(objarr) // it will give empty array bcz we should mention that we are converting key as a array or values as a array 

let a = 2300
let b = 1300
let c = 4300
console.log(Array.of(a,b,c))  // this will make a array 