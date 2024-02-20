import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { sample } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { STATES } from "../../constants";
const { RUNNING, WON, LOST } = STATES;

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState(RUNNING);

  React.useEffect(() => {
    if (guesses.at(-1) === answer) setGameState(() => WON);
    if (guesses.at(-1) !== answer && guesses.length >= NUM_OF_GUESSES_ALLOWED)
      setGameState(() => LOST);
  }, [guesses]);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(() => nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        disabled={gameState !== RUNNING}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameState === WON && <WonBanner numberOfGuesses={guesses.length} />}
      {gameState === LOST && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
