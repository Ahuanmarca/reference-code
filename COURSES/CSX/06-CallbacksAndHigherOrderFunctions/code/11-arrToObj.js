function arrToObj(array, callback) {
  // ADD CODE HERE
  const output = {};
  for (const element of array) {
    output[element] = callback(element);
  }
  return output;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); 
// should log: { beer: 'BEER', glue: 'GLUE' }
