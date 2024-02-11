function hobbyTracker(hobbies) {
  const cacheObj = Object.fromEntries(hobbies.map(n => [ n, 0 ]));
  function newFunc(hobby, hours) {
    if (!hobby && !hours) {
      for (let key in cacheObj) {
        cacheObj[key] = 0;
      }
      return 'tracker has been reset!'
    } else {
      cacheObj[hobby] += hours;
      return cacheObj;
    }
  }
  return newFunc;
}

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}