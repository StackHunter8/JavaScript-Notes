//named export
export function sum(a,b){
    return a+b
}
//named export
export function substract(a,b){
    return a-b;
}


// default export 
export default function greet(){
    console.log("Hello Maths");
    
}

// each module can only coonntain 1 default export and multiple named exports
// You can rename imports:

import greetFunction, { sum as addition } from "./math.js";

greetFunction();
console.log(addition(2,3));
