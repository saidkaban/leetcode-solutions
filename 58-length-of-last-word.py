class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.split()
        try:
            return len(words[-1])
        except:
            return 0