// Define a base class
class Robot {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} robot named ${this.name} says: ${line}`);
  }
}

// Extend the base class
class KillerRobot extends Robot {
  constructor(name) {
    super(name, 'Killer'); // Call the parent class's constructor
  }
  
  attack() {
    console.log(`${this.name} attacks with deadly precision!`);
  }
}

// Create instances and use methods
const mochi = new Robot('Mochi', 'Android');
mochi.speak('Beep Beep!'); // 'The Android robot named Mochi says: Beep Beep!'

const pochi = new KillerRobot('Mochi');
pochi.speak('I will terminate you!'); // 'The Killer robot named Mochi says: I will terminate you!'
pochi.attack(); // 'Mochi attacks with deadly precision!'

// Clarifications
console.log(mochi.constructor);
console.log(pochi.constructor);

Object.getPrototypeOf(Robot)
Object.getPrototypeOf(KillerRobot)
