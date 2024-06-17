// TLDR:
// Create an object, then use it in a factory function
// ...as a prototype for created objects

// Creating an object with a factory function and prototype inheritance

// First we must create an object to serve as a prototype
// ...other objects will inherit properties from this one
const protoRobot = {
  _description: `I'm protoRobot, a prototype for other robots!`,
  greet() {
    console.log(`Hi!, I'm ${this.name} the ${this.type} robot!`);
  }
}

// Factory function that creates a robot using protoRobot as prototype
function createRobot(name, type) {
  const newRobot = Object.create(protoRobot);
  newRobot.name = name;
  newRobot.type = type;
  return newRobot;
}

// Creating an instance and using the method that comes from the prototype
const robbie = createRobot('Robbie', 'friendly');
robbie.greet(); // "Hi!, I'm Robbie the friendly robot!"

// Adding a new method to robbie's prototype
Object.getPrototypeOf(robbie).build = function (thing) {
  console.log(`${this.name} builds a ${thing}!`);
};

robbie.build('castle');

// robbie is the instance, protoRobot is the prototype
Object.getPrototypeOf(robbie) === protoRobot;

