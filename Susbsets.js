function subsets(nums, index = 0, bag = [], res = []) {

    if(index == nums.length) {
        res.push([...bag]);
        return res;
    }
    
    bag.push(nums[index]);
    index = index+1;
    subsets(nums, index, bag, res);
    bag.pop();
    return subsets(nums, index, bag, res);
}
