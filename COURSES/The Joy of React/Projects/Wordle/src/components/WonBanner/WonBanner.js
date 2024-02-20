import React from "react";
import Banner from "../Banner";

function WonBanner({ numberOfGuesses }) {
  const message = numberOfGuesses === 1
    ? '1 guess'
    : `${numberOfGuesses} guesses`

  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {message}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
