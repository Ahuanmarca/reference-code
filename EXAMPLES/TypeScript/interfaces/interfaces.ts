// We use interfaces to describe the shape of objects
type Alignment = 'good' | 'neutral' | 'evil';

interface Character {
  readonly id: number; // readonly properties can't be changed
  first: string;
  last: string;
  nickname?: string; // optional properties
  alignment: Alignment;
}

const johnDoe: Character = {
  id: 1,
  first: 'John',
  last: 'Doe',
  alignment: 'good',
}

const johnWick: Character = {
  id: 2,
  first: 'John',
  last: 'Wick',
  nickname: 'Baba Yaga',
  alignment: 'neutral',
}

// Missing properties will throw an error
const bats: Character = {
  id: 4,
  first: 'Bruce',
  alignment: 'good',
}

// Changing a readonly property will throw an error
johnDoe.id = 2;
