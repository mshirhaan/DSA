var numDecodings = function(s) {
    s = s.split("");

    function helper(i, memo = {}) {
        if(memo[i] !== undefined) return memo[i];
        if(i == s.length) {
            return 1;
        }
        if(i > s.length) {
            return 0;
        }
        if(s[i] == '0') return 0;

        if(s[i] == '1') {
            let left = helper(i+1, memo);
            let right = helper(i+2, memo);
            memo[i] = left + right;
            return left + right;
        }
        if(s[i] == '2') {
            let left = helper(i+1, memo);
            let right = 0;
            if(+s[i+1] < 7) {
                right = helper(i+2, memo);
            }
            memo[i] = left + right;
            return left + right;
        }
        memo[i] = helper(i+1, memo);
        return memo[i];
    }

    let res = helper(0);
    return res;
};
