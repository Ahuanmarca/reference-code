// ADD CODE HERE
function multiMap(valuesArr, callbacksArr) {
  const output = {};
  valuesArr.forEach((value) => {
    output[value] = [];
    callbacksArr.forEach((callback) => {
      output[value].push(callback(value));
    });
  });
  return output;
}

// Uncomment these to check your work!
function uppercaser(str) {
  return str.toUpperCase();
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
  return str + str;
}
const items = ["catfood", "glue", "beer"];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
