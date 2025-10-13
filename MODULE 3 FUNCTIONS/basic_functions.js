// Functions

// A function is a reusable block of code designed to perform a specific task.
// It takes some input (parameters), processes it, and returns an output.

//normal function
// function greetings(){
//     console.log("Hello Parnika");
    
// }
// greetings();

//function with parameters
// function add(a,b){
//     console.log(a+b);
    
// }
// add(10,20);

//function expressions

// var multiply=function (num){
//     console.log(num*num);
    
// }
// console.log(multiply(20));//here we havent returned anything from this function so it is giving undefined at the end

//default functions

// function greet(name= "Parnika"){
//     console.log("Hello " , name);
    
// }
// greet();
// greet("Kaustubh")
//in this default functions if u dont pass any paraameter while calling the funcction then 
// it takes the defaulyt parameter that u assigned it during the function declaration.and if u pass any args then it takes that as an ardgument 
// and stores it in the paarameter and thus that value is used.

// funnction with return

// function sub(a,b){
//     return a-b;
// }

// console.log(sub(20,10));

// function hoisting
// function hoisting or 
// variable hoisting is nothing but to have the acces of the function or that variable before it is declared
// fun();

// function fun(){
//     console.log("Pari");
    
// }//this works because function hoisting is possible for only regular funtions and not with arrow and function expresssions

// sayhi();
// var sayhi = function(){
//     console.log("pari hii");
    
// }//this does not works due to the reference errors 

const person = {
  name: "Parnika",
  regular: function() {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  }
};

person.regular(); // Regular: Parnika
person.arrow();   // Arrow: undefined

//function scope 

// let x = 10;

// function fun(){
//    let x = 20;
//     console.log("Inner x :",x);
    
// }
// fun();
// console.log("Outer x :",x);

//nested functions

function outer(){
    let varcount = "Pari";
    function inner(){
        console.log(varcount);
        
    }
    inner();
}
outer();



// | Concept              | Example                   | Hoisted? | Uses                        |
// | -------------------- | ------------------------- | -------- | --------------------------- |
// | Function Declaration | `function fn(){}`         | ✅        | Reusable logic              |
// | Function Expression  | `const fn = function(){}` | ❌        | Anonymous, assigned to vars |
// | Arrow Function       | `const fn = () => {}`     | ❌        | Short, no `this`            |
// | Default Parameter    | `function fn(x=1){}`      | ✅        | Avoid undefined values      |
// | Return               | `return x+y;`             | ✅        | Send data out of function   |
