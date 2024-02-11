class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        elements = []
        for row in mat:
            for element in row:
                elements.append(element)
                
        if len(elements) != r * c:
            return mat
        
        new_mat = []
        counter = 0
        
        for i in range(r):
            new_row = []
            for j in range(c):
                new_row.append(elements[counter])
                counter += 1
            new_mat.append(new_row)
                
        return new_mat