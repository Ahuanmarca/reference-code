/*
for/of loop with
Object.keys()
Object.values()
Object.entries()

Why is this better than using a for/in loop
*/

const book = {
    title: "The Fellowship of The Ring",
    author: "J. R. R. Tolkien",
    year: 1954,
}

console.log("for/of loop with Object.keys()")
for (c of Object.keys(book)) {
    console.log(" " + c);
}

console.log("for/of loop with Object.values()")
for (c of Object.values(book)) {
    console.log(" " + c);
}

console.log("for/of loop with Object.entries()")
for (c of Object.entries(book)) {
    console.log(c);
}
