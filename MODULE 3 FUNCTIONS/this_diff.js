// this keyword

// -regular functions have thiss keyword of their own 
// -arrow functions dont have this keyword
// -jevha apn regulaar function call kaarto tevha this tya function chya name 
//    laa reffer karta that means swatahachya this la so ex3pected output yeta
// -bt jevha apn arrow function madhe this implement karaicha baghto tevha te parent
//  la mhmnjech window la point karta karan techya kade swatahacha this nasto

// | Feature                | Regular Function                   | Arrow Function                         |
// | ---------------------- | ---------------------------------- | -------------------------------------- |
// | **Syntax**             | `function add(a,b){ return a+b; }` | `(a,b) => a+b`                         |
// | **Hoisting**           | ✅ Hoisted                          | ❌ Not hoisted                          |
// | **`this` keyword**     | Has its own `this`                 | ❌ Doesn’t have `this` (lexical `this`) |
// | **`arguments` object** | ✅ Available                        | ❌ Not available                        |
// | **Usage**              | General-purpose                    | Short callbacks, event handlers        |
// | **Return**             | Must use `return` inside `{}`      | Implicit return if one-line (no `{}`)  |

const person = {
  name: "Parnika",
  regular: function () {
    console.log(this.name);
  },
};

person.regular(); // ✅ "Parnika"


const person1 = {
  name: "Parnika",
  arrow: () => {
    console.log(this.name);
  },
};

person1.arrow(); // ❌ undefined
