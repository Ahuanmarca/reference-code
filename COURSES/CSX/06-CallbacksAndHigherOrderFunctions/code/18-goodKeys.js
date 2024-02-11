// ADD CODE HERE
function goodKeys(obj, callback) {
  const output = [];
  for (let key in obj) {
    if (callback(obj[key])) {
      output.push(key);
    }
  }
  return output;
}

// Uncomment these to check your work!
const sunny = {
  mac: "priest",
  dennis: "calculator",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === "bird";
}
console.log(goodKeys(sunny, startsWithBird)); 
// should log: ['charlie', 'dee']
