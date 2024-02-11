# Solution with hash set to compare and replace

s = "abbaca"

duplicates = (
    "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh","ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz"

)

prev_length = -1

while (prev_length != len(s)):
    prev_length = len(s)
    for key in duplicates:
        s = s.replace(key, "")

print(s)
