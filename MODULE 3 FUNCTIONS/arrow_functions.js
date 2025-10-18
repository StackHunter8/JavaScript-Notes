//arrow functions are used for cleaning or ececuting one line operations
// arrow functions are also called as lambda functions
let f = ()=>{
    console.log("hello im smokky");
    
}
f();

//arrow function with parameters

let fun = (num)=>num*num;
let mul = fun(10);
console.log(mul);
// ✅ Note: If the function has a single expression, you can omit {} and return.



// 🧩  When to Use Arrow Functions

// ✅ Use when:

// You need short, clean syntax.

// You don’t need this or arguments.

// In callbacks, like map, filter, forEach, event handlers.

// ❌ Avoid when:

// You need your own this.

// You’re writing object methods or constructors.