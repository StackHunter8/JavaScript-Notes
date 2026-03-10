// Normally when an error occurs, JavaScript stops the program.

let a = 10;
let b = 0;

console.log(a/b);

console.log(x); // x not defined

console.log("Program Ended");

// as a result the reference error gets occured 
//  x is not defined.


// try...catch

// This allows us to catch errors and handle them instead of crashing the program.

// Syntax 
//     try {

//    // risky code

// } catch(error) {

//    // runs if error occurs

// }

// try {

//     console.log(x);

// } catch(error) {

//     console.log("An error occurred");

// }

// Understanding the Error Object

// error object contains

// | Property | Meaning     |
// | -------- | ----------- |
// | name     | error type  |
// | message  | description |


try{
    console.log(x);
    
}catch(error){
    console.log(error.name);
    console.log(error.message);
    
    
}

// finally block

// finally runs no matter what happens.

// Syntax:

// try {

// } catch(error) {

// } finally {

// }

// exact working of these three blocks 
// Imagine ATM withdrawal.
// try → withdraw money
// catch → handle failure
// finally → card returned