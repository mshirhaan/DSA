var climbStairs = function(n) {
    function helper(i, memo = {}) {
        if(i == n) return 1;
        if(i > n) return 0;

        if(memo[i] != undefined) return memo[i];

        let left = helper(i+1, memo);
        let right = helper(i+2, memo);

        memo[i] = left+right;
        return left + right;
    }

    return helper(0);
};

var climbStairs = function(n) {

    let first = 1;
    let second = 1;
    let third = 1;

    for(let i = 2; i<=n; i++) {
        third = first + second;
        first = second;
        second = third;
    }

    return third;
};
