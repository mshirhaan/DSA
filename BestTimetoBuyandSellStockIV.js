/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k,prices) {

    function helper(i, chances, canIBuy, map = {}) {
       if(map[i+","+chances+","+canIBuy] !== undefined) {
           return map[i+","+chances+","+canIBuy];
       }
       
       if(chances == 0) {
           return 0;
       }
        if(i == prices.length) {
            return 0;
        }
        if(canIBuy) {
          let buy = -prices[i] + helper(i+1, chances, false, map);
          let dontBuy = helper(i+1, chances, true, map);
          let max = Math.max(buy, dontBuy, 0);
          map[i+","+chances+","+canIBuy] = max;
          return max;
        } else {
            let sell = prices[i] + helper(i+1, chances-1, true, map);
            let dontSell =  helper(i+1, chances, false, map);
            let max = Math.max(sell, dontSell, 0);
            map[i+","+chances+","+canIBuy] = max;
            return max;
        }
    }

    let res =  helper(0, k, true);
    return res;
};
