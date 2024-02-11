// A generator function that yields a range of integers
function* range(from, to) {
    for(let i = from; i <= to; i++) {
            yield i;
    }
}

const foo = range(1,10);
console.log(foo); // no funciona
