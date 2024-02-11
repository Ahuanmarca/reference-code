// ADD CODE HERE
function reduce(array, callback, initialVal) {
  let accumulator = initialVal || 0;
  for (const num of array) {
    accumulator = callback(accumulator, num);
  }
  return accumulator;
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8