// TLDR
// Create a class, then create an instance of the class

// The class automatically creates a prototype
// We can access the constructor from the instance, and then the prototype

// Declare the class Robot, which has a constructor function
// and a method that will be added to Robot.prototype
class Robot {
  // The constructor function is called when creating an instance
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  
  // The methods declared here will live in Robot.prototype
  greet() {
    console.log(`Hi! I'm ${this.name} the ${this.type} robot!`);
  }
}

const robbie = new Robot('Robbie', 'killer');
robbie.greet();

// We can access the prototype through the instance's consctructor property
robbie.constructor.prototype.build = function(thing) {
  console.log(`${this.name} builds a ${thing}!`);
};

robbie.build('spaceship');

// Clarifications!
console.log(robbie.constructor); // Robot()
console.log(robbie.constructor.prototype); // { hi: f () }
console.log(Object.getOwnPropertyNames(robbie.constructor)); // [ 'length', 'name', 'prototype' ]
console.log(Object.getOwnPropertyNames(robbie.constructor.prototype)); // [ 'constructor', 'greet', 'hi' ]
console.log(robbie.constructor === Robot); // true
console.log(robbie.constructor.prototype === Robot.prototype); // true
