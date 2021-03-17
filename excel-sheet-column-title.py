# Comments will be added soon

class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        import string
        alphabet = string.ascii_uppercase
        answer = ""
        while columnNumber > 26:
            answer = answer + alphabet[(columnNumber % 26) - 1]
            if columnNumber % 26 == 0:
                columnNumber = columnNumber // 26 - 1
            else:
                columnNumber = columnNumber // 26
        answer = answer + alphabet[columnNumber - 1]        
        return answer[::-1]