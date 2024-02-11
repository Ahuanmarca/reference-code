/**
 * Longest Common Substring
 * Accepts two strings, returns the longest common substring
 */

function longestCommonSubstring(str1, str2) {

    // Data structure to store found substrings
    const subStrings = {};

    // Object to remember longest substring position and length
    const longest = {
        'key': '',
        'length': 0,
    }

    // Empty 2d Array for diagonal comparisons
    const matrix = Array(str1.length+1)
        .fill().map(n => Array(str2.length+1).fill(0));

    // Nested loop to compare characters from both strings
    for (let i = 1; i < str1.length+1; i++) {
        for (let j = 1; j < str2.length+1; j++) {

            if (str1[i-1] === str2[j-1]) {

                matrix[i][j] = matrix[i-1][j-1] + 1;
                const currLength = matrix[i][j];

                if (currLength > longest.length) {
                    longest.key = `${i+1-currLength}${j+1-currLength}`;
                    longest.length = currLength;
                }
                if (currLength <= 1) {
                    subStrings[`${i}${j}`] = {
                        'string': Array(1).fill(str1[i-1]),
                        'length': currLength,
                    }
                } else {
                    const _i = i + 1 - currLength;
                    const _j = j + 1 - currLength;
                    subStrings[`${_i}${_j}`]['string'].push(str1[i-1]);
                    subStrings[`${_i}${_j}`]['length']++;
                }
            }
        }
    }

    // Uncomment to print the matrix
    // for (row of matrix) {
    //     for (cell of row) process.stdout.write(`[${cell}]`);
    //     process.stdout.write('\n');
    // }

    return subStrings[longest.key]['string'].toString().replaceAll(',', '');
}

console.log(longestCommonSubstring('abcdgh', 'acdghrx')); // 'cdgh'
console.log(longestCommonSubstring('renzobelon', 'belonortega')); // 'belon'
