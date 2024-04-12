/* eslint-disable react/prop-types */
// import React from "react";
import GameCard from '../GameCard'
import Container from 'react-bootstrap/Container';
import { useSelectedGamesContext } from '../../contexts/gamesContext';

function SelectedGames() {

  const { globalSelectedGames } = useSelectedGamesContext()

  const style = {
    display: "flex",
  }

  return (
    <Container className='mt-3'>
      <h2>Selected Games</h2>
      <div style={style}>
        {globalSelectedGames.map((game) => {
          return (
            <GameCard key={game._id} game={game} />
          )
        })}
      </div>
    </Container>
  );
}

export default SelectedGames;
