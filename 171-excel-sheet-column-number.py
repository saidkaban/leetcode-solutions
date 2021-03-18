class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        s = 0
        # string is reversed in order to loop from end to beginning
        columnTitle = columnTitle[::-1]
        for index, char in enumerate(columnTitle):
            s = s + (26 ** index) * (alphabet.index(char) + 1)
        return s