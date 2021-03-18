# iterates through the list using while loop, if a number matching val
# is encountered, that number is popped from the list and the iterator
# is reduced by one since the list is now shorter
class Solution:
    def removeElement(self, nums, val: int) -> int:
        i = 0
        while i < len(nums):
            if nums[i] is val:
                nums.pop(i)
                i = i - 1
            i = i + 1
        return len(nums)