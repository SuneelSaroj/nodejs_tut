// console.log("first code");

// // run after 2 second
// setTimeout(() => {
//     console.log("second code")
// }, 2000);

// console.log("third code")


// this is the draw back of asynchronous programming language
let a = 10;
let b = 20;

setTimeout(() => {
    b=5; 
}, 1000);

//ans will be 30
console.log(a+b);


// solution 
let waitingdata = new Promise((resolve,reject)=>{
    setTimeout(() => {
        b=5;
        resolve(b);
    }, 1000);
    
})
// then is use for promises
waitingdata.then((data)=>{
    console.log(a+data);
})