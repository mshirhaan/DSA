//recursion, top down

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




// tabulation, bottom up
var uniquePaths = function(m, n) {
    
    let grid = [];
    for(let i = 0; i < m; i++) {
        grid[i] = [];
    }
    grid[m-1][n-1] = 1;

    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            if(i == m -1 && j == n - 1) continue;

            grid[i][j] = 0;

            if(i+1 < m) {
                grid[i][j]+= grid[i+1][j];
            }
            if(j+1 < n) {
                grid[i][j]+= grid[i][j+1];
            }
        }
    }
    return grid[0][0];
    
};
