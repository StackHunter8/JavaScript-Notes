// Problem 
//  - before template literals the strings were concated as follows

 let name = "Parnika"
 let age = 22

//  console.log("hello all I am  " + names + " my age is " + age);
 

//  in above it is observed that it compliactes the readability of the line so to avoid this template literals were introducted.

// Template Literals.

// It use backticks ` instead of quotes.

console.log(`hello all i am ${name} and my age is ${age}`);

// ${}
// / This allows embedding variables inside strings.


// before template literals we need to write /n to shift to next line

console.log("Hello\nHow are you?");

// bt after template literals it became very easy

console.log(`heeloo
    
    beautiful people`);
