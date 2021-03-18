class Solution:
    def longestCommonPrefix(self, strs) -> str:
        def list_same(l): 
            ele = l[0] 
            chk = True

            # Comparing each element with first item  
            for item in l: 
                if ele != item: 
                    chk = False
                    break
            return chk
                
        i = 0
        if strs:
            while i < min(list(map(len, strs))):
                letter_list = [x[i] for x in strs]
                if list_same(letter_list):
                    i = i + 1
                else:
                    break
            return strs[0][:i]
        else:
            return ""