import _ from 'lodash';

type User = {
  user: string,
  age: number,
}

const users: Array<User> = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'tex', age: 71 },
];

_.sortBy(users, [(user: User) => user.age]);
