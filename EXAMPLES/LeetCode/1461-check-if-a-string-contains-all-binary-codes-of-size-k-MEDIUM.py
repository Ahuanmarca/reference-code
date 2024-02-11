class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        
        possible_codes = 2 ** k
        found_codes = set()
        
        # Add all sub-strings of size k to the found_codes set
        for i in range(k, len(s)+1):
            found_codes.add(s[i-k:i])
                
        print(f"found codes: {found_codes}")
        
        # Compare possible_codes with the length of found_codes
        return len(found_codes) == possible_codes
