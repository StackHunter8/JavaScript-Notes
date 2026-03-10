// Async Await
    // -To make asynchronous code look like normal synchronous code,
   // JavaScript introduced async / await.




//  - It is an alternate solution just like promises to overcome th callbackhell
//  - In promises we use the .then keyword to indiicate the nesxt task to get done after finishing the current one. But in async await no extra keywords other than async and await is used.
//  -in this we have to simply give the ssequence of the tasks along with await keyword and declare those tasks with async keyword 

// // Basic Syntax 
//     async function myFunction() {
//     let result = await someAsyncTask();
// }

// here async keyword makes the function asynchronous and await makes the function wait untill the promise gets finished.

//  function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data received")

//         },2000);
//     });
    
// }

// async function showData(){
//     console.log("Start");
//     let data = await getData();// here the code gets stop untill the execcution of the getData gets completed.
//     console.log(data);
//     console.log("End");

// }

// showData();



// realtime example

async function getUsers(){

    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();

    console.log(users);
}

getUsers();



// async await is widely used cause it enhances the readability of the Code.

// in simple words  the async await commands node through js as follows 

// Hey JavaScript,
// pause THIS function
// until the task finishes
// then continue.