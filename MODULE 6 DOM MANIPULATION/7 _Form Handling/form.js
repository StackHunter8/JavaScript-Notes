let input = document.getElementById("input");
let btn = document.getElementById("submit");

function  handleSubmit(){
    alert(`Hello ${input.value}`);
    console.log(input.value);
    
}

btn.addEventListener("click",handleSubmit);