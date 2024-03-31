type Person = {
  name: string,
  born: number,
}

const me: Person = {
  name: "Renzo",
  born: 1981,
}

me;

const data = {
  name: "John",
  born: 1970,
  status: "Missing",
}

const john: Person = data;
john;

"name" in data;
"surname" in data;
[1, 2, 3].includes(3);
