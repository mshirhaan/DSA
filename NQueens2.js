/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
function totalNQueens(n) {

    let conf = [];

    return helper(conf, 0);

    function helper(conf, row) {
        if(row == n) {
            return 1;
        }
        let count = 0;
        for(let col = 0; col<n; col++) {
            if(isValid(conf, row, col, n) == true) {
                conf[row] = col;
                count+= helper(conf, row+1);
                conf.pop();
            }
        }
        return count;
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
