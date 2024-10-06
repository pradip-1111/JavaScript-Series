
// this a kind of loop for the object wheere we donot need to decleare or do the increment or decrement
const arr = [1,2,3,4,5,6,7]
for (const element of arr) {
    // console.log(element);    
}

const greeting = "my name is pradip"
for (const j of greeting) {
    // console.log(j);
}


// map holds the unique value if we set the same vaule again it won't give the error but it does print
const map = new Map() 
map.set('india',1223)
map.set('nepal',112)
map.set('srilanka',1902)
map.set('bhutan',1003)
map.set('bhutan',1003)


// for (const key in map) {
//     console.log(map[key])
// } for in loop is not suitable for map


// console.log(map)

// using for of loop in map 
// if want to print the keys or values 
for (const [key] of map) {
    // console.log(key)
}
for (const [key,Values] of map) {
    // console.log([key,':-',Values])
}

const myobj ={
    "pradip":1234,
    "ranjit":89800,
}
// for (const element of myobj) {
//     console.log(element)
// } for the object we cannot use the for of loop

for (const key in myobj) {
    // console.log(`${key}  for object ${myobj[key]}`);
}

const arr2 = [1,2,4,5,6,7]
for (const i in arr2) {
    // console.log(arr2[i])
}

const code=["js","rb","py","java","cpp"]
code.forEach(element => {
    // console.log(element)
});


// we can make the reference of function also
function print(item){
    // console.log(item);
}
code.forEach(print)




// when the array of object is given then we can iterate buy using foreach loop
const codinglang = [
    {
        langname:"js",
        id:1234
    },
    {
        langname:"python",
        id:1009
    },
    {
        langname:"java",
        id:11111
    }
]

codinglang.forEach(item=>{
    console.log(item.langname)
})

