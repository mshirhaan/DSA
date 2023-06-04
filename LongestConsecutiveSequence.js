/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set();

    for(let num of nums) {
        set.add(num);
    }

    let max = 0;
    let count = 1;

    for(let num of nums) {
        if(!set.has(num-1)) {
            let curr = num+1;
            while(set.has(curr)) {
                curr++;
                count++;
            }
            max = Math.max(max, count);
            count = 1;
        }
    }

    return max;
};
