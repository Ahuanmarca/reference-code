/*
* Check if two strings have the same character frequency (are anagrams of each other)
* isAnagram("aabbb", "babab") // true
* isAnagram("aabbc", "aabbb") // false 
* 
* Steps
* 1) Store the character frequency of each string (on objects)
* 2) Chech if keys return same number from both objects
* 
* Use guard clause to return false if strings have different length
*/

function validAnagram(string1, string2){

    // Strings have the same length
    if (string1.length !== string2.length) {
        return false;
    }

    // Create objects to store the character frequencies of each string
    const charfreq1 = {};
    const charfreq2 = {};

    for (let char of string1) {
        charfreq1[char] = (charfreq1[char] || 0) + 1;
    }
    for (let char of string2) {
        charfreq2[char] = (charfreq2[char] || 0) + 1;
    }

    // console.log(charfreq1);
    // console.log(charfreq2);

    // Characters in string1 exist in string2 (not checking frequency yet)
    for (let key in charfreq1) {
        if (!(key in charfreq2) || charfreq1[key] !== charfreq2[key]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram("anita", "atina"));
console.log(validAnagram("qwerty", "dvorak"));
console.log(validAnagram("", ""));
