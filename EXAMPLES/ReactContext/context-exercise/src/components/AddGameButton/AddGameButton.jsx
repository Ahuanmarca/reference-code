/* eslint-disable react/prop-types */
// import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelectedGamesContext } from '../../contexts/gamesContext';
import games from '../../data/games';

function AddGameButton({ game }) {
  const { addToSelectedGames } = useSelectedGamesContext();
  
  function addGame(e) {
    addToSelectedGames(games, e.target.value);
  }

  return (
    <Button value={game._id} onClick={addGame}>
      {game.title}
    </Button>
  );
}

export default AddGameButton;
