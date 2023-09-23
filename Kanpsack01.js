class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val, n)
    { 
        let count = 0;
        
       function helper(i, availableW, memo = {} ) {
           count++;
           
           if(i == n) {
               return 0;
           }
           
           if(memo[i + "," + availableW] !== undefined) {
               return  memo[i + "," + availableW];
           }
           
           let take = 0;
           let notTake = 0;
           
            //take
            if(availableW - wt[i] >= 0)
                take = val[i] + helper(i+1, availableW - wt[i], memo)
                
            //not take
            notTake = helper(i+1, availableW, memo)
            
            memo[i + "," + availableW] = Math.max(take, notTake);
            return memo[i + "," + availableW];
            
       }
       
       let res =  helper(0, W);
       console.log(count);
       return res;
    }
}

let sol = new Solution()
let res = sol.knapSack(125, [5,6,8,3,5,9], [ 4,6,9,4,8,3], 6)
