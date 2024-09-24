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
console.log(user.greeting())


user.greeting2 = function(){
    console.log(`hello i am pradip ,${this.age}`);
}
console.log(user.greeting2())