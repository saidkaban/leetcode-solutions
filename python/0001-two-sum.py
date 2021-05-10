def twoSum(nums, target):
    for i in range(len(nums)):
        diff = target - nums[i]
        try:
            other_i = nums.index(diff, i + 1)
            return [i, other_i]
        except:
            continue
    return answer

    print(twoSum([1, 2, 3, 4, 5], 6));