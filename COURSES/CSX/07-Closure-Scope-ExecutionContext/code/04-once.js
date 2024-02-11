// ADD CODE HERE
function once(cb) {
  let output = undefined;
  function newFunc(input) {
    if (!output) output = cb(input);
    return output;
  }
  return newFunc;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7