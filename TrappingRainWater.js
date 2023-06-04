/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights) {
    let res = 0;

    //leftmax
    let left = [];
    let leftMax = 0;
    for(let i = 0; i<heights.length; i++) {
        left[i] = leftMax;
        leftMax = Math.max(leftMax, heights[i]);
    }

    //rightmax
    let right = [];
    let rightMax = 0;
    for(let i = heights.length-1; i>=0; i--) {
        right[i] = rightMax;
        rightMax = Math.max(rightMax, heights[i]);
    }

     for(let i = 1; i < heights.length-1; i++) {
        let tempRes = Math.min(left[i], right[i]) - heights[i];
        if(tempRes > 0) {
            res+=tempRes;
        }
     }

    return res;
}; 
