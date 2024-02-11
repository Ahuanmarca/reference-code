// 2022-05-17 
// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */

 var pivotIndex = function(nums) {
    const L = nums.length;
    for (i = 0; i < L; i++) {
        const leftArr = nums.slice(0, i);
        const pivot = nums[i]
        const rightArr = nums.slice(i+1, L);

        let leftSum = undefined;
        let rightSum = undefined;
        
        if (leftArr.length > 0) {
            leftSum = leftArr.reduce((total, currentVal) => {
                return total + currentVal;
            });            
        } else {
            leftSum = 0;
        }
        
        if (rightArr.length > 0) {
            rightSum = rightArr.reduce((total, currentVal) => {
                return total + currentVal;
            });            
        } else {
            rightSum = 0;
        }
        
        if (leftSum == rightSum) {
            return i;
        }
    }
    
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
