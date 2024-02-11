// 2022-04-17

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    // Remove non-alphanumeric and convert to lower case
    s = s.replace(/[^a-z^A-Z^0-9]/g, '').toLowerCase()

    // Split word in two halves (if odd, ignore middle character)
    l = s.length
    let left = s.slice(0, Math.floor(l / 2))
    let right = s.slice(Math.ceil(l / 2), l)

    // Reverse the right half of the word
    reversedRight = ''
    for (let i = 0; i < right.length; i++) {
        reversedRight = reversedRight + right[right.length - 1 - i]
    }

    // Compare left half to reversed right half
    return left == reversedRight
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('Anita lava la tina'))