// 2022-05-30
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

let s = "abbaca";
const arr = [];

for (char of s) {
  if (arr[arr.length-1] != char) {
    arr.push(char);
  } else {
    arr.pop()
  }
}

s = arr.join("")
console.log(s)
