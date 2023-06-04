/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxP = 0;

    let min = prices[0];

    for(let price of prices) {
        if(price < min) {
            min = price;
        } else {
            let checkProfit = price - min;
            if(checkProfit > maxP) maxP = checkProfit;
        }
    }

    return maxP;
};
