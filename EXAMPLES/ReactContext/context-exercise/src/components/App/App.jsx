// import React from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from '../Navbar';
import GamesSelectorContainer from '../GamesSelectorContainer';
import { SelectedGamesProvider } from '../../contexts/gamesContext';

function App() {

  return (
    <Container>
    <Navbar />
    <SelectedGamesProvider>
      <GamesSelectorContainer />
    </SelectedGamesProvider>
    </Container>
  )
}

export default App;
