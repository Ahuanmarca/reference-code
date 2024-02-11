/**
 * Write a function called stringifyNumbers which takes in an object 
 * and finds all of the values which are numbers and converts them to 
 * strings. Recursion would be a great way to solve this!
 */

function stringifyNumbers(object) {

    // Iterate object
    // If value is a number, convert it to string
    // If value is an object, pass it to stringifyNumbers()

    const newObject = {};
    for (let key in object) {
        if (typeof(object[key]) === 'number') {
            newObject[key] = object[key].toString();
        } else if (typeof(object[key]) === 'object' && Array.isArray(object[key]) === false) {
            newObject[key] = stringifyNumbers(object[key]);
        } else {
            newObject[key] = object[key];
        }
    }
    return newObject;
}


let obj1 = {
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

console.log(stringifyNumbers(obj1));

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