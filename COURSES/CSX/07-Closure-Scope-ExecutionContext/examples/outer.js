function outer() {
  let counter = 0;
  function increment() {
    if (counter === 1) console.log('BOO!');
    counter++;
  }
  function decrement() {
    counter--;
    if (counter === 0) console.log('Ahhh!!!');
  }
  return [ increment, decrement ];
}

const [ myFunc, anotherFunc ] = outer();
myFunc();
myFunc(); 
anotherFunc();
anotherFunc();

// console.log(counter); // Can't, but the variable still exists in the backpack
