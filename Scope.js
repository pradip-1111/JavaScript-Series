
if (true){
    let a= 10;
    const b=20
    var c =40
    
}
// console.log(a) //  we cannot access the a bcz within the block we can access it only inside the block only we can access
// console.log(b) // same as const 

// console.log(c) // this will print bcz it act as a global so we will not use the var keywords  


function one(){
    const username = "pradip"
    function two(){
       const website  = "pradip.np"
       console.log(username) 
    }
    // console.log(website)  // this bcz inside the two function we declare the website and it act as a block so within the block only we can access 
    two() // this will print username bcz one is global for two so we can access it but two is block only
}
one()

if(true){
    const user = "pradip"
    if(user==="pradip"){
        const web = "channel"
        console.log(user+" "+web)
    }
    // console.log(web) // this wont be print bczit was declare in block only 
}
// console.log(user) // this wont be print bczit was declare in block only 

console.log(one(6)) // but in case of function we can call the function before also after also
function one(num){
    return num+1
}



// console.log(two(3)) // this will throw error bcz we have hold the function in another varible we cannot use it before function
const two = function (num1){
    return num1+2
}
