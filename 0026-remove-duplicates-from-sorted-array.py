class Solution:
    def removeDuplicates(self, nums) -> int:
        i = 0
        for element in nums:
            to_be_deleted = nums.count(element) - 1
            del nums[(i + 1):(i + 1 + to_be_deleted)]
            i = i + 1
        return len(nums)