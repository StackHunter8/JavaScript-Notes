// 🟢 textContent

// फक्त मूळ मजकूर (text) परत देतो — HTML टॅग्स वाचत नाही.

// लपलेला मजकूर (display:none) सुद्धा दाखवतो.

// उदाहरण:

// element.textContent = "Hello!";

// 👉 फक्त "Hello!" मजकूर दिसेल (टॅग नाही).

// 🟠 innerHTML

// HTML टॅग्ससह पूर्ण HTML कोड परत देतो किंवा बदलतो.

// नवीन HTML तयार करायचा असेल तर वापरतात.

// उदाहरण:

// element.innerHTML = "<b>Hello!</b>";

// 👉 “Hello!” ठळक (bold) दिसेल.

// 🔵 innerText

// फक्त दृश्यमान मजकूर (visible text) दाखवतो.

// लपलेला मजकूर (display:none) दाखवत नाही.

// CSSनुसार मजकूर दाखवतो.

// उदाहरण:

// element.innerText = "Hello!";

let topic = document.getElementsByClassName("headings");
let para = document.querySelector("#parra");
let ending = document.querySelector("h2");

//speaciall
const h = document.querySelector("#head");
h.classList.add("blue"); // adds a class
h.classList.remove("red"); // removes a class
h.classList.toggle("bold"); // adds/removes depending on existence

//Explaination

//  Step 1: document.querySelector("#head")

// This selects the <h1> element with id head.

// Stores it in the variable h.

// Step 2: h.classList.add("blue")

// Adds the class blue to the element.

// If blue was not already there, now the element has both red and blue classes temporarily.

// Step 3: h.classList.remove("red")

// Removes the class red from the element.

// After this, the <h1> only has blue.

// Step 4: h.classList.toggle("bold")

// Toggle means:

// If the element has class bold, it removes it.

// If the element does not have class bold, it adds it.

// Since the <h1> didn’t have bold initially, now bold is added.

// Final Effect

// After the script runs, your <h1> element becomes:

// <h1 id="head" class="blue bold">Color change</h1>

// Classes applied: blue and bold.

// Class removed: red.

// If you have corresponding CSS for .blue and .bold, their styles will now be applied.

// ✅ Summary in simple terms:

// Selects the element.

// Adds a new class blue.

// Removes the old class red.

// Adds bold (because it wasn’t there before).

console.log(topic[0].textContent);
console.log(para.textContent);
console.log(ending.textContent);

ending.textContent = "Done with the studies";

para.style.color = "red";
ending.style.color = "purple";

console.log(topic[0].innerHTML);
console.log(para.innerHTML);
console.log(ending.innerText);



