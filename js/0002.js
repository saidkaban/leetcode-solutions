var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let other_i = 
            nums.indexOf(target - nums[i], i+1)
        if (other_i > 0) {
            return [i, other_i]
        }
    }
};

console.log(twoSum([1, 2, 3, 4, 5], 6));