# 2022-05-19
# https://leetcode.com/problems/longest-continuous-increasing-subsequence/

def findLengthOfLCIS(nums):
    
    current_count = 1
    max_count = 1
    
    for index, num in enumerate(nums):
        
        if index - 1 >= 0:
            if nums[index - 1] < num:
                current_count += 1
                if current_count > max_count:
                    max_count = current_count
            else:
                current_count = 1
    
    return max_count
            
print(findLengthOfLCIS([1,3,5,4,7]));
