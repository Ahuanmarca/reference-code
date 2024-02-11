# Challenge 1: pluralize

Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// const animals = ["dog", "cat", "tree frog"];
// console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
```

# Challenge 2: map

Create a function `subtractTwo` that accepts a number and returns that number minus 2.

Then create a function `map` that takes two inputs -

1. an array of numbers (a list of numbers)

2. a 'callback' function - this function is applied to each element of the array (inside of the function 'map')

Have your `map` function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native `map` or `forEach` method.

```js
map([3,4,5], subtractTwo); //-> [1,2,3]
subtractTwo(10); //-> 8
subtractTwo(12); //-> 10
```

Starter code:

```js
// ADD CODE HERE

// Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
```

# Challenge 3: forEach

## Part 1

Create a function `forEach` which takes an array and a callback, and runs the callback on each element of the array. `forEach` does not return anything. Please do not use the native `forEach` or map method.

```js
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'
```

## Part 2

Now let's rebuild `map` from the previous challenge. This time instead of using a `for` loop, you're going to use the `forEach` we just created.

Starter code:

```js
// ADD CODE HERE

// Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
```

# Challenge 4: filterArray

Add code to the functions `func1` and `func2` in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

Starter code:
```js
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  // ADD CODE HERE
  return !(num % 2);
}
function func2(num) {
  // ADD CODE HERE
  return !!(num % 2);
}

// Uncomment these to check your work!
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]
```

# Challenge 5: eitherFilter

Add code to the function `eitherFilter` in the place marked "ADD CODE HERE" in order to achieve the desired console logs. The array returned from `eitherFilter` should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into `eitherFilter`.

Starter code:
```js
function eitherFilter(array, callback1, callback2) {
  // ADD CODE HERE

}

// Uncomment these to check your work!
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;
// console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]
```

# Challenge 6: eitherCallback

Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. Notice that the lines of code testing your work are using functions and an array from previous challenges. The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

Starter code
``` js
// ADD CODE HERE

// Uncomment these to check your work!
// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) newArray.push(array[i]);
//   }
//   return newArray;
// }

// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
// const over100 = (n) => n > 100;
// const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]
```

# Challenge 7: reduce

The function reduce takes an array and reduces the elements to a single value.

The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.

```js
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0); //-> 8
```

Here's how it works:

1. The function has an "accumulator value". Its job is to keep track of the accumulated output of each loop. It starts out equal to the initialValue.
2. The array is iterated over, passing the accumulator and the next array element as arguments to the callback, and in that order.
3. The callback's return value becomes the new accumulator value.
4. The next loop executes with this new accumulator value.

In the example above, the accumulator begins at 0. `add(0,4)` is called. The accumulator's value is now 4. Then `add(4, 1)` makes it 5. Finally `add(5, 3)` brings it to 8, which is returned.

Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

Starter code
``` js
// ADD CODE HERE

// Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0)); // should log 8
```

# Challenge 8: intersection

Construct a function `intersection` that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

Starter code:

```js
// ADD CODE HERE

// Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
```


# Challenge 9: union

Construct a function `union` that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
```

# Challenge 10: objOfMatches

Construct a function `objOfMatches` that accepts two arrays and a callback. `objOfMatches` will build an object and return it. To build the object, `objOfMatches` will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
```

#  Challenge 11: arrToObj

Add code to the function `arrToObj` in the place marked "ADD CODE HERE" in order to achieve the desired console logs. `arrToObj` should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.

Starter code:
```js
function arrToObj(array, callback) {
  // ADD CODE HERE
}

// Uncomment these to check your work!
// const arrOfStrings = ['beer', 'glue'];
// const capitalize = str => str.toUpperCase();
// console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
```

# Challenge 12: joinAndMap

Construct a function `joinAndMap` with three parameters: array1, array2, and a callback function. The function should combine the two arrays then invoke the callback function on each element, returning the resulting array. This function should not mutate the passed-in arrays.

```js
// ADD CODE HERE

// Uncomment these to check your work!
// const arrRed = ['strawberry', 'cherry', 'wine'];
// const arrBlue = ['blueberry', 'sky', 'ocean'];
// const capitalize = str => str.toUpperCase();
// console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']
```

# Challenge 13: multiMap

Construct a function `multiMap` that will accept two arrays - an array of values and an array of callbacks. `multiMap` will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// function uppercaser(str) { return str.toUpperCase(); }
// function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
// function repeater(str) { return str + str; }
// const items = ['catfood', 'glue', 'beer'];
// const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
```

# Challenge 14: majority

Create a function `majority` that accepts an array and a callback. The callback will return either `true` or `false`. `majority` will iterate through the array and perform the callback on each element until it can be determined if the `majority` of the return values from the callback are `true`. If the number of `true` returns is equal to the number of `false` returns, `majority` should return `false`.

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
```

# Challenge 15: prioritize

Create a function `prioritize` that accepts an array and a callback. The callback will return either `true` or `false`. `prioritize` will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of `true` come first in the array, and the rest of the elements come second.

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
```

# Challenge 16: countBy

Create a function `countBy` that accepts an array and a callback, and returns an object. `countBy` will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// function evenOdd(n) {
//   if (n % 2 === 0) return 'even';
//   else return 'odd';
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
```

# Challenge 17: groupBy

Create a function `groupBy` that accepts an array and a callback, and returns an object. `groupBy` will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

Starter code:
```js
// ADD CODE HERE

// Uncomment these to check your work!
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

```

# Challenge 18: goodKeys

Create a function `goodKeys` that accepts an object and a callback. The callback will return either `true` or `false`. `goodKeys` will iterate through the object and perform the callback on each value. `goodKeys` will then return an array consisting only the keys whose associated values yielded a `true` return value from the callback.

```js
// ADD CODE HERE

// Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
```