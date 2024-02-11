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

// SCRIPTS AND CHARACTER CODES
// FUNCTION characterScript(code)
// - Only argument is a character code (integer)
// - Iterates through SCRITPS
// - Finds the first script where the code is withing the script ranges
// - Returns the matching script (the whole object)

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => { /*😵‍💫*/
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
// console.log(characterScript(121)); // → {name: "Latin", …}

// RECOGNIZING TEXT
// FUNCTION countBy(items, groupName)
// Gets and array and a callback as arguments. Iterates through the
// array and uses the callback to define "names" to group the array
// elements (can group by even / odd, or by any other criteria).
// Then counts the elements on each group and returns the counts.
// countBy([ 1, 2, 3, 4, 5 ], (n) => {
// return !(n % 2) === 0 ? "even" : "odd";
// }
//  → [ { name: "even", count: 2 }, { name: "odd", count: 3 } ]

function countBy(items, groupName) {
  const counts = [];
  for (const item of items) {
    const name = groupName(item);
    const known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

// FUNCTION textScripts(text)
// - find out number of characters present for each script
// - if none are found, return "No scripts found"
// - return result as readable string "68% Han, 32% Latin"

function textScripts(text) {
  const scripts = countBy(text, (char) => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
// console.log(textScripts("តួ漢อั漢Ё𡨸ចិ漢かក្រន字សЖจี"));

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
  }).filter((n) => n.name !== "none");

  if (writingDirectionCounts.length === 0) return "No scripts were found";

  const dominant = writingDirectionCounts.reduce((acc, curr) => {
    return acc.count < curr.count ? curr : acc;
  });
  return dominant.name;
}
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
