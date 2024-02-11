// ADD CODE HERE
function saveOutput(cb, str) {
  const password = str;
  const savedOutput = {}
  function newFunc(input) {
    if (input === password) {
      return savedOutput;
    } else {
      savedOutput[input] = cb(input);
      return savedOutput[input];
    }
  }
  return newFunc;
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }