// Function type annotions
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}
greet("Renzo");
greet();

// Contextual Type Clues
const colors = ["red", "orange", "yellow"]; // Type will be string
// When using .map, TypeScript infers the type correctly
colors.map((color) => {
  return color.toUpperCase();
});

// Generic function: Reusable function that can receive different types, and we still get the benefits of type checking
function first<T>(elements: Array<T>): T {
  return elements[0];
}
first<boolean>([true, false]);
first(['foo', 'bar']); // Generics can be infered when calling generic functions

// Void: Return nothing
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}
printTwice('noc');

// Never: Do not return, do not finish executing the function
function makeError(msg: string): never {
  throw new Error(msg);
}
makeError('oops!')

// console.log("I'm unreachable code");
