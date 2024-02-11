class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        squareRoot = num ** 0.5
        if squareRoot % 1 == 0.0:
            return True
        return False
