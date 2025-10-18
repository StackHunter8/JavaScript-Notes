// Object
// - an object is nothing but a collection that stores data in key value pair.
// -the object can sstore anydaatatype like array, string,functions,etc
// - here all keys are in string evven though they are not explicitely declared in the double quotes.
// there are three ways of creating objects in js
// 1.Object literal
// 2.const user = new Object({}),
// 3.const uuser = Object.create({})

// 1.Object Literal
//setting /storing data in the object
let users = {
  name: "Parnika",
  age: 22,
  city: "Satara",
  greeetings: () => "Hello Parnika"
};

console.log(users);

// how to retrive data from object lliterals
//there are two ways for retriving the data
// 1.by using dot(object.key)
// ✅ Use when the property name is a valid identifier

// That means:
// It doesn’t have spaces
// It doesn’t start with a number
// It doesn’t use special characters
// It’s known ahead of time (not stored in a variable)

// Example:
// let user = {
//   name: "Parnika",
//   age: 21
// };

// console.log(user.name); // ✅ Works
// console.log(user.age);  // ✅ Works
// 2. by using braces (object["key"])
// ✅ Use when:
// The property name is stored in a variable
// The property name has spaces, numbers, or special characters
// The property name is not known until runtime
// Example 1 — key stored in a variable:
// let key = "age";
// let users1 = { name: "Parnika", age: 21 };

// console.log(users1[key]); // ✅ Works (same as user.age)

// ❌ You can’t do this:

// console.log(user.key); // undefined

// applying dot method on the users object
console.log(users.name);
console.log(users.age);
console.log(users.city);
console.log(users.greeetings());

// applyinhg braces method 
console.log(users["name"]);
console.log(users["age"]);
console.log(users["city"]);
console.log(users["greeetings"]());


// 2. By using new object keyword
// Storing data in the object 
 const person = new Object();
 person.name = "Meowzy";
 person["age"]= 22;
 person.city = "Pune"

 console.log(person);
 // data retrival is same as aabove

//  3.By using Object creatiion method

const player = Object.create({});
player.name = "Virat Kohli";
player.age = 54;
player.designation = "Caaptain";

console.log(player);
//data retrival is same as above


// ,manipulating ddata

users.name = "shital";
console.log(users);

delete person.age;
console.log(person);
player.nickname = "King";
console.log(player);



 



