# Section 6 Exercise Solutions

## 3) Frequency Counter - sameFrequency
``` javascript
    function sameFrequency(num1, num2){
      let strNum1 = num1.toString();
      let strNum2 = num2.toString();
      if(strNum1.length !== strNum2.length) return false;
      
      let countNum1 = {};
      let countNum2 = {};
      
      for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
      }
      
      for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
      }
      
      for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
      }
     
      return true;
    }
```

## 4) Frequency Counter - areThereDuplicates
``` javascript
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection) {
        if(collection[key] > 1) return true
}}
```

## 5) Multiple Pointers - averagePair
``` javascript
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start]+arr[end]) / 2 
        if(avg === num) return true;
        else if(avg < num) start++
        else end--
    }
    return false;
}
```

## 6) Multiple Pointers - isSubsequence (Iterative)
```javascript
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
    }
    return false;
}
```

## 6) Multiple Pointers - isSubsequence (Recursive but not O(1) Space)
``` javascript
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}
```

## 7) Sliding Window - maxSubArray
``` javascript
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
    
    let total = 0;
    for (let i=0; i<num; i++){
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i-num];
        total = Math.max(total, currentTotal);
    }
    return total;
}
```

## 8) Sliding Window - minSubArrayLen 
``` javascript
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    
    while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
        // move the window to right
    if(total < sum && end < nums.length){
        total += nums[end];
            end++;
    }
    // if current window adds up to at least the sum given then
        // we can shrink the window 
    else if(total >= sum){
        minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
        break;
    }
    }
    
    return minLen === Infinity ? 0 : minLen;
}
```

## 9) Sliding Window - findLongestSubstring

``` javascript
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
        start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    }
    return longest;
}
```