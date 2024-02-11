// Challenge 9: union

// ADD CODE HERE
function reduce(array, callback, initialValue) {
  let accumulator = initialValue || 0;
  for (const element of array) {
    accumulator = callback(accumulator, element);
  }
  return accumulator;
}
// Test reduce
// console.log(reduce([ 1, 2, 3 ], ( a, b ) => a + b, 4)); // 10
// console.log(reduce([ 1, 2, 3 ], ( a, b ) => a + b)); // 6

function flattenTwoArrays(arr1, arr2) {
  const output = [...arr1];
  for (const element of arr2) {
  	!arr1.includes(element) && output.push(element);    
  }
  return output;
}
// Test flattenTwoArrays
// console.log(flattenTwoArrays([ 1, 3, 5 ], [ 1, 3, 9 ])); // [ 1, 3, 5, 9 ]

function union(arrays) {
  return reduce(arrays, flattenTwoArrays, arrays[0]);
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]