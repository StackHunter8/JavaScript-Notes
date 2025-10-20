// why call back came?
// consider below example



// code without callback
// function pizza() {
//   console.log("order received");

//   setTimeout(() => {
//     console.log("it is baking");
//   }, 2000);
// }

// pizza();
// console.log("finaally i aate pizza");

// in this example before the preparation of pizza it got printed that i ate pizza how is that possible
//  if the pizza was not actually baked so for this purpose
// caallbacks helps us to  control over timing and order of execution —
// without blocking the rest of the program.

// code with Callback
function pizza(fun) {
  console.log("PIZZA ORDER RECEIVED");
  setTimeout(() => {
    console.log("pizza is getting prepared");
    fun();
  }, 2000);

}

function eatpizza() {
  console.log("Finaally i ate pizza");
}
pizza(eatpizza);

// thus the callback solves the previous problem and makes the code wait till the
//  actuall delay causing function exeecuteds properly.


// CallBack hell

// in previous code of callback what was happening there was a single callback function so we were able to easily readd te code and predict its output
//b again imagine the pizza story and imagine first u ordered pizza then a coldddrink then you pay the bill and finaly checkout..so the sentence itself looks complicated and so thus the code looks..
// and  it becomes hard to read and guess the output oof the ccode.so this situation is called callback helll ..that means nnested callbacks.
// the code for it will look like this..
makePizza(() => {
  orderDrink(() => {
    eatPizza(() => {
      payBill(() => {
        postPic(() => {
          console.log("Done with everything!");
        });
      });
    });
  });
});

// What’s happening here:
// makePizza starts the pizza-making process.
// Once the pizza is ready, it calls the function inside its parentheses (the callback).
// orderDrink is called only after the pizza is ready.
// This ensures that the drink is ordered in the correct sequence.
// eatPizza runs after the drink is ready, and so on.
// Finally, postPic runs and logs "Done with everything!".

// to overcome callback hell promises were created.