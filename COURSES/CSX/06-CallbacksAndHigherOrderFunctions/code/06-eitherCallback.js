// eitherCallback is a Higher Order Function
// It receives two functions as arguments and must return a function !!!
function eitherCallback(callback1, callback2) {
  // ADD CODE HERE
  function newFunction(value) {
    if (callback1(value) || callback2(value)) {
      return true;
    }
    return false;
  }
  return newFunction;

  // Alternative syntax with arrow function:
  return (value) => callback1(value) || callback2(value);
}

// Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    // Only need to pass array[i], in this case at least
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]
