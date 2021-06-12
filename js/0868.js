var binaryGap = function(n) {
    let binaryNum = n.toString(2);
    let maxCount = 0;
    let count = 0;
    for (let num of binaryNum) {
        if (num == 0) {
            count++;
        }
        if (num == 1) {
            maxCount = Math.max(count, maxCount);
            count = 0;
        }
    }
    return maxCount;
};