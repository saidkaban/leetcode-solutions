var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let i = 0;
    while (true) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);
            i += 1;
        } else {
            return nums[i];
        }
    }
};