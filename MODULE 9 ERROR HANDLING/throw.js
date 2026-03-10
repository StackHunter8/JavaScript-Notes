// whenever we want to throgh new exceptions or errors on our own we use throw keyword. 
// Sometimes you want to create your own error.
// let age = 15;

// if(age < 18){
//     throw new Error("You must be 18+");
// }

// This is called throwing an error.

// Using throw with try...catch

try{
    let age = 15;
    if(age<18){
        throw new Error("Not Elligible")
    }
    console.log("Access Granted");
    
}catch(Error){
    console.log(Error.message);
    
}