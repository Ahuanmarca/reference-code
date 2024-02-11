/*
Challenge: intersection

Construct a function intersection that compares
input arrays and returns a new array with elements
found in all of the inputs. BONUS - Use reduce!
*/

function reduceTwoArrays(arr1, arr2) {
  const newArray = [];
  for (const element of arr1) {
    if (arr2.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}
// Test reduceTwoArrays // Should log [ 4, 5 ]
// console.log(reduceTwoArrays([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));

function reduce(array, callback, initialVal) {
  let accumulator = initialVal;
  for (const element of array) {
    accumulator = callback(accumulator, element);
  }
  return accumulator;
}
// Test reduce // Should log 25
// console.log(reduce([ 1, 2, 3, 4, 5], (x, y) => x + y, 10));

// ADD CODE HERE
function intersection(arrays) {
  return reduce(arrays, reduceTwoArrays, arrays[0])
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
