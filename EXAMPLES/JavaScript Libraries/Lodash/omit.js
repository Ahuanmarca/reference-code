import _ from 'lodash';

const terra = {
  first: 'Terra',
  last: 'Lockheart',
  secret: 'This is private information',
  credentials: {
    username: 'esperlady',
    hash: 'asdf1234',
  },
  comments: [
    {
      id: 1,
      content: 'hello, world',
    },
    {
      id: 2,
      content: 'foo, bar, baz',
    }
  ],
}

// Omit the 'hash', which is nested inside credentials
_.omit(terra, ['secret', 'credentials.hash']);
