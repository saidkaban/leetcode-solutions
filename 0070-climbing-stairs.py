class Solution:
    def climbStairs(self, n: int) -> int:
        stairs = [1, 2]
        if n == 1:
            return stairs[n - 1]
        elif n == 2:
            return stairs[n - 1]
        for i in range(2, n):
            stairs.append(stairs[i - 2] + stairs[i - 1])
        return stairs[n - 1]