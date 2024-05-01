type NumStr = [number, string];

const myTuple: NumStr = [1, 'hello'];

console.log(myTuple);

// Error: Type 'string' is not assignable to type 'number'.
const badTuple: NumStr = ['hello', 1]; // Error: Type 'string' is not assignable to type 'number'.

// TypeScript complains, but still prints the tuple (with Bun)
console.log(badTuple);
