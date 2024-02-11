/**
 * Write a function called findLongestSubstring, which accepts a string and
 * returns the length of the longest substring with all distinct characters.
 * 
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 * 
 * Time Complexity - O(n)
 */

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!

    const charSet = {};
    let longest = 0;
    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr2 < str.length) {

        if (charSet[str[ptr2]] === undefined || charSet[str[ptr2]] === 0) {
            charSet[str[ptr2]] = 1;
            ptr2++;
        } else {
            longest = Math.max(longest, (ptr2+1)-ptr1);
            charSet[str[ptr1]]--;
            ptr1++;
        }
    }
    longest = Math.max(longest, (ptr2+1)-ptr1) -1;

    return longest;
}


console.log("Expected: 0 | Got: " + findLongestSubstring('')) // 0
console.log("Expected: 7 | Got: " + findLongestSubstring('rithmschool')) // 7
console.log("Expected: 6 | Got: " + findLongestSubstring('thisisawesome')) // 6
console.log("Expected: 7 | Got: " + findLongestSubstring('thecatinthehat')) // 7
console.log("Expected: 1 | Got: " + findLongestSubstring('bbbbbb')) // 1
console.log("Expected: 8 | Got: " + findLongestSubstring('longestsubstring')) // 8
console.log("Expected: 6 | Got: " + findLongestSubstring('thisishowwedoit')) // 6
