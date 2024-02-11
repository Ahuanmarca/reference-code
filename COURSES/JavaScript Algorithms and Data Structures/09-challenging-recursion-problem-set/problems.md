# Problems

## Coding Exercise 15: `reverse`
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
``` js
function reverse(str){
    // add whatever parameters you deem necessary - good luck!
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
```

## Coding Exercise 16: `isPalindrome`
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
``` js
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(){
  // add whatever parameters you deem necessary - good luck!
}
```

## Coding Exercise 17: `someRecursive`
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
``` js
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(){
  // add whatever parameters you deem necessary - good luck!
}
```

## Coding Exercise 18: `flatten`
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
``` js
function flatten(){
  // add whatever parameters you deem necessary - good luck!
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
```

## Coding Exercise 19: `capitalizeWords`
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
``` js
function capitalizeWords () {
  // add whatever parameters you deem necessary - good luck!
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
```

## Coding Exercise 20: `nestedEvenSum`
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
``` js
function nestedEvenSum () {
  // add whatever parameters you deem necessary - good luck!
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
```

## Coding Exercise 21: `capitalizeFirst`
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
``` js
function capitalizeFirst () {
  // add whatever parameters you deem necessary - good luck!
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

```

## Coding Exercise 22: `stringifyNumbers`
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
``` js
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
```

## Coding Exercise 23: `collectStrings`
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
``` js
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
```