
var minPathSum = function(obstacleGrid) {

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    
    function rec(row, col, memo = {}) {
        if(memo[row+","+col]!=undefined) {
            return memo[row+","+col];
        }
        console.log(row, col)
        if(row == m - 1 && col == n - 1) {
            return obstacleGrid[row][col];
        }
        let pathSum = obstacleGrid[row][col];
        let right = Infinity;
        let bottom = Infinity;

        if(col+1 < n)
            right = memo[row+","+(col+1)] != undefined ? memo[row+","+(col+1)] : rec(row, col+1, memo); //right
        
        if(row+1 < m)
            bottom = memo[(row+1)+","+col] != undefined ? memo[(row+1)+","+col] : rec(row+1, col, memo); //bottom
        
        pathSum+= Math.min(right, bottom);

        memo[row+','+col] = pathSum;
        return pathSum;
    }

    let memo = {};
    console.log(memo)
    return rec(0,0, memo);
};
