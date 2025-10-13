console.log(a);
var a=10
  //for var no tdz is applicable ...tdz is temporal dead zone
console.log(b);
let b = 10

console.log(c);
const c = 12


// for let and const tdz is applicable because the variable does not 
// get initialized immediately to undefined and thats why the reference error occurs


