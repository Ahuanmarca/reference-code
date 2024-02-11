# Problems

## 24. Linear Search Excercise
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

Examples:

    linearSearch([10, 15, 20, 25, 30], 15) // 1
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
    linearSearch([100], 100) // 0
    linearSearch([1,2,3,4,5], 6) // -1
    linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
    linearSearch([100], 200) // -1

``` js
function linearSearch(arr, value){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
  // add whatever parameters you deem necessary - good luck!
}
```

## 25. Binary Search Exercise

Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10) // 2
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95) // 16
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 100) // -1

``` js
function binarySearch(arr, value){
    // add whatever parameters you deem necessary - good luck!
    // find the middle
    let ptr1 = 0;
    let ptr2 = arr.length - 1;
    // let middle = Math.floor(arr.length / 2);
    
    while (ptr1 < ptr2) {
        let middle = Math.floor((ptr2 - ptr1) / 2);
    }
    

    
    if (arr[middle] === value) {
        return middle;
    } else if (arr[middle] > value) {
        
    } else {
        
    }
    

}
```

