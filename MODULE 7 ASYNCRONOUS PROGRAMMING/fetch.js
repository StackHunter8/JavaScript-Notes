// Problems before fetch was introduced

// imagine my frontend wants a data from the database where the data is actually stored then we cant request the data directly for that we mut send a request to the database throgh a backend server.
// -this request to the backend server is sent with the help of fetch function that returns Promise.

// before fetch  XMLHttpRequest() was used.
// it was very complicatted to read and the callbackes were heavy too.

// What is Fetch API?

// Fetch API is a JavaScript function used to send HTTP requests to servers and receive responses.

// Simple definition:

// Fetch API allows JavaScript to communicate with servers and retrieve data.

// syntax

//     fetch(url)

// Fetch using .then() (old way)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>response.json())
//     .then((data)=>console.log(data))

// Fetch using async / await (modern way)

// async function getData(){
//    let response = await  fetch('https://jsonplaceholder.typicode.com/users')//here we get the status code only with the response data stream
//     console.log(response)
//    let data = await response.json();//response data gets converted into the json object
//    console.log(data)

// }
// getData();

// Checking if request failed

// async function getData(){
//    let response = await  fetch('https://jsonplaceholder.typicode.com/users')//here we get the status code only with the response data stream
//     if(!response.ok){
//         throw new Error("Request failed")
//     }
//    let data = await response.json();//response data gets converted into the json object
//    console.log(data)

// }
// getData();

// Fetch with error handling

// async function getData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data)
//   } catch (error) {
//     console.log("Error", error);
//   }
// }
// getData();

// Fetch POST request (sending data)
//         fetch method also helps to send the data.



fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        title:"Hello PP",
        body:"welcome",
        userId:1
    })
})
.then(res =>res.json())
.then(data =>console.log(data))
