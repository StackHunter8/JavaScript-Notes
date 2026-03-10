// Sometimes we want specific error types.

// We can create our own custom error class.

// class AgeError extends Error{

//     constructor(message){
//         super(message);
//         this.name = "AgeError";
//     }
// }

// try {

//     let age = 15;

//     if(age < 18){
//         throw new AgeError("Age must be 18 or above");
//     }

// } catch(error){

//     console.log(error.name);
//     console.log(error.message);

// }


// Why Custom Errors are useful

// Large applications need different error types.

// Example:


// | Error Type      | Meaning       |
// | --------------- | ------------- |
// | ValidationError | wrong input   |
// | NetworkError    | API failure   |
// | AuthError       | login failure |


// This helps debugging.

// Real world example (API error handling)

async function getAllUsers(){
    try{
        // let response = await fetch("https://api.com/users");//error causing line
        let response = await fetch('https://jsonplaceholder.typicode.com/users');//works accurately 
        if(!response.ok){
            throw new Error("Server Error")
        }
    
        let data = await response.json();
        console.log(data);

    }catch(error){
        console.log("Something went wrong " + error);
        
    }finally{
        console.log("Request Completed");
        
    }
    
}

getAllUsers();

// Important Difference

// In Java:

// Exception name = class name

// Example:

// AgeException

// In JavaScript:

// The default name is usually:

// Error

// So we manually set:

// this.name = "AgeError";

// to identify the error type.