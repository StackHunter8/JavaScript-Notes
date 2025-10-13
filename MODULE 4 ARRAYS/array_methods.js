// Various methods of array 

// let colors = ["Red","Yellow","Orange"]
// a. push() → Add item at end

// // code
// colors.push("Pink")
// console.log(colors);

// // b. pop() → Remove item from end

// // code
// colors.pop()
// console.log(colors);

// c. unshift() → Add item at beginning

// code
// colors.unshift("Pink");
// console.log(colors);

// // 🟢 d. shift() → Remove item from beginning
// //code
// colors.shift()
// console.log(colors);


// looping over arrays

//using for of loop
// for(color of colors){
//     console.log(color);
    
// }

//using for loop
// for(let i = 0;i<colors.length;i++){
//         console.log(colors[i]);
        
// }

// using foreach loop

//arrowfunction
// colors.forEach((color)=>{
//     console.log(color);
    
// })
//using regular funcction
// colors.forEach(function fun(color){
//     console.log(color);
    
// })

//Some special methods of array

let num = [1,2,3,4,5,6,7]
//map method

// The map() method in JavaScript is used to transform every element of an array and return a 
// new array with those transformed values.
// It does not change the original array.
// code
// let newnum = num.map((no)=>{
//    return no*2;
    
// })

// console.log(newnum);

//filter method
// The filter() method is used when you want to extract specific elements from an array that satisfy a certain 
// condition — i.e., it filters out unwanted values.
// It creates a new array with only the elements that pass the test (the condition you define in a callback function).

// let evennum=num.filter((no)=>no%2==0);
// console.log(evennum);

//reduce
// reduce() is used to reduce (or combine) all elements of an array into a single output value.
// That output could be:

// a sum 🧮

// a product

// an object

// even a new array
let reduce=num.reduce((acc,curr)=>acc+curr,0)
console.log(reduce);
