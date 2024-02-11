// Two vectors represented as arrays
const vec1 = [1, 2];
const vec2 = [3, 4];

// No destructuring
function vectorAdd(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

console.log(vectorAdd(vec1, vec2));

// Desctructure the two vextor arguments
// into more clearly named parameters.
function vectorAddV2([x1, x2], [y1, y2]) {
  return [x1 + y1, x2 + y2];
}

console.log(vectorAddV2(vec1, vec2));

// Two vectors represented as objects
const vec3 = { x: 1, y: 2 };
const vec4 = { x: 3, y: 4 };

// Multiply a vector {x, y} by a scalar value
// We desctructure the parameters of the vector object
function vectorMultiply({ x, y }, scalar) {
  return { x: x * scalar, y: y * scalar };
}

console.log(vectorMultiply(vec3, 2));

// To add object-based vectors, we need to destructure
// the properties into parameters with different names
function vectorAddV3(
  { x: x1, y: y1 }, // Unpack 1st object
  { x: x2, y: y2 } // Unpack 2nd object
) {
  return { x: x1 + x2, y: y1 + y2 };
}

console.log(vectorAddV3(vec3, vec4));

// We can define parameter defaults with destructured parameters
// Function for vector multiplication that words with 2D and 3D vectors

// Multiply the vector {x, y} or {x, y, z} by a scalar value
function vectorMultiplyV2({ x, y, z = 0 }, scalar) {
  return { x: x*scalar, y: y*scalar, z: z*scalar };
}

console.log(vectorMultiplyV2(vec3, 2));


