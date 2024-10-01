const user = {
    username: "pradip",
    price: 93728,

    welcomemessage: function () {
        console.log(`${this.username}, welcome to website `) // this helps to print current values
        console.log(this)
    }
}

// user.welcomemessage();
// user.username = "ranjit"
// user.welcomemessage();

// console.log(this) // this gives empty bracket but the same thing we run in the googlr then we will get windows because in the previous time js only run on the browser but nowdays we have engine stand alone so we can run it  

// note when we run this outside the function then empty output but inside it gives many values like globals values

// function chai (){
//     let name="ram ji"
//     console.log(this.name) // undefined gives 
//     // importaant note we mainly use the this keyword in the object not in the function
    
// }
// chai()

const chai= ()=>{
    let name="ram ji"
    console.log(this) // undefined
}
// chai()

// const addtwo = (a,b) => {
//     return a+b
// }
// console.log(addtwo(2,3))


// const addtwo = (a,b) =>  a+b
// console.log(addtwo(2,3)) this is also correct if we use curly bracket then we need to use return keyword if not then not


const addtwo = (a,b) => ({username1:"pradip"})
console.log(addtwo(2,3))