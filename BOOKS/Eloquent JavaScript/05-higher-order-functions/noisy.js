// Chapter 05 - Higher Order Functions

// BOOK EXAMPLE
// function noisy(f) {
//   return (...args) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// }
// noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

// MY REFACTORING
function noisy(func) {
  function newFunc(...args) {
    console.log("calling with", args);
    const result = func(...args);
    console.log("called with", args, ", returned", result);
    return result;
  }
  return newFunc;
}

const superNoisy = noisy(Math.min);
console.log(superNoisy(3, 2, 1));
