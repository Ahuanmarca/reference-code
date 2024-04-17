const foo = { a: 1, b: 2, c: { d: 3 } };
const bar = { a: 1, b: 2, c: { d: 3 } };
const baz = { a: 1, b: 2, c: { d: 4 } };

// true
const test1 = Bun.deepEquals(foo, bar);

// false
const test2 = Bun.deepEquals(bar, baz);

console.log(test1, test2);

