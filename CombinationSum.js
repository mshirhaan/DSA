var combinationSum = function(candidates, target) {

    function helper(i, sum, trolly, bag) {
        
        if(i == candidates.length) {
            if(sum == target) {
                trolly.push([...bag]);
            }
            return;
        }
        
        bag.push(candidates[i]);
        helper(i+1, sum+candidates[i], trolly, bag);
        bag.pop();
        helper(i+1, sum, trolly, bag);
    }

    let trolly = [];
    
    helper(0, 0, trolly, []);
    return trolly;
    
};


console.log(combinationSum([1,2,3,4,5,6,7,8,9], 7))
