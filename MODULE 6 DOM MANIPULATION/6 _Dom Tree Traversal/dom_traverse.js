let parentnode = document.getElementById("Parent");
let child = document.getElementById("para")

console.log(parentnode.children);
console.log(parentnode.firstElementChild);
console.log(parentnode.lastElementChild);
console.log(parentnode.nextElementSibling);
console.log(parentnode.previousElementSibling);



// you can traverse through the dom by using these properties.
// Once you select an element, you can navigate around it:
 
// Property	                         Meaning
// parentElement	                    Get parent node
// children	                        Get all child nodes
// firstElementChild	                Get first child
// lastElementChild	                Get last child
// nextElementSibling	                Get next sibling
// previousElementSibling	            Get previous sibling