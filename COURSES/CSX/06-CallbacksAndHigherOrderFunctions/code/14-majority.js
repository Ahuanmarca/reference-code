// ADD CODE HERE
function majority(array, callback) {
  let [isTrue, isFalse] = [0, 0];
  array.forEach((element) => (callback(element) ? isTrue++ : isFalse++));
  return isTrue > isFalse;
}

// Uncomment these to check your work!
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
