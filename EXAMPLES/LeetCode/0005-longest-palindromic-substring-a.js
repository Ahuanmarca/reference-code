
/**
 * Brute force approach
 * 
 * Check substrings from larget to lower.
 * We stop as soon as we find a palindrome.
 * 
 * [][][][][][][][]
 * [][][][][][][]
 *   [][][][][][][]
 * [][][][][][]
 *   [][][][][][]
 *     [][][][][][]
 * [][][][][]
 *   [][][][][]
 *     [][][][][]
 *       [][][][][]
 * etc
 * 
 * As soon as we find a palindrome, we have the answer.
 */

function longestPalindrome(str) {

    const isPalindrome = str => {
        if (str.length <= 1) return true;
        else if (str[0] !== str[str.length-1]) return false;
        else return isPalindrome(str.slice(1, str.length-1));
    }

    for (let i = 0; i < str.length-1; i++) {
        for (let j = 0; j < i+1; j++) {
            const subString = str.slice(j, j+(str.length-i));
            if (isPalindrome(subString)) {
                return subString;
            }
        }
    }
}

console.log(longestPalindrome('babad'));

