// before ES6 constructor functions were used instead pf classes and they were a bit complicated to read and understand. 
// Constructor function 

// function Person(name,age){
//         this.name = name;
//         this.age = age;

// }

// // let p = new Person("Parnika",22);
// ES6 classes were introduced to provide a cleaner and more readable syntax for creating objects and handling inheritance in JavaScript, because the prototype-based approach was difficult to understand and maintain.

// after ES6
// class Person{

//      constructor(name,age){

//         this.name = name;
//         this.age=age;
//     }

//      greet() {
//         console.log(`hello ${this.name}`);
        
//     }
// }

// let p = new Person("Pari",22);
// p.greet();


// Inheritance

// before ES6
// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(this.name + " makes a noise");
// };

// function Dog(name) {
//     Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.bark = function() {
//     console.log("Dog barks");
// };

// complex to understand and read 

// After ES6

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a noise");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let d = new Dog("Tommy");

d.speak();
d.bark();