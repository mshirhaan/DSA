

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    
    function rec(row, col, memo = {}) {
        if(obstacleGrid[row][col] == 1) {
            return 0;
        }
        if(memo[row+","+col]!=undefined) {
            return memo[row+","+col];
        }
        console.log(row, col)
        if(row == m - 1 && col == n - 1) {
            return 1;
        }
        let ways = 0;
        if(col+1 < n)
            ways+= memo[row+","+(col+1)] != undefined ? memo[row+","+(col+1)] : rec(row, col+1, memo); //right
        
        if(row+1 < m)
            ways+= memo[(row+1)+","+col] != undefined ? memo[(row+1)+","+col] : rec(row+1, col, memo); //bottom
        
        memo[row+','+col] = ways;
        return ways;
    }

    let memo = {};
    console.log(memo)
    return rec(0,0, memo);
};
