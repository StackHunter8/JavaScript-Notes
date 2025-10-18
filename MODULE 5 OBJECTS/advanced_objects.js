// this refers to the object that owns the function that’s currently being executed.

let users = {
    name : "Pari",
    greet : function(){
        console.log("HI",this.name);
        
    }
}

users.greet();

// in this code this reffers to the object in which it is used and also
//  the this contains the address of the object and thats why  we can easily access the values

console.log(this);
// outside any object the this refers to the windows object and thats why it returns empty object

let user = {
    name : "Pari",
    greet : ()=>{
        console.log("HI",this.name);
        
    }
}
user.greet();
// in side arrow  function there is this keyword but it refers to the lexical scope that means if the arrow function have any parent over
//  him then the this will refer to that parent andd not the actual function and thats why the arroww functionns are not prefered where 
// this is required for getting particular output


// ⚙️ Special Case: Symbols 🔱

// There’s one exception — Symbol keys.

// Symbols are unique identifiers that are not automatically converted to strings.

let id = Symbol("id");

let userOne = {
  name: "Parnika",
  [id]: 123
};

console.log(userOne); // { name: 'Parnika', [Symbol(id)]: 123 }
console.log(Object.keys(userOne)); // ["name"]
console.log(Object.getOwnPropertySymbols(userOne)); // [ Symbol(id) ]

// If you ever need truly unique keys that can’t be accidentally overwritten,
//  use Symbol() as a key — otherwise, normal string keys are fine.