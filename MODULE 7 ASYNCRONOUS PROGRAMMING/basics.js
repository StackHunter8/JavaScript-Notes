
// before asyncronous programmiming there was syncronoyus programming and javascript is a single threaded language 
// that means it performs one work at a Time.
//o if one task takes time (like fetching data from the internet),
// everything else must wait.
// That’s bad for the user. 😞

// console.log("Cooking started...");
// waitFor5Seconds(); // a slow function
// console.log("Cooking done!");

// consider the above example .the function waitFor5Seconds() takes more time to execute and till its full execution 
// the js code gets freezed that means you cant click on any button nor perform any taasks associated with js.
// this issue was solved by the asyncronous programming.

// internal working of asyncronous programming
// 1.JS executes code line by line.

// 2. When it finds something asynchronous (like setTimeout), it delegates it to the browser.

// 3. Meanwhile, JS continues with other code.

// 4. When the async task finishes, it puts the callback in a queue.

// 5. The event loop pushes it back into JS when it’s ready.


// syncronous prograamming example

console.log("Start");
for(let i = 0;i<1000;i++){
    console.log(i);
    
}

console.log("after for loop i" );

// example of asyncronous programming

console.log("start");
setTimeout(()=>{
    console.log("In timeout");
    
},2000);

console.log("end");

//in this first the start got print then end and after 2 sec the in timeout got print .
// now thats whaat make asynchronnous programming different from syncronous programming .
//  it also let us to make a user experience better 



