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
console.log(n1)

let n2 = arr.splice(1,5) // it means it print the element from 1 to 5 include all 1 and 5 element also
// after splice  when we print the original array then it gets changes and the remaining elements get printed
// for example arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(1,6)
//  new arr will be [1,8,9] the original array get manupilated   but not in the slice this is the difference
console.log(n2)
console.log(arr)