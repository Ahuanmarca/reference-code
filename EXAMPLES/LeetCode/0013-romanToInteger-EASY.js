// 2022-04-10
// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

 var romanToInt = function(s) {
    let r = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let numb = 0
    let l = s.length    

    for (let i = 0; i < l; i++) {
        ind = l - i - 1
        // console.log(ind)

        current = r[s[ind]]
        numb = numb + current
        
        
        if (ind > 0) {
            next = r[s[ind - 1]]
            if (current > next) {
                numb = numb - (2 * next)
            }
        }
    }
    return numb    
};
