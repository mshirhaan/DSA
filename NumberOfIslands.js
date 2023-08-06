/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = [];

    let gridRowCount = grid.length;
    let gridColCount = grid[0].length;

    //init empty grid of same rows
    for(let i = 0; i< gridRowCount; i++)
        visited.push([]);

    let islands = 0;
    for(let i = 0; i <gridRowCount; i++) {
        for(let j = 0; j<gridColCount; j++) {
            if(grid[i][j] == 1 && !visited[i][j]) {
                dfs(i,j, visited);
                islands++;
            }
        }
    }

    return islands;

    function dfs(row, col, visited) {
        visited[row][col] = 1;
        let directions = [[0,1], [0, -1], [1, 0], [-1, 0]];

        for(let [dRow, dCol] of directions) {
                let targetRow = row + dRow;
                let targetCol = col + dCol;

                //checking position inside limit of grid
                if((targetRow >=0 && targetRow < gridRowCount) &&
                (targetCol >= 0 && targetCol < gridColCount) &&
                grid[targetRow][targetCol] == 1 &&
                !visited[targetRow][targetCol]
                ) {
                    dfs(targetRow, targetCol, visited);
                }
        }
    }
};
