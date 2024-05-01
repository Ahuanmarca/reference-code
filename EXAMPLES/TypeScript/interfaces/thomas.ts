// interfaces, interface methods
// readonly, optional properties

interface Hero {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  greet: () => void;
  hello: () => void;
  speak(line: string): void;
}

const tom: Hero = {
  id: 1,
  first: 'Thomas',
  last: 'Anderson',
  nickname: 'Neo',
  greet: function() {
    this.nickname
     ? console.log(`hi, I'm ${this.first} "${this.nickname}" ${this.last}`)
     : console.log(`hi, I'm ${this.first} ${this.last}`);
  },
  hello: () => {
    console.log(`hi, I'm ${this.first} ${this.last}`);
  },
  speak(line) {
    console.log(`${this.first} says: ${line}`);
  }
}

tom.greet();
tom.hello();
tom.speak('I know kung fu');
