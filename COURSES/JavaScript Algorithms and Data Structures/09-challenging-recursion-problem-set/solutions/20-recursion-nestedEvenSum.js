function nestedEvenSum (object) {
    // add whatever parameters you deem necessary - good luck!
    if (typeof(object) === 'number') return object;

    // keep track of sum -> let sum = 0
    // iterate object elements
    // if object is a number AND is even, add it to sum (ignore strings and booleans)
    // if object is an object...
    //      sum = sum + nestedEvenSum(object[key]);
    // return sum

    let sum = 0;
    for (key in object) {
        if (typeof(object[key]) === 'number' && object[key] % 2 === 0) sum += object[key];
        
        if (typeof(object[key]) === 'object') {
            sum += nestedEvenSum(object[key]);
        }

    }
    return sum;
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

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
