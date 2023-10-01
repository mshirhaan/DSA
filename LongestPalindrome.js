var longestPalindrome = function(s) {
    let max = s.charAt(0);
    for(let start = 0; start<s.length; start++) {
        let i = start - 1;
        let j = start + 1;
        while(i>=0 && j<s.length && s.charAt(i) == s.charAt(j)) {
            if(j - i + 1 > max.length) {
                max = s.substring(i, j+1);
            }
            i--; j++;
        }
    }

    for(let start = 0; start<s.length-1; start++) {
        let i = start;
        let j = start + 1;
        while(i>=0 && j<s.length && s.charAt(i) == s.charAt(j)) {
            if(j - i + 1 > max.length) {
                max = s.substring(i, j+1);
            }
            i--; j++;
        }
    }
    return max;
};
