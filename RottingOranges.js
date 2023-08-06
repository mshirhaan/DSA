ar orangesRotting = function(grid) {
    
    let time = 0;

    let rottenQueue = [];
    let goodOrangeCount = 0;

    let gridRowCount = grid.length;
    let gridColCount = grid[0].length;

    for(let i =0; i<gridRowCount; i++) {
        for(let j =0; j<gridColCount; j++) {
            if(grid[i][j] == 2) {
                rottenQueue.push([i,j]);
            } else if(grid[i][j] == 1) {
                goodOrangeCount++;
            }
        }
    }

    if(goodOrangeCount ==0) return 0;

    let directions = [[0,1], [0, -1], [1, 0], [-1, 0]];

    //bfs begins
    while(rottenQueue.length) {
        let length = rottenQueue.length;

        for(let i = 0; i<length; i++) {
            let rottenOrangePosition = rottenQueue.shift();
            let [rottenRow, rottenCol] = rottenOrangePosition;
            for(let [dRow, dCol] of directions) {
                let targetRow = rottenRow + dRow;
                let targetCol = rottenCol + dCol;

                //checking position inside limit of grid
                if((targetRow >=0 && targetRow < gridRowCount) &&
                (targetCol >= 0 && targetCol < gridColCount) &&
                grid[targetRow][targetCol] == 1
                ) {
                    grid[targetRow][targetCol] = 2;
                    rottenQueue.push([targetRow,targetCol]);
                    goodOrangeCount--;
                    if(goodOrangeCount == 0) {
                        return time+1;
                    }
                }
            }
        }
        time++;
    }

    if(goodOrangeCount == 0) {
        return time;
    } else return -1;
};
