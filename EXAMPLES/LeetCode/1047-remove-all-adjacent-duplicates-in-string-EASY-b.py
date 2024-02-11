s = "abbaca"

arr = []
last_char = None

for char in s:

    if char != last_char:
        arr.append(char)
        last_char = char
    else:
        arr.pop()
        last_char = arr[-1] if arr else None

s = "".join(arr)
print(s)
