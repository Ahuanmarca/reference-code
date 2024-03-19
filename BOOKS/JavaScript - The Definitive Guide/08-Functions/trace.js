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
