// Generic Types

// Function without generics
function returnFirst(arr: any[]) {
  return arr[0];
}
returnFirst([37, 'hello', true]);

// Functoin with generics
function returnOne<T>(arr: T[]) {
  return arr[0];
}
returnOne<number>([37, 'hello', true]);




type Role = "admin" | "editor";
const roles: Array<Role> = ["admin", "editor"];
roles;

// Custom Generic Type
// We don't know the shape and/or type of the data
type DataStorage<T> = {
  storage: Array<T>;
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

textStorage;

// Generic Function
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const user = merge(
  { name: "Renzo" },
  { age: 41 },
);

user;