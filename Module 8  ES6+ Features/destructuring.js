
// Problem
let user = {
    name : "Parnika",
    age : 22,
    city : "Satara"
}

// let name = user.name;
// let age = user.age;
// let city = user.city;

// console.log(name + age + city);

// in above code the repeatitive task is performed to remove each element outside the Object.

// this repeattion issue is solved by the destructuring concept

// destructuring of Object
// here JavaScript automatically extracts properties.

let {name,age,city} = user;

console.log(name + age + city);

// Array Destructuring

let arr = [10,20,30]

let [a,b,c] = arr;
console.log(a+b+c);



