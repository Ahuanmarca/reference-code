import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import EndBanner from "../EndBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [active, setActive] = React.useState(true);
  const [won, setWon] = React.useState(false);

  React.useEffect(() => {
    if (guesses.at(-1) === answer) {
      setWon(() => true);
      setActive(() => false);
    }
    if (guesses.at(-1) !== answer && guesses.length >= 6) {
      setActive(() => false);
    }
  }, [guesses])

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(() => nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput disabled={!active} handleSubmitGuess={handleSubmitGuess} />
      {!active && <EndBanner won={won} guesses={guesses} answer={answer} />}
    </>
  );
}

export default Game;
