// Can by of type 'T' or null
type OrNull<T> = T | null;
const nothing: OrNull<null> = null;
console.log(nothing);

// Can be a single element, or an array of 'T' type elements
type OneOrMany<T> = T | T[];
const soTrue: OneOrMany<boolean> = [true, true];
console.log(soTrue);
