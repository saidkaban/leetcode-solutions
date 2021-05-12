var containsDuplicate = function(nums) {
    let counts = {}
    for (let num of nums) {
        if (counts[num] !== undefined) return true; 
        counts[num] = counts[num] > 0 ? counts[num] + 1 : 1
    }
    return false;
};