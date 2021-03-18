class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        needle_len = len(needle)
        if not needle_len:
            return 0
        for i in range(len(haystack)):
            if haystack[i] == needle[0]:
                if haystack[i:(i + needle_len)] == needle:
                    return i
        return -1