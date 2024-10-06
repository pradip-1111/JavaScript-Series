// for loop

let arr = [1,2,3,4,5,6]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element)
}
// console.log(arr)
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5){
        // console.log("5 is the best number")
    }
    // console.log(element)
}

for (let i = 1; i <=10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 1; j <= 10 ; j++) {
        // console.log(i + '*' + j + '=' + i*j );
    }
}

for (let i = 0; i < 20; i++) {
    // if(i==10)
    //     continue;
    // console.log(i);
    if(i==10)
        break;
    console.log(i);
}