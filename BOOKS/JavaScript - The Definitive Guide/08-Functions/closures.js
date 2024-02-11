let scope = "global scope";

function checkScope() {
  let scope = "local scope";
  function f() {
    return scope;
  }
  return f();
}

console.log(checkScope()); // => "local scope"

function checkScopeV2() {
  let scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}

console.log(checkScopeV2()()); // => "local scope"

// uniqueInteger() using a immediately invocek function
// expression to define a namespace and a closure that
// uses that namespace to keep its state private:
let uniqueInteger = (function () {
  let counter = 0;
  return function () {
    return counter++;
  };
})();

console.log(uniqueInteger());
console.log(uniqueInteger());

// It's possible for two or more nested functions to be
// defined within the same outer function and share the
// same scope.
function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}

let c = counter();
let d = counter();
c.count(); // 0
d.count(); // 0: they count independently
c.reset(); // resets count on c, returns undefined
c.count(); // 0: because we reset c
d.count(); // 1: d was not reset

// You can combine this closure technique with
// property getters and setters.
// Note that this function uses it's parameter
// n to hold the private state shared by the
// property accessor methods.

function counterV2(n) {
  // <= n is the private variable!
  return {
    // Getter
    get count() {
      return n++;
    },
    // Setter
    set count(m) {
      if (m > n) n = m;
      else throw Error("count can obly be set to a larger value");
    },
  };
}

let cV2 = counter(1000);
cV2.count; // => 1000
cV2.count; // => 1001
cV2.count = 2000;
cV2.count; // => 2000
cV2.count = 2000; // !Error

// * Function that defines a private variable and two
// * nested functions to get and set the value of that
// * variable. It adds these nested functions ad methods
// * of the object you specify.

function addPrivateProperty(o, name, predicate) {
  let value; // This is the property value

  // The getter method simply returns the value.
  o[`get${name}`] = function () {
    return value;
  };

  // The setter method stores the value or throws an exception if
  // the predicate rejects the value.
  o[`set${name}`] = function (v) {
    if (predicate && !predicate(v)) {
      throw new TypeError(`set${name}: invalid value ${v}`);
    } else {
      value = v;
    }
  };
}

// The following code demonstrates the addPrivateProperty() method.
let o = {}; // Here is an empty object

// Add property accessor methods getName and setName()
// Ensure that only string values are allowed addPrivateProperty(o, "Name", x => typeof x === "string");
o.setName("Frank"); // Set the property value
o.getName(); // => "Frank"
o.setName(0); // !TypeError: try to set a value of the wrong type

// call() and apply()

// trace() function
// Replace the method named m of the object o with a version that logs
// messages before and after invoking the original method.
function trace(o, m) {
  let original = o[m]; // Remember original method in the closure.
  o[m] = function (...args) {
    console.log(new Date(), "Entering:", m);
    let result = original.apply(this, args);
    console.log(new Date(), "Exiting:", m);
    return result;
  };
}

// bind()

function f(y) {
  return this.x + y;
} // This function needs to be bound
let oV3 = { x: 1 }; // An object we'll bind to
let g = f.bind(oV3); // Calling g(x) invoces f() on oV3
g(2); // => 3
let p = { x: 10, g }; // Invoke g() as a method of this object
p.g(2); // => 3: g is still bound to oV3, not p

// memoization

// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations
function memoize(f) {
  const cache = new Map();

  return function (...args) {
    // Create a string version of the arguments to use as a cache key
    let key = args.length + args.join("+");
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = f.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}
