/* eslint-disable react/prop-types */
// import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelectedGamesContext } from '../../contexts/gamesContext';

function GameCard({ game }) {
  const { removeGame } = useSelectedGamesContext()
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={game.image} />
      <Card.Body>
        <Card.Title>{ game.title }</Card.Title>
        <Card.Text>
          {game.description}
        </Card.Text>
        <Button onClick={() => removeGame(game._id)} variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
