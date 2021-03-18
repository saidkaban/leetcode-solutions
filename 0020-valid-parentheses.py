class Solution:
    def isValid(self, s: str) -> bool:
        openers = "({["
        closers = ")}]"
        my_stack = []
        for el in s:
            if el in openers:
                my_stack.append(el)
            elif not my_stack:
                return False
            else:
                if closers.index(el) == openers.index(my_stack[-1]):
                    my_stack.pop()
                else:
                    return False
        
        if not my_stack:
            return True