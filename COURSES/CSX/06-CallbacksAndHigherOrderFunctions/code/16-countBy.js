// ADD CODE HERE
function countBy(array, callback) {
  const output = {};
    for (const element of array) {
      const isEvenOdd = callback(element);
      if (output.hasOwnProperty(isEvenOdd) === false) {
        output[isEvenOdd] = 0;
      }
      output[isEvenOdd]++;
    }
  return output;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); 
// should log: { odd: 3, even: 2 }