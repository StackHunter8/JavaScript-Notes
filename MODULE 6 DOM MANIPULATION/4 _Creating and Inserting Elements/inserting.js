let list = document.getElementsByClassName("list")[0];
let newlist = document.createElement("li");
newlist.textContent = "Banana";
list.appendChild(newlist);
let newfruit = document.createElement("li");
newfruit.textContent = "Streawberry";   
list.prepend(newfruit);

list.removeChild(newlist);

list.replaceChild(newlist,newfruit);

// 🧩 5. Creating & Inserting Elements

// You can create new HTML elements using JavaScript dynamically.

// Method	Use
// createElement("tagName")	Create a new element
// appendChild(element)	Add element inside another
// prepend(element)	Add element at the beginning
// removeChild(element)	Remove element
// replaceChild(new, old)	Replace an existing element