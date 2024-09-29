function sayname(){
    console.log("p")
    console.log("r")
    console.log("a")
    console.log("d")
    console.log("i")
    console.log("p")
}
// sayname()

// function addnum(n1,n2){
//     console.log(n1+n2)
// }
// let result = addnum(4,9)
// console.log("result",result)
// in functon when we store the values then it doesnot store directly like above example then we should use return keyword

// after return when we try to console anything then we cannot 
// arguments with parameters
function addnum(n1,n2){
    return n1+n2
}
let result = addnum(4,9)
// console.log("result",result)

function usedetail(user){
    return `${user} is very good boy`
}
// console.log(usedetail("ramji")) 
// console.log(usedetail()) // if user name not pass than it gives undefined 

function usedetail(user = 'pradip'){
    return `${user} is very good boy`
}
// console.log(usedetail("ramji"))  //overrides happens
// console.log(usedetail()) // if we dont pass here but in the paramenters we have already pass then it wont say udefined

function AddToCart(...num1){ // ... is rest helps to print all then argument when we pass only one parameter
    return num1
}
// console.log(AddToCart(122,323,434,9090,2324,2000))




//how to use object in function
const myobj= {
    name:"pradip sah sonar",
    location:"india"
}
function HandleObject(anyobject){
    console.log(`Username is ${anyobject.name} and location is ${anyobject.location}`)
}
// HandleObject(myobj)
// we can also create the object also
HandleObject({
    name:"ranjit",
    location:"nepal",
    age:20
})

// when array is given to pass 
let myArr =[200,445,4304920,2323,39487240]
function arr(anyarr){
    return anyarr[2]
} 
console.log(arr(myArr))
console.log(arr([200,445,4304920,2323,39487240]))