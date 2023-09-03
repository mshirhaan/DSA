var uniquePaths = function(m, n) {
    
    function rec(row, col, memo = {}) {
        if(memo[row+","+col]!=undefined) {
            return memo[row+","+col];
        }
        
        if(row == m - 1 && col == n - 1) {
            return 1;
        }
        let ways = 0;
        if(col+1 < n)
            ways+= rec(row, col+1, memo); //right
        
        if(row+1 < m)
            ways+= rec(row+1, col, memo); //left
        
        memo[row+','+col] = ways;
        return ways;
    }

    let memo = {};
    
    let res = rec(0,0, memo);
    console.log(memo)
    return res;
};
