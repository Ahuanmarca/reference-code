type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];

console.log(goodRes);

// Error: Type 'string' is not assignable to type 'number'.
// goodRes[0] = "404";

// TypeScript complains if you try to assing a string to a number
// ...but not if I push additional elements to the tuple
goodRes.push('Not Found');

console.log(goodRes);
