// import SCRIPTS from "./script-data"; // works ok with BUN, not with NODE
const SCRIPTS = require("./script-data");

// var SCRIPTS = [
//   {
//     name: "Adlam",
//     ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
//     direction: "rtl",
//     year: 1987,
//     living: true,
//     link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
//   },
// ]

// FUNCTION characterScript(code)
// Receives character code, returns script it belongs to
// ...the first one where the code is within the script's ranges
function characterScript(code) {
  for (const script of SCRIPTS) {
    if (
      script.ranges.some((range) => {
        const [low, high] = [range[0], range[1]];
        return low <= code && code < high;
      })
    ) {
      return script;
    }
  }
  return null;
}
// console.log(characterScript(121)); // → {name: "Latin", …}

// FUNCTION countBy(items, groupName)
// Gets and array and a callback as arguments. Iterates through the
// array and uses the callback to define "names" to group the array
// elements (can group by even / odd, or by any other criteria).
// Then counts the elements on each group and returns the counts.
function countBy(items, groupName) {
  const output = [];
  for (const item of items) {
    const name = groupName(item);
    const itemIndex = output.findIndex((n) => n.name === name);
    if (itemIndex === -1) {
      output.push({ name: name, count: 1 });
    } else {
      output[itemIndex].count++;
    }
  }
  return output;
}
// console.log (countBy([ 1, 2, 3, 4, 5 ], n => !(n % 2) ? "even" : "odd"));
// → [{name: "even", count: 2}, {name: "odd", count: 3}]

// FUNCTION textScripts(text)
// - find percentage of characters for each script
// - return readable string like "68% Han, 32% Latin"
// - if none are found, return "No scripts were found"
function textScripts(text) {
  const scriptCounts = countBy(text, (character) => {
    const foundScript = characterScript(character.charCodeAt(0));
    return foundScript ? foundScript.name : "none";
  }).filter((n) => n.name !== "none");

  if (scriptCounts.length === 0) return "No scripts were found";
  const total = scriptCounts.reduce((acc, curr) => acc + curr.count, 0);

  return scriptCounts
    .map((script) => {
      const percentage = Math.round((100 / total) * script.count);
      return `${percentage}% ${script.name}`;
    })
    .join(", ");
}

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
// console.log(textScripts("!@#$%^&*("));
// → No scripts were found

/* DOMINANT WRITING DIRECTION
Write a function that computes the dominant writing direction
in a string of text. Remember that each script object has a 
direction property that can be "ltr" (left to right), "rtl" 
(right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the 
characters that have a script associated with them.
The characterScript and countBy functions defined earlier 
in the chapter are probably useful here. */

function dominantDirection(text) {
  // Your code here.
  const writingDirectionCounts = countBy(text, (char) => {
    const foundScript = characterScript(char.charCodeAt(0));
    return foundScript ? foundScript.direction : "none";
  }).filter(n => n.name !== "none");

  if (writingDirectionCounts.length === 0) return "No scripts were found";

  const dominant = writingDirectionCounts.reduce((acc, curr) => {
    return acc.count < curr.count ? curr : acc;
  })
  return dominant.name;
}
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
