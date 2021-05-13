var kLengthApart = function(nums, k) {
    let prevInd = -k - 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            if (i - prevInd <= k) {
                return false;
            }
            prevInd = i;
        }
    }
    return true;
};