// ADD CODE HERE
function createFunctionWithInput(input) {
  function newFunction() {
    return input;
  }
  return newFunction;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'