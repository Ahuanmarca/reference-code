const obj1 = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
}

const obj2 = {
  hello: 'hello',
  bar: 'bar',
}

const obj3 = {
  world: 'world',
  baz: 'baz',
}

function substract(target, ...sources) {
  for (source of sources) {
    for (key in source) {
      delete obj1[key];
    }
  }
}

// console.log(obj1);
// substract(obj1, obj2, obj3);
// console.log(obj1);

function restrict(target, ...sources) {
  let found = 0;
  for (key in target) {
    found = 0;
    for (source of sources) {
      if (key in source) found++;
    }
    if (found === 0) delete target[key];
  }
}

console.log(obj1);
restrict(obj1, obj2, obj3);
console.log(obj1);
