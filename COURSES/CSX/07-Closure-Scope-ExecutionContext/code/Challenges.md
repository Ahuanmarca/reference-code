# Challenge 1: createFunction

Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

```js
const myFunction = createFunction();
 // Let's call the function we created and log its return value
console.log(myFunction()); //should log: 'hello world'
```

When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

# Challenge 2: createFunctionWithInput

Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.

```js
const sampleFunc = createFunctionWithInput('sample');
const helloFunc = createFunctionWithInput('hello');

// Now we'll call the functions we created and log the result
console.log(sampleFunc()); 
// should log 'sample' to the console
console.log(helloFunc());
// should log 'hello' to the console
```

Starter code:

```js
// ADD CODE HERE

// UNCOMMENT THESE TO TEST YOUR WORK!
// const sampleFunc = createFunctionWithInput('sample');
// console.log(sampleFunc()); // should log: 'sample'
// const helloFunc = createFunctionWithInput('hello');
// console.log(helloFunc()); // should log: 'hello'
```

# Challenge 3: addByX

Now we are going to create a function addByX that returns a function that will add an input by x.

```js
const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
```

Starter code:
```js
// ADD CODE HERE

const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output

// Now call addByTwo with an input of 2 and log the output

```

# Challenge 4: once

Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

Starter code:
```js
// ADD CODE HERE

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(addByTwoOnce(5));  //should log 7
// console.log(addByTwoOnce(10));  //should log 7
// console.log(addByTwoOnce(9001));  //should log 7
```

# Challenge 5: after

Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

Starter code:
```js
// ADD CODE HERE

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> 'hello world' is printed
```

# Challenge 6: delay

Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();

Starter code:
```js
// ADD CODE HERE

// UNCOMMENT THE CODE BELOW TO TEST DELAY
// let count = 0;
// const delayedFunc = delay(() => count++, 1000);
// delayedFunc();
// console.log(count); 												 // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
```

# Challenge 7: saveOutput

Create a function `saveOutput` that accepts a function (that will accept one argument), and a string (that will act as a password). `saveOutput` will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // should log: 4
// console.log(multBy2AndLog(9)); // should log: 18
// console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
```

# Challenge 8: cycleIterator

Create a function `cycleIterator` that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

Starter code
```js
// ADD CODE HERE

// Uncomment these to check your work!
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun'
// console.log(getDay()); // should log: 'Fri'
```

# Challenge 9: defineFirstArg

Create a function `defineFirstArg` that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 

`defineFirstArg` will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 

Additional arguments needed by the passed-in function will need to be passed into the returned function.

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // should log: 15
```

# Challenge 10: hobbyTracker

Create a function `hobbyTracker` that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. `hobbyTracker` should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

```js
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);

updateHobbies('yoga', 2); 
// { yoga: 2, baking: 0, piano: 0 }

updateHobbies('baking', 3);
// { yoga: 2, baking: 3, piano: 0 }

updateHobbies(); 
// 'tracker has been reset!'
```

Starter code:
```js
function hobbyTracker(hobbies) {
  
  
}


// Uncomment the code below to check your code:
// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
// updateHobbies('yoga', 2);
// updateHobbies('baking', 4);
// updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
```

# Challenge 11: dateStamp

Create a function `dateStamp` that accepts a function and returns a function. 

The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

Starter code:

```js
// ADD CODE HERE

// Uncomment these to check your work!
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
```