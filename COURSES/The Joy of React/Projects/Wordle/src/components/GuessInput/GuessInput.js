import React from "react";

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess(() => "");
  }

  return (
    <>
      <form autoComplete="off" className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          autoComplete="false"
          disabled={disabled}
          required
          id="guess-input"
          type="text"
          value={guess}
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}" // replaces minLength / maxLength
          title="5 letter word"
          onChange={(e) => {
            const nextGuess = e.target.value;
            if (nextGuess.length > 5) return; // Redundancy
            setGuess(e.target.value.toUpperCase())
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
