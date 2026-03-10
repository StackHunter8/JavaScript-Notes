// there r two tpes of dataa types in js primitive(stored by value) and non-primitive(stored by reference) datatypes

// primitive datatypes
// -->String, Number, Boolean, Undefined, Null, Symbol, BigInt

//non-primitive datatypes
// -->Object, Array, Function

// js is a dynaamicaly typed langugae so it takes the data type according to value stored in it

//examples of primitive data types
// let bool = 10
// console.log(bool);
// console.log(typeof(bool));

// let int = true;
// console.log(typeof(int));

// let sym = Symbol(10);
// console.log(sym);
// console.log(typeof(sym));

// let col = "Pari"
// console.log(col);
// console.log(typeof(col));

// let a;
// console.log(a);
// console.log(typeof(a));

// var v = null;
// console.log(v);
// console.log(typeof(v));

// let val = 10
// let wal = "10"
// console.log(val==wal);//it deals with the vaal and not its return type or  data type
// console.log(val===wal);//it deals with value as wwell as its datatype



// diiference between null and undefined

// undefined 
// -it occur when u just declare the variable and didnot asigned the value to it
// js engine assigned undefined val to that variable 
//-dtype undefined asto

// null 
//- it is asigned by the developer..
//- mostly used for resetting any value. 
// - dtype object astto


// let a;
// console.log(a); // undefined (declared but not assigned)

// let b = null;
// console.log(b); // null (intentionally empty)



// examples of non-primitive datatype
//object
// in object the comparision is done with respect to the ReferenceError.
// thats why the value of user got changed when we made chaanges in its replication obj user2
// let user = {
//     name : "Pari",
//     age : 12,
// }
// console.log(user);
// console.log(typeof(user));

// let user2 = user
// user2.name = "Sankey";
// console.log(user);
// console.log(user2);

// console.log(user===user2);

//array
// let userdata = [10,33,44,55,66,77]
// console.log(userdata);
// console.log(typeof(userdata));

// // array is internally treated as object and as a result of this we get its datatype as object in the output

// //function 
// function hamdlename(a , b){
//     return  a + b;
// }
// console.log(

//     hamdlename(10,12)
// );

// practice set
// console.log(myVar);
// var myVar = 50;

// console.log(num);
// let num = 5;

// let a = 10;
// {
//   var a = 20;
//   console.log(a);
// }
// console.log(a);

// block scope
// {
//   let name = "Parnika";
//   const age = 21;
//   console.log(name, age); // ✅ Works inside block
// }

// console.log(name); // ❌ Error: name is not defined

// //function scope
// function showMessage() {
//   var message = "Hello from function scope!";
//   console.log(message); // ✅ Works inside
// }

// showMessage();
// console.log(message); 



















