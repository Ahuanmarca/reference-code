import React from "react";

import VisuallyHidden from "./VisuallyHidden";

function ClickBallGame() {
  function handleBallClick(e) {
    alert("hello!");
  }
  return (
    <div className="wrapper">
      <button className="ball" onClick={handleBallClick}>
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>
    </div>
  );
}

export default ClickBallGame;
