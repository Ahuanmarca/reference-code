import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(0, numRows).map((r) => {
        return (
          <div className="row" key={r}>
            {range(0, numCols).map((c) => {
              return <div className="cell" key={c}>{`[${r}, ${c}]`}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;