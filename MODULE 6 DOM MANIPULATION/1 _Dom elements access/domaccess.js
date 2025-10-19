// let topHeading = document.getElementsByTagName("h1");
let topHeading = document.querySelectorAll("h1");
let paragraph = document.getElementById("para");
// let bottomHeading = document.getElementsByClassName("heading");

let bottomHeading = document.querySelector(".heading");


console.log(topHeading);
topHeading.forEach(element => {
    console.log(element.textContent);
    
});
// console.log(topHeading[1].textContent);

console.log(paragraph.textContent);
console.log(bottomHeading.textContent);
console.log(topHeading.length);
//length gives us the exact count of the total no of elements wit that class,tag. 




// getElementsByTagName gives or returns the list of the tags with that particulart tag name .so for accesing it we have to use indexing over it.
// getElementsByClassName it works same like the getElementById and returns the list of all the elemnts with that particular class  name.

// 🧩 The main difference

// ✅ getElementsByTagName() → returns a collection (HTMLCollection) of all elements with that tag.
// ✅ getElementsByClassName() → returns a collection (HTMLCollection) of all elements with that class.
// ⚠️ getElementById() → returns a single element, not a list.

// 🧠 Why getElementById() doesn’t return a list

// By HTML rules, the id of an element must be unique in the document.
// That means there should only ever be one element with a particular id.

// and due to this in your output at console you got that first h1 tag and notthe actual paragraph that we decclared
//  first in the code.

// We must first select an element before changing it.

// Method	Description	Returns
// getElementById("id")	Selects element by id	Single element
// getElementsByClassName("class")	Selects by class name	HTMLCollection
// getElementsByTagName("tag")	Selects by tag name	HTMLCollection
// querySelector("selector")	Selects first match (CSS style)	Single element
// querySelectorAll("selector")	Selects all matches	NodeList