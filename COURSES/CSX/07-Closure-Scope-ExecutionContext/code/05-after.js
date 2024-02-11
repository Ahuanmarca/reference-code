// ADD CODE HERE
function after(times, callback) {
  let count = 0;
  function newFunc(string) {
    count++;
    if (count >= times) {
      return callback(string);
    }
  }
  return newFunc;
}

const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed
