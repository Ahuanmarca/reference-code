// ADD CODE HERE
function joinAndMap(array1, array2, callback) {
  const output = [];
  const joined = array1.concat(array2);
  for (const element of joined) {
    output.push(callback(element));
  }
  return output;
}

// Uncomment these to check your work!
const arrRed = ['strawberry', 'cherry', 'wine'];
const arrBlue = ['blueberry', 'sky', 'ocean'];
const capitalize = str => str.toUpperCase();
console.log(joinAndMap(arrRed, arrBlue, capitalize)); 
// should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']