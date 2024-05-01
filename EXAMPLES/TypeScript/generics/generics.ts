// Generics!

// Function that accepts an array of numbers and returns the firs one

function getFirstElement(array: number[]) {
  return array[0];
}

// No error with array of numbers
const numbers = [1, 2, 3];
getFirstElement(numbers);

// Error with array of strings
const strings = ['foo', 'bar', 'baz'];
getFirstElement(strings);

// We want the function to take an array of any type, but we don't want to lose the type safety

function getFirstThing<ElementType>(array: ElementType[]) {
  return array[0];
}

getFirstThing(numbers);
getFirstThing(strings);