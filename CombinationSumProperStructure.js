var combinationSum = function(candidates, target) {

    function helper(i, need, memo = {}) {

        if(need == 0) {
            return [[]];
        }
        if(need < 0 ||  i == candidates.length) {
            return null;
        }

        if(memo[i+","+need] !== undefined) {
            return memo[i+","+need];
        }
        
        let resultBag = [];
        let leftBags = helper(i+1, need-candidates[i], memo);
        let rightBags = helper(i+1, need, memo);

        if(leftBags == null && rightBags == null) {
            memo[i+","+need] = null;
            return null
        };
        
        if(leftBags!== null) {
            leftBags.forEach(leftBag => {
                leftBag.push(candidates[i]);
                resultBag.push(leftBag);
            })
        }
        
        if(rightBags!== null) {
            rightBags.forEach(rightBag => {
                resultBag.push(rightBag);
            })
        }

        memo[i+","+need] = [...resultBag];
        return resultBag;
        
    }
    
    let trolly = helper(0, target );
    return trolly;
    
};


combinationSum([5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5], 70)
