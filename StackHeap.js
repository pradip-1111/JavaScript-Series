// in primitive  data types all use stack memory allocation

//  in non primitive data types all uses heap memory allocation

// stack
let myname ="pradip"
let anothername = myname ;
anothername = "ranjit"

console.log(myname)
console.log(anothername)



// we check that at first we ddeclare the usergoogle.com email but we declare the another value and when in change in the new one the older one also get change  

// in heap we can pass the reference the original one but in stack we pass the copyone
let user1 = {
    email:"usergoogle.com",
    phone:123456
}

let user2 = user1;
user2.email="pradip.com"

console.log(user1.email)
console.log(user2.email)
