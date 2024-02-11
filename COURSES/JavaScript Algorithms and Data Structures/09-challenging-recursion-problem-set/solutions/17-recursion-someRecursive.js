// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

function isOdd(num) {
    return num % 2 === 1;
}

function someRecursive(arr, cb){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return false;
    if (cb(arr[arr.length-1]) === true) return true;
    return someRecursive(arr.slice(0, arr.length-1), cb);
}

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false
