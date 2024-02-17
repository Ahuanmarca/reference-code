import React from "react";
import Guess from "../Guess";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          <Guess key={num} guess={guesses[num]} answer={answer} />
        )
      })}
    </div>
  );
}

export default GuessResults;
