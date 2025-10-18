// JSON javasacipt object Notation

// - JSON is a text-based format for storing and exchanging data — looks like a JavaScript object, but it’s actually a string.

// Used for:

// API communication

// Storing configuration files

// Sending data between frontend & backend

// Example 
 let user = {
    username : "Pari",
    age : 22
 }

 console.log("js object");
 console.log(user);
 
 
// convretying js object to json object that is string
 let jsondata = JSON.stringify(user)
 console.log("json obj");
 console.log(jsondata);

 // converting json object to normal js object

 let obj = JSON.parse(jsondata);
 console.log("json convertedd to obj");
 console.log(obj);
 
 
 
 