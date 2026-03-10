// // before ES6 all code was wriiten inside a single file and this caused a mess and increased code based size . 
// Before ES6 everything was in one big file.

// Problems:

// ❌ messy
// ❌ hard to maintain
// ❌ variable conflicts

import greet,{ sum,substract} from "./math.js";

// Correct way to import them

// When importing:

// Default export → NO curly braces
// Named exports → WITH curly braces

console.log(sum(10,29));
console.log(substract(20,10));
greet();

