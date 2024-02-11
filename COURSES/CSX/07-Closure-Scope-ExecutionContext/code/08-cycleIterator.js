// ADD CODE HERE
function cycleIterator(array) {
  let index = 0;
  function newFunc() {
    const toReturn = array[index];
    if (index === array.length - 1) {
      index = -1;
    }
    index++;
    return toReturn;
  }
  return newFunc;
}


// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'