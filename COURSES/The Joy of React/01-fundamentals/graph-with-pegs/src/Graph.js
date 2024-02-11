import React from 'react';

import { range } from './utils';

function Graph({ from, to }) {
  return (
    <div className="graph">
      {range(from, to + 1, 10).map((n, i) => (
        <div className="peg" key={i}>{n}</div>
      ))}
    </div>
  );
}

export default Graph;