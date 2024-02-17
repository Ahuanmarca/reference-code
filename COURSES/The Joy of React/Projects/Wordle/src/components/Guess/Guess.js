import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter ? letter : ""}</span>;
}

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);

  return (
    <div className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkedGuess ? checkedGuess[num].letter : undefined}
          status={checkedGuess ? checkedGuess[num].status : undefined}
        />
      ))}
    </div>
  );
}

export default Guess;
