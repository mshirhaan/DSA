/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b);

    function helper(nums, idx, bag, trolly) {
        
        trolly.push([...bag]);
 
        for(let i = idx; i < nums.length; i++) {
            if(i!=idx && nums[i] == nums[i-1]) continue;
            bag.push(nums[i]);
            helper(nums, i+1, bag, trolly);
            bag.pop();
        }
        return trolly;
    }

    return helper(nums, 0, [], []);
};
