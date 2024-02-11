function maxSum(arr, num) {

    let tmpSum = 0;
    let maxSum = 0;

    for (let i = 0; i < num; i++) {
        tmpSum += arr[i];
    }
    maxSum = tmpSum;

    for (let i = 0; i < arr.length - num; i++) {
        tmpSum = tmpSum - arr[i] + arr[num+i];
        maxSum = Math.max(maxSum, tmpSum);
    }
    return maxSum;
}



console.log(maxSum([1,2,5,4,0,7,1,5,2,2], 3));