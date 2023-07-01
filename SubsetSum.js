function subsets(nums, sum, index = 0, bag = [], bagSum = 0, trolly = []) {

    if(index == nums.length) {
        if(bagSum== sum) {
            trolly.push([...bag]);
        }
        return trolly;
    }
    
    bag.push(nums[index]);
    subsets(nums, sum, index+1, bag, bagSum + nums[index], trolly);
    bag.pop();
    return subsets(nums, sum, index+1, bag, bagSum, trolly);
}
