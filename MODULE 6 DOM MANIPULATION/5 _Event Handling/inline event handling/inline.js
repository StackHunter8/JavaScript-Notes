let count = 0;
let changeCount = document.getElementById("count");

function increment() {
  count = count + 1;
  changeCount.textContent = count;
}

function decrement() {
  if (count != 0) {
    count = count - 1;
    changeCount.textContent = count;
  }
}


// you can write the function in the script tag or in the separate 
// external js file just make sure you have build a proper connection with the file