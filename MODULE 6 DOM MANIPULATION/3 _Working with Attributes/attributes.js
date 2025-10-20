let photo = document.getElementById("pic");
console.log(photo.getAttribute("src"));
console.log(photo.hasAttribute("alt"));
console.log(photo.getAttribute("alt"));

photo.setAttribute("alt","Cat img");
console.log(photo.getAttribute("alt"));
photo.removeAttribute("alt");
console.log(photo.hasAttribute("alt"));


// You can read or modify HTML attributes.

// Method	Use
// getAttribute("attrName")	Read an attribute
// setAttribute("attrName", "value")	Change or add attribute
// removeAttribute("attrName")	Delete attribute
// hasAttribute("attrName")	Check if exists