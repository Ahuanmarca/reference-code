// ADD CODE HERE
function groupBy(array, callback) {
  const output = {};
  array.forEach((element) => {
    // create the key
    const key = callback(element);
    // check if the key is already in the object
    // if not, create the key with empty array
    if (!(key in output)) {
      output[key] = [];
    }
    // push the element into the array at the key
    output[key].push(element);
  });
  return output;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored));
// should log: { 1: [1.3], 2: [2.1, 2.4] }
