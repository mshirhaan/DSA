/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    text1 = text1.split("");
    text2 = text2.split("");

    function helper(i, j, memo) {
        if(i == text1.length || j == text2.length) return 0;
        if(memo[i][j] != undefined) return memo[i][j];
        if(text1[i] == text2[j]) {
            memo[i][j] = 1 + helper(i+1, j+1, memo);
            return memo[i][j];
        }
        let left = helper(i, j+1, memo);
        let right = helper(i+1, j, memo);
        memo[i][j] = Math.max(left,right);
        return memo[i][j];
    }

    let memo = [];
    for(let i =0; i<text1.length; i++) {
        memo[i] = []
    }
    return helper(0,0, memo);
};
