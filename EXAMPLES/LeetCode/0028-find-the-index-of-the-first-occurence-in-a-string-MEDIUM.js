/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    
    const hayLength = haystack.length;
    const neeLength = needle.length;
    
    for (i = 0; i < hayLength; i++) {
        if (hayLength - i >= neeLength) {
            const haySlice = haystack.slice(i, i + neeLength);
            if (haySlice === needle) {
                return i;
            }
        }
    }
    return -1;
};
