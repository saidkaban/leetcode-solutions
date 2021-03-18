class Solution:
    def addBinary(self, a: str, b: str) -> str:
        diff = max(len(a), len(b)) - min(len(a), len(b))
        if diff > 0:
            longer = max([a, b], key=len)
            shorter = min([a, b], key=len)
            shorter = "0" * diff + shorter
        else:
            shorter = a
            longer = b
        bin_sum = ""
        next_sum = 0
        for i in range(1, len(longer) + 1):
            col_sum = int(shorter[-i]) + int(longer[-i]) + next_sum
            print(col_sum, shorter[-i], longer[-i])
            if col_sum == 0:
                bin_sum = bin_sum + "0"
                next_sum = 0
            elif col_sum == 1:
                bin_sum = bin_sum + "1"
                next_sum = 0
            elif col_sum ==2:
                bin_sum = bin_sum + "0"
                next_sum = 1
            else:
                bin_sum = bin_sum + "1"
                next_sum = 1
        if next_sum == 1:
            bin_sum = bin_sum + "1"
        return bin_sum[::-1]