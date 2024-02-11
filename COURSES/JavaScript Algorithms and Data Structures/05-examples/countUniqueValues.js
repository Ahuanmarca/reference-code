function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let ptr1 = 0;
    let ptr2 = 1;
    while (ptr2 < arr.length) {
        if (arr[ptr1] != arr[ptr2]) {
            ptr1++;
            arr[ptr1] = arr[ptr2];
        } else {
            ptr2++;
        }
    }
    return ptr1+1;
}

//                             |
console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
//                               |
