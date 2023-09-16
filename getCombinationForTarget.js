function getCombinationForTarget(candidates, target) {
    

    function helper(need) {

        if(need == 0) return [];
        if(need == - 1) return null;
        
        for(let i = 0; i < candidates.length; i++) {
            let bag = helper(need - candidates[i]);
            if(bag!= null) {
                bag.push(candidates[i]);
                return bag;
            }
        }
        return null;
    }

    return helper(target);
}

getCombinationForTarget([3, 4], 15);
