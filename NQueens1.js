/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {

    let conf = [];

    let res = [];

    helper(conf, 0, res);
    return res;

    function helper(conf, row, res) {
        if(row == n) {
            res.push(generateBoard(conf));
            return;
        }
        
        for(let col = 0; col<n; col++) {
            if(isValid(conf, row, col, n) == true) {
                conf[row] = col;
                helper(conf, row+1, res);
                conf.pop();
            }
        }
    }
}


//              [2,0]   2    2
function isValid(conf, row, col,n) {

    //for same row no checking

    //for column check
    for(let num of conf) {
        if(num == col) {
            return false;
        }
    }

    //for left and right diagonal upwards
    let count = 1;

    for(let i = row-1; i>=0; i--) {
        if((col+count < n && conf[i] == col+count) || (col-count >=0 && conf[i] == col-count)) {
            return false;
        }
        count++;
    }

    return true;
    
}


//[2,0,3,1] //clear
function generateBoard(conf) {
    let board = []; //["..Q" "Q..."]

    for(let row = 0; row < conf.length; row++) {
        let rowVal = '';
        for(let col = 0; col < conf.length; col++) {
            if(conf[row] == col) {
                rowVal = rowVal + 'Q';
                continue;
            }
            rowVal = rowVal + '.';
        }
        board.push(rowVal);
    }
    return board;
    
}
