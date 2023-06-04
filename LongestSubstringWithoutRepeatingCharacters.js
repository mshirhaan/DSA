/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let max = 0;
    let l = 0;
    
    for(let r = 0; r < s.length; r++) {
        while(set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, r-l+1);
    }
    return max;
};
