interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  alignment: "good" | "neutral" | "evil";
  sayHi: () => string;
}

const thomas: Person = {
  id: 1,
  first: "Thomas",
  last: "Anderson",
  alignment: "good",
  sayHi() {
    return `Hello, I'm ${this.first} ${this.last}`;
  },
};

console.log(thomas.sayHi());
