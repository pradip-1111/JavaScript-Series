const promiseOne = new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log('completed task ');
        resolve()
     },1000)
})

promiseOne.then(function(){
    console.log("promises is completed")
})

// two==========================
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('task two');
        resolve()
    },1000)
}).then(function(){
    console.log('Resolved connected ')
})

// three=================
const Promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"pradip",age:19})
    },1000)
}).then(function(user){
    console.log(user);

})

// four==========
const promisesfour = new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error  = true
        if(error){
            resolve({name:"ranjit" , password:"ramji1234"})
        }
        else{
            reject("ERROR something went wrong")
        }
    },1000)
})
promisesfour.then((user) => {
    console.log(user);
    return user.name
}).then((user) =>{
    console.log(user);
}).catch(function(error){
    console.log(error)
}).finally(() => console.log('everything is fit and fine'))


// five ===========
const promisefive  = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({company:'Netflix', location: 'Banglore'})
        }
        else{
            reject('Error Ntg is good')
        }
    },1000)
});

async function consume(){
   try{
    const response = await promisefive
    console.log(response);
   }catch(error){
    console.log(error)
   }
}
consume()



// async function alluser() {
//     try{
//         const allresponse = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(allresponse)
//         const data =await allresponse.json()
//         console.log(data);
//     }catch (error){
//         console.log(error)
//     }
// }
// alluser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})