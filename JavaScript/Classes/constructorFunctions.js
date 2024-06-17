// TLDR:
// Create a constructor function, then modify it's "prototype" property

// Constructor function to create robots
// When we create this function, it automatically creates a prototype
function Robot(name, type) {
  this.name = name;
  this.type = type;
}

// We can see the prototype, which at this point is an empty object
console.log(Robot.prototype); // {}

// We can add methods to the prototype,
// which will be inherited by instances created with Robot()
Robot.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name} the ${this.type} robot!`);
};

// Creating an instance with the Robot constructor
const robbie = new Robot("Robbie", "funny");

// We can see the constructor function used to create robbie
console.log(robbie.constructor); // Robot()

// We can modify Robot.prototype right from robbie (the instance)
// ...but is it correct to do so?
robbie.constructor.prototype.build = function (thing) {
  console.log(`${this.name} creates a ${thing}`);
};

// Checking if the new method was added to Robot.prototype
console.log(Robot.prototype); // { greet: ƒ (), build: ƒ () }

// We can use both methods on robbie
robbie.greet(); // "Hi, I'm Robbie the funny robot!"
robbie.build('house'); // 'Robbie creates a house'

// Check if robbie is an instance of Robot
// ...THIS WONT'T WORK WITH FACTORY FUNCTIONS!
console.log(robbie instanceof Robot); // true
