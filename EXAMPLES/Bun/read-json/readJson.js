import data from "./package.json";

const foo = {
  name: data.name,           // => "bun"
  version: data.version,     // => "1.0.0"
  author: data.author.name,  // => "John Dough"
}

console.log(foo);

