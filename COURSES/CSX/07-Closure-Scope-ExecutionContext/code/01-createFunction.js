function createFunction() {
  function greet() {
    return 'hello, world';
  }
  return greet;
}
const myFunction = createFunction();
// console.log(myFunction());