let updateCount = document.getElementById("count");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let count = 0;

increment.addEventListener("click",()=>{
        count ++;
        updateCount.textContent = count;
});

decrement.addEventListener("click",()=>{

    if(count!=0){

        count --;
        updateCount.textContent=count;
    }
});




// 🧠 Summary:

// ✅ Most Commonly Used Event Listeners

// click → Button clicks

// input / change → Form inputs

// keydown / keyup → Keyboard handling

// mouseover / mouseout → Hover effects

// submit → Forms

// scroll / resize → Window events