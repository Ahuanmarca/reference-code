// Extend an interface from multiple interfaces

interface Person {
  first: string;
  last: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: 'Junior' | 'Senior';
  languages: string[];
}

const roger: Engineer = {
  id: 1,
  first: 'Roger',
  last: 'Smith',
  email: 'roger@email.com',
  level: 'Senior',
  languages: ['JavaScript', 'TypeScript', 'Python'],
}
