/**
 * Write a function called collectStrings which accepts 
 * an object and returns an array of all the values in 
 * the object that have a typeof string
 */

function collectStrings(object) {
    let strArr = [];

    for (let key in object) {
        if (typeof(object[key]) === 'string') {
            strArr.push(object[key])
        } else if (typeof(object[key]) === 'object') {
            const foo = collectStrings(object[key]);
            strArr = strArr.concat(collectStrings(object[key]));
        }
    }
    return strArr;
}

 const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                // thing: "renzo",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])