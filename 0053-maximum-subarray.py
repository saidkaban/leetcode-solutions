class Solution:
    def maxSubArray(self, nums) -> int:
        best_sum = float("-Inf")
        current_sum = 0
        for num in nums:
            current_sum = max(num, current_sum + num)
            best_sum = max(best_sum, current_sum)
        return best_sum