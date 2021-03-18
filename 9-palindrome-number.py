class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        reversed_x = x[::-1]
        return reversed_x == x