# https://leetcode.com/problems/reshape-the-matrix/

# class Solution:
#     def transpose(self, matrix: List[List[int]]) -> List[List[int]]:

#         new_matrix = []

#         for i in range(len(matrix[0])):
#             new_line = []
#             for j in range(len(matrix)):
#                 tmp = matrix[j][i]
#                 new_line.append(tmp)
#             new_matrix.append(new_line)
            
#         return new_matrix