// rest and spread operators uses same symbols i.e ...

// 1.Spread operator 

// Purpose

// Spread expands elements of an array or object.

// let num = [10,20,30]
// console.log(...num);//it exapands each element on individual basis

// // before ES6 
// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(500)
// console.log(arr1);
// console.log(arr2);



// both arr1 and arr2 points to same memory location and change made in one gets reflected in another one too

// but when spread operator is used it simply allocates a new memory and thus the changes does not gets reflecte to the original one 

// let aar = [60,80,90]
// let aar2 = [...aar,80]
// console.log(aar);
// console.log(aar2);

//Merging Arrays

// before ES6

// let arr1 = [10,20];
// let arr2 =  [30,40];

// let arr = arr1.concat(arr2)
// console.log(arr);


// by using spread operator

// let arr = [...arr1,...arr2]
// console.log(arr);

// Spread with Objects
// Spread copies properties of an object.
// let user = {
//     name : "Parnika",
//     age : 22
// }

// let updateduser = {

//     ...user,
//     city: "Kolhapur"
// }

// console.log(user);
// console.log(updateduser);


// 2.Rest Operator (...)
// Rest does the opposite.

// It collects multiple values into one variable.

function sum(a,b,c){
    console.log(a+b+c);
    

}
sum(10,20,80)

// with rest operator
function sumall(...nums){
    console.log(nums);
    
}
sumall(10,20,30,40)
// here the rest operator stores all the elements under one array that means it concates elements to get retrived as a single val 


// Rest with Destructuring

// let nums =[10,20,30,0,440,50];

// let [a,b,...rest] = nums;
// console.log(a);
// console.log(b);
// console.log(...rest);
// //Explaination 
// a = 10
// b = 20
// rest = remaining elements


//Rest with Objects
let users = {
    name:"Parnika",
    age:22,
    city:"Kolhapur"
} 

let {name,...rest} = users;
console.log(name);
// console.log(rest);//here all the other entties got separated and grouped as an individual separate obj



// Spread vs Rest (Important Difference)


// Spread	                         Rest
// Expands values	          Collects values
// Used while copying	      Used while receiving
// Right side mostly	      Left side mostly



