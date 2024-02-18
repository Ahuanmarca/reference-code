// Eloquent JavaScript
// Chapter 6: The Secret Life of Objects

/**
 * We can use Object.create to create an object with a specific prototype.
 * The "proto" rabbit acts as a container for the properties that are shared
 * by all rabbits.
 */

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  },
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

/**
 * CLASSES
 * Constructor functions:
 * Function that creates an instance of a class. It makes sure the instances
 * have the properties that instances of this class are supposed to have.
 */

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

let lazyRabbit = makeRabbit("lazy");
lazyRabbit.speak("whoaaaa...");

/**
 * If you put the word 'new' in front of a function call, it is treated as
 * a constructor. This means that an object with the right prototype is
 * automatically created, bound to 'this' in the function, and returned
 * at the end of the function.
 */

function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

/**
 * CLASS NOTATION
 */

class Conejo {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let conejoLoco = new Conejo("crazy");
let conejoNegro = new Conejo("black");

conejoLoco.speak("hola mundo");
conejoNegro.speak("foo!");
