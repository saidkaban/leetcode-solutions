class Solution:
    def plusOne(self, digits):
        i = 0
        digits.reverse()
        try:
            while True:
                if digits[i] is not 9:
                    digits[i] = digits[i] + 1
                    break
                digits[i] = 0
                i = i + 1
        except:
            digits.append(1)
        digits.reverse()
        return digits