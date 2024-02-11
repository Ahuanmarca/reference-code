const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

// To tally the votes:
const results = votes.reduce((tally, val) => {
  if (!tally[val]) tally[val] = 0;
  tally[val]++;
  return tally;
}, {});

console.log(results);
// { y: 7, n: 6 }
