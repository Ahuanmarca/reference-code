// Must buid an object and return it
function objOfMatches(arr1, arr2, callback) {
  const output = {};
  for (let i = 0; i < arr1.length; i++) {
    if (callback(arr1[i]) === arr2[i]) {
      output[arr1[i]] = arr2[i];
    }
  }
  return output;
}

// Uncomment these to check your work!ß
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); 
// should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }