// singleton
//object
// Object.create  this is the constructor which create singleton
// note in obj there are in the key pair values

const mysymbol = Symbol("key1")

const user = {
    name : "ranjit",
    "nickname":"pradip",
    [mysymbol]:"ram ji", // this is the way to define the symbol first we need to define outside the obj the and we should use [ ] to write in the obj and to print also
    age:20,
    email:"dfhskjdf232W@gmail.com",
    isLoggedIn:false,
    lastLogin:["monday","sat","sun"]
}
// console.log(user.name)
// console.log(user.lastLogin[0])
// console.log(user.nickname)
// console.log(typeof user[mysymbol])

user.email = "pradip123@gmail.com" // this is the way we can change the values in the object
// console.log(user.email)
// Object.freeze(user) // when the once object is freeze then we cannot change the values

user.email = "ranjit123@gmail.com"
// console.log(user.email)
// console.log(user)

user.greeting = function(){
    console.log("hello i am pradip ");
}
// console.log(user.greeting())


user.greeting2 = function(){
    console.log(`hello i am pradip ,${this.age}`);
}
// console.log(user.greeting2())


// const tinderuser =  new Object() this is a singleton object 
const tinderuser = {} // this is non singleton object 
tinderuser.id = "123"
tinderuser.name = "pradip"
tinderuser.location = "india"
// console.log(tinderuser)

const regularuser = {
    email :"sarrafpradeepgmail.com",
    username :{
        fullname:{
            firstname:"pradip",
            lastname:"sonar"
        }
    }
}

// console.log(regularuser.username.fullname) 
// if there is nesterd object then we can print all the nested using .first we should use main object then which object we need to print

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
// console.log(obj1,obj2)
const obj3 = Object.assign(obj1,obj2)
// console.log(obj3) // this assign helps to merge all the all the object in one object



// when the object are in the arrays form
const user2 = [
    {
        id:1,
        name:"pradip",
    },
    {
        id:1,
        name:"pradip",
    },
    {
        id:1,
        name:"pradip",
    }
]

user2[1].name
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(tinderuser.hasOwnProperty('location')) // this property helps to check that it has that keys or not 