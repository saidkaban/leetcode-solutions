class Solution:
    def romanToInt(self, s: str) -> int:
        symbols = ["I", "V", "X", "L", "C", "D", "M"]
        values = [1, 5, 10, 50, 100, 500, 1000]
        count_list = [values[symbols.index(element)] for element in s]
        special_cases = ["IX", "IV", "XL", "XC", "CD", "CM"]
        special_case_subs = [2, 2, 20, 20, 200, 200]
        special_case_count = [s.count(special_case) for special_case in special_cases]
        total_sub = 0
        for index, count in enumerate(special_case_count):
            total_sub = total_sub + count * special_case_subs[index] 
        return sum(count_list) - total_sub