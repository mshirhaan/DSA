
function subsets(nums, sum, index = 0, bag = [], bagSum = 0, trolly = []) {

    if(bagSum > sum) {
        return trolly;
    }

    if(bagSum == sum) {
        trolly.push([...bag]);
        return trolly;
    }

    if(index == nums.length) {
        return trolly;
    }
    
    bag.push(nums[index]);
    subsets(nums, sum, index, bag, bagSum + nums[index], trolly);
    if(trolly.length == 1) return trolly;
    bag.pop();
    return subsets(nums, sum, index+1, bag, bagSum, trolly);
}
