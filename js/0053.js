let maxSubArray = function(nums) {
    let bestSum = (-10) ** 5 - 1;
    let currentSum = 0
    for (let num of nums) {
        currentSum = Math.max(num, currentSum + num);
        bestSum = Math.max(bestSum, currentSum);
    }
    return bestSum;
};