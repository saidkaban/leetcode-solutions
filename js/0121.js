var maxProfit = function(prices) {
    let minPrice = 10001;
    let maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(price, minPrice);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
};