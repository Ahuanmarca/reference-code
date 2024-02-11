/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4

Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.
*/

function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!

    if (arr.length === 0) {
        return 0;
    }

    let ptr1 = 0;
    let ptr2 = 1;

    while (ptr2 < arr.length) {
        if (arr[ptr1] == arr[ptr2]) {
            ptr2++;
        } else {
            ptr1++;
            arr[ptr1] = arr[ptr2];
        }
    }
    return ptr1+1;
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
