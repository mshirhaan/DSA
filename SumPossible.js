function sumPosibble(candidates, target, memo) {
    

    function helper(need, memo = {}) {
        if(memo[need] != undefined) return memo[need]
        console.log('checking for need', need)
        if(need == 0) return true;
        if(need < 0) {memo[need] =  false; return false;}
        
        for(let i = 0; i<candidates.length; i++) {
            let newNeed = need-candidates[i];
            if(helper(newNeed, memo)) {
                memo[need] = true;
                return true;
            }
        }
        memo[need] = false;
        return false;
    }

    return helper(target, memo);
}

let memo = {}
sumPosibble([2,2,2,2,4,6], 151, memo);
console.log(memo)
