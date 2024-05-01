/*
Object Inheritance
Create an object using another object as a prototype
to inherit attributes from it
*/

// 'rabbit' is a prototype for other objects
const rabbit = {
  speak(line) {
    return `The ${this.type} rabbit says ${line}`;
  },
};

// 1) Inheritance with Object.create
const crazyRabbit = Object.create(rabbit);
crazyRabbit.type = "crazy";
crazyRabbit.speak("hello");

// 2) Inheritance with a factory function
function createRabbit(type) {
  const newRabbit = Object.create(rabbit);
  newRabbit.type = type;
  return newRabbit;
}
const lazyRabbit = createRabbit("lazy");
lazyRabbit.speak("zzZZ");

// 3) Inheritance using the 'new' keyword
function Rabbit(type) {
  this.type = type;
}
// The method must live in the prototype,
// which is an attribute of the function
Rabbit.prototype.speak = function (line) {
  return `The ${this.type} rabbit says ${line}`;
};
const happyRabbit = new Rabbit("happy");
happyRabbit.speak("yepee!");

// 4) The class Syntax
// Creates and executes the contructor, then
// creates the methods in the constructor
// prototype. It does exactpy the same
// operation as the previous method.

class Robot {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    return `The ${this.type} robot says ${line}`;
  }
}

const charlie = new Robot('modern');
charlie.speak('error');
