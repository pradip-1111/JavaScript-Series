// Immadetatily Invoked Fuction Expresion

function chai(){
    // named IIFE
    console.log(`Data base connected`)
}
chai();
//  We can simply use IIFE like fist () use to write the function and second () use to write the fuction call
// why we use IIFE becz what ever the declearation in the global and to escape from that pollution we use IIFE  and to call the function fast 
//  after finishing one IIFE we should stop the function call by semicolon ;

(function user(){
    console.log(`using Immadetatily Invoked Fuction Expresion`)
})();


(function user(name){
    console.log(`how are you ${name}`)
})("pradip");


( () =>{
    console.log(`sab thik hai`)
})()


