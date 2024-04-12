import React from "react";
import Container from 'react-bootstrap/Container'
import SelectedGames from "../SelectedGames";
import AllGames from "../AllGames";
import games from '../../data/games';

function GamesSelectorContainer() {
  const [selectedGames, setSelectedGames] = React.useState([]);

  function addToSelectedGames(id) {
    const selectedGame = games.find((g) => g._id === id);
    const nextSelectedGames = [...selectedGames, selectedGame];
    setSelectedGames(nextSelectedGames);
  }

  function removeGame(id) {
    const nextSelectedGames = selectedGames.filter((game) => game._id !== id);
    setSelectedGames(nextSelectedGames);
  }

  return (
    <Container className='mt-3'>
      <SelectedGames selectedGames={selectedGames} removeGame={removeGame} />
      <AllGames games={games} addToSelectedGames={addToSelectedGames} />
    </Container>
  );
}

export default GamesSelectorContainer;
