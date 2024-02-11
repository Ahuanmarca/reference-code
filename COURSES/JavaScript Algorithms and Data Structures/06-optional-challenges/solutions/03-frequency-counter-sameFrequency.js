/**
 * Write a function called sameFrequency. Given two positive integers, 
 * find out if the two numbers have the same frequency of digits.
 * Must have: Time: O(N)
 * Sample input:
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */

function sameFrequency(number1, number2) {
    const str1 = String(number1);
    const str2 = String(number2);

    // ascii codes from 48 to 57
    const charFreq = [0,0,0,0,0,0,0,0,0,0];

    for (let c of str1) {
        charFreq[c.charCodeAt() - 48]++;
    }
    
    for (let c of str2) {
        charFreq[c.charCodeAt() - 48]--;
        if (charFreq[c.charCodeAt() - 48] < 0) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));
