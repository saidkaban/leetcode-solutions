class Solution:
    def reverse(self, x: int) -> int:
        i = 0
        str_x = str(x)
        x_reversed = ""
        x_len = len(str_x)
        
        if(x < 0):
            x = abs(x)
            while i <  x_len - 1:
                add_to_reverse = x % 10
                x = x // 10
                x_reversed = x_reversed + str(add_to_reverse)
                i = i + 1
            while(int(x_reversed[0]) == 0):
                x_reversed = x_reversed[1:]
            x_reversed = "-" + x_reversed
        elif(x == 0):
            return 0
        else:
            while i < x_len:
                add_to_reverse = x % 10
                x = x // 10
                x_reversed = x_reversed + str(add_to_reverse)
                i = i + 1
            while(int(x_reversed[0]) == 0):
                x_reversed = x_reversed[1:]
        if(int(x_reversed) > 2 ** 31 - 1 or int(x_reversed) < -2 ** 31):
            return 0
        return x_reversed  