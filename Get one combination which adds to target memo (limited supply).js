function combination(candidates, target, memo) {

let count = 0;
    
    function helper(i, need , memo = {}) {
        if(need < 0) return null
        if(memo[i + ","+ need] !== undefined) return  memo[i + ","+ need];

        
        count++;
        if(i == candidates.length) {
            if(need == 0) {
                return [];
            } else {
                return null;
            }
        }
        
        let bag = helper(i+1, need-candidates[i], memo);
        if(bag) {
            bag.push(candidates[i]);
            memo[i + ","+ need] = bag
            return bag;
        }

         
        let result =  helper(i+1, need, memo);
        memo[i + ","+ need] = result;
        console.log(count)
        return result;
        
    }

   
    return helper(0, target, memo);
}

let memo = {};

combination([2,2,2,2,2,2,12,12,12,12,12,12,12,12,12], 50, memo)


