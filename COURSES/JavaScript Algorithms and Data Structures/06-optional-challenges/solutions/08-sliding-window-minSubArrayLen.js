/**
 * Write a function called minSubArrayLen which accepts two parameters
 *  - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous
 * subarray of which the sum is greater than or equal to the integer
 * passed to the function. If there isn't one, return 0 instead.
 * 
 * Examples:
 * minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 * minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */


function minSubArrayLen(arr, num) {

    let smallest = 0;
    let sum = 0;
    let ptr1 = 0;
    let ptr2 = 0;

    // Find the first subarray that adds to num
    while (sum < num && ptr2 < arr.length) {
        sum += arr[ptr2];
        ptr2++;
    }

    if (sum < num) {
        return 0;
    }

    smallest = ptr2 - ptr1;

    while (ptr2 < arr.length) {

        // Increase the window until the sum is num or more
        while (sum < num && ptr2 < arr.length) {
            sum += arr[ptr2];
            ptr2++;
        }
        
        // Shrink the window until the sum is less than num
        while (sum >= num) {
            sum -= arr[ptr1];
            ptr1++;
        }

        smallest = Math.min(smallest, ptr2-(ptr1-1)) ;
    }
    return smallest;
}


console.log("2 -> " + minSubArrayLen([2,3,1,2,4,3], 7) ) // 2 -> because [4,3] is the smallest subarray
console.log("2 -> " + minSubArrayLen([2,1,6,5,4], 9) ) // 2 -> because [5,4] is the smallest subarray
console.log("1 -> " + minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) ) // 1 -> because [62] is greater than 52
console.log("3 -> " + minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log("5 -> " + minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log("2 -> " + minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log("0 -> " + minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0




/** THIS PSEUDO CODE HAS MISTAKES
 * 
 * smallest = 0
 * sum = 0
 * ptr1 = 0
 * ptr2 = 0
 * 
 * While ptr2 < arr.length {
 *      1) Loop over array until sum is 7
 *              |
 *      ([2,3,1,2,4,3], 7)
 * 
 *      2) Close window from left until sum < 7
 *              |
 *      ([2,3,1,2,4,3], 7)
 *          |
 *      smallest = (ptr2+1) - (ptr1-1)
 * }
 * return smallest
 */