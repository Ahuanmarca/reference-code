// ADD CODE HERE
function prioritize(array, callback) {
  const output = [[], []];
  array.forEach((element) => {
    callback(element) ? output[0].push(element) : output[1].push(element);
  });
  return output.flat();
}

// Uncomment these to check your work!
function startsWithS(str) {
  return str[0].toLowerCase() === "s";
}
const tvShows = ["curb", "rickandmorty", "seinfeld", "sunny", "friends"];
console.log(prioritize(tvShows, startsWithS));
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
