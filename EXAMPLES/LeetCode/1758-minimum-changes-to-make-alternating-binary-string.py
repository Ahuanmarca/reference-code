# https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

class Solution:
    def minOperations(self, s: str) -> int:
    
        foo = 0
        bar = 0
        
        for i in range(len(s)):
            
            if i % 2 == 0:
                
                # case "0101..."
                if s[i] != "0":
                    foo += 1
                
                # case "1010..."
                if s[i] != "1":
                    bar += 1
                
            elif i % 2 == 1:
                               
                if s[i] != "1":
                    foo += 1
                    
                if s[i] != "0":
                    bar += 1

        return min(foo, bar)
