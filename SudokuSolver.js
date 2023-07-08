/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] == '.') {
                for(let val = 1; val<=9; val++) {
                    if(isValid(board,i,j,val)) {
                        board[i][j] = val+'';
                        if(solveSudoku(board)) {
                            return true;
                        }
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
};

function isValid(board,row,col,val) {
    for(let i=0; i<9; i++) {
        if(board[i][col] == val) {
            return false;
        }
        if(board[row][i] == val) {
            return false;
        }
        if(board[Math.floor(row/3)*3+Math.floor(i/3)%3][Math.floor(col/3)*3+i%3]==val) {
            return false;
        }
    }
    return true;
}
