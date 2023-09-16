function getCombinationForTarget(candidates, target) {
    

    function helper(need, memo = {}) {
        if(memo[need] !== undefined) {
            return memo[need];
        }
           
        if(need == 0) return [];
        if(need < 0) return null;

         console.log(need)
        
        for(let i = 0; i < candidates.length; i++) {
            let bag = helper(need - candidates[i], memo);
            if(bag!= null) {
                bag.push(candidates[i]);
                memo[need] = [...bag];
                return bag;
            }
        }
        memo[need] = null;
        return null;
    }

    return helper(target);
}

getCombinationForTarget([2,4],701);
