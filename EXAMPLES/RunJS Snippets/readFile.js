import fs from 'fs';

const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('utf8')
    .split('\n');

readFileLines('readFile.js');