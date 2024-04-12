/* eslint-disable react/prop-types */
// import React from "react";
import Container from 'react-bootstrap/Container';
import AddGameButton from '../AddGameButton';

function AllGames({ games }) {


  return (
    <Container className='mt-3'>
      <h2>Select Games:</h2>
      <ul>
        {games.map((game) => (
          <li key={game._id} className="mb-1">
            {" "}
            <AddGameButton game={game} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default AllGames;
